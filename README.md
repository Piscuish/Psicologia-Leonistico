# Caminando Juntos - Psicoorientación Escolar
### Colegio Leonístico La Merced

Web Service y Portal Institucional de Psicoorientación Escolar desarrollado con Node.js, Express y Frontend interactivo de alto rendimiento. Totalmente autónomo y optimizado para ejecución local y sin conexión (offline).

---

## 💻 Cómo Iniciar el Servidor Local

### Prerrequisitos
* Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### Paso 1: Instalar dependencias (primera vez)
```bash
npm install
```

### Paso 2: Ejecutar el servidor
```bash
node server.js
```
*(o alternativamente: `npm start`)*

### Paso 3: Abrir en el navegador
Abre cualquiera de las siguientes rutas en tu navegador:
* 🏠 **Página Principal (Inicio / Quiénes Somos):** [http://localhost:3000/](http://localhost:3000/)
* 💖 **Guía de Bienestar Emocional Post Terremoto:** [http://localhost:3000/guia-bienestar](http://localhost:3000/guia-bienestar)
* 🛡️ **Promoción y Prevención Integral:** [http://localhost:3000/promocion-prevencion](http://localhost:3000/promocion-prevencion)
* 👨‍👩‍👧 **Encuentros Familiares y Talleres:** [http://localhost:3000/encuentros](http://localhost:3000/encuentros)
* 🔐 **Panel de Administración:** [http://localhost:3000/admin](http://localhost:3000/admin) *(o `/admin451200`)*
* 📚 **Ciclos Escolares:**
  * [Primera Infancia (Jardín y Transición)](http://localhost:3000/ciclos/primera-infancia)
  * [Ciclo Infantil (1°, 2° y 3°)](http://localhost:3000/ciclos/infantil)
  * [Ciclo Básico (4° y 5°)](http://localhost:3000/ciclos/basico)
  * [Ciclo Fundamental (6° y 7°)](http://localhost:3000/ciclos/fundamental)
  * [Ciclo Exploratorio (8° y 9°)](http://localhost:3000/ciclos/exploratorio)
  * [Ciclo Especializado (10° y 11°)](http://localhost:3000/ciclos/especializado)

---

## 🔑 Credenciales y Accesos del Panel de Administración

* **Contraseña inicial de administración:** `123` (se puede cambiar desde el panel en la pestaña *Seguridad & Enlace*).
* **Ruta de acceso secreta por defecto:** `/admin451200` o `/admin`
* **Atajo de teclado secreto:** Presiona <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> desde cualquier página para ir directo al panel de administración.

---

## 📦 Estructura del Proyecto

```text
psicologia-leonistico/
│
├── ciclos/                     # Páginas de ciclos escolares
│   ├── primera-infancia.html
│   ├── infantil.html
│   ├── basico.html
│   ├── fundamental.html
│   ├── exploratorio.html
│   ├── especializado.html
│   └── template.html
│
├── data/                       # Base de datos centralizada
│   └── db.json                 # JSON store sincronizado con producción
│
├── uploads/                    # Recursos multimedia e imágenes locales
│
├── js/                         # Librerías locales (lucide.min.js)
│
├── public/                     # Espejo estático para distribución
│
├── admin.html                  # Panel de Control y CMS
├── app.js                      # Controlador interactivo frontend
├── encuentros.html             # Encuentros familiares
├── guia-bienestar.html         # Guía de bienestar post terremoto
├── index.html                  # Portal principal
├── promocion-prevencion.html   # Promoción y prevención
├── server.js                   # Servidor Express (Web Service)
├── styles.css                  # Hoja de estilos institucionales
├── INVENTARIO.md               # Inventario completo de rutas y arquitectura
├── INVENTARIO_IMAGENES.md      # Inventario detallado de imágenes
└── README.md                   # Documentación general
```
