# Portfolio (Chakra UI)

This repository is a personal portfolio built with Create React App and migrated to Chakra UI for the component library and design system.

What's included
- Modernized UI using Chakra UI primitives across Header, Home, About, Skills, Projects, Contact and Footer.
- Central `src/chakra-theme.js` provides theme tokens (colors, fonts) and component styles.
- Contact form uses `react-hook-form` for validation and Chakra `useToast` for feedback.
- Particles background removed to improve performance; component stubbed.

Quick start
1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm start
```

3. Open http://localhost:3000 (or the next available port if 3000 is in use)

Notes
- The app no longer depends on Tailwind CSS; global styles are in `src/index.css` but primary styling is provided via Chakra.
- If you need to revert parts of the Tailwind assets, some image resources referencing Tailwind were removed from component imports.

If anything looks off after running the server, paste the terminal output here and I'll help debug.
