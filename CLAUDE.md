# Makan — Repository Guide for Agents

**READ `docs/MAKAN.md` FIRST. EVERY AGENT. EVERY TIME.**

That file is the single canonical reference for this project — company, product, brand, copy, design, frontend, and backend instructions, all in one place. If anything in this repo (code, comments, READMEs, old docs) contradicts it, **`docs/MAKAN.md` wins.**

---

## The 30-second version

- **What:** Makan (مكان) — a B2B geospatial AI platform that indexes the physical world using satellite imagery + vector embeddings. Tagline: **Query the World.**
- **This repo is the marketing site only.** The live landing page is `public/hybrid/index.html` — static HTML + jQuery + GSAP + ScrollTrigger + Lenis + Lottie + Barba. Edit there.
- **No React, no build step for the page itself.** Vite is only here as a dev server. The root `index.html` is a 21-line redirect to `/hybrid/`.
- **No backend in this repo.** If asked to add one, flag it — almost always wrong repo.
- **Hosted on Vercel** at [makan.llc](https://makan.llc), auto-deployed from `main`.

## The non-negotiables

- **Brand name:** *Makan* in prose (capital M, lowercase rest). All-caps `MAKAN` only inside the logo.
- **Tagline:** **Query the World.** With the period. With the capital W. Don't paraphrase.
- **Compliance layer:** has an internal codename. **Never** use that codename in any external surface — marketing, decks, customer UI, public docs, error messages. Use *"the compliance layer"* / *"in-house compliance module"* / *"audit-ready output"* instead. Full rule in `docs/MAKAN.md` §7.
- **Voice:** authoritative, precise, operational. Banned: *leverage, unlock, cutting-edge, seamlessly, world-class, innovative, AI-powered insights, our platform empowers.* Use real numbers, never round-number placeholders.
- **Color:** cyan retired, purple banned. Amber `#E8A838` (dark) / `#B87A10` (light) is **alerts only, never decorative.** No accent color committed yet — work in neutrals + amber-for-alerts.
- **Type:** IBM Plex Sans (English), IBM Plex Sans Arabic, IBM Plex Mono (data). Nothing else.
- **Theme:** landing page = cinematic two-act (daylight → ops dark). Dashboard mockup = dark first.
- **Bilingual:** Arabic and English are co-equal. RTL must work everywhere.

## When a request conflicts with the brand

Flag, present options, ask — never silently comply, never silently refuse.

> *"The doc rules out purple as a brand color (`docs/MAKAN.md` §13). Want me to use neutrals / amber-for-alerts only, or override the doc for this one screen?"*

## Repo layout

```
makan/
├── CLAUDE.md                ← you are here (short pointer)
├── README.md                ← human-facing repo description
├── docs/
│   ├── MAKAN.md             ← THE canonical reference
│   └── _archive/            ← outdated, do not quote
├── public/
│   └── hybrid/              ← LIVE landing page (static HTML)
│       ├── index.html       ← THE page
│       ├── dashboard-screenshot.html
│       └── assets/
├── index.html               ← root redirect → /hybrid/
├── package.json
└── vite.config.js
```

---

*When in doubt, return to `docs/MAKAN.md`.*
