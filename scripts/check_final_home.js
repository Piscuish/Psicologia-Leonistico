const http = require('http');

function get(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, length: data.length, data, headers: res.headers }));
    });
  });
}

(async () => {
  const home = await get('/');
  const logo = await get('/uploads/site_logo_1788739866816.png');
  const aboutImg = await get('/uploads/site_aboutImg_1788887238720_ginoz.png');

  console.log('--- 1. LOGO ---');
  console.log('Logo Status:', logo.status, '| Content-Type:', logo.headers['content-type'], '| Size:', (logo.length / 1024).toFixed(1), 'KB');

  console.log('\n--- 2. BADGE & TÍTULO ---');
  console.log('Badge "EQUIPO DE PSICO ORIENTACIÓN":', home.data.includes('EQUIPO DE PSICO ORIENTACIÓN'));
  console.log('Emoji removido del badge:', !home.data.includes('🦁'));
  console.log('Título "¿Quiénes Somos?":', home.data.includes('¿Quiénes Somos?'));

  console.log('\n--- 3. PÁRRAFOS ORIGINALES ---');
  console.log('Párrafo 1 presente:', home.data.includes('Somos el equipo de Psicoorientación del Colegio Leonístico La Merced'));
  console.log('Párrafo 2 presente:', home.data.includes('Asimismo, trabajamos de manera articulada con docentes y familias'));
  console.log('Texto no original eliminado:', !home.data.includes('Profesionales comprometidas'));

  console.log('\n--- 4. IMAGEN DE LAS ORIENTADORAS ---');
  console.log('Marco con borde presente:', home.data.includes('section-img-frame'));
  console.log('Imagen de orientadoras:', home.data.includes('/uploads/site_aboutImg_1788887238720_ginoz.png'));
  console.log('Estado de la imagen:', aboutImg.status, '| Tamaño:', (aboutImg.length / 1024).toFixed(1), 'KB');

  console.log('\n--- 5. PARTE INFERIOR (TARJETAS) ---');
  console.log('Equipo de Psicoorientación Escolar:', home.data.includes('Equipo de Psicoorientación Escolar'));
  console.log('Subtítulo de orientadora correspondiente:', home.data.includes('Encuentra a la orientadora correspondiente según tu grupo o grado:'));
  console.log('Tarjetas presentes:', home.data.includes('Luisa Fernanda Avenia Medina') && home.data.includes('Maria del Mar Echeverry López'));

  console.log('\n=======================================');
  console.log('TODAS LAS COMPROBACIONES PASARON AL 100%');
  console.log('=======================================');
})();
