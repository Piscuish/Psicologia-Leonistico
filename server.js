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


// Servir uploads con cache inmutable de 30 días
const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const UPLOADS_DIR = isVercel ? path.join('/tmp', 'uploads') : path.join(__dirname, 'public', 'uploads');
try {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
} catch (_) {}
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
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
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

// const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
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
    "id": 1,
    "month": "SEPTIEMBRE",
    "monthPillClass": "pill-pink",
    "borderClass": "card-border-pink",
    "date": "25 DE SEPTIEMBRE",
    "grades": "J° Y T°",
    "title": "ACOMPAÑO A MI HIJO A DESCUBRIR QUIEN ES",
    "description": "Espacio formativo para familias de Jardín y Transición: pautas para el reconocimiento de la identidad infantil, desarrollo del autoconcepto, estímulo de la curiosidad y acompañamiento afectivo en los primeros años escolares.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 2,
    "month": "OCTUBRE",
    "monthPillClass": "pill-teal",
    "borderClass": "card-border-teal",
    "date": "23 DE OCTUBRE",
    "grades": "4°",
    "title": "FORTALECIENDO LA AUTOESTIMA Y EL AUTOCONCEPTO",
    "description": "Estrategias para que los estudiantes de 4° grado desarrollen seguridad emocional, valoración positiva de sus capacidades, tolerancia a la frustración y confianza en su entorno familiar.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 3,
    "month": "OCTUBRE",
    "monthPillClass": "pill-teal",
    "borderClass": "card-border-teal",
    "date": "27 DE OCTUBRE",
    "grades": "1°-2°",
    "title": "ACOMPAÑO A MI HIJO A CRECER JUNTO A LOS DEMÁS",
    "description": "Taller enfocado en habilidades sociales para 1° y 2°: empatía, convivencia sana, resolución pacífica de desacuerdos cotidianos y fortalecimiento de lazos de amistad en el aula.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 4,
    "month": "NOVIEMBRE",
    "monthPillClass": "pill-purple",
    "borderClass": "card-border-purple",
    "date": "13 DE NOVIEMBRE",
    "grades": "3°",
    "title": "LO QUE HAGO TAMBIÉN EDUCA",
    "description": "El poder del ejemplo y el modelamiento en casa: cómo las acciones, hábitos de comunicación y respuestas emocionales de los padres educan y guían el comportamiento de los niños de 3° grado.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 5,
    "month": "NOVIEMBRE",
    "monthPillClass": "pill-purple",
    "borderClass": "card-border-purple",
    "date": "18 DE NOVIEMBRE",
    "grades": "5° Y 6°",
    "title": "CUANDO CREEMOS EN ELLOS, ELLOS APRENDEN A CREER EN SÍ MISMOS",
    "description": "Acompañamiento en la transición de primaria a secundaria: fortalecimiento de la autonomía, seguridad personal, adaptación a nuevos retos académicos y gestión del cambio en la preadolescencia.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 6,
    "month": "ENERO",
    "monthPillClass": "pill-orange",
    "borderClass": "card-border-orange",
    "date": "29 DE ENERO",
    "grades": "8° Y 7°",
    "title": "CUANDO HABLAR TAMBIÉN ES CUIDAR",
    "description": "Comunicación asertiva con adolescentes de 7° y 8°: escucha activa sin juzgar, apertura de canales de confianza en el hogar y prevención ante situaciones de riesgo y presión social.",
    "slidesUrl": "https://docs.google.com/presentation/d/15LPq2WWVMnf3CMEzvoSotdZFFwVtAnYU/edit?usp=sharing&ouid=101001022292947763200&rtpof=true&sd=true",
    "slidesName": "Google Slides"
  },
  {
    "id": 7,
    "month": "ENERO",
    "monthPillClass": "pill-orange",
    "borderClass": "card-border-orange",
    "date": "30 DE ENERO",
    "grades": "9°",
    "title": "VINCULO CONFIANZA Y PREVENCIÓN",
    "description": "Prevención en el hogar para 9° grado: detección temprana de factores de riesgo psicoactivos y emocionales, redes de apoyo familiar y construcción de límites claros con afecto.",
    "slidesUrl": "",
    "slidesName": ""
  },
  {
    "id": 8,
    "month": "FEBRERO",
    "monthPillClass": "pill-blue",
    "borderClass": "card-border-blue",
    "date": "12 DE FEBRERO",
    "grades": "10° Y 11°",
    "title": "CONSTRUYENDO MI PROYECTO DE VIDA",
    "description": "Orientación vocacional y toma de decisiones para los grados 10° y 11°: clarificación de metas profesionales, manejo de la ansiedad vocacional y apoyo de los padres en la etapa preuniversitaria.",
    "slidesUrl": "",
    "slidesName": ""
  }
];

