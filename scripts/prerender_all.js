const fs = require('fs');
const path = require('path');

const dbPath = 'C:/Pagina WEB/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Helper to generate block HTML
function renderBlockHtml(b, meta = { pillClass: 'pill-blue', borderClass: 'card-border-blue', name: 'Ciclo' }) {
  const size = b.size || 'full';
  const titleAlign = b.titleAlign || 'left';
  const type = b.type || 'hero_banner';
  const photos = b.photosList || [];

  let html = `<div class="cycle-block-card size-${size} type-${type} ${meta.borderClass}" style="margin-bottom: 24px;">`;
  html += `  <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">`;
  if (b.badgeText || meta.name) {
    html += `    <span class="cycle-block-badge ${meta.pillClass}">${b.badgeText || meta.name}</span>`;
  }
  html += `    <h3 class="cycle-block-title" style="text-align: ${titleAlign}; margin: 8px 0;">${b.title}</h3>`;
  if (b.subtitle) {
    html += `    <div class="cycle-block-subtitle" style="text-align: ${titleAlign}; font-weight: 600; color: #475569; margin-bottom: 8px;">${b.subtitle}</div>`;
  }
  if (b.text) {
    html += `    <div class="cycle-block-text" style="text-align: ${titleAlign}; line-height: 1.6; color: #334155; margin-bottom: 16px;">${b.text}</div>`;
  }
  html += `  </div>`;

  if (photos && photos.length > 0) {
    html += `  <div class="block-gallery-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">`;
    photos.forEach(p => {
      html += `    <div class="gallery-photo-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">`;
      html += `      <img src="${p.url}" alt="${p.caption || b.title}" style="width: 100%; height: auto; display: block; object-fit: cover;" loading="lazy">`;
      if (p.caption) {
        html += `      <div class="photo-caption" style="padding: 8px 12px; background: #f8fafc; font-size: 0.85rem; color: #64748b;">${p.caption}</div>`;
      }
      html += `    </div>`;
    });
    html += `  </div>`;
  }

  html += `</div>`;
  return html;
}

// 1. Pre-render Guia Bienestar
const guiaBlocks = db.cycleBlocks.filter(b => b.cycleId === 'guia-bienestar');
let guiaHtml = `<div class="dynamic-blocks-rendered" style="margin-top: 24px;">\n`;
guiaBlocks.forEach(b => {
  guiaHtml += renderBlockHtml(b, { pillClass: 'pill-purple', borderClass: 'card-border-purple', name: 'Bienestar' }) + '\n';
});
guiaHtml += `</div>`;

function injectIntoFile(filePath, targetPattern, replacement) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.match(targetPattern)) {
    content = content.replace(targetPattern, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected pre-rendered content into: ${filePath}`);
  }
}

// Update guia-bienestar.html files
for (const p of ['C:/Pagina WEB/guia-bienestar.html', 'C:/Pagina WEB/public/guia-bienestar.html']) {
  if (!fs.existsSync(p)) continue;
  let c = fs.readFileSync(p, 'utf8');
  // Look for container
  if (c.includes('<div id="guiaBlocksList"')) {
    c = c.replace(/<div id="guiaBlocksList"[^>]*>[\s\S]*?<\/div>\s*<\/div>/m, `<div id="guiaBlocksList" class="cycle-blocks-list">\n${guiaHtml}\n</div></div>`);
    fs.writeFileSync(p, c, 'utf8');
    console.log('Pre-rendered blocks in:', p);
  }
}

// 2. Pre-render Promocion Prevencion
const promoBlocks = db.cycleBlocks.filter(b => b.cycleId === 'promocion-prevencion');
let promoHtml = `<div class="dynamic-blocks-rendered" style="margin-top: 24px;">\n`;
promoBlocks.forEach(b => {
  promoHtml += renderBlockHtml(b, { pillClass: 'pill-teal', borderClass: 'card-border-teal', name: 'Promoción y Prevención' }) + '\n';
});
promoHtml += `</div>`;

for (const p of ['C:/Pagina WEB/promocion-prevencion.html', 'C:/Pagina WEB/public/promocion-prevencion.html']) {
  if (!fs.existsSync(p)) continue;
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('<div id="promoBlocksList"')) {
    c = c.replace(/<div id="promoBlocksList"[^>]*>[\s\S]*?<\/div>\s*<\/div>/m, `<div id="promoBlocksList" class="cycle-blocks-list">\n${promoHtml}\n</div></div>`);
    fs.writeFileSync(p, c, 'utf8');
    console.log('Pre-rendered blocks in:', p);
  }
}

// 3. Pre-render Cycles
const cycleMetaMap = {
  'primera-infancia': { key: 'primera_infancia', pillClass: 'pill-pink', borderClass: 'card-border-pink', name: 'Primera Infancia' },
  'infantil': { key: 'infantil', pillClass: 'pill-teal', borderClass: 'card-border-teal', name: 'Ciclo Infantil' },
  'basico': { key: 'basico', pillClass: 'pill-yellow', borderClass: 'card-border-yellow', name: 'Ciclo Básico' },
  'fundamental': { key: 'fundamental', pillClass: 'pill-purple', borderClass: 'card-border-purple', name: 'Ciclo Fundamental' },
  'exploratorio': { key: 'exploratorio', pillClass: 'pill-blue', borderClass: 'card-border-blue', name: 'Ciclo Exploratorio' },
  'especializado': { key: 'especializado', pillClass: 'pill-green', borderClass: 'card-border-green', name: 'Ciclo Especializado' }
};

for (const slug in cycleMetaMap) {
  const meta = cycleMetaMap[slug];
  const blocks = db.cycleBlocks.filter(b => b.cycleId === slug || b.cycleId === meta.key);
  let cycleBlocksHtml = `<div class="dynamic-blocks-rendered" style="margin-top: 24px;">\n`;
  blocks.forEach(b => {
    cycleBlocksHtml += renderBlockHtml(b, meta) + '\n';
  });
  cycleBlocksHtml += `</div>`;

  for (const dir of ['C:/Pagina WEB/ciclos', 'C:/Pagina WEB/public/ciclos']) {
    const filePath = path.join(dir, `${slug}.html`);
    if (fs.existsSync(filePath)) {
      let c = fs.readFileSync(filePath, 'utf8');
      if (c.includes('<div id="cycleBlocksContainer"')) {
        c = c.replace(/<div id="cycleBlocksContainer"[^>]*>[\s\S]*?<\/div>\s*<\/div>/m, `<div id="cycleBlocksContainer" class="cycle-blocks-container">\n${cycleBlocksHtml}\n</div></div>`);
        fs.writeFileSync(filePath, c, 'utf8');
        console.log(`Pre-rendered cycle blocks in: ${filePath}`);
      }
    }
  }
}

console.log('All pages pre-rendered successfully!');
