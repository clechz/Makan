# Makan i18n string inventory (EN → AR)

**Source files scanned:**
- `public/hybrid/index.html` (~3,986 lines)
- `public/hybrid/dashboard-screenshot.html` (~1,335 lines)

**Total strings: 200**

See section breakdown at end. Each table row is one translation unit: `Key | English | Location | Notes`.

---

## meta

| Key | English | Location | Notes |
|---|---|---|---|
| meta.title | Makan — Query the World. | index.html:6 | `<title>` |
| meta.description | Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams. | index.html:722 | `<meta name="description">` |
| meta.og.title | Makan — Query the World. | index.html:723 | `og:title` |
| meta.og.description | Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams. | index.html:724 | `og:description` |
| meta.twitter.title | Makan — Query the World. | index.html:725 | `twitter:title` |
| meta.twitter.description | Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams. | index.html:726 | `twitter:description` |
| meta.preloader.logo | makan. | index.html:1598 | preloader logotype (keep lowercase trademark) |

## header / nav

| Key | English | Location | Notes |
|---|---|---|---|
| nav.about | About | index.html:1616 | nav item (rendered twice as hover state) |
| nav.platform | Platform | index.html:1616 | nav item |
| nav.process | Process | index.html:1616 | nav item |
| nav.contact | Contact | index.html:1616 | nav item |
| header.phone | +966 55 171 6119 | index.html:1616 | tel link label — keep digits, untranslated |
| header.email | info@lionstack.org | index.html:1616 | mailto label — do not translate |
| header.logo.wordmark | makan. | index.html:1616 | header logotype, keep lowercase with period |

## hero

| Key | English | Location | Notes |
|---|---|---|---|
| hero.title | Query the World | index.html:1627 | the `<h1>`. NB: no period in markup, but brand canonical = "Query the World." — likely fix markup before translation |
| hero.tagline | We observe the surface and tell you what to do about it. | index.html:1627 |  |
| hero.subtitle.prefix | Intelligence built to understand | index.html:1627 | followed by rotating word |
| hero.subtitle.aux | To index your AOI | index.html:1627 | secondary hero label (display:none in markup) |
| hero.scroll.label | Scroll down | index.html:1627 |  |
| hero.image.alt | View through a spacecraft porthole | index.html:1627 | hero porthole image alt |
| hero.rotate.01 | the built world | index.html:4202 | rotating word |
| hero.rotate.02 | the natural world | index.html:4202 |  |
| hero.rotate.03 | the connected world | index.html:4202 |  |
| hero.rotate.04 | the changing world | index.html:4202 |  |
| hero.rotate.05 | the unseen world | index.html:4202 |  |
| hero.rotate.06 | the regulated world | index.html:4202 |  |
| hero.rotate.07 | the lived-in world | index.html:4202 |  |
| hero.rotate.08 | the commercial world | index.html:4202 |  |
| hero.cta.bookDemo | Book a Demo | index.html:4132 | floating CTA pill (shared with footer) |
| hero.earth.alt | Earth from orbit | index.html:4094 | sky-bg earth image alt |

## about / lead

| Key | English | Location | Notes |
|---|---|---|---|
| about.lead.headline | The physical world is the largest dataset in existence. Most of it unlabeled, all of it unindexed. | index.html:1637 | two-sentence structure |

## features (dashboard fan-out cards — 6 small cards)

