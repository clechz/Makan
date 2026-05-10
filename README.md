# Makan — Landing Page

The marketing site for **Makan** (مكان) — a B2B geospatial AI platform that indexes the physical world using satellite imagery and vector embeddings.

**Tagline:** Query the World.
**Live:** [makan.llc](https://makan.llc)

---

## What this repo is

A **static landing page** served from `public/hybrid/`. The root `index.html` is a one-line redirect to `/hybrid/`, which is the actual cinematic single-page site (sky → operations dark → use cases → closing earth).

The site is hand-written HTML + CSS + a small amount of vanilla JS, with GSAP, ScrollTrigger, Lenis, Lottie, and Barba pulled in as `<script>` tags. There is **no React, no build step for the site itself** — Vite is here purely as a dev server / static-asset bundler so we can preview locally on `:5173`.

That's deliberate. The page is heavy on scroll animations, custom transitions, and a fake macOS dashboard mock — keeping it as static HTML lets us tune motion without rebuild loops.

> If you're an agent: **read [`docs/MAKAN.md`](docs/MAKAN.md) before touching anything.** That file is the canonical brand + product + design reference. The legacy docs in `docs/_archive/` (older breakdowns, agent prompts, master doc) are kept for history but are superseded by `MAKAN.md`.

---

## Repo layout

```
makan/
├── README.md                          ← you are here
├── CLAUDE.md                          ← short pointer for AI agents
├── docs/
│   ├── MAKAN.md                       ← THE canonical reference
│   └── _archive/                      ← outdated, do not quote
├── public/
│   └── hybrid/
│       ├── index.html                 ← THE landing page (hand-written)
│       ├── dashboard-screenshot.html  ← static dashboard mock embedded in the hero
│       └── assets/                    ← satellite imagery, brand logos, JS/CSS deps
├── index.html                         ← root redirect → /hybrid/
├── package.json                       ← Vite as dev server only
└── vite.config.js
```

---

## Run locally

```bash
npm install
npm run dev
```

Vite serves on `http://localhost:5173/` and redirects to `/hybrid/`.

For a production build (Vercel runs this):

```bash
npm run build
npm run preview
```

---

## Deploy

Vercel, auto-deployed from `main`. The Vercel project name is `makan`, the production domain is `makan.llc`. Every push to `main` ships.

---

## Brand discipline (the short version)

The full rules live in [`docs/MAKAN.md`](docs/MAKAN.md). The non-negotiables:

- **Brand name:** *Makan* in prose. All-caps `MAKAN` only inside the logo wordmark.
- **Tagline:** **Query the World.** With the period. With the capital W.
- **Voice:** authoritative, precise, operational. Banned words: *leverage, unlock, cutting-edge, seamlessly, world-class, innovative, AI-powered insights, our platform empowers.*
- **Color:** cyan retired, purple banned. Amber `#E8A838` (dark) / `#B87A10` (light) is **alerts only, never decorative.**
- **Type:** IBM Plex Sans (English), IBM Plex Sans Arabic, IBM Plex Mono (data). Nothing else.
- **Bilingual:** Arabic and English are co-equal. The site is RTL-ready.
- **Compliance layer:** has an internal codename. **Never** use that codename in any public surface. Use *"the compliance layer"* / *"audit-ready output"* instead. Full rule in `docs/MAKAN.md` §7.

When a request conflicts with the brand, flag it — don't silently comply, don't silently refuse.

---

## License

Proprietary. © 2026 Makan. All rights reserved.
