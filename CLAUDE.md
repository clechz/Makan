# Makan — Repository Guide for Agents

**READ `docs/MAKAN.md` FIRST. EVERY AGENT. EVERY TIME.**

That file is the single canonical reference for this project — company, product, brand, copy, design, frontend, and backend instructions, all in one place. If anything in this repo (code, comments, READMEs, old docs) contradicts it, **`docs/MAKAN.md` wins.**

---

## The 30-second version

- **What:** Makan (مكان) — a B2B geospatial AI platform that indexes the physical world using satellite imagery + vector embeddings. Tagline: **Query the World.**
- **The live landing page is `public/hybrid/index.html`** (static HTML + jQuery + GSAP + ScrollTrigger + Lenis + Lottie + Barba). Edit there for landing-page work.
- **`src/`** is a legacy Vite + React + R3F scaffold from a MacBook product-page template. Do **not** treat it as the basis for the dashboard. Don't delete its Makan-specific components without asking.
- **No backend in this repo.** If asked to add one, flag it — almost always wrong repo.

## The non-negotiables

- **Brand name:** *Makan* in prose (capital M, lowercase rest). All-caps `MAKAN` only inside the logo.
- **Tagline:** **Query the World.** With the period. With the capital W. Don't paraphrase.
- **Compliance layer:** has an internal codename. **Never** use that codename in any external surface — marketing, decks, customer UI, public docs, error messages. Use *"the compliance layer"* / *"in-house compliance module"* / *"audit-ready output"* instead. Full rule in `docs/MAKAN.md` §7.
- **Voice:** authoritative, precise, operational. Banned: *leverage, unlock, cutting-edge, seamlessly, world-class, innovative, AI-powered insights, our platform empowers.* Use real numbers, never round-number placeholders.
- **Color:** cyan retired, purple banned. Amber `#E8A838` (dark) / `#B87A10` (light) is **alerts only, never decorative.** No accent color committed yet — work in neutrals + amber-for-alerts.
- **Type:** IBM Plex Sans (English), IBM Plex Sans Arabic, IBM Plex Mono (data). Nothing else.
- **Theme:** landing page = cinematic two-act (daylight → ops dark). Dashboard = dark first.
- **Bilingual:** Arabic and English are co-equal. RTL must work everywhere.

## When a request conflicts with the brand

Flag, present options, ask — never silently comply, never silently refuse.

> *"The doc rules out purple as a brand color (`docs/MAKAN.md` §13). Want me to use neutrals / amber-for-alerts only, or override the doc for this one screen?"*

## Repo layout

```
makan/
├── CLAUDE.md                ← you are here (short pointer)
├── docs/
│   ├── MAKAN.md             ← THE canonical reference
│   └── _archive/            ← outdated, do not quote
├── public/
│   └── hybrid/              ← LIVE landing page (static HTML)
├── src/                     ← legacy React/R3F scaffold
├── index.html
├── package.json             ← still named "macbook_gsap_app" — ignore the name
└── vite.config.js
```

---

*When in doubt, return to `docs/MAKAN.md`.*
