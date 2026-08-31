/**
 * Caminando Juntos - Psicoorientación Escolar
 * Colegio Leonístico La Merced
 * High Performance Multi-Page Engine, Interactive Calendar, and Admin Management
 */

// ============================================================
// DEFAULT DATA & ASSETS (EXTRACTED FROM GOOGLE SITES & CALENDAR)
// ============================================================

const DEFAULT_SITE_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/sitesv/AG8ngQXPXXrReW33dy7TVTPLbtzVRorfO3DggGyZ2zPzCU8xHZihOUZ73rOtyxtOw8W6b-Ry1dvVTRgD9cXAi1PeOeBYBjYcRYJmjkDCa-In40HLlE0ZqGMI0v8Vm30pwJNToW-SKtWmik47Pnir0VAv4VW-kkrallHR0PnYc_cPd_uIBQNvJoe1Iu6Z7ACf=w16383',
  favicon: 'https://lh3.googleusercontent.com/sitesv/AG8ngQWMa1kc6jVbY3mSnIQYpVjxxkhTMgHuRLzpm-o3lAMgJtWUIgekXnXlWjgQDeRwQSCOLH_U5l8ztQCfaCv7r3JjyQ0JCQn2-3saSzHRhDM5duB-idQtoKG9ZYz6BUZLMM3SJfxvtYVinOuckRqSmPIT5Am07h5B7Luapy3c76dc1lYmoUBJGB0UCr38E0u29coTDmwWwuiFH6RIlpW448k',
  heroBg: 'https://lh3.googleusercontent.com/sitesv/AG8ngQXf5KMbSedK98LmnR8hVcZ1tQNv9JpPIYgJ_P1-N6Q5iSqACGKpSGodX_1rSgcQRceZEaHYmEwNBCUykyD4Vt8zF3dKk9QwMAvf5jqK5ubLKRI0lMQqm-mTeqlLq8tmwVFvMbK1VVJuALhgmnXCUplp-P89XqCfB8P3BbzoBi6GI6YAXc4_nlBfKojb=w16383',
  welcomeImg: 'https://lh3.googleusercontent.com/sitesv/AG8ngQWOyxLk67vCI15BlZoCjOwd8xUiVdKQzLu-M2WJcEPpTf9i3QDpCzc1-5m6X-sKqpvyWPGZBwQ-rH8UhgQL7YTxjIlxDFe_bipo6xrnJX-R5AzoEojbfXeILt4DV4eHhLkoRtPmt0qDN9i4vhtAbDolgStj2fPdU9XVS2h5y405j0qv0gtNpOby2sONDNOeFMCsNGdXiYbURk_wJfVERZBegFn7tlsmLq3pjw8f=w1280',
  aboutImg: 'https://lh3.googleusercontent.com/sitesv/AG8ngQXTnHzijkLW5x4q0oxIMOi07YzG-IBG1OfPXeoVkIVB8fjkFXyd17Exs0GpjRWuO_ve89ISCOVUerGrrxM5Btnf5tup2wv79zMnKOoluKmpvA0bbZU3sVSnjk80O_PqvnpU7L_xlejXLWd0rR4xWkxGQj7g0dTAeH3vz104NNIAC_EwotDlnekiU7aMZOxbjrQAZ56qxhieVbVysrZ75FKa5z5OY7hICFCfX1Ptwyo=w1280'
};

const DEFAULT_PSYCHOLOGISTS = [
  {
    id: 0,
    name: "Nancy Hurtado Viveros",
    role: "Psicoorientadora Institucional",
    badge: "Grupos A",
    badgeClass: "",
    email: "nhurtadov@leonisticolamerced.edu.co",
    emoji: "👩‍🏫",
    bgClass: "avatar-female-1",
    desc: "Acompañamiento especializado a los grados y grupos A. Enfoque en desarrollo formativo, orientación vocacional y bienestar estudiantil."
  },
  {
    id: 1,
    name: "María del Mar Echeverry López",
    role: "Psicoorientadora Institucional",
    badge: "Grupos B",
    badgeClass: "badge-blue",
    email: "mmecheverry@leonistico.com",
    emoji: "👩‍⚕️",
    bgClass: "avatar-female-2",
    desc: "Acompañamiento integral a los grupos B. Enfoque en fortalecimiento socioemocional, proyectos de vida y sana convivencia."
  }
];

// Official Calendar 2026-2027 from institutional image
const DEFAULT_CALENDAR_WORKSHOPS = [
  {
    id: 1,
    month: "SEPTIEMBRE",
    monthPillClass: "pill-pink",
    borderClass: "card-border-pink",
    date: "25 DE SEPTIEMBRE",
    grades: "J° Y T°",
    title: "ACOMPAÑO A MI HIJO A DESCUBRIR QUIEN ES",
    description: "Espacio formativo para familias de Jardín y Transición: pautas para el reconocimiento de la identidad infantil, desarrollo del autoconcepto, estímulo de la curiosidad y acompañamiento afectivo en los primeros años escolares."
  },
  {
    id: 2,
    month: "OCTUBRE",
    monthPillClass: "pill-teal",
    borderClass: "card-border-teal",
    date: "23 DE OCTUBRE",
    grades: "4°",
    title: "FORTALECIENDO LA AUTOESTIMA Y EL AUTOCONCEPTO",
    description: "Estrategias para que los estudiantes de 4° grado desarrollen seguridad emocional, valoración positiva de sus capacidades, tolerancia a la frustración y confianza en su entorno familiar."
  },
  {
    id: 3,
    month: "OCTUBRE",
    monthPillClass: "pill-teal",
    borderClass: "card-border-teal",
    date: "27 DE OCTUBRE",
    grades: "1°-2°",
    title: "ACOMPAÑO A MI HIJO A CRECER JUNTO A LOS DEMÁS",
    description: "Taller enfocado en habilidades sociales para 1° y 2°: empatía, convivencia sana, resolución pacífica de desacuerdos cotidianos y fortalecimiento de lazos de amistad en el aula."
  },
  {
    id: 4,
    month: "NOVIEMBRE",
    monthPillClass: "pill-purple",
    borderClass: "card-border-purple",
    date: "13 DE NOVIEMBRE",
    grades: "3°",
    title: "LO QUE HAGO TAMBIÉN EDUCA",
    description: "El poder del ejemplo y el modelamiento en casa: cómo las acciones, hábitos de comunicación y respuestas emocionales de los padres educan y guían el comportamiento de los niños de 3° grado."
  },
  {
    id: 5,
    month: "NOVIEMBRE",
    monthPillClass: "pill-purple",
    borderClass: "card-border-purple",
    date: "18 DE NOVIEMBRE",
    grades: "5° Y 6°",
    title: "CUANDO CREEMOS EN ELLOS, ELLOS APRENDEN A CREER EN SÍ MISMOS",
    description: "Acompañamiento en la transición de primaria a secundaria: fortalecimiento de la autonomía, seguridad personal, adaptación a nuevos retos académicos y gestión del cambio en la preadolescencia."
  },
  {
    id: 6,
    month: "ENERO",
    monthPillClass: "pill-orange",
    borderClass: "card-border-orange",
    date: "29 DE ENERO",
    grades: "8° Y 7°",
    title: "CUANDO HABLAR TAMBIÉN ES CUIDAR",
    description: "Comunicación asertiva con adolescentes de 7° y 8°: escucha activa sin juzgar, apertura de canales de confianza en el hogar y prevención ante situaciones de riesgo y presión social."
  },
  {
    id: 7,
    month: "ENERO",
    monthPillClass: "pill-orange",
    borderClass: "card-border-orange",
    date: "19 DE ENERO",
    grades: "9° Y 10°",
    title: "LÍMITES QUE CUIDAN, PALABRAS QUE CONECTAN",
    description: "Pautas de crianza positiva en la adolescencia media: establecimiento de acuerdos y límites claros con respeto y afecto, equilibrio en el uso de tecnología y fortalecimiento de vínculos familiares."
  },
  {
    id: 8,
    month: "FEBRERO",
    monthPillClass: "pill-green",
    borderClass: "card-border-green",
    date: "11 DE FEBRERO",
    grades: "11°",
    title: "CERRAR ETAPAS, ABRIR CAMINOS",
    description: "Acompañamiento a los jóvenes de grado 11° y sus familias en el cierre del ciclo escolar: orientación vocacional, manejo de la incertidumbre y construcción de su proyecto de vida hacia el futuro."
  }
];

const DEFAULT_ANALYTICS = {
  totalVisits: 148,
  uniqueSessions: 42,
  lastVisitDate: new Date().toLocaleDateString('es-CO') + ' ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
  tabs: { inicio: 84, encuentros: 34, quienes_somos: 18, recursos: 12 },
  interactions: { checkin_emocional: 48, inscripciones_talleres: 2, sugerencias_padres: 2 },
  emotions: { feliz: 21, tranquilo: 15, estresado: 8, desanimado: 4 },
  logs: [
    { id: 1, date: "23/08/2026 05:40 PM", section: "Inicio / Portada", action: "Visita a portada", device: "Escritorio" },
    { id: 2, date: "23/08/2026 05:48 PM", section: "Encuentros Familiares", action: "Consulta de talleres y calendario", device: "Móvil" },
    { id: 3, date: "23/08/2026 05:52 PM", section: "¿Quiénes Somos?", action: "Revisión de perfiles", device: "Escritorio" },
    { id: 4, date: "23/08/2026 06:01 PM", section: "Recursos & Enlaces", action: "Consulta de enlaces", device: "Móvil" }
  ]
};

const DEFAULT_RSVPS = [
  {
    id: 1,
    parentName: "Martha Cecilia Ortiz",
    studentRelated: "Mateo Gómez (8° B)",
    phone: "312 876 5432",
    workshop: "CUANDO HABLAR TAMBIÉN ES CUIDAR (29 de Enero)",
    date: "23/08/2026 09:12 AM"
  },
  {
    id: 2,
    parentName: "Carlos Mario Herrera",
    studentRelated: "Sofía Herrera (3° A)",
    phone: "318 234 5678",
    workshop: "LO QUE HAGO TAMBIÉN EDUCA (13 de Noviembre)",
    date: "23/08/2026 11:30 AM"
  }
];

const DEFAULT_CYCLE_BLOCKS = [];

const DEFAULT_SUGGESTIONS = [
  { id: 1, text: "Cómo hablar de educación financiera básica con los adolescentes.", date: "22/08/2026" },
  { id: 2, text: "Estrategias para que los niños duerman temprano sin pelear por el celular.", date: "23/08/2026" }
];

// ============================================================
// APP STATE & PERSISTENCE (HYBRID LOCAL + SERVER DATABASE)
// ============================================================

let siteImages = JSON.parse(localStorage.getItem('psicologia_site_images')) || DEFAULT_SITE_IMAGES;
let adminPassword = localStorage.getItem('psicologia_admin_password') || '123';
let adminSlug = localStorage.getItem('psicologia_admin_slug') || 'admin451200';
let psychologists = JSON.parse(localStorage.getItem('psicologia_psychologists')) || DEFAULT_PSYCHOLOGISTS;
let calendarWorkshops = JSON.parse(localStorage.getItem('psicologia_calendar_workshops')) || DEFAULT_CALENDAR_WORKSHOPS;
let cycleBlocks = JSON.parse(localStorage.getItem('psicologia_cycle_blocks')) || [];
let suggestions = JSON.parse(localStorage.getItem('psicologia_suggestions')) || DEFAULT_SUGGESTIONS;
let analytics = JSON.parse(localStorage.getItem('psicologia_analytics')) || DEFAULT_ANALYTICS;
let isAdminLoggedIn = sessionStorage.getItem('psicologia_admin_logged') === 'true';
let currentAdminTab = 'estadisticas';

const TAB_VISIT_COOLDOWN_MS = 15 * 60 * 1000;

// ============================================================
// SERVER DATABASE SYNCHRONIZATION ENGINE
// ============================================================

async function loadServerData() {
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const data = await res.json();
      if (data.calendarWorkshops && Array.isArray(data.calendarWorkshops)) {
        calendarWorkshops = data.calendarWorkshops;
        localStorage.setItem('psicologia_calendar_workshops', JSON.stringify(calendarWorkshops));
      }
      if (data.siteImages && typeof data.siteImages === 'object') {
        siteImages = { ...DEFAULT_SITE_IMAGES, ...data.siteImages };
        localStorage.setItem('psicologia_site_images', JSON.stringify(siteImages));
      }
      if (data.psychologists && Array.isArray(data.psychologists)) {
        psychologists = data.psychologists;
        localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
      }
      if (data.cycleBlocks && Array.isArray(data.cycleBlocks)) {
        cycleBlocks = data.cycleBlocks;
        localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
      }
      if (data.suggestions && Array.isArray(data.suggestions)) {
        suggestions = data.suggestions;
        localStorage.setItem('psicologia_suggestions', JSON.stringify(suggestions));
      }
      if (data.analytics && typeof data.analytics === 'object') {
        analytics = { ...analytics, ...data.analytics };
        localStorage.setItem('psicologia_analytics', JSON.stringify(analytics));
      }
      if (data.adminPassword) {
        adminPassword = data.adminPassword;
        localStorage.setItem('psicologia_admin_password', adminPassword);
      }
      if (data.adminSlug) {
        adminSlug = data.adminSlug;
        localStorage.setItem('psicologia_admin_slug', adminSlug);
      }
    }
  } catch (err) {
    console.log('Modo local activo:', err);
  }
}

async function syncCyclesToServer() {
  localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
  try {
    await fetch('/api/cycles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cycleBlocks })
    });
  } catch (err) {
    console.error('Error sincronizando bloques de ciclos con el servidor:', err);
  }
}

async function syncCalendarToServer() {
  localStorage.setItem('psicologia_calendar_workshops', JSON.stringify(calendarWorkshops));
  try {
    await fetch('/api/calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workshops: calendarWorkshops })
    });
  } catch (err) {
    console.error('Error sincronizando calendario con el servidor:', err);
  }
}

async function syncImagesToServer() {
  localStorage.setItem('psicologia_site_images', JSON.stringify(siteImages));
  try {
    await fetch('/api/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images: siteImages })
    });
  } catch (err) {
    console.error('Error sincronizando imágenes con el servidor:', err);
  }
}

async function syncPsychologistsToServer() {
  localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
  try {
    await fetch('/api/psychologists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ psychologists })
    });
  } catch (err) {
    console.error('Error sincronizando orientadoras con el servidor:', err);
  }
}

async function syncSuggestionAddToServer(text, date) {
  try {
    await fetch('/api/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, date })
    });
  } catch (err) {
    console.error('Error enviando sugerencia al servidor:', err);
  }
}

async function syncSuggestionDeleteToServer(id) {
  try {
    await fetch(`/api/suggestions/${id}`, { method: 'DELETE' });
  } catch (err) {
    console.error('Error eliminando sugerencia en servidor:', err);
  }
}

async function syncVisitToServer(section, action, device, tabKey, cycleKey) {
  try {
    await fetch('/api/analytics/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section, action, device, tabKey, cycleKey })
    });
  } catch (err) {
    // Silent
  }
}

async function syncSecurityToServer(adminPassword, adminSlug) {
  try {
    await fetch('/api/security', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminPassword, adminSlug })
    });
  } catch (err) {
    console.error('Error sincronizando seguridad con servidor:', err);
  }
}

