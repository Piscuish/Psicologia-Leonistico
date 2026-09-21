const fs = require('fs');
const path = require('path');

const dbPath = 'C:/Pagina WEB/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Format JSON for inserting as JS literal
const formattedBlocks = JSON.stringify(db.cycleBlocks, null, 2);
const formattedCycles = JSON.stringify(db.cyclesList, null, 2);
const formattedWorkshops = JSON.stringify(db.calendarWorkshops, null, 2);
const formattedPsychologists = JSON.stringify(db.psychologists, null, 2);
const formattedImages = JSON.stringify(db.siteImages, null, 2);
const formattedNavItems = JSON.stringify(db.navItems, null, 2);

function updateFileDefaults(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace DEFAULT_CYCLE_BLOCKS
  content = content.replace(/const DEFAULT_CYCLE_BLOCKS = \[[\s\S]*?\n\];/m, `const DEFAULT_CYCLE_BLOCKS = ${formattedBlocks};`);
  
  // Replace DEFAULT_CYCLES_LIST
  content = content.replace(/const DEFAULT_CYCLES_LIST = \[[\s\S]*?\n\];/m, `const DEFAULT_CYCLES_LIST = ${formattedCycles};`);

  // Replace DEFAULT_CALENDAR_WORKSHOPS
  content = content.replace(/const DEFAULT_CALENDAR_WORKSHOPS = \[[\s\S]*?\n\];/m, `const DEFAULT_CALENDAR_WORKSHOPS = ${formattedWorkshops};`);

  // Replace DEFAULT_PSYCHOLOGISTS
  content = content.replace(/const DEFAULT_PSYCHOLOGISTS = \[[\s\S]*?\n\];/m, `const DEFAULT_PSYCHOLOGISTS = ${formattedPsychologists};`);

  // Replace DEFAULT_SITE_IMAGES
  content = content.replace(/const DEFAULT_SITE_IMAGES = \{[\s\S]*?\n\};/m, `const DEFAULT_SITE_IMAGES = ${formattedImages};`);

  // Replace DEFAULT_NAV_ITEMS
  content = content.replace(/const DEFAULT_NAV_ITEMS = \[[\s\S]*?\n\];/m, `const DEFAULT_NAV_ITEMS = ${formattedNavItems};`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated defaults in: ${filePath}`);
}

updateFileDefaults('C:/Pagina WEB/app.js');
updateFileDefaults('C:/Pagina WEB/public/app.js');
updateFileDefaults('C:/Pagina WEB/server.js');

console.log('Defaults synchronization complete!');
