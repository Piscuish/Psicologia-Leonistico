const fs = require('fs');
const path = require('path');

const remoteHtml = fs.readFileSync('C:/Pagina WEB/scripts/remote_index.html', 'utf8');
const localHtml = fs.readFileSync('C:/Pagina WEB/index.html', 'utf8');

console.log('=== COMPARING REMOTE HOME VS LOCAL HOME ===');
console.log('Remote length:', remoteHtml.length, '| Local length:', localHtml.length);

// 1. Extract and compare image sources
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
const remoteImages = [];
let match;
while ((match = imgRegex.exec(remoteHtml)) !== null) {
  remoteImages.push(match[1]);
}

const localImages = [];
while ((match = imgRegex.exec(localHtml)) !== null) {
  localImages.push(match[1]);
}

console.log('\n--- Remote <img> Sources ---');
console.log(remoteImages);

console.log('\n--- Local <img> Sources ---');
console.log(localImages);

// 2. Extract and compare Section / Element IDs
const idRegex = /id=["']([^"']+)["']/gi;
const remoteIds = [];
while ((match = idRegex.exec(remoteHtml)) !== null) {
  remoteIds.push(match[1]);
}

const localIds = [];
while ((match = idRegex.exec(localHtml)) !== null) {
  localIds.push(match[1]);
}

console.log('\n--- Missing IDs in Local ---');
const missingIds = remoteIds.filter(id => !localIds.includes(id));
console.log(missingIds);

// 3. Compare Head tags (links, scripts, meta)
console.log('\n--- Scripts & Styles comparison ---');
const remoteScripts = remoteHtml.match(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi) || [];
const localScripts = localHtml.match(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi) || [];
console.log('Remote scripts:', remoteScripts);
console.log('Local scripts:', localScripts);

// 4. Check rendered DB site images and psychologists
const db = JSON.parse(fs.readFileSync('C:/Pagina WEB/data/db.json', 'utf8'));
console.log('\n--- DB Site Images ---');
console.log(db.siteImages);
console.log('\n--- DB Psychologists ---');
console.log(db.psychologists);
