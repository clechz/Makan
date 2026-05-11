#!/usr/bin/env python3
"""Tag public/hybrid/*.html with data-i18n attributes.

Idempotent: re-running is a no-op if attributes already present.
Run from repo root:
    python scripts/tag-i18n.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "public" / "hybrid" / "index.html"
DASH = ROOT / "public" / "hybrid" / "dashboard-screenshot.html"


def replace_text_in_tag(html, before, after_text, key, attr="data-i18n"):
    """Find `before` substring (which must contain the exact text to wrap) and
    rewrite it so the enclosing tag carries `data-i18n="key"`.

    Pattern: we look for a regex that matches `<TAG ...>TEXT</TAG>` where
    `before` is the literal `<TAG ...>` prefix and `after_text` is the literal
    text content. We add `data-i18n="key"` to the opening tag and update the
    inner text to `after_text` (allowing fixes like the hero period).
    """
    if attr + '="' + key + '"' in html:
        return html  # idempotent
    # Simple targeted replacement using the unique combination
    if before in html:
        new_open = before.rstrip(">").rstrip() + f' {attr}="{key}">'
        # Replace the first occurrence only — `before` should be unique
        html = html.replace(before + after_text, new_open + after_text, 1)
    return html


def add_attr_to_open_tag(html, open_tag_prefix, attr_pair):
    """Inject an attribute into an opening tag. `open_tag_prefix` is something
    unique like `<h1 class="h2 text-light" style="opacity:1">` — we add
    attr_pair (e.g. `data-i18n="hero.title"`) just before the closing `>`.
    Idempotent.
    """
    if attr_pair in html:
        return html
    if open_tag_prefix in html:
        new_tag = open_tag_prefix[:-1] + " " + attr_pair + ">"
        html = html.replace(open_tag_prefix, new_tag, 1)
    return html


def replace_exact(html, needle, replacement):
    if needle in html and replacement not in html:
        html = html.replace(needle, replacement, 1)
    return html


# ─── index.html transformations ───────────────────────────────
def tag_index(html: str) -> str:
    # 1. Hero H1 — fix period AND tag
    html = replace_exact(
        html,
        '<h1 class="h2 text-light" style="opacity:1">Query the World</h1>',
        '<h1 class="h2 text-light" style="opacity:1" data-i18n="hero.title">Query the World.</h1>',
    )

    # 2. Hero tagline (h3)
    html = replace_exact(
        html,
        '<h3 id="wab-hero-tagline" class="h3 text-light" style="margin-bottom: 1rem; visibility: visible;">We observe the surface and tell you what to do about it.</h3>',
        '<h3 id="wab-hero-tagline" class="h3 text-light" style="margin-bottom: 1rem; visibility: visible;" data-i18n="hero.tagline">We observe the surface and tell you what to do about it.</h3>',
    )

    # 3. Hero subtitle prefix + rotating word
    html = replace_exact(
        html,
        'Intelligence built to understand &nbsp;&nbsp;<span id="makan-rotate" class="makan-rotate-word">the natural world.</span>',
        '<span data-i18n="hero.subtitle.prefix">Intelligence built to understand</span> &nbsp;&nbsp;<span id="makan-rotate" class="makan-rotate-word" data-i18n="hero.rotate.02">the natural world.</span>',
    )

    # 4. Meta description / og / twitter — tag with data-i18n on the meta tag
    html = add_attr_to_open_tag(
        html,
        '<meta content="Makan indexes the physical world from orbit. Satellite imagery, vector embeddings, and operational alerts for enterprise teams." name="description">',
        'data-i18n-meta="meta.description"',
    )

    # 5. About lead headline
    html = replace_exact(
        html,
        '<h2 data-highlight-text="" class="p2 text-light">The physical world is the largest dataset in existence. Most of it unlabeled, all of it unindexed.</h2>',
        '<h2 data-highlight-text="" class="p2 text-light" data-i18n="about.lead.headline">The physical world is the largest dataset in existence. Most of it unlabeled, all of it unindexed.</h2>',
    )

    # 6. CTA pill text
    html = replace_exact(
        html,
        '<div class="t7">Book a Demo</div>',
        '<div class="t7" data-i18n="hero.cta.bookDemo">Book a Demo</div>',
    )

    # 7. Feature fan-out card labels
    fan_labels = [
        ("Define area", "features.defineArea.label"),
        ("Agent", "features.agent.label"),
        ("Detect", "features.detect.label"),
        ("Alerts", "features.alerts.label"),
        ("Layers", "features.layers.label"),
        ("Monitor", "features.monitor.label"),
    ]
    for text, key in fan_labels:
        html = replace_exact(
            html,
            f'<div class="mk-card-label">{text}</div>',
            f'<div class="mk-card-label" data-i18n="{key}">{text}</div>',
        )

    # 8. Detect card pieces
    html = replace_exact(
        html,
        '<span class="mk-detect-date left">Mar 2025</span>',
        '<span class="mk-detect-date left" data-i18n="features.detect.dateLeft">Mar 2025</span>',
    )
    html = replace_exact(
        html,
        '<span class="mk-detect-date right">Sep 2025</span>',
        '<span class="mk-detect-date right" data-i18n="features.detect.dateRight">Sep 2025</span>',
    )
    html = replace_exact(
        html,
        '<div class="mk-detect-badge">3 changes</div>',
        '<div class="mk-detect-badge" data-i18n="features.detect.badge">3 changes</div>',
    )

    # 9. Alert card
    html = replace_exact(
        html,
        '<div class="mk-alert-msg"><strong>New structure</strong> on 5th Ave<br>High ROI investment opportunity</div>',
        '<div class="mk-alert-msg" data-i18n-html="features.alerts.body"><strong>New structure</strong> on 5th Ave<br>High ROI investment opportunity</div>',
    )
    html = replace_exact(
        html,
        '<div class="mk-alert-time">2 min ago · 96% confidence</div>',
        '<div class="mk-alert-time" data-i18n="features.alerts.time">2 min ago · 96% confidence</div>',
    )

    # 10. Layer rows in the layers card — rich text with swatch + name + tag.
    # Each whole row gets data-i18n-html with a custom key so we can replace internal markup.
    layer_rows = [
        ("Construction activity", "seen", "features.layers.constructionRow", "#4A90D9"),
        ("Disaster risk", "modeled", "features.layers.disasterRow", "#D94A4A"),
        ("Wealth distribution", "modeled", "features.layers.wealthRow", "#5CB85C"),
        ("Traffic density", "api", "features.layers.trafficRow", "#E8A838"),
        ("Custom layer", "yours", "features.layers.customRow", "rgba(0,0,0,0.2)"),
    ]
    # Instead of rewriting the entire row, tag the inner spans
    layer_text_pairs = [
        ("Construction activity", "features.layers.construction"),
        ("Disaster risk", "features.layers.disaster"),
        ("Wealth distribution", "features.layers.wealth"),
        ("Traffic density", "features.layers.traffic"),
        ("Custom layer", "features.layers.custom"),
    ]
    for text, key in layer_text_pairs:
        html = replace_exact(
            html,
            f'<div class="mk-layer-name">{text}</div>',
            f'<div class="mk-layer-name" data-i18n="{key}">{text}</div>',
        )
    layer_tag_pairs = [
        ("seen", "features.layers.construction.tag", '<span class="mk-layer-tag">seen</span>'),
        # Two "modeled" tags — disambiguate by surrounding context
    ]
    # The two "modeled" tags need disambiguation by location
    html = html.replace(
        '<div class="mk-layer-row"><div class="mk-layer-swatch" style="background:#4A90D9;"></div><div class="mk-layer-name" data-i18n="features.layers.construction">Construction activity</div><span class="mk-layer-tag">seen</span>',
        '<div class="mk-layer-row"><div class="mk-layer-swatch" style="background:#4A90D9;"></div><div class="mk-layer-name" data-i18n="features.layers.construction">Construction activity</div><span class="mk-layer-tag" data-i18n="features.layers.construction.tag">seen</span>',
        1,
    )
    html = html.replace(
        '<div class="mk-layer-name" data-i18n="features.layers.disaster">Disaster risk</div><span class="mk-layer-tag">modeled</span>',
        '<div class="mk-layer-name" data-i18n="features.layers.disaster">Disaster risk</div><span class="mk-layer-tag" data-i18n="features.layers.disaster.tag">modeled</span>',
        1,
    )
    html = html.replace(
        '<div class="mk-layer-name" data-i18n="features.layers.wealth">Wealth distribution</div><span class="mk-layer-tag">modeled</span>',
        '<div class="mk-layer-name" data-i18n="features.layers.wealth">Wealth distribution</div><span class="mk-layer-tag" data-i18n="features.layers.wealth.tag">modeled</span>',
        1,
    )
    html = html.replace(
        '<div class="mk-layer-name" data-i18n="features.layers.traffic">Traffic density</div><span class="mk-layer-tag">api</span>',
        '<div class="mk-layer-name" data-i18n="features.layers.traffic">Traffic density</div><span class="mk-layer-tag" data-i18n="features.layers.traffic.tag">api</span>',
        1,
    )
    html = html.replace(
        '<div class="mk-layer-name" data-i18n="features.layers.custom">Custom layer</div><span class="mk-layer-tag">yours</span>',
        '<div class="mk-layer-name" data-i18n="features.layers.custom">Custom layer</div><span class="mk-layer-tag" data-i18n="features.layers.custom.tag">yours</span>',
        1,
    )

    # 11. Mock Mac window title
    html = replace_exact(
        html,
        '<div style="flex:1;text-align:center;font-size:0.65rem;color:rgba(0,0,0,0.35);letter-spacing:0.05em;font-weight:500;">makan — operations dashboard</div>',
        '<div style="flex:1;text-align:center;font-size:0.65rem;color:rgba(0,0,0,0.35);letter-spacing:0.05em;font-weight:500;" data-i18n="features.dashboardChrome.title">makan — operations dashboard</div>',
    )
    html = replace_exact(
        html,
        '<div style="flex:1;text-align:center;font-size:0.65rem;color:rgba(0,0,0,0.35);letter-spacing:0.05em;font-weight:500;">makan — before / after analysis</div>',
        '<div style="flex:1;text-align:center;font-size:0.65rem;color:rgba(0,0,0,0.35);letter-spacing:0.05em;font-weight:500;" data-i18n="beforeafter.window.title">makan — before / after analysis</div>',
    )

    # 12. Stats labels (km²/day, training chips, fused layers, on demand)
    stat_pairs = [
        ("km²/day", "stats.area.label"),
        ("training chips", "stats.training.label"),
        ("fused layers", "stats.layers.label"),
        ("on demand", "stats.resolution.label"),
    ]
    # These usually appear inside a div.stat-label — generic but careful
    for text, key in stat_pairs:
        html = re.sub(
            r'(<div class="mk-stat-label[^"]*"[^>]*>)' + re.escape(text) + r'(</div>)',
            r'\1<span data-i18n="' + key + r'">' + text + r'</span>\2',
            html,
            count=1,
        )

    # 13. 5-card grid (mk-fcard)
    fgrid_pairs = [
        # (label_text, label_key, title_text, title_key, desc_text, desc_key)
        ("Agent", "features.fgrid.agent.label",
         "Ask questions in plain language", "features.fgrid.agent.title"),
        ("Places", "features.fgrid.places.label",
         "Define the areas you monitor", "features.fgrid.places.title"),
        ("Layers", "features.fgrid.layers.label",
         "Stack data on one map", "features.fgrid.layers.title"),
        ("Discoveries", "features.fgrid.discoveries.label",
         "What changed, where, when", "features.fgrid.discoveries.title"),
        ("Shifts", "features.fgrid.shifts.label",
         "Track evolution over time", "features.fgrid.shifts.title"),
    ]
    for lbl, lblkey, ttl, ttlkey in fgrid_pairs:
        # label (uppercase via CSS) — there may be multiple Agent/Places/Layers but
        # only one is inside mk-fcard-label class
        html = replace_exact(
            html,
            f'<div class="mk-fcard-label">{lbl}</div>',
            f'<div class="mk-fcard-label" data-i18n="{lblkey}">{lbl}</div>',
        )
        html = replace_exact(
            html,
            f'<div class="mk-fcard-title">{ttl}</div>',
            f'<div class="mk-fcard-title" data-i18n="{ttlkey}">{ttl}</div>',
        )

    # Descriptions
    fgrid_descs = [
        ('Natural-language queries over satellite imagery. "Show me all new construction within 5 km of the pipeline in the last 90 days." The agent searches, cites sources, and returns geolocated results.', "features.fgrid.agent.desc"),
        ("Draw boundaries, name them, track them. Every place becomes a living dataset — continuously updated with every satellite pass.", "features.fgrid.places.desc"),
        ("Construction, risk, wealth, density — satellite-detected, AI-modeled, and API-sourced.", "features.fgrid.layers.desc"),
        ("New structures, terrain shifts, anomalies — timestamped, geolocated, scored with confidence.", "features.fgrid.discoveries.desc"),
        ("Scrub through satellite passes, compare dates, catch anomalies the moment they deviate.", "features.fgrid.shifts.desc"),
    ]
    for text, key in fgrid_descs:
        html = replace_exact(
            html,
            f'<div class="mk-fcard-desc">{text}</div>',
            f'<div class="mk-fcard-desc" data-i18n="{key}">{text}</div>',
        )

    # 14. Beforeafter eyebrow + title
    html = replace_exact(
        html,
        '<div style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);font-family:\'IBM Plex Mono\',monospace;">See what others miss</div>',
        '<div style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);font-family:\'IBM Plex Mono\',monospace;" data-i18n="beforeafter.eyebrow">See what others miss</div>',
    )
    html = replace_exact(
        html,
        '<h3 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:600;color:#fff;margin-top:1rem;line-height:1.15;">No tool above does what Makan does.</h3>',
        '<h3 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:600;color:#fff;margin-top:1rem;line-height:1.15;" data-i18n="beforeafter.title">No tool above does what Makan does.</h3>',
    )

    # 15. Before/after slider alt text
    html = replace_exact(
        html,
        '<img src="./assets/before-satellite.png" alt="Before — raw satellite imagery" />',
        '<img src="./assets/before-satellite.png" alt="Before — raw satellite imagery" data-i18n-alt="beforeafter.slider.alt.before" />',
    )
    html = replace_exact(
        html,
        '<img src="./assets/after-makan-overlay.png" alt="After — Makan intelligence overlay" />',
        '<img src="./assets/after-makan-overlay.png" alt="After — Makan intelligence overlay" data-i18n-alt="beforeafter.slider.alt.after" />',
    )

    # 16. Applications text-slider title + hint
    html = replace_exact(
        html,
        '<h2 class="cs-title">Built for every surface.</h2>',
        '<h2 class="cs-title" data-i18n="applications.midTitle">Built for every surface.</h2>',
    )
    html = replace_exact(
        html,
        '<div class="cs-hint">← Drag to explore →</div>',
        '<div class="cs-hint" data-i18n="applications.hint">← Drag to explore →</div>',
    )

    # 17. Closing spotlight title
    html = replace_exact(
        html,
        '<h2 style="font-size:clamp(2rem,4vw,3.5rem);font-weight:700;color:#fff;letter-spacing:-0.01em;line-height:1.1;margin:0 0 1.2rem;">Index the planet.</h2>',
        '<h2 style="font-size:clamp(2rem,4vw,3.5rem);font-weight:700;color:#fff;letter-spacing:-0.01em;line-height:1.1;margin:0 0 1.2rem;" data-i18n="closing.spotlight.title">Detect what others miss. Decide before it costs.</h2>',
    )

    # 18. Closing CTA + footer wordmark
    html = replace_exact(
        html,
        'Request Access',
        '<span data-i18n="closing.pill.cta">Request a demo →</span>',
    )

    return html


# ─── dashboard-screenshot.html transformations ────────────────
def tag_dashboard(html: str) -> str:
    # title
    html = replace_exact(
        html,
        "<title>Makan Dashboard</title>",
        '<title data-i18n="dashboard.meta.title">Makan Dashboard</title>',
    )
    # logo alt + text
    html = replace_exact(
        html,
        '<img src="./assets/logos/8.svg" alt="Makan" style="height:26px;width:26px;">',
        '<img src="./assets/logos/8.svg" alt="Makan" data-i18n-alt="dashboard.logo.alt" style="height:26px;width:26px;">',
    )
    # breadcrumb
    html = replace_exact(
        html,
        '<span class="crumb-root">Places</span>',
        '<span class="crumb-root" data-i18n="dashboard.breadcrumb.root">Places</span>',
    )
    html = replace_exact(
        html,
        '<span class="crumb-cur">Riyadh · North Corridor</span>',
        '<span class="crumb-cur" data-i18n="dashboard.breadcrumb.current">Riyadh · North Corridor</span>',
    )
    # cmdK button title
    html = replace_exact(
        html,
        '<button class="cmdk-btn" title="Command palette">',
        '<button class="cmdk-btn" title="Command palette" data-i18n-title="dashboard.cmdk.title">',
    )
    # Rail buttons — title attrs
    rail_pairs = [
        ("Agent", "dashboard.rail.agent"),
        ("Places", "dashboard.rail.places"),
        ("Layers", "dashboard.rail.layers"),
        ("Discoveries", "dashboard.rail.discoveries"),
        ("Shifts", "dashboard.rail.shifts"),
        ("Alerts", "dashboard.rail.alerts"),
        ("Settings", "dashboard.rail.settings"),
    ]
    for text, key in rail_pairs:
        # first matching button title
        html = html.replace(
            f'<button class="rail-btn" title="{text}">',
            f'<button class="rail-btn" title="{text}" data-i18n-title="{key}">',
            1,
        )
        # active variant for Layers
        if text == "Layers":
            html = html.replace(
                f'<button class="rail-btn active" title="{text}">',
                f'<button class="rail-btn active" title="{text}" data-i18n-title="{key}">',
                1,
            )

    # Layers panel
    html = replace_exact(
        html,
        '<div class="panel-title">Layers</div>',
        '<div class="panel-title" data-i18n="dashboard.panel.layers.title">Layers</div>',
    )
    html = replace_exact(
        html,
        '<div class="panel-action">+ Add</div>',
        '<div class="panel-action" data-i18n="dashboard.panel.layers.add">+ Add</div>',
    )
    group_pairs = [
        ("Detected · Satellite", "dashboard.panel.layers.group.satellite"),
        ("Modeled · AI", "dashboard.panel.layers.group.ai"),
        ("API · Third-party", "dashboard.panel.layers.group.api"),
        ("Custom", "dashboard.panel.layers.group.custom"),
    ]
    for text, key in group_pairs:
        html = replace_exact(
            html,
            f'<div class="layer-group-label">{text}</div>',
            f'<div class="layer-group-label" data-i18n="{key}">{text}</div>',
        )
    layer_name_pairs = [
        ("Urban Density", "dashboard.layer.urbanDensity"),
        ("Construction", "dashboard.layer.construction"),
        ("Building Footprints", "dashboard.layer.buildingFootprints"),
        ("Disaster Risk", "dashboard.layer.disasterRisk"),
        ("Wealth Distribution", "dashboard.layer.wealthDistribution"),
        ("Traffic Density", "dashboard.layer.trafficDensity"),
        ("Transit Lines", "dashboard.layer.transitLines"),
        ("Client Zones", "dashboard.layer.clientZones"),
    ]
    for text, key in layer_name_pairs:
        # active state (no .off)
        html = replace_exact(
            html,
            f'<div class="layer-name">{text}</div>',
            f'<div class="layer-name" data-i18n="{key}">{text}</div>',
        )
        # off state
        html = replace_exact(
            html,
            f'<div class="layer-name off">{text}</div>',
            f'<div class="layer-name off" data-i18n="{key}">{text}</div>',
        )

    # AOI section
    html = replace_exact(
        html,
        '<div class="aoi-label">Active Place</div>',
        '<div class="aoi-label" data-i18n="dashboard.aoi.label">Active Place</div>',
    )
    html = replace_exact(
        html,
        '<div class="aoi-name">North Corridor</div>',
        '<div class="aoi-name" data-i18n="dashboard.aoi.name">North Corridor</div>',
    )
    # Map alt
    html = replace_exact(
        html,
        '<img class="satellite" src="./assets/satellite-city.png" alt="Satellite imagery">',
        '<img class="satellite" src="./assets/satellite-city.png" alt="Satellite imagery" data-i18n-alt="dashboard.map.satellite.alt">',
    )
    # Marker labels
    html = replace_exact(
        html,
        '<div class="map-marker-label">NEW</div>',
        '<div class="map-marker-label" data-i18n="dashboard.map.marker.new">NEW</div>',
    )
    html = replace_exact(
        html,
        '<div class="map-marker-label">~400 m²</div>',
        '<div class="map-marker-label" data-i18n="dashboard.map.marker.size">~400 m²</div>',
    )
    # Pulse card
    html = replace_exact(
        html,
        '<div class="map-pulse-label">Shift · Live signal</div>',
        '<div class="map-pulse-label" data-i18n="dashboard.map.pulseCard.label">Shift · Live signal</div>',
    )
    html = replace_exact(
        html,
        '<a class="map-pulse-action" href="#">View in Discoveries →</a>',
        '<a class="map-pulse-action" href="#" data-i18n="dashboard.map.pulseCard.action">View in Discoveries →</a>',
    )
    # Pulse card stats labels
    pulse_stat_pairs = [
        ("Signals · 7d", "dashboard.map.pulseCard.stat.signals.lbl"),
        ("Avg conf.", "dashboard.map.pulseCard.stat.confidence.lbl"),
        ("Latency", "dashboard.map.pulseCard.stat.latency.lbl"),
    ]
    for text, key in pulse_stat_pairs:
        html = replace_exact(
            html,
            f'<div class="map-pulse-stat-lbl">{text}</div>',
            f'<div class="map-pulse-stat-lbl" data-i18n="{key}">{text}</div>',
        )

    # Scrubber dates
    html = replace_exact(
        html,
        '<div class="map-scrubber-cur">Aug 2025</div>',
        '<div class="map-scrubber-cur" data-i18n="dashboard.map.scrubber.current">Aug 2025</div>',
    )
    html = replace_exact(
        html,
        '<div class="map-scrubber-dates"><span>Mar 2024</span><span>Sep 2025</span></div>',
        '<div class="map-scrubber-dates"><span data-i18n="dashboard.map.scrubber.startDate">Mar 2024</span><span data-i18n="dashboard.map.scrubber.endDate">Sep 2025</span></div>',
    )
    # Agent panel
    html = replace_exact(
        html,
        '<div class="agent-title">AI Agent</div>',
        '<div class="agent-title" data-i18n="dashboard.agent.title">AI Agent</div>',
    )
    html = replace_exact(
        html,
        '<div class="agent-status"><div class="agent-status-dot"></div> Active</div>',
        '<div class="agent-status"><div class="agent-status-dot"></div> <span data-i18n="dashboard.agent.status">Active</span></div>',
    )
    # Agent results card
    html = replace_exact(
        html,
        '<div class="agent-result-title">Discoveries · Summary</div>',
        '<div class="agent-result-title" data-i18n="dashboard.agent.result.title">Discoveries · Summary</div>',
    )
    html = replace_exact(
        html,
        '<div class="agent-result-count">18 found</div>',
        '<div class="agent-result-count" data-i18n="dashboard.agent.result.count">18 found</div>',
    )
    result_row_pairs = [
        ("Commercial", "dashboard.agent.result.row.commercial"),
        ("Residential", "dashboard.agent.result.row.residential"),
        ("Mixed-use", "dashboard.agent.result.row.mixedUse"),
        ("Avg. confidence", "dashboard.agent.result.row.avgConfidence"),
        ("Est. investment", "dashboard.agent.result.row.estInvestment"),
    ]
    for text, key in result_row_pairs:
        html = replace_exact(
            html,
            f'<span class="agent-result-key">{text}</span>',
            f'<span class="agent-result-key" data-i18n="{key}">{text}</span>',
        )
    # Used layers label
    html = replace_exact(
        html,
        '<div class="agent-used-label">Layers used</div>',
        '<div class="agent-used-label" data-i18n="dashboard.agent.layers.label">Layers used</div>',
    )
    # Collapsible sections
    section_pairs = [
        ("Discoveries", "dashboard.agent.section.discoveries"),
        ("Shifts · last 7 days", "dashboard.agent.section.shifts"),
        ("Opportunity Score", "dashboard.agent.section.opportunity"),
    ]
    for text, key in section_pairs:
        html = replace_exact(
            html,
            f'<div class="agent-section-title">{text}</div>',
            f'<div class="agent-section-title" data-i18n="{key}">{text}</div>',
        )
    # Agent input placeholder (text span — not a real input)
    html = replace_exact(
        html,
        '<span>Ask the agent...</span>',
        '<span data-i18n="dashboard.agent.input.placeholder">Ask the agent...</span>',
    )

    # Status bar
    html = replace_exact(
        html,
        '<span><span class="statusbar-dot"></span>Connected</span>',
        '<span><span class="statusbar-dot"></span><span data-i18n="dashboard.statusbar.connected">Connected</span></span>',
    )
    html = replace_exact(
        html,
        '<span>Shifts active · 18 signals today</span>',
        '<span data-i18n="dashboard.statusbar.shifts">Shifts active · 18 signals today</span>',
    )
    html = replace_exact(
        html,
        '<span>zoom 14.2 · WGS84</span>',
        '<span data-i18n="dashboard.statusbar.zoom">zoom 14.2 · WGS84</span>',
    )
    html = replace_exact(
        html,
        '<span>4 layers on</span>',
        '<span data-i18n="dashboard.statusbar.layersOn">4 layers on</span>',
    )
    html = replace_exact(
        html,
        '<span style="margin-left:auto;">API ok</span>',
        '<span style="margin-left:auto;" data-i18n="dashboard.statusbar.apiOk">API ok</span>',
    )

    return html


def process(path: Path, fn):
    src = path.read_text(encoding="utf-8")
    out = fn(src)
    if out != src:
        path.write_text(out, encoding="utf-8")
        print(f"  modified: {path.name}")
    else:
        print(f"  unchanged: {path.name}")


def main():
    print("Tagging i18n attributes...")
    process(INDEX, tag_index)
    process(DASH, tag_dashboard)
    print("Done.")


if __name__ == "__main__":
    main()