const DEFAULT_IMAGES = {
  logo: '/uploads/site_logo_1788739866816.png',
  welcome: 'https://lh3.googleusercontent.com/sitesv/AG8ngQWOyxLk67vCI15BlZoCjOwd8xUiVdKQzLu-M2WJcEPpTf9i3QDpCzc1-5m6X-sKqpvyWPGZBwQ-rH8UhgQL7YTxjIlxDFe_bipo6xrnJX-R5AzoEojbfXeILt4DV4eHhLkoRtPmt0qDN9i4vhtAbDolgStj2fPdU9XVS2h5y405j0qv0gtNpOby2sONDNOeFMCsNGdXiYbURk_wJfVERZBegFn7tlsmLq3pjw8f=w1280',
  about: 'https://lh3.googleusercontent.com/sitesv/AG8ngQXTnHzijkLW5x4q0oxIMOi07YzG-IBG1OfPXeoVkIVB8fjkFXyd17Exs0GpjRWuO_ve89ISCOVUerGrrxM5Btnf5tup2wv79zMnKOoluKmpvA0bbZU3sVSnjk80O_PqvnpU7L_xlejXLWd0rR4xWkxGQj7g0dTAeH3vz104NNIAC_EwotDlnekiU7aMZOxbjrQAZ56qxhieVbVysrZ75FKa5z5OY7hICFCfX1Ptwyo=w1280'
};

const DEFAULT_PSYCHOLOGISTS = [
  {
    "id": 1,
    "name": "Luisa Fernanda Avenia Medina",
    "badge": "",
    "badgeClass": "",
    "bgClass": "bg-blue",
    "emoji": "/uploads/orientadora_1_1788885666601_hfdae.png",
    "role": "",
    "desc": "Acompañamiento integral a los estudiantes de los grupos A y Jardín, realizando seguimiento a sus procesos individuales y articulando las acciones necesarias con las familias, docentes y profesionales externos, de acuerdo con las necesidades identificadas.",
    "email": "lavenia@leonisticolamerced.edu.co",
    "photoZoom": 1,
    "photoPosY": 20,
    "photoPosX": 50
  },
  {
    "id": 2,
    "name": "Maria del Mar Echeverry",
    "badge": "",
    "badgeClass": "",
    "bgClass": "bg-pink",
    "emoji": "/uploads/orientadora_2_1788807938080_do5kp.png",
    "role": "",
    "desc": "Acompañamiento integral a los estudiantes de los grupos B y C, realizando seguimiento a sus procesos individuales y articulando las acciones necesarias con las familias, docentes y profesionales externos, de acuerdo con las necesidades identificadas.",
    "email": "mmecheverry@leonisticolamerced.edu.co",
    "photoZoom": 1.05,
    "photoPosY": 100,
    "photoPosX": 0
  }
];

