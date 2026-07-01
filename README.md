# WONxLABS Website
A premium personal portfolio website built with Vite, Vanilla JavaScript, HTML, and CSS.

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite

## Project Structure
```text
src/
├── components/
├── data/
├── scripts/
└── styles/
```

The project separates data, presentation, styling, and behavior into dedicated directories for maintainability.

## Architecture
The application follows a modular architecture centered around the main app shell and reusable sections:

```text
App
├── Navbar
├── Hero
├── Projects
├── About
├── Skills
├── Timeline
└── Footer
```

Application data is stored separately from UI components to improve maintainability.

## JavaScript Modules
```text
scripts/
├── animations.js
├── cards.js
├── scroll.js
```

Each module exports an initialization function. The application entry point (`main.js`) is responsible for rendering the UI and initializing behavior.

## Project Status
In active refinement.

Current milestone:
- ✅ Design system
- ✅ Premium visual polish
- ✅ Content-driven section architecture

## Current Progress
- [x] Repository setup
- [x] Design system
- [x] Hero layout
- [x] Project card system
- [x] Projects section
- [x] About section
- [x] Skills section
- [x] Timeline section
- [x] Responsive layout

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). Your site will be live at:
   - `https://<username>.github.io/` (if this is your `<username>.github.io` repo), or
   - `https://<username>.github.io/<repo-name>/` (if this is a project repo)
4. **Custom domain (optional):** if you want `wonxlabs.com`, add a `public/CNAME` file containing just `wonxlabs.com`, point your domain's DNS at GitHub Pages, then enable it under **Settings → Pages → Custom domain**. Without a custom domain, update the URLs in `index.html`, `public/sitemap.xml`, and `public/robots.txt` to match your actual `github.io` URL.

No manual build step is required — the workflow runs `npm ci` and `npm run build` for you on every push.

## License
MIT

## Features
- Modular component architecture
- Responsive layout
- Dynamic project rendering
- Scroll reveal animations
- Lightweight card interactions
- Active navigation highlighting
- Reading progress indicator
- Refined minimal visual language