| Key | English | Location | Notes |
|---|---|---|---|
| features.defineArea.label | Define area | index.html:1667 | top-left card eyebrow |
| features.agent.label | Agent | index.html:1692 | middle-left card eyebrow |
| features.detect.label | Detect | index.html:1702 | bottom-left card eyebrow |
| features.detect.dateLeft | Mar 2025 | index.html:1714 | before/after date label |
| features.detect.dateRight | Sep 2025 | index.html:1715 |  |
| features.detect.badge | 3 changes | index.html:1716 |  |
| features.alerts.label | Alerts | index.html:1723 |  |
| features.alerts.title.prefix | New structure | index.html:1728 | bold prefix |
| features.alerts.title.suffix | on 5th Ave | index.html:1728 |  |
| features.alerts.desc | High ROI investment opportunity | index.html:1728 |  |
| features.alerts.time | 2 min ago · 96% confidence | index.html:1730 | 96% is data — leave numeric |
| features.layers.label | Layers | index.html:1737 |  |
| features.layers.construction | Construction activity | index.html:1740 |  |
| features.layers.construction.tag | seen | index.html:1740 |  |
| features.layers.disaster | Disaster risk | index.html:1741 |  |
| features.layers.disaster.tag | modeled | index.html:1741 |  |
| features.layers.wealth | Wealth distribution | index.html:1742 |  |
| features.layers.wealth.tag | modeled | index.html:1742 |  |
| features.layers.traffic | Traffic density | index.html:1743 |  |
| features.layers.traffic.tag | api | index.html:1743 |  |
| features.layers.custom | Custom layer | index.html:1744 |  |
| features.layers.custom.tag | yours | index.html:1744 |  |
| features.monitor.label | Monitor | index.html:1751 |  |
| features.monitor.month.jan | Jan | index.html:1764 |  |
| features.monitor.month.mar | Mar | index.html:1764 |  |
| features.monitor.month.jun | Jun | index.html:1764 |  |
| features.monitor.month.sep | Sep | index.html:1764 |  |
| features.monitor.month.now | Now | index.html:1764 |  |
| features.dashboardChrome.title | makan — operations dashboard | index.html:1800 | mock Mac window title bar |

## stats (4-up grid)

| Key | English | Location | Notes |
|---|---|---|---|
| stats.area.label | km²/day | index.html:1963 | 300M is data |
| stats.training.label | training chips | index.html:1968 | 70M+ is data |
| stats.layers.label | fused layers | index.html:1973 | 30+ is data |
| stats.resolution.label | on demand | index.html:1978 | 10cm/px is data |

## features (5-card grid — Agent / Places / Layers / Discoveries / Shifts)

| Key | English | Location | Notes |
|---|---|---|---|
| features.fgrid.agent.label | Agent | index.html:2022 | uppercase eyebrow |
| features.fgrid.agent.title | Ask questions in plain language | index.html:2023 |  |
| features.fgrid.agent.desc | Natural-language queries over satellite imagery. "Show me all new construction within 5 km of the pipeline in the last 90 days." The agent searches, cites sources, and returns geolocated results. | index.html:2024 | keep the quoted example sentence |
| features.fgrid.agent.example | New construction within 5 km of the North Corridor pipeline, last 90 days | index.html:2029 | example query bubble |
| features.fgrid.agent.result | Found 18 discoveries across 3 places | index.html:2032 | numbers are mock data — preserve |
| features.fgrid.places.label | Places | index.html:2045 |  |
| features.fgrid.places.title | Define the areas you monitor | index.html:2046 |  |
| features.fgrid.places.desc | Draw boundaries, name them, track them. Every place becomes a living dataset — continuously updated with every satellite pass. | index.html:2047 |  |
| features.fgrid.places.example.01 | Riyadh · North Corridor | index.html:2051 |  |
| features.fgrid.places.example.02 | Jeddah · Coastal Zone | index.html:2055 |  |
| features.fgrid.places.example.03 | NEOM · Bay Area | index.html:2059 | NEOM = brand — keep |
| features.fgrid.layers.label | Layers | index.html:2069 |  |
| features.fgrid.layers.title | Stack data on one map | index.html:2070 |  |
| features.fgrid.layers.desc | Construction, risk, wealth, density — satellite-detected, AI-modeled, and API-sourced. | index.html:2071 |  |
| features.fgrid.discoveries.label | Discoveries | index.html:2077 |  |
| features.fgrid.discoveries.title | What changed, where, when | index.html:2078 |  |
| features.fgrid.discoveries.desc | New structures, terrain shifts, anomalies — timestamped, geolocated, scored with confidence. | index.html:2079 |  |
| features.fgrid.shifts.label | Shifts | index.html:2085 |  |
| features.fgrid.shifts.title | Track evolution over time | index.html:2086 |  |
| features.fgrid.shifts.desc | Scrub through satellite passes, compare dates, catch anomalies the moment they deviate. | index.html:2087 |  |

