const fs = require('fs');
const path = require('path');

const dbPath = 'C:/Pagina WEB/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Set full homeContent and siteImages in DB
db.siteImages = {
  logo: '/uploads/site_logo_official.png',
  favicon: '/uploads/site_favicon.ico',
  heroBg: '/uploads/site_heroBg_1788808026106_myuxl.png',
  aboutImg: '/uploads/site_aboutImg_1788887238720_ginoz.png',
  welcome: '/uploads/site_welcome_official.png',
  about: '/uploads/site_aboutImg_1788887238720_ginoz.png'
};

db.homeContent = {
  identityBadge: '🏛️ IDENTIDAD LEONÍSTICA',
  mainTitle: 'Bienvenidos a "Caminando Juntos"',
  tagline: '"Un espacio para crecer, aprender y construir bienestar."',
  paragraph1: 'Este blog nace como un espacio de encuentro y acompañamiento para toda la comunidad educativa, creado con el propósito de compartir los procesos, actividades y estrategias que se desarrollan desde el área de Psicología y Psicoorientación del Colegio Leonístico La Merced.',
  paragraph2: 'Aquí encontraremos experiencias de las actividades institucionales, recursos y herramientas dirigidas a estudiantes, familias y docentes, teniendo en cuenta las diferentes etapas del desarrollo. Será también una oportunidad para aprender, descubrir fortalezas, fortalecer habilidades y acompañar a nuestros niños, niñas y adolescentes en la construcción de un proyecto de vida con sentido.',
  paragraph3: 'A través de este espacio compartiremos orientaciones y estrategias que contribuyan al bienestar integral, al desarrollo socioemocional, al fortalecimiento de las relaciones y a la construcción de entornos que favorezcan el crecimiento y aprendizaje de nuestra comunidad educativa.',
  aboutBadge: '🦁 EQUIPO DE ORIENTACIÓN',
  aboutTitle: '¿Quiénes Somos?',
  aboutSubtitle: 'Somos el equipo de Psicoorientación del Colegio Leonístico La Merced, comprometido con el acompañamiento de nuestros estudiantes en sus procesos emocionales dentro del contexto educativo. Brindamos orientación, estrategias y herramientas que contribuyen a su bienestar y favorecen su desarrollo integral, acompañándolos en las diferentes etapas de su proceso escolar.',
  aboutParagraph1: 'Asimismo, trabajamos de manera articulada con docentes y familias, brindando estrategias y orientaciones que les permitan fortalecer el acompañamiento de nuestros estudiantes y favorecer sus procesos emocionales, académicos y de adaptación escolar.',
  aboutParagraph2: '',
  areasTitle: 'Áreas de Acompañamiento Institucional',
  areasSubtitle: 'Líneas de trabajo diseñadas para respaldar cada etapa de tu vida escolar y familiar.',
  areas: [
    {
      id: 1,
      title: 'Bienestar Emocional',
      tag: 'Apoyo Personal',
      desc: 'Estrategias para la gestión de emociones, manejo del estrés escolar, resolución asertiva de conflictos y autoestima.'
    },
    {
      id: 2,
      title: 'Orientación Vocacional',
      tag: 'Grados Superiores',
      desc: 'Descubrimiento de talentos, pasiones y orientación para la toma de decisiones profesionales hacia el futuro.'
    },
    {
      id: 3,
      title: 'Convivencia Escolar',
      tag: 'Comunidad',
      desc: 'Promoción de relaciones basadas en el respeto, empatía, prevención del acoso escolar y cultura de paz en las aulas.'
    },
    {
      id: 4,
      title: 'Escuela de Familias',
      tag: 'Padres y Cuidadores',
      desc: 'Espacios de formación y diálogo sobre pautas de crianza, límites afectivos y comunicación positiva en el hogar.'
    }
  ]
};

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
fs.writeFileSync('C:/Pagina WEB/public/data/db.json', JSON.stringify(db, null, 2), 'utf8');
console.log('Updated db.json and public/data/db.json with full HOME data.');

