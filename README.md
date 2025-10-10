# Portfolio (Tailwind migration)

This repository is a personal portfolio built with Create React App and Tailwind CSS.

What's included
- Modernized UI: Header, Home, About, Skills, Projects, Contact and Footer refactored to use Tailwind utilities.
- Central `src/index.css` contains Tailwind directives and `@layer` components with `@apply` classes.
- React-Toastify hooks replaced to use Tailwind-based classes.
- Particles background removed for performance and spacing — the component is stubbed to avoid runtime issues.

Quick start
1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm start
```

3. Open http://localhost:3000

Notes
- Keep `import "./index.css"` in `src/index.js`. CRA uses PostCSS and `postcss.config.js` to process Tailwind.
- If you see editor linter warnings about `@tailwind`/`@apply`, they are editor-level. The dev build should process them fine.

If anything looks off after running the server, paste the terminal output here and I'll help debug.