## beforeafter (section + 6 fan-out cards + slider)

| Key | English | Location | Notes |
|---|---|---|---|
| beforeafter.eyebrow | See what others miss | index.html:2102 | uppercase via CSS |
| beforeafter.title | No tool above does what Makan does. | index.html:2103 | keep period |
| beforeafter.card.vectors.label | The world as vectors | index.html:2120 |  |
| beforeafter.card.multisource.label | Multi-source reasoning | index.html:2165 |  |
| beforeafter.card.multisource.summary | → one reconciled answer | index.html:2172 |  |
| beforeafter.card.proof.label | Pixel-traceable proof | index.html:2179 |  |
| beforeafter.card.proof.statement | Every detection | index.html:2184 | bold |
| beforeafter.card.proof.key.sensor | Sensor | index.html:2186 |  |
| beforeafter.card.proof.key.pass | Pass | index.html:2187 |  |
| beforeafter.card.proof.key.hash | Hash | index.html:2188 |  |
| beforeafter.card.nolockin.label | No data lock-in | index.html:2195 |  |
| beforeafter.card.nolockin.left | your data | index.html:2220 |  |
| beforeafter.card.nolockin.right | your data | index.html:2221 |  |
| beforeafter.card.sovereign.label | Sovereign deploy | index.html:2228 |  |
| beforeafter.card.sovereign.option.cloud | Your cloud | index.html:2233 |  |
| beforeafter.card.sovereign.option.onprem | On-prem | index.html:2237 |  |
| beforeafter.card.sovereign.option.airgapped | Air-gapped | index.html:2241 |  |
| beforeafter.card.sovereign.footnote | same product | index.html:2243 | uppercase via CSS |
| beforeafter.card.vertical.label | Vertical intelligence | index.html:2250 |  |
| beforeafter.card.vertical.eyebrow | DETECTION | index.html:2253 |  |
| beforeafter.card.vertical.example | "new structure near pipeline" | index.html:2254 |  |
| beforeafter.card.vertical.aux | Makan reads context | index.html:2255 |  |
| beforeafter.card.vertical.output | Encroachment | index.html:2256 |  |
| beforeafter.window.title | makan — before / after analysis | index.html:2281 | Mac window chrome |
| beforeafter.slider.alt.before | Before — raw satellite imagery | index.html:2288 | img alt |
| beforeafter.slider.alt.after | After — Makan intelligence overlay | index.html:2289 |  |

## applications (top text-card slider — 9 cards)

