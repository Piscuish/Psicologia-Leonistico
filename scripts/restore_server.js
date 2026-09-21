const fs = require('fs');
const path = require('path');

let serverJs = fs.readFileSync('C:/psicologia-leonistico-backup/server.js', 'utf8');

// Ensure /js and root static /uploads are served
if (!serverJs.includes("app.use('/js'")) {
  serverJs = serverJs.replace("app.use('/uploads', express.static(UPLOADS_DIR", "app.use('/uploads', express.static(path.join(__dirname, 'uploads')));\napp.use('/js', express.static(path.join(__dirname, 'js')));\napp.use('/js', express.static(path.join(__dirname, 'public', 'js')));\napp.use('/uploads', express.static(UPLOADS_DIR");
}

fs.writeFileSync('C:/Pagina WEB/server.js', serverJs, 'utf8');
console.log('Restored clean server.js successfully!');