// 2. Build complete, pristine index.html
const indexHtmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Caminando Juntos - Psicoorientación Escolar | Colegio Leonístico La Merced</title>
  
  <!-- Preconnect & DNS-Prefetch -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://unpkg.com">

  <!-- Preload Critical Banner -->
  <link rel="preload" as="image" href="/uploads/site_heroBg_1788808026106_myuxl.png" fetchpriority="high">

  <!-- Favicon -->
  <link rel="icon" id="faviconTag" href="/uploads/site_favicon.ico" type="image/x-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Oswald:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Lucide Icons -->
  <script src="/js/lucide.min.js" defer></script>

  <!-- Custom Styles -->
  <link rel="stylesheet" href="/styles.css">
</head>
<body>

  <!-- Top Announcement Bar (Leonístico Blue & Gold) -->
  <div class="top-banner top-banner-leonistico">
    <div class="container banner-inner">
      <span class="badge badge-gold-pulse">🦁 COLEGIO LEONÍSTICO LA MERCED</span>
      <span>¡Portal Oficial de <strong>Psicoorientación Escolar & Acompañamiento Familiar</strong>!</span>
      <a href="/encuentros" class="banner-link banner-link-gold">Ver Encuentros Familiares →</a>
    </div>
  </div>

  <!-- Main Navigation Header -->
  <header class="main-header">
    <div class="container nav-container">
      <a href="/" class="brand-logo">
        <div class="logo-img-wrapper">
          <img id="siteBrandLogo" src="/uploads/site_logo_official.png" alt="Logo Colegio Leonístico La Merced" class="logo-img">
        </div>
        <div class="brand-text">
          <span class="brand-title">Caminando Juntos</span>
          <span class="brand-subtitle">Psicoorientación Escolar • Colegio Leonístico La Merced</span>
        </div>
      </a>

      <!-- Desktop Nav Menu -->
      <nav class="nav-menu">
        <!-- Inicio Dropdown -->
        <div class="nav-dropdown">
          <a href="/" class="nav-dropdown-toggle active" id="navDropdownBtn">
            <i data-lucide="home"></i> Inicio <i data-lucide="chevron-down" class="chevron-icon"></i>
          </a>
          <div class="nav-dropdown-menu">
            <a href="/" class="nav-dropdown-item">
              <i data-lucide="home"></i> Portada Principal
            </a>
            <a href="#quienes-somos" class="nav-dropdown-item">
              <i data-lucide="heart-handshake"></i> ¿Quiénes Somos?
            </a>
          </div>
        </div>

        <!-- Guía De Bienestar Emocional Post Terremoto -->
        <a href="/guia-bienestar" class="nav-btn">
          <i data-lucide="heart-pulse"></i> Guía De Bienestar Emocional Post Terremoto
        </a>

        <!-- Encuentros Familiares -->
        <a href="/encuentros" class="nav-btn">
          <i data-lucide="users"></i> Encuentros Familiares
        </a>

        <!-- Promoción y Prevención -->
        <a href="/promocion-prevencion" class="nav-btn">
          <i data-lucide="shield-check"></i> Promoción y Prevención
        </a>

        <!-- Ciclos Dropdown -->
        <div class="nav-dropdown">
          <a href="#" class="nav-dropdown-toggle" id="navCiclosBtn">
            <i data-lucide="layers"></i> Ciclos <i data-lucide="chevron-down" class="chevron-icon"></i>
          </a>
          <div class="nav-dropdown-menu" style="min-width: 280px;">
            <a href="/ciclos/primera-infancia" class="nav-dropdown-item">
              <span class="dropdown-pill pill-pink">J y T</span> Primera Infancia
            </a>
            <a href="/ciclos/infantil" class="nav-dropdown-item">
              <span class="dropdown-pill pill-teal">1, 2 y 3</span> Ciclo Infantil
            </a>
            <a href="/ciclos/basico" class="nav-dropdown-item">
              <span class="dropdown-pill pill-yellow">4 y 5</span> Ciclo Básico
            </a>
            <a href="/ciclos/fundamental" class="nav-dropdown-item">
              <span class="dropdown-pill pill-purple">6 y 7</span> Ciclo Fundamental
            </a>
            <a href="/ciclos/exploratorio" class="nav-dropdown-item">
              <span class="dropdown-pill pill-blue">8 y 9</span> Ciclo Exploratorio
            </a>
            <a href="/ciclos/especializado" class="nav-dropdown-item">
              <span class="dropdown-pill pill-green">10 y 11</span> Ciclo Especializado
            </a>
          </div>
        </div>
      </nav>

      <!-- Action Button & Mobile Toggle -->
      <div class="header-actions">
        <button class="menu-toggle" onclick="toggleMobileMenu()" aria-label="Abrir menú">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Drawer -->
    <div class="mobile-nav" id="mobileNav">
      <a href="/" class="mobile-nav-btn active">
        <i data-lucide="home"></i> Inicio (Portada)
      </a>
      <a href="#quienes-somos" class="mobile-nav-btn" onclick="toggleMobileMenu()" style="padding-left: 28px; font-size: 0.9rem;">
        <i data-lucide="heart-handshake"></i> └ ¿Quiénes Somos?
      </a>
      <a href="/guia-bienestar" class="mobile-nav-btn">
        <i data-lucide="heart-pulse"></i> Guía De Bienestar Emocional Post Terremoto
      </a>
      <a href="/encuentros" class="mobile-nav-btn">
        <i data-lucide="users"></i> Encuentros Familiares
      </a>
      <a href="/promocion-prevencion" class="mobile-nav-btn">
        <i data-lucide="shield-check"></i> Promoción y Prevención
      </a>
      <div style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; padding: 6px 12px 2px 12px; letter-spacing: 0.5px;">
        Ciclos Escolares
      </div>
      <a href="/ciclos/primera-infancia" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-pink" style="font-size: 0.68rem; min-width: 48px;">J y T</span> Primera Infancia
      </a>
      <a href="/ciclos/infantil" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-teal" style="font-size: 0.68rem; min-width: 48px;">1, 2 y 3</span> Ciclo Infantil
      </a>
      <a href="/ciclos/basico" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-yellow" style="font-size: 0.68rem; min-width: 48px;">4 y 5</span> Ciclo Básico
      </a>
      <a href="/ciclos/fundamental" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-purple" style="font-size: 0.68rem; min-width: 48px;">6 y 7</span> Ciclo Fundamental
      </a>
      <a href="/ciclos/exploratorio" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-blue" style="font-size: 0.68rem; min-width: 48px;">8 y 9</span> Ciclo Exploratorio
      </a>
      <a href="/ciclos/especializado" class="mobile-nav-btn" style="padding-left: 24px; font-size: 0.9rem;">
        <span class="dropdown-pill pill-green" style="font-size: 0.68rem; min-width: 48px;">10 y 11</span> Ciclo Especializado
      </a>
    </div>
  </header>

  <!-- Main Content Wrapper -->
  <main id="main-content">
    
    <!-- Hero Banner (Leonístico Navy & Gold Accent) -->
    <section class="hero-banner-custom" id="heroSection" style="background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 27, 75, 0.82) 100%), url('/uploads/site_heroBg_1788808026106_myuxl.png'); background-size: cover; background-position: center;">
      <div class="hero-banner-overlay"></div>
      <div class="container hero-banner-content">
        <div class="hero-text-side">
          <div class="hero-chip-white">
            <i data-lucide="sparkles"></i> Espacio de Acompañamiento y Bienestar
          </div>
          <h1 class="hero-title-main">PSICOLOGÍA <span class="title-gold-accent">LEONÍSTICO</span></h1>
          <p class="hero-subtitle-main">
            Un espacio cálido, seguro y confidencial para orientar el corazón y la mente de nuestros estudiantes y familias leonísticas.
          </p>
        </div>
      </div>
    </section>

    <!-- Institutional Bicolor Stripe -->
    <div class="institutional-stripe-bar"></div>

    <!-- Bienvenidos Section -->
    <section class="section-container bg-white-section" id="bienvenidos-section">
      <div class="container" style="max-width: 980px;">
        <div class="section-text-block text-center" style="max-width: 860px; margin: 0 auto 28px;">
          <span class="sub-badge" id="homeIdentityBadge">🏛️ IDENTIDAD LEONÍSTICA</span>
          <h2 style="font-size: 2.4rem; margin-top: 10px; margin-bottom: 8px;" id="homeMainTitle">Bienvenidos a <span class="highlight-blue">"Caminando Juntos"</span></h2>
          <p class="section-tagline" id="homeTagline" style="font-size: 1.15rem; color: #0d9488; font-weight: 600; margin: 0 auto;">"Un espacio para crecer, aprender y construir bienestar."</p>
        </div>
        <div style="background: #f8fafc; border-radius: var(--radius-lg); padding: 36px 40px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); line-height: 1.8; color: #334155; font-size: 1.05rem;">
          <p id="homeParagraph1" style="margin-bottom: 18px;">
            Este blog nace como un espacio de encuentro y acompañamiento para toda la comunidad educativa, creado con el propósito de compartir los procesos, actividades y estrategias que se desarrollan desde el área de Psicología y Psicoorientación del Colegio Leonístico La Merced.
          </p>
          <p id="homeParagraph2" style="margin-bottom: 18px;">
            Aquí encontraremos experiencias de las actividades institucionales, recursos y herramientas dirigidas a estudiantes, familias y docentes, teniendo en cuenta las diferentes etapas del desarrollo. Será también una oportunidad para aprender, descubrir fortalezas, fortalecer habilidades y acompañar a nuestros niños, niñas y adolescentes en la construcción de un proyecto de vida con sentido.
          </p>
          <p id="homeParagraph3" style="margin-bottom: 0;">
            A través de este espacio compartiremos orientaciones y estrategias que contribuyan al bienestar integral, al desarrollo socioemocional, al fortalecimiento de las relaciones y a la construcción de entornos que favorezcan el crecimiento y aprendizaje de nuestra comunidad educativa.
          </p>
        </div>
      </div>
    </section>

    <!-- ¿Quiénes Somos? Section -->
    <section class="section-container bg-light-section content-visibility-auto" id="quienes-somos">
      <div class="container">
        <div class="content-image-grid reversed">
          <div class="section-text-block">
            <span class="sub-badge" id="homeAboutBadge">🦁 EQUIPO DE ORIENTACIÓN</span>
            <h2 id="homeAboutTitle">¿Quiénes <span class="highlight-blue">Somos?</span></h2>
            <p class="section-tagline" id="homeAboutSubtitle">Somos el equipo de Psicoorientación del Colegio Leonístico La Merced, comprometido con el acompañamiento de nuestros estudiantes en sus procesos emocionales dentro del contexto educativo. Brindamos orientación, estrategias y herramientas que contribuyen a su bienestar y favorecen su desarrollo integral, acompañándolos en las diferentes etapas de su proceso escolar.</p>
            <p id="homeAboutParagraph1">
              Asimismo, trabajamos de manera articulada con docentes y familias, brindando estrategias y orientaciones que les permitan fortalecer el acompañamiento de nuestros estudiantes y favorecer sus procesos emocionales, académicos y de adaptación escolar.
            </p>
            <p id="homeAboutParagraph2" style="display: none;"></p>
          </div>
          <div class="section-img-frame">
            <img id="aboutSectionImg" src="/uploads/site_aboutImg_1788887238720_ginoz.png" alt="Equipo de Orientación Escolar" loading="lazy" decoding="async">
          </div>
        </div>

        <div style="margin-top: 50px;">
          <div class="section-title-wrap text-center" style="margin-bottom: 25px;">
            <h3>Equipo de Psicoorientación Escolar</h3>
            <p>Encuentra a la orientadora correspondiente según tu grupo o grado:</p>
          </div>
          
          <div class="team-grid" id="teamCardsContainer">
            <div class="team-card">
              <div class="team-avatar-wrapper bg-blue">
                <img src="/uploads/orientadora_1_1788885666601_hfdae.png" alt="Luisa Fernanda Avenia Medina" class="team-avatar-img" style="transform: scale(1); object-position: 50% 20%;">
              </div>
              <h3 class="team-name">Luisa Fernanda Avenia Medina</h3>
              <p class="team-desc">Acompañamiento integral a los estudiantes de los grupos A y Jardín, realizando seguimiento a sus procesos individuales y articulando las acciones necesarias con las familias, docentes y profesionales externos, de acuerdo con las necesidades identificadas.</p>
              <div class="team-contact-box">
                <div class="contact-item">
                  <i data-lucide="mail"></i>
                  <a href="mailto:lavenia@leonisticolamerced.edu.co">lavenia@leonisticolamerced.edu.co</a>
                </div>
              </div>
            </div>
            <div class="team-card">
              <div class="team-avatar-wrapper bg-pink">
                <img src="/uploads/orientadora_2_1788807938080_do5kp.png" alt="Maria del Mar Echeverry López" class="team-avatar-img" style="transform: scale(1.05); object-position: 0% 100%;">
              </div>
              <h3 class="team-name">Maria del Mar Echeverry López</h3>
              <p class="team-desc">Acompañamiento integral a los estudiantes de los grupos B y C, realizando seguimiento a sus procesos individuales y articulando las acciones necesarias con las familias, docentes y profesionales externos, de acuerdo con las necesidades identificadas.</p>
              <div class="team-contact-box">
                <div class="contact-item">
                  <i data-lucide="mail"></i>
                  <a href="mailto:mmecheverry@leonisticolamerced.edu.co">mmecheverry@leonisticolamerced.edu.co</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Áreas de Acompañamiento -->
    <section class="section-container bg-white-section content-visibility-auto">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="sub-badge">💛 LÍNEAS FORMATIVAS</span>
          <h2 id="homeAreasTitle">Áreas de Acompañamiento Institucional</h2>
          <p id="homeAreasSubtitle">Líneas de trabajo diseñadas para respaldar cada etapa de tu vida escolar y familiar.</p>
        </div>

        <div class="cards-grid-4">
          <div class="feature-card color-orange">
            <div class="feature-icon"><i data-lucide="heart"></i></div>
            <h3 id="homeAreaTitle1">Bienestar Emocional</h3>
            <p id="homeAreaDesc1">Estrategias para la gestión de emociones, manejo del estrés escolar, resolución asertiva de conflictos y autoestima.</p>
            <span class="card-tag" id="homeAreaTag1">Apoyo Personal</span>
          </div>

          <div class="feature-card color-blue">
            <div class="feature-icon"><i data-lucide="compass"></i></div>
            <h3 id="homeAreaTitle2">Orientación Vocacional</h3>
            <p id="homeAreaDesc2">Descubrimiento de talentos, pasiones y orientación para la toma de decisiones profesionales hacia el futuro.</p>
            <span class="card-tag" id="homeAreaTag2">Grados Superiores</span>
          </div>

          <div class="feature-card color-purple">
            <div class="feature-icon"><i data-lucide="smile"></i></div>
            <h3 id="homeAreaTitle3">Convivencia Escolar</h3>
            <p id="homeAreaDesc3">Promoción de relaciones basadas en el respeto, empatía, prevención del acoso escolar y cultura de paz en las aulas.</p>
            <span class="card-tag" id="homeAreaTag3">Comunidad</span>
          </div>

          <div class="feature-card color-green">
            <div class="feature-icon"><i data-lucide="home"></i></div>
            <h3 id="homeAreaTitle4">Escuela de Familias</h3>
            <p id="homeAreaDesc4">Espacios de formación y diálogo sobre pautas de crianza, límites afectivos y comunicación positiva en el hogar.</p>
            <span class="card-tag" id="homeAreaTag4">Padres y Cuidadores</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="main-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-img-wrapper" style="width: 44px; height: 44px;">
            <img id="footerBrandLogo" src="/uploads/site_logo_official.png" alt="Logo" class="logo-img">
          </div>
          <h3>Caminando Juntos</h3>
          <p>Departamento de Psicoorientación Escolar</p>
          <p class="footer-motto">"Educando con el corazón y guiando con vocación."</p>
        </div>

        <div class="footer-nav">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/guia-bienestar">Guía De Bienestar Emocional Post Terremoto</a></li>
            <li><a href="/encuentros">Encuentros Familiares</a></li>
            <li><a href="/promocion-prevencion">Promoción y Prevención</a></li>
            <li><a href="#quienes-somos">¿Quiénes Somos?</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom text-center">
        <p>&copy; 2026 Colegio Leonístico La Merced • Psicoorientación Escolar. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- Toast Notification Box -->
  <div class="toast-container" id="toastBox">
    <div class="toast-content">
      <i data-lucide="check-circle" class="toast-icon"></i>
      <span id="toastMsg">Notificación</span>
    </div>
  </div>

  <!-- Main JavaScript Logic -->
  <script src="/app.js?v=3.2.0" defer></script>
