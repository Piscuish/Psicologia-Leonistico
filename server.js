/**
 * Servidor Web Service - Psicoorientación Escolar
 * Colegio Leonístico La Merced
 * Compatible con ejecución local y despliegue en Render.com
 * Incluye Base de Datos Centralizada para sincronización entre múltiples equipos
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares (Soporte para presentaciones e imágenes de hasta 25MB)
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Bloquear acceso público genérico a admin.html o /admin (redirigir al inicio)
app.get(['/admin', '/admin.html', '/panel', '/login'], (req, res) => {
  res.redirect('/');
});

// Servir uploads con cache inmutable de 30 días
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR, {
  maxAge: '30d',
  immutable: true
}));

// Servir archivos estáticos con ETag y encabezados de caché optimizados para CDN
app.use(express.static(path.join(__dirname, 'public'), {
  etag: true,
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (filePath.endsWith('.css') || filePath.endsWith('.js')) {
      res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    } else if (/\.(jpg|jpeg|png|gif|svg|webp|ico|woff2|woff|ttf)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    }
  }
}));

// Helper para guardar imágenes Base64 automáticamente en disco /uploads/
function saveBase64ToFile(base64Str, prefix = 'img') {
  if (!base64Str || typeof base64Str !== 'string' || !base64Str.startsWith('data:image/')) {
    return base64Str;
  }
  try {
    const matches = base64Str.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
    if (!matches) return base64Str;
    const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
    const filename = `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filePath, Buffer.from(matches[2], 'base64'));
    const rootUploadsPath = path.join(__dirname, 'uploads', filename);
    try {
      if (fs.existsSync(path.join(__dirname, 'uploads'))) {
        fs.copyFileSync(filePath, rootUploadsPath);
      }
    } catch (_) {}
    return `/uploads/${filename}`;
  } catch (err) {
    console.error('Error guardando imagen base64:', err);
    return base64Str;
  }
}

// ============================================================
// BASE DE DATOS CENTRALIZADA EN ARCHIVO JSON (data/db.json)
// ============================================================

const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = isVercel ? '/tmp' : path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Si corre en Vercel, copiar la semilla de data/db.json a /tmp/db.json si no existe
if (isVercel && !fs.existsSync(DB_FILE)) {
  const seedFile = path.join(__dirname, 'data', 'db.json');
  if (fs.existsSync(seedFile)) {
    try {
      fs.copyFileSync(seedFile, DB_FILE);
    } catch (e) {
      console.warn('Could not seed /tmp/db.json:', e.message);
    }
  }
}

const DEFAULT_CALENDAR_WORKSHOPS = [
  {
    id: 1,
    month: "SEPTIEMBRE",
    monthPillClass: "pill-pink",
    borderClass: "card-border-pink",
    date: "25 DE SEPTIEMBRE",
    grades: "J° Y T°",
    title: "ACOMPAÑO A MI HIJO A DESCUBRIR QUIEN ES",
    description: "Espacio formativo para familias de Jardín y Transición: pautas para el reconocimiento de la identidad infantil, desarrollo del autoconcepto, estímulo de la curiosidad y acompañamiento afectivo en los primeros años escolares.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 2,
    month: "OCTUBRE",
    monthPillClass: "pill-teal",
    borderClass: "card-border-teal",
    date: "23 DE OCTUBRE",
    grades: "4°",
    title: "FORTALECIENDO LA AUTOESTIMA Y EL AUTOCONCEPTO",
    description: "Estrategias para que los estudiantes de 4° grado desarrollen seguridad emocional, valoración positiva de sus capacidades, tolerancia a la frustración y confianza en su entorno familiar.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 3,
    month: "OCTUBRE",
    monthPillClass: "pill-teal",
    borderClass: "card-border-teal",
    date: "27 DE OCTUBRE",
    grades: "1°-2°",
    title: "ACOMPAÑO A MI HIJO A CRECER JUNTO A LOS DEMÁS",
    description: "Taller enfocado en habilidades sociales para 1° y 2°: empatía, convivencia sana, resolución pacífica de desacuerdos cotidianos y fortalecimiento de lazos de amistad en el aula.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 4,
    month: "NOVIEMBRE",
    monthPillClass: "pill-purple",
    borderClass: "card-border-purple",
    date: "13 DE NOVIEMBRE",
    grades: "3°",
    title: "LO QUE HAGO TAMBIÉN EDUCA",
    description: "El poder del ejemplo y el modelamiento en casa: cómo las acciones, hábitos de comunicación y respuestas emocionales de los padres educan y guían el comportamiento de los niños de 3° grado.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 5,
    month: "NOVIEMBRE",
    monthPillClass: "pill-purple",
    borderClass: "card-border-purple",
    date: "18 DE NOVIEMBRE",
    grades: "5° Y 6°",
    title: "CUANDO CREEMOS EN ELLOS, ELLOS APRENDEN A CREER EN SÍ MISMOS",
    description: "Acompañamiento en la transición de primaria a secundaria: fortalecimiento de la autonomía, seguridad personal, adaptación a nuevos retos académicos y gestión del cambio en la preadolescencia.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 6,
    month: "ENERO",
    monthPillClass: "pill-orange",
    borderClass: "card-border-orange",
    date: "29 DE ENERO",
    grades: "8° Y 7°",
    title: "CUANDO HABLAR TAMBIÉN ES CUIDAR",
    description: "Comunicación asertiva con adolescentes de 7° y 8°: escucha activa sin juzgar, apertura de canales de confianza en el hogar y prevención ante situaciones de riesgo y presión social.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 7,
    month: "ENERO",
    monthPillClass: "pill-orange",
    borderClass: "card-border-orange",
    date: "30 DE ENERO",
    grades: "9°",
    title: "VINCULO CONFIANZA Y PREVENCIÓN",
    description: "Prevención en el hogar para 9° grado: detección temprana de factores de riesgo psicoactivos y emocionales, redes de apoyo familiar y construcción de límites claros con afecto.",
    slidesUrl: "",
    slidesName: ""
  },
  {
    id: 8,
    month: "FEBRERO",
    monthPillClass: "pill-blue",
    borderClass: "card-border-blue",
    date: "12 DE FEBRERO",
    grades: "10° Y 11°",
    title: "CONSTRUYENDO MI PROYECTO DE VIDA",
    description: "Orientación vocacional y toma de decisiones para los grados 10° y 11°: clarificación de metas profesionales, manejo de la ansiedad vocacional y apoyo de los padres en la etapa preuniversitaria.",
    slidesUrl: "",
    slidesName: ""
  }
];

const DEFAULT_IMAGES = {
  logo: '/uploads/site_logo_1788739866816.png',
  welcome: 'https://lh3.googleusercontent.com/sitesv/AG8ngQWOyxLk67vCI15BlZoCjOwd8xUiVdKQzLu-M2WJcEPpTf9i3QDpCzc1-5m6X-sKqpvyWPGZBwQ-rH8UhgQL7YTxjIlxDFe_bipo6xrnJX-R5AzoEojbfXeILt4DV4eHhLkoRtPmt0qDN9i4vhtAbDolgStj2fPdU9XVS2h5y405j0qv0gtNpOby2sONDNOeFMCsNGdXiYbURk_wJfVERZBegFn7tlsmLq3pjw8f=w1280',
  about: 'https://lh3.googleusercontent.com/sitesv/AG8ngQXTnHzijkLW5x4q0oxIMOi07YzG-IBG1OfPXeoVkIVB8fjkFXyd17Exs0GpjRWuO_ve89ISCOVUerGrrxM5Btnf5tup2wv79zMnKOoluKmpvA0bbZU3sVSnjk80O_PqvnpU7L_xlejXLWd0rR4xWkxGQj7g0dTAeH3vz104NNIAC_EwotDlnekiU7aMZOxbjrQAZ56qxhieVbVysrZ75FKa5z5OY7hICFCfX1Ptwyo=w1280'
};

const DEFAULT_PSYCHOLOGISTS = [
  {
    id: 1,
    name: "Nancy Rocío Torres Silva",
    badge: "PSICÓLOGA BACHILLERATO",
    badgeClass: "badge-blue",
    bgClass: "bg-blue",
    emoji: "👩‍💼",
    role: "Orientación Escolar y Psicológica - Bachillerato",
    desc: "Acompañamiento integral a estudiantes de grados 6° a 11°. Especialista en orientación vocacional, prevención de riesgos psicosociales, proyecto de vida y fortalecimiento de habilidades socioemocionales.",
    email: "orientacion.bachillerato@leonistico.edu.co"
  },
  {
    id: 2,
    name: "María Isabel Rodríguez",
    badge: "PSICÓLOGA PRIMARIA",
    badgeClass: "badge-pink",
    bgClass: "bg-pink",
    emoji: "👩‍🏫",
    role: "Orientación Escolar y Psicológica - Primaria y Preescolar",
    desc: "Acompañamiento psicoeducativo y emocional a niños y familias de Jardín, Transición y grados 1° a 5°. Especialista en pautas de crianza positiva, desarrollo infantil y adaptación escolar.",
    email: "orientacion.primaria@leonistico.edu.co"
  }
];

const DEFAULT_CYCLE_BLOCKS = [];

const DEFAULT_NAV_ITEMS = [
  {
    id: "nav_inicio",
    title: "Inicio",
    url: "/",
    icon: "home",
    type: "dropdown",
    order: 1,
    isSystem: true,
    children: [
      { id: "sub_portada", title: "Portada Principal", url: "/", icon: "home", order: 1 },
      { id: "sub_quienes_somos", title: "¿Quiénes Somos?", url: "/#quienes-somos", icon: "heart-handshake", order: 2 }
    ]
  },
  {
    id: "nav_encuentros",
    title: "Encuentros Familiares",
    url: "/encuentros",
    icon: "users",
    type: "link",
    order: 2,
    isSystem: true
  },
  {
    id: "nav_ciclos",
    title: "Ciclos",
    url: "#",
    icon: "layers",
    type: "dropdown",
    order: 3,
    isSystem: true,
    isCyclesDropdown: true
  }
];

const DEFAULT_CYCLES_LIST = [
  {
    "key": "primera_infancia",
    "slug": "primera-infancia",
    "name": "Primera Infancia",
    "grades": "JARDÍN Y TRANSICIÓN",
    "badgeText": "J y T",
    "pillClass": "pill-pink",
    "borderClass": "card-border-pink",
    "icon": "🌸",
    "subtitle": "Espacio formativo y de acompañamiento socioemocional para las familias y estudiantes de los primeros años escolares.",
    "order": 1,
    "pageUrl": "/ciclos/primera-infancia",
    "heroBgImage": "/uploads/hero_primera_infancia_1788740308704_gb5dj.jpg"
  },
  {
    "key": "infantil",
    "slug": "infantil",
    "name": "Ciclo Infantil",
    "grades": "1°, 2° Y 3°",
    "badgeText": "1, 2 y 3",
    "pillClass": "pill-teal",
    "borderClass": "card-border-teal",
    "icon": "🌱",
    "subtitle": "Acompañamiento socioemocional y fortalecimiento de la convivencia, empatía y habilidades de aprendizaje.",
    "order": 2,
    "pageUrl": "/ciclos/infantil",
    "heroBgImage": ""
  },
  {
    "key": "basico",
    "slug": "basico",
    "name": "Ciclo Básico",
    "grades": "4° Y 5°",
    "badgeText": "4 y 5",
    "pillClass": "pill-yellow",
    "borderClass": "card-border-yellow",
    "icon": "📘",
    "subtitle": "Orientación en hábitos de estudio, autonomía escolar y desarrollo integral de preadolescentes.",
    "order": 3,
    "pageUrl": "/ciclos/basico",
    "heroBgImage": ""
  },
  {
    "key": "fundamental",
    "slug": "fundamental",
    "name": "Ciclo Fundamental",
    "grades": "6° Y 7°",
    "badgeText": "6 y 7",
    "pillClass": "pill-purple",
    "borderClass": "card-border-purple",
    "icon": "🔮",
    "subtitle": "Transición a la secundaria, gestión de emociones, prevención y fortalecimiento de la autoestima.",
    "order": 4,
    "pageUrl": "/ciclos/fundamental",
    "heroBgImage": ""
  },
  {
    "key": "exploratorio",
    "slug": "exploratorio",
    "name": "Ciclo Exploratorio",
    "grades": "8° Y 9°",
    "badgeText": "8 y 9",
    "pillClass": "pill-blue",
    "borderClass": "card-border-blue",
    "icon": "🧭",
    "subtitle": "Comunicación asertiva, prevención de riesgos psicosociales y construcción de relaciones saludables.",
    "order": 5,
    "pageUrl": "/ciclos/exploratorio",
    "heroBgImage": "/uploads/hero_exploratorio_1788740308711_wv1w9.jpg"
  },
  {
    "key": "especializado",
    "slug": "especializado",
    "name": "Ciclo Especializado",
    "grades": "10° Y 11°",
    "badgeText": "10 y 11",
    "pillClass": "pill-green",
    "borderClass": "card-border-green",
    "icon": "🎓",
    "subtitle": "Orientación vocacional, preparación para la educación superior y consolidación del proyecto de vida.",
    "order": 6,
    "pageUrl": "/ciclos/especializado",
    "heroBgImage": ""
  },
  {
    "key": "cycle_1788358007488",
    "slug": "ciclo-juvenil-pro",
    "name": "Ciclo Juvenil Pro",
    "grades": "9°, 10° y 11°",
    "badgeText": "9 10 y 11",
    "pillClass": "pill-pink",
    "borderClass": "card-border-pink",
    "icon": "🎓",
    "subtitle": "Espacio formativo y de orientación escolar.",
    "order": 7,
    "pageUrl": "/ciclos/ciclo-juvenil-pro",
    "heroBgImage": ""
  }
];

const DEFAULT_CUSTOM_PAGES = [];

function getInitialDb() {
  return {
    navItems: DEFAULT_NAV_ITEMS,
    cyclesList: DEFAULT_CYCLES_LIST,
    customPages: DEFAULT_CUSTOM_PAGES,
    calendarWorkshops: DEFAULT_CALENDAR_WORKSHOPS,
    siteImages: DEFAULT_IMAGES,
    psychologists: DEFAULT_PSYCHOLOGISTS,
    cycleBlocks: [],
    suggestions: [],
    analytics: {
      totalVisits: 0,
      uniqueSessions: 0,
      lastVisitDate: new Date().toLocaleDateString('es-CO'),
      tabs: { inicio: 0, encuentros: 0, ciclos: 0 },
      cycles: {
        primera_infancia: 0,
        infantil: 0,
        basico: 0,
        fundamental: 0,
        exploratorio: 0,
        especializado: 0
      },
      logs: []
    },
    adminPassword: '123',
    adminSlug: 'admin451200'
  };
}

function initDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(getInitialDb(), null, 2), 'utf-8');
  }
}

function readDb() {
  try {
    initDb();
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const db = JSON.parse(raw);
    let modified = false;

    if (!db.navItems || !Array.isArray(db.navItems) || db.navItems.length === 0) {
      db.navItems = DEFAULT_NAV_ITEMS;
      modified = true;
    }
    if (!db.cyclesList || !Array.isArray(db.cyclesList) || db.cyclesList.length === 0) {
      db.cyclesList = DEFAULT_CYCLES_LIST;
      modified = true;
    }
    if (!db.customPages || !Array.isArray(db.customPages)) {
      db.customPages = DEFAULT_CUSTOM_PAGES;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
    }

    return db;
  } catch (err) {
    console.error('Error leyendo base de datos JSON:', err);
    return getInitialDb();
  }
}

function saveDb(data) {
  try {
    initDb();
    data.version = Date.now().toString();
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error guardando base de datos JSON:', err);
    return false;
  }
}

// Inicializar DB al arrancar
readDb();

// ============================================================
// API REST CENTRALIZADA PARA SINCRONIZACIÓN EN TIEMPO REAL
// ============================================================

// Middleware para evitar que los navegadores guarden en caché datos de API desactualizados
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// 0. Comprobación ultra-ligera de versión (~30 bytes para ahorrar datos en Vercel)
app.get('/api/version', (req, res) => {
  const db = readDb();
  res.setHeader('Cache-Control', 'no-cache, private');
  res.json({ v: db.version || '1' });
});

// 1. Obtener todos los datos del portal (con soporte ETag y 304 Not Modified)
app.get('/api/data', (req, res) => {
  const db = readDb();
  const version = db.version || '1';
  if (req.headers['if-none-match'] === `"${version}"`) {
    return res.status(304).end();
  }
  res.setHeader('ETag', `"${version}"`);
  res.setHeader('Cache-Control', 'no-cache, private');
  res.json({
    version: version,
    navItems: db.navItems || DEFAULT_NAV_ITEMS,
    cyclesList: db.cyclesList || DEFAULT_CYCLES_LIST,
    customPages: db.customPages || DEFAULT_CUSTOM_PAGES,
    calendarWorkshops: db.calendarWorkshops || DEFAULT_CALENDAR_WORKSHOPS,
    siteImages: db.siteImages || DEFAULT_IMAGES,
    psychologists: db.psychologists || DEFAULT_PSYCHOLOGISTS,
    cycleBlocks: db.cycleBlocks || DEFAULT_CYCLE_BLOCKS,
    suggestions: db.suggestions || [],
    analytics: db.analytics || {},
    adminPassword: db.adminPassword || '123',
    adminSlug: db.adminSlug || 'admin451200'
  });
});

// 1.1 Guardar / Actualizar Elementos del Menú de Navegación
app.post('/api/navigation', (req, res) => {
  const { navItems } = req.body;
  if (!Array.isArray(navItems)) {
    return res.status(400).json({ error: 'Formato inválido de elementos de navegación' });
  }
  const db = readDb();
  db.navItems = navItems;
  saveDb(db);
  res.json({ success: true, count: navItems.length });
});

// 1.2 Guardar / Actualizar Lista de Ciclos Escolares
app.post('/api/cycles-list', (req, res) => {
  const { cyclesList } = req.body;
  if (!Array.isArray(cyclesList)) {
    return res.status(400).json({ error: 'Formato inválido de lista de ciclos' });
  }
  const db = readDb();
  const cleanedCycles = cyclesList.map(cycle => {
    const c = { ...cycle };
    if (c.heroBgImage && c.heroBgImage.startsWith('data:image/')) {
      c.heroBgImage = saveBase64ToFile(c.heroBgImage, `hero_${c.key || c.slug}`);
    }
    return c;
  });
  db.cyclesList = cleanedCycles;
  saveDb(db);
  res.json({ success: true, count: cleanedCycles.length });
});

// 1.3 Guardar / Actualizar Páginas Personalizadas
app.post('/api/custom-pages', (req, res) => {
  const { customPages } = req.body;
  if (!Array.isArray(customPages)) {
    return res.status(400).json({ error: 'Formato inválido de páginas personalizadas' });
  }
  const db = readDb();
  db.customPages = customPages;
  saveDb(db);
  res.json({ success: true, count: customPages.length });
});

// 2. Guardar / Actualizar Calendario de Encuentros
app.post('/api/calendar', (req, res) => {
  const { workshops } = req.body;
  if (!Array.isArray(workshops)) {
    return res.status(400).json({ error: 'Formato inválido de encuentros' });
  }
  const db = readDb();
  db.calendarWorkshops = workshops;
  saveDb(db);
  res.json({ success: true, count: workshops.length });
});

// 3. Guardar / Actualizar Imágenes del Sitio
app.post('/api/images', (req, res) => {
  const { images } = req.body;
  if (!images || typeof images !== 'object') {
    return res.status(400).json({ error: 'Formato inválido de imágenes' });
  }
  const db = readDb();
  const cleanedImages = {};
  for (const [k, v] of Object.entries(images)) {
    cleanedImages[k] = saveBase64ToFile(v, `site_${k}`);
  }
  db.siteImages = { ...db.siteImages, ...cleanedImages };
  saveDb(db);
  res.json({ success: true, images: db.siteImages });
});

// 4. Guardar / Actualizar Orientadoras / Psicólogas
app.post('/api/psychologists', (req, res) => {
  const { psychologists } = req.body;
  if (!Array.isArray(psychologists)) {
    return res.status(400).json({ error: 'Formato inválido de psicólogas' });
  }
  const db = readDb();
  db.psychologists = psychologists;
  saveDb(db);
  res.json({ success: true, psychologists: db.psychologists });
});

// 4.1 Guardar / Actualizar Bloques de Contenido de Ciclos Escolares
app.post('/api/cycles', (req, res) => {
  const { cycleBlocks } = req.body;
  if (!Array.isArray(cycleBlocks)) {
    return res.status(400).json({ error: 'Formato inválido de bloques de ciclos' });
  }
  const db = readDb();
  const cleanedBlocks = cycleBlocks.map(block => {
    const b = { ...block };
    if (b.imageUrl && b.imageUrl.startsWith('data:image/')) {
      b.imageUrl = saveBase64ToFile(b.imageUrl, `block_${b.id || 'img'}`);
    }
    if (Array.isArray(b.photosList)) {
      b.photosList = b.photosList.map((photo, i) => {
        if (photo && photo.url && photo.url.startsWith('data:image/')) {
          return { ...photo, url: saveBase64ToFile(photo.url, `gallery_${b.id || 'img'}_${i}`) };
        }
        return photo;
      });
    }
    return b;
  });
  db.cycleBlocks = cleanedBlocks;
  saveDb(db);
  res.json({ success: true, count: cleanedBlocks.length });
});

// 5. Agregar Sugerencia de Padres
app.post('/api/suggestions', (req, res) => {
  const { text, date } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Texto de sugerencia requerido' });
  }
  const db = readDb();
  if (!db.suggestions) db.suggestions = [];
  const newSugg = {
    id: Date.now(),
    text: String(text).trim(),
    date: date || new Date().toLocaleDateString('es-CO')
  };
  db.suggestions.unshift(newSugg);
  saveDb(db);
  res.json({ success: true, suggestion: newSugg });
});

// 6. Eliminar Sugerencia
app.delete('/api/suggestions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const db = readDb();
  if (db.suggestions) {
    db.suggestions = db.suggestions.filter(s => s.id !== id);
    saveDb(db);
  }
  res.json({ success: true });
});

// 7. Registrar Visita Centralizada (Páginas y Ciclos)
app.post('/api/analytics/visit', (req, res) => {
  const { section, action, device, tabKey, cycleKey } = req.body;
  const db = readDb();
  if (!db.analytics) {
    db.analytics = {
      totalVisits: 0,
      uniqueSessions: 0,
      lastVisitDate: '',
      tabs: { inicio: 0, encuentros: 0, ciclos: 0 },
      cycles: { primera_infancia: 0, infantil: 0, basico: 0, fundamental: 0, exploratorio: 0, especializado: 0 },
      logs: []
    };
  }

  const nowFormatted = new Date().toLocaleDateString('es-CO') + ' ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  db.analytics.totalVisits = (db.analytics.totalVisits || 0) + 1;
  db.analytics.lastVisitDate = nowFormatted;

  if (tabKey) {
    if (!db.analytics.tabs) db.analytics.tabs = { inicio: 0, encuentros: 0, ciclos: 0 };
    db.analytics.tabs[tabKey] = (db.analytics.tabs[tabKey] || 0) + 1;
  }

  if (cycleKey) {
    if (!db.analytics.cycles) {
      db.analytics.cycles = { primera_infancia: 0, infantil: 0, basico: 0, fundamental: 0, exploratorio: 0, especializado: 0 };
    }
    db.analytics.cycles[cycleKey] = (db.analytics.cycles[cycleKey] || 0) + 1;
  }

  if (!db.analytics.logs) db.analytics.logs = [];
  db.analytics.logs.unshift({
    id: Date.now(),
    date: nowFormatted,
    section: section || 'Página',
    action: action || 'Visita',
    device: device || 'Web'
  });

  if (db.analytics.logs.length > 50) {
    db.analytics.logs = db.analytics.logs.slice(0, 50);
  }

  saveDb(db);
  res.json({ success: true, totalVisits: db.analytics.totalVisits });
});

// 8. Actualizar Credenciales de Seguridad
app.post('/api/security', (req, res) => {
  const { adminPassword, adminSlug } = req.body;
  const db = readDb();
  if (adminPassword) db.adminPassword = adminPassword;
  if (adminSlug) db.adminSlug = adminSlug;
  saveDb(db);
  res.json({ success: true });
});

// ============================================================
// RUTAS PRINCIPALES DEL SITIO WEB
// ============================================================

// 1. Página Principal (Inicio)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 2. Página de Encuentros Familiares / Talleres
app.get('/encuentros', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'encuentros.html'));
});

// 2.1 Página de Guía de Bienestar Emocional
app.get(['/guia-bienestar', '/guia-bienestar.html', '/bienestar', '/bienestar-emocional'], (req, res) => {
  const guidePath = path.join(__dirname, 'public', 'guia-bienestar.html');
  if (fs.existsSync(guidePath)) {
    return res.sendFile(guidePath);
  }
  res.sendFile(path.join(__dirname, 'guia-bienestar.html'));
});

// 3. Rutas de Ciclos Escolares (Soporta ciclos existentes y dinámicos)
app.get(['/ciclos/:slug', '/ciclos/:slug.html'], (req, res, next) => {
  const rawSlug = req.params.slug.toLowerCase().replace('.html', '');
  const specificPath = path.join(__dirname, 'public', 'ciclos', `${rawSlug}.html`);

  if (fs.existsSync(specificPath)) {
    return res.sendFile(specificPath);
  }

  // Fallback a plantilla unificada para ciclos creados dinámicamente
  const templatePath = path.join(__dirname, 'public', 'ciclos', 'template.html');
  if (fs.existsSync(templatePath)) {
    return res.sendFile(templatePath);
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Alias directos para ciclos clásicos
app.get(['/primera-infancia', '/infantil', '/basico', '/fundamental', '/exploratorio', '/especializado'], (req, res) => {
  const cleanName = req.path.replace(/^\//, '').toLowerCase();
  res.redirect(`/ciclos/${cleanName}`);
});

// 3.1 Rutas de Páginas Personalizadas Dinámicas
app.get(['/pagina/:slug', '/pagina/:slug.html', '/p/:slug'], (req, res) => {
  const pagePath = path.join(__dirname, 'public', 'pagina.html');
  if (fs.existsSync(pagePath)) {
    return res.sendFile(pagePath);
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 4. Ruta del Panel de Administración (Soporta /admin, /admin.html, /admin451200, /2610 y el slug configurado)
app.get(['/admin', '/admin.html', '/admin451200', '/2610', '/:slug'], (req, res, next) => {
  const db = readDb();
  const validSlug = (db.adminSlug || '2610').toLowerCase();
  const reqSlug = (req.params.slug || req.path.replace(/^\//, '')).toLowerCase().replace('.html', '');
  
  if (['admin', 'admin451200', '2610', validSlug].includes(reqSlug)) {
    return res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  }
  next();
});

// Ruta Keep-Alive / Anti-Inactividad para Render.com (UptimeRobot / Cron-Job)
app.get(['/ping', '/keep-alive', '/api/ping'], (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Endpoint de Diagnóstico
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Psicoorientación Colegio Leonístico La Merced',
    version: '2.5.0 (Dynamic Pages & Cycles Sync)',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Manejador para cualquier otra ruta no encontrada (404 -> Redirigir a inicio)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar Servidor
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log('====================================================');
    console.log(`🚀 Servidor de Psicoorientación activo en el puerto ${PORT}`);
    console.log(`🌐 Base de datos centralizada: ${DB_FILE}`);
    console.log(`🌐 Inicio:            http://localhost:${PORT}/`);
    console.log(`👨‍👩‍👧 Encuentros:        http://localhost:${PORT}/encuentros`);
    console.log(`🔐 Panel Admin:       http://localhost:${PORT}/admin451200`);
    console.log('====================================================');
  });
}

module.exports = app;
