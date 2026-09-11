const fs = require('fs');
const path = require('path');

fs.copyFileSync('app.js', 'public/app.js');
console.log('app.js -> public/app.js: Synced');

const srcDir = process.cwd();
const destDir = 'C:\\Users\\User\\Downloads\\Psicologia-Leonistico-actualizado';

function copyRecursive(src, dst) {
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      if (file !== 'node_modules' && file !== '.git') {
        copyRecursive(path.join(src, file), path.join(dst, file));
      }
    }
  } else {
    fs.copyFileSync(src, dst);
  }
}

copyRecursive(srcDir, destDir);
console.log('All files synced to Downloads folder successfully');