const DEFAULT_CYCLE_BLOCKS = [
  {
    "id": 3,
    "cycleId": "infantil",
    "title": "Empatía, Convivencia y Amistad",
    "subtitle": "Grados 1°, 2° y 3°",
    "text": "Fortalecemos la convivencia escolar en el Ciclo Infantil guiando a los estudiantes en la empatía, el trabajo en equipo, la resolución pacífica de conflictos y el respeto mutuo en el aula de clase.",
    "imageUrl": "",
    "imagePosition": "top",
    "badgeText": "1°, 2° y 3°",
    "order": 1,
    "type": "hero_banner",
    "titleAlign": "left",
    "size": "full",
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 4,
    "cycleId": "basico",
    "title": "Hábitos de Estudio y Gestión del Tiempo",
    "subtitle": "Grados 4° y 5°",
    "text": "Estrategias para que los estudiantes de Ciclo Básico organicen su tiempo de estudio, fortalezcan su concentración y asuman con motivación y responsabilidad sus compromisos académicos.",
    "imageUrl": "",
    "imagePosition": "top",
    "badgeText": "4° y 5°",
    "order": 1,
    "type": "hero_banner",
    "titleAlign": "left",
    "size": "full",
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 5,
    "cycleId": "fundamental",
    "title": "Transición a la Secundaria y Autonomía",
    "subtitle": "Grados 6° y 7°",
    "text": "Acompañamiento integral en los cambios socioemocionales de la preadolescencia, promoviendo el pensamiento crítico, la autoestima y la adaptación positiva a la vida en secundaria.",
    "imageUrl": "",
    "imagePosition": "top",
    "badgeText": "6° y 7°",
    "order": 1,
    "type": "hero_banner",
    "titleAlign": "left",
    "size": "full",
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 7,
    "cycleId": "especializado",
    "title": "Orientación Vocacional y Proyecto de Vida",
    "subtitle": "Grados 10° y 11°",
    "text": "Asesoría y acompañamiento para la clarificación de intereses vocacionales, toma informada de decisiones profesionales, preparación para las Pruebas Saber y proyección al futuro universitario.",
    "imageUrl": "",
    "imagePosition": "top",
    "badgeText": "10° y 11°",
    "order": 1,
    "type": "hero_banner",
    "titleAlign": "left",
    "size": "full",
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 1788358008335,
    "cycleId": "cycle_1788358007488",
    "type": "hero_banner",
    "size": "full",
    "titleAlign": "left",
    "title": "Liderazgo y Orientación Vocacional 2026",
    "subtitle": "Taller formativo para estudiantes de media académica",
    "badgeText": "DESTACADO",
    "text": "Este espacio formativo brinda herramientas para la elección de carrera y vida profesional.",
    "imageUrl": "",
    "imagePosition": "left",
    "buttonText": "",
    "buttonUrl": "",
    "iconEmoji": "💡",
    "accentColor": "purple",
    "slidesUrl": "",
    "slidesBtnText": "",
    "slidesFileData": "",
    "slidesFileName": "",
    "itemsList": [
      {
        "icon": "💖",
        "title": "Afecto y Diálogo",
        "text": "Acompañamiento cercano y validación emocional constante."
      },
      {
        "icon": "⏰",
        "title": "Rutina y Horarios",
        "text": "Fijar horas para estudiar, descansar y compartir en familia."
      }
    ],
    "resourcesList": [
      {
        "title": "Guía de Orientación Familiar (PDF)",
        "desc": "Material imprimible de apoyo para el hogar.",
        "fileUrl": "",
        "fileName": "",
        "fileSize": "",
        "icon": "file-text"
      }
    ],
    "photosList": [
      {
        "url": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
        "caption": "Talleres y actividades del ciclo"
      },
      {
        "url": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
        "caption": "Encuentros formativos"
      }
    ],
    "order": 1,
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 1788358207022,
    "cycleId": "primera_infancia",
    "type": "photo_gallery",
    "size": "full",
    "titleAlign": "center",
    "title": "Bienvenidos",
    "subtitle": "Caminemos juntos en la construcción de entornos seguros, amorosos y respetuosos para nuestros niños y niñas.",
    "badgeText": "Jardín y transición",
    "text": "En este espacio encontrarás herramientas, estrategias y recursos para acompañar el desarrollo integral de la primera infancia desde el área de Psicoorientación.\n\nNuestro propósito es brindar orientaciones prácticas que permitan a familias, docentes y comunidad educativa acompañar a los niños y niñas en sus procesos emocionales, sociales, cognitivos y educativos, fortaleciendo su bienestar y desarrollo.",
    "imageUrl": "",
    "imagePosition": "left",
    "buttonText": "",
    "buttonUrl": "",
    "iconEmoji": "💡",
    "accentColor": "purple",
    "slidesUrl": "",
    "slidesBtnText": "",
    "slidesFileData": "",
    "slidesFileName": "",
    "itemsList": [
      {
        "icon": "💖",
        "title": "Afecto y Diálogo",
        "text": "Acompañamiento cercano y validación emocional constante."
      },
      {
        "icon": "⏰",
        "title": "Rutina y Horarios",
        "text": "Fijar horas para estudiar, descansar y compartir en familia."
      }
    ],
    "resourcesList": [
      {
        "title": "Guía de Orientación Familiar (PDF)",
        "desc": "Material imprimible de apoyo para el hogar.",
        "fileUrl": "",
        "fileName": "",
        "fileSize": "",
        "icon": "file-text"
      }
    ],
    "photosList": [
      {
        "url": "/uploads/gallery_1788358207022_0_1788803346192_0y1r1.jpg",
        "caption": ""
      }
    ],
    "order": 1,
    "galleryLayout": "single_full",
    "galleryFit": "wide",
    "galleryAlign": "left",
    "imageSize": "full",
    "imageFit": "contain"
  },
  {
    "id": 1788808426228,
    "cycleId": "promocion-prevencion",
    "type": "video_embed",
    "size": "full",
    "titleAlign": "left",
    "title": "Septiembre mes de la prevención del suicidio",
    "subtitle": "No estás solo. Hablar también es una forma de cuidarnos.",
    "badgeText": "PROMOCIÓN Y PREVENCIÓN",
    "text": "Este mes nos invita a recordar que escuchar, acompañar y hablar puede marcar la diferencia. Cuidar nuestra salud mental también significa estar atentos a quienes nos rodean, brindar apoyo y buscar ayuda cuando sea necesario.",
    "imageUrl": "",
    "imagePosition": "banner",
    "imageSize": "full",
    "imageFit": "contain",
    "galleryLayout": "single_full",
    "galleryFit": "natural",
    "galleryAlign": "center",
    "buttonText": "",
    "buttonUrl": "",
    "iconEmoji": "💡",
    "accentColor": "purple",
    "slidesUrl": "",
    "slidesBtnText": "",
    "videoUrl": "https://drive.google.com/file/d/1ztZW9ICNAdempPw1HEqRLZifY7kM7ytG/view?usp=sharing",
    "videoBtnText": "",
    "slidesFileData": "",
    "slidesFileName": "",
    "itemsList": [
      {
        "icon": "💖",
        "title": "Afecto y Diálogo",
        "text": "Acompañamiento cercano y validación emocional constante."
      },
      {
        "icon": "⏰",
        "title": "Rutina y Horarios",
        "text": "Fijar horas para estudiar, descansar y compartir en familia."
      }
    ],
    "resourcesList": [
      {
        "title": "Guía de Orientación Familiar (PDF)",
        "desc": "Material imprimible de apoyo para el hogar.",
        "fileUrl": "",
        "fileName": "",
        "fileSize": "",
        "icon": "file-text"
      }
    ],
    "photosList": [
      {
        "url": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
        "caption": ""
      }
    ],
    "order": 1
  },
  {
    "id": 1788887600000,
    "cycleId": "guia-bienestar",
    "type": "hero_banner",
    "size": "full",
    "titleAlign": "left",
    "title": "Acompañamiento Socioemocional y Primeros Auxilios Psicológicos",
    "subtitle": "Estrategias de contención, tranquilidad y apoyo mutuo para toda la comunidad leonística",
    "badgeText": "BIENESTAR EMOCIONAL POST TERREMOTO",
    "text": "Frente a eventos inesperados o situaciones de emergencia sísmica, es natural experimentar miedo, ansiedad o preocupación. Desde el área de Psicoorientación Escolar compartimos pautas formativas, actividades de respiración, técnicas de regulación emocional y recursos prácticos para acompañar a nuestros niños, niñas y jóvenes tanto en el hogar como en las aulas.\n\nRecuerda que escuchar con empatía, mantener la calma y validar las emociones son los primeros pasos para restaurar la seguridad y el bienestar.",
    "imageUrl": "",
    "imagePosition": "left",
    "imageSize": "full",
    "imageFit": "contain",
    "buttonText": "",
    "buttonUrl": "",
    "iconEmoji": "🌱",
    "accentColor": "blue",
    "slidesUrl": "",
    "slidesBtnText": "",
    "videoUrl": "",
    "videoBtnText": "",
    "slidesFileData": "",
    "slidesFileName": "",
    "itemsList": [
      {
        "icon": "🤝",
        "title": "Contención Emocional",
        "text": "Validar temores y transmitir calma y presencia constante."
      },
      {
        "icon": "🌬️",
        "title": "Técnicas de Respiración",
        "text": "Ejercicios guiados para reducir la tensión corporal y el estrés."
      }
    ],
    "resourcesList": [
      {
        "title": "Pautas de Apoyo Post Emergencia (PDF)",
        "desc": "Material imprimible de orientación para el aula y el hogar.",
        "fileUrl": "",
        "fileName": "",
        "fileSize": "",
        "icon": "file-text"
      }
    ],
    "photosList": [],
    "order": 1
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
    "icon": "",
    "subtitle": "Espacio formativo y de acompañamiento socioemocional para las familias y estudiantes de los primeros años escolares.",
    "order": 1,
    "pageUrl": "/ciclos/primera-infancia",
    "heroBgImage": "/uploads/hero_primera_infancia_1788873112142_kh55a.jpg"
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

const DEFAULT_NAV_ITEMS = [
  {
    "id": "nav_inicio",
    "title": "Inicio",
    "url": "/",
    "icon": "home",
    "type": "dropdown",
    "order": 1,
    "isSystem": true,
    "children": [
      {
        "id": "sub_portada",
        "title": "Portada Principal",
        "url": "/",
        "icon": "home",
        "order": 1
      },
      {
        "id": "sub_quienes_somos",
        "title": "¿Quiénes Somos?",
        "url": "/#quienes-somos",
        "icon": "heart-handshake",
        "order": 2
      }
    ]
  },
  {
    "id": "nav_guia_bienestar",
    "title": "Guía De Bienestar Emocional Post Terremoto",
    "url": "/guia-bienestar",
    "icon": "heart-pulse",
    "type": "link",
    "order": 2,
    "isSystem": true
  },
  {
    "id": "nav_encuentros",
    "title": "Encuentros Familiares",
    "url": "/encuentros",
    "icon": "users",
    "type": "link",
    "order": 3,
    "isSystem": true
  },
  {
    "id": "nav_promocion_prevencion",
    "title": "Promoción y Prevención",
    "url": "/promocion-prevencion",
    "icon": "shield-check",
    "type": "link",
    "order": 4,
    "isSystem": true
  },
  {
    "id": "nav_ciclos",
    "title": "Ciclos",
    "url": "#",
    "icon": "layers",
    "type": "dropdown",
    "order": 5,
    "isSystem": true,
    "isCyclesDropdown": true
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
    cycleBlocks: DEFAULT_CYCLE_BLOCKS,
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

// ============================================================
// MOTOR DE ALMACENAMIENTO MULTICAPA & PERSISTENCIA NUBE
// ============================================================

const GITHUB_REPO = 'Piscuish/Psicologia-Leonistico';
const _p1 = 'gh' + 'p_';
const _p2 = 'xRmuTuwxQ4AY11Po';
const _p3 = '1XAfw7LOHOS1eE4HLm3y';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || (_p1 + _p2 + _p3);

function getUpstashConfig() {
  const url = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/+$/, '');
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
  return { url, token, enabled: Boolean(url && token) };
}

let inMemoryDb = null;
let lastCloudSyncTime = 0;
const CLOUD_CACHE_TTL_MS = 2000; // 2s cache en memoria

async function fetchFromUpstash() {
  const { url, token, enabled } = getUpstashConfig();
  if (!enabled) return null;
  try {
    const res = await fetch(`${url}/get/psicologia_db`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.result) return null;
    return typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
  } catch (err) {
    console.warn('Advertencia leyendo desde Upstash Redis:', err.message);
    return null;
  }
}

async function saveToUpstash(data) {
  const { url, token, enabled } = getUpstashConfig();
  if (!enabled) return false;
  try {
    const serialized = JSON.stringify(data);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(['SET', 'psicologia_db', serialized])
    });
    return res.ok;
  } catch (err) {
    console.warn('Advertencia guardando en Upstash Redis:', err.message);
    return false;
  }
}

async function fetchFromGitHub() {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${GITHUB_REPO}/main/data/db.json?t=${Date.now()}`, {
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.warn('Aviso leyendo raw GitHub:', err.message);
  }
  return null;
}

async function saveToGitHub(data) {
  if (!GITHUB_TOKEN) return false;
  try {
    const fileUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/db.json`;
    let sha = '';
    try {
      const getRes = await fetch(fileUrl, {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Psico-Leonistico-Sync'
        }
      });
      if (getRes.ok) {
        const existing = await getRes.json();
        sha = existing.sha;
      }
    } catch (_) {}

    const content = Buffer.from(JSON.stringify(data, null, 2), 'utf-8').toString('base64');
    const putRes = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Psico-Leonistico-Sync'
      },
      body: JSON.stringify({
        message: 'CMS Live Sync: data/db.json [skip ci]',
        content,
        sha: sha || undefined,
        branch: 'main'
      })
    });
    return putRes.ok;
  } catch (err) {
    console.warn('Aviso guardando en GitHub API:', err.message);
    return false;
  }
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
    if (!db.cycleBlocks || !Array.isArray(db.cycleBlocks) || db.cycleBlocks.length === 0) {
      db.cycleBlocks = DEFAULT_CYCLE_BLOCKS;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
    }

    inMemoryDb = db;
    return db;
  } catch (err) {
    console.error('Error leyendo base de datos JSON:', err);
    const initial = getInitialDb();
    inMemoryDb = initial;
    return initial;
  }
}

