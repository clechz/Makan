# MAKAN — Canonical Agent Reference

**One document. Everything an agent needs to touch this repo.**
If something else in the repo contradicts this file, this file wins.

---

## How to read this document

This is a single canonical reference, structured in three parts:

- **Part I — Company & Product.** Who Makan is, what we sell, who buys it, how it works. Read this first if you have never seen Makan before.
- **Part II — Brand, Copy & Design Rules.** Non-negotiables that apply to every surface — landing page, dashboard, deck, email, error message.
- **Part III — Engineering Instructions.** Two self-contained sections: Frontend and Backend. Read only the part you are touching.

Appendix at the end has the 7-layer pipeline detail, the use-case catalogue, the API list, and the competitive landscape — keep open as reference, not required reading.

---

# PART I — COMPANY & PRODUCT

## 1. What Makan is, in one paragraph

Makan (مكان — Arabic for *place*) is a B2B geospatial AI platform that indexes the physical world using satellite imagery and vector embeddings, and makes it queryable on demand. Tagline: **Query the World.**

Earth is the largest dataset that has never been indexed. Planet Labs photographs every km² of Earth daily. ESA Copernicus ingests 20 TB/day. The data is up there — but nobody built the layer that makes it queryable. Makan is that layer.

## 2. The defining analogy (memorize this)

| Google Earth | Google Maps | **Makan** |
|---|---|---|
| Shows you the image | Navigates to it | **Queries what is in it — and what changed** |

Nobody built that third thing. That is the gap. That is Makan.

The Google parallel: Google didn't own a single web page. They built the retrieval layer that made every web page findable. Makan doesn't own satellites. We build the retrieval layer that makes Earth's imagery queryable.

## 3. The founding team

| Name | Role | Focus |
|---|---|---|
| Abdullah | CEO | Vision, strategy, GCC market access, SDAIA-adjacent ecosystem, fundraising |
| Majed | CRO | Revenue, enterprise sales, design partner conversations, GTM, pilot conversion |
| Yazan | COO | Operations, pilot delivery, team structure, data licensing, finance, legal |
| Ahmed | CTO | Technical architecture, embedding pipeline, geospatial AI, vector DB, agentic layer |

## 4. Who buys Makan

Enterprise and government. Concretely:

- Megaproject operators (e.g. ROSHN-scale residential, Red Sea Global-scale tourism corridors)
- Infrastructure ministries (transport, water, energy, environment)
- Mining and extraction operators
- Water authorities managing buried pipeline
- Civil defense and disaster authorities
- Food security / agricultural ministries
- Large retail chains for site selection
- ESG-regulated energy and industrial operators

**Not** consumers. **Not** GIS analysts. **Not** scientists. The buyer is a decision-maker — a project director, a ministry head, a compliance officer — who needs a grounded answer fast and cannot afford to wait for a GIS team to render a query.

## 5. The pricing & GTM motion

- Annual enterprise contracts, priced per AOI under active monitoring.
- Indicative: **$300K–$500K/year** for a 50 km² zone with daily monitoring + weekly reports. **$750K–$1M/year** for a corridor with real-time alerting + agentic query layer.
- We do not sell seats. We sell ongoing intelligence on a defined physical footprint.
- **Wedge motion:** 90-day fixed-scope pilot with clear ROI metrics → convert → expand.
- First conversation → first contract: 6–8 months total.
- ROI argument is never *"is this expensive"* — it is *"is this cheaper and better than the manual surveys you already pay for."* The answer is always yes (a single 50 km² manual survey is $300K–$500K and produces a snapshot; Makan delivers continuous monitoring at the same annual cost).

## 6. Where we sell

The GCC is the **wedge**, not the market. The market is **Earth**.

- Saudi Arabia first because (a) the highest density of active infrastructure capital on Earth right now ($100B+ Vision 2030 spend), (b) the team has direct access — SDAIA-adjacent relationships you cannot buy with funding, (c) the problems are visible and large.
- Then: US (federal infrastructure, FEMA, water/energy grids), Europe (ESG, ageing pipelines, EU agriculture compliance), Southeast Asia (urbanizing fastest, flood risk), Africa (extraction corridors, agriculture), LATAM (mining, Amazon, Brazilian infrastructure).
- Never describe Makan as a "Saudi company" or "GCC company." Makan is global; the GCC is the proof point.

## 7. The compliance layer

Makan has an in-house compliance and verification layer — code originally developed by the founding team, owned by Makan, integrated into the platform as an optional module for customers who need audit-ready, legally defensible output.

What it gives customers when enabled:

- Water authorities → legally defensible records of when anomalies appeared, with chain of custody admissible in regulatory proceedings.
- Mining operators → cryptographically verified ESG compliance logs satisfying disclosure requirements without manual surveys.
- Government ministries → verified incident records with timestamped satellite evidence admissible in enforcement.

### How to talk about it — naming rules

**The compliance layer has an internal codename. Never use that codename in any external surface.** That includes: marketing copy, the landing page, decks shown to anyone outside the team, sales emails, customer-facing UI, public docs, blog posts, recruiting pages, social media, error messages — anywhere a non-team-member could plausibly read it.

External wording — use any of:
- *the compliance layer*
- *the compliance & verification module*
- *audit-ready output / cryptographically verified observations*
- *Makan's in-house compliance module*

What never appears externally:
- the codename
- any phrase implying it is a separate company, brand, or product

