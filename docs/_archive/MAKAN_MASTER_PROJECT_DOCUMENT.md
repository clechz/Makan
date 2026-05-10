# MAKAN — MASTER PROJECT DOCUMENT
## The Single Source of Truth for Every Agent, Developer, and Designer Who Works on Makan

> **READ THIS FIRST.** Every agent, developer, designer, copywriter, or contributor who works on any part of the Makan product must read this document before writing a single line of code or copy. This document supersedes all prior references. When in doubt, come back here.

---

# TABLE OF CONTENTS

1. [What Is Makan](#1-what-is-makan)
2. [Company Identity & Mission](#2-company-identity--mission)
3. [The Founding Team](#3-the-founding-team)
4. [The Product — What It Does](#4-the-product--what-it-does)
5. [Technical Architecture](#5-technical-architecture)
6. [Compliance Layer — Optional Add-On](#6-compliance-layer--optional-add-on)
7. [Market & Competitive Landscape](#7-market--competitive-landscape)
8. [Use Cases](#8-use-cases)
9. [Integration Layer — APIs](#9-integration-layer--apis)
10. [Brand Identity System](#10-brand-identity-system)
11. [Typography — IBM Plex (Arabic + English)](#11-typography--ibm-plex-arabic--english)
12. [Color System — Light & Dark Themes](#12-color-system--light--dark-themes)
13. [Logo & Visual Assets](#13-logo--visual-assets)
14. [Multilingual Strategy (AR / EN)](#14-multilingual-strategy-ar--en)
15. [Design Principles](#15-design-principles)
16. [Product Architecture (SaaS)](#16-product-architecture-saas)
17. [Copy & Voice Guidelines](#17-copy--voice-guidelines)
18. [Rules for Agents](#18-rules-for-agents)

---

# 1. WHAT IS MAKAN

**Makan** (مكان) is a geospatial AI platform that transforms satellite imagery into operational intelligence. It indexes the physical world — continuously, at scale — and makes it queryable on demand.

**The one-sentence definition:**
> Makan is the search engine for the physical world.

**The analogy every agent must understand:**

| Tool | What It Does |
|------|-------------|
| Google Earth | Shows you the image |
| Google Maps | Navigates you to the image |
| **Makan** | **Tells you what changed in the image — and what it means** |

Nobody built that third thing. That is why Makan exists.

**The core problem Makan solves:**

Planet Labs photographs every square kilometer of Earth every single day. ESA's Copernicus satellite network generates 20 terabytes of Earth observation data every 24 hours. This data exists. It is coming down right now.

The problem is that nobody built the layer that makes it queryable.

The physical world is the largest, most information-dense dataset in existence — and it has never had a search engine. Every building, road, field, river, pipeline, and construction site on Earth is changing right now. Some of those changes matter enormously — to a government, a company, a community. And almost none of them are being detected until it is too late.

**Makan is that missing layer.**

---

# 2. COMPANY IDENTITY & MISSION

**Company name:** Makan / مكان
**Motto / Tagline:** Query the World.
**Language:** Bilingual — English and Arabic. The brand lives in both.
**Founded:** Global — operations began in Saudi Arabia / GCC, expanding worldwide
**Stage:** Early-stage startup, pre-Series A as of this document

**What "Makan" means:**
مكان (Makan) is the Arabic word for **"place"** or **"location."** The name is deeply intentional — it ties the product to its function (indexing physical places), to the bilingual identity of the company, and to a word that works across languages and cultures. It is universal by design.

**Mission:**
To make the physical world queryable — so that every infrastructure operator, government ministry, energy company, and enterprise can know what is happening on their assets, in real time, anywhere on Earth.

**Vision:**
A world where no pipeline leaks undetected. No construction delay goes unseen. No flood catches a city unprepared. No encroachment on protected land goes unnoticed. The physical world, indexed and watched — continuously, at planetary scale.

---

# 3. THE FOUNDING TEAM

| Name | Role |
|------|------|
| Abdullah | CEO |
| Majed | CRO |
| Yazan | COO |
| Ahmed | CTO |

**Key context:**
- The team has SDAIA-adjacent relationships and deep access to the Saudi AI ecosystem — connections built over years that cannot be purchased with funding
- These connections are a tactical advantage for the first chapter of growth, not a definition of what Makan is — Makan is a global company that happens to have started here
- The team built compliance verification technology (owned code) that can be integrated into the platform as an optional module

---

# 4. THE PRODUCT — WHAT IT DOES

Makan is a **B2B SaaS platform** (with enterprise contract pricing). It is not a consumer product. It is not a research tool. It is an operational intelligence platform for large infrastructure operators, government ministries, and enterprise buyers.

## What the product does, in plain language:

1. **Ingests** satellite imagery from multiple sources (Planet Labs, ESA Copernicus, Maxar, NASA) for a customer-defined Area of Interest (AOI)
2. **Encodes** that imagery into dense vector embeddings — spatial relationships, surface properties, change signals, and semantic content
3. **Detects** changes, anomalies, encroachments, vegetation stress, moisture anomalies, terrain shifts, and construction deviations — automatically, without human review
4. **Delivers** results as structured alerts, map overlays, time-series reports, and API-queryable data — within 24 hours of a satellite pass

## What it is NOT:

- Not a GIS tool (it does not require trained GIS analysts to operate)
- Not a satellite company (Makan does not own satellites — it builds the intelligence layer on top of existing data)
- Not a research platform (it delivers operational answers, not raw data for scientists)
- Not Esri / ArcGIS (different buyer, different motion, different output)

## The key insight — why Makan doesn't need its own satellites:

Planet Labs already covers Earth daily at 3.7m resolution. Copernicus covers it every 5 days at 10m. Maxar can task 50cm same-day. The data collection problem is solved. Makan's job is the **intelligence layer** — encoding, indexing, detecting, and delivering. That is where the value lives.

---

# 5. TECHNICAL ARCHITECTURE

## Data Sources (Imagery Inputs)

| Source | Resolution | Cadence | Type |
|--------|-----------|---------|------|
| Planet Labs PlanetScope | 3.7m | Daily global | Multispectral optical |
| Planet Labs SkySat | 50cm | On-demand same-day | High-res optical |
| ESA Sentinel-2 | 10m | Every 5 days | Multispectral optical |
| ESA Sentinel-1 | 5–20m | Every 6–12 days | SAR (cloud-penetrating radar) |
| Maxar WorldView | 30cm | On-demand | Ultra high-res optical |
| NASA MODIS / Landsat | 30–250m | Daily/16-day | Multispectral + thermal |

## Core Technical Stack

### Layer 1 — Ingestion
- Licensed satellite imagery APIs (Planet, Copernicus, Maxar, NASA Earthdata)
- AOI-triggered ingestion pipeline — every new pass over a registered AOI is captured and queued
- Cloud-native storage, time-indexed by satellite pass timestamp

### Layer 2 — Encoding (The Core IP)
- Raw imagery → dense vector embeddings
- Embeddings capture: spatial relationships, surface texture, temporal change signals, semantic content
- Not rule-based classifiers — the model learns what matters in each specific AOI
- Sub-pixel change sensitivity (can detect changes smaller than the nominal pixel resolution via spectral modeling)
- The vector index is continuously updated with each new satellite pass

### Layer 3 — Detection
- Every new satellite pass is compared against the indexed baseline
- Automated detection of: construction deviation, terrain shift, vegetation stress, moisture anomaly, encroachment, surface disturbance, tailings pond expansion, flood risk signals
- Alert fires within 24 hours of satellite pass
- Configurable thresholds per AOI and use case
- All detections timestamped and cryptographically verifiable (optional compliance module)

### Layer 4 — Delivery
- Structured alert notifications (email, webhook, PagerDuty)
- Map overlay output (GeoJSON, KML, WMS/WFS compatible)
- Time-series reports (PDF, structured data export)
- REST API — queryable index for developer/enterprise integration
- Dashboard interface — no GIS expertise required
- Optional compliance module — audit-ready, cryptographically verified observation log for regulated-industry customers

## The Key Differentiator — Embedding Index vs. Computer Vision Pipeline

Traditional geospatial analytics tools use rule-based computer vision pipelines — you define what you're looking for, train a classifier, run it over imagery. This is brittle, slow to adapt, and requires domain expertise to set up.

Makan uses a **vector embedding index** — a continuous, dense representation of the physical world at a point in time. This enables:
- Semantic queries ("what changed in this AOI in the last 90 days?") rather than just classifier outputs
- Cross-domain generalization — the same index detects construction deviations AND moisture anomalies AND vegetation stress without retraining separate models
- Temporal comparison at arbitrary time ranges without reprocessing
- Future: natural language querying directly against the physical index

---

# 6. COMPLIANCE LAYER — OPTIONAL ADD-ON

## What It Is

Makan has access to compliance verification technology — code originally developed by the founding team — that can be integrated into the platform as an optional add-on module for customers who require audit-ready, legally defensible output.

**Important context for all agents:**
- This is **not a third-party company integration**. Do not reference any external company by name in connection with this capability.
- The technology is code the team built and owns. It is available to incorporate into Makan's platform as a feature.
- It is **not a core product differentiator** to lead with. It is an optional capability layer for regulated-industry buyers who specifically need it.

## What the Compliance Layer Does

When enabled for a customer, observations output by Makan can be:
- Timestamped at the moment of detection
- Cryptographically signed and tamper-proof
- Stored as an audit-ready record with chain of custody
- Traceable back to the specific satellite pass and imagery source

## Who Needs It

This is relevant for customers in regulated industries where intelligence output may be used in legal proceedings, regulatory submissions, or ESG reporting — such as government ministries enforcing encroachment violations, mining operators with ESG disclosure requirements, or water authorities managing regulatory compliance.

It is **not** something to surface to every buyer. It is a capability to mention when the buyer's use case specifically requires legal defensibility of the intelligence output.

## How to Reference It in Copy

Acceptable:
> "For regulated-industry customers, Makan can output cryptographically verified, audit-ready observation records — timestamped to the satellite pass and defensible in regulatory and legal proceedings."

Not acceptable:
> ~~"Makan's built-in compliance moat"~~
> ~~Any reference to a named company or brand~~
> ~~Positioning it as a primary differentiator~~

---

# 7. MARKET & COMPETITIVE LANDSCAPE

## Go-to-Market Strategy

**Makan is a global company. Full stop.**

The physical world is unwatched everywhere — not just in the GCC. Every country with infrastructure, pipelines, rivers, farmland, or construction is a market. That is the scope Makan is building for.

Saudi Arabia / GCC is where Makan is starting — not because Makan is a Saudi or GCC company, but because the team has connections there that cannot be bought, the infrastructure spend density is the highest on Earth right now, and the problems are acute and visible today. It is the fastest path to a first paying customer in this category. That is all.

**First chapter — Saudi Arabia / GCC:**
- $100B+ in active infrastructure spend under Vision 2030
- Direct access to buyers (ROSHN, Red Sea Global, national ministries) through relationships built over years — not through a sales team
- Problems are large, legible, and funded — a 170km construction corridor with no intelligence layer is immediately understandable to any buyer

**The expansion is not a pivot — it is always the plan:**
- **US** → $100B+ federal infrastructure spend (Infrastructure Investment and Jobs Act), aging water/energy grid monitoring, wildfire terrain intelligence, FEMA flood modeling
- **Europe** → ESG compliance mandates, aging pipeline infrastructure (Germany, France), EU farm-to-fork agricultural compliance
- **Southeast Asia** → fastest urbanizing region on Earth, massive flood risk in coastal development zones
- **Africa** → mineral extraction corridors, agricultural intelligence, climate risk quantification
- **Latin America** → mining in Chile/Peru, Amazon deforestation monitoring, infrastructure corridors in Brazil

**The global thesis:** A pipeline leaking in Central Asia, a hillside showing subsidence signals above a mining town in Peru, a flood model six years out of date in Southeast Asia, a food chain signing a $2M lease on the wrong site in Lagos — none of these are Saudi Arabia problems. They are Earth problems. Makan indexes the Earth. The GCC is chapter one. The rest of the world is the book.

## Target Buyers (Primary)

1. **Infrastructure megaproject operators** — PMO directors at ROSHN, Red Sea Global, NEOM, ACWA Power, Saudi Aramco, and comparable GCC entities
2. **Government ministries** — National infrastructure ministries, civil defense authorities, environmental regulators, municipal authorities
3. **Energy and utility companies** — Water authorities, pipeline operators, mining concession holders, energy companies with ESG obligations
4. **Real estate and retail** — Site selection teams at major chains, urban planning authorities, transit-adjacent developers

## Pricing Model

- Annual enterprise contracts per AOI (Area of Interest)
- Range: **$300,000–$1,000,000+ per account per year**
- Pricing drivers: AOI size, update frequency, number of detection modules, compliance output requirements
- Not seat-based. Not usage-based at small scale. Enterprise contract model.

## Competitive Landscape

### Tier 1 — Incumbents (Wrong Buyer, Wrong Motion)

**Esri (ArcGIS)**
- $7B+ GIS monopoly, founded 1969
- Sells to GIS analysts. Requires trained operators to run queries manually. It is a toolbox, not a decision-support system.
- A PMO director doesn't open ArcGIS — they call their GIS team and wait 3 days. Makan answers that question automatically, directly to the decision-maker.
- Different product. Different buyer. Different motion.

**Palantir**
- $50B+ public company. Deep in government and defense.
- Minimum engagement: $10M+ and 18 months of integration. Requires a dedicated team of Palantir engineers.
- Does not sell 90-day pilots to project operators. No GCC-specific GTM.
- Not building a queryable physical index using embeddings — sells a data integration and analytics platform.

**Google Earth Engine**
- Free, massively capable, backed by Google infrastructure.
- A platform for analysts and researchers. Does not answer operational questions.
- Requires geospatial expertise, compute setup, and weeks of model development.
- Makan delivers the answer. Google Earth Engine delivers the ingredients.

### Tier 2 — Funded Startups (Wrong Geography, Wrong Vertical, or Acquired)

**Orbital Insight**
- Founded 2013. Raised $130M (Sequoia, Google Ventures, In-Q-Tel, Goldman Sachs). Peak valuation ~$430M.
- Acquired by Privateer in May 2024. Pivoted to US defense, maritime surveillance, government intelligence.
- Product: TerraScope — hedge fund financial signals (car counting in Walmart parking lots), maritime vessel tracking for national security
- Not selling to Saudi infrastructure operators. Not building embedding-based queryable index. Not doing 90-day pilots with PMO directors.
- The window they didn't capture is exactly the window Makan is entering.

**Descartes Labs**
- Spun out of Los Alamos National Laboratory. Raised $130M+.
- US and agriculture focused. No GCC presence. No operational infrastructure workflow. No compliance layer.
- Buyers: hedge funds and climate researchers — not PMO directors managing $5B construction projects in Saudi Arabia.
- Their embedding architecture is older and less flexible than Makan's approach.

**Blackshark.ai**
- Founded 2021, Austria. Raised $35M (Microsoft M12, Point72, In-Q-Tel).
- Originally built 3D simulation environments for Microsoft Flight Simulator — then pivoted to real-world mapping.
- Product: 3D digital twins of Earth from satellite imagery. 25+ government and enterprise customers.
- This is a 3D modeling and simulation platform — visual, static, simulation-focused.
- Answers "what does this look like in 3D" not "what changed here and what does it mean operationally."
- Abu Dhabi partnership is simulation-focused, not infrastructure intelligence.
- No built-in compliance verification layer.

**SynMax**
- Energy-focused geospatial intelligence (Theia platform): dark ship tracking, oil field activity, energy infrastructure.
- Single-vertical. Energy only.
- Makan's platform architecture serves ten industries from the same index. SynMax built a point solution.

**Picterra**
- Geneva-based. Geospatial AI for object detection and change detection.
- No embedding-based retrieval layer. No agentic query interface. No GCC market presence. No compliance layer.
- A model-training tool — you bring your own use case and train a detector. Makan delivers answers without customers building their own models.

**ICEYE**
- Finnish SAR satellite operator. Raised $304M. Owns their own radar satellite constellation.
- A data provider, not an intelligence layer. ICEYE sells SAR imagery.
- Infrastructure Makan could license from, not a competitor to Makan's intelligence layer.

### The Key Competitive Truth

**Nobody has built a horizontal, queryable, continuously updated physical index of Earth that any industry, any geography, any operator can plug into.**

All funded competitors either:
- Went defense / government intelligence (Orbital Insight)
- Went US-only (Descartes Labs)
- Went single-vertical (SynMax, ICEYE)
- Went 3D simulation (Blackshark.ai)
- Built analyst toolboxes (Esri, Google Earth Engine)
- Got acquired (Orbital Insight)

None of them have:
1. A founding team with GCC relationships that cannot be bought — giving Makan a first-mover advantage in the world's highest-density infrastructure build cycle
2. An embedding-based queryable physical index rather than a traditional computer vision pipeline
3. A 90-day pilot motion designed specifically for project-level infrastructure operators
4. An optional compliance verification layer for regulated-industry output

---

# 8. USE CASES

All use cases run on the **same underlying platform**. The index doesn't change. The query does.

## 1. Infrastructure Progress Monitoring
**Problem:** A PMO director managing 4 construction zones across 80km² has no real-time visibility. Field reports arrive weekly, already outdated. A delay caught in month 6 costs 10× more to fix than month 2.
**Makan:** Detects earthwork progression, structure footprints, material staging, and site activity week-over-week against the approved construction baseline. Flags deviations before they become delays.
**Market:** $6.1B construction monitoring software market by 2030.

## 2. Risk & Anomaly Detection on Active Corridors
**Problem:** Slope erosion, subsidence, and surface cracking develop slowly — invisibly — until they become a $20M emergency. By the time a field team notices, the failure has already started.
**Makan:** Detects millimeter-scale surface deformation, vegetation stress, and terrain change along full corridors continuously. Alert fires within 24 hours of a satellite pass showing anomalous change above threshold.
**Market:** $4.2B infrastructure risk monitoring, growing at 9.3% CAGR through 2030.

## 3. Encroachment & Land-Use Violation Detection
**Problem:** A national ministry manages 500km of protected utility corridor. Unauthorized construction, agricultural encroachment, and illegal land grabs happen constantly. Today they find out from a field patrol — weeks or months after violation started.
**Makan:** Monitors every meter of corridor buffer zone. New structures, cleared land, or land-use changes trigger alerts within 24 hours — with map, coordinates, and before/after imagery ready for enforcement action.
**Market:** $5.8B geospatial land management and compliance software by 2029.

## 4. Urban Intelligence & Transit-Driven Development
**Problem:** City planners and developers need to understand how development density, land value, and surface activity change around transit infrastructure over time. This data doesn't exist in structured form — it must be commissioned, surveyed, and manually assembled.
**Makan:** Tracks building footprint growth, parking utilization, surface impermeability, and commercial activity density across every station catchment area on a monthly cadence.
**Market:** $75.1B smart city analytics by 2030 at 15.2% CAGR.

## 5. Retail & Restaurant Site Selection
**Problem:** A food chain expanding across 12 GCC locations needs foot and vehicle traffic data for every candidate site. Manual counting takes months. Wrong site selections cost $800K–$2M per failure.
**Makan:** Compares satellite frames taken at the same time of day, weeks apart, across every candidate site simultaneously. Mathematical modeling extracts pedestrian density, parking turnover, drive-through queuing, and peak-hour patterns. Ranked site scorecard delivered before a single lease is signed.
**Market:** $21.4B location intelligence and retail analytics by 2030 at 18.3% CAGR.

## 6. Environmental & ESG Compliance Monitoring
**Problem:** Energy companies in sensitive ecological zones need to demonstrate ESG compliance. Today: expensive annual aerial surveys, manually assembled reports that take 3 months to produce. One activist with a satellite image showing vegetation loss can undo years of compliance work.
**Makan:** Produces a continuous, timestamped environmental baseline — vegetation coverage, surface moisture, land disturbance index — updated on every satellite pass. Compliance report generated automatically. Every claim backed by a dated satellite observation. Audit-ready output available for regulated-industry customers.
**Market:** $6.3B ESG monitoring and environmental compliance software by 2030 at 22.1% CAGR.

## 7. Mining, Extraction & Tailings Monitoring
**Problem:** A mining operator running open-pit extraction across a 300km² concession has no real-time visibility into tailings pond expansion, encroachment, or access road degradation. The Brumadinho tailings dam failure (2019, 270 deaths) showed precursor signals weeks before collapse — that nobody was watching.
**Makan:** Indexes the entire concession on demand. Weekly change alerts on dig progression, tailings pond boundaries, and surface saturation. Unusual activity in restricted zones triggers an immediate flag.
**Market:** $5.1B mining analytics and remote monitoring by 2030.

## 8. Water Infrastructure & Pipeline Leak Detection
**Problem:** A water authority managing 800km of buried pipeline has no way to detect a slow leak before rupture. The average large water main failure costs $2.8M in emergency repair. Most utilities detect failures reactively — after the rupture, not before.
**Makan:** Monitors surface moisture signatures, soil subsidence, and vegetation anomalies along the full pipeline corridor. A moisture signal appearing above a buried pipe triggers an alert within 24 hours — dispatch goes to a precise GPS coordinate.
**Market:** $9.2B water infrastructure monitoring and leak detection by 2030 at 11.9% CAGR.

## 9. Flood Modeling, Disaster Prediction & Emergency Response
**Problem:** Civil defense authorities use static flood models years out of date — they don't reflect new construction, drainage changes, or cleared land. The 2024 Dubai floods caused $1B+ in damage partly because drainage infrastructure hadn't been updated to reflect rapid new development.
**Makan:** Continuously updates the terrain model from satellite imagery. When a weather event is forecast, runs a dynamic flood direction and propagation model on the live terrain state — which roads flood first, which neighborhoods are cut off in what sequence, where to pre-position emergency assets.
**Market:** $12.8B disaster risk analytics and emergency management software by 2030 at 15.7% CAGR.

## 10. Agriculture, Food Security & Crop Intelligence
**Problem:** A national food security authority in a water-scarce country needs to know how much agricultural land is under active cultivation, what crop stress looks like, and where illegal groundwater extraction is happening. Field surveys cover maybe 5% of the total agricultural zone per year.
**Makan:** Indexes every agricultural zone continuously. Crop health index, cultivation area, irrigation activity, and vegetation stress tracked on every satellite pass. Anomalies — a farm drawing 10× its permitted groundwater allocation — flagged automatically.
**Market:** $23.1B precision agriculture and agri-intelligence software by 2030 at 15.9% CAGR.

---

# 9. INTEGRATION LAYER — APIs

Makan is the ground truth layer that makes every other data stream more valuable. The following APIs are integrated or planned integrations:

## Weather & Climate
- **Tomorrow.io** — hyperlocal precipitation forecasts layered onto terrain models for flood propagation and wildfire spread modeling
- **OpenWeatherMap API** — real-time and forecast weather fused with surface change detection
- **NOAA Climate Data API** — historical climate baselines for long-term environmental drift detection and ESG reporting

## Traffic & Mobility
- **Google Maps Platform (Roads API + Places API)** — vehicle flow data and points of interest fused with satellite-observed surface activity for retail site scoring and evacuation route modeling
- **HERE Traffic API** — real-time traffic density layered onto Makan's flood propagation model
- **Replica** — population movement and mobility patterns for urban planning intelligence
- **Veraset / Spectus** — anonymized device movement data matched against satellite-observed parking and pedestrian density for retail analytics

## Utilities & Infrastructure
- **OpenStreetMap Overpass API** — water mains, gas lines, power grid, and road network overlays matched against surface anomaly detection
- **EPA ECHO API** — permitted industrial discharge and environmental compliance data matched against observed surface and vegetation change
- **USGS National Water Information System (NWIS) API** — real-time river gauge and streamflow data fused with live terrain model for dynamic flood prediction
- **PipelineOpen (PHMSA data)** — US pipeline infrastructure registry overlaid against surface subsidence and moisture anomaly detection

## Permits, Planning & Land Use
- **Esri ArcGIS REST API** — municipal zoning, parcel boundaries, and land-use designations matched against observed land-use change
- **OpenCorporates API** — business registration and license data fused with observed commercial activity for economic intelligence
- **FEMA Flood Map Service Center API** — official flood zone designations compared against Makan's live terrain-updated flood model

## Agriculture & Food Security
- **NASA Earthdata API (MODIS/VIIRS)** — vegetation index and land surface temperature data fused with Makan's embedding layer
- **FAO AQUASTAT API** — national water allocation and agricultural water use data matched against observed irrigation activity
- **aWhere Agricultural Weather API** — crop-specific growing condition models fused with vegetation change detection

## Emergency Response & Disaster
- **PagerDuty API** — Makan anomaly alerts pipe directly into emergency operations center incident management workflows
- **GDACS (Global Disaster Alert and Coordination System) API** — global disaster event feed fused with Makan's live terrain state for post-event damage assessment
- **CAD (Computer-Aided Dispatch) APIs** — Makan's pre-positioned asset recommendations feed directly into emergency dispatch systems

## Points of Interest & Commercial Intelligence
- **Foursquare Places API** — business category, rating, and visit frequency data fused with satellite-observed foot traffic (the programmable Yelp equivalent)
- **SafeGraph Places API** — POI footprint data and visit patterns matched against satellite surface activity
- **Google Places API** — restaurant, retail, and service location data layered onto Makan's traffic observation model

## Satellite & Earth Observation Data Sources
- **Planet Labs API (PlanetScope + SkySat)** — daily 3.7m global coverage; on-demand 50cm tasking. Primary commercial imagery feed. PlanetScope covers 300M km²/day.
- **ESA Copernicus Open Access Hub API** — free Sentinel-1 (SAR, penetrates clouds) and Sentinel-2 (multispectral, 10m resolution) every 5 days. Baseline open data layer.
- **Maxar Streaming API** — 30cm resolution WorldView imagery for highest-detail assessments on critical infrastructure
- **NASA Earthdata CMR API** — MODIS, Landsat, and SRTM elevation datasets for historical baselines and terrain modeling

---

# 10. BRAND IDENTITY SYSTEM

## Core Identity

**Name:** Makan / مكان
**Tagline:** Query the World.
**Language:** Always bilingual — English and Arabic. Neither is secondary.
**Tone:** Authoritative. Precise. Operational. Zero marketing fluff.

## The Logo

The Makan logo consists of two elements:
1. **The Globe Mark** — A stylized sphere with orbital/scanning curves flowing around and through it. The curves evoke satellite orbits, data paths, and the motion of scanning the Earth. The globe is not a perfect sphere — the curves give it energy, movement, and intelligence.
2. **The Wordmark** — مكان (Arabic) above, MAKAN (Latin) below. Both are set in a rounded, strong sans-serif. Arabic is always shown first, directly under the globe.

**Logo states:**
- Full logo: Globe + مكان + MAKAN (standard use)
- Simplified globe: Globe only + مكان + MAKAN with plain filled circle (alternate lightweight version for small sizes)
- Mark only: Globe without wordmark (icon use, favicons, app icons)

**Logo colors:**
- On dark backgrounds: White (#FFFFFF) or Cyan (#00C2C7)
- On light backgrounds: Near-black (#080A0F) or Cyan (#00C2C7)
- Never use the logo in any color that reduces legibility
- Never stretch, rotate, or modify the proportions of the logo

**Logo files available:** 10 SVG variants (see `/assets/logo/`)

## Visual Language

Makan's visual language is built around:
- **Satellite imagery overlaid with intelligence** — not raw photos, but processed images with bounding boxes, detection grids, coordinate labels, and AOI markers
- **Precision and data density** — not minimalist emptiness, but controlled information richness
- **Dark environments by default** — the product lives in dark dashboards and nighttime command centers
- **Thin line aesthetics** — scan grids, coordinate crosshairs, AOI circles, data flow lines
- **Real data** — coordinates, timestamps, change percentages, AOI IDs — always show real-looking data, never Lorem Ipsum numbers

**What to avoid:**
- Stock photography of humans using laptops
- Generic "AI brain" or neural network illustrations
- Purple gradient backgrounds (over-associated with generic AI companies)
- Anything that looks like a consumer app

---

# 11. TYPOGRAPHY — IBM PLEX (ARABIC + ENGLISH)

Makan uses the **IBM Plex** typeface family exclusively across all products, interfaces, and documents. IBM Plex was chosen because:
1. It has a complete Arabic variant (IBM Plex Arabic) that is designed to coexist with the Latin variants — same design philosophy, harmonious together
2. It is open source and freely available on Google Fonts and IBM's GitHub
3. It has monospace, sans, and serif variants — covering every use case from UI to code labels to editorial text
4. It communicates precision, intelligence, and technical credibility — appropriate for a geospatial AI platform

## Font Variants in Use

| Variant | Use |
|---------|-----|
| **IBM Plex Sans** | Primary UI font — body text, labels, navigation, buttons, forms. English. |
| **IBM Plex Sans Arabic** | Primary UI font for Arabic content — body text, labels, navigation, buttons. Arabic. |
| **IBM Plex Mono** | Technical content — coordinates, API names, code, timestamps, data values, terminal-style labels |
| **IBM Plex Sans Condensed** | Compact UI elements — table headers, tight navigation, stat labels |
| **IBM Plex Serif** | Editorial use only — long-form articles, reports, formal documents. Use sparingly. |

## Type Scale

```
Display:    48–72px   IBM Plex Sans Bold or ExtraBold   Line height: 1.1
Headline:   32–44px   IBM Plex Sans SemiBold            Line height: 1.15
Title:      22–28px   IBM Plex Sans SemiBold            Line height: 1.2
Body:       14–16px   IBM Plex Sans Regular             Line height: 1.6
Small:      11–13px   IBM Plex Sans Regular             Line height: 1.5
Mono:       12–14px   IBM Plex Mono Regular             Line height: 1.4
```

## Arabic Typography Rules

- Arabic text is **always right-to-left (RTL)**. Set `dir="rtl"` and `lang="ar"` on all Arabic containers.
- Arabic body text should be **1–2px larger** than the equivalent Latin text — Arabic letterforms are optically smaller at the same size.
- Arabic headline text can match Latin size.
- Never mix RTL and LTR text in the same line without proper Unicode bidirectional controls.
- IBM Plex Sans Arabic weights: Thin, ExtraLight, Light, Regular, Text, Medium, SemiBold, Bold, ExtraBold.
- Arabic numbers can use either Eastern Arabic (٠١٢٣٤٥٦٧٨٩) or Western Arabic (0123456789) — match the surrounding text direction and context. In a mixed interface, prefer Western Arabic numerals for consistency.

## Font Loading (Web)

```css
/* Google Fonts import — both variants together */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

/* CSS variables */
:root {
  --font-sans: 'IBM Plex Sans', sans-serif;
  --font-sans-ar: 'IBM Plex Sans Arabic', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

/* Apply based on language */
[lang="en"] { font-family: var(--font-sans); }
[lang="ar"] { font-family: var(--font-sans-ar); direction: rtl; }
```

---

# 12. COLOR SYSTEM — LIGHT & DARK THEMES

Makan supports both **dark mode (primary)** and **light mode**. Dark mode is the default for all product interfaces. Light mode is for documents, reports, printed materials, and contexts where dark is inappropriate.

## Design Tokens (CSS Variables)

```css
/* ============================================
   MAKAN DESIGN TOKENS
   ============================================ */

/* --- DARK THEME (Default) --- */
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg-base:        #080A0F;   /* Page background — deep near-black */
  --color-bg-surface:     #0F1318;   /* Cards, panels, modals */
  --color-bg-elevated:    #161C24;   /* Elevated elements, dropdowns */
  --color-bg-overlay:     rgba(8, 10, 15, 0.85); /* Frosted glass overlays */

  /* Borders */
  --color-border-subtle:  #1C2230;   /* Subtle dividers, card borders */
  --color-border-default: #2A3347;   /* Default borders */
  --color-border-strong:  #3D4F6B;   /* Emphasized borders */

  /* Text */
  --color-text-primary:   #F0EDE6;   /* Primary text — warm off-white */
  --color-text-secondary: #A8B3C4;   /* Secondary text */
  --color-text-muted:     #6B7280;   /* Muted / placeholder text */
  --color-text-disabled:  #3D4F6B;   /* Disabled state */
  --color-text-inverse:   #080A0F;   /* Text on bright surfaces */

  /* Brand Accent — Cyan (Primary) */
  --color-cyan-50:        #E0FAFA;
  --color-cyan-100:       #B3F2F4;
  --color-cyan-200:       #7DE9EC;
  --color-cyan-300:       #3DDDE2;
  --color-cyan-400:       #10CDD4;
  --color-cyan-500:       #00C2C7;   /* PRIMARY BRAND COLOR */
  --color-cyan-600:       #00A8AD;
  --color-cyan-700:       #008B90;
  --color-cyan-800:       #006D71;
  --color-cyan-900:       #004F52;

  /* Alert Accent — Amber (Anomalies, Alerts, Warnings) */
  --color-amber-500:      #E8A838;   /* Primary alert/anomaly color */
  --color-amber-400:      #F0BB5C;
  --color-amber-600:      #C98C1E;

  /* Semantic colors */
  --color-success:        #22C55E;
  --color-warning:        #E8A838;
  --color-error:          #EF4444;
  --color-info:           #00C2C7;

  /* Interactive */
  --color-interactive:    #00C2C7;
  --color-interactive-hover: #00D8DF;
  --color-interactive-pressed: #00A8AD;
}

/* --- LIGHT THEME --- */
[data-theme="light"] {
  /* Backgrounds */
  --color-bg-base:        #F8F9FB;   /* Page background */
  --color-bg-surface:     #FFFFFF;   /* Cards, panels */
  --color-bg-elevated:    #FFFFFF;   /* Elevated elements */
  --color-bg-overlay:     rgba(248, 249, 251, 0.90);

  /* Borders */
  --color-border-subtle:  #E8EBF0;
  --color-border-default: #D1D9E2;
  --color-border-strong:  #A8B3C4;

  /* Text */
  --color-text-primary:   #080A0F;   /* Primary text — near black */
  --color-text-secondary: #374151;
  --color-text-muted:     #6B7280;
  --color-text-disabled:  #D1D9E2;
  --color-text-inverse:   #F0EDE6;

  /* Accents — same brand colors, same token names */
  --color-cyan-500:       #0094A0;   /* Slightly deeper for light mode legibility */
  --color-amber-500:      #B87A10;   /* Deeper amber for light mode */

  /* Semantic */
  --color-success:        #16A34A;
  --color-warning:        #B87A10;
  --color-error:          #DC2626;
  --color-info:           #0094A0;
}
```

## Color Usage Rules

1. **Cyan (#00C2C7 in dark / #0094A0 in light)** is the primary brand color. Use it for: interactive elements, CTAs, active states, data signals, links, and anything that represents the platform's intelligence output.

2. **Amber (#E8A838 in dark / #B87A10 in light)** is exclusively for alerts, anomalies, warnings, critical flags, and anything requiring immediate attention. Do not use amber decoratively.

3. **Never use purple or violet** as a primary brand color. Purple is over-associated with generic AI companies and is explicitly off-brand for Makan.

4. **Dark mode is primary.** When in doubt about which theme to build for, build dark first.

5. **Text hierarchy must be respected** — use `--color-text-primary` for headlines and primary content, `--color-text-secondary` for body, `--color-text-muted` for labels and metadata. Never use more than three levels of text color hierarchy on a single screen.

---

# 13. LOGO & VISUAL ASSETS

## Available Assets (SVG files)

10 SVG files exist representing logo variants. All are embedded PNG assets inside SVG containers. The underlying logo PNG exists in 4 distinct variants:

| Asset group | Description |
|-------------|-------------|
| 1, 2, 3, 4, 6, 9 | Full logo — detailed globe mark with orbital curves + مكان + MAKAN |
| 5, 10 | Simplified logo — solid circle globe + مكان + MAKAN |
| 7 | Cropped / zoomed logo variant |
| 8 | Wide/zoomed mark |

All assets are **white on transparent** — they work on dark backgrounds by default. For light backgrounds, apply CSS `filter: invert(1)` or use the near-black color version.

## Asset Rules

- **Always use the SVG files** for web — never rasterize the logo for screen use
- **Minimum size:** 24px height for the mark alone; 80px height for the full logo with wordmark
- **Clear space:** Maintain a minimum clear space equal to the height of the letter "M" in MAKAN on all sides
- **Arabic first:** The Arabic wordmark (مكان) always appears above the Latin wordmark (MAKAN) in the stacked logo configuration

---

# 14. MULTILINGUAL STRATEGY (AR / EN)

## Core Principle

Makan is a bilingual company. Arabic and English are **co-equal languages** — neither is a translation of the other. Both are primary.

- The company name is bilingual by design: Makan = مكان
- The tagline "Query the World" does not need a direct Arabic translation — it can stand alone in English even in Arabic-language contexts (it is a technical phrase that works internationally)
- All product interfaces must support both languages fully
- The Arabic experience must be as polished and native as the English experience — not an afterthought

## Technical Implementation

```html
<!-- Page-level language switching -->
<html lang="en" dir="ltr">  <!-- English default -->
<html lang="ar" dir="rtl">  <!-- Arabic mode -->

<!-- Mixed-language content -->
<p lang="en" dir="ltr">Query the World</p>
<p lang="ar" dir="rtl">استعلم عن العالم</p>

<!-- Bilingual label pattern -->
<span class="label-en">Platform</span>
<span class="label-ar" lang="ar">المنصة</span>
```

## Key Arabic Translations for UI (Reference Glossary)

| English | Arabic | Notes |
|---------|--------|-------|
| Makan | مكان | "Place" / "Location" |
| Query the World | استعلم عن العالم | Literal translation |
| Platform | المنصة | |
| Area of Interest | منطقة الاهتمام | AOI |
| Satellite Imagery | صور الأقمار الاصطناعية | |
| Change Detection | كشف التغيير | |
| Alert | تنبيه | |
| Anomaly | شذوذ | |
| Infrastructure | البنية التحتية | |
| Intelligence | الذكاء | Note: not "ذكاء اصطناعي" (AI) — use "الذكاء" alone for intelligence outputs |
| Dashboard | لوحة التحكم | |
| Report | تقرير | |
| Request a Demo | طلب عرض تجريبي | |
| Use Cases | حالات الاستخدام | |
| How It Works | كيف يعمل | |
| Compliance | الامتثال | |
| Encroachment | التعدي | |
| Pipeline | خط الأنابيب | |

## Layout Considerations for Arabic

1. **All layouts must mirror correctly in RTL** — flexbox and CSS grid both support `direction: rtl` automatically when set on the container
2. **Icons with directionality** (arrows, chevrons, progress indicators) must be flipped in RTL mode — use `transform: scaleX(-1)` on directional icons when in RTL
3. **Numbers stay LTR** — even inside RTL text, numeric data (coordinates, percentages, measurements) should use Western Arabic numerals (0–9) unless the design specifically calls for Eastern Arabic
4. **Form fields** in Arabic: text input is RTL, labels are RTL, placeholder text is Arabic
5. **Test with real Arabic content** — never use Lorem Ipsum Arabic placeholder text; it produces nonsense that Arabic-speaking users will notice immediately

---

# 15. DESIGN PRINCIPLES

These are the non-negotiable design principles for everything Makan. Every agent must internalize these before designing anything.

## 1. Precision over decoration
Every visual element must earn its place by communicating information. Decorative gradients that don't carry meaning, illustrations that don't show the product, icons that are vague — all of these are wrong for Makan. The product is precise. The design must be precise.

## 2. The data is the design
The most powerful visuals Makan can show are real-looking data: coordinates, timestamps, change percentages, detection confidence scores, AOI polygons on satellite imagery. Lean into this. A screen showing a real satellite image with a bounding box and a 94% confidence score is more compelling than any illustration.

## 3. Dark by default
Makan's product lives in operations centers, command rooms, and late-night project management sessions. Dark mode is not an option — it is the primary experience. Light mode exists for documents, print, and specific contexts.

## 4. Enterprise credibility, not startup energy
The buyers are ministry officials and PMO directors. They are not impressed by gradient animations and playful microinteractions. They are impressed by confidence, precision, and evidence that the platform works at scale. Design for decision-makers, not for product hunt.

## 5. Bilingual by design, not by translation
Arabic is not a translation layer bolted onto an English product. Both languages are designed together from the start. The Arabic experience must be natively designed — not a mirrored version of the English experience.

## 6. The physical world is the hero
Makan's product makes the physical world legible. The visuals should reflect this. Satellite imagery, terrain maps, aerial views, infrastructure overlays — these are the product's native visual language. Use them.

## 7. Show change, not state
Makan's core value is detecting change. Wherever possible, visuals should show before/after, over-time, or change-detection outputs — not static snapshots. Two frames compared is more compelling than one.

---

# 16. PRODUCT ARCHITECTURE (SaaS)

## Product Type
**B2B Enterprise SaaS** — Annual contract model. No self-serve free tier at launch. Demo-first sales motion.

## Core Product Components

### 1. Onboarding & AOI Configuration
- Customer defines their AOI (upload polygon, draw on map, or enter coordinates)
- Configure: imagery sources, update frequency, detection modules, alert thresholds
- Connect: delivery preferences (email, webhook, API, dashboard)

### 2. The Intelligence Dashboard
- Map-centered interface showing the indexed AOI
- Time-series controls: scrub back through satellite passes
- Change detection overlays: toggle on/off by detection type
- Alert feed: chronological list of detections with severity, timestamp, confidence
- Report export: one-click PDF or structured data export

### 3. Alert System
- Configurable thresholds per detection type
- Delivery: in-app, email, webhook, PagerDuty integration
- Every alert contains: timestamp, GPS coordinates, confidence score, before/after imagery, and (if compliance module is enabled) cryptographic verification hash

### 4. API Access
- REST API for enterprise integration
- Query the physical index programmatically
- Webhook subscriptions for real-time alerts
- GeoJSON / KML export for GIS system integration

### 5. Compliance Module (Optional)
- Cryptographically verified observation log for regulated-industry customers
- Audit-ready export for regulatory submissions
- Chain of custody tracking per observation
- ESG compliance report generation

## User Roles

| Role | Description |
|------|-------------|
| Admin | Full access — AOI configuration, billing, user management |
| Analyst | Dashboard access, report generation, alert review |
| Viewer | Read-only dashboard and alert access |
| API | Machine-to-machine API access |

---

# 17. COPY & VOICE GUIDELINES

## Voice Attributes
- **Authoritative** — Makan knows what it is talking about. No hedging, no vague claims.
- **Precise** — Use real numbers. $2.8M failure cost. 300M km²/day. <24 hours. Not "significant cost savings" or "vast coverage."
- **Operational** — Speak to what the buyer needs to do their job, not to technology features.
- **Calm confidence** — Not sales hype. Not excited startup energy. The confidence of a platform that works.

## What to Say

✅ "Makan detects encroachment within 24 hours of a satellite pass — with timestamped evidence ready for enforcement action."
✅ "A moisture signal appearing above a buried pipe triggers an alert before the surface cracks."
✅ "95% detection accuracy. <24 hour alert latency. 300M km² indexed daily."
✅ "Not monitoring. Intelligence of record."

## What NOT to Say

❌ "Leverage AI-powered insights to unlock the value of your data"
❌ "Cutting-edge machine learning algorithms"
❌ "Seamlessly integrate with your existing workflows"
❌ "Our innovative platform"
❌ "World-class geospatial intelligence" (vague)
❌ Any phrase that could apply to any other SaaS company

## The Tagline

**Query the World.** — This is the tagline. It appears in:
- The footer of every page as the closing statement
- The hero section of the landing page
- The loading screen of the product
- Email signatures
- Business cards

Do not modify the tagline. Do not add punctuation variations. Do not use "Query the world" (lowercase). It is **Query the World.** — with the period.

---

# 18. RULES FOR AGENTS

Every AI agent, developer assistant, or automated tool that works on any Makan codebase, design, copy, or document must follow these rules without exception:

## Identity Rules
1. The company name is **Makan** — capital M, no other capitalization. Never "MAKAN" in prose (only in the logo wordmark). Never "makan" in prose.
2. The tagline is **Query the World.** — with the period, with the capital W. Always.
3. Arabic and English are co-equal. Never treat Arabic as secondary.
4. The logo always shows Arabic (مكان) above English (MAKAN).

## Design Rules
5. **Dark theme is primary.** Always build dark mode first.
6. **IBM Plex Sans** for English. **IBM Plex Sans Arabic** for Arabic. No other fonts.
7. **Cyan (#00C2C7)** for brand/interactive elements. **Amber (#E8A838)** for alerts/anomalies only. No purple as a brand color.
8. Never use stock photography of humans or generic "AI brain" illustrations.
9. Show real-looking data: coordinates, timestamps, change percentages. Never Lorem Ipsum numbers.

## Content Rules
10. Always be specific. Use real market numbers, real cost figures, real latency specs.
11. Never use generic AI marketing language ("leverage," "unlock," "cutting-edge").
12. The compliance layer is a **feature the team built** — do not reference any external company name in connection with it. Describe it as an optional add-on capability for regulated-industry customers.
13. The team is Abdullah (CEO), Majed (CRO), Yazan (COO), Ahmed (CTO).
14. Makan does not own satellites. It builds the intelligence layer on top of existing satellite data.
15. Makan is a **global company**. The GCC is the first chapter, not the identity. Never describe Makan as a "Saudi company," "GCC company," or "regional player." The team has GCC connections that are tactically valuable — that is not the same as being a GCC company.

## Technical Rules
16. All web interfaces must support RTL layout switching for Arabic.
17. `dir="rtl"` and `lang="ar"` must be set on all Arabic content containers.
18. Directional icons must be flipped in RTL mode.
19. The CSS token system (`--color-bg-base`, `--color-text-primary`, etc.) must be used for all colors — never hardcode hex values.
20. Font loading must include both `IBM Plex Sans` and `IBM Plex Sans Arabic`.

## Scope Rules
21. Before starting any task, read this document.
22. If a decision is not covered in this document, default to: dark theme, IBM Plex, cyan accent, operational copy, bilingual support.
23. If the user's request conflicts with brand identity (e.g., "make it purple"), flag the conflict before proceeding and explain why.
24. Never recreate or replace the Makan logo mark — only use the provided SVG assets.

---

*Document version: 2.0*
*Last updated: 2025*
*Maintained by: Makan founding team*
*This document is the single source of truth for all Makan product work.*
*All prior references, briefs, and instructions are superseded by this document.*