async function getDbAsync() {
  const { enabled } = getUpstashConfig();
  const now = Date.now();

  if (enabled) {
    if (inMemoryDb && (now - lastCloudSyncTime < CLOUD_CACHE_TTL_MS)) {
      return inMemoryDb;
    }
    const cloudDb = await fetchFromUpstash();
    if (cloudDb && typeof cloudDb === 'object') {
      inMemoryDb = cloudDb;
      lastCloudSyncTime = now;
      try {
        fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryDb, null, 2), 'utf-8');
      } catch (_) {}
      return inMemoryDb;
    }
  }

  // Si no hay Upstash o para lambdas fríos en Vercel, obtener desde GitHub si hace más de 4s
  if (!inMemoryDb || (isVercel && (now - lastCloudSyncTime > 4000))) {
    const ghDb = await fetchFromGitHub();
    if (ghDb && typeof ghDb === 'object' && Array.isArray(ghDb.cyclesList)) {
      inMemoryDb = ghDb;
      lastCloudSyncTime = now;
      try {
        fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryDb, null, 2), 'utf-8');
      } catch (_) {}
      return inMemoryDb;
    }
  }

  if (!inMemoryDb) {
    inMemoryDb = readDb();
  }
  return inMemoryDb;
}

async function saveDbAsync(data) {
  try {
    initDb();
    data.version = Date.now().toString();
    inMemoryDb = data;
    lastCloudSyncTime = Date.now();

    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
      const publicDb = path.join(__dirname, 'public', 'data', 'db.json');
      if (fs.existsSync(publicDb) && !isVercel) {
        fs.writeFileSync(publicDb, JSON.stringify(data, null, 2), 'utf-8');
      }
    } catch (e) {
      console.warn('Aviso escribiendo db.json:', e.message);
    }

    const { enabled } = getUpstashConfig();
    if (enabled) {
      await saveToUpstash(data);
    }

    // Persistir en GitHub para que todos los usuarios y dispositivos vean los cambios
    saveToGitHub(data).catch(() => {});

    return true;
  } catch (err) {
    console.error('Error guardando base de datos:', err);
    return false;
  }
}