</body>
</html>`;

fs.writeFileSync('C:/Pagina WEB/index.html', indexHtmlContent, 'utf8');
fs.writeFileSync('C:/Pagina WEB/public/index.html', indexHtmlContent, 'utf8');
console.log('Updated index.html and public/index.html with pristine complete HOME layout.');

// 3. Update app.js logic to safeguard renderHomeContent and applySiteImages
function updateAppJs(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');

  // Update renderHomeContent
  const oldRenderHome = /function renderHomeContent\(\) \{[\s\S]*?\n\}/m;
  const newRenderHome = `function renderHomeContent() {
  const c = homeContent || DEFAULT_HOME_CONTENT;
  if (!c) return;

  const setSafeText = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined && val !== null && String(val).trim().length > 0) {
      el.textContent = val;
    }
  };

  setSafeText('homeIdentityBadge', c.identityBadge);
  setSafeText('homeMainTitle', c.mainTitle);
  setSafeText('homeTagline', c.tagline);
  setSafeText('homeParagraph1', c.paragraph1);
  setSafeText('homeParagraph2', c.paragraph2);
  setSafeText('homeParagraph3', c.paragraph3);

  setSafeText('homeAboutBadge', c.aboutBadge);
  setSafeText('homeAboutTitle', c.aboutTitle);
  setSafeText('homeAboutSubtitle', c.aboutSubtitle);
  setSafeText('homeAboutParagraph1', c.aboutParagraph1);
  setSafeText('homeAboutParagraph2', c.aboutParagraph2);

  setSafeText('homeAreasTitle', c.areasTitle);
  setSafeText('homeAreasSubtitle', c.areasSubtitle);

  if (Array.isArray(c.areas)) {
    c.areas.forEach((area, idx) => {
      const num = idx + 1;
      setSafeText(\`homeAreaTitle\${num}\`, area.title);
      setSafeText(\`homeAreaTag\${num}\`, area.tag);
      setSafeText(\`homeAreaDesc\${num}\`, area.desc);
    });
  }
}`;

  c = c.replace(oldRenderHome, newRenderHome);

  // Update applySiteImages
  const oldApplySite = /function applySiteImages\(\) \{[\s\S]*?\n\}/m;
  const newApplySite = `function applySiteImages() {
  const brandLogo = document.getElementById('siteBrandLogo');
  const footerLogo = document.getElementById('footerBrandLogo');
  if (brandLogo && siteImages.logo) brandLogo.src = siteImages.logo;
  if (footerLogo && siteImages.logo) footerLogo.src = siteImages.logo;

  const favicon = document.getElementById('faviconTag');
  if (favicon && siteImages.favicon) favicon.href = siteImages.favicon;

  const heroSection = document.getElementById('heroSection');
  if (heroSection && siteImages.heroBg) {
    heroSection.style.backgroundImage = \`linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 27, 75, 0.82) 100%), url("\${siteImages.heroBg}")\`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
  }

  const welcomeImg = document.getElementById('welcomeSectionImg');
  if (welcomeImg && siteImages.welcomeImg) {
    welcomeImg.src = siteImages.welcomeImg;
  }

  const aboutImg = document.getElementById('aboutSectionImg');
  if (aboutImg && (siteImages.aboutImg || siteImages.about)) {
    aboutImg.src = siteImages.aboutImg || siteImages.about;
  }
}`;

  c = c.replace(oldApplySite, newApplySite);

  fs.writeFileSync(filePath, c, 'utf8');
  console.log('Safeguarded home render functions in:', filePath);
}

updateAppJs('C:/Pagina WEB/app.js');
updateAppJs('C:/Pagina WEB/public/app.js');

console.log('HOME page successfully repaired!');