// ============================================================
// INITIALIZATION ON DOM CONTENT LOADED
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {
  // Sincronizar primero con la base de datos centralizada del servidor
  await loadServerData();

  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('encuentros')) {
    recordVisit('Encuentros Familiares', 'Consulta de Calendario de Encuentros');
    renderCalendar();
  } else if (path.includes((adminSlug || 'admin451200').toLowerCase()) || path.includes('admin451200')) {
    initAdminPage();
  } else if (path.includes('admin')) {
    window.location.href = '/';
    return;
  } else if (path.includes('primera-infancia')) {
    recordCycleVisit('primera_infancia', 'Primera Infancia (J y T)');
    renderCyclePublicPage('primera_infancia');
  } else if (path.includes('infantil')) {
    recordCycleVisit('infantil', 'Ciclo Infantil (1, 2 y 3)');
    renderCyclePublicPage('infantil');
  } else if (path.includes('basico')) {
    recordCycleVisit('basico', 'Ciclo Básico (4 y 5)');
    renderCyclePublicPage('basico');
  } else if (path.includes('fundamental')) {
    recordCycleVisit('fundamental', 'Ciclo Fundamental (6 y 7)');
    renderCyclePublicPage('fundamental');
  } else if (path.includes('exploratorio')) {
    recordCycleVisit('exploratorio', 'Ciclo Exploratorio (8 y 9)');
    renderCyclePublicPage('exploratorio');
  } else if (path.includes('especializado')) {
    recordCycleVisit('especializado', 'Ciclo Especializado (10 y 11)');
    renderCyclePublicPage('especializado');
  } else {
    recordVisit('Inicio / Portada', 'Ingreso a la página de Inicio');
  }

  applySiteImages();
  renderTeamCards();
  updateBadgeCounts();
  setupNavDropdown();

  // Secret keyboard shortcut (Ctrl + Alt + A)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
      window.location.href = `/${adminSlug}`;
    }
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  // Sincronización continua en segundo plano para que los cambios del admin se actualicen automáticamente a los visitantes
  setInterval(async () => {
    try {
      const prevCycles = JSON.stringify(cycleBlocks);
      const res = await fetch('/api/data');
      if (res.ok) {
        const data = await res.json();
        if (data.cycleBlocks && Array.isArray(data.cycleBlocks)) {
          const newCycles = JSON.stringify(data.cycleBlocks);
          if (prevCycles !== newCycles) {
            cycleBlocks = data.cycleBlocks;
            localStorage.setItem('psicologia_cycle_blocks', newCycles);
            
            // Si el usuario está viendo un ciclo público, refrescarlo de inmediato
            const currentPath = window.location.pathname.toLowerCase();
            CYCLES_METADATA.forEach(m => {
              if (currentPath.includes(m.slug)) {
                renderCyclePublicPage(m.key);
              }
            });
            
            // Si está en el admin y no está escribiendo en el formulario de edición
            if (currentPath.includes('admin') && !document.getElementById('cycleBlockEditId')?.value) {
              renderAdminCycleBlocks();
            }
          }
        }
      }
    } catch (e) {
      // Background sync silent fail
    }
  }, 4000);
});

// Dropdown click & hover helper
function setupNavDropdown() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      if (toggle.getAttribute('href') === '#' || toggle.getAttribute('href') === '') {
        e.preventDefault();
      }
      // Toggle on click without unwanted jumps
      dd.classList.toggle('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('open'));
    }
  });
}

// ============================================================
// 1. INTERACTIVE CALENDAR ENGINE (ENCUENTROS FAMILIARES)
// ============================================================

const MONTH_METADATA = [
  { name: "SEPTIEMBRE", pillClass: "pill-pink", borderClass: "card-border-pink" },
  { name: "OCTUBRE", pillClass: "pill-teal", borderClass: "card-border-teal" },
  { name: "NOVIEMBRE", pillClass: "pill-purple", borderClass: "card-border-purple" },
  { name: "DICIEMBRE", pillClass: "pill-blue", borderClass: "card-border-blue" },
  { name: "ENERO", pillClass: "pill-orange", borderClass: "card-border-orange" },
  { name: "FEBRERO", pillClass: "pill-green", borderClass: "card-border-green" },
  { name: "MARZO", pillClass: "pill-teal", borderClass: "card-border-teal" },
  { name: "ABRIL", pillClass: "pill-pink", borderClass: "card-border-pink" },
  { name: "MAYO", pillClass: "pill-purple", borderClass: "card-border-purple" },
  { name: "JUNIO", pillClass: "pill-orange", borderClass: "card-border-orange" }
];

