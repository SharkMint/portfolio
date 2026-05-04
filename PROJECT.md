# Portfolio Personal — Maicol Jaquez

Sitio web de portafolio personal para un desarrollador de software de la República Dominicana. Es una Single Page Application (SPA) construida con React que muestra habilidades, proyectos y un formulario de contacto.

---

## Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| Framework UI | React 18.2.0 |
| Librería de componentes | Chakra UI 2.8.0 |
| Estilos (CSS-in-JS) | Emotion 11 |
| Animaciones | Framer Motion 6 |
| Enrutamiento | React Router DOM 6.8.1 |
| Formularios | React Hook Form 7.43.9 |
| Envío de emails | EmailJS 3.4.0 |
| Notificaciones | Chakra `useToast` (principal), React Toastify (secundario) |
| Iconos | React Icons 4.7.1, Hero Icons 1.0.5 |
| Scroll suave | React Scroll 1.8.9 |
| Build tooling | Create React App 5.0.0 |

---

## Estructura de Carpetas

```
src/
├── index.js               # Punto de entrada (Chakra Provider + App)
├── App.js                 # Router principal (ruta única en /)
├── chakra-theme.js        # Configuración del tema (colores, fuentes, componentes)
├── page/
│   └── Home.jsx           # Página principal con todas las secciones
├── components/
│   ├── Header.jsx         # Navegación sticky con drawer en mobile
│   ├── About.jsx          # Sección "Sobre mí" con foto y redes sociales
│   ├── Skils.jsx          # Sección de habilidades agrupadas por categoría
│   ├── Proyects.jsx       # Grilla de proyectos con hover overlay
│   ├── Contact.jsx        # Formulario de contacto con validación
│   ├── Footer.jsx         # Pie de página con links rápidos
│   └── ParticlesBackground.jsx  # Componente de partículas (deshabilitado)
├── assets/
│   ├── img/               # Imágenes de proyectos, avatar, logos de tecnologías
│   └── [icons sociales]   # GitHub, LinkedIn, Twitter, Instagram
└── docs/
    └── Curriculum.pdf     # CV descargable
```

---

## Secciones del Sitio

### 1. Hero (Home.jsx)
- Layout de dos columnas (avatar a la derecha, texto a la izquierda)
- Texto de presentación en español
- Botones CTA: "Contáctame" y "Descargar CV"
- Grid de miniaturas de proyectos destacados

### 2. About
- Foto de perfil con borde teal
- Links a redes sociales (LinkedIn, Twitter, GitHub, Instagram)
- Bio mencionando React, Next.js, .NET, Node.js y bases de datos

### 3. Skills
Divididas en tres categorías:
- **Backend**: ASP.NET MVC, .NET, JavaScript, TypeScript, Laravel, Next.js, Firebase, MySQL
- **Frontend**: HTML5, CSS3, Bootstrap, Chakra UI, Material UI, Ant Design, Tailwind, Vite, React, Redux
- **Tools**: GitHub, Git, Docker

### 4. Projects
Grilla responsive con cards que tienen efecto hover (zoom + overlay oscuro). Proyectos:
- **El Gustico** — Sitio de restaurante/café
- **Tienda Virtual** — E-commerce
- **Netflix Clone** — Clon de interfaz de Netflix
- **Library** — Sistema de gestión de biblioteca

Cada card enlaza al repositorio de GitHub correspondiente.

### 5. Contact
- Campos: Nombre, Email, Mensaje
- Validación con react-hook-form (requerido, regex de email, mínimo 10 caracteres en mensaje)
- Envío mediante EmailJS
- Feedback al usuario con toasts de Chakra UI
- Estado de carga en el botón de envío

---

## Diseño y Tema

- **Paleta**: Fondo oscuro (`gray.900`), texto blanco, acentos en teal (`#059669`)
- **Tipografía**: Poppins (Google Fonts), pesos 300/400/600/700
- **Responsive**: Mobile-first con breakpoints `base`, `md`, `lg`
- **Header**: Glassmorphism con `backdrop-filter: blur`
- **Scrollbar**: Personalizado con thumb en color teal
- **Mobile**: Menú tipo Drawer (hamburguesa → panel lateral)

---

## Configuración de EmailJS

| Parámetro | Valor |
|---|---|
| Service ID | `service_xskjw5k` |
| Template ID | `template_g0x0adf` |
| Public Key | `pyfweufZCl3VbftlI` |

---

## Scripts Disponibles

```bash
npm start      # Servidor de desarrollo (localhost:3000)
npm run build  # Build de producción
npm test       # Ejecutar tests
```

---

## Notas Relevantes

- El sitio está completamente en **español**, orientado a audiencia hispanohablante.
- La migración de Tailwind CSS a Chakra UI está completada.
- El componente de fondo de partículas (`TSParticles`) fue deshabilitado por rendimiento.
- Incluye `manifest.json` para soporte PWA.
- El CV en PDF (`Curriculum.pdf`) está incluido en el bundle bajo `src/docs/`.