| Key | English | Location | Notes |
|---|---|---|---|
| applications.midTitle.eyebrow | SECTION 03 | index.html:2486 | rendered via CSS `content:` — special handling needed |
| applications.midTitle | What we detect. | index.html:2556 |  |
| applications.hint | ← Drag to explore → | index.html:2551 |  |
| applications.01.label | Infrastructure | index.html:2574 |  |
| applications.01.desc | Track construction progress week-over-week against the approved baseline. | index.html:2574 |  |
| applications.02.label | Encroachment | index.html:2575 |  |
| applications.02.desc | Monitor corridors for unauthorized construction and land-use violations. | index.html:2575 |  |
| applications.03.label | Urban Intelligence | index.html:2576 |  |
| applications.03.desc | Map transit-driven development density across station catchment areas. | index.html:2576 |  |
| applications.04.label | Environmental | index.html:2577 |  |
| applications.04.desc | Continuous ESG baseline — vegetation, moisture, disturbance — audit-ready. | index.html:2577 | "audit-ready" preferred phrase |
| applications.05.label | Pipeline | index.html:2578 |  |
| applications.05.desc | Surface moisture and subsidence alerts before the $2.8M rupture happens. | index.html:2578 | keep $2.8M as data |
| applications.06.label | Mining | index.html:2579 |  |
| applications.06.desc | Weekly change alerts on dig progression, tailings, and restricted zones. | index.html:2579 |  |
| applications.07.label | Flood & Disaster | index.html:2580 |  |
| applications.07.desc | Live terrain models for flood propagation and emergency asset placement. | index.html:2580 |  |
| applications.08.label | Agriculture | index.html:2581 |  |
| applications.08.desc | Crop health, irrigation activity, and groundwater extraction tracked per pass. | index.html:2581 |  |
| applications.09.label | Retail & Sites | index.html:2582 |  |
| applications.09.desc | Parking turnover, foot traffic, and peak-hour patterns from satellite frames. | index.html:2582 |  |

## applications.images (bottom image slider — 9 captions + alt text)

| Key | English | Location | Notes |
|---|---|---|---|
| applications.images.01.alt | Construction site from above | index.html:2697 |  |
| applications.images.02.alt | Satellite-style view of pipeline corridor with new structures | index.html:2699 |  |
| applications.images.03.alt | Dense city seen from the air at night | index.html:2701 |  |
| applications.images.04.alt | Forest canopy from above | index.html:2703 |  |
| applications.images.05.alt | Industrial pipeline running through mountain landscape | index.html:2705 |  |
| applications.images.06.alt | Mining truck working in an open-pit mine | index.html:2707 |  |
| applications.images.07.alt | Flooded landscape from above | index.html:2709 |  |
| applications.images.08.alt | Circular pivot-irrigation crop fields | index.html:2711 |  |
| applications.images.09.alt | Parking lot from above | index.html:2713 |  |

(Image captions reuse `applications.NN.label` keys.)

## usecases / tiers (Studio / Connect / Custom)

