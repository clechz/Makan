/* Makan i18n
 * --------------------------------------------------------------
 * Runtime string swapper for the static landing page.
 *
 *  - Reads `data-i18n="key"` (text content)
 *  - Reads `data-i18n-alt="key"` (alt attribute)
 *  - Reads `data-i18n-placeholder="key"` (placeholder attribute)
 *  - Reads `data-i18n-title="key"` (title attribute)
 *  - Reads `data-i18n-aria="key"` (aria-label attribute)
 *  - Reads `data-i18n-html="key"` (innerHTML — use for rich text only)
 *
 *  Language detection order:
 *    1. ?lang=ar in URL
 *    2. localStorage('makan.lang')
 *    3. <html lang>
 *    4. navigator.language starts with "ar"
 *    5. fallback: "en"
 *
 *  Public API on window.MakanI18n:
 *    .setLang(code)   — sets active language, persists, re-renders
 *    .getLang()       — returns current lang code
 *    .t(key)          — returns translated string for current lang
 *    .DICT            — read-only access to the full dictionary
 *
 *  Also exposes window.__t(key) as a shortcut for scripts that need
 *  translated strings for JS-generated content (rotating words, etc.)
 */
(function () {
  "use strict";

  // ─── Dictionary ───────────────────────────────────────────────
  // EN is the source of truth. AR drafted in Modern Standard Arabic,
  // Saudi B2B register. Brand names, technical terms, file formats,
  // and monospace data strings deliberately left in Latin script per
  // Saudi B2B SaaS convention.
  const DICT = {
    en: {
      // ─ meta ─
      "meta.title": "Makan — Query the World.",
      "meta.description": "Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams.",
      "meta.og.title": "Makan — Query the World.",
      "meta.og.description": "Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams.",
      "meta.twitter.title": "Makan — Query the World.",
      "meta.twitter.description": "Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams.",

      // ─ nav / header ─
      "nav.about": "About",
      "nav.platform": "Platform",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "header.logo.wordmark": "makan.",

      // ─ hero ─
      "hero.title": "Query the World.",
      "hero.tagline": "We observe the surface and tell you what to do about it.",
      "hero.subtitle.prefix": "Intelligence built to understand",
      "hero.scroll.label": "Scroll down",
      "hero.image.alt": "View through a spacecraft porthole",
      "hero.earth.alt": "Earth from orbit",
      "hero.cta.bookDemo": "Book a Demo",

      // rotating words (with trailing period; period is part of the rotation)
      "hero.rotate.01": "the built world.",
      "hero.rotate.02": "the natural world.",
      "hero.rotate.03": "the connected world.",
      "hero.rotate.04": "the changing world.",
      "hero.rotate.05": "the unseen world.",
      "hero.rotate.06": "the regulated world.",
      "hero.rotate.07": "the lived-in world.",
      "hero.rotate.08": "the commercial world.",

      // ─ about / lead ─
      "about.lead.headline": "The physical world is the largest dataset in existence. Most of it unlabeled, all of it unindexed.",

      // ─ features (dashboard fan-out cards) ─
      "features.defineArea.label": "Define area",
      "features.agent.label": "Agent",
      "features.detect.label": "Detect",
      "features.detect.dateLeft": "Mar 2025",
      "features.detect.dateRight": "Sep 2025",
      "features.detect.badge": "3 changes",
      "features.alerts.label": "Alerts",
      "features.alerts.title.prefix": "New structure",
      "features.alerts.title.suffix": "on 5th Ave",
      "features.alerts.desc": "High ROI investment opportunity",
      "features.alerts.body": "<strong>New structure</strong> on 5th Ave<br>High ROI investment opportunity",
      "features.alerts.time": "2 min ago · 96% confidence",
      "features.layers.label": "Layers",
      "features.layers.construction": "Construction activity",
      "features.layers.construction.tag": "seen",
      "features.layers.disaster": "Disaster risk",
      "features.layers.disaster.tag": "modeled",
      "features.layers.wealth": "Wealth distribution",
      "features.layers.wealth.tag": "modeled",
      "features.layers.traffic": "Traffic density",
      "features.layers.traffic.tag": "api",
      "features.layers.custom": "Custom layer",
      "features.layers.custom.tag": "yours",
      "features.monitor.label": "Monitor",
      "features.monitor.month.jan": "Jan",
      "features.monitor.month.mar": "Mar",
      "features.monitor.month.jun": "Jun",
      "features.monitor.month.sep": "Sep",
      "features.monitor.month.now": "Now",
      "features.dashboardChrome.title": "makan — operations dashboard",

      // ─ stats ─
      "stats.area.label": "km²/day",
      "stats.training.label": "training chips",
      "stats.layers.label": "fused layers",
      "stats.resolution.label": "on demand",

      // ─ features (5-card grid) ─
      "features.fgrid.agent.label": "Agent",
      "features.fgrid.agent.title": "Ask questions in plain language",
      "features.fgrid.agent.desc": "Natural-language queries over satellite imagery. \"Show me all new construction within 5 km of the pipeline in the last 90 days.\" The agent searches, cites sources, and returns geolocated results.",
      "features.fgrid.agent.example": "New construction within 5 km of the North Corridor pipeline, last 90 days",
      "features.fgrid.agent.result": "Found 18 discoveries across 3 places",
      "features.fgrid.places.label": "Places",
      "features.fgrid.places.title": "Define the areas you monitor",
      "features.fgrid.places.desc": "Draw boundaries, name them, track them. Every place becomes a living dataset — continuously updated with every satellite pass.",
      "features.fgrid.places.example.01": "Riyadh · North Corridor",
      "features.fgrid.places.example.02": "Jeddah · Coastal Zone",
      "features.fgrid.places.example.03": "NEOM · Bay Area",
      "features.fgrid.layers.label": "Layers",
      "features.fgrid.layers.title": "Stack data on one map",
      "features.fgrid.layers.desc": "Construction, risk, wealth, density — satellite-detected, AI-modeled, and API-sourced.",
      "features.fgrid.discoveries.label": "Discoveries",
      "features.fgrid.discoveries.title": "What changed, where, when",
      "features.fgrid.discoveries.desc": "New structures, terrain shifts, anomalies — timestamped, geolocated, scored with confidence.",
      "features.fgrid.shifts.label": "Shifts",
      "features.fgrid.shifts.title": "Track evolution over time",
      "features.fgrid.shifts.desc": "Scrub through satellite passes, compare dates, catch anomalies the moment they deviate.",

      // ─ beforeafter ─
      "beforeafter.eyebrow": "See what others miss",
      "beforeafter.title": "No tool above does what Makan does.",
      "beforeafter.card.vectors.label": "The world as vectors",
      "beforeafter.card.multisource.label": "Multi-source reasoning",
      "beforeafter.card.multisource.summary": "→ one reconciled answer",
      "beforeafter.card.proof.label": "Pixel-traceable proof",
      "beforeafter.card.proof.statement": "Every detection",
      "beforeafter.card.proof.key.sensor": "Sensor",
      "beforeafter.card.proof.key.pass": "Pass",
      "beforeafter.card.proof.key.hash": "Hash",
      "beforeafter.card.nolockin.label": "No data lock-in",
      "beforeafter.card.nolockin.left": "your data",
      "beforeafter.card.nolockin.right": "your data",
      "beforeafter.card.sovereign.label": "Sovereign deploy",
      "beforeafter.card.sovereign.option.cloud": "Your cloud",
      "beforeafter.card.sovereign.option.onprem": "On-prem",
      "beforeafter.card.sovereign.option.airgapped": "Air-gapped",
      "beforeafter.card.sovereign.footnote": "same product",
      "beforeafter.card.vertical.label": "Vertical intelligence",
      "beforeafter.card.vertical.eyebrow": "DETECTION",
      "beforeafter.card.vertical.example": "\"new structure near pipeline\"",
      "beforeafter.card.vertical.aux": "Makan reads context",
      "beforeafter.card.vertical.output": "Encroachment",
      "beforeafter.window.title": "makan — before / after analysis",
      "beforeafter.slider.alt.before": "Before — raw satellite imagery",
      "beforeafter.slider.alt.after": "After — Makan intelligence overlay",

      // ─ applications ─
      "applications.midTitle.eyebrow": "SECTION 03",
      "applications.midTitle": "What we detect.",
      "applications.hint": "← Drag to explore →",
      "applications.01.label": "Infrastructure",
      "applications.01.desc": "Track construction progress week-over-week against the approved baseline.",
      "applications.02.label": "Encroachment",
      "applications.02.desc": "Monitor corridors for unauthorized construction and land-use violations.",
      "applications.03.label": "Urban Intelligence",
      "applications.03.desc": "Map transit-driven development density across station catchment areas.",
      "applications.04.label": "Environmental",
      "applications.04.desc": "Continuous ESG baseline — vegetation, moisture, disturbance — audit-ready.",
      "applications.05.label": "Pipeline",
      "applications.05.desc": "Surface moisture and subsidence alerts before the $2.8M rupture happens.",
      "applications.06.label": "Mining",
      "applications.06.desc": "Weekly change alerts on dig progression, tailings, and restricted zones.",
      "applications.07.label": "Flood & Disaster",
      "applications.07.desc": "Live terrain models for flood propagation and emergency asset placement.",
      "applications.08.label": "Agriculture",
      "applications.08.desc": "Crop health, irrigation activity, and groundwater extraction tracked per pass.",
      "applications.09.label": "Retail & Sites",
      "applications.09.desc": "Parking turnover, foot traffic, and peak-hour patterns from satellite frames.",
      "applications.images.01.alt": "Construction site from above",
      "applications.images.02.alt": "Satellite-style view of pipeline corridor with new structures",
      "applications.images.03.alt": "Dense city seen from the air at night",
      "applications.images.04.alt": "Forest canopy from above",
      "applications.images.05.alt": "Industrial pipeline running through mountain landscape",
      "applications.images.06.alt": "Mining truck working in an open-pit mine",
      "applications.images.07.alt": "Flooded landscape from above",
      "applications.images.08.alt": "Circular pivot-irrigation crop fields",
      "applications.images.09.alt": "Parking lot from above",

      // ─ usecases / tiers ─
      "usecases.section.ariaLabel": "Ways to use Makan",
      "usecases.eyebrow": "Ways to use Makan",
      "usecases.title": "Three ways in. Same index.",
      "usecases.sub": "Run it through the dashboard. Plug it into your stack. Or deploy it inside your sovereign environment with a build tailored to your operation.",
      "usecases.studio.name": "Studio",
      "usecases.studio.headline": "The dashboard your ops team lives in.",
      "usecases.studio.cta": "Open Studio",
      "usecases.studio.desc": "For monitoring teams running daily intelligence on their AOI. Map, alerts, agent, exports — one screen.",
      "usecases.studio.feature.01": "Live operations map with overlay layers",
      "usecases.studio.feature.02": "Plain-language agent built into the workspace",
      "usecases.studio.feature.03": "Alerts feed with confidence + source citations",
      "usecases.studio.feature.04": "Discoveries, shifts, change-detection over time",
      "usecases.studio.feature.05": "Audit-ready exports — PDF, GeoJSON, CSV",
      "usecases.studio.feature.06": "Role-based access for your team",
      "usecases.connect.name": "Connect",
      "usecases.connect.badge": "Agent-ready",
      "usecases.connect.headline": "Plug Makan into your agents and your stack.",
      "usecases.connect.cta": "Get a key",
      "usecases.connect.desc": "For developers, agentic systems, and applications that need to query the world programmatically. Tool-callable from any LLM.",
      "usecases.connect.feature.01": "Tool-callable schemas — drop into any agent",
      "usecases.connect.feature.02": "Plain-language and structured queries",
      "usecases.connect.feature.03": "Cited returns — events, sensors, hashes",
      "usecases.connect.feature.04": "Webhooks → Slack, PagerDuty, your endpoint",
      "usecases.connect.feature.05": "Scoped tokens with per-AOI access control",
      "usecases.connect.feature.06": "Native bindings for OpenAI, Anthropic, MCP",
      "usecases.custom.name": "Custom",
      "usecases.custom.headline": "A build inside your sovereign environment.",
      "usecases.custom.cta": "Talk to us",
      "usecases.custom.desc": "For governments, ministries, and strategic operators with sovereign data, custom pipelines, or bespoke integration requirements.",
      "usecases.custom.feature.01": "Deploy in your cloud, on-prem, or air-gapped",
      "usecases.custom.feature.02": "Custom imagery sources + ingestion pipelines",
      "usecases.custom.feature.03": "Integration into your existing operations stack",
      "usecases.custom.feature.04": "Dedicated success engineering + onboarding",
      "usecases.custom.feature.05": "Regional data residency + compliance posture",
      "usecases.custom.feature.06": "Co-developed vertical models for your domain",

      // ─ integrations ─
      "integrations.title": "makan integrations.",

      // ─ closing ─
      "closing.spotlight.title": "Detect what others miss. Decide before it costs.",
      "closing.feature.infrastructure": "Infrastructure",
      "closing.feature.encroachment": "Encroachment",
      "closing.feature.urban": "Urban",
      "closing.feature.environmental": "Environmental",
      "closing.feature.pipeline": "Pipeline",
      "closing.feature.flooddisaster": "Flood & Disaster",
      "closing.pill.ariaLabel": "Submit demo request",
      "closing.pill.cta": "Request a demo →",

      // ─ waitlist ─
      "waitlist.eyebrow": "Request access",
      "waitlist.title": "Book a demo",
      "waitlist.intro": "Tell us about your operation. We'll get back within two business days with a tailored walkthrough.",
      "waitlist.field.email.label": "Work email",
      "waitlist.field.email.placeholder": "name@company.com",
      "waitlist.field.name.label": "Full name",
      "waitlist.field.company.label": "Company",
      "waitlist.field.industry.label": "Industry",
      "waitlist.field.industry.placeholder": "Select…",
      "waitlist.field.industry.option.infrastructure": "Infrastructure & construction",
      "waitlist.field.industry.option.energy": "Energy & pipelines",
      "waitlist.field.industry.option.government": "Government",
      "waitlist.field.industry.option.realEstate": "Real estate & urban development",
      "waitlist.field.industry.option.defense": "Defense & intelligence",
      "waitlist.field.industry.option.environmental": "Environmental & disaster",
      "waitlist.field.industry.option.other": "Other",
      "waitlist.field.problem.label": "What problem are you solving?",
      "waitlist.field.problem.placeholder": "e.g. monitor 14,000 km of pipeline corridors for unauthorized construction",
      "waitlist.button.submit": "Request a demo →",
      "waitlist.fineprint": "No spam. We use your details only to schedule the demo.",
      "waitlist.success.prefix": "Got it.",
      "waitlist.success.body": "We'll be in touch shortly at the email you provided.",
      "waitlist.button.submitting": "Submitting…",
      "waitlist.pill.submitting": "Submitting…",
      "waitlist.pill.success": "Got it. We'll be in touch.",

      // ─ agent demo prompts (rotating) ─
      "agentDemo.prompt.01": "Flag new construction within 2km of pipeline...",
      "agentDemo.prompt.02": "Compare vegetation loss Q1 vs Q2 in AOI-4...",
      "agentDemo.prompt.03": "Show all unauthorized structures near coast...",
      "agentDemo.prompt.04": "Monitor traffic density change in Zone B...",
      "agentDemo.prompt.05": "Detect solar farm expansion in Tabuk region...",

      // ─ dashboard mockup (dashboard-screenshot.html) ─
      "dashboard.meta.title": "Makan Dashboard",
      "dashboard.logo.alt": "Makan",
      "dashboard.breadcrumb.root": "Places",
      "dashboard.breadcrumb.current": "Riyadh · North Corridor",
      "dashboard.cmdk.title": "Command palette",
      "dashboard.rail.agent": "Agent",
      "dashboard.rail.places": "Places",
      "dashboard.rail.layers": "Layers",
      "dashboard.rail.discoveries": "Discoveries",
      "dashboard.rail.shifts": "Shifts",
      "dashboard.rail.alerts": "Alerts",
      "dashboard.rail.settings": "Settings",
      "dashboard.panel.layers.title": "Layers",
      "dashboard.panel.layers.add": "+ Add",
      "dashboard.panel.layers.group.satellite": "Detected · Satellite",
      "dashboard.panel.layers.group.ai": "Modeled · AI",
      "dashboard.panel.layers.group.api": "API · Third-party",
      "dashboard.panel.layers.group.custom": "Custom",
      "dashboard.layer.urbanDensity": "Urban Density",
      "dashboard.layer.construction": "Construction",
      "dashboard.layer.buildingFootprints": "Building Footprints",
      "dashboard.layer.disasterRisk": "Disaster Risk",
      "dashboard.layer.wealthDistribution": "Wealth Distribution",
      "dashboard.layer.trafficDensity": "Traffic Density",
      "dashboard.layer.transitLines": "Transit Lines",
      "dashboard.layer.clientZones": "Client Zones",
      "dashboard.aoi.label": "Active Place",
      "dashboard.aoi.name": "North Corridor",
      "dashboard.map.satellite.alt": "Satellite imagery",
      "dashboard.map.marker.new": "NEW",
      "dashboard.map.marker.size": "~400 m²",
      "dashboard.map.pulseCard.label": "Shift · Live signal",
      "dashboard.map.pulseCard.body.prefix": "3 new structures",
      "dashboard.map.pulseCard.body.suffix": " detected in North Corridor over the last 14 days. Combined footprint ~1,820 m². Matches commercial construction pattern.",
      "dashboard.map.pulseCard.stat.signals.lbl": "Signals · 7d",
      "dashboard.map.pulseCard.stat.confidence.lbl": "Avg conf.",
      "dashboard.map.pulseCard.stat.latency.lbl": "Latency",
      "dashboard.map.pulseCard.action": "View in Discoveries →",
      "dashboard.map.scrubber.current": "Aug 2025",
      "dashboard.map.scrubber.startDate": "Mar 2024",
      "dashboard.map.scrubber.endDate": "Sep 2025",
      "dashboard.agent.title": "AI Agent",
      "dashboard.agent.status": "Active",
      "dashboard.agent.msg.you.label": "You",
      "dashboard.agent.msg.you.body": "Analyze this region and identify high growth commercial districts near major transportation infrastructure.",
      "dashboard.agent.msg.bot.label": "Makan Agent",
      "dashboard.agent.result.title": "Discoveries · Summary",
      "dashboard.agent.result.count": "18 found",
      "dashboard.agent.result.row.commercial": "Commercial",
      "dashboard.agent.result.row.residential": "Residential",
      "dashboard.agent.result.row.mixedUse": "Mixed-use",
      "dashboard.agent.result.row.avgConfidence": "Avg. confidence",
      "dashboard.agent.result.row.estInvestment": "Est. investment",
      "dashboard.agent.layers.label": "Layers used",
      "dashboard.agent.section.discoveries": "Discoveries",
      "dashboard.agent.section.shifts": "Shifts · last 7 days",
      "dashboard.agent.section.opportunity": "Opportunity Score",
      "dashboard.agent.input.placeholder": "Ask the agent...",
      "dashboard.statusbar.connected": "Connected",
      "dashboard.statusbar.shifts": "Shifts active · 18 signals today",
      "dashboard.statusbar.zoom": "zoom 14.2 · WGS84",
      "dashboard.statusbar.layersOn": "4 layers on",
      "dashboard.statusbar.apiOk": "API ok"
    },

    // ─────────────────────────────────────────────────────────────
    //  ARABIC — Modern Standard, Saudi B2B register.
    //  Brand names, monospace data, file formats, technical SaaS
    //  terms kept in Latin script per Saudi convention.
    // ─────────────────────────────────────────────────────────────
    ar: {
      // ─ meta ─
      "meta.title": "مكان — اسأل العالم.",
      "meta.description": "تفهرس مكان العالم الفيزيائي من المدار. صور أقمار، وتمثيلات متجهة، وتنبيهات تشغيلية لفرق المؤسسات.",
      "meta.og.title": "مكان — اسأل العالم.",
      "meta.og.description": "تفهرس مكان العالم الفيزيائي من المدار. صور أقمار، وتمثيلات متجهة، وتنبيهات تشغيلية لفرق المؤسسات.",
      "meta.twitter.title": "مكان — اسأل العالم.",
      "meta.twitter.description": "تفهرس مكان العالم الفيزيائي من المدار. صور أقمار، وتمثيلات متجهة، وتنبيهات تشغيلية لفرق المؤسسات.",

      // ─ nav / header ─
      "nav.about": "من نحن",
      "nav.platform": "المنصة",
      "nav.process": "كيف نعمل",
      "nav.contact": "تواصل معنا",
      "header.logo.wordmark": "مكان.",

      // ─ hero ─
      "hero.title": "اسأل العالم.",
      "hero.tagline": "نراقب سطح الأرض ونخبرك بما يجب فعله.",
      "hero.subtitle.prefix": "ذكاء مبنيّ لفهم",
      "hero.scroll.label": "اسحب للأسفل",
      "hero.image.alt": "إطلالة من كوّة مركبة فضائية",
      "hero.earth.alt": "الأرض من المدار",
      "hero.cta.bookDemo": "احجز عرضاً",

      // rotating words
      "hero.rotate.01": "العالم المبنيّ.",
      "hero.rotate.02": "العالم الطبيعي.",
      "hero.rotate.03": "العالم المترابط.",
      "hero.rotate.04": "العالم المتغيّر.",
      "hero.rotate.05": "العالم غير المرئي.",
      "hero.rotate.06": "العالم المنظَّم.",
      "hero.rotate.07": "العالم المأهول.",
      "hero.rotate.08": "العالم التجاري.",

      // ─ about / lead ─
      "about.lead.headline": "العالم الفيزيائي أكبر مجموعة بيانات على الإطلاق. أغلبه غير مُصنَّف، وكلّه غير مُفهرَس.",

      // ─ features (dashboard fan-out) ─
      "features.defineArea.label": "حدّد المنطقة",
      "features.agent.label": "الوكيل",
      "features.detect.label": "اكتشف",
      "features.detect.dateLeft": "مارس 2025",
      "features.detect.dateRight": "سبتمبر 2025",
      "features.detect.badge": "٣ تغيّرات",
      "features.alerts.label": "التنبيهات",
      "features.alerts.title.prefix": "منشأة جديدة",
      "features.alerts.title.suffix": "في الجادة الخامسة",
      "features.alerts.desc": "فرصة استثمارية ذات عائد مرتفع",
      "features.alerts.body": "<strong>منشأة جديدة</strong> في الجادة الخامسة<br>فرصة استثمارية ذات عائد مرتفع",
      "features.alerts.time": "قبل دقيقتين · ثقة 96%",
      "features.layers.label": "الطبقات",
      "features.layers.construction": "نشاط البناء",
      "features.layers.construction.tag": "مرصود",
      "features.layers.disaster": "مخاطر الكوارث",
      "features.layers.disaster.tag": "نمذجة",
      "features.layers.wealth": "توزيع الثروة",
      "features.layers.wealth.tag": "نمذجة",
      "features.layers.traffic": "كثافة المرور",
      "features.layers.traffic.tag": "api",
      "features.layers.custom": "طبقة مخصّصة",
      "features.layers.custom.tag": "خاصة بك",
      "features.monitor.label": "راقِب",
      "features.monitor.month.jan": "يناير",
      "features.monitor.month.mar": "مارس",
      "features.monitor.month.jun": "يونيو",
      "features.monitor.month.sep": "سبتمبر",
      "features.monitor.month.now": "الآن",
      "features.dashboardChrome.title": "مكان — لوحة العمليات",

      // ─ stats ─
      "stats.area.label": "كم²/يوم",
      "stats.training.label": "شريحة تدريبية",
      "stats.layers.label": "طبقة مدمجة",
      "stats.resolution.label": "عند الطلب",

      // ─ features (5-card grid) ─
      "features.fgrid.agent.label": "الوكيل",
      "features.fgrid.agent.title": "اسأل بلغة طبيعية",
      "features.fgrid.agent.desc": "استعلامات بلغة طبيعية على صور الأقمار. \"أرني كل البناء الجديد ضمن خمسة كيلومترات من خط الأنابيب خلال الـ٩٠ يوماً الماضية.\" يبحث الوكيل، ويستشهد بالمصادر، ويُعيد نتائج محدَّدة جغرافياً.",
      "features.fgrid.agent.example": "بناء جديد ضمن 5 كم من خط أنابيب الممر الشمالي، آخر 90 يوماً",
      "features.fgrid.agent.result": "18 اكتشافاً في 3 مواقع",
      "features.fgrid.places.label": "المواقع",
      "features.fgrid.places.title": "حدّد المناطق التي تراقبها",
      "features.fgrid.places.desc": "ارسم الحدود، سَمِّها، تابعها. كل موقع يصبح مجموعة بيانات حيّة — تتحدّث مع كل مرور قمر صناعي.",
      "features.fgrid.places.example.01": "الرياض · الممر الشمالي",
      "features.fgrid.places.example.02": "جدة · المنطقة الساحلية",
      "features.fgrid.places.example.03": "نيوم · منطقة الخليج",
      "features.fgrid.layers.label": "الطبقات",
      "features.fgrid.layers.title": "كدّس البيانات على خريطة واحدة",
      "features.fgrid.layers.desc": "بناء، مخاطر، ثروة، كثافة — مرصودة من الأقمار، أو مُنمذَجة بالذكاء الاصطناعي، أو واردة من واجهات API.",
      "features.fgrid.discoveries.label": "الاكتشافات",
      "features.fgrid.discoveries.title": "ما الذي تغيّر، أين، ومتى",
      "features.fgrid.discoveries.desc": "منشآت جديدة، تحولات في التضاريس، شذوذات — موسومة بالزمن والموقع ودرجة الثقة.",
      "features.fgrid.shifts.label": "التحوّلات",
      "features.fgrid.shifts.title": "تتبّع التطور عبر الزمن",
      "features.fgrid.shifts.desc": "تنقّل عبر مرورات الأقمار، قارن التواريخ، والتقط الشذوذ لحظة حدوثه.",

      // ─ beforeafter ─
      "beforeafter.eyebrow": "اكتشف ما لا يراه غيرنا",
      "beforeafter.title": "ما من أداة أعلاه تفعل ما تفعله مكان.",
      "beforeafter.card.vectors.label": "العالم متمثّلاً متجهات",
      "beforeafter.card.multisource.label": "استدلال متعدد المصادر",
      "beforeafter.card.multisource.summary": "→ إجابة واحدة موحَّدة",
      "beforeafter.card.proof.label": "إثبات قابل للتتبّع بكسلاً ببكسل",
      "beforeafter.card.proof.statement": "كل اكتشاف",
      "beforeafter.card.proof.key.sensor": "المستشعِر",
      "beforeafter.card.proof.key.pass": "المرور",
      "beforeafter.card.proof.key.hash": "البصمة",
      "beforeafter.card.nolockin.label": "لا قيد على بياناتك",
      "beforeafter.card.nolockin.left": "بياناتك",
      "beforeafter.card.nolockin.right": "بياناتك",
      "beforeafter.card.sovereign.label": "نشر سيادي",
      "beforeafter.card.sovereign.option.cloud": "سحابتك",
      "beforeafter.card.sovereign.option.onprem": "داخل مقرّك",
      "beforeafter.card.sovereign.option.airgapped": "معزول الشبكة",
      "beforeafter.card.sovereign.footnote": "المنتج نفسه",
      "beforeafter.card.vertical.label": "ذكاء قطاعي",
      "beforeafter.card.vertical.eyebrow": "كشف",
      "beforeafter.card.vertical.example": "\"منشأة جديدة قرب خط الأنابيب\"",
      "beforeafter.card.vertical.aux": "مكان تقرأ السياق",
      "beforeafter.card.vertical.output": "تعدٍّ",
      "beforeafter.window.title": "مكان — تحليل قبل / بعد",
      "beforeafter.slider.alt.before": "قبل — صورة قمر صناعي خام",
      "beforeafter.slider.alt.after": "بعد — طبقة ذكاء مكان",

      // ─ applications ─
      "applications.midTitle.eyebrow": "القسم 03",
      "applications.midTitle": "ما الذي نكتشفه.",
      "applications.hint": "← اسحب للاستكشاف →",
      "applications.01.label": "البنية التحتية",
      "applications.01.desc": "تابع تقدم البناء أسبوعاً بأسبوع مقابل الخط الأساسي المعتمَد.",
      "applications.02.label": "التعدّيات",
      "applications.02.desc": "راقب الممرات لرصد البناء غير المرخّص ومخالفات استخدام الأراضي.",
      "applications.03.label": "الذكاء العمراني",
      "applications.03.desc": "ارسم كثافة التطوير المدفوع بالنقل عبر مناطق خدمة المحطات.",
      "applications.04.label": "البيئة",
      "applications.04.desc": "أساس ESG مستمر — غطاء نباتي، رطوبة، اضطراب — جاهز للتدقيق.",
      "applications.05.label": "خطوط الأنابيب",
      "applications.05.desc": "تنبيهات الرطوبة السطحية والهبوط قبل وقوع انفجار بكلفة $2.8M.",
      "applications.06.label": "التعدين",
      "applications.06.desc": "تنبيهات تغيّر أسبوعية لتقدم الحفر، المخلفات، والمناطق المقيَّدة.",
      "applications.07.label": "السيول والكوارث",
      "applications.07.desc": "نماذج تضاريس حيّة لانتشار السيول وتوزيع الأصول الطارئة.",
      "applications.08.label": "الزراعة",
      "applications.08.desc": "صحة المحاصيل، نشاط الريّ، واستخراج المياه الجوفية — في كل مرور.",
      "applications.09.label": "التجزئة والمواقع",
      "applications.09.desc": "دوران المواقف، حركة الزوار، وأنماط ساعات الذروة من صور الأقمار.",
      "applications.images.01.alt": "موقع بناء من الأعلى",
      "applications.images.02.alt": "إطلالة شبيهة بصور الأقمار على ممر خط أنابيب مع منشآت جديدة",
      "applications.images.03.alt": "مدينة كثيفة ليلاً من الجو",
      "applications.images.04.alt": "غطاء غابات من الأعلى",
      "applications.images.05.alt": "خط أنابيب صناعي يمر عبر منظر جبلي",
      "applications.images.06.alt": "شاحنة تعدين تعمل في منجم مفتوح",
      "applications.images.07.alt": "منظر مغمور بالسيول من الأعلى",
      "applications.images.08.alt": "حقول ريّ محورية دائرية",
      "applications.images.09.alt": "موقف سيارات من الأعلى",

      // ─ usecases / tiers ─
      "usecases.section.ariaLabel": "طرق استخدام مكان",
      "usecases.eyebrow": "طرق استخدام مكان",
      "usecases.title": "ثلاث مداخل. فهرس واحد.",
      "usecases.sub": "شغّلها عبر اللوحة. أو اربطها بمنظومتك. أو انشرها داخل بيئتك السيادية ببنية مفصَّلة لعملياتك.",
      "usecases.studio.name": "Studio",
      "usecases.studio.headline": "اللوحة التي تعيش فيها فرق العمليات.",
      "usecases.studio.cta": "افتح Studio",
      "usecases.studio.desc": "لفرق المراقبة التي تشغّل ذكاء يومياً على منطقة الاهتمام. خريطة، تنبيهات، وكيل، تصدير — في شاشة واحدة.",
      "usecases.studio.feature.01": "خريطة عمليات حيّة بطبقات متراكبة",
      "usecases.studio.feature.02": "وكيل بلغة طبيعية مدمج في بيئة العمل",
      "usecases.studio.feature.03": "تغذية تنبيهات مع درجة ثقة واستشهاد المصادر",
      "usecases.studio.feature.04": "اكتشافات، تحوّلات، كشف التغيّر عبر الزمن",
      "usecases.studio.feature.05": "تصدير جاهز للتدقيق — PDF, GeoJSON, CSV",
      "usecases.studio.feature.06": "صلاحيات وصول حسب الدور لفريقك",
      "usecases.connect.name": "Connect",
      "usecases.connect.badge": "جاهز للوكلاء",
      "usecases.connect.headline": "اربط مكان بوكلائك ومنظومتك.",
      "usecases.connect.cta": "احصل على مفتاح",
      "usecases.connect.desc": "للمطورين، والأنظمة الوكيلية، والتطبيقات التي تحتاج استعلام العالم برمجياً. قابلة للاستدعاء أداةً من أي نموذج لغوي.",
      "usecases.connect.feature.01": "مخططات قابلة للاستدعاء أداةً — أدرجها في أي وكيل",
      "usecases.connect.feature.02": "استعلامات بلغة طبيعية ومنظَّمة",
      "usecases.connect.feature.03": "إرجاعات موثَّقة — أحداث، مستشعرات، بصمات",
      "usecases.connect.feature.04": "Webhooks → Slack, PagerDuty, نقطتك الطرفية",
      "usecases.connect.feature.05": "رموز محصورة بصلاحيات لكل منطقة اهتمام",
      "usecases.connect.feature.06": "روابط أصلية لـ OpenAI, Anthropic, MCP",
      "usecases.custom.name": "Custom",
      "usecases.custom.headline": "نشر داخل بيئتك السيادية.",
      "usecases.custom.cta": "تواصل معنا",
      "usecases.custom.desc": "للحكومات، والوزارات، والمشغّلين الاستراتيجيين الذين لديهم بيانات سيادية، أو خطوط أنابيب مخصّصة، أو متطلبات تكامل خاصة.",
      "usecases.custom.feature.01": "نشر في سحابتك، أو داخل مقرّك، أو معزولاً عن الشبكة",
      "usecases.custom.feature.02": "مصادر صور مخصّصة + خطوط استقبال",
      "usecases.custom.feature.03": "تكامل مع منظومة عملياتك القائمة",
      "usecases.custom.feature.04": "هندسة نجاح مخصّصة + استئناس فريقك",
      "usecases.custom.feature.05": "إقامة بيانات إقليمية + التزام بمتطلبات الامتثال",
      "usecases.custom.feature.06": "نماذج قطاعية مطوَّرة بشكل مشترك لمجالك",

      // ─ integrations ─
      "integrations.title": "تكاملات مكان.",

      // ─ closing ─
      "closing.spotlight.title": "اكشف ما يفوّته غيرك. قرّر قبل أن يكلّفك.",
      "closing.feature.infrastructure": "البنية التحتية",
      "closing.feature.encroachment": "التعدّيات",
      "closing.feature.urban": "العمران",
      "closing.feature.environmental": "البيئة",
      "closing.feature.pipeline": "خطوط الأنابيب",
      "closing.feature.flooddisaster": "السيول والكوارث",
      "closing.pill.ariaLabel": "إرسال طلب عرض",
      "closing.pill.cta": "اطلب عرضاً →",

      // ─ waitlist ─
      "waitlist.eyebrow": "اطلب الوصول",
      "waitlist.title": "احجز عرضاً",
      "waitlist.intro": "حدّثنا عن عملياتك. سنرد خلال يومَي عمل بجولة مخصَّصة.",
      "waitlist.field.email.label": "بريد العمل",
      "waitlist.field.email.placeholder": "name@company.com",
      "waitlist.field.name.label": "الاسم الكامل",
      "waitlist.field.company.label": "الشركة",
      "waitlist.field.industry.label": "القطاع",
      "waitlist.field.industry.placeholder": "اختر…",
      "waitlist.field.industry.option.infrastructure": "بنية تحتية وإنشاء",
      "waitlist.field.industry.option.energy": "طاقة وخطوط أنابيب",
      "waitlist.field.industry.option.government": "حكومي",
      "waitlist.field.industry.option.realEstate": "عقارات وتطوير عمراني",
      "waitlist.field.industry.option.defense": "دفاع واستخبارات",
      "waitlist.field.industry.option.environmental": "بيئة وكوارث",
      "waitlist.field.industry.option.other": "أخرى",
      "waitlist.field.problem.label": "ما المشكلة التي تحلّها؟",
      "waitlist.field.problem.placeholder": "مثال: مراقبة 14,000 كم من ممرات خطوط الأنابيب لرصد البناء غير المرخّص",
      "waitlist.button.submit": "اطلب عرضاً →",
      "waitlist.fineprint": "بدون إزعاج. نستخدم تفاصيلك فقط لجدولة العرض.",
      "waitlist.success.prefix": "تم.",
      "waitlist.success.body": "سنتواصل قريباً على البريد الذي قدّمته.",
      "waitlist.button.submitting": "جارٍ الإرسال…",
      "waitlist.pill.submitting": "جارٍ الإرسال…",
      "waitlist.pill.success": "تم. سنتواصل قريباً.",

      // ─ agent demo prompts ─
      "agentDemo.prompt.01": "ارصد البناء الجديد ضمن 2 كم من خط الأنابيب...",
      "agentDemo.prompt.02": "قارن فقد الغطاء النباتي بين الربع الأول والثاني في AOI-4...",
      "agentDemo.prompt.03": "أظهر كل المنشآت غير المرخّصة قرب الساحل...",
      "agentDemo.prompt.04": "راقب تغيّر كثافة المرور في المنطقة B...",
      "agentDemo.prompt.05": "اكتشف توسّع مزارع الطاقة الشمسية في منطقة تبوك...",

      // ─ dashboard mockup ─
      "dashboard.meta.title": "لوحة مكان",
      "dashboard.logo.alt": "مكان",
      "dashboard.breadcrumb.root": "المواقع",
      "dashboard.breadcrumb.current": "الرياض · الممر الشمالي",
      "dashboard.cmdk.title": "لوحة الأوامر",
      "dashboard.rail.agent": "الوكيل",
      "dashboard.rail.places": "المواقع",
      "dashboard.rail.layers": "الطبقات",
      "dashboard.rail.discoveries": "الاكتشافات",
      "dashboard.rail.shifts": "التحوّلات",
      "dashboard.rail.alerts": "التنبيهات",
      "dashboard.rail.settings": "الإعدادات",
      "dashboard.panel.layers.title": "الطبقات",
      "dashboard.panel.layers.add": "+ إضافة",
      "dashboard.panel.layers.group.satellite": "مرصود · قمر صناعي",
      "dashboard.panel.layers.group.ai": "نمذجة · ذكاء اصطناعي",
      "dashboard.panel.layers.group.api": "API · طرف ثالث",
      "dashboard.panel.layers.group.custom": "مخصّص",
      "dashboard.layer.urbanDensity": "الكثافة العمرانية",
      "dashboard.layer.construction": "البناء",
      "dashboard.layer.buildingFootprints": "بصمات المباني",
      "dashboard.layer.disasterRisk": "مخاطر الكوارث",
      "dashboard.layer.wealthDistribution": "توزيع الثروة",
      "dashboard.layer.trafficDensity": "كثافة المرور",
      "dashboard.layer.transitLines": "خطوط النقل",
      "dashboard.layer.clientZones": "مناطق العملاء",
      "dashboard.aoi.label": "الموقع النشط",
      "dashboard.aoi.name": "الممر الشمالي",
      "dashboard.map.satellite.alt": "صور قمر صناعي",
      "dashboard.map.marker.new": "جديد",
      "dashboard.map.marker.size": "~400 م²",
      "dashboard.map.pulseCard.label": "تحوّل · إشارة حيّة",
      "dashboard.map.pulseCard.body.prefix": "3 منشآت جديدة",
      "dashboard.map.pulseCard.body.suffix": " مرصودة في الممر الشمالي خلال آخر 14 يوماً. مساحة مجمَّعة ~1,820 م². تطابق نمط بناء تجاري.",
      "dashboard.map.pulseCard.stat.signals.lbl": "إشارات · 7 أيام",
      "dashboard.map.pulseCard.stat.confidence.lbl": "متوسط الثقة",
      "dashboard.map.pulseCard.stat.latency.lbl": "زمن الاستجابة",
      "dashboard.map.pulseCard.action": "اعرض في الاكتشافات →",
      "dashboard.map.scrubber.current": "أغسطس 2025",
      "dashboard.map.scrubber.startDate": "مارس 2024",
      "dashboard.map.scrubber.endDate": "سبتمبر 2025",
      "dashboard.agent.title": "وكيل الذكاء",
      "dashboard.agent.status": "نشط",
      "dashboard.agent.msg.you.label": "أنت",
      "dashboard.agent.msg.you.body": "حلّل هذه المنطقة وحدّد الأحياء التجارية عالية النمو قرب البنية التحتية الرئيسية للنقل.",
      "dashboard.agent.msg.bot.label": "وكيل مكان",
      "dashboard.agent.result.title": "الاكتشافات · ملخّص",
      "dashboard.agent.result.count": "18 نتيجة",
      "dashboard.agent.result.row.commercial": "تجاري",
      "dashboard.agent.result.row.residential": "سكني",
      "dashboard.agent.result.row.mixedUse": "مختلط الاستخدام",
      "dashboard.agent.result.row.avgConfidence": "متوسط الثقة",
      "dashboard.agent.result.row.estInvestment": "الاستثمار المقدَّر",
      "dashboard.agent.layers.label": "الطبقات المستخدَمة",
      "dashboard.agent.section.discoveries": "الاكتشافات",
      "dashboard.agent.section.shifts": "التحوّلات · آخر 7 أيام",
      "dashboard.agent.section.opportunity": "درجة الفرصة",
      "dashboard.agent.input.placeholder": "اسأل الوكيل...",
      "dashboard.statusbar.connected": "متصل",
      "dashboard.statusbar.shifts": "تحوّلات نشطة · 18 إشارة اليوم",
      "dashboard.statusbar.zoom": "تكبير 14.2 · WGS84",
      "dashboard.statusbar.layersOn": "4 طبقات مفعَّلة",
      "dashboard.statusbar.apiOk": "API يعمل"
    }
  };

  // ─── Runtime ──────────────────────────────────────────────────
  const STORAGE_KEY = "makan.lang";
  const SUPPORTED = ["en", "ar"];

  function detectLang() {
    try {
      const u = new URL(window.location.href);
      const q = u.searchParams.get("lang");
      if (q && SUPPORTED.indexOf(q) !== -1) return q;
    } catch (_) {}
    try {
      const ls = window.localStorage.getItem(STORAGE_KEY);
      if (ls && SUPPORTED.indexOf(ls) !== -1) return ls;
    } catch (_) {}
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    if (htmlLang.indexOf("ar") === 0) return "ar";
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("ar") === 0) return "ar";
    return "en";
  }

  let currentLang = detectLang();

  function t(key) {
    const langDict = DICT[currentLang] || DICT.en;
    return (langDict && langDict[key]) || (DICT.en && DICT.en[key]) || "";
  }

  function applyAttr(el, attr, dataKey) {
    const key = el.getAttribute(dataKey);
    if (!key) return;
    const value = t(key);
    if (!value) return;
    el.setAttribute(attr, value);
  }

  function render() {
    // Set lang so CSS can swap to the Arabic font, but DO NOT flip dir.
    // The original layout was designed for LTR; flipping the page direction
    // breaks scroll-pin transforms, letter-spacing, the brand wordmark, the
    // phone number, and the stats numerics. Browsers handle in-line bidi
    // (mixed-direction text within a paragraph) automatically — we only
    // need to swap the strings and keep the layout intact.
    document.documentElement.lang = currentLang;
    document.documentElement.dir = "ltr";

    // text content — set dir on each element based on whether the text
    // contains Arabic. Keeps periods, brand wordmarks (`makan.`), and Latin
    // strings positioned correctly under our LTR-only page layout.
    const ARABIC_RE = /[؀-ۿݐ-ݿ]/;
    const textNodes = document.querySelectorAll("[data-i18n]");
    for (let i = 0; i < textNodes.length; i++) {
      const el = textNodes[i];
      const key = el.getAttribute("data-i18n");
      const v = t(key);
      if (v) {
        el.textContent = v;
        // If the swapped value contains Arabic, force this element to RTL
        // so punctuation (the period in "اسأل العالم.") stays at the right
        // edge of the visible glyph run.
        if (ARABIC_RE.test(v)) {
          el.setAttribute("dir", "rtl");
        } else {
          el.removeAttribute("dir");
        }
      }
    }

    // innerHTML (rich text) — only on elements explicitly opted in
    const htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (let i = 0; i < htmlNodes.length; i++) {
      const el = htmlNodes[i];
      const key = el.getAttribute("data-i18n-html");
      const v = t(key);
      if (v) el.innerHTML = v;
    }

    // alt
    const altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (let i = 0; i < altNodes.length; i++) {
      applyAttr(altNodes[i], "alt", "data-i18n-alt");
    }

    // placeholder
    const phNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (let i = 0; i < phNodes.length; i++) {
      applyAttr(phNodes[i], "placeholder", "data-i18n-placeholder");
    }

    // title
    const titleNodes = document.querySelectorAll("[data-i18n-title]");
    for (let i = 0; i < titleNodes.length; i++) {
      applyAttr(titleNodes[i], "title", "data-i18n-title");
    }

    // aria-label
    const ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (let i = 0; i < ariaNodes.length; i++) {
      applyAttr(ariaNodes[i], "aria-label", "data-i18n-aria");
    }

    // <title> + meta description / og / twitter
    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = t("meta.title");
    setMetaContent("meta[name=description]", "meta.description");
    setMetaContent("meta[property='og:title']", "meta.og.title");
    setMetaContent("meta[property='og:description']", "meta.og.description");
    setMetaContent("meta[property='twitter:title']", "meta.twitter.title");
    setMetaContent("meta[property='twitter:description']", "meta.twitter.description");

    // Reflect language pill active state
    document.querySelectorAll("[data-lang-set]").forEach(function (el) {
      const target = el.getAttribute("data-lang-set");
      el.classList.toggle("active", target === currentLang);
    });

    // Notify listeners (rotating hero word, agent demo prompt animations)
    try {
      document.dispatchEvent(new CustomEvent("makan:lang-changed", { detail: { lang: currentLang } }));
    } catch (_) {}
  }

  function setMetaContent(selector, key) {
    const el = document.querySelector(selector);
    if (!el) return;
    const v = t(key);
    if (v) el.setAttribute("content", v);
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    currentLang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    render();
  }

  function getLang() {
    return currentLang;
  }

  // Public API
  window.MakanI18n = { setLang: setLang, getLang: getLang, t: t, DICT: DICT };
  window.__t = t;

  // Wire language-set click handlers (delegated)
  document.addEventListener("click", function (e) {
    let n = e.target;
    while (n && n !== document) {
      if (n.getAttribute && n.getAttribute("data-lang-set")) {
        e.preventDefault();
        setLang(n.getAttribute("data-lang-set"));
        return;
      }
      n = n.parentNode;
    }
  });

  // First paint
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  /* The wearebrand animation framework runs wabSplit() AFTER our first
     render — it wraps each character of every tagged text element in
     <span class="char">. For Arabic this destroys the joining forms
     (each letter rendered as an isolated glyph: ك ت ا ب instead of كتاب).

     Solution: a MutationObserver that watches every [data-i18n] element
     for the moment .char spans get inserted, and immediately re-renders
     (which does `el.textContent = v`, blowing away the spans). The
     animation visual is sacrificed for AR — the words just appear,
     which is honestly fine — but the script is preserved. */
  function unwrapCharSpansIfArabic(el) {
    if (currentLang !== "ar") return;
    if (!el.querySelector || !el.querySelector(".char")) return;
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const v = t(key);
    if (v) el.textContent = v;
  }

  function installObservers() {
    if (typeof MutationObserver === "undefined") return;
    const targets = document.querySelectorAll("[data-i18n]");
    const obs = new MutationObserver(function (mutations) {
      if (currentLang !== "ar") return;
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type !== "childList") continue;
        for (let j = 0; j < m.addedNodes.length; j++) {
          const n = m.addedNodes[j];
          if (n && n.classList && (n.classList.contains("char") || n.classList.contains("word"))) {
            unwrapCharSpansIfArabic(m.target);
            break;
          }
        }
      }
    });
    targets.forEach(function (t) {
      obs.observe(t, { childList: true, subtree: true });
    });
  }

  /* Sweep: walk every tagged element, if it has .char spans inside,
     wipe and reset textContent. Cheap, idempotent. */
  function rerenderIfArabic() {
    if (currentLang !== "ar") return;
    document.querySelectorAll("[data-i18n]").forEach(unwrapCharSpansIfArabic);
  }

  /* Run sweep on a tight interval for the first 30 seconds. wabSplit
     can fire on font-load, preloader-end, ScrollTrigger.refresh, and
     scroll-pin re-init — we don't know when. Periodic sweep is the
     simplest robust answer. After 30s the page is settled. */
  let sweepCount = 0;
  const SWEEP_MAX = 150; // 150 × 200ms = 30s
  function sweepLoop() {
    rerenderIfArabic();
    sweepCount++;
    if (sweepCount < SWEEP_MAX) setTimeout(sweepLoop, 200);
  }
  sweepLoop();

  window.addEventListener("load", function () {
    rerenderIfArabic();
    installObservers();
  });
  /* If load already fired, install observers now. */
  if (document.readyState === "complete") installObservers();
  function hookST() {
    if (typeof window.ScrollTrigger !== "undefined" && window.ScrollTrigger.addEventListener) {
      window.ScrollTrigger.addEventListener("refresh", rerenderIfArabic);
    } else {
      setTimeout(hookST, 200);
    }
  }
  hookST();

  /* Also restart the sweep on language change (so toggling to AR after
     load gets the same protection). */
  document.addEventListener("makan:lang-changed", function () {
    sweepCount = 0;
    sweepLoop();
  });
})();