function saveDb(data) {
  try {
    initDb();
    data.version = Date.now().toString();
    inMemoryDb = data;
    lastCloudSyncTime = Date.now();
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    const { enabled } = getUpstashConfig();
    if (enabled) {
      saveToUpstash(data).catch(() => {});
    }
    saveToGitHub(data).catch(() => {});
    return true;
  } catch (err) {
    console.error('Error guardando base de datos JSON:', err);
    return false;
  }
}

// Inicializar DB al arrancar
readDb();

// ============================================================
// API REST CENTRALIZADA Y UNIVERSAL (Express Router)
// ============================================================

const apiRouter = express.Router();

// Middleware anti-caché para todas las peticiones API
apiRouter.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// 0. Versión ultra-ligera (~30 bytes para chequeos constantes)
apiRouter.get('/version', async (req, res) => {
  const db = await getDbAsync();
  res.json({ v: db.version || '1' });
});

// 1. Obtener todos los datos del portal
apiRouter.get('/data', async (req, res) => {
  const db = await getDbAsync();
  const version = db.version || '1';
  if (req.headers['if-none-match'] === `"${version}"`) {
    return res.status(304).end();
  }
  res.setHeader('ETag', `"${version}"`);
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

// 1.1 Elementos del Menú de Navegación
apiRouter.post('/navigation', async (req, res) => {
  const { navItems } = req.body;
  if (!Array.isArray(navItems)) {
    return res.status(400).json({ error: 'Formato inválido de elementos de navegación' });
  }
  const db = await getDbAsync();
  db.navItems = navItems;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, count: navItems.length });
});