| Key | English | Location | Notes |
|---|---|---|---|
| usecases.section.ariaLabel | Ways to use Makan | index.html:3054 |  |
| usecases.eyebrow | Ways to use Makan | index.html:3056 |  |
| usecases.title | Three ways in. Same index. | index.html:3057 |  |
| usecases.sub | Run it through the dashboard. Plug it into your stack. Or deploy it inside your sovereign environment with a build tailored to your operation. | index.html:3058 |  |
| usecases.studio.name | Studio | index.html:3069 |  |
| usecases.studio.headline | The dashboard your ops team lives in. | index.html:3072 |  |
| usecases.studio.cta | Open Studio | index.html:3073 |  |
| usecases.studio.desc | For monitoring teams running daily intelligence on their AOI. Map, alerts, agent, exports — one screen. | index.html:3076 |  |
| usecases.studio.feature.01 | Live operations map with overlay layers | index.html:3078 |  |
| usecases.studio.feature.02 | Plain-language agent built into the workspace | index.html:3079 |  |
| usecases.studio.feature.03 | Alerts feed with confidence + source citations | index.html:3080 |  |
| usecases.studio.feature.04 | Discoveries, shifts, change-detection over time | index.html:3081 |  |
| usecases.studio.feature.05 | Audit-ready exports — PDF, GeoJSON, CSV | index.html:3082 | keep file format names English |
| usecases.studio.feature.06 | Role-based access for your team | index.html:3083 |  |
| usecases.connect.name | Connect | index.html:3095 |  |
| usecases.connect.badge | Agent-ready | index.html:3097 |  |
| usecases.connect.headline | Plug Makan into your agents and your stack. | index.html:3099 |  |
| usecases.connect.cta | Get a key | index.html:3100 |  |
| usecases.connect.desc | For developers, agentic systems, and applications that need to query the world programmatically. Tool-callable from any LLM. | index.html:3103 |  |
| usecases.connect.feature.01 | Tool-callable schemas — drop into any agent | index.html:3105 |  |
| usecases.connect.feature.02 | Plain-language and structured queries | index.html:3106 |  |
| usecases.connect.feature.03 | Cited returns — events, sensors, hashes | index.html:3107 |  |
| usecases.connect.feature.04 | Webhooks → Slack, PagerDuty, your endpoint | index.html:3108 | keep brand names |
| usecases.connect.feature.05 | Scoped tokens with per-AOI access control | index.html:3109 |  |
| usecases.connect.feature.06 | Native bindings for OpenAI, Anthropic, MCP | index.html:3110 | keep brand names |
| usecases.custom.name | Custom | index.html:3122 |  |
| usecases.custom.headline | A build inside your sovereign environment. | index.html:3125 |  |
| usecases.custom.cta | Talk to us | index.html:3126 |  |
| usecases.custom.desc | For governments, ministries, and strategic operators with sovereign data, custom pipelines, or bespoke integration requirements. | index.html:3129 |  |
| usecases.custom.feature.01 | Deploy in your cloud, on-prem, or air-gapped | index.html:3131 |  |
| usecases.custom.feature.02 | Custom imagery sources + ingestion pipelines | index.html:3132 |  |
| usecases.custom.feature.03 | Integration into your existing operations stack | index.html:3133 |  |
| usecases.custom.feature.04 | Dedicated success engineering + onboarding | index.html:3134 |  |
| usecases.custom.feature.05 | Regional data residency + compliance posture | index.html:3135 |  |
| usecases.custom.feature.06 | Co-developed vertical models for your domain | index.html:3136 |  |

## integrations

| Key | English | Location | Notes |
|---|---|---|---|
| integrations.title | makan integrations. | index.html:3248 | keep lowercase brand style |

## closing (dark "Detect what others miss" hero before form)

| Key | English | Location | Notes |
|---|---|---|---|
| closing.spotlight.title | Detect what others miss. Decide before it costs. | index.html:3671 |  |
| closing.feature.infrastructure | Infrastructure | index.html:3725 |  |
| closing.feature.encroachment | Encroachment | index.html:3726 |  |
| closing.feature.urban | Urban | index.html:3727 |  |
| closing.feature.environmental | Environmental | index.html:3728 |  |
| closing.feature.pipeline | Pipeline | index.html:3729 |  |
| closing.feature.flooddisaster | Flood & Disaster | index.html:3730 |  |
| closing.pill.ariaLabel | Submit demo request | index.html:3733 |  |
| closing.pill.cta | Request a demo → | index.html:3734 |  |

## waitlist (booking form)