Internal wording (team-only docs, private engineering channels, this file's appendix where it appears in code-level identifiers like field names): the codename can be referenced where it is genuinely a system identifier.

### How to position it commercially

- Don't lead with it. Lead with the use case. The compliance layer is the upgrade path for regulated buyers who specifically need legal defensibility.
- It is **not a core differentiator to surface to every buyer.** It is a capability to mention only when the buyer's use case requires legally defensible intelligence output.
- Anyone can build a geospatial embedding pipeline. Nobody else has built a compliance verification layer underneath the intelligence output that the same team founded and owns. That is what makes Makan an *intelligence-of-record platform*, not just a monitoring tool — but say that *without naming the layer*.

## 8. The competitive landscape, condensed

| | Embedding index | Agentic queries | GCC presence | Compliance layer | Verdict |
|---|---|---|---|---|---|
| Esri | No | No | Partial | No | GIS toolbox, not intelligence |
| Palantir | No | Partial | No | No | Wrong price point ($10M+/18-month minimum) |
| Google Earth Engine | No | No | No | No | Dev tool, not decision tool |
| Orbital Insight | No | No | No | No | Acquired, went defense |
| Descartes Labs | No | No | No | No | US agriculture only |
| Blackshark.ai | Partial | No | Partial | No | 3D simulation, not intelligence |
| SynMax | No | No | No | No | Energy single-vertical |
| Picterra | No | No | No | No | Model-training tool, not delivered intelligence |
| ICEYE | n/a | n/a | n/a | n/a | Data provider, not a competitor — we could license from them |
| **Makan** | **Yes** | **Yes** | **Yes** | **Yes (in-house module)** | **The only full stack** |

Detailed write-up of each competitor lives in the Appendix.

## 9. The 10 use cases (one platform, ten queries)

The same index serves all of them. The query changes; the platform does not. Full breakdowns in the Appendix; here is the one-line version of each:

1. **Infrastructure progress monitoring** — week-over-week construction deviation against approved baseline
2. **Risk & anomaly detection on corridors** — terrain change, slope erosion, subsidence over 100km+ corridors
3. **Encroachment & land-use violation detection** — new structures, illegal land grabs in protected buffer zones
4. **Urban intelligence & transit-driven development** — building density, parking, commercial activity around metro stations
5. **Retail & restaurant site selection** — pedestrian density, parking turnover, drive-through queuing from imagery
6. **ESG & environmental compliance monitoring** — continuous timestamped vegetation/moisture/disturbance baseline
7. **Mining, extraction & tailings monitoring** — dig progression, tailings boundary, surface saturation, encroachment
8. **Water infrastructure & pipeline leak detection** — surface moisture, soil subsidence, vegetation anomalies above buried pipe
9. **Flood modeling, disaster prediction & emergency response** — live terrain model + storm forecast → propagation sequence
10. **Agriculture, food security & groundwater compliance** — crop health, cultivation, illegal extraction flagged by anomaly

## 10. Market size

| Segment | 2024 | 2030 |
|---|---|---|
| GeoAI / Intelligence (TAM) | $37B | $63B (11.1% CAGR) |
| Broader Geospatial Analytics | $114B | $227B |
| Smart Cities Analytics | $31.9B | $75.1B (15.2%) |
| Location Intelligence / Retail | $7.8B | $21.4B (18.3%) |
| Disaster Risk & Emergency Mgmt | $5.3B | $12.8B (15.7%) |
| Water Infrastructure Monitoring | $4.7B | $9.2B (11.9%) |
| ESG & Environmental Compliance | $1.9B | $6.3B (22.1%) |
| Precision Agriculture | $9.5B | $23.1B (15.9%) |
| Mining Remote Monitoring | $2.6B | $5.1B |
| Saudi Construction (wedge) | $104B | $174B |
| Saudi Smart Cities (wedge) | $6.72B | $18.74B (18.64%) |

**SAM** — GCC ≈ 8–10% of global geospatial AI spend → **$3–4B addressable today**.
**SOM (3-year)** — 5–10 enterprise/government accounts at $300K–$1M ARR → **$3M–$10M ARR by year 3**.

---

# PART II — BRAND, COPY & DESIGN RULES

These rules apply to every surface in the company. If you are about to break one, flag it; do not silently comply or silently refuse.

## 11. Identity

- Brand name in prose: **Makan** (capital M, lowercase rest). Never `MAKAN` in body copy. The all-caps form only ever appears inside the logo wordmark. Never `makan`.
- Tagline: **Query the World.** With the period. With the capital W. Do not modify, paraphrase, or translate.
- Arabic and English are co-equal. مكان (Arabic) appears above MAKAN (Latin) in the stacked logo lockup. Both fonts, both languages, every brand surface.
- Makan is a global company whose first chapter is the GCC. Never call Makan a "Saudi company" or a "GCC company."

## 12. Copy voice

Authoritative, precise, operational, calm confidence. Not sales hype.

**Banned phrases** (any one of these means the copy gets rewritten):
> leverage · unlock · cutting-edge · seamlessly · world-class · innovative · AI-powered insights · our platform empowers · transform your · revolutionize · best-in-class · next-generation

**Banned because:** they apply to any other SaaS. We sound like Snowflake, Linear, Stripe — confident because we say specific things, not because we are louder.

**Use specific verbs** — *detects, flags, indexes, encodes, delivers, surfaces, classifies, signs.* Not *helps, enables, empowers.*

**Use real numbers** — `$2.8M failure cost`, `300M km²/day`, `<24 hour latency`, `95% detection accuracy`, `170km corridor`, `OBS-2024-04-117`. Never Lorem Ipsum, never round-number placeholders, never `XX%`.

## 13. Color system

The current state is intentionally constrained — we have killed off the wrong colors and not yet committed to a new primary accent.

- **Cyan / teal — RETIRED.** `#00C2C7` is dead as of April 2026. Do not introduce cyan anywhere.
- **Purple / violet — BANNED.** Reads as generic AI. Off-brand permanently.
- **Amber `#E8A838` (dark) / `#B87A10` (light)** — alerts, anomalies, warnings only. **Never decorative.** If you find yourself using amber as an accent on a non-alert element, you are using the wrong color.
- **Primary accent — undetermined.** Until decided, work in neutrals (black, white, the dark ops palette below) and amber-for-alerts. Do not invent an accent.
- **Dark ops palette** (the current landing page already uses these as CSS vars):
  - `--mk-ops-base: #0A0E1A` (near-black background)
  - `--mk-ops-card: #141414`
  - `--mk-ops-card-border: #262626`
- **Daylight / sky palette** (used in the landing page hero act):
  - `--mk-day-top: #015AA9` · `--mk-day-mid: #3A7AB8` · `--mk-day-low: #1B3A5C`
- **Light breather palette** (used in the use-cases section):
  - `--mk-light-bg: #F7F5F0` · `--mk-light-text: #0A0E1A`

Always reference these via CSS custom properties. Never hardcode hex in components.

## 14. Theme — landing vs. dashboard

Resolve the historical contradiction explicitly:

- **Landing page → cinematic two-act journey.** Act I daylight (sky blue), Act II operations dark, with a light breather and pure-black closer. Already implemented in `public/hybrid/index.html`.
- **Dashboard / app surface → dark first.** Operators work at night, in field conditions, with dense data. Dark mode is primary; light mode is secondary.

When this doc says "Makan is dark-first," it means the **product**. When it says "the landing page goes daylight → ops dark," that is the **marketing surface**. Both are correct; they are different surfaces.

## 15. Typography

- **IBM Plex Sans** — English UI and prose
- **IBM Plex Sans Arabic** — Arabic UI and prose
- **IBM Plex Mono** — coordinates, timestamps, AOI IDs, confidence values, compliance record refs, anything data-shaped

No other fonts. No display fonts, no rounded fonts, no novelty fonts. Load both Latin and Arabic Plex from Google Fonts.

## 16. Visual rules

- No stock photography of humans.
- No "AI brain" illustrations, no neural-network glyphs, no abstract gradient fluff.
- Show real data in mockups: real coordinates (e.g. `24.4724° N, 39.6111° E`), real timestamps, real AOI IDs, real confidence percentages. Never `XX.XX%`, never `Lorem Ipsum 0.00`.
- Show change, not state. A timestamp delta is more powerful than a snapshot.
- Earth, satellites, terrain, infrastructure — yes. Hands on keyboards, smiling office workers, abstract data visualizations of nothing — no.

## 17. Multilingual / RTL

- All interfaces support RTL layout switching.
- Arabic containers: `dir="rtl"` and `lang="ar"`.
- Directional icons (arrows, chevrons, progress) flip with `transform: scaleX(-1)` in RTL.
- Numbers stay LTR inside RTL text. Prefer Western Arabic numerals (0–9) for data; reserve Eastern Arabic numerals (٠–٩) for editorial copy where the visual character matters.

## 18. When user requests conflict with brand

Flag it before acting. Example:

> "The doc rules out purple as a brand color (§13). Want me to use a neutral / amber-for-alerts only, or override the doc for this one screen?"

Never silently comply with brand-violating requests. Never silently refuse either. **Flag, present options, ask.**

---

# PART III — ENGINEERING INSTRUCTIONS

## 19. Repo state, as of this writing

This repo is in a transition. Two stacks coexist:

- **The live landing page is `public/hybrid/index.html`** — a static, scroll-driven single page based on the wearebrand template. Stack: jQuery 3.7 + GSAP + ScrollTrigger + Lenis + Lottie + Barba + a custom `wearebrand-animations.js`. All assets live in `public/hybrid/assets/`. **This is the page that ships.**
- **The legacy React scaffold is `src/`** — Vite + React 19 + R3F + Drei + GSAP + Tailwind v4 + Zustand. Originally a MacBook product-page template that was being converted into Makan. Some Makan-specific components exist (`MakanHeroScene`, `MakanLogo`, `IntelligenceOverlays`, `NarrativeText`) — but most of `src/components/` is still MacBook-template residue (`Hero`, `ProductViewer`, `Showcase`, `Performance`, `SpaceScene`, etc.).

**What to default to:**

- For **landing-page work** — edit `public/hybrid/index.html` and its assets. That is the live page.
- For **app / dashboard work that does not yet exist** — see §22 ("Dashboard & app stack") for the target stack. The legacy `src/` scaffold is not the basis for the dashboard; treat it as legacy until explicitly told to extend it.
- **Do not delete legacy components** without confirming. Some of the Makan-specific ones (`MakanLogo`, `IntelligenceOverlays`) may be reused.

```
makan/
├── docs/
│   └── MAKAN.md                ← this file (canonical)
├── public/
│   └── hybrid/                 ← THE LIVE LANDING PAGE
│       ├── index.html
│       ├── dashboard-screenshot.html
│       └── assets/             (jQuery, GSAP, Lenis, Lottie, Barba, logos, sky imagery)
├── src/                        ← legacy Vite + React + R3F scaffold
│   ├── App.jsx
│   ├── components/             (mix of MacBook residue + Makan WIP)
│   └── ...
├── index.html                  ← Vite entry (currently wired to the legacy scaffold)
├── package.json                ← still named "macbook_gsap_app" — do not rely on the name
├── vite.config.js              ← dev server on port 3000
└── CLAUDE.md                   ← short pointer to this file
```

## 20. Frontend instructions

> **Persona.** Senior frontend engineer at a Linear / Vercel / Stripe-tier SaaS company. Ships interfaces that feel inevitable — not impressive. Knows the user is an enterprise operator, government analyst, or infrastructure manager who needs to trust what they see on first glance.

### 20.1 Where you are working

- **Landing page → `public/hybrid/index.html`.** Static HTML, vendored CSS/JS. Edits are direct DOM/CSS edits inside that file (or its `assets/wearebrand-custom.css`). Hot reload is whatever your local server does — there is no build step for the hybrid page.
- **App / dashboard surfaces → not yet built.** When they are, the target stack is in §22.

Do not introduce a build step or framework into the hybrid page. It is intentionally a single self-contained HTML file plus assets. If a feature requires a build step, it does not belong on the landing page.

### 20.2 Landing-page stack (the hybrid page, as it stands)

| Library | Use |
|---|---|
| jQuery 3.7 | DOM manipulation (legacy from template; do not introduce new jQuery code) |
| GSAP 3 + ScrollTrigger | Scroll-linked animation, timeline orchestration |
| Lenis | Smooth scroll |
| Lottie | Vector animations |
| Barba.js | Page transitions (currently single-page, kept available) |
| `wearebrand-animations.js` | Template-provided scroll/transform helpers — do not replace, extend |
| Custom CSS in `<head>` and `assets/wearebrand-custom.css` | All Makan-specific styling |

**Editing rules:**

- All Makan color tokens are defined in the `:root` block at the top of `index.html` under `<style id="mk-color-system">`. Add new colors there as `--mk-*` vars. Never hardcode hex inside section CSS.
- All `!important` overrides in the inline `<style>` block are intentional — they override the linked `wearebrand.min.css`. Don't try to "clean them up" without confirming.
- Asset paths use `./assets/...` and the assets folder is currently a kitchen sink (~70 files, ~half orphaned). Before adding a new asset, check if one already covers it.

### 20.3 Animation rules

- Match the easing curves of existing GSAP timelines. Do not introduce a new easing family.
- Every animation must communicate something — state, hierarchy, feedback, or delight. If you cannot say what an animation communicates, delete it.
- Whitespace is intentional breathing room, not emptiness.
- Apple-level restraint: one focal point per screen. Remove everything not essential.

### 20.4 The 90% rule

Before any new component or section: **read the existing landing page first**. Match its patterns — its grid, its type scale, its motion language, its data-density style. New patterns must look like they were always there. When in doubt, make it simpler.

### 20.5 Dev server

```bash
npm run dev    # vite, port 3000 — serves the legacy src/ React app
```

The hybrid page is static — open `public/hybrid/index.html` directly in a browser, or serve `public/` with any static server. There is no `npm` task wired up for the hybrid page yet.

### 20.6 Asset hygiene (hybrid page)

`public/hybrid/assets/` contains ~71 files; only a subset are actually referenced by `index.html`. Do not delete orphans without explicit instruction — some are referenced from inside the linked CSS files we have not fully audited.

When adding new images, prefer `.webp` (or `.avif` for hero imagery), 16:10 or 1:1 aspect ratios, optimized to <200 KB unless there's a reason. Logos go in `assets/logos/`, competitors in `assets/competitors/`.

## 21. Backend instructions

> **Persona.** Senior backend and geospatial systems engineer with the depth of a Google Earth Engine or Microsoft Planetary Computer contributor. Understands geospatial data at scale, vector search performance, distributed inference, and the tradeoffs between spatial precision and query latency. Correct first, fast second, elegant always.

### 21.1 No backend in this repo (yet)

This repo is the marketing/landing surface. The Makan backend lives elsewhere. **If you are asked to add backend code to this repo, flag it first** — this is almost always the wrong repo for it.

If a small static-site helper is genuinely needed (waitlist form handler, contact form), prefer a serverless function on the chosen host (Vercel, Cloudflare Workers) over standing up a server.

### 21.2 The Makan backend, when you are working on it

The full architecture is the **7-layer pipeline** (detail in Appendix A):

1. Makan Agent (top orchestrator, native)
2. Data Ingestion (Planet, ESA, Maxar)
3. Embedding & Indexing (visual encoder + Qdrant + pgvector + PostGIS)
4. Change & Anomaly Detection (embedding-space distance, not pixel diff)
5. External Data API Fusion (30+ APIs spatially joined to tile coordinates)
6. Compliance Layer (Makan-owned cryptographic verification module)
7. Delivery Agent (output: decision + how + why + confidence + compliance ref)

### 21.3 Stack (target)

| Layer | Tech |
|---|---|
| API layer | FastAPI (Python) |
| Geospatial | GDAL · Rasterio · Shapely · GeoPandas |
| Vector DB | Qdrant |
| Spatial DB | PostgreSQL + pgvector + PostGIS |
| Object storage | S3-compatible — Cloudflare R2 preferred (no egress fees) |
| Task queue | Celery + Redis or BullMQ |
| Inference | Triton or FastAPI + PyTorch |
| Auth | JWT + API key — every route protected |

### 21.4 The four invariants — never violate

1. **Every observation must be signed by the compliance layer before returning a response.** No exceptions for "internal" or "preview" responses.
2. **Every embedding vector carries a spatial index** — `lat`, `lon`, `bbox`, `timestamp`. Never store a vector without these.
3. **Change detection is embedding-space distance** — never raw pixel diff.
4. **All external API calls have circuit breakers** with graceful fallback. The 30+ fusion APIs *will* fail; the system must degrade, not crash.

### 21.5 Performance targets

| Operation | Target |
|---|---|
| Vector search (Qdrant, 1M vectors, single region) | <50ms |
| Hybrid spatial + vector (with GIST index) | <200ms |
| Tile embedding inference (GPU, batch=32) | <200ms/tile |
| Full query round-trip (incl. agent reasoning) | <3s P95 |
| Tile ingestion → indexed | <5min end-to-end |

### 21.6 Core API surface

```
POST /api/v1/query
  Body: { query: string, bbox: [W,S,E,N], time_range: [t1,t2], layers: string[] }
  Returns: { decision, how, why, evidence[], compliance_ref, confidence }

POST /api/v1/detect/change
  Body: { bbox, t1, t2, threshold? }
  Returns: { changes[], delta_vectors[], classifications[] }

GET  /api/v1/embeddings/search
  Params: ?lat=&lon=&radius_km=&timestamp=&limit=
  Returns: { embeddings[], metadata[] }

POST /api/v1/ingest/tile
  Body: { tile_url, source, timestamp, bbox, bands[] }
  Returns: { tile_id, status, queue_position }

GET  /api/v1/compliance/verify/:observation_id
  Returns: { verified, signature, chain_of_custody[], timestamp }
```

### 21.7 Reference SQL

Hybrid vector + spatial search:

```sql
SELECT id, embedding <-> $1 AS distance, ST_AsGeoJSON(geom)
FROM tile_embeddings
WHERE ST_Within(geom, ST_MakeEnvelope($2,$3,$4,$5,4326))
  AND timestamp BETWEEN $6 AND $7
ORDER BY distance LIMIT 100;
```

Temporal delta (change detection):

```sql
SELECT t1.id, (t1.embedding <-> t2.embedding) AS delta
FROM tile_embeddings t1 JOIN tile_embeddings t2
  ON ST_Equals(t1.geom, t2.geom)
WHERE t1.timestamp = $1 AND t2.timestamp = $2
ORDER BY delta DESC;
```

## 22. Dashboard & app stack (when we build it)

Until we explicitly build it, treat this as the agreed target — **not** as code that exists today.

| Layer | Tech | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Not Vite |
| Styling | Tailwind CSS + CSS custom properties | Same `--mk-*` tokens as the landing page |
| Animation | Framer Motion | Not GSAP — GSAP is for the landing page only |
| State | Zustand (global) + TanStack Query (server) | |
| Maps | Mapbox GL JS or Deck.gl | Geospatial visualization |
| 3D (where genuinely needed) | Three.js / React Three Fiber | Pipeline visualization, not chrome |
| Charts | Recharts or Observable Plot | Time-series, deltas |
| Theme | Dark first | Operators work at night |

Key screens (target):

| Screen | Job | Key components |
|---|---|---|
| Landing page | Convert to demo request | (the hybrid page) |
| Query interface | Submit geospatial query | Spotlight input, map region selector, date range |
| Results view | Understand what changed | Map overlay, evidence cards, Delivery Agent output |
| Dashboard | Monitor ongoing alerts | Alert feed, region watchlist, change timeline |
| Compliance export | Export compliance record | Report generator, audit trail view |

## 23. Design intelligence tool — UI UX Pro Max

Before designing or restyling anything substantial (a section, a new component, a visual pattern), query the local design-system database for reference, then apply Makan's brand rules on top. **This file always overrides the tool's suggestions** (e.g. if it recommends indigo or purple, reject — see §13).

Installed at `C:\Users\aazh\.claude\skills\ui-ux-pro-max-skill\`.

```bash
cd C:\Users\aazh\.claude\skills\ui-ux-pro-max-skill
python src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> -n 3
```

Domains: `style` · `color` · `typography` · `landing` · `chart` · `ux` · `product`.

Useful queries for Makan:
- `--domain style` → "dark dashboard geospatial satellite intelligence"
- `--domain landing` → "enterprise saas hero scroll-driven 3d"
- `--domain ux` → "dense data visualization dashboard"
- `--domain chart` → "time series geospatial"

Workflow: run search → pick 1–2 results → extract the *technique* (easing curves, layout grid, animation pattern) → apply with Makan's colors / fonts / voice. Never the tool's default hex values.

---

# APPENDIX

## Appendix A — The 7-layer pipeline, in detail

### Layer 1 — Makan Agent (top orchestrator)

Native to Makan. Not a third-party agent framework. Receives natural-language or structured queries, decomposes them, routes sub-tasks to downstream layers, holds context across multi-step reasoning chains.

Responsibilities:
- Parse and decompose compound questions
- Route sub-tasks to ingestion, embedding, detection, and API layers
- Hold cross-layer context during multi-step queries
- Ground every answer in current physical state
- Pass structured context to Delivery Agent for synthesis

Invariants:
- Never hallucinate — every claim grounded in retrieved embeddings or live API data
- Context window must include: query, active layers, current timestamp, geographic bbox

### Layer 2 — Data Ingestion

Licensed satellite imagery from three providers; all imagery tiled, timestamped, and queued for the embedding pipeline immediately on ingestion.

| Source | Product | Resolution | Cadence |
|---|---|---|---|
| Planet Labs | PlanetScope | 3.7m | Daily — 300M km²/day |
| Planet Labs | SkySat | 50cm | On-demand, up to 12 revisits/day |
| ESA Copernicus | Sentinel-1 SAR | 10m radar | Cloud-penetrating, continuous |
| ESA Copernicus | Sentinel-2 | 10m multispectral | Every 5 days globally |
| Maxar | WorldView | 30cm | On-demand spot assessments |

- Imagery received as GeoTIFF tiles with embedded geospatial metadata
- Tiles tagged: coordinates, timestamp, source, cloud cover %, spectral bands
- Queued via async task queue (Celery / BullMQ)
- Raw tiles stored in object storage (S3-compatible) before processing
- Tile naming: `{source}_{date}_{lat}_{lon}_{zoom}.tif`
- Coordinate system: Web Mercator (EPSG:3857) or Geographic (EPSG:4326) — pick once, be consistent

### Layer 3 — Embedding & Indexing

Visual encoder + vector database. The core of what makes Earth queryable.

- Base model: fine-tuned vision foundation model (SatCLIP, RemoteCLIP, or purpose-trained ViT)
- Input: GeoTIFF tiles (RGB + multispectral bands)
- Output: dense float32 embedding vector per tile (dim 512–1536)
- Indexed by geospatial coordinates and timestamp

Vector DB stack:

| Component | Role |
|---|---|
| Qdrant | Primary vector similarity search |
| pgvector | Spatial + vector hybrid queries (Postgres extension) |
| PostGIS | Native geospatial querying alongside pgvector |

Tile schema: `{ id, vector[], lat, lon, bbox, timestamp, source, cloud_cover, band_count }`

### Layer 4 — Change & Anomaly Detection

**Embedding-space distance, not pixel comparison.** Two embeddings of the same location at different times sit close in vector space if nothing changed — far apart if something did.

Methods:
- Temporal delta vectors: vector difference between T1 and T2 at same coordinates
- Anomaly surfacing: flag tiles where delta magnitude exceeds learned threshold
- Change classification: domain-trained classifiers (construction, flooding, encroachment, etc.)
- Velocity modeling: velocity vectors for moving phenomena (flood propagation, wildfire spread, construction progression)

Output per detection:
- What changed (classification + confidence)
- Where (bbox + centroid)
- When (timestamp delta)
- Where it is going + how fast (velocity vector — for moving phenomena only)

### Layer 5 — External Data API Fusion (30+)

Real-time signal fusion. All external data is spatially joined to tile coordinates and temporally aligned to satellite captures. Fusion happens in the agentic reasoning layer at query time — not pre-computed.

| Category | Signal types | Example sources |
|---|---|---|
| Weather | Rainfall, temperature, wind, storm tracks | Tomorrow.io, OpenWeatherMap, NOAA |
| City networks | Power, water, utilities | Municipal APIs, OSM, Overture |
| Traffic & mobility | Road traffic, congestion, freight | HERE, TomTom, Google Maps |
| Nature | Vegetation, soil moisture, wildfire | NASA MODIS, Copernicus EMS |
| Economic | Nighttime light, retail, ports | NASA VIIRS, AIS |
| Construction | Permits, timelines, equipment | Municipal permit APIs, Dodge |
| Agricultural | NDVI, irrigation, harvest | Sentinel Hub, Planet Basemaps |
| Demographic | Population density, migration | WorldPop, Meta Data for Good |

Spatial join via `ST_Within` / `ST_Intersects`. Temporal alignment to nearest satellite capture timestamp.

### Layer 6 — Compliance Layer

Makan-owned. Every observation timestamped, cryptographically verified, audit-ready.

- Cryptographic timestamping on every satellite observation and derived insight
- Chain-of-custody records admissible in regulatory proceedings
- ESG disclosure logs for mining and infrastructure operators
- Government-grade verified incident records with satellite evidence

Record schema: `{ observation_id, timestamp, source_hash, embedding_hash, agent_trace, compliance_signature }`

### Layer 7 — Delivery Agent

Native to Makan. Receives the full synthesized output from the pipeline, reasons over the evidence, delivers a structured decision.

Output structure:
- **Decision** — recommended action or conclusion
- **How** — reasoning chain from data to decision
- **Why** — specific evidence (satellite observations, API signals, change detections)
- **Confidence** — calibrated uncertainty score
- **Compliance ref** — compliance record ID for the observation chain

Example:
```
Decision: Construction on Sector 4 is 3 months behind schedule.
How: Embedding delta Jan 15 → Mar 15 shows no structural change in 3 target zones.
Why: Expected completion 40% per permit timeline. Observed: 8%.
Confidence: 0.91  |  Compliance ref: OBS-2024-04-117
```

### Query flow, end to end

1. User submits query via frontend (NL or structured)
2. API gateway authenticates, routes to Makan Agent
3. Makan Agent decomposes into sub-tasks
4. Ingestion layer confirms latest tile availability for target region
5. Qdrant retrieves relevant vectors (spatial + semantic)
6. Change detection computes temporal deltas for flagged regions
7. API Fusion retrieves external signals for region + timeframe
8. Results passed to Makan Agent for reasoning
9. Delivery Agent synthesizes: decision + how + why + evidence
10. Compliance layer signs the observation chain
11. Structured response returned to frontend

## Appendix B — Use cases, in detail

### 1. Infrastructure progress monitoring
- **Problem:** A project director at ROSHN managing 4 residential zones across 80km² has no real-time construction view. Field reports arrive weekly, manually compiled, already outdated. A 2-week delay caught in month 6 costs 10× more to fix than one caught in month 2.
- **What Makan does:** Detects earthwork progression, structure footprints, material staging, site activity week-over-week against the approved baseline. Flags deviations before they become delays. Integrates with construction PM platforms.
- **Market:** $2.8B (2024) → $6.1B (2030).
- **APIs:** Procore · Autodesk Construction Cloud · Planet PlanetScope · Sentinel-2.

### 2. Risk & anomaly detection on corridors
- **Problem:** A Red Sea Global team manages a 140km coastal road corridor. Slope erosion and subsidence develop invisibly until they become a $20M emergency.
- **What Makan does:** Detects terrain change, vegetation stress, surface deformation continuously along the full corridor. Alert within 24 hours of a satellite pass showing anomalous change above threshold.
- **Market:** $4.2B globally, 9.3% CAGR through 2030.
- **APIs:** Planet SkySat 50cm · Tomorrow.io · USGS elevation · Maxar WorldView.

### 3. Encroachment & land-use violation detection
- **Problem:** An infrastructure ministry manages 500km of protected utility corridor. Unauthorized construction in buffer zones is found weeks or months late.
- **What Makan does:** Monitors every meter of buffer. Any new structure, cleared land, or land-use change triggers an alert within 24 hours, with coordinates, map, and before/after imagery for enforcement.
- **Market:** $3.1B → $5.8B (2029).
- **APIs:** Esri ArcGIS REST · OSM Overpass · EPA ECHO · FEMA Flood Map · Planet PlanetScope.

### 4. Urban intelligence & transit-driven development
- **Problem:** Riyadh's metro is one of the largest in the world. Planners need to track development density around each station — data that does not exist in structured form.
- **What Makan does:** Tracks building footprint, parking utilization, surface impermeability, commercial density across every station catchment monthly.
- **Market:** $31.9B → $75.1B (2030, 15.2% CAGR).
- **APIs:** HERE Traffic · Replica · Google Places · OSM Overpass · Sentinel-2.

### 5. Retail & restaurant site selection
- **Problem:** A food chain wants 12 new GCC locations. Manual traffic counting, gut instinct, 30% failure rate at $800K–$2M per failed lease.
- **What Makan does:** Compares satellite frames at the same time of day across candidate sites simultaneously. Extracts pedestrian density, parking turnover, drive-through queuing from imagery. Ranked scorecard before a lease is signed.
- **Market:** $7.8B → $21.4B (2030, 18.3% CAGR).
- **APIs:** Foursquare Places · SafeGraph · Google Maps Roads · Veraset · HERE Traffic · OpenCorporates.

### 6. ESG & environmental compliance monitoring
- **Problem:** Energy operators need ESG compliance evidence. Today: expensive annual aerial surveys, 3-month manual reports, contested methodologies.
- **What Makan does:** Continuous timestamped baseline — vegetation, surface moisture, land disturbance — every satellite pass. Compliance report auto-generated. Every claim cryptographically verified by the compliance module.
- **Market:** $1.9B → $6.3B (2030, 22.1% CAGR).
- **APIs:** NASA Earthdata MODIS/VIIRS · FAO AQUASTAT · EPA ECHO · Copernicus Open Access Hub · in-house compliance module.

### 7. Mining, extraction & tailings monitoring
- **Problem:** A mining operator across 300km² has no real-time visibility into tailings pond expansion or artisanal mining encroachment. Brumadinho killed 270 people; precursor signals existed weeks before collapse. Nobody was watching.
- **What Makan does:** Indexes the full concession on demand. Weekly alerts on dig progression, tailings boundary, surface saturation. Compliance module signs every observation for regulatory submissions.
- **Market:** $2.6B → $5.1B (2030).
- **APIs:** Planet SkySat · GDACS · Sentinel-1 SAR · OSM Overpass · in-house compliance module.

### 8. Water infrastructure & pipeline leak detection
- **Problem:** A water authority managing 800km of buried pipeline cannot detect slow leaks before rupture. Average large-main failure: $2.8M emergency repair plus water loss and liability.
- **What Makan does:** Monitors surface moisture, soil subsidence, vegetation anomalies along the corridor. Moisture signal 3m above a buried pipe triggers an alert within 24 hours of satellite pass. Single crew dispatched to a precise GPS coordinate instead of patrolling 800km blind.
- **Market:** $4.7B → $9.2B (2030, 11.9% CAGR).
- **APIs:** OSM Overpass · USGS NWIS · PHMSA · NASA Earthdata · Sentinel-1 SAR · Tomorrow.io.

### 9. Flood modeling, disaster prediction & emergency response
- **Problem:** Civil defense needs to know which zones flood, in what sequence, at what depth, on real current terrain. The 2024 Dubai floods caused $1B+ in damage partly because drainage capacity had not been updated for new development. The model was years out of date.
- **What Makan does:** Continuously updates terrain from imagery — captures new construction, grading, drainage obstruction as it happens. When a storm is forecast, runs dynamic flood propagation on live terrain. Outputs which roads flood first, which neighborhoods are cut off, where to pre-position assets.
- **Market:** $5.3B → $12.8B (2030, 15.7% CAGR).
- **APIs:** Tomorrow.io · NOAA · USGS NWIS · HERE Traffic · FEMA Flood Map · GDACS · PagerDuty.

### 10. Agriculture, food security & groundwater compliance
- **Problem:** Food security authorities in water-scarce regions need real-time intel on cultivation, crop stress, illegal groundwater extraction. Today: field surveys cover ~5% of the agricultural zone per year.
- **What Makan does:** Indexes every agricultural zone continuously. Crop health, cultivation area, irrigation, vegetation stress every satellite pass. Groundwater overdraw flagged automatically as moisture+vegetation anomaly. Compliance module signs every observation for legal enforcement.
- **Market:** $9.5B → $23.1B (2030, 15.9% CAGR).
- **APIs:** NASA Earthdata MODIS/VIIRS · FAO AQUASTAT · aWhere · Sentinel-2 · in-house compliance module.

## Appendix C — External APIs we integrate

**Satellite & Earth observation:** Planet PlanetScope, Planet SkySat, ESA Copernicus Open Access Hub (Sentinel-1, Sentinel-2), Maxar Streaming, NASA Earthdata CMR (MODIS, Landsat, SRTM).

**Weather & climate:** Tomorrow.io, OpenWeatherMap, NOAA Climate Data, aWhere Agricultural Weather.

**Traffic & mobility:** Google Maps Platform (Roads + Places), HERE Traffic, Replica, Veraset / Spectus, TomTom Traffic.

**Utilities & infrastructure:** OpenStreetMap Overpass, EPA ECHO, USGS NWIS, PipelineOpen (PHMSA).

**Permits, planning & land use:** Esri ArcGIS REST, OpenCorporates, FEMA Flood Map Service Center.

**Agriculture & food security:** NASA Earthdata (MODIS/VIIRS), FAO AQUASTAT, Sentinel Hub Stats.

**Emergency response & disaster:** PagerDuty, GDACS, Computer-Aided Dispatch (CAD) APIs.

**POI & commercial intelligence:** Foursquare Places, SafeGraph Places, Google Places.

**Population:** WorldPop REST, Meta Data for Good.

**Wildfire / hazards:** NASA FIRMS, Copernicus EMS.

## Appendix D — Competitive landscape, in detail

### Tier 1 — Incumbents

**Esri.** Private, $7B+ valuation, in business since 1969. Sells to GIS analysts. The product requires a trained operator to run queries manually — it is a toolbox, not a decision-support system. When a PMO director needs to know if Sector 4 is behind schedule, they don't open ArcGIS — they call their GIS team and wait 3 days. Makan answers that question automatically, directly to the decision-maker. Different product, different buyer, different motion.

**Palantir.** Public (NYSE: PLTR), $50B+ market cap. Minimum engagement: $10M+ and 18 months of integration. Does not sell 90-day pilots. No GCC-specific GTM. Not building a queryable physical index using embeddings — selling a data fusion platform that requires a dedicated Palantir engineering team to run. Different category.

**Google Earth Engine.** Owned by Alphabet, free. A platform for analysts. Does not answer operational questions. Gives raw satellite data and Python tools; requires geospatial expertise, compute setup, weeks of model development. Makan delivers the answer; Earth Engine delivers the ingredients. No GCC enterprise GTM, no compliance layer, no agentic interface.

### Tier 2 — Funded startups

**Orbital Insight.** Raised $130M (Sequoia, GV, In-Q-Tel, Goldman). Acquired by Privateer in May 2024. Went defense, US-centric, maritime surveillance. Now a component inside a larger space company. The window they didn't capture is the window Makan is entering.

**Descartes Labs.** Raised $130M+, spun out of Los Alamos. US and agriculture focused. No GCC. Buyers are hedge funds and climate researchers, not PMO directors. Tech stack predates the embedding architecture.

**Blackshark.ai.** Raised $35M (M12, Point72, In-Q-Tel). Founded 2021, originally built 3D for Microsoft Flight Simulator. 3D modeling and simulation — visual, static. Answers "what does this look like in 3D," not "what changed and what does it mean operationally."

**SynMax.** Raised $20M+. Energy-only single vertical. Found one wedge and went deep. Makan's index serves ten industries from the same architecture.

**Picterra.** Early stage, Geneva. Model-training tool — you bring your own use case and train a detector. No embedding-based retrieval, no agentic interface, no GCC presence, no compliance layer.

**ICEYE.** Raised $304M, Finnish SAR satellite operator. A data provider — same category as Planet and Maxar. Sells imagery; doesn't build the reasoning layer. Could be a supplier to Makan, not a competitor.

## Appendix E — The North Star

Right now, as you read this:

- A pipeline is leaking somewhere in Central Asia. Nobody knows.
- A hillside above a mining town in Peru shows subsidence signals. Nobody is looking.
- A flood is about to hit a city in Southeast Asia that built 40 drainage-blocking developments since the last terrain survey. The model is 6 years old.
- A construction project in Brazil is 3 months behind. The ministry will find out in the next quarterly report.

None of these require new satellites. The data exists. The gap is the intelligence layer. **That is what Makan builds.**

Every line of code — frontend or backend — exists to serve one outcome: when an operator asks Makan a question about the physical world, they get a correct, grounded, timely answer they can act on and defend.

That is the north star. Build toward it.

> Query the World.