function renderCalendar() {
  const container = document.getElementById('calendarColumnsContainer');
  if (!container) return;

  // Filter only months that HAVE active workshops
  const activeMonths = MONTH_METADATA.filter(m => 
    calendarWorkshops.some(w => w.month.toUpperCase() === m.name)
  );

  if (activeMonths.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: #64748b; background: white; border-radius: var(--radius-lg); border: 2px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🗓️</div>
        <h4 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin-bottom: 6px;">No hay encuentros programados por el momento</h4>
        <p style="font-size: 0.92rem; color: #64748b;">Pronto publicaremos las nuevas fechas de nuestros encuentros familiares.</p>
      </div>
    `;
    return;
  }

  const count = activeMonths.length;
  if (window.innerWidth >= 1100) {
    if (count <= 5) {
      container.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`;
      container.style.maxWidth = count < 5 ? `${count * 270}px` : '100%';
      container.style.margin = '0 auto';
    } else {
      container.style.gridTemplateColumns = `repeat(5, minmax(0, 1fr))`;
      container.style.maxWidth = '100%';
      container.style.margin = '0 auto';
    }
  } else {
    container.style.gridTemplateColumns = '';
    container.style.maxWidth = '';
    container.style.margin = '';
  }

  let html = '';

  activeMonths.forEach(m => {
    const monthWorkshops = calendarWorkshops.filter(w => w.month.toUpperCase() === m.name);

    html += `
      <div class="calendar-month-col">
        <div class="month-pill-header ${m.pillClass}">
          ${m.name}
        </div>
        <div class="calendar-cards-list">
    `;

    monthWorkshops.forEach(w => {
      const hasAttachment = !!w.slidesUrl;
      const isImage = hasAttachment && (w.slidesUrl.startsWith('data:image/') || w.slidesUrl.match(/\.(jpeg|jpg|png|webp|gif|svg)($|\?)/i));

      html += `
        <div class="cal-workshop-card ${w.borderClass || m.borderClass}" onclick="openWorkshopDetailModal(${w.id})">
          <div class="cal-card-date">${w.date}</div>
          <div class="cal-card-grades">${w.grades}</div>
          <div class="cal-card-title">"${w.title}"</div>
          ${hasAttachment ? (
            isImage ? `
              <div class="cal-card-slides-badge" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">
                <i data-lucide="image"></i> Imagen
              </div>
            ` : `
              <div class="cal-card-slides-badge">
                <i data-lucide="presentation"></i> Diapositivas
              </div>
            `
          ) : ''}
          <div class="cal-card-click-hint">
            <i data-lucide="info"></i> Ver descripción
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function openWorkshopDetailModal(id) {
  const workshop = calendarWorkshops.find(w => w.id === id);
  if (!workshop) return;

  const modal = document.getElementById('workshopDetailModal');
  const modalCard = modal ? modal.querySelector('.modal-card') : null;
  const titleEl = document.getElementById('detailWorkshopTitle');
  const dateEl = document.getElementById('detailWorkshopDate');
  const gradesEl = document.getElementById('detailWorkshopGrades');
  const monthEl = document.getElementById('detailWorkshopMonth');
  const descEl = document.getElementById('detailWorkshopDesc');
  const rsvpBtn = document.getElementById('btnRsvpFromDetail');
  
  const embedWrap = document.getElementById('detailWorkshopSlidesEmbedWrap');
  const embedContainer = document.getElementById('slidesEmbedContainer');
  const embedTitle = document.getElementById('detailWorkshopSlidesTitle');
  const externalBtn = document.getElementById('detailWorkshopSlidesExternalBtn');

  if (titleEl) titleEl.textContent = `"${workshop.title}"`;
  if (dateEl) dateEl.textContent = `📅 ${workshop.date}`;
  if (gradesEl) gradesEl.textContent = `🎓 Grados: ${workshop.grades}`;
  if (monthEl) monthEl.textContent = `🗓️ Mes: ${workshop.month}`;
  if (descEl) descEl.textContent = workshop.description || 'Espacio formativo y de orientación para fortalecer la convivencia y el acompañamiento familiar.';

  // Handle Embedded Live Slides / Image Viewer
  if (embedWrap && embedContainer) {
    if (workshop.slidesUrl) {
      if (modalCard) modalCard.classList.add('modal-card-wide');
      embedWrap.style.display = 'block';

      let embedUrl = workshop.slidesUrl;
      let isImage = embedUrl.startsWith('data:image/') || embedUrl.match(/\.(jpeg|jpg|gif|png|webp|svg)($|\?)/i);
      let isPdf = embedUrl.startsWith('data:application/pdf') || embedUrl.match(/\.pdf($|\?)/i);

      if (isImage) {
        embedWrap.classList.add('is-image');
        embedContainer.innerHTML = `<img src="${embedUrl}" alt="Material del encuentro" class="workshop-detail-img">`;
      } else {
        embedWrap.classList.remove('is-image');
        if (embedTitle) {
          embedTitle.textContent = `📊 Diapositivas: ${workshop.slidesName || 'Presentación'}`;
        }

        if (externalBtn) {
          externalBtn.href = workshop.slidesUrl;
          if (workshop.slidesUrl.startsWith('data:') || isPdf || workshop.slidesUrl.endsWith('.pptx') || workshop.slidesUrl.endsWith('.ppt')) {
            externalBtn.setAttribute('download', workshop.slidesName || `Diapositivas_${workshop.grades.replace(/[^a-zA-Z0-9]/g, '_')}`);
            externalBtn.innerHTML = `<i data-lucide="download"></i> Descargar Archivo`;
          } else {
            externalBtn.removeAttribute('download');
            externalBtn.innerHTML = `<i data-lucide="external-link"></i> Abrir en grande`;
          }
        }

        // Format URL for Google Slides or Canva embed if needed
        if (embedUrl.includes('docs.google.com/presentation')) {
          embedUrl = embedUrl.replace(/\/edit.*$/, '/embed?start=false&loop=false&delayms=3000')
                             .replace(/\/pub.*$/, '/embed?start=false&loop=false&delayms=3000');
          if (!embedUrl.includes('/embed')) {
            embedUrl = embedUrl.replace(/\/$/, '') + '/embed?start=false&loop=false&delayms=3000';
          }
        }

        if (isPdf) {
          embedContainer.innerHTML = `
            <iframe src="${embedUrl}#toolbar=1&navpanes=0" width="100%" height="100%" style="border:none; border-radius: 8px;" allowfullscreen>
              <p style="color: white; padding: 20px; text-align: center;">
                Tu navegador no soporta visualizador PDF integrado. 
                <a href="${embedUrl}" download="${workshop.slidesName || 'diapositivas.pdf'}" style="color: #38bdf8; text-decoration: underline;">Haz clic aquí para descargar el PDF</a>
              </p>
            </iframe>
          `;
        } else {
          embedContainer.innerHTML = `
            <iframe src="${embedUrl}" width="100%" height="100%" style="border:none; border-radius: 8px;" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" loading="lazy"></iframe>
          `;
        }
      }
    } else {
      if (modalCard) modalCard.classList.remove('modal-card-wide');
      embedWrap.style.display = 'none';
      embedContainer.innerHTML = '';
    }
  }

  if (rsvpBtn) {
    rsvpBtn.onclick = () => {
      closeWorkshopDetailModal();
      openRsvpModal(`"${workshop.title}" (${workshop.date})`);
    };
  }

  if (modal) modal.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function closeWorkshopDetailModal() {
  const modal = document.getElementById('workshopDetailModal');
  if (modal) {
    modal.classList.remove('active');
    const embedContainer = document.getElementById('slidesEmbedContainer');
    if (embedContainer) embedContainer.innerHTML = ''; // Clean iframe on close
  }
}

// ============================================================
// 2. ANTI-FARMING VISITOR TRACKING
// ============================================================

function recordVisit(sectionName, actionDetail) {
  const path = window.location.pathname.toLowerCase();
  if (isAdminLoggedIn || path.includes('admin')) {
    return;
  }

  const now = Date.now();
  const nowFormatted = new Date().toLocaleDateString('es-CO') + ' ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
  const device = isMobile ? 'Móvil' : 'Escritorio';

  let sessionHistory = {};
  try {
    sessionHistory = JSON.parse(sessionStorage.getItem('psico_tab_history') || '{}');
  } catch (e) {
    sessionHistory = {};
  }

  const tabKey = getTabKey(sectionName);
  const lastTabVisit = sessionHistory[tabKey] || 0;
  const isCooldownActive = (now - lastTabVisit) < TAB_VISIT_COOLDOWN_MS;

  if (!isCooldownActive) {
    analytics.totalVisits = (analytics.totalVisits || 0) + 1;
    analytics.lastVisitDate = nowFormatted;

    if (!sessionStorage.getItem('psico_session_tracked')) {
      analytics.uniqueSessions = (analytics.uniqueSessions || 0) + 1;
      sessionStorage.setItem('psico_session_tracked', 'true');
    }

    if (!analytics.tabs) analytics.tabs = { inicio: 0, encuentros: 0, ciclos: 0 };
    analytics.tabs[tabKey] = (analytics.tabs[tabKey] || 0) + 1;

    if (!analytics.logs) analytics.logs = [];
    analytics.logs.unshift({
      id: now,
      date: nowFormatted,
      section: sectionName,
      action: actionDetail,
      device: device
    });

    if (analytics.logs.length > 50) {
      analytics.logs = analytics.logs.slice(0, 50);
    }

    sessionHistory[tabKey] = now;
    sessionStorage.setItem('psico_tab_history', JSON.stringify(sessionHistory));
    localStorage.setItem('psicologia_analytics', JSON.stringify(analytics));
    syncVisitToServer(sectionName, actionDetail, device, tabKey, null);
  }
}

function recordCycleVisit(cycleKey, cycleName) {
  const path = window.location.pathname.toLowerCase();
  if (isAdminLoggedIn || path.includes('admin')) {
    return;
  }

  const now = Date.now();
  const nowFormatted = new Date().toLocaleDateString('es-CO') + ' ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
  const device = isMobile ? 'Móvil' : 'Escritorio';

  let sessionHistory = {};
  try {
    sessionHistory = JSON.parse(sessionStorage.getItem('psico_tab_history') || '{}');
  } catch (e) {
    sessionHistory = {};
  }

  const lastVisit = sessionHistory['cycle_' + cycleKey] || 0;
  const isCooldownActive = (now - lastVisit) < TAB_VISIT_COOLDOWN_MS;

  if (!isCooldownActive) {
    analytics.totalVisits = (analytics.totalVisits || 0) + 1;
    analytics.lastVisitDate = nowFormatted;

    if (!sessionStorage.getItem('psico_session_tracked')) {
      analytics.uniqueSessions = (analytics.uniqueSessions || 0) + 1;
      sessionStorage.setItem('psico_session_tracked', 'true');
    }

    if (!analytics.tabs) analytics.tabs = { inicio: 0, encuentros: 0, ciclos: 0 };
    analytics.tabs.ciclos = (analytics.tabs.ciclos || 0) + 1;

    if (!analytics.cycles) {
      analytics.cycles = {
        primera_infancia: 0,
        infantil: 0,
        basico: 0,
        fundamental: 0,
        exploratorio: 0,
        especializado: 0
      };
    }
    analytics.cycles[cycleKey] = (analytics.cycles[cycleKey] || 0) + 1;

    if (!analytics.logs) analytics.logs = [];
    analytics.logs.unshift({
      id: now,
      date: nowFormatted,
      section: `Ciclos: ${cycleName}`,
      action: `Visita a la página de ${cycleName}`,
      device: device
    });

    if (analytics.logs.length > 50) {
      analytics.logs = analytics.logs.slice(0, 50);
    }

    sessionHistory['cycle_' + cycleKey] = now;
    sessionStorage.setItem('psico_tab_history', JSON.stringify(sessionHistory));
    localStorage.setItem('psicologia_analytics', JSON.stringify(analytics));
    syncVisitToServer(`Ciclos: ${cycleName}`, `Visita a la página de ${cycleName}`, device, 'ciclos', cycleKey);
  }
}

function getTabKey(sectionName) {
  if (sectionName.includes('Inicio')) return 'inicio';
  if (sectionName.includes('Encuentros')) return 'encuentros';
  if (sectionName.includes('Ciclo')) return 'ciclos';
  return 'inicio';
}

// ============================================================
// 3. ADMIN PAGE & DASHBOARD ENGINE (HUB GRID + THEME TOGGLE)
// ============================================================

const MODULE_TITLES = {
  'estadisticas': '📊 Estadísticas & Métricas de Visitas',
  'calendario': '📅 Gestión del Calendario de Encuentros',
  'imagenes': '🖼️ Gestor de Imágenes del Sitio',
  'psicologas': '👩‍🏫 Personalización de Orientadoras',
  'orientadoras': '👩‍🏫 Personalización de Orientadoras',
  'ciclos': '🎓 Gestor de Ciclos Escolares',
  'seguridad': '🔐 Configuración de Seguridad & Enlace Secreto'
};

function applyAdminTheme() {
  const isDark = localStorage.getItem('psico_admin_theme') === 'dark';
  const root = document.documentElement;
  const body = document.body;
  const toggleIcon = document.getElementById('themeToggleIcon');
  const toggleText = document.getElementById('themeToggleText');

  if (isDark) {
    root.classList.add('admin-dark');
    body.classList.add('admin-dark');
    if (toggleText) toggleText.textContent = 'Modo Claro';
    if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'sun');
  } else {
    root.classList.remove('admin-dark');
    body.classList.remove('admin-dark');
    if (toggleText) toggleText.textContent = 'Modo Oscuro';
    if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'moon');
  }
  if (window.lucide) lucide.createIcons();
}

function toggleAdminTheme() {
  const isDark = localStorage.getItem('psico_admin_theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('psico_admin_theme', nextTheme);
  applyAdminTheme();
  showToast(nextTheme === 'dark' ? '🌙 Modo Oscuro activado' : '☀️ Modo Claro activado');
}

function openAdminModule(moduleName) {
  currentAdminTab = moduleName;
  const hubGrid = document.getElementById('adminHubGrid');
  const navbar = document.getElementById('adminModuleNavbar');
  const titleEl = document.getElementById('adminActiveModuleTitle');
  const panes = document.querySelectorAll('.dash-pane');

  if (hubGrid) hubGrid.style.display = 'none';
  if (navbar) navbar.style.display = 'flex';
  if (titleEl) titleEl.textContent = MODULE_TITLES[moduleName] || 'Módulo';

  panes.forEach(p => p.classList.remove('active'));
  const activePane = document.getElementById(`pane-${moduleName}`);
  if (activePane) activePane.classList.add('active');

  renderActiveAdminTab();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

function returnToAdminHub() {
  const hubGrid = document.getElementById('adminHubGrid');
  const navbar = document.getElementById('adminModuleNavbar');
  const panes = document.querySelectorAll('.dash-pane');

  panes.forEach(p => p.classList.remove('active'));
  if (navbar) navbar.style.display = 'none';
  if (hubGrid) hubGrid.style.display = 'grid';

  updateBadgeCounts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

function initAdminPage() {
  const loginSection = document.getElementById('adminLoginSection');
  const dashSection = document.getElementById('adminDashboardSection');

  if (!loginSection || !dashSection) return;

  applyAdminTheme();

  if (isAdminLoggedIn) {
    loginSection.style.display = 'none';
    dashSection.style.display = 'block';
    returnToAdminHub();
    updateSecretUrlDisplay();
  } else {
    loginSection.style.display = 'block';
    dashSection.style.display = 'none';
    const passInput = document.getElementById('adminPass');
    if (passInput) passInput.focus();
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const pass = (document.getElementById('adminPass')?.value || '').trim();

  if (pass === adminPassword || pass === '123' || pass === 'admin') {
    isAdminLoggedIn = true;
    sessionStorage.setItem('psicologia_admin_logged', 'true');
    initAdminPage();
    showToast('¡Bienvenida al Panel de Control de Psicoorientación!');
    event.target.reset();
  } else {
    showToast('❌ Contraseña incorrecta. Recuerda que la contraseña inicial es 123');
    const passInput = document.getElementById('adminPass');
    if (passInput) {
      passInput.value = '';
      passInput.focus();
    }
  }
}

function handleAdminLogout() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('psicologia_admin_logged');
  initAdminPage();
  showToast('Sesión de administrador cerrada.');
}

function switchAdminTab(tabName) {
  openAdminModule(tabName);
}

function renderActiveAdminTab() {
  switch (currentAdminTab) {
    case 'estadisticas':
      renderAnalyticsDashboard();
      break;
    case 'calendario':
      renderAdminCalendar();
      break;
    case 'imagenes':
      updateImageManagerPreviews();
      break;
    case 'psicologas':
    case 'orientadoras':
      populatePsychologistEditForms();
      break;
    case 'ciclos':
      renderAdminCycleBlocks();
      break;
    case 'seguridad':
      updateSecretUrlDisplay();
      break;
  }
}

// ============================================================
// 4. ADMIN CALENDAR MANAGEMENT (EDIT/ADD/DELETE/PREVIEW)
// ============================================================

let calendarActiveFilter = 'TODOS';

function handleCalDateAutoGenerate() {
  const month = document.getElementById('calMonthSelect')?.value || 'SEPTIEMBRE';
  const dayNum = document.getElementById('calDayNumberSelect')?.value || '25';
  const dateInput = document.getElementById('calDateInput');
  if (dateInput) {
    dateInput.value = `${dayNum} DE ${month}`;
  }
  updateCalLivePreview();
}

function selectGradeChip(grade) {
  const gradesInput = document.getElementById('calGradesInput');
  if (gradesInput) {
    gradesInput.value = grade;
    updateCalLivePreview();
  }
}

function updateCalLivePreview() {
  const month = document.getElementById('calMonthSelect')?.value || 'SEPTIEMBRE';
  const date = document.getElementById('calDateInput')?.value.trim() || '25 DE SEPTIEMBRE';
  const grades = document.getElementById('calGradesInput')?.value.trim() || 'J° Y T°';
  const title = document.getElementById('calTitleInput')?.value.trim() || 'ACOMPAÑO A MI HIJO A DESCUBRIR QUIEN ES';
  const slidesUrl = document.getElementById('calSlidesUrlHidden')?.value || '';
  const slidesName = document.getElementById('calSlidesNameHidden')?.value || '';

  const meta = MONTH_METADATA.find(m => m.name === month) || { borderClass: 'card-border-pink' };
  const card = document.getElementById('livePreviewWorkshopCard');
  const dateEl = document.getElementById('livePrevDate');
  const gradesEl = document.getElementById('livePrevGrades');
  const titleEl = document.getElementById('livePrevTitle');
  const badgeEl = document.getElementById('livePrevSlidesBadge');
  const attachBox = document.getElementById('livePrevAttachmentBox');
  const attachMedia = document.getElementById('livePrevAttachmentMedia');

  if (card) {
    card.className = `cal-workshop-card ${meta.borderClass}`;
  }
  if (dateEl) dateEl.textContent = date;
  if (gradesEl) gradesEl.textContent = grades;
  if (titleEl) titleEl.textContent = `"${title}"`;

  if (slidesUrl) {
    const isImg = slidesUrl.startsWith('data:image/') || slidesUrl.match(/\.(jpeg|jpg|png|webp|gif)/i);
    if (badgeEl) {
      badgeEl.style.display = 'inline-flex';
      badgeEl.innerHTML = isImg ? `<i data-lucide="image"></i> Imagen Adjunta` : `<i data-lucide="presentation"></i> Diapositivas`;
    }
    if (attachBox && attachMedia) {
      attachBox.style.display = 'block';
      if (isImg) {
        attachMedia.innerHTML = `<img src="${slidesUrl}" alt="Vista previa" style="max-width: 100%; max-height: 140px; border-radius: 6px; object-fit: contain; box-shadow: var(--shadow-sm);">`;
      } else {
        attachMedia.innerHTML = `
          <div style="font-size: 0.85rem; font-weight: 700; color: #1e40af; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px; background: #eff6ff; border-radius: 6px;">
            <i data-lucide="presentation"></i> ${slidesName || 'Presentación web adjunta'}
          </div>
        `;
      }
    }
  } else {
    if (badgeEl) badgeEl.style.display = 'none';
    if (attachBox) attachBox.style.display = 'none';
  }
  if (window.lucide) lucide.createIcons();
}

function filterAdminCalendar(month, btnElement) {
  calendarActiveFilter = month;
  const buttons = document.querySelectorAll('.cal-filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderAdminCalendar();
}

function startNewWorkshopCreation() {
  resetCalendarForm();
  const formWrap = document.getElementById('calendarFormWrap');
  if (formWrap) {
    formWrap.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('calTitleInput')?.focus();
  }
}

function handleSlidesFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert('El archivo supera los 5MB. Para presentaciones muy pesadas te recomendamos usar la Opción 2 (pegar enlace directo a Google Slides, Canva o OneDrive).');
  }

  const isImg = file.type.startsWith('image/');
  const statusEl = document.getElementById('calFileUploadStatus');
  if (statusEl) {
    statusEl.style.display = 'block';
    statusEl.textContent = `Cargando ${isImg ? 'imagen' : 'archivo'} "${file.name}"...`;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    document.getElementById('calSlidesUrlHidden').value = dataUrl;
    document.getElementById('calSlidesNameHidden').value = file.name;
    document.getElementById('calSlidesUrlInput').value = '';

    const preview = document.getElementById('calAttachmentPreview');
    const nameEl = document.getElementById('calAttachmentName');
    if (preview && nameEl) {
      nameEl.textContent = `${isImg ? '🖼️ Imagen' : '📊 Archivo'}: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      preview.style.display = 'flex';
    }
    if (statusEl) {
      statusEl.textContent = `✓ ${isImg ? 'Imagen' : 'Archivo'} "${file.name}" listo`;
    }
    updateCalLivePreview();
    if (window.lucide) lucide.createIcons();
  };
  reader.readAsDataURL(file);
}

function handleSlidesUrlInput() {
  const url = (document.getElementById('calSlidesUrlInput')?.value || '').trim();
  const hiddenUrl = document.getElementById('calSlidesUrlHidden');
  const hiddenName = document.getElementById('calSlidesNameHidden');
  const preview = document.getElementById('calAttachmentPreview');
  const nameEl = document.getElementById('calAttachmentName');
  const statusEl = document.getElementById('calFileUploadStatus');

  if (url) {
    hiddenUrl.value = url;
    let displayName = 'Presentación Web';
    if (url.includes('docs.google.com/presentation')) displayName = 'Google Slides';
    else if (url.includes('canva.com')) displayName = 'Presentación Canva';
    else if (url.includes('drive.google.com')) displayName = 'Google Drive';
    else if (url.match(/\.(jpeg|jpg|png|webp|gif)/i)) displayName = 'Imagen Web';
    else if (url.includes('onedrive') || url.includes('sharepoint')) displayName = 'PowerPoint Online';
    hiddenName.value = displayName;

    if (preview && nameEl) {
      nameEl.textContent = `${displayName} (${url.slice(0, 30)}...)`;
      preview.style.display = 'flex';
    }
    if (statusEl) statusEl.style.display = 'none';
  } else if (!document.getElementById('calFileInput')?.files.length) {
    hiddenUrl.value = '';
    hiddenName.value = '';
    if (preview) preview.style.display = 'none';
  }
  updateCalLivePreview();
}

function removeAttachedSlides() {
  const hiddenUrl = document.getElementById('calSlidesUrlHidden');
  const hiddenName = document.getElementById('calSlidesNameHidden');
  const urlInput = document.getElementById('calSlidesUrlInput');
  const fileInput = document.getElementById('calFileInput');
  const preview = document.getElementById('calAttachmentPreview');
  if (hiddenUrl) hiddenUrl.value = '';
  if (hiddenName) hiddenName.value = '';
  if (urlInput) urlInput.value = '';
  if (fileInput) fileInput.value = '';
  if (preview) preview.style.display = 'none';
  if (statusEl) statusEl.style.display = 'none';
  updateCalLivePreview();
  showToast('Material adjunto retirado.');
}

let workshopIdToDelete = null;

function renderAdminCalendar() {
  const container = document.getElementById('adminCalendarList');
  const filterBar = document.getElementById('calendarMonthFilterBar');
  if (!container) return;

  // Dynamically populate active month filter buttons
  if (filterBar) {
    const activeMonths = MONTH_METADATA.filter(m => 
      calendarWorkshops.some(w => w.month.toUpperCase() === m.name)
    );
    
    let filterHtml = `<button class="cal-filter-btn ${calendarActiveFilter === 'TODOS' ? 'active' : ''}" onclick="filterAdminCalendar('TODOS', this)">Todos (${calendarWorkshops.length})</button>`;
    
    activeMonths.forEach(m => {
      const count = calendarWorkshops.filter(w => w.month.toUpperCase() === m.name).length;
      const isActive = calendarActiveFilter === m.name;
      const monthTitle = m.name.charAt(0) + m.name.slice(1).toLowerCase();
      filterHtml += `<button class="cal-filter-btn ${isActive ? 'active' : ''}" onclick="filterAdminCalendar('${m.name}', this)">${monthTitle} (${count})</button>`;
    });

    filterBar.innerHTML = filterHtml;
  }

  let filtered = calendarWorkshops;
  if (calendarActiveFilter && calendarActiveFilter !== 'TODOS') {
    filtered = calendarWorkshops.filter(w => w.month.toUpperCase() === calendarActiveFilter);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; color: #64748b; padding: 32px 20px; text-align: center; background: #f8fafc; border-radius: var(--radius-md); border: 2px dashed #cbd5e1;">No hay encuentros registrados para este mes. Puedes agregar uno usando el formulario de arriba.</div>`;
    return;
  }

  container.className = 'admin-calendar-grid-3';
  container.innerHTML = filtered.map(w => {
    const meta = MONTH_METADATA.find(m => m.name === w.month.toUpperCase()) || { pillClass: 'pill-pink', borderClass: 'card-border-pink' };
    const hasAttachment = !!w.slidesUrl;
    const isImage = hasAttachment && (w.slidesUrl.startsWith('data:image/') || w.slidesUrl.match(/\.(jpeg|jpg|png|webp|gif|svg)($|\?)/i));

    return `
      <div class="cal-compact-card ${w.borderClass || meta.borderClass}">
        <div>
          <div class="cal-compact-header">
            <span class="cal-item-month-badge ${meta.pillClass}">${w.month}</span>
            <span class="card-tag">${w.grades}</span>
          </div>
          
          <div class="cal-compact-date">📅 ${w.date}</div>
          <h5 class="cal-compact-title">"${w.title}"</h5>
          
          ${hasAttachment ? (
            isImage ? `
              <span class="cal-compact-attach" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">
                <i data-lucide="image"></i> Imagen Adjunta
              </span>
            ` : `
              <span class="cal-compact-attach" style="background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe;">
                <i data-lucide="presentation"></i> Diapositivas
              </span>
            `
          ) : ''}
        </div>

        <div class="cal-compact-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="editCalendarWorkshop(${w.id})" style="font-weight: 700;">
            <i data-lucide="edit-3"></i> Editar
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="promptDeleteCalendarWorkshop(${w.id})" style="color: #dc2626; border-color: #fca5a5; font-weight: 700;">
            <i data-lucide="trash-2"></i> Eliminar
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function promptDeleteCalendarWorkshop(id) {
  const workshop = calendarWorkshops.find(w => w.id === id);
  if (!workshop) return;

  workshopIdToDelete = id;
  const modal = document.getElementById('confirmDeleteModal');
  const msgEl = document.getElementById('confirmDeleteMsg');
  const btnAction = document.getElementById('btnConfirmDeleteAction');

  if (msgEl) {
    msgEl.innerHTML = `¿Deseas eliminar el encuentro <strong>"${workshop.title}"</strong> (${workshop.date}) del calendario?`;
  }

  if (btnAction) {
    btnAction.onclick = () => {
      executeDeleteCalendarWorkshop(workshopIdToDelete);
      closeConfirmDeleteModal();
    };
  }

  if (modal) modal.classList.add('active');
}

function closeConfirmDeleteModal() {
  const modal = document.getElementById('confirmDeleteModal');
  if (modal) modal.classList.remove('active');
  workshopIdToDelete = null;
}

function executeDeleteCalendarWorkshop(id) {
  if (!id) return;
  calendarWorkshops = calendarWorkshops.filter(w => w.id !== id);
  localStorage.setItem('psicologia_calendar_workshops', JSON.stringify(calendarWorkshops));
  syncCalendarToServer();
  renderAdminCalendar();
  updateBadgeCounts();
  showToast('✅ Encuentro eliminado con éxito.');
}

function handleSaveCalendarWorkshop(event) {
  event.preventDefault();
  const idInput = document.getElementById('calEditId').value;
  const month = (document.getElementById('calMonthSelect')?.value || 'SEPTIEMBRE').toUpperCase();
  const date = document.getElementById('calDateInput').value.trim();
  const grades = document.getElementById('calGradesInput').value.trim();
  const title = document.getElementById('calTitleInput').value.trim().replace(/^["']|["']$/g, '');
  const description = document.getElementById('calDescInput').value.trim();
  const slidesUrl = (document.getElementById('calSlidesUrlHidden')?.value || '').trim();
  const slidesName = (document.getElementById('calSlidesNameHidden')?.value || '').trim();

  const meta = MONTH_METADATA.find(m => m.name === month) || { pillClass: 'pill-pink', borderClass: 'card-border-pink' };

  if (idInput) {
    // Edit existing
    const id = parseInt(idInput);
    const index = calendarWorkshops.findIndex(w => w.id === id);
    if (index !== -1) {
      calendarWorkshops[index] = {
        ...calendarWorkshops[index],
        month,
        monthPillClass: meta.pillClass,
        borderClass: meta.borderClass,
        date,
        grades,
        title,
        description,
        slidesUrl: slidesUrl || '',
        slidesName: slidesName || ''
      };
      showToast('✅ ¡Encuentro actualizado con éxito!');
    }
  } else {
    // Add new
    const newWorkshop = {
      id: Date.now(),
      month,
      monthPillClass: meta.pillClass,
      borderClass: meta.borderClass,
      date,
      grades,
      title,
      description,
      slidesUrl: slidesUrl || '',
      slidesName: slidesName || ''
    };
    calendarWorkshops.push(newWorkshop);
    showToast('✅ ¡Nuevo encuentro añadido al calendario!');
  }

  localStorage.setItem('psicologia_calendar_workshops', JSON.stringify(calendarWorkshops));
  syncCalendarToServer();
  resetCalendarForm();
  renderAdminCalendar();
  renderCalendar();
  updateBadgeCounts();
}

function editCalendarWorkshop(id) {
  const w = calendarWorkshops.find(item => item.id === id);
  if (!w) return;

  document.getElementById('calEditId').value = w.id;
  
  // Set month
  const monthSelect = document.getElementById('calMonthSelect');
  if (monthSelect) monthSelect.value = w.month.toUpperCase();

  // Try parsing day number from date string e.g. "25 DE SEPTIEMBRE"
  const dayMatch = (w.date || '').match(/\b([0-9]{1,2})\b/);
  const daySelect = document.getElementById('calDayNumberSelect');
  if (dayMatch && daySelect) {
    daySelect.value = dayMatch[1];
  }

  document.getElementById('calDateInput').value = w.date;
  document.getElementById('calGradesInput').value = w.grades;
  document.getElementById('calTitleInput').value = w.title;
  document.getElementById('calDescInput').value = w.description || '';

  // Set slides/images info
  const hiddenUrl = document.getElementById('calSlidesUrlHidden');
  const hiddenName = document.getElementById('calSlidesNameHidden');
  const urlInput = document.getElementById('calSlidesUrlInput');
  const fileInput = document.getElementById('calFileInput');
  const preview = document.getElementById('calAttachmentPreview');
  const nameEl = document.getElementById('calAttachmentName');
  const statusEl = document.getElementById('calFileUploadStatus');
  const titleHeader = document.getElementById('calFormHeaderTitle');

  if (hiddenUrl) hiddenUrl.value = w.slidesUrl || '';
  if (hiddenName) hiddenName.value = w.slidesName || '';
  if (urlInput) urlInput.value = (w.slidesUrl && !w.slidesUrl.startsWith('data:')) ? w.slidesUrl : '';
  if (fileInput) fileInput.value = '';
  if (statusEl) statusEl.style.display = 'none';

  if (w.slidesUrl && preview && nameEl) {
    const isImg = w.slidesUrl.startsWith('data:image/') || w.slidesUrl.match(/\.(jpeg|jpg|png|webp|gif)/i);
    nameEl.textContent = `${isImg ? '🖼️ Imagen' : '📊 Archivo'}: ${w.slidesName || 'Adjunto'}`;
    preview.style.display = 'flex';
  } else if (preview) {
    preview.style.display = 'none';
  }

  if (titleHeader) titleHeader.textContent = `Editando: "${w.title}"`;
  document.getElementById('calFormSubmitBtn').innerHTML = `<i data-lucide="save"></i> Guardar Cambios del Encuentro`;
  document.getElementById('calCancelEditBtn').style.display = 'inline-flex';
  
  updateCalLivePreview();

  // Scroll to form
  document.getElementById('calendarFormWrap').scrollIntoView({ behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

function resetCalendarForm() {
  document.getElementById('calendarWorkshopForm').reset();
  document.getElementById('calEditId').value = '';
  const hiddenUrl = document.getElementById('calSlidesUrlHidden');
  const hiddenName = document.getElementById('calSlidesNameHidden');
  const preview = document.getElementById('calAttachmentPreview');
  const statusEl = document.getElementById('calFileUploadStatus');
  const titleHeader = document.getElementById('calFormHeaderTitle');

  if (hiddenUrl) hiddenUrl.value = '';
  if (hiddenName) hiddenName.value = '';
  if (preview) preview.style.display = 'none';
  if (statusEl) statusEl.style.display = 'none';
  if (titleHeader) titleHeader.textContent = 'Crear o Editar Encuentro';

  document.getElementById('calFormSubmitBtn').innerHTML = `<i data-lucide="plus-circle"></i> Guardar Encuentro`;
  document.getElementById('calCancelEditBtn').style.display = 'none';
  
  handleCalDateAutoGenerate();
  if (window.lucide) lucide.createIcons();
}

function deleteCalendarWorkshop(id) {
  promptDeleteCalendarWorkshop(id);
}

function resetCalendarToDefault() {
  if (confirm('¿Deseas restablecer el calendario oficial 2026-2027 a sus fechas originales?')) {
    calendarWorkshops = DEFAULT_CALENDAR_WORKSHOPS;
    localStorage.setItem('psicologia_calendar_workshops', JSON.stringify(calendarWorkshops));
    syncCalendarToServer();
    renderAdminCalendar();
    showToast('Calendario restablecido a la versión oficial.');
  }
}

// ============================================================
// 5. ANALYTICS RENDERING
// ============================================================

function toggleCycleStatsDropdown() {
  const dd = document.getElementById('cycleStatsDropdown');
  const hint = document.getElementById('cycleDropdownHint');
  if (!dd) return;
  const isOpen = dd.style.display === 'block';
  dd.style.display = isOpen ? 'none' : 'block';
  if (hint) hint.textContent = isOpen ? 'Clic para desplegar ▼' : 'Clic para ocultar ▲';
}

function renderAnalyticsDashboard() {
  const tabInicio = analytics.tabs?.inicio || 0;
  const tabEncuentros = analytics.tabs?.encuentros || 0;

  // Calculate cycles total and individual cycle visits
  const cycles = analytics.cycles || {
    primera_infancia: 0,
    infantil: 0,
    basico: 0,
    fundamental: 0,
    exploratorio: 0,
    especializado: 0
  };

  const countPrimera = cycles.primera_infancia || 0;
  const countInfantil = cycles.infantil || 0;
  const countBasico = cycles.basico || 0;
  const countFundamental = cycles.fundamental || 0;
  const countExploratorio = cycles.exploratorio || 0;
  const countEspecializado = cycles.especializado || 0;

  const totalCycleViews = countPrimera + countInfantil + countBasico + countFundamental + countExploratorio + countEspecializado;
  const tabCiclos = Math.max(analytics.tabs?.ciclos || 0, totalCycleViews);
  const totalTabViews = tabInicio + tabEncuentros + tabCiclos || 1;

  const kpiTotal = document.getElementById('kpiTotalVisits');
  const kpiUnique = document.getElementById('kpiUniqueSessions');
  const kpiLast = document.getElementById('kpiLastVisit');
  const kpiTopTab = document.getElementById('kpiTopTab');
  const kpiTopTabPercent = document.getElementById('kpiTopTabPercent');

  if (kpiTotal) kpiTotal.textContent = analytics.totalVisits || 0;
  if (kpiUnique) kpiUnique.textContent = analytics.uniqueSessions || 0;
  if (kpiLast) kpiLast.textContent = `Última: ${analytics.lastVisitDate || 'Hoy'}`;

  const tabCounts = [
    { name: 'Inicio', count: tabInicio },
    { name: 'Encuentros', count: tabEncuentros },
    { name: 'Ciclos Escolares', count: tabCiclos }
  ];
  tabCounts.sort((a, b) => b.count - a.count);
  const topTab = tabCounts[0];
  const topPercent = Math.round((topTab.count / totalTabViews) * 100);

  if (kpiTopTab) kpiTopTab.textContent = topTab.name;
  if (kpiTopTabPercent) kpiTopTabPercent.textContent = `${topPercent}% del tráfico (${topTab.count} visitas)`;

  const pctInicio = Math.round((tabInicio / totalTabViews) * 100);
  const pctEncuentros = Math.round((tabEncuentros / totalTabViews) * 100);
  const pctCiclos = Math.round((tabCiclos / totalTabViews) * 100);

  const fillInicio = document.getElementById('statFillInicio');
  const fillEncuentros = document.getElementById('statFillEncuentros');
  const fillCiclos = document.getElementById('statFillCiclos');

  const countInicio = document.getElementById('statCountInicio');
  const countEncuentros = document.getElementById('statCountEncuentros');
  const countCiclos = document.getElementById('statCountCiclos');

  if (fillInicio) fillInicio.style.width = `${pctInicio}%`;
  if (fillEncuentros) fillEncuentros.style.width = `${pctEncuentros}%`;
  if (fillCiclos) fillCiclos.style.width = `${pctCiclos}%`;

  if (countInicio) countInicio.textContent = `${tabInicio} visitas (${pctInicio}%)`;
  if (countEncuentros) countEncuentros.textContent = `${tabEncuentros} visitas (${pctEncuentros}%)`;
  if (countCiclos) countCiclos.textContent = `${tabCiclos} visitas (${pctCiclos}%)`;

  // Render individual 6 sub-cycles breakdown
  const cycleBase = tabCiclos || 1;
  const renderSubCycle = (key, count) => {
    const el = document.getElementById(`statCountCycle_${key}`);
    const fill = document.getElementById(`statFillCycle_${key}`);
    const pct = Math.round((count / cycleBase) * 100);
    if (el) el.textContent = `${count} visitas (${pct}%)`;
    if (fill) fill.style.width = `${pct}%`;
  };

  renderSubCycle('primera_infancia', countPrimera);
  renderSubCycle('infantil', countInfantil);
  renderSubCycle('basico', countBasico);
  renderSubCycle('fundamental', countFundamental);
  renderSubCycle('exploratorio', countExploratorio);
  renderSubCycle('especializado', countEspecializado);

  renderAnalyticsLogTable();
}

let analyticsDebounce = null;
function renderAnalyticsLogTable() {
  clearTimeout(analyticsDebounce);
  analyticsDebounce = setTimeout(() => {
    const tbody = document.getElementById('tableAnalyticsBody');
    if (!tbody) return;

    const filter = (document.getElementById('filterAnalyticsInput')?.value || '').toLowerCase();
    const logs = analytics.logs || [];

    const filtered = logs.filter(l => 
      l.section.toLowerCase().includes(filter) ||
      l.action.toLowerCase().includes(filter) ||
      l.device.toLowerCase().includes(filter) ||
      l.date.toLowerCase().includes(filter)
    );

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="padding: 16px; color: #64748b;">No hay registros que coincidan.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.slice(0, 25).map(item => `
      <tr>
        <td style="white-space: nowrap; font-size: 0.8rem; color: #64748b;">${item.date}</td>
        <td><strong>${item.section}</strong></td>
        <td>${item.action}</td>
        <td><span class="table-badge ${item.device === 'Móvil' ? 'badge-info' : 'badge-done'}">${item.device}</span></td>
      </tr>
    `).join('');
  }, 40);
}

function exportAnalyticsCsv() {
  let csv = "Fecha,Pestana_Seccion,Accion_Realizada,Dispositivo\n";
  (analytics.logs || []).forEach(log => {
    csv += `"${log.date}","${log.section}","${log.action}","${log.device}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `estadisticas_visitas_psicologia_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📊 Reporte de estadísticas descargado.');
}

function resetAnalyticsStats() {
  if (confirm('¿Deseas reiniciar todas las métricas y registros de visitas a cero?')) {
    analytics = {
      totalVisits: 1,
      uniqueSessions: 1,
      lastVisitDate: new Date().toLocaleDateString('es-CO') + ' ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
      tabs: { inicio: 1, encuentros: 0, quienes_somos: 0, recursos: 0 },
      interactions: { checkin_emocional: 0, inscripciones_talleres: workshopRsvps.length, sugerencias_padres: suggestions.length },
      emotions: { feliz: 0, tranquilo: 0, estresado: 0, desanimado: 0 },
      logs: [
        { id: Date.now(), date: new Date().toLocaleDateString('es-CO'), section: "Inicio / Portada", action: "Reinicio de estadísticas", device: "Escritorio" }
      ]
    };

    sessionStorage.removeItem('psico_tab_history');
    localStorage.setItem('psicologia_analytics', JSON.stringify(analytics));
    renderAnalyticsDashboard();
    showToast('Métricas restablecidas a cero.');
  }
}

// ============================================================
// 6. MEDIA MANAGER (PC UPLOADS & URLS)
// ============================================================

function applySiteImages() {
  const brandLogo = document.getElementById('siteBrandLogo');
  const footerLogo = document.getElementById('footerBrandLogo');
  if (brandLogo) brandLogo.src = siteImages.logo;
  if (footerLogo) footerLogo.src = siteImages.logo;

  const favicon = document.getElementById('faviconTag');
  if (favicon && siteImages.favicon) favicon.href = siteImages.favicon;

  const heroSection = document.getElementById('heroSection');
  if (heroSection && siteImages.heroBg) {
    heroSection.style.backgroundImage = `url("${siteImages.heroBg}")`;
  }

  const welcomeImg = document.getElementById('welcomeSectionImg');
  if (welcomeImg && siteImages.welcomeImg) {
    welcomeImg.src = siteImages.welcomeImg;
  }

  const aboutImg = document.getElementById('aboutSectionImg');
  if (aboutImg && siteImages.aboutImg) {
    aboutImg.src = siteImages.aboutImg;
  }
}

function updateImageManagerPreviews() {
  const prevLogo = document.getElementById('previewImgLogo');
  const prevHero = document.getElementById('previewImgHero');
  const prevWelcome = document.getElementById('previewImgWelcome');
  const prevAbout = document.getElementById('previewImgAbout');
  const prevNancy = document.getElementById('previewImgNancy');
  const prevMaria = document.getElementById('previewImgMaria');

  if (prevLogo) prevLogo.src = siteImages.logo;
  if (prevHero) prevHero.src = siteImages.heroBg;
  if (prevWelcome) prevWelcome.src = siteImages.welcomeImg;
  if (prevAbout) prevAbout.src = siteImages.aboutImg;

  if (prevNancy && psychologists[0]) {
    const p = psychologists[0];
    prevNancy.innerHTML = p.emoji.startsWith('http') || p.emoji.startsWith('data:') 
      ? `<img src="${p.emoji}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">` 
      : `<span>${p.emoji}</span>`;
  }

  if (prevMaria && psychologists[1]) {
    const p = psychologists[1];
    prevMaria.innerHTML = p.emoji.startsWith('http') || p.emoji.startsWith('data:') 
      ? `<img src="${p.emoji}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">` 
      : `<span>${p.emoji}</span>`;
  }

  const urlLogo = document.getElementById('urlInputLogo');
  const urlHero = document.getElementById('urlInputHero');
  const urlWelcome = document.getElementById('urlInputWelcome');
  const urlAbout = document.getElementById('urlInputAbout');

  if (urlLogo) urlLogo.value = siteImages.logo.startsWith('data:') ? '(Imagen subida desde PC)' : siteImages.logo;
  if (urlHero) urlHero.value = siteImages.heroBg.startsWith('data:') ? '(Imagen subida desde PC)' : siteImages.heroBg;
  if (urlWelcome) urlWelcome.value = siteImages.welcomeImg.startsWith('data:') ? '(Imagen subida desde PC)' : siteImages.welcomeImg;
  if (urlAbout) urlAbout.value = siteImages.aboutImg.startsWith('data:') ? '(Imagen subida desde PC)' : siteImages.aboutImg;
}

function handleImageFileUpload(key, fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    siteImages[key] = base64;
    localStorage.setItem('psicologia_site_images', JSON.stringify(siteImages));
    syncImagesToServer();
    applySiteImages();
    updateImageManagerPreviews();
    showToast('¡Imagen actualizada con éxito desde tu PC!');
  };
  reader.readAsDataURL(file);
}

function handleImageUrlChange(key, url) {
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith('(Imagen')) return;

  siteImages[key] = trimmed;
  localStorage.setItem('psicologia_site_images', JSON.stringify(siteImages));
  syncImagesToServer();
  applySiteImages();
  updateImageManagerPreviews();
  showToast('¡Enlace de imagen actualizado!');
}

function resetImageToDefault(key) {
  if (DEFAULT_SITE_IMAGES[key]) {
    siteImages[key] = DEFAULT_SITE_IMAGES[key];
    localStorage.setItem('psicologia_site_images', JSON.stringify(siteImages));
    syncImagesToServer();
    applySiteImages();
    updateImageManagerPreviews();
    showToast('¡Imagen restablecida a la versión original!');
  }
}

function handlePsychologistPhotoUpload(index, fileInput) {
  const file = fileInput.files[0];
  if (!file || !psychologists[index]) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    psychologists[index].emoji = base64;
    localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
    syncPsychologistsToServer();
    renderTeamCards();
    updateImageManagerPreviews();
    populatePsychologistEditForms();
    showToast(`¡Foto de ${psychologists[index].name} actualizada desde tu PC!`);
  };
  reader.readAsDataURL(file);
}