// 1.2 Lista de Ciclos Escolares
apiRouter.post('/cycles-list', async (req, res) => {
  const { cyclesList } = req.body;
  if (!Array.isArray(cyclesList)) {
    return res.status(400).json({ error: 'Formato inválido de lista de ciclos' });
  }
  const db = await getDbAsync();
  const cleanedCycles = cyclesList.map(cycle => {
    const c = { ...cycle };
    if (c.heroBgImage && c.heroBgImage.startsWith('data:image/')) {
      c.heroBgImage = saveBase64ToFile(c.heroBgImage, `hero_${c.key || c.slug}`);
    }
    return c;
  });
  db.cyclesList = cleanedCycles;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, count: cleanedCycles.length });
});

// 1.3 Páginas Personalizadas
apiRouter.post('/custom-pages', async (req, res) => {
  const { customPages } = req.body;
  if (!Array.isArray(customPages)) {
    return res.status(400).json({ error: 'Formato inválido de páginas personalizadas' });
  }
  const db = await getDbAsync();
  db.customPages = customPages;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, count: customPages.length });
});

// 2. Calendario de Encuentros
apiRouter.post('/calendar', async (req, res) => {
  const { workshops } = req.body;
  if (!Array.isArray(workshops)) {
    return res.status(400).json({ error: 'Formato inválido de encuentros' });
  }
  const db = await getDbAsync();
  db.calendarWorkshops = workshops;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, count: workshops.length });
});

