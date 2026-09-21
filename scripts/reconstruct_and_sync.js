const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const PROD_BASE = 'https://psicologialeonistico.vercel.app';
const PROJECT_ROOT = 'C:/Pagina WEB';
const UPLOADS_DIR = path.join(PROJECT_ROOT, 'uploads');
const PUBLIC_UPLOADS_DIR = path.join(PROJECT_ROOT, 'public/uploads');

if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_UPLOADS_DIR)) fs.mkdirSync(PUBLIC_UPLOADS_DIR, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        fetchUrl(redirectUrl).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        return resolve({ status: res.statusCode, data: null });
      }
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        resolve({ status: 200, buffer: Buffer.concat(chunks), text: Buffer.concat(chunks).toString('utf8'), headers: res.headers });
      });
    }).on('error', reject);
  });
}

function downloadBinary(url, destPath) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        downloadBinary(redirectUrl, destPath).then(resolve);
        return;
      }
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(destPath);
        res.pipe(stream);
        stream.on('finish', () => resolve(true));
      } else {
        console.warn(`Failed to download ${url}: status ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error(`Error downloading ${url}: ${e.message}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log('=== STEP 1: Fetching live API database from production ===');
  const apiRes = await fetchUrl(`${PROD_BASE}/api/data`);
  let prodDb = null;
  if (apiRes.status === 200) {
    try {
      prodDb = JSON.parse(apiRes.text);
      console.log(`Production DB loaded: ${prodDb.blocks ? prodDb.blocks.length : 0} blocks, ${prodDb.cycles ? prodDb.cycles.length : 0} cycles, ${prodDb.workshops ? prodDb.workshops.length : 0} workshops.`);
      fs.writeFileSync(path.join(PROJECT_ROOT, 'data/vercel_live_db.json'), JSON.stringify(prodDb, null, 2), 'utf8');
    } catch (e) {
      console.error('Failed to parse production db.json', e.message);
    }
  }

  // Known routes to crawl
  const routesToCrawl = [
    '/',
    '/encuentros',
    '/guia-bienestar',
    '/promocion-prevencion',
    '/admin',
    '/ciclos/primera-infancia',
    '/ciclos/infantil',
    '/ciclos/basico',
    '/ciclos/fundamental',
    '/ciclos/exploratorio',
    '/ciclos/especializado'
  ];

  console.log('=== STEP 2: Crawling production routes ===');
  const crawledPages = {};
  for (const route of routesToCrawl) {
    const pageUrl = `${PROD_BASE}${route}`;
    console.log(`Crawling ${pageUrl}...`);
    try {
      const pageRes = await fetchUrl(pageUrl);
      if (pageRes.status === 200) {
        crawledPages[route] = pageRes.text;
        console.log(`✓ Fetched ${route} (${(pageRes.buffer.length / 1024).toFixed(1)} KB)`);
      } else {
        console.warn(`! Route ${route} returned status ${pageRes.status}`);
      }
    } catch (e) {
      console.error(`! Route ${route} failed: ${e.message}`);
    }
  }

  console.log('=== STEP 3: Discovering and downloading all external images & assets ===');
  const foundImageUrls = new Set();

  // 1. From DB
  function extractImagesFromObject(obj) {
    if (!obj) return;
    if (typeof obj === 'string') {
      if (obj.match(/^https?:\/\/.*\.(png|jpg|jpeg|gif|webp|svg|ico)/i) || obj.includes('googleusercontent.com') || obj.includes('vercel-storage.com')) {
        foundImageUrls.add(obj);
      }
    } else if (Array.isArray(obj)) {
      obj.forEach(extractImagesFromObject);
    } else if (typeof obj === 'object') {
      for (const k in obj) {
        extractImagesFromObject(obj[k]);
      }
    }
  }
  if (prodDb) extractImagesFromObject(prodDb);

  // 2. From Crawled HTML
  for (const route in crawledPages) {
    const html = crawledPages[route];
    const imgMatches = html.matchAll(/src=["'](https?:\/\/[^"']+)["']/gi);
    for (const m of imgMatches) foundImageUrls.add(m[1]);
    const hrefMatches = html.matchAll(/href=["'](https?:\/\/[^"']+\.(png|jpg|jpeg|gif|webp|svg|ico)[^"']*)["']/gi);
    for (const m of hrefMatches) foundImageUrls.add(m[1]);
    const bgMatches = html.matchAll(/url\(["']?(https?:\/\/[^"')]+)["']?\)/gi);
    for (const m of bgMatches) foundImageUrls.add(m[1]);
  }

  // 3. Known static images in local repo / backup
  const backupUploads = 'C:/psicologia-leonistico-backup/uploads';
  if (fs.existsSync(backupUploads)) {
    const backupFiles = fs.readdirSync(backupUploads);
    for (const bf of backupFiles) {
      const srcFile = path.join(backupUploads, bf);
      fs.copyFileSync(srcFile, path.join(UPLOADS_DIR, bf));
      fs.copyFileSync(srcFile, path.join(PUBLIC_UPLOADS_DIR, bf));
    }
    console.log(`Copied ${backupFiles.length} pre-backed up assets into uploads.`);
  }

  console.log(`Found ${foundImageUrls.size} unique external image URLs.`);

  const urlToLocalMap = {};

  let dlIndex = 0;
  for (const imgUrl of foundImageUrls) {
    dlIndex++;
    // Determine filename
    let filename = '';
    const cleanUrl = imgUrl.split('?')[0];
    const baseName = path.basename(cleanUrl);
    if (baseName && baseName.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i)) {
      filename = baseName;
    } else {
      let ext = '.png';
      if (imgUrl.includes('.ico') || imgUrl.includes('favicon')) ext = '.ico';
      else if (imgUrl.includes('.jpg') || imgUrl.includes('.jpeg')) ext = '.jpg';
      filename = `asset_${Date.now()}_${dlIndex}${ext}`;
    }

    const localUploadPath = path.join(UPLOADS_DIR, filename);
    const localPublicUploadPath = path.join(PUBLIC_UPLOADS_DIR, filename);

    if (!fs.existsSync(localUploadPath) || fs.statSync(localUploadPath).size === 0) {
      console.log(`Downloading (${dlIndex}/${foundImageUrls.size}): ${imgUrl} -> ${filename}`);
      const success = await downloadBinary(imgUrl, localUploadPath);
      if (success) {
        fs.copyFileSync(localUploadPath, localPublicUploadPath);
      }
    } else {
      if (!fs.existsSync(localPublicUploadPath)) {
        fs.copyFileSync(localUploadPath, localPublicUploadPath);
      }
    }

    urlToLocalMap[imgUrl] = `/uploads/${filename}`;
  }

  console.log('=== STEP 4: Localizing Database and Files ===');
  // Specific mappings for known Google Usercontent links
  urlToLocalMap['/uploads/site_favicon.ico'] = '/uploads/site_favicon.ico';
  urlToLocalMap['/uploads/site_logo_official.png'] = '/uploads/site_logo_official.png';
  urlToLocalMap['/uploads/site_hero_official.png'] = '/uploads/site_hero_official.png';
  urlToLocalMap['/uploads/site_welcome_official.png'] = '/uploads/site_welcome_official.png';
  urlToLocalMap['/uploads/site_about_official.png'] = '/uploads/site_about_official.png';

  // Localize JSON database
  if (prodDb) {
    let dbStr = JSON.stringify(prodDb, null, 2);
    for (const remoteUrl in urlToLocalMap) {
      dbStr = dbStr.split(remoteUrl).join(urlToLocalMap[remoteUrl]);
    }
    fs.writeFileSync(path.join(PROJECT_ROOT, 'data/db.json'), dbStr, 'utf8');
    fs.writeFileSync(path.join(PROJECT_ROOT, 'public/data/db.json'), dbStr, 'utf8');
    console.log('Synchronized data/db.json and public/data/db.json with production.');
  }

  // Replace URLs across project files
  function replaceInAllFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'uploads') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        replaceInAllFiles(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.css'))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let changed = false;
        for (const remoteUrl in urlToLocalMap) {
          if (content.includes(remoteUrl)) {
            content = content.split(remoteUrl).join(urlToLocalMap[remoteUrl]);
            changed = true;
          }
        }
        // Remove preconnect/dns-prefetch to googleusercontent
        const reg = /[ \t]*<link rel="(preconnect|dns-prefetch)" href="https:\/\/lh3\.googleusercontent\.com"[^>]*>\r?\n?/g;
        if (reg.test(content)) {
          content = content.replace(reg, '');
          changed = true;
        }
        if (changed) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated localized references in: ${fullPath}`);
        }
      }
    }
  }

  replaceInAllFiles(PROJECT_ROOT);

  console.log('=== STEP 5: Verifying Cycle Content & Pre-rendering ===');
  // Load updated db
  const localDb = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'data/db.json'), 'utf8'));
  console.log(`Database has ${localDb.cycles ? localDb.cycles.length : 0} cycles and ${localDb.blocks ? localDb.blocks.length : 0} dynamic blocks.`);

  // Verify all 6 cycle pages exist and have markup
  const cycleSlugs = ['primera-infancia', 'infantil', 'basico', 'fundamental', 'exploratorio', 'especializado'];
  for (const slug of cycleSlugs) {
    const cycleFilePath = path.join(PROJECT_ROOT, `ciclos/${slug}.html`);
    const publicCycleFilePath = path.join(PROJECT_ROOT, `public/ciclos/${slug}.html`);
    const cycleData = (localDb.cycles || []).find(c => c.slug === slug || c.id === slug);
    console.log(`Cycle [${slug}]: DB entry exists? ${!!cycleData}. Local file exists? ${fs.existsSync(cycleFilePath)}`);
  }

  console.log('=== Reconstruct and Sync completed successfully! ===');
}

main().catch(console.error);
