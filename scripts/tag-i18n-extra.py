#!/usr/bin/env python3
"""Second-pass tagging: covers the sections that the first script missed.

  - #mk-tiers (Studio / Connect / Custom)
  - .uc-spotlight closing headline + waitlist form
  - Beforeafter 6 fan-out cards
  - Other static strings the first pass missed

Idempotent: re-runs are no-ops.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "public" / "hybrid" / "index.html"


def patch_first(html: str, needle: str, replacement: str) -> str:
    """Replace the first occurrence of `needle` with `replacement` only if
    `replacement` is not already in `html` (idempotent)."""
    if replacement in html:
        return html
    if needle in html:
        return html.replace(needle, replacement, 1)
    return html


def patch_all(text: str) -> str:
    # ── #mk-tiers eyebrow / title / sub ─────────────────────────
    text = patch_first(
        text,
        '<div class="mk-tiers-eyebrow">Ways to use Makan</div>',
        '<div class="mk-tiers-eyebrow" data-i18n="usecases.eyebrow">Ways to use Makan</div>',
    )
    text = patch_first(
        text,
        '<h2 class="mk-tiers-title">Three ways in. Same index.</h2>',
        '<h2 class="mk-tiers-title" data-i18n="usecases.title">Three ways in. Same index.</h2>',
    )
    text = patch_first(
        text,
        '<p class="mk-tiers-sub">Run it through the dashboard. Plug it into your stack. Or deploy it inside your sovereign environment with a build tailored to your operation.</p>',
        '<p class="mk-tiers-sub" data-i18n="usecases.sub">Run it through the dashboard. Plug it into your stack. Or deploy it inside your sovereign environment with a build tailored to your operation.</p>',
    )

    # ── Studio tier ─────────────────────────────────────────────
    # The Studio/Connect/Custom name spans contain an SVG plus text. Use a
    # marker comment to write inside the span with a span wrapping the text.
    text = patch_first(
        text,
        '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>\n              Studio',
        '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>\n              <span data-i18n="usecases.studio.name">Studio</span>',
    )
    text = patch_first(
        text,
        '<h3 class="mk-tier-headline">The dashboard your ops team lives in.</h3>',
        '<h3 class="mk-tier-headline" data-i18n="usecases.studio.headline">The dashboard your ops team lives in.</h3>',
    )
    text = patch_first(
        text,
        '<a href="#book-demo" class="mk-tier-cta is-ghost">Open Studio</a>',
        '<a href="#book-demo" class="mk-tier-cta is-ghost" data-i18n="usecases.studio.cta">Open Studio</a>',
    )
    text = patch_first(
        text,
        '<p class="mk-tier-desc">For monitoring teams running daily intelligence on their AOI. Map, alerts, agent, exports — one screen.</p>',
        '<p class="mk-tier-desc" data-i18n="usecases.studio.desc">For monitoring teams running daily intelligence on their AOI. Map, alerts, agent, exports — one screen.</p>',
    )
    studio_features = [
        ("Live operations map with overlay layers", "usecases.studio.feature.01"),
        ("Plain-language agent built into the workspace", "usecases.studio.feature.02"),
        ("Alerts feed with confidence + source citations", "usecases.studio.feature.03"),
        ("Discoveries, shifts, change-detection over time", "usecases.studio.feature.04"),
        ("Audit-ready exports — PDF, GeoJSON, CSV", "usecases.studio.feature.05"),
        ("Role-based access for your team", "usecases.studio.feature.06"),
    ]
    for txt, key in studio_features:
        text = patch_first(
            text,
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>{txt}</li>',
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span data-i18n="{key}">{txt}</span></li>',
        )

    # ── Connect tier ────────────────────────────────────────────
    text = patch_first(
        text,
        '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 11l6-4M9 13l6 4"/></svg>\n              Connect',
        '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 11l6-4M9 13l6 4"/></svg>\n              <span data-i18n="usecases.connect.name">Connect</span>',
    )
    text = patch_first(
        text,
        '<span class="mk-tier-badge">Agent-ready</span>',
        '<span class="mk-tier-badge" data-i18n="usecases.connect.badge">Agent-ready</span>',
    )
    text = patch_first(
        text,
        '<h3 class="mk-tier-headline">Plug Makan into your agents and your stack.</h3>',
        '<h3 class="mk-tier-headline" data-i18n="usecases.connect.headline">Plug Makan into your agents and your stack.</h3>',
    )
    text = patch_first(
        text,
        '<a href="#book-demo" class="mk-tier-cta is-ghost">Get a key</a>',
        '<a href="#book-demo" class="mk-tier-cta is-ghost" data-i18n="usecases.connect.cta">Get a key</a>',
    )
    text = patch_first(
        text,
        '<p class="mk-tier-desc">For developers, agentic systems, and applications that need to query the world programmatically. Tool-callable from any LLM.</p>',
        '<p class="mk-tier-desc" data-i18n="usecases.connect.desc">For developers, agentic systems, and applications that need to query the world programmatically. Tool-callable from any LLM.</p>',
    )
    connect_features = [
        ("Tool-callable schemas — drop into any agent", "usecases.connect.feature.01"),
        ("Plain-language and structured queries", "usecases.connect.feature.02"),
        ("Cited returns — events, sensors, hashes", "usecases.connect.feature.03"),
        ("Webhooks → Slack, PagerDuty, your endpoint", "usecases.connect.feature.04"),
        ("Scoped tokens with per-AOI access control", "usecases.connect.feature.05"),
        ("Native bindings for OpenAI, Anthropic, MCP", "usecases.connect.feature.06"),
    ]
    for txt, key in connect_features:
        text = patch_first(
            text,
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>{txt}</li>',
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span data-i18n="{key}">{txt}</span></li>',
        )

    # ── Custom tier ─────────────────────────────────────────────
    text = patch_first(
        text,
        '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n              Custom',
        '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n              <span data-i18n="usecases.custom.name">Custom</span>',
    )
    text = patch_first(
        text,
        '<h3 class="mk-tier-headline">A build inside your sovereign environment.</h3>',
        '<h3 class="mk-tier-headline" data-i18n="usecases.custom.headline">A build inside your sovereign environment.</h3>',
    )
    text = patch_first(
        text,
        '<a href="#book-demo" class="mk-tier-cta is-ghost">Talk to us</a>',
        '<a href="#book-demo" class="mk-tier-cta is-ghost" data-i18n="usecases.custom.cta">Talk to us</a>',
    )
    text = patch_first(
        text,
        '<p class="mk-tier-desc">For governments, ministries, and strategic operators with sovereign data, custom pipelines, or bespoke integration requirements.</p>',
        '<p class="mk-tier-desc" data-i18n="usecases.custom.desc">For governments, ministries, and strategic operators with sovereign data, custom pipelines, or bespoke integration requirements.</p>',
    )
    custom_features = [
        ("Deploy in your cloud, on-prem, or air-gapped", "usecases.custom.feature.01"),
        ("Custom imagery sources + ingestion pipelines", "usecases.custom.feature.02"),
        ("Integration into your existing operations stack", "usecases.custom.feature.03"),
        ("Dedicated success engineering + onboarding", "usecases.custom.feature.04"),
        ("Regional data residency + compliance posture", "usecases.custom.feature.05"),
        ("Co-developed vertical models for your domain", "usecases.custom.feature.06"),
    ]
    for txt, key in custom_features:
        text = patch_first(
            text,
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>{txt}</li>',
            f'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span data-i18n="{key}">{txt}</span></li>',
        )

    # ── .uc-spotlight closing headline ──────────────────────────
    text = patch_first(
        text,
        '<div class="uc-spotlight-content">\n      <h2>Detect what others miss. Decide before it costs.</h2>\n    </div>',
        '<div class="uc-spotlight-content">\n      <h2 data-i18n="closing.spotlight.title">Detect what others miss. Decide before it costs.</h2>\n    </div>',
    )

    # ── Waitlist form ───────────────────────────────────────────
    text = patch_first(
        text,
        '<div class="mk-eyebrow">Request access</div>',
        '<div class="mk-eyebrow" data-i18n="waitlist.eyebrow">Request access</div>',
    )
    text = patch_first(
        text,
        '<h2>Book a demo</h2>',
        '<h2 data-i18n="waitlist.title">Book a demo</h2>',
    )
    text = patch_first(
        text,
        "<p>Tell us about your operation. We'll get back within two business days with a tailored walkthrough.</p>",
        '<p data-i18n="waitlist.intro">Tell us about your operation. We\'ll get back within two business days with a tailored walkthrough.</p>',
    )
    text = patch_first(
        text,
        '<span>Work email</span>',
        '<span data-i18n="waitlist.field.email.label">Work email</span>',
    )
    text = patch_first(
        text,
        'placeholder="name@company.com">',
        'placeholder="name@company.com" data-i18n-placeholder="waitlist.field.email.placeholder">',
    )
    text = patch_first(
        text,
        '<span>Full name</span>',
        '<span data-i18n="waitlist.field.name.label">Full name</span>',
    )
    text = patch_first(
        text,
        '<span>Company</span>',
        '<span data-i18n="waitlist.field.company.label">Company</span>',
    )
    text = patch_first(
        text,
        '<span>Industry</span>',
        '<span data-i18n="waitlist.field.industry.label">Industry</span>',
    )
    text = patch_first(
        text,
        '<option value="" disabled="" selected="">Select…</option>',
        '<option value="" disabled selected data-i18n="waitlist.field.industry.placeholder">Select…</option>',
    )
    text = patch_first(
        text,
        '<option value="" disabled selected>Select…</option>',
        '<option value="" disabled selected data-i18n="waitlist.field.industry.placeholder">Select…</option>',
    )
    industry_options = [
        ("infrastructure", "Infrastructure & construction"),
        ("energy", "Energy & pipelines"),
        ("government", "Government"),
        ("real-estate", "Real estate & urban development"),
        ("defense", "Defense & intelligence"),
        ("environmental", "Environmental & disaster"),
        ("other", "Other"),
    ]
    industry_keys = {
        "infrastructure": "waitlist.field.industry.option.infrastructure",
        "energy": "waitlist.field.industry.option.energy",
        "government": "waitlist.field.industry.option.government",
        "real-estate": "waitlist.field.industry.option.realEstate",
        "defense": "waitlist.field.industry.option.defense",
        "environmental": "waitlist.field.industry.option.environmental",
        "other": "waitlist.field.industry.option.other",
    }
    for val, label in industry_options:
        key = industry_keys[val]
        text = patch_first(
            text,
            f'<option value="{val}">{label}</option>',
            f'<option value="{val}" data-i18n="{key}">{label}</option>',
        )
    text = patch_first(
        text,
        "<span>What problem are you solving?</span>",
        '<span data-i18n="waitlist.field.problem.label">What problem are you solving?</span>',
    )
    text = patch_first(
        text,
        'placeholder="e.g. monitor 14,000 km of pipeline corridors for unauthorized construction"',
        'placeholder="e.g. monitor 14,000 km of pipeline corridors for unauthorized construction" data-i18n-placeholder="waitlist.field.problem.placeholder"',
    )
    text = patch_first(
        text,
        ">Request a demo →</button>",
        ' data-i18n="waitlist.button.submit">Request a demo →</button>',
    )
    # Fineprint
    text = patch_first(
        text,
        "No spam. We use your details only to schedule the demo.",
        '<span data-i18n="waitlist.fineprint">No spam. We use your details only to schedule the demo.</span>',
    )
    # Closing pill CTA (the floating "Request a demo →" pill)
    text = patch_first(
        text,
        '<span class="mk-pill-cta">Request a demo →</span>',
        '<span class="mk-pill-cta" data-i18n="closing.pill.cta">Request a demo →</span>',
    )

    # ── Integrations title ──────────────────────────────────────
    text = patch_first(
        text,
        '>makan integrations.</',
        ' data-i18n="integrations.title">makan integrations.</',
    )

    # ── Hero h3 prefix already tagged; tagline shouldn't exist as duplicate ─
    return text


def main():
    src = INDEX.read_text(encoding="utf-8")
    out = patch_all(src)
    if out != src:
        INDEX.write_text(out, encoding="utf-8")
        print(f"  modified: index.html")
    else:
        print(f"  unchanged: index.html")


if __name__ == "__main__":
    main()
