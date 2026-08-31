# Caminando Juntos - Psicoorientación Escolar
### Colegio Leonístico La Merced

Web Service y Portal Institucional de Psicoorientación Escolar desarrollado con Node.js, Express y Frontend nativo de alto rendimiento.

---

## 🚀 Estructura del Proyecto (Web Service)

```text
psicologia-leonistico/
│
├── public/                     # Archivos estáticos servidos al navegador
│   ├── index.html              # Página Principal (Inicio, Quiénes Somos, Recursos)
│   ├── encuentros.html         # Página de Encuentros Familiares y Talleres
│   ├── admin.html              # Panel Secreto de Administración
│   ├── styles.css              # Estilos visuales optimizados
│   └── app.js                  # Lógica, gestión de imágenes y analíticas anti-farmeo
│
├── server.js                   # Servidor Node.js + Express (Web Service)
├── package.json                # Dependencias y scripts de ejecución
├── .gitignore                  # Exclusión de node_modules para Git
└── README.md                   # Documentación del proyecto
```

---

## 💻 Ejecución Local en tu Computadora

1. Abre tu terminal en la carpeta del proyecto:
   ```bash
   cd C:\Users\SergioM\.gemini\antigravity\scratch\psicologia-leonistico
   ```

2. Instala dependencias (si aún no lo has hecho):
   ```bash
   npm install
   ```

3. Inicia el Web Service:
   ```bash
   npm start
   ```

4. Abre en tu navegador cualquiera de las siguientes rutas:
   * 🏠 **Página Principal:** [http://localhost:3000/](http://localhost:3000/)
   * 👨‍👩‍👧 **Encuentros Familiares:** [http://localhost:3000/encuentros](http://localhost:3000/encuentros)
   * 🔐 **Panel de Administración Secreto:** [http://localhost:3000/admin451200](http://localhost:3000/admin451200)

---

## 🔑 Credenciales y Accesos

* **Contraseña inicial de administración:** `123` (se puede cambiar desde el panel en la pestaña *Seguridad & Enlace*).
* **Ruta de acceso secreta por defecto:** `/admin451200`
* **Atajo de teclado secreto:** Presiona <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> desde cualquier página para ir directo al panel de administración.

---

## ☁️ Pasos para Desplegar en Render.com (Cuando desees subirlo)

1. Sube tu código a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Web Service Psicoorientación Leonístico"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/psicologia-leonistico.git
   git push -u origin main
   ```
2. Entra a [Render.com](https://render.com) y crea un **New Web Service**.
3. Selecciona tu repositorio de GitHub.
4. En **Build Command** pon: `npm install`
5. En **Start Command** pon: `node server.js`
6. ¡Listo! Render te dará una URL pública con HTTPS gratuita.