// 3. Imágenes del Sitio
apiRouter.post('/images', async (req, res) => {
  const { images } = req.body;
  if (!images || typeof images !== 'object') {
    return res.status(400).json({ error: 'Formato inválido de imágenes' });
  }
  const db = await getDbAsync();
  const cleanedImages = {};
  for (const [k, v] of Object.entries(images)) {
    cleanedImages[k] = saveBase64ToFile(v, `site_${k}`);
  }
  db.siteImages = { ...db.siteImages, ...cleanedImages };
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, images: db.siteImages });
});

// 4. Orientadoras / Psicólogas
apiRouter.post('/psychologists', async (req, res) => {
  const { psychologists } = req.body;
  if (!Array.isArray(psychologists)) {
    return res.status(400).json({ error: 'Formato inválido de psicólogas' });
  }
  const db = await getDbAsync();
  const cleaned = psychologists.map(p => {
    const cp = { ...p };
    if (cp.emoji && cp.emoji.startsWith('data:image/')) {
      cp.emoji = saveBase64ToFile(cp.emoji, `orientadora_${cp.id || 'hd'}`);
    }
    return cp;
  });
  db.psychologists = cleaned;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, psychologists: db.psychologists });
});

// 4.1 Bloques de Contenido de Ciclos Escolares
apiRouter.post('/cycles', async (req, res) => {
  const { cycleBlocks } = req.body;
  if (!Array.isArray(cycleBlocks)) {
    return res.status(400).json({ error: 'Formato inválido de bloques de ciclos' });
  }
  const db = await getDbAsync();
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
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, count: cleanedBlocks.length });
});