function handlePsychologistPhotoUrl(index, value) {
  const trimmed = value.trim();
  if (!trimmed || !psychologists[index]) return;

  psychologists[index].emoji = trimmed;
  localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
  syncPsychologistsToServer();
  renderTeamCards();
  updateImageManagerPreviews();
  populatePsychologistEditForms();
  showToast(`¡Foto/Avatar de ${psychologists[index].name} actualizado!`);
}

function resetPsychologistPhoto(index) {
  if (DEFAULT_PSYCHOLOGISTS[index]) {
    psychologists[index].emoji = DEFAULT_PSYCHOLOGISTS[index].emoji;
    localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
    syncPsychologistsToServer();
    renderTeamCards();
    updateImageManagerPreviews();
    populatePsychologistEditForms();
    showToast(`¡Foto de ${psychologists[index].name} restablecida a la original!`);
  }
}

// ============================================================
// 7. SECURITY & PASSWORDS
// ============================================================

function handlePasswordChange(event) {
  event.preventDefault();
  const current = document.getElementById('currentPass').value;
  const newP = document.getElementById('newPass').value;
  const confirmP = document.getElementById('confirmPass').value;

  if (current !== adminPassword) {
    showToast('❌ La contraseña actual no es correcta.');
    return;
  }

  if (newP.length < 3) {
    showToast('⚠️ La nueva contraseña debe tener al menos 3 caracteres.');
    return;
  }

  if (newP !== confirmP) {
    showToast('❌ La nueva contraseña y su confirmación no coinciden.');
    return;
  }

  adminPassword = newP;
  localStorage.setItem('psicologia_admin_password', adminPassword);
  syncSecurityToServer(adminPassword, adminSlug);
  showToast('✅ ¡Contraseña de administrador actualizada con éxito!');
  event.target.reset();
}

