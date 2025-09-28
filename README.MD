# webCintia

Proyecto web con estructura básica HTML + SCSS, configurado con compilación automática de Sass y formateo de código con Prettier.

---

## 📁 Estructura del proyecto

webCintia/
├── styles/ # Archivos SCSS
│ └── index.scss
├── css/ # Archivos CSS generados automáticamente
│ └── index.css
├── index.html
├── package.json
├── .prettierrc # Configuración de Prettier
├── .vscode/settings.json # Configuración de VS Code para formatear al guardar
└── README.md

## ✅ Requisitos

- Node.js (v14 o superior recomendado)
- npm
- Git
- Extensión de Prettier para VS Code

## ⚙️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/KipaCar/webCintia.git
   cd webCintia
   ```

2. Instala las dependencias:

   npm install

3. Dependencias de sass

npm install --save-dev sass

## 🚀 Scripts disponibles

1. Compilar Sass en modo watch (automático)

   npm run sass
   Open with Live Server

## 🧼 Formatear todo el proyecto manualmente

npm run format
