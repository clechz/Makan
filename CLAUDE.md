# Makan — Repository Guide for Agents

**READ THIS FIRST. EVERY AGENT. EVERY TIME.**

You are working on Makan (مكان) — a B2B geospatial AI platform.
The physical world, indexed. Satellite imagery → vector embeddings → operational alerts.
Tagline: **Query the World.**

---

## Before you touch anything

1. Read `docs/MAKAN_MASTER_PROJECT_DOCUMENT.md` — the single source of truth. It supersedes every other brief, README, or comment in this repo. If something in the code contradicts it, the master doc wins.
2. Skim `docs/MAKAN_HOMEPAGE_BREAKDOWN.md` for the current landing-page narrative.
3. Then look at the code you're about to change.

---

## Repo layout

```
makan/
├── CLAUDE.md                          ← you are here
├── docs/
│   ├── MAKAN_MASTER_PROJECT_DOCUMENT.md    ← brand + product truth
│   ├── MAKAN_HOMEPAGE_BREAKDOWN.md         ← landing page narrative
│   └── AGENT_PROMPTS.md                    ← ready-to-run workstreams
├── src/                               ← Vite + React + TypeScript + R3F + GSAP
├── public/                            ← earth textures, fonts, icons
├── index.html
├── package.json
├── vite.config.ts                     ← dev server on port 3000
├── MIGRATION_REPORT.md                ← history of MacBook → Makan migration
├── QUICK_START.md
├── README.md
└── VERIFICATION.md
```

This project started as a MacBook product-page template and is being rebuilt into Makan's landing page. The MacBook 3D assets are being replaced by satellite / earth / intelligence visuals. Partial Makan work already exists (`MakanHeroScene`, `MakanLogo`, `IntelligenceOverlays`) — iterate on it, don't delete it.

---

## Non-negotiable rules (from the master doc, condensed)

### Identity
- Brand name in prose: **Makan** (capital M, lowercase rest). Never `MAKAN` except inside the logo wordmark. Never `makan`.
- Tagline: **Query the World.** — with the period, with the capital W. Do not modify.
- Arabic and English are **co-equal**. Arabic (مكان) always appears above Latin (MAKAN) in stacked logo.
- Makan is a **global** company whose first chapter is the GCC. Never call it a "Saudi company" or "GCC company."

### Design system
- **Dark theme is primary.** Build dark first, light second.
- **Fonts: IBM Plex Sans** (English), **IBM Plex Sans Arabic** (Arabic), **IBM Plex Mono** (coordinates / timestamps / data). No other fonts.
- **No primary accent color defined yet.** Cyan (`#00C2C7`) has been retired. Do not use cyan. A new primary color will be chosen later.
- **Alert color: Amber `#E8A838`** (dark) / `#B87A10` (light) — alerts/anomalies/warnings ONLY, never decorative.
- **Never purple/violet** as a brand color. It screams "generic AI" and is explicitly off-brand.
- **Never cyan/teal** — retired as of April 2026.
- Use the CSS token system (`--color-bg-base`, `--color-text-primary`, etc.) — never hardcode hex in components.
- No stock photography of humans. No "AI brain" illustrations. No gradient fluff.
- Show real-looking data: coordinates, timestamps, AOI IDs, confidence %. Never Lorem Ipsum numbers.

### Copy voice
- Authoritative, precise, operational, calm confidence. Not sales hype.
- **Banned phrases:** "leverage", "unlock", "cutting-edge", "seamlessly", "world-class", "innovative", "AI-powered insights", "our platform empowers", anything that could apply to any other SaaS.
- **Use real numbers:** `$2.8M failure cost`, `300M km²/day`, `<24 hour latency`, `95% detection accuracy`.
- Prefer specific verbs: detects, flags, indexes, encodes, delivers. Not "helps" or "enables".

### Compliance layer
- It is a **feature the team built** — an optional add-on. Never name any external company in connection with it. Never lead with it. It's for regulated-industry buyers who need legally defensible output.

### Technical (web/)
- All interfaces must support RTL layout switching. Set `dir="rtl"` and `lang="ar"` on Arabic containers.
- Directional icons flip with `transform: scaleX(-1)` in RTL.
- Numbers stay LTR inside RTL text; prefer Western Arabic numerals (0–9).
- Load both `IBM Plex Sans` and `IBM Plex Sans Arabic` from Google Fonts.

---

## What to default to when a decision isn't covered

Dark theme • IBM Plex • cyan accent • operational copy • bilingual AR/EN • real data • show change not state.

---

## Design intelligence tool: UI UX Pro Max

A searchable design-system database is installed at
`C:\Users\aazh\.claude\skills\ui-ux-pro-max-skill\`.

Before designing or restyling anything substantial (a section, a new component,
a visual pattern), query it for reference — then apply Makan's brand rules on
top. **The master doc always overrides the tool's suggestions** (e.g., if the
tool recommends indigo or purple, reject it — Makan is cyan).

**Usage:**
```bash
cd C:\Users\aazh\.claude\skills\ui-ux-pro-max-skill
python src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> -n 3
```

**Domains:** `style` (UI styles), `color` (palettes), `typography` (font
pairings), `landing` (page structures), `chart` (chart types), `ux` (best
practices / anti-patterns), `product` (category recommendations).

**Good queries for Makan:**
- `--domain style` → "dark dashboard geospatial satellite intelligence"
- `--domain landing` → "enterprise saas hero scroll-driven 3d"
- `--domain ux` → "dense data visualization dashboard"
- `--domain chart` → "time series geospatial"

**How to use the output:**
1. Run the search
2. Pick 1–2 relevant results
3. Extract the technique (easing curves, layout grid, animation pattern, etc.)
4. Apply it using Makan's colors / fonts / voice — never the tool's default hex values

---

## When user requests conflict with brand

Flag the conflict before acting. Example:
> "The master doc rules out purple as a brand color (§12, §18 rule 7). Want me to use cyan `#00C2C7` instead, or override the doc for this one screen?"

Do not silently comply with brand-violating requests. Do not silently refuse either. Flag and ask.

---

## The founding team (for copy / about pages)

| Name | Role |
|------|------|
| Abdullah | CEO |
| Majed | CRO |
| Yazan | COO |
| Ahmed | CTO |

---

*When in doubt, return to `docs/MAKAN_MASTER_PROJECT_DOCUMENT.md`.*