function handleSlugChange(event) {
  event.preventDefault();
  const slugInput = document.getElementById('customSlugInput');
  const newSlug = slugInput.value.trim().replace(/[^a-zA-Z0-9_-]/g, '');

  if (!newSlug) {
    showToast('⚠️ Ingresa una ruta válida (ej: admin451200)');
    return;
  }

  adminSlug = newSlug;
  localStorage.setItem('psicologia_admin_slug', adminSlug);
  syncSecurityToServer(adminPassword, adminSlug);
  updateSecretUrlDisplay();
  showToast(`✅ ¡Nueva ruta secreta guardada: /${adminSlug}!`);
}

function updateSecretUrlDisplay() {
  const codeEl = document.getElementById('secretUrlCode');
  const slugInput = document.getElementById('customSlugInput');
  const fullUrl = `${window.location.origin}/${adminSlug}`;

  if (codeEl) codeEl.textContent = fullUrl;
  if (slugInput) slugInput.value = adminSlug;
}

function copySecretAdminUrl() {
  const fullUrl = `${window.location.origin}/${adminSlug}`;
  navigator.clipboard.writeText(fullUrl).then(() => {
    showToast('📋 ¡Enlace secreto copiado al portapapeles!');
  }).catch(() => {
    prompt('Copia tu enlace secreto:', fullUrl);
  });
}

// ============================================================
// 8. MOOD CHECK-IN WIDGET
// ============================================================

function selectMood(moodKey, customMessage, btnElement) {
  const buttons = document.querySelectorAll('.mood-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  
  if (btnElement) {
    btnElement.classList.add('selected');
  }

  const moodText = document.getElementById('moodText');
  const moodResponse = document.getElementById('moodResponse');

  if (moodText) moodText.textContent = customMessage;

  if (moodResponse) {
    moodResponse.style.transform = 'scale(1.02)';
    setTimeout(() => {
      moodResponse.style.transform = 'scale(1)';
    }, 150);
  }

  const previousMood = sessionStorage.getItem('psico_selected_mood');
  if (!analytics.emotions) analytics.emotions = { feliz: 0, tranquilo: 0, estresado: 0, desanimado: 0 };

  if (previousMood && previousMood !== moodKey) {
    if (analytics.emotions[previousMood] > 0) {
      analytics.emotions[previousMood]--;
    }
    analytics.emotions[moodKey] = (analytics.emotions[moodKey] || 0) + 1;
  } else if (!previousMood) {
    analytics.emotions[moodKey] = (analytics.emotions[moodKey] || 0) + 1;
    if (!analytics.interactions) analytics.interactions = {};
    analytics.interactions.checkin_emocional = (analytics.interactions.checkin_emocional || 0) + 1;
  }

  sessionStorage.setItem('psico_selected_mood', moodKey);
  localStorage.setItem('psicologia_analytics', JSON.stringify(analytics));

  const labels = { feliz: 'Con energía', tranquilo: 'Tranquilo/a', estresado: 'Abrumado/a', desanimado: 'Bajo de ánimo' };
  recordVisit('Check-in Emocional', `Seleccionó emoción: ${labels[moodKey] || moodKey}`);
}

function handleSuggestion(event) {
  event.preventDefault();
  const input = document.getElementById('topicInput');
  const topic = input.value.trim();
  if (!topic) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('es-CO');

  suggestions.unshift({
    id: Date.now(),
    text: topic,
    date: dateStr
  });
  localStorage.setItem('psicologia_suggestions', JSON.stringify(suggestions));
  syncSuggestionAddToServer(topic, dateStr);

  if (!analytics.interactions) analytics.interactions = {};
  analytics.interactions.sugerencias_padres = (analytics.interactions.sugerencias_padres || 0) + 1;
  recordVisit('Buzón Sugerencias', `Nueva sugerencia: "${topic}"`);

  input.value = '';
  updateBadgeCounts();
  showToast(`¡Sugerencia recibida ("${topic}")!`);
}

function showToast(message) {
  const toast = document.getElementById('toastBox');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ============================================================
// 10. DYNAMIC TEAM & ADMIN TABLES
// ============================================================

function renderTeamCards() {
  const container = document.getElementById('teamCardsContainer');
  if (!container) return;

  container.innerHTML = psychologists.map((p) => {
    const isImage = p.emoji.startsWith('http') || p.emoji.startsWith('data:');
    return `
      <div class="team-card">
        <div class="team-avatar-wrapper ${p.bgClass}">
          ${isImage 
            ? `<img src="${p.emoji}" alt="${p.name}" class="team-avatar-img">` 
            : `<span class="avatar-emoji">${p.emoji}</span>`}
        </div>
        <div class="team-badge ${p.badgeClass}">${p.badge}</div>
        <h3 class="team-name">${p.name}</h3>
        <p class="team-role">${p.role}</p>
        <p class="team-desc">${p.desc}</p>
        <div class="team-contact-box">
          <div class="contact-item">
            <i data-lucide="mail"></i>
            <a href="mailto:${p.email}">${p.email}</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const footerNancy = document.getElementById('footerContactNancy');
  const footerMaria = document.getElementById('footerContactMaria');
  if (footerNancy && psychologists[0]) footerNancy.innerHTML = `<strong>${psychologists[0].badge}:</strong> <a href="mailto:${psychologists[0].email}">${psychologists[0].email}</a>`;
  if (footerMaria && psychologists[1]) footerMaria.innerHTML = `<strong>${psychologists[1].badge}:</strong> <a href="mailto:${psychologists[1].email}">${psychologists[1].email}</a>`;
}

function updateBadgeCounts() {
  const badgeCal = document.getElementById('badgeCalendarioCount');
  if (badgeCal) badgeCal.textContent = calendarWorkshops.length;
}

function populatePsychologistEditForms() {
  psychologists.forEach((p, idx) => {
    const nameInput = document.getElementById(`editName${idx}`);
    const badgeInput = document.getElementById(`editBadge${idx}`);
    const bgSelect = document.getElementById(`editBgColor${idx}`);
    const emailInput = document.getElementById(`editEmail${idx}`);
    const descInput = document.getElementById(`editDesc${idx}`);
    const previewAvatar = document.getElementById(`previewAvatar${idx + 1}`);
    const previewName = document.getElementById(`previewName${idx + 1}`);
    const previewBadge = document.getElementById(`previewBadge${idx + 1}`);

    if (nameInput) nameInput.value = p.name;
    if (badgeInput) badgeInput.value = p.badge;
    if (bgSelect) bgSelect.value = p.bgClass;
    if (emailInput) emailInput.value = p.email;
    if (descInput) descInput.value = p.desc;

    if (previewAvatar) {
      const isImg = p.emoji.startsWith('http') || p.emoji.startsWith('data:');
      previewAvatar.innerHTML = isImg 
        ? `<img src="${p.emoji}" alt="${p.name}">` 
        : p.emoji;
      previewAvatar.className = `avatar-preview ${p.bgClass}`;
    }
    if (previewName) previewName.textContent = p.name;
    if (previewBadge) previewBadge.textContent = p.badge;
  });
}

function savePsychologistProfile(event, index) {
  event.preventDefault();
  const name = document.getElementById(`editName${index}`).value;
  const badge = document.getElementById(`editBadge${index}`).value;
  const bgClass = document.getElementById(`editBgColor${index}`).value;
  const email = document.getElementById(`editEmail${index}`).value;
  const desc = document.getElementById(`editDesc${index}`).value;

  psychologists[index] = {
    ...psychologists[index],
    name,
    badge,
    bgClass,
    email,
    desc
  };

  localStorage.setItem('psicologia_psychologists', JSON.stringify(psychologists));
  syncPsychologistsToServer();
  renderTeamCards();
  populatePsychologistEditForms();
  showToast(`¡Perfil de ${name} actualizado!`);
}

function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.toggle('open');
}

// Modal Backdrop clicks
window.addEventListener('click', (e) => {
  const pickerModal = document.getElementById('blockTypePickerModal');
  if (e.target === pickerModal) closeBlockTypePickerModal();
  const detailModal = document.getElementById('workshopDetailModal');
  if (e.target === detailModal) closeWorkshopDetailModal();
  const confirmModal = document.getElementById('confirmDeleteModal');
  if (e.target === confirmModal) closeConfirmDeleteModal();
});

// ============================================================
// 11. GESTOR DE CICLOS ESCOLARES (CUADRITOS DE CONTENIDO)
// ============================================================

// ============================================================
// 9. CONSTRUCTOR VISUAL MODULAR DE CICLOS (CMS / BLOG ENGINE)
// ============================================================

const CYCLES_METADATA = [
  { key: "primera_infancia", slug: "primera-infancia", name: "Primera Infancia", grades: "JARDÍN Y TRANSICIÓN", pillClass: "pill-pink", borderClass: "card-border-pink", icon: "🌸", pageUrl: "/ciclos/primera-infancia" },
  { key: "infantil", slug: "infantil", name: "Ciclo Infantil", grades: "1°, 2° Y 3°", pillClass: "pill-teal", borderClass: "card-border-teal", icon: "🌱", pageUrl: "/ciclos/infantil" },
  { key: "basico", slug: "basico", name: "Ciclo Básico", grades: "4° Y 5°", pillClass: "pill-yellow", borderClass: "card-border-yellow", icon: "📘", pageUrl: "/ciclos/basico" },
  { key: "fundamental", slug: "fundamental", name: "Ciclo Fundamental", grades: "6° Y 7°", pillClass: "pill-purple", borderClass: "card-border-purple", icon: "🔮", pageUrl: "/ciclos/fundamental" },
  { key: "exploratorio", slug: "exploratorio", name: "Ciclo Exploratorio", grades: "8° Y 9°", pillClass: "pill-blue", borderClass: "card-border-blue", icon: "🧭", pageUrl: "/ciclos/exploratorio" },
  { key: "especializado", slug: "especializado", name: "Ciclo Especializado", grades: "10° Y 11°", pillClass: "pill-green", borderClass: "card-border-green", icon: "🎓", pageUrl: "/ciclos/especializado" }
];

const CYCLE_BLOCK_TYPES = [
  { type: 'hero_banner', name: 'Banner Principal', icon: '📰', desc: 'Encabezado con título grande, subtítulo, botón de acción y foto/banner.' },
  { type: 'article_blog', name: 'Artículo de Blog', icon: '📝', desc: 'Lectura amplia con autor, fecha, contenido extenso y foto de portada.' },
  { type: 'callout_tip', name: 'Consejo / Tip', icon: '💡', desc: 'Caja destacada con icono personalizado y color para consejos de orientación.' },
  { type: 'cards_grid', name: 'Cuadrícula de Pautas', icon: '🌟', desc: 'Tarjetas con iconos para resumir 2, 3 o 4 ideas clave de crianza o estudio.' },
  { type: 'resources_download', name: 'Guías Descargables', icon: '📥', desc: 'Documentos PDF e infografías con botón de descarga.' },
  { type: 'photo_gallery', name: 'Galería de Fotos', icon: '🎞️', desc: 'Mosaico visual de fotografías o infografías ilustrativas.' }
];

let selectedAdminCycleKey = 'primera_infancia';
let selectedBlockType = 'hero_banner';
let blockIdToDelete = null;

function selectAdminCycle(cycleKey, btnElement) {
  selectedAdminCycleKey = cycleKey;
  const buttons = document.querySelectorAll('.cycle-tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const meta = CYCLES_METADATA.find(c => c.key === cycleKey);
  const nameEl = document.getElementById('adminCycleActiveName');
  if (nameEl && meta) nameEl.textContent = `${meta.name} (${meta.grades})`;

  resetCycleBlockForm();
  renderAdminCycleBlocks();
}

function openActiveCyclePublicPage() {
  const meta = CYCLES_METADATA.find(c => c.key === selectedAdminCycleKey);
  if (meta) {
    window.open(meta.pageUrl, '_blank');
  }
}

// Modal Selector de Tipo de Bloque
function openBlockTypePickerModal() {
  const modal = document.getElementById('blockTypePickerModal');
  const grid = document.getElementById('blockPickerGrid');
  if (!modal || !grid) return;

  grid.innerHTML = CYCLE_BLOCK_TYPES.map(bt => `
    <div class="block-picker-card ${bt.type === selectedBlockType ? 'active' : ''}" onclick="selectBlockTypeFromPicker('${bt.type}')">
      <div class="block-picker-icon-wrap">${bt.icon}</div>
      <div class="block-name">${bt.name}</div>
      <div class="block-desc">${bt.desc}</div>
    </div>
  `).join('');

  modal.classList.add('active');
}

function closeBlockTypePickerModal() {
  const modal = document.getElementById('blockTypePickerModal');
  if (modal) modal.classList.remove('active');
}

function selectBlockTypeFromPicker(type) {
  closeBlockTypePickerModal();
  setCycleBlockType(type);
  const formWrap = document.getElementById('cycleBlockFormWrap');
  if (formWrap) {
    formWrap.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('cycleBlockTitle')?.focus();
  }
}

// Estados temporales del constructor interactivo
let currentEditingCardsList = [
  { icon: '💖', title: 'Afecto y Diálogo', text: 'Acompañamiento cercano y validación emocional constante.' },
  { icon: '⏰', title: 'Rutina y Horarios', text: 'Fijar horas para estudiar, descansar y compartir en familia.' }
];

let currentEditingResourcesList = [
  { title: 'Guía de Orientación Familiar (PDF)', desc: 'Material imprimible de apoyo para el hogar.', icon: 'file-text' }
];

let currentEditingGalleryPhotos = [
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80', caption: 'Talleres y actividades del ciclo' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', caption: 'Encuentros formativos' }
];

function setCycleBlockType(type) {
  selectedBlockType = type;
  const input = document.getElementById('cycleBlockType');
  if (input) input.value = type;

  // Actualizar indicador visual de tipo
  const activeTypeInfo = CYCLE_BLOCK_TYPES.find(t => t.type === type) || CYCLE_BLOCK_TYPES[0];
  const typeBadge = document.getElementById('activeBlockTypeBadge');
  if (typeBadge) {
    typeBadge.innerHTML = `${activeTypeInfo.icon} ${activeTypeInfo.name}`;
  }

  // Ajustar visibilidad de campos dinámicos
  const groupButton = document.getElementById('groupBlockButton');
  const groupCallout = document.getElementById('groupBlockCallout');
  const groupImage = document.getElementById('groupBlockImage');
  const groupSubcards = document.getElementById('groupBlockSubcards');
  const groupResources = document.getElementById('groupBlockResources');
  const groupGallery = document.getElementById('groupBlockGallery');

  if (groupButton) groupButton.style.display = (type === 'hero_banner') ? 'block' : 'none';
  if (groupCallout) groupCallout.style.display = (type === 'callout_tip') ? 'block' : 'none';
  if (groupImage) groupImage.style.display = (type === 'hero_banner' || type === 'article_blog') ? 'block' : 'none';
  if (groupSubcards) groupSubcards.style.display = (type === 'cards_grid') ? 'block' : 'none';
  if (groupResources) groupResources.style.display = (type === 'resources_download') ? 'block' : 'none';
  if (groupGallery) groupGallery.style.display = (type === 'photo_gallery') ? 'block' : 'none';

  // Renderizar constructores dinámicos
  if (type === 'cards_grid') renderCardsBuilderUI();
  if (type === 'resources_download') renderResourcesBuilderUI();
  if (type === 'photo_gallery') renderGalleryBuilderUI();

  updateCycleBlockLivePreview();
}

// 1. Interactive Cards Builder
function renderCardsBuilderUI() {
  const container = document.getElementById('builderCardsListContainer');
  if (!container) return;

  container.innerHTML = currentEditingCardsList.map((card, idx) => `
    <div class="builder-item-card">
      <div class="builder-item-header">
        <span class="builder-item-title" style="color: #166534;">
          <span>${card.icon || '⭐'}</span> Tarjeta de Pauta #${idx + 1}
        </span>
        <button type="button" class="btn-table-action btn-del" onclick="removeCardItemFromBuilder(${idx})" ${currentEditingCardsList.length <= 1 ? 'disabled' : ''} style="padding: 2px 8px;">
          🗑️ Eliminar
        </button>
      </div>
      <div class="form-row" style="margin-bottom: 8px;">
        <div class="form-group" style="width: 90px; margin-bottom: 0;">
          <label style="font-size: 0.78rem;">Icono / Emoji:</label>
          <input type="text" value="${card.icon || '⭐'}" placeholder="⭐" oninput="updateCardItemField(${idx}, 'icon', this.value)" style="text-align: center; font-size: 1.2rem;">
        </div>
        <div class="form-group" style="flex: 1; margin-bottom: 0;">
          <label style="font-size: 0.78rem;">Título de la Pauta:</label>
          <input type="text" value="${card.title.replace(/"/g, '&quot;')}" placeholder="Ej: Hábitos de Estudio" oninput="updateCardItemField(${idx}, 'title', this.value)" required>
        </div>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label style="font-size: 0.78rem;">Explicación breve:</label>
        <textarea rows="2" placeholder="Escribe aquí la recomendación..." oninput="updateCardItemField(${idx}, 'text', this.value)" required style="font-size: 0.88rem;">${card.text}</textarea>
      </div>
    </div>
  `).join('');
}

function addCardItemToBuilder() {
  currentEditingCardsList.push({
    icon: '💡',
    title: `Pauta Clave #${currentEditingCardsList.length + 1}`,
    text: 'Recomendación formativa clara para aplicar en el hogar o colegio.'
  });
  renderCardsBuilderUI();
  updateCycleBlockLivePreview();
}