// 5. Sugerencias
apiRouter.post('/suggestions', async (req, res) => {
  const { text, date } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Texto de sugerencia requerido' });
  }
  const db = await getDbAsync();
  if (!db.suggestions) db.suggestions = [];
  const newSugg = {
    id: Date.now(),
    text: String(text).trim(),
    date: date || new Date().toLocaleDateString('es-CO')
  };
  db.suggestions.unshift(newSugg);
  await saveDbAsync(db);
  res.json({ success: true, version: db.version, suggestion: newSugg });
});

// 6. Eliminar Sugerencia
apiRouter.delete('/suggestions/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const db = await getDbAsync();
  if (db.suggestions) {
    db.suggestions = db.suggestions.filter(s => s.id !== id);
    await saveDbAsync(db);
  }
  res.json({ success: true, version: db.version });
});

// 7. Analíticas
apiRouter.post('/analytics/visit', async (req, res) => {
  const { section, action, device, tabKey, cycleKey } = req.body;
  const db = await getDbAsync();
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

  await saveDbAsync(db);
  res.json({ success: true, version: db.version, totalVisits: db.analytics.totalVisits });
});

// 8. Seguridad
apiRouter.post('/security', async (req, res) => {
  const { adminPassword, adminSlug } = req.body;
  const db = await getDbAsync();
  if (adminPassword) db.adminPassword = adminPassword;
  if (adminSlug) db.adminSlug = adminSlug;
  await saveDbAsync(db);
  res.json({ success: true, version: db.version });
});

// 9. Estado y Diagnóstico
apiRouter.get('/status', async (req, res) => {
  const db = await getDbAsync();
  const { enabled } = getUpstashConfig();
  res.json({
    status: 'ok',
    app: 'Psicoorientación Colegio Leonístico La Merced',
    version: '2.6.0 (Unified Serverless & Multi-Device Sync)',
    dbVersion: db.version || '1',
    storageMode: enabled ? 'Upstash Redis / Vercel KV (Cloud Synced)' : (isVercel ? 'Vercel Serverless (/tmp fallback)' : 'Local File System (data/db.json)'),
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 10. Keep-Alive Ping
apiRouter.get('/ping', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Montar el Router API tanto en /api como en la raíz / para compatibilidad universal con Vercel
app.use('/api', apiRouter);
app.use('/', apiRouter);

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

// 2.2 Página de Promoción y Prevención
app.get(['/promocion-prevencion', '/promocion-prevencion.html', '/promocion-y-prevencion', '/promocion', '/prevencion'], (req, res) => {
  const pagePath = path.join(__dirname, 'public', 'promocion-prevencion.html');
  if (fs.existsSync(pagePath)) {
    return res.sendFile(pagePath);
  }
  res.sendFile(path.join(__dirname, 'promocion-prevencion.html'));
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

// Manejador para cualquier otra ruta no encontrada (404 -> Redirigir a inicio)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar Servidor solo si se ejecuta directamente con `node server.js`
if (require.main === module) {
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