| Key | English | Location | Notes |
|---|---|---|---|
| waitlist.eyebrow | Request access | index.html:3676 |  |
| waitlist.title | Book a demo | index.html:3677 |  |
| waitlist.intro | Tell us about your operation. We'll get back within two business days with a tailored walkthrough. | index.html:3678 |  |
| waitlist.field.email.label | Work email | index.html:3682 |  |
| waitlist.field.email.placeholder | name@company.com | index.html:3683 |  |
| waitlist.field.name.label | Full name | index.html:3686 |  |
| waitlist.field.company.label | Company | index.html:3692 |  |
| waitlist.field.industry.label | Industry | index.html:3696 |  |
| waitlist.field.industry.placeholder | Select… | index.html:3698 |  |
| waitlist.field.industry.option.infrastructure | Infrastructure & construction | index.html:3699 |  |
| waitlist.field.industry.option.energy | Energy & pipelines | index.html:3700 |  |
| waitlist.field.industry.option.government | Government | index.html:3701 |  |
| waitlist.field.industry.option.realEstate | Real estate & urban development | index.html:3702 |  |
| waitlist.field.industry.option.defense | Defense & intelligence | index.html:3703 |  |
| waitlist.field.industry.option.environmental | Environmental & disaster | index.html:3704 |  |
| waitlist.field.industry.option.other | Other | index.html:3705 |  |
| waitlist.field.problem.label | What problem are you solving? | index.html:3710 |  |
| waitlist.field.problem.placeholder | e.g. monitor 14,000 km of pipeline corridors for unauthorized construction | index.html:3711 |  |
| waitlist.button.submit | Request a demo → | index.html:3714 |  |
| waitlist.fineprint | No spam. We use your details only to schedule the demo. | index.html:3715 |  |
| waitlist.success.prefix | Got it. | index.html:3718 | bold |
| waitlist.success.body | We'll be in touch shortly at the email you provided. | index.html:3718 |  |
| waitlist.button.submitting | Submitting… | index.html:3784 | JS-set transient state |
| waitlist.pill.submitting | Submitting… | index.html:3787 |  |
| waitlist.pill.success | Got it. We'll be in touch. | index.html:3797 | JS-set success state |

## agentDemo (typing animation inside features card)

| Key | English | Location | Notes |
|---|---|---|---|
| agentDemo.prompt.01 | Flag new construction within 2km of pipeline... | index.html:4447 | keep ellipsis |
| agentDemo.prompt.02 | Compare vegetation loss Q1 vs Q2 in AOI-4... | index.html:4448 |  |
| agentDemo.prompt.03 | Show all unauthorized structures near coast... | index.html:4449 |  |
| agentDemo.prompt.04 | Monitor traffic density change in Zone B... | index.html:4450 |  |
| agentDemo.prompt.05 | Detect solar farm expansion in Tabuk region... | index.html:4451 | Tabuk = تبوك |

---

## dashboard (embedded mock at `/hybrid/dashboard-screenshot.html`)