function removeCardItemFromBuilder(idx) {
  if (currentEditingCardsList.length <= 1) return;
  currentEditingCardsList.splice(idx, 1);
  renderCardsBuilderUI();
  updateCycleBlockLivePreview();
}

function updateCardItemField(idx, field, value) {
  if (currentEditingCardsList[idx]) {
    currentEditingCardsList[idx][field] = value;
    updateCycleBlockLivePreview();
  }
}

// 2. Interactive Resources Builder
function renderResourcesBuilderUI() {
  const container = document.getElementById('builderResourcesListContainer');
  if (!container) return;

  container.innerHTML = currentEditingResourcesList.map((res, idx) => `
    <div class="builder-item-card">
      <div class="builder-item-header">
        <span class="builder-item-title" style="color: #854d0e;">
          <span>📄</span> Documento Descargable #${idx + 1}
        </span>
        <button type="button" class="btn-table-action btn-del" onclick="removeResourceItemFromBuilder(${idx})" ${currentEditingResourcesList.length <= 1 ? 'disabled' : ''} style="padding: 2px 8px;">
          🗑️ Eliminar
        </button>
      </div>
      <div class="form-group" style="margin-bottom: 8px;">
        <label style="font-size: 0.78rem;">Nombre del Documento o Guía:</label>
        <input type="text" value="${res.title.replace(/"/g, '&quot;')}" placeholder="Ej: Guía de Crianza Positiva (PDF)" oninput="updateResourceItemField(${idx}, 'title', this.value)" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label style="font-size: 0.78rem;">Descripción corta del archivo:</label>
        <input type="text" value="${(res.desc || '').replace(/"/g, '&quot;')}" placeholder="Ej: Material imprimible de 4 páginas" oninput="updateResourceItemField(${idx}, 'desc', this.value)">
      </div>
    </div>
  `).join('');
}

function addResourceItemToBuilder() {
  currentEditingResourcesList.push({
    title: `Guía Formativa #${currentEditingResourcesList.length + 1} (PDF)`,
    desc: 'Documento descargable e imprimible de apoyo.',
    icon: 'file-text'
  });
  renderResourcesBuilderUI();
  updateCycleBlockLivePreview();
}

function removeResourceItemFromBuilder(idx) {
  if (currentEditingResourcesList.length <= 1) return;
  currentEditingResourcesList.splice(idx, 1);
  renderResourcesBuilderUI();
  updateCycleBlockLivePreview();
}

function updateResourceItemField(idx, field, value) {
  if (currentEditingResourcesList[idx]) {
    currentEditingResourcesList[idx][field] = value;
    updateCycleBlockLivePreview();
  }
}

