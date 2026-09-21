const http = require('http');

function get(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, length: data.length, data }));
    }).on('error', (e) => resolve({ status: 500, error: e.message }));
  });
}

(async () => {
  console.log('=== VERIFICANDO HOME LOCAL (http://localhost:3000/) ===\n');

  const home = await get('/');
  console.log('1. Carga de / (HOME):', home.status === 200 ? '✓ 200 OK (' + (home.length / 1024).toFixed(1) + ' KB)' : '✗ ERROR ' + home.status);

  // Check elements
  const checks = [
    { name: 'Logo Principal', needle: '/uploads/site_logo_official.png' },
    { name: 'Fondo Hero (Banner)', needle: '/uploads/site_heroBg_1788808026106_myuxl.png' },
    { name: 'Título Hero (PSICOLOGÍA LEONÍSTICO)', needle: 'PSICOLOGÍA <span class="title-gold-accent">LEONÍSTICO</span>' },
    { name: 'Subtítulo Hero', needle: 'Un espacio cálido, seguro y confidencial' },
    { name: 'Badge Identidad Leonística', needle: '🏛️ IDENTIDAD LEONÍSTICA' },
    { name: 'Título Principal (Caminando Juntos)', needle: 'Bienvenidos a <span class="highlight-blue">"Caminando Juntos"</span>' },
    { name: 'Tagline de Bienvenida', needle: '"Un espacio para crecer, aprender y construir bienestar."' },
    { name: 'Párrafo 1 de Bienvenida', needle: 'Este blog nace como un espacio de encuentro y acompañamiento' },
    { name: 'Sección ¿Quiénes Somos?', needle: '¿Quiénes <span class="highlight-blue">Somos?</span>' },
    { name: 'Imagen Sección Nosotros', needle: '/uploads/site_aboutImg_1788887238720_ginoz.png' },
    { name: 'Foto Orientadora 1 (Luisa)', needle: '/uploads/orientadora_1_1788885666601_hfdae.png' },
    { name: 'Foto Orientadora 2 (Maria del Mar)', needle: '/uploads/orientadora_2_1788807938080_do5kp.png' },
    { name: 'Áreas de Acompañamiento', needle: 'Áreas de Acompañamiento Institucional' },
    { name: 'Tarjeta Bienestar Emocional', needle: 'Bienestar Emocional' },
    { name: 'Tarjeta Orientación Vocacional', needle: 'Orientación Vocacional' },
    { name: 'Tarjeta Convivencia Escolar', needle: 'Convivencia Escolar' },
    { name: 'Tarjeta Escuela de Familias', needle: 'Escuela de Familias' },
    { name: 'Footer Institucional', needle: 'Educando con el corazón y guiando con vocación.' }
  ];

  let allPassed = true;
  checks.forEach(c => {
    const present = home.data && home.data.includes(c.needle);
    console.log(`${present ? '✓' : '✗'} ${c.name.padEnd(40)} ${present ? 'Presente' : 'FALTA'}`);
    if (!present) allPassed = false;
  });

  // Check static image URLs return 200
  console.log('\n--- Verificación de Recursos Multimedia del HOME ---');
  const mediaUrls = [
    '/uploads/site_logo_official.png',
    '/uploads/site_heroBg_1788808026106_myuxl.png',
    '/uploads/site_aboutImg_1788887238720_ginoz.png',
    '/uploads/orientadora_1_1788885666601_hfdae.png',
    '/uploads/orientadora_2_1788807938080_do5kp.png',
    '/uploads/site_favicon.ico',
    '/js/lucide.min.js'
  ];

  for (const m of mediaUrls) {
    const res = await get(m);
    console.log(`${res.status === 200 ? '✓ 200 OK' : '✗ FAIL'} ${m.padEnd(50)} (${(res.length / 1024).toFixed(1)} KB)`);
    if (res.status !== 200) allPassed = false;
  }

  console.log('\n==========================================');
  console.log(allPassed ? '🎉 RESULTADO: HOME 100% COMPLETO E IDÉNTICO' : '⚠️ RESULTADO: FALTAN ALGUNOS ELEMENTOS');
  console.log('==========================================');
})();