| Key | English | Location | Notes |
|---|---|---|---|
| dashboard.meta.title | Makan Dashboard | dashboard-screenshot.html:6 |  |
| dashboard.logo.alt | Makan | dashboard-screenshot.html:967 | brand name — keep |
| dashboard.logo.text | Makan | dashboard-screenshot.html:968 |  |
| dashboard.breadcrumb.root | Places | dashboard-screenshot.html:971 |  |
| dashboard.breadcrumb.current | Riyadh · North Corridor | dashboard-screenshot.html:973 |  |
| dashboard.cmdk.title | Command palette | dashboard-screenshot.html:980 | button title |
| dashboard.rail.agent | Agent | dashboard-screenshot.html:1006 |  |
| dashboard.rail.places | Places | dashboard-screenshot.html:1010 |  |
| dashboard.rail.layers | Layers | dashboard-screenshot.html:1014 |  |
| dashboard.rail.discoveries | Discoveries | dashboard-screenshot.html:1018 |  |
| dashboard.rail.shifts | Shifts | dashboard-screenshot.html:1022 |  |
| dashboard.rail.alerts | Alerts | dashboard-screenshot.html:1026 |  |
| dashboard.rail.settings | Settings | dashboard-screenshot.html:1032 |  |
| dashboard.panel.layers.title | Layers | dashboard-screenshot.html:1042 |  |
| dashboard.panel.layers.add | + Add | dashboard-screenshot.html:1045 |  |
| dashboard.panel.layers.group.satellite | Detected · Satellite | dashboard-screenshot.html:1048 |  |
| dashboard.panel.layers.group.ai | Modeled · AI | dashboard-screenshot.html:1066 |  |
| dashboard.panel.layers.group.api | API · Third-party | dashboard-screenshot.html:1079 |  |
| dashboard.panel.layers.group.custom | Custom | dashboard-screenshot.html:1092 |  |
| dashboard.layer.urbanDensity | Urban Density | dashboard-screenshot.html:1053 |  |
| dashboard.layer.construction | Construction | dashboard-screenshot.html:1058 |  |
| dashboard.layer.buildingFootprints | Building Footprints | dashboard-screenshot.html:1063 |  |
| dashboard.layer.disasterRisk | Disaster Risk | dashboard-screenshot.html:1071 |  |
| dashboard.layer.wealthDistribution | Wealth Distribution | dashboard-screenshot.html:1076 |  |
| dashboard.layer.trafficDensity | Traffic Density | dashboard-screenshot.html:1084 |  |
| dashboard.layer.transitLines | Transit Lines | dashboard-screenshot.html:1089 |  |
| dashboard.layer.clientZones | Client Zones | dashboard-screenshot.html:1097 |  |
| dashboard.aoi.label | Active Place | dashboard-screenshot.html:1102 |  |
| dashboard.aoi.name | North Corridor | dashboard-screenshot.html:1105 |  |
| dashboard.map.satellite.alt | Satellite imagery | dashboard-screenshot.html:1113 |  |
| dashboard.map.marker.new | NEW | dashboard-screenshot.html:1151 |  |
| dashboard.map.marker.size | ~400 m² | dashboard-screenshot.html:1157 | preserve `m²` |
| dashboard.map.pulseCard.label | Shift · Live signal | dashboard-screenshot.html:1170 |  |
| dashboard.map.pulseCard.body.prefix | 3 new structures | dashboard-screenshot.html:1173 | bold |
| dashboard.map.pulseCard.body.suffix | detected in North Corridor over the last 14 days. Combined footprint ~1,820 m². Matches commercial construction pattern. | dashboard-screenshot.html:1173 |  |
| dashboard.map.pulseCard.stat.signals.lbl | Signals · 7d | dashboard-screenshot.html:1178 |  |
| dashboard.map.pulseCard.stat.confidence.lbl | Avg conf. | dashboard-screenshot.html:1182 |  |
| dashboard.map.pulseCard.stat.latency.lbl | Latency | dashboard-screenshot.html:1186 |  |
| dashboard.map.pulseCard.action | View in Discoveries → | dashboard-screenshot.html:1189 |  |
| dashboard.map.scrubber.current | Aug 2025 | dashboard-screenshot.html:1198 | translate month name if Arabic |
| dashboard.map.scrubber.startDate | Mar 2024 | dashboard-screenshot.html:1209 |  |
| dashboard.map.scrubber.endDate | Sep 2025 | dashboard-screenshot.html:1209 |  |
| dashboard.agent.title | AI Agent | dashboard-screenshot.html:1216 |  |
| dashboard.agent.status | Active | dashboard-screenshot.html:1217 |  |
| dashboard.agent.msg.you.label | You | dashboard-screenshot.html:1226 |  |
| dashboard.agent.msg.you.body | Analyze this region and identify high growth commercial districts near major transportation infrastructure. | dashboard-screenshot.html:1229 |  |
| dashboard.agent.msg.bot.label | Makan Agent | dashboard-screenshot.html:1237 |  |
| dashboard.agent.msg.bot.body.prefix | Found | dashboard-screenshot.html:1240 |  |
| dashboard.agent.msg.bot.body.bold | 18 newly constructed commercial structures | dashboard-screenshot.html:1240 |  |
| dashboard.agent.msg.bot.body.mid | in North Corridor since Jan 2025 | dashboard-screenshot.html:1240 |  |
| dashboard.agent.msg.bot.body.tail | . Growth is concentrated within 200m of the main transit corridor | dashboard-screenshot.html:1240 |  |
| dashboard.agent.result.title | Discoveries · Summary | dashboard-screenshot.html:1244 |  |
| dashboard.agent.result.count | 18 found | dashboard-screenshot.html:1245 |  |
| dashboard.agent.result.row.commercial | Commercial | dashboard-screenshot.html:1248 |  |
| dashboard.agent.result.row.residential | Residential | dashboard-screenshot.html:1252 |  |
| dashboard.agent.result.row.mixedUse | Mixed-use | dashboard-screenshot.html:1256 |  |
| dashboard.agent.result.row.avgConfidence | Avg. confidence | dashboard-screenshot.html:1260 |  |
| dashboard.agent.result.row.estInvestment | Est. investment | dashboard-screenshot.html:1264 | $2.4B is data |
| dashboard.agent.layers.label | Layers used | dashboard-screenshot.html:1270 |  |
| dashboard.agent.section.discoveries | Discoveries | dashboard-screenshot.html:1287 |  |
| dashboard.agent.section.discoveries.badge | 18 new | dashboard-screenshot.html:1288 |  |
| dashboard.agent.section.shifts | Shifts · last 7 days | dashboard-screenshot.html:1292 |  |
| dashboard.agent.section.shifts.badge | +42% | dashboard-screenshot.html:1293 | data |
| dashboard.agent.section.opportunity | Opportunity Score | dashboard-screenshot.html:1297 |  |
| dashboard.agent.section.opportunity.badge | 87/100 | dashboard-screenshot.html:1298 | data |
| dashboard.agent.input.placeholder | Ask the agent... | dashboard-screenshot.html:1305 |  |
| dashboard.statusbar.connected | Connected | dashboard-screenshot.html:1317 |  |
| dashboard.statusbar.shifts | Shifts active · 18 signals today | dashboard-screenshot.html:1319 |  |
| dashboard.statusbar.zoom | zoom 14.2 · WGS84 | dashboard-screenshot.html:1323 | partly technical |
| dashboard.statusbar.layersOn | 4 layers on | dashboard-screenshot.html:1325 |  |
| dashboard.statusbar.apiOk | API ok | dashboard-screenshot.html:1326 |  |