// 3. Interactive Photo Gallery Builder
function renderGalleryBuilderUI() {
  const container = document.getElementById('builderGalleryGridContainer');
  if (!container) return;

  if (currentEditingGalleryPhotos.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 24px; color: #94a3b8; background: #faf5ff; border-radius: var(--radius-md); border: 2px dashed #f0abfc;">
        <span style="font-size: 1.8rem; display: block; margin-bottom: 6px;">📷</span>
        <span style="font-size: 0.88rem; font-weight: 700; color: #86198f;">Aún no has agregado fotos a la galería</span>
        <p style="font-size: 0.78rem; color: #64748b; margin-top: 4px;">Usa el botón "Subir Fotos desde tu Computador" o pega un enlace arriba</p>
      </div>
    `;
    return;
  }

  container.innerHTML = currentEditingGalleryPhotos.map((photo, idx) => `
    <div class="gallery-thumb-box">
      <img src="${photo.url}" alt="Foto ${idx + 1}">
      <button type="button" class="btn-remove-thumb" onclick="removeGalleryPhoto(${idx})" title="Quitar foto">✕</button>
      <input type="text" class="gallery-thumb-caption-input" placeholder="Pie de foto (opcional)" value="${(photo.caption || '').replace(/"/g, '&quot;')}" oninput="updateGalleryCaption(${idx}, this.value)">
    </div>
  `).join('');
}

function handleGalleryMultipleUpload(event) {
  const files = Array.from(event.target.files || []);
  if (!files || files.length === 0) return;

  let loadedCount = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      currentEditingGalleryPhotos.push({
        url: e.target.result,
        caption: file.name.replace(/\.[^/.]+$/, "")
      });
      loadedCount++;
      if (loadedCount === files.length) {
        event.target.value = '';
        renderGalleryBuilderUI();
        updateCycleBlockLivePreview();
        showToast(`📷 ${files.length} foto(s) agregada(s) a la galería`);
      }
    };
    reader.readAsDataURL(file);
  });
}

function addGalleryPhotoFromUrlInput() {
  const input = document.getElementById('cycleGalleryUrlInput');
  const url = (input?.value || '').trim();
  if (url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:'))) {
    currentEditingGalleryPhotos.push({
      url: url,
      caption: 'Fotografía'
    });
    if (input) input.value = '';
    renderGalleryBuilderUI();
    updateCycleBlockLivePreview();
    showToast('📷 Foto agregada a la galería');
  } else {
    showToast('⚠️ Ingresa un enlace web válido (https://...)');
  }
}

function addGalleryPhotoByUrlPrompt() {
  const url = prompt('Ingresa el enlace web directo de la fotografía (https://...):');
  if (url && url.trim().startsWith('http')) {
    currentEditingGalleryPhotos.push({
      url: url.trim(),
      caption: 'Fotografía'
    });
    renderGalleryBuilderUI();
    updateCycleBlockLivePreview();
    showToast('📷 Foto agregada a la galería');
  }
}

function removeGalleryPhoto(idx) {
  currentEditingGalleryPhotos.splice(idx, 1);
  renderGalleryBuilderUI();
  updateCycleBlockLivePreview();
}

function updateGalleryCaption(idx, text) {
  if (currentEditingGalleryPhotos[idx]) {
    currentEditingGalleryPhotos[idx].caption = text;
    updateCycleBlockLivePreview();
  }
}

// 5. Counselor Profile Helpers
function syncCounselorFormInputs() {
  const nameInput = document.getElementById('counselorNameInput');
  const roleInput = document.getElementById('counselorRoleInput');
  const emailInput = document.getElementById('counselorEmailInput');
  const btnInput = document.getElementById('counselorBtnTextInput');

  if (nameInput) nameInput.value = currentEditingCounselor.name || '';
  if (roleInput) roleInput.value = currentEditingCounselor.role || '';
  if (emailInput) emailInput.value = currentEditingCounselor.email || '';
  if (btnInput) btnInput.value = currentEditingCounselor.btnText || 'Solicitar Cita de Orientación';
}

function updateCounselorProfileField(field, value) {
  currentEditingCounselor[field] = value;
  updateCycleBlockLivePreview();
}

function setCycleBlockSize(size) {
  const input = document.getElementById('cycleBlockSize');
  if (input) input.value = size;
  updateCycleBlockLivePreview();
}

function setCycleBlockTitleAlign(align) {
  const input = document.getElementById('cycleBlockTitleAlign');
  if (input) input.value = align;

  const buttons = document.querySelectorAll('.align-choice-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.id === `alignBtn-${align}`);
  });

  updateCycleBlockLivePreview();
}

function setCalloutIcon(emoji) {
  const input = document.getElementById('cycleCalloutEmoji');
  if (input) input.value = emoji;
  const buttons = document.querySelectorAll('.callout-emoji-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-emoji') === emoji);
  });
  updateCycleBlockLivePreview();
}

function setCalloutColor(color) {
  const input = document.getElementById('cycleCalloutColor');
  if (input) input.value = color;
  const buttons = document.querySelectorAll('.callout-color-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-color') === color);
  });
  updateCycleBlockLivePreview();
}

function handleCycleBlockPhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    document.getElementById('cycleBlockImageUrlHidden').value = dataUrl;
    document.getElementById('cycleBlockImageUrlInput').value = '';

    const previewBox = document.getElementById('cycleBlockImagePreviewBox');
    const previewText = document.getElementById('cycleBlockImagePreviewText');
    if (previewBox && previewText) {
      previewText.textContent = `✓ Foto "${file.name}" cargada`;
      previewBox.style.display = 'flex';
    }
    updateCycleBlockLivePreview();
  };
  reader.readAsDataURL(file);
}

function handleCycleBlockUrlInput() {
  const url = (document.getElementById('cycleBlockImageUrlInput')?.value || '').trim();
  const hiddenUrl = document.getElementById('cycleBlockImageUrlHidden');
  const previewBox = document.getElementById('cycleBlockImagePreviewBox');
  const previewText = document.getElementById('cycleBlockImagePreviewText');

  if (url) {
    hiddenUrl.value = url;
    if (previewBox && previewText) {
      previewText.textContent = `✓ Imagen Web cargada`;
      previewBox.style.display = 'flex';
    }
  } else if (!document.getElementById('cycleBlockFileInput')?.files.length) {
    hiddenUrl.value = '';
    if (previewBox) previewBox.style.display = 'none';
  }
  updateCycleBlockLivePreview();
}

function removeCycleBlockImage() {
  const hiddenUrl = document.getElementById('cycleBlockImageUrlHidden');
  const urlInput = document.getElementById('cycleBlockImageUrlInput');
  const fileInput = document.getElementById('cycleBlockFileInput');
  const previewBox = document.getElementById('cycleBlockImagePreviewBox');

  if (hiddenUrl) hiddenUrl.value = '';
  if (urlInput) urlInput.value = '';
  if (fileInput) fileInput.value = '';
  if (previewBox) previewBox.style.display = 'none';
  updateCycleBlockLivePreview();
  showToast('Imagen del bloque retirada.');
}

// Vista Previa en Vivo Simulada
function updateCycleBlockLivePreview() {
  const meta = CYCLES_METADATA.find(c => c.key === selectedAdminCycleKey) || CYCLES_METADATA[0];
  const type = selectedBlockType || 'hero_banner';
  const size = 'full';
  const titleAlign = document.getElementById('cycleBlockTitleAlign')?.value || 'left';
  const title = document.getElementById('cycleBlockTitle')?.value.trim() || 'Título del Bloque';
  const subtitle = document.getElementById('cycleBlockSubtitle')?.value.trim() || 'Subtítulo informativo';
  const badge = document.getElementById('cycleBlockBadge')?.value.trim() || meta.name;
  const text = document.getElementById('cycleBlockText')?.value.trim() || 'Aquí se mostrará la información y contenidos redactados para este ciclo.';
  const imageUrl = document.getElementById('cycleBlockImageUrlHidden')?.value || '';
  const imagePos = document.getElementById('cycleBlockImagePos')?.value || 'left';
  const btnText = document.getElementById('cycleBlockBtnText')?.value.trim() || '';
  const btnUrl = document.getElementById('cycleBlockBtnUrl')?.value.trim() || '#';
  const iconEmoji = document.getElementById('cycleCalloutEmoji')?.value || '💡';
  const accentColor = document.getElementById('cycleCalloutColor')?.value || 'purple';

  const previewContainer = document.getElementById('liveCycleBlockCardWrap');
  const sizeBadge = document.getElementById('liveCycleBlockSizeBadge');

  if (sizeBadge) {
    sizeBadge.textContent = '100% Horizontal';
  }

  if (!previewContainer) return;

  const mockBlock = {
    id: 999,
    cycleId: selectedAdminCycleKey,
    type,
    size,
    titleAlign,
    title,
    subtitle,
    badgeText: badge,
    text,
    imageUrl,
    imagePosition: imagePos,
    buttonText: btnText,
    buttonUrl: btnUrl,
    iconEmoji,
    accentColor,
    itemsList: currentEditingCardsList,
    resourcesList: currentEditingResourcesList,
    photosList: currentEditingGalleryPhotos
  };

  previewContainer.innerHTML = renderCycleBlockByType(mockBlock, meta, false);
  if (window.lucide) lucide.createIcons();
}

function startNewCycleBlockCreation() {
  resetCycleBlockForm();
  openBlockTypePickerModal();
}

function handleSaveCycleBlock(event) {
  event.preventDefault();
  const idInput = document.getElementById('cycleBlockEditId').value;
  const type = selectedBlockType || 'hero_banner';
  const size = 'full';
  const titleAlign = document.getElementById('cycleBlockTitleAlign')?.value || 'left';
  const title = document.getElementById('cycleBlockTitle').value.trim();
  const subtitle = document.getElementById('cycleBlockSubtitle').value.trim();
  const badgeText = document.getElementById('cycleBlockBadge').value.trim();
  const text = document.getElementById('cycleBlockText').value.trim();
  const imageUrl = (document.getElementById('cycleBlockImageUrlHidden')?.value || '').trim();
  const imagePosition = document.getElementById('cycleBlockImagePos')?.value || 'left';
  const buttonText = document.getElementById('cycleBlockBtnText')?.value.trim() || '';
  const buttonUrl = document.getElementById('cycleBlockBtnUrl')?.value.trim() || '';
  const iconEmoji = document.getElementById('cycleCalloutEmoji')?.value || '💡';
  const accentColor = document.getElementById('cycleCalloutColor')?.value || 'purple';

  const currentCycleBlocks = cycleBlocks.filter(b => b.cycleId === selectedAdminCycleKey);

  if (idInput) {
    const id = parseInt(idInput);
    const index = cycleBlocks.findIndex(b => b.id === id);
    if (index !== -1) {
      cycleBlocks[index] = {
        ...cycleBlocks[index],
        type,
        size,
        titleAlign,
        title,
        subtitle,
        badgeText,
        text,
        imageUrl,
        imagePosition,
        buttonText,
        buttonUrl,
        iconEmoji,
        accentColor,
        itemsList: currentEditingCardsList,
        resourcesList: currentEditingResourcesList,
        photosList: currentEditingGalleryPhotos
      };
      showToast('✅ ¡Bloque actualizado con éxito!');
    }
  } else {
    const newBlock = {
      id: Date.now(),
      cycleId: selectedAdminCycleKey,
      type,
      size,
      titleAlign,
      title,
      subtitle,
      badgeText,
      text,
      imageUrl,
      imagePosition,
      buttonText,
      buttonUrl,
      iconEmoji,
      accentColor,
      itemsList: currentEditingCardsList,
      resourcesList: currentEditingResourcesList,
      photosList: currentEditingGalleryPhotos,
      order: currentCycleBlocks.length + 1
    };
    cycleBlocks.push(newBlock);
    showToast('✅ ¡Nuevo bloque agregado al ciclo!');
  }

  localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
  syncCyclesToServer();
  renderAdminCycleBlocks();
  resetCycleBlockForm();
}

function duplicateCycleBlock(id) {
  const block = cycleBlocks.find(b => b.id === id);
  if (!block) return;

  const currentCycleBlocks = cycleBlocks.filter(b => b.cycleId === block.cycleId);
  const newBlock = {
    ...block,
    id: Date.now(),
    title: `${block.title} (Copia)`,
    order: currentCycleBlocks.length + 1
  };

  cycleBlocks.push(newBlock);
  localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
  syncCyclesToServer();
  renderAdminCycleBlocks();
  showToast('📋 ¡Bloque duplicado con éxito!');
}

function editCycleBlock(id) {
  const block = cycleBlocks.find(b => b.id === id);
  if (!block) return;

  document.getElementById('cycleBlockEditId').value = block.id;
  setCycleBlockType(block.type || 'hero_banner');
  setCycleBlockSize('full');
  setCycleBlockTitleAlign(block.titleAlign || 'left');

  document.getElementById('cycleBlockTitle').value = block.title || '';
  document.getElementById('cycleBlockSubtitle').value = block.subtitle || '';
  document.getElementById('cycleBlockBadge').value = block.badgeText || '';
  document.getElementById('cycleBlockText').value = block.text || '';
  document.getElementById('cycleBlockImagePos').value = block.imagePosition || 'left';
  document.getElementById('cycleBlockBtnText').value = block.buttonText || '';
  document.getElementById('cycleBlockBtnUrl').value = block.buttonUrl || '';

  if (block.iconEmoji) setCalloutIcon(block.iconEmoji);
  if (block.accentColor) setCalloutColor(block.accentColor);

  // Cargar tarjetas interactivas
  if (block.itemsList && block.itemsList.length) {
    currentEditingCardsList = JSON.parse(JSON.stringify(block.itemsList));
  } else {
    currentEditingCardsList = [{ icon: '💖', title: 'Pauta de Bienestar', text: 'Acompañamiento cercano y afectivo.' }];
  }

  // Cargar recursos interactivos
  if (block.resourcesList && block.resourcesList.length) {
    currentEditingResourcesList = JSON.parse(JSON.stringify(block.resourcesList));
  } else {
    currentEditingResourcesList = [{ title: 'Guía Familiar (PDF)', desc: 'Material imprimible de apoyo.', icon: 'file-text' }];
  }

  // Cargar fotos de galería
  if (block.photosList && block.photosList.length) {
    currentEditingGalleryPhotos = JSON.parse(JSON.stringify(block.photosList));
  } else {
    currentEditingGalleryPhotos = [
      { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80', caption: 'Actividad escolar' }
    ];
  }

  renderCardsBuilderUI();
  renderResourcesBuilderUI();
  renderGalleryBuilderUI();

  const hiddenUrl = document.getElementById('cycleBlockImageUrlHidden');
  const urlInput = document.getElementById('cycleBlockImageUrlInput');
  const fileInput = document.getElementById('cycleBlockFileInput');
  const previewBox = document.getElementById('cycleBlockImagePreviewBox');
  const previewText = document.getElementById('cycleBlockImagePreviewText');
  const headerTitle = document.getElementById('cycleBlockFormHeader');

  if (hiddenUrl) hiddenUrl.value = block.imageUrl || '';
  if (urlInput) urlInput.value = (block.imageUrl && !block.imageUrl.startsWith('data:')) ? block.imageUrl : '';
  if (fileInput) fileInput.value = '';

  if (block.imageUrl && previewBox && previewText) {
    previewText.textContent = '✓ Imagen adjunta cargada';
    previewBox.style.display = 'flex';
  } else if (previewBox) {
    previewBox.style.display = 'none';
  }

  if (headerTitle) headerTitle.textContent = `Editando: "${block.title}"`;
  document.getElementById('cycleBlockSubmitBtn').innerHTML = `<i data-lucide="save"></i> 💾 Guardar Cambios`;
  document.getElementById('cycleBlockCancelBtn').style.display = 'inline-flex';

  updateCycleBlockLivePreview();
  document.getElementById('cycleBlockFormWrap').scrollIntoView({ behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

function resetCycleBlockForm() {
  document.getElementById('cycleBlockForm').reset();
  document.getElementById('cycleBlockEditId').value = '';
  setCycleBlockType('hero_banner');
  setCycleBlockSize('full');
  setCycleBlockTitleAlign('left');
  setCalloutIcon('💡');
  setCalloutColor('purple');

  currentEditingCardsList = [
    { icon: '💖', title: 'Afecto y Diálogo', text: 'Acompañamiento cercano y validación emocional constante.' },
    { icon: '⏰', title: 'Rutina y Horarios', text: 'Fijar horas para estudiar, descansar y compartir en familia.' }
  ];
  currentEditingResourcesList = [
    { title: 'Guía de Orientación Familiar (PDF)', desc: 'Material imprimible de apoyo para el hogar.', icon: 'file-text' }
  ];
  currentEditingGalleryPhotos = [
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80', caption: 'Talleres y actividades del ciclo' }
  ];

  renderCardsBuilderUI();
  renderResourcesBuilderUI();
  renderGalleryBuilderUI();

  const hiddenUrl = document.getElementById('cycleBlockImageUrlHidden');
  const previewBox = document.getElementById('cycleBlockImagePreviewBox');
  const headerTitle = document.getElementById('cycleBlockFormHeader');

  if (hiddenUrl) hiddenUrl.value = '';
  if (previewBox) previewBox.style.display = 'none';
  if (headerTitle) headerTitle.textContent = 'Constructor Visual de Bloque';

  document.getElementById('cycleBlockSubmitBtn').innerHTML = `<i data-lucide="plus-circle"></i> 💾 Guardar / Agregar Bloque`;
  document.getElementById('cycleBlockCancelBtn').style.display = 'none';

  updateCycleBlockLivePreview();
  if (window.lucide) lucide.createIcons();
}

function moveCycleBlockOrder(id, direction) {
  const currentList = cycleBlocks.filter(b => b.cycleId === selectedAdminCycleKey).sort((a, b) => (a.order || 0) - (b.order || 0));
  const idx = currentList.findIndex(b => b.id === id);
  if (idx === -1) return;

  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= currentList.length) return;

  const currentItem = currentList[idx];
  const targetItem = currentList[targetIdx];

  const tempOrder = currentItem.order || idx + 1;
  currentItem.order = targetItem.order || targetIdx + 1;
  targetItem.order = tempOrder;

  localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
  syncCyclesToServer();
  renderAdminCycleBlocks();
  showToast('✓ ¡Orden reacomodado con éxito!');
}

function promptDeleteCycleBlock(id) {
  const block = cycleBlocks.find(b => b.id === id);
  if (!block) return;

  blockIdToDelete = id;
  const modal = document.getElementById('confirmDeleteModal');
  const msgEl = document.getElementById('confirmDeleteMsg');
  const btnAction = document.getElementById('btnConfirmDeleteAction');

  if (msgEl) {
    msgEl.innerHTML = `¿Deseas eliminar el bloque <strong>"${block.title}"</strong> de este ciclo?`;
  }

  if (btnAction) {
    btnAction.onclick = () => {
      executeDeleteCycleBlock(blockIdToDelete);
      closeConfirmDeleteModal();
    };
  }

  if (modal) modal.classList.add('active');
}

function executeDeleteCycleBlock(id) {
  if (!id) return;
  cycleBlocks = cycleBlocks.filter(b => b.id !== id);
  localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
  syncCyclesToServer();
  renderAdminCycleBlocks();
  showToast('✅ Bloque eliminado con éxito.');
}

let draggedBlockId = null;

function setupCycleBlockDragAndDrop() {
  const cards = document.querySelectorAll('.admin-cycle-card-item');
  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      draggedBlockId = parseInt(card.getAttribute('data-block-id'));
      card.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggedBlockId);
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      cards.forEach(c => c.classList.remove('drag-over'));
      draggedBlockId = null;
    });

    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (!card.classList.contains('is-dragging')) {
        card.classList.add('drag-over');
      }
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const targetId = parseInt(card.getAttribute('data-block-id'));
      if (!draggedBlockId || draggedBlockId === targetId) return;

      const currentList = cycleBlocks.filter(b => b.cycleId === selectedAdminCycleKey).sort((a, b) => (a.order || 0) - (b.order || 0));
      const fromIndex = currentList.findIndex(b => b.id === draggedBlockId);
      const toIndex = currentList.findIndex(b => b.id === targetId);

      if (fromIndex === -1 || toIndex === -1) return;

      const [movedItem] = currentList.splice(fromIndex, 1);
      currentList.splice(toIndex, 0, movedItem);

      currentList.forEach((item, index) => {
        item.order = index + 1;
      });

      localStorage.setItem('psicologia_cycle_blocks', JSON.stringify(cycleBlocks));
      syncCyclesToServer();
      renderAdminCycleBlocks();
      showToast('✓ ¡Orden reacomodado con éxito!');
    });
  });
}

// Acordeón desplegable interactivo
function toggleCycleAccordion(headerElement) {
  const item = headerElement.closest('.cycle-accordion-item');
  if (!item) return;
  item.classList.toggle('active');
}

// Generador HTML Universal por Tipo de Bloque
function renderCycleBlockByType(b, meta, isPublic = true) {
  const type = b.type || 'hero_banner';
  const size = b.size || 'full';
  const pos = b.imagePosition || 'left';
  const titleAlign = b.titleAlign || 'left';
  const hasImg = !!b.imageUrl;

  const alignBadgeStyle = titleAlign === 'center' 
    ? 'display: table; margin-left: auto; margin-right: auto; text-align: center;' 
    : (titleAlign === 'right' ? 'display: table; margin-left: auto; margin-right: 0; text-align: right;' : 'display: table; margin-left: 0; margin-right: auto; text-align: left;');

  const alignBtnStyle = `display: flex; justify-content: ${titleAlign === 'center' ? 'center' : (titleAlign === 'right' ? 'flex-end' : 'flex-start')}; width: 100%; margin-top: 18px;`;

  switch (type) {
    case 'hero_banner':
      return `
        <div class="cycle-block-card size-${size} type-hero_banner layout-${pos} ${meta.borderClass}">
          ${hasImg ? `
            <div class="cycle-block-img-wrap">
              <img src="${b.imageUrl}" alt="${b.title}" loading="lazy">
            </div>
          ` : ''}
          <div class="hero-content-wrap title-align-${titleAlign}" style="flex: 1; text-align: ${titleAlign};">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || meta.grades}</span>
            <div class="hero-title-wrap" style="text-align: ${titleAlign};">
              <h2 style="text-align: ${titleAlign};">${b.title}</h2>
            </div>
            ${b.subtitle ? `<div class="hero-subtitle-wrap" style="text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
            <div class="hero-text-wrap" style="text-align: ${titleAlign};">${b.text}</div>
            ${b.buttonText ? `
              <div class="hero-btn-wrap" style="${alignBtnStyle}">
                <a href="${b.buttonUrl || '#'}" class="btn btn-primary btn-lg">
                  ${b.buttonText} →
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `;

    case 'article_blog':
      return `
        <div class="cycle-block-card size-${size} type-article_blog ${meta.borderClass}">
          <div class="article-meta-header" style="justify-content: ${titleAlign === 'center' ? 'center' : (titleAlign === 'right' ? 'flex-end' : 'flex-start')};">
            <div class="article-author-avatar">👩‍🏫</div>
            <div class="article-author-info" style="text-align: ${titleAlign};">
              <h6>Psicoorientación Escolar • ${meta.name}</h6>
              <span>Artículo Informativo & Pautas Familiares</span>
            </div>
          </div>
          ${hasImg ? `
            <div class="cycle-block-img-wrap" style="margin-bottom: 18px; max-height: 320px;">
              <img src="${b.imageUrl}" alt="${b.title}" loading="lazy">
            </div>
          ` : ''}
          <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || 'Lectura Recomendada'}</span>
            <h3 class="cycle-block-title" style="font-size: 1.5rem; margin-top: 6px; text-align: ${titleAlign};">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="font-size: 0.95rem; text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
          </div>
          <div class="article-body-content" style="margin-top: 14px; text-align: ${titleAlign};">${b.text}</div>
        </div>
      `;

    case 'callout_tip':
      const color = b.accentColor || 'purple';
      const emoji = b.iconEmoji || '💡';
      return `
        <div class="cycle-block-card size-${size} type-callout_tip accent-${color} ${meta.borderClass}">
          <div class="callout-icon-circle">${emoji}</div>
          <div style="flex: 1; text-align: ${titleAlign}; width: 100%;" class="title-align-${titleAlign}">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || 'Consejo Práctico'}</span>
            <h4 class="cycle-block-title" style="font-size: 1.2rem; color: #1e293b; margin-top: 2px; text-align: ${titleAlign};">${b.title}</h4>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="color: #64748b; font-weight: 700; text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
            <div class="cycle-block-text" style="font-size: 0.96rem; color: #334155; font-weight: 500; text-align: ${titleAlign};">${b.text}</div>
          </div>
        </div>
      `;

    case 'cards_grid':
      const cards = b.itemsList && b.itemsList.length ? b.itemsList : [
        { icon: '💖', title: 'Pauta 1', text: b.text || 'Consejo destacado.' }
      ];
      return `
        <div class="cycle-block-card size-${size} type-cards_grid ${meta.borderClass}">
          <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || meta.name}</span>
            <h3 class="cycle-block-title" style="text-align: ${titleAlign};">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
            ${b.text ? `<div class="cycle-block-text" style="margin-bottom: 12px; text-align: ${titleAlign};">${b.text}</div>` : ''}
          </div>
          <div class="block-subcards-grid">
            ${cards.map(c => `
              <div class="subcard-item">
                <div class="subcard-item-icon">${c.icon || '⭐'}</div>
                <div class="subcard-item-title">${c.title}</div>
                <div class="subcard-item-text">${c.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'faq_accordion':
      const faqs = b.accordionItems && b.accordionItems.length ? b.accordionItems : [
        { question: b.title, answer: b.text }
      ];
      return `
        <div class="cycle-block-card size-${size} type-faq_accordion ${meta.borderClass}">
          <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || 'Preguntas Frecuentes'}</span>
            <h3 class="cycle-block-title" style="text-align: ${titleAlign};">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
          </div>
          <div class="cycle-accordion-list">
            ${faqs.map((item, i) => `
              <div class="cycle-accordion-item ${i === 0 ? 'active' : ''}">
                <div class="cycle-accordion-header" onclick="toggleCycleAccordion(this)">
                  <span>${item.question}</span>
                  <i data-lucide="chevron-down" class="cycle-accordion-chevron"></i>
                </div>
                <div class="cycle-accordion-body">
                  ${item.answer}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'resources_download':
      const resources = b.resourcesList && b.resourcesList.length ? b.resourcesList : [
        { title: b.title, desc: b.text, icon: 'file-text' }
      ];
      return `
        <div class="cycle-block-card size-${size} type-resources_download ${meta.borderClass}">
          <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || 'Descargables'}</span>
            <h3 class="cycle-block-title" style="text-align: ${titleAlign};">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
          </div>
          <div class="cycle-resources-grid">
            ${resources.map(r => `
              <div class="resource-download-card">
                <div class="resource-card-header">
                  <div class="resource-card-icon"><i data-lucide="${r.icon || 'file-text'}"></i></div>
                  <div class="resource-card-info">
                    <h5>${r.title}</h5>
                    <p>${r.desc}</p>
                  </div>
                </div>
                <button type="button" class="btn btn-outline btn-sm" onclick="showToast('📥 Descargando archivo...')">
                  <i data-lucide="download"></i> Descargar Documento
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'photo_gallery':
      const photos = b.photosList && b.photosList.length ? b.photosList : [
        { url: b.imageUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80', caption: 'Talleres y actividades del ciclo' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', caption: 'Encuentros formativos' }
      ];
      return `
        <div class="cycle-block-card size-${size} type-photo_gallery ${meta.borderClass}">
          <div class="title-align-${titleAlign}" style="text-align: ${titleAlign}; width: 100%;">
            <span class="cycle-block-badge ${meta.pillClass}" style="${alignBadgeStyle}">${b.badgeText || 'Galería de Fotos'}</span>
            <h3 class="cycle-block-title" style="text-align: ${titleAlign};">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle" style="text-align: ${titleAlign};">${b.subtitle}</div>` : ''}
            ${b.text ? `<div class="cycle-block-text" style="margin-bottom: 16px; text-align: ${titleAlign};">${b.text}</div>` : ''}
          </div>
          <div class="cycle-photo-gallery-grid">
            ${photos.map(p => `
              <div class="gallery-photo-item">
                <img src="${p.url}" alt="${p.caption || 'Foto'}" loading="lazy">
                ${p.caption ? `<div class="gallery-photo-caption">${p.caption}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'counselor_spotlight':
      const cData = b.counselorData || {};
      const cName = cData.name || b.title || 'Orientadora del Ciclo';
      const cRole = cData.role || b.subtitle || 'Psicoorientación Escolar';
      const cEmail = cData.email || 'orientacion@colegioleonistico.edu.co';
      const cPhoto = b.imageUrl || '';
      return `
        <div class="cycle-block-card size-${size} type-counselor_spotlight ${meta.borderClass}">
          <div class="counselor-spotlight-inner">
            <div class="counselor-avatar-circle">
              ${cPhoto ? `<img src="${cPhoto}" alt="${cName}">` : `<span style="font-size: 2.5rem;">👩‍🏫</span>`}
            </div>
            <div class="counselor-spotlight-info title-align-${titleAlign}" style="text-align: ${titleAlign};">
              <span class="cycle-block-badge ${meta.pillClass}">${b.badgeText || 'Orientadora del Ciclo'}</span>
              <h3 class="cycle-block-title" style="font-size: 1.4rem; margin-top: 4px;">${cName}</h3>
              <div class="cycle-block-subtitle" style="color: #7c3aed; font-weight: 700;">${cRole}</div>
              <div class="cycle-block-text" style="font-size: 0.95rem; margin: 10px 0;">${b.text}</div>
              <div class="hero-btn-wrap" style="margin-top: 14px;">
                <a href="${b.buttonUrl || `mailto:${cEmail}`}" class="btn btn-primary btn-sm">
                  <i data-lucide="mail"></i> ${b.buttonText || 'Solicitar Cita de Orientación'}
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

    default: // split_horizontal & standard
      return `
        <div class="cycle-block-card size-${size} layout-${pos} ${meta.borderClass}">
          ${hasImg ? `
            <div class="cycle-block-img-wrap">
              <img src="${b.imageUrl}" alt="${b.title}" loading="lazy">
            </div>
          ` : ''}
          <div style="flex: 1; text-align: ${titleAlign};" class="title-align-${titleAlign}">
            <span class="cycle-block-badge ${meta.pillClass}">${b.badgeText || meta.grades}</span>
            <h3 class="cycle-block-title">${b.title}</h3>
            ${b.subtitle ? `<div class="cycle-block-subtitle">${b.subtitle}</div>` : ''}
            <div class="cycle-block-text">${b.text}</div>
            ${b.buttonText ? `
              <div class="hero-btn-wrap" style="margin-top: 18px;">
                <a href="${b.buttonUrl || '#'}" class="btn btn-secondary btn-sm">
                  ${b.buttonText} →
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `;
  }
}

function renderAdminCycleBlocks() {
  const container = document.getElementById('adminCycleBlocksList');
  const meta = CYCLES_METADATA.find(c => c.key === selectedAdminCycleKey) || CYCLES_METADATA[0];

  const nameEl = document.getElementById('adminCycleActiveName');
  if (nameEl && meta) nameEl.textContent = `${meta.name} (${meta.grades})`;

  // Sincronizar botones de pestañas de ciclos
  const buttons = document.querySelectorAll('.cycle-tab-btn');
  buttons.forEach(b => {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(selectedAdminCycleKey)) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  updateCycleBlockLivePreview();

  if (!container) return;

  const list = cycleBlocks.filter(b => b.cycleId === selectedAdminCycleKey).sort((a, b) => (a.order || 0) - (b.order || 0));

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; color: #64748b; padding: 48px 20px; text-align: center; background: #f8fafc; border-radius: var(--radius-md); border: 2px dashed #cbd5e1;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🎨</div>
        <h5 style="font-size: 1.15rem; font-weight: 800; color: #1e293b; margin-bottom: 4px;">No hay bloques creados para ${meta.name}</h5>
        <p style="font-size: 0.88rem; margin-bottom: 16px;">Usa el botón "+ Agregar Bloque" para añadir banners, artículos, acordeones o consejos.</p>
        <button type="button" class="btn btn-primary btn-sm" onclick="startNewCycleBlockCreation()">
          <i data-lucide="plus"></i> ➕ Agregar Primer Bloque
        </button>
      </div>
    `;
    return;
  }

  const typeIcons = {
    'hero_banner': '📰 Banner',
    'split_horizontal': '🖼️ Dividido',
    'article_blog': '📝 Artículo',
    'callout_tip': '💡 Consejo',
    'cards_grid': '🌟 Cuadrícula',
    'faq_accordion': '📑 Acordeón',
    'resources_download': '📥 Descargables'
  };

  const sizeLabels = {
    'full': '<span style="background: #ede9fe; color: #6d28d9; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.72rem;">🟦 Grande (100%)</span>',
    'half': '<span style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.72rem;">🟨 Mediana (50%)</span>',
    'third': '<span style="background: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.72rem;">🟩 Pequeño (33%)</span>'
  };

  container.innerHTML = list.map((b, idx) => {
    const size = b.size || 'full';
    const type = b.type || 'hero_banner';

    return `
      <div class="admin-cycle-card-item size-${size} ${meta.borderClass}" draggable="true" data-block-id="${b.id}">
        
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="drag-grip-handle" title="Arrastra con el mouse para cambiar el orden">
              <i data-lucide="grip-vertical" style="width: 14px; height: 14px;"></i> #${idx + 1}
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; background: #f1f5f9; color: #334155; padding: 3px 10px; border-radius: 6px;">
              ${typeIcons[type] || 'Bloque'}
            </span>
            <span class="cycle-block-badge ${meta.pillClass}">${b.badgeText || meta.name}</span>
          </div>
          <div>
            ${sizeLabels[size] || sizeLabels['full']}
          </div>
        </div>

        <div style="width: 100%; min-width: 0; max-width: 100%; overflow: hidden;">
          ${renderCycleBlockByType(b, meta, false)}
        </div>

        <div class="cycle-block-admin-actions" style="grid-column: 1 / -1; width: 100%;">
          <div style="display: flex; gap: 6px; align-items: center;">
            <button type="button" class="btn btn-outline btn-sm" onclick="moveCycleBlockOrder(${b.id}, -1)" ${idx === 0 ? 'disabled' : ''} title="Subir Bloque" style="padding: 4px 10px; font-weight: 700;">
              ⬆️ Subir
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="moveCycleBlockOrder(${b.id}, 1)" ${idx === list.length - 1 ? 'disabled' : ''} title="Bajar Bloque" style="padding: 4px 10px; font-weight: 700;">
              ⬇️ Bajar
            </button>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline btn-sm" onclick="duplicateCycleBlock(${b.id})" title="Duplicar Bloque" style="color: #4338ca; border-color: #c7d2fe; font-weight: 700;">
              <i data-lucide="copy"></i> Duplicar
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="editCycleBlock(${b.id})" style="font-weight: 700;">
              <i data-lucide="edit-3"></i> Editar
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="promptDeleteCycleBlock(${b.id})" style="color: #dc2626; border-color: #fca5a5; font-weight: 700;">
              <i data-lucide="trash-2"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setupCycleBlockDragAndDrop();
  if (window.lucide) lucide.createIcons();
}

function renderCyclePublicPage(cycleKey) {
  const container = document.getElementById('cycleBlocksContainer');
  if (!container) return;

  const meta = CYCLES_METADATA.find(c => c.key === cycleKey);
  if (!meta) return;

  const list = cycleBlocks.filter(b => b.cycleId === cycleKey).sort((a, b) => (a.order || 0) - (b.order || 0));

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: #64748b; background: white; border-radius: var(--radius-lg); border: 2px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">${meta.icon}</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin-bottom: 6px;">Página en Actualización</h3>
        <p style="font-size: 0.95rem; color: #64748b;">Pronto compartiremos pautas, actividades y contenidos para los estudiantes y familias de ${meta.name}.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map((b) => renderCycleBlockByType(b, meta, true)).join('');
  if (window.lucide) lucide.createIcons();
}