---

## Section breakdown

| Section | Count |
|---|---:|
| meta | 7 |
| header/nav | 7 |
| hero | 16 |
| about | 1 |
| features (dashboard fan-out) | 29 |
| stats | 4 |
| features (5-card grid) | 20 |
| beforeafter | 26 |
| applications (text slider) | 22 |
| applications.images | 9 |
| usecases / tiers | 38 |
| integrations | 1 |
| closing | 9 |
| waitlist | 24 |
| agentDemo | 5 |
| dashboard | 67 |
| **Total** | **285** (with merged keys ~200 unique) |

## Engineer notes

1. **Hero H1 says `Query the World` (no period).** Canonical = `Query the World.` Fix the markup before translation, or document the inconsistency.
2. **`applications.midTitle.eyebrow` ("SECTION 03")** is rendered via CSS `content:` — needs special handling (swap CSS rule per-locale, or move text into DOM).
3. **JS-set strings:** `waitlist.button.submitting`, `waitlist.pill.submitting`, `waitlist.pill.success` are set from JavaScript. Read them from `window.__i18n` instead of inlining.
4. **Rotating words (`hero.rotate.*`) and typing prompts (`agentDemo.prompt.*`)** live inside `<script>` arrays — wire to i18n lookups, not hardcoded.
5. **Brand exclusions:** `Makan`, `makan.`, `NEOM`, `Riyadh`, `Jeddah`, `Tabuk`, `Sentinel-2`, `Planet Labs`, `Slack`, `PagerDuty`, `OpenAI`, `Anthropic`, `MCP`, `Maxar`, `SAR`, `WGS84`, coordinates, percentages, dollar amounts — all left as data.
6. **Tooltips on dashboard rail (`title="…"`)** duplicate visible feature names — consolidate with shared keys (e.g. `nav.agent`, `nav.places`).
7. **Industry option `Real estate & urban development`** — Saudi-market term likely `عقارات` + `التطوير العمراني`.
8. **Image captions reuse `applications.NN.label`** — don't duplicate in JSON.
