# Agent Workstream Prompts — Makan Landing Page Migration

Copy-paste-ready prompts for parallel agents transforming the landing page from MacBook template → Makan. Each workstream owns specific files so multiple agents can run concurrently without collisions.

> **Project root:** `C:\Users\aazh\Projects\makan\` — TypeScript (`.tsx`/`.ts`). Dev server: `npm run dev` → http://localhost:3000.

> **Every agent MUST start by reading `CLAUDE.md` and `docs/MAKAN_MASTER_PROJECT_DOCUMENT.md`.** Non-negotiable.

> **Every design/styling agent MUST query the UI UX Pro Max tool** before building. See `CLAUDE.md` → "Design intelligence tool". Apply Makan's brand rules on top of whatever the tool returns — never use its raw hex codes.

---

## File ownership map (no parallel collisions)

| Workstream | Owns these files |
|------------|------------------|
| **A. Brand tokens** | `src/index.css`, `src/styles/tokens.css` (new) |
| **B. Copy + content** | `src/constants/index.ts`, text nodes in TSX sections |
| **C. 3D scene** | `src/components/Hero.tsx`, `src/components/SpaceScene.tsx`, `src/components/StarField.tsx`, `src/components/FrameAnimation.tsx`, `src/components/WindowLighting.tsx`, `src/components/IntelligenceOverlays.tsx`, `src/components/IntelligenceOverlays.css`, `src/components/three/*`, `src/components/models/*` |
| **D. Navigation + chrome** | `src/components/NavBar.tsx`, `src/components/Footer.tsx`, `src/components/MakanLogo.tsx` |
| **E. Sections** | `src/components/Features.tsx`, `src/components/Highlights.tsx`, `src/components/Performance.tsx`, `src/components/Showcase.tsx`, `src/components/AnimatedText.tsx`, `src/components/NarrativeText.tsx`/`.css`, `src/components/GlassOverlay.tsx` |
| **F. i18n / RTL** | `src/i18n/` (new), `src/main.tsx` (LocaleProvider wrap), NavBar toggle wiring |
| **G. Typography + fonts** | `index.html`, `public/fonts/`, `src/index.css` font rules |

**Order:** Run **A + G first** (foundation, ~15 min each). Then **B, C, D, E, F in parallel**. Finish with a **QA pass** (lint, `npm run build`, visual check at localhost:3000).

---

## Shared preamble (prepend to every workstream prompt)

```
You are working on the Makan landing page at C:\Users\aazh\Projects\makan\.
Project is TypeScript + Vite + React + R3F + GSAP + Lenis + Tailwind v4 + Zustand.

MANDATORY first steps:
1. Read C:\Users\aazh\Projects\makan\CLAUDE.md
2. Read the master doc sections listed below for your workstream
3. Check if the UI UX Pro Max tool has design patterns relevant to your task:
     python C:\Users\aazh\.claude\skills\ui-ux-pro-max-skill\src\ui-ux-pro-max\scripts\search.py "<query>" --domain <domain> -n 3
   Use whichever domain fits: style | color | typography | landing | chart | ux

Then do your task. Stay inside the files you own. Do not touch other workstreams' files.
```

---

## Workstream A — Brand tokens & color system

**Master doc sections:** §12 (color system)

**Tool queries to run first:**
- `python ...search.py "dark dashboard design tokens cyan" --domain color -n 3`
- `python ...search.py "enterprise saas dark mode" --domain style -n 3`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: establish Makan's design token system and purge all hardcoded colors.

1. Create src/styles/tokens.css with the full dark + light theme token blocks
   from master doc §12. Include:
   - Backgrounds: --color-bg-base, --color-bg-surface, --color-bg-elevated, --color-bg-overlay
   - Borders: --color-border-subtle, --color-border-default, --color-border-strong
   - Text: --color-text-primary, --color-text-secondary, --color-text-muted, --color-text-disabled, --color-text-inverse
   - Cyan scale 50-900 (primary brand: #00C2C7 dark / #0094A0 light)
   - Amber scale (alerts: #E8A838 dark / #B87A10 light)
   - Semantic: --color-success, --color-warning, --color-error, --color-info
   - Interactive: --color-interactive, --color-interactive-hover, --color-interactive-pressed

2. Import tokens.css at the top of src/index.css.

3. Set [data-theme="dark"] on <html> in index.html. Default to dark.

4. Grep src/ for hex colors matching #[0-9A-Fa-f]{3,6} and replace with
   var(--color-*) tokens. Include Tailwind arbitrary values like text-[#abc],
   bg-[#abc], border-[#abc].

5. PURGE every purple/violet anywhere — replace with cyan or appropriate neutral.
   The master doc explicitly bans purple as a brand color.

DO NOT touch: JSX text content, 3D scene files, src/constants/index.ts, fonts.
REPORT: files changed, colors you couldn't confidently map (list each with file:line).
```

---

## Workstream B — Copy & content rewrite

**Master doc sections:** §1, §4, §7, §8, §17

**Tool queries:**
- `python ...search.py "b2b enterprise saas landing copy" --domain landing -n 3`
- `python ...search.py "operational intelligence voice" --domain ux -n 3`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: replace every string of MacBook/Apple product copy with Makan copy.

1. Rewrite src/constants/index.ts completely. It should export:
   - nav links (Platform, Use Cases, API, Pricing, Company)
   - hero copy (headline, subhead, CTA)
   - use cases array (all 10 from master doc §8 — title, problem, Makan's answer, market size)
   - proof metrics (300M km²/day indexed, <24h alert latency, 95% detection accuracy)
   - architecture steps (Ingest → Encode → Detect → Deliver)
   - footer links
   For EVERY English string, also include `ar: ""` placeholder (Workstream F fills Arabic).

2. Rewrite text inside TSX section files (Features, Highlights, Performance,
   Showcase, Hero) — touch text nodes only, never layout/imports/styles. When
   possible, move hardcoded strings into constants/index.ts and import from there.

3. Tagline is exactly "Query the World." — with the period and capital W. Never modify.

4. BANNED phrases (do not use): leverage, unlock, cutting-edge, seamless,
   seamlessly, world-class, innovative, AI-powered insights, our platform empowers,
   revolutionize, game-changing, next-generation, synergy, solutions.

5. Every claim must use concrete numbers or operational verbs (detects, flags,
   indexes, encodes, delivers). Not marketing verbs (helps, enables, empowers).

6. Brand name in prose: "Makan" (cap M, lowercase rest). Not MAKAN, not makan.

DO NOT touch: JSX structure/layout/imports, CSS, 3D scenes, tokens.
REPORT: every file touched + bullet list of biggest voice changes.
```

---

## Workstream C — 3D scene (MacBook → Earth/satellite)

**Master doc sections:** §4 (product), §5 (architecture), §15 (design principles)

**Tool queries:**
- `python ...search.py "3d scroll scene webgl satellite earth" --domain style -n 3`
- `python ...search.py "scroll-driven hero animation premium" --domain landing -n 3`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Also read: MIGRATION_REPORT.md and QUICK_START.md in the project root for
previous hero work context.

Your job: replace the MacBook 3D hero with a Makan earth/satellite/intelligence-
overlay scene. The MacBook .glb/.fbx files in public/ can stay on disk but must
not appear in the hero.

1. In src/components/Hero.tsx, rebuild the 3D scene:
   - Slow-rotating earth sphere using public/ textures:
     8k_earth_daymap.jpeg, 8k_earth_clouds.jpeg, 8k_earth_nightmap.jpg, 8k_earth_specular_map.png
   - Thin orbital scan curve (cyan #00C2C7 — use var(--color-cyan-500) via
     three.js uniform or direct hex) looping around the earth
   - 2–3 AOI polygon overlays on different regions (use IntelligenceOverlays.tsx)
   - Detection pulse animation tied to scroll progress via GSAP + ScrollTrigger
   - Starfield background via existing StarField.tsx (dimmed)

2. Remove all MacBook model mount points. Do not import from components/models/
   in Hero.tsx anymore. Leave the Macbook*.tsx files on disk for now (Workstream
   QA will clean up).

3. Lighting: dark ambient + a single cyan key light. No purple. No warm sunset.

4. Use FrameAnimation.tsx and WindowLighting.tsx if they serve the effect; if
   they're MacBook-specific, leave them alone for QA to prune later.

5. Ensure scroll interaction uses existing Lenis instance (see src/App.tsx).

DO NOT touch: copy/constants, NavBar, Footer, sections (Features/Highlights/
Performance/Showcase), tokens.css, fonts.
REPORT: final scene structure, which files you modified, which should be deleted
in QA pass, any performance concerns.
```

---

## Workstream D — Navigation & chrome

**Master doc sections:** §10, §13, §14, §17

**Tool queries:**
- `python ...search.py "enterprise saas navigation dark sticky" --domain style -n 2`
- `python ...search.py "bilingual language toggle nav" --domain ux -n 2`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: rebrand NavBar, Footer, logo treatment with Makan identity.

1. src/components/NavBar.tsx:
   - Nav links: Platform, Use Cases, API, Pricing, Company (read from
     constants/index.ts once Workstream B populates it)
   - Primary CTA on the right: "Request Demo" button — cyan background
     (var(--color-cyan-500)), near-black text (var(--color-text-inverse))
   - MakanLogo component on left
   - Language toggle placeholder (EN / ع) — non-functional button for now,
     Workstream F wires onClick. Mark with data-testid="locale-toggle".

2. src/components/Footer.tsx:
   - Closing statement: "Query the World." (large, prominent, with period)
   - Column links: Product, Solutions, Developers, Company, Legal
   - Bilingual wordmark: مكان above MAKAN at bottom
   - Copyright: © Makan (no year hardcoded — use new Date().getFullYear())

3. src/components/MakanLogo.tsx:
   - Verify Arabic مكان renders ABOVE Latin MAKAN in stacked configuration
   - Use tokens: var(--color-text-primary) or var(--color-cyan-500)
   - Minimum height prop support (default 80px for full logo, 24px for mark-only)

DO NOT touch: 3D scenes, Features/Highlights/Performance/Showcase, tokens.css,
constants copy (read only), i18n files.
REPORT: final nav structure, any hex colors you couldn't token-ify, logo issues.
```

---

## Workstream E — Content sections

**Master doc sections:** §8 (all 10 use cases), §17 (voice)

**Tool queries:**
- `python ...search.py "feature grid use cases enterprise saas" --domain landing -n 3`
- `python ...search.py "proof metrics stats section" --domain landing -n 2`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: restructure the landing page sections to tell Makan's story.

Target flow after Hero:
  1. Positioning strip — "Tells you what changed in the image — and what it means."
     (from master doc §1, the Google Earth/Maps/Makan comparison)
  2. Use Cases grid — surface 6 of the 10 use cases from §8 on the landing.
     Each card: title, 1-line problem, Makan's answer, market size.
     "See all 10" link at the bottom.
  3. Architecture strip — 4 steps: Ingest → Encode → Detect → Deliver. Small
     icon per step, real timing badge ("<24h from pass to alert").
  4. Proof strip — 3 big numbers: 300M km²/day indexed, <24h alert latency,
     95% detection accuracy. Monospace (IBM Plex Mono via Workstream G).
  5. Closing CTA — "Query the World." in display size + Request Demo button.

Map onto existing components (rename semantically if helpful, but keep filenames):
- Features.tsx → Use Cases grid
- Highlights.tsx → Architecture strip
- Performance.tsx → Proof metrics
- Showcase.tsx → Closing CTA
- AnimatedText.tsx, NarrativeText.tsx, GlassOverlay.tsx → use as needed within above

Read all copy from src/constants/index.ts (Workstream B populates it). Do not
hardcode strings.

DO NOT touch: 3D scenes, NavBar, Footer, tokens, constants file itself, i18n.
REPORT: final section order, which components were repurposed, unused sections
to delete in QA.
```

---

## Workstream F — i18n / RTL support

**Master doc sections:** §14 (multilingual strategy)

**Tool queries:**
- `python ...search.py "rtl arabic bilingual layout" --domain ux -n 3`
- `python ...search.py "language switcher react context" --domain style -n 2`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: add full Arabic/English bilingual infrastructure.

1. Create src/i18n/index.ts — lightweight context-based locale system, no
   external lib. Exports:
   - LocaleProvider (React component)
   - useLocale() → { locale, setLocale, t, dir }
   - t(key) looks up strings from locale map

2. Create src/i18n/en.ts and src/i18n/ar.ts — string maps keyed identically.
   Pull English from constants/index.ts. For ar.ts, use the `ar:` placeholders
   Workstream B put in constants — translate any empty ones using master doc §14
   glossary (Query the World → استعلم عن العالم, Platform → المنصة, etc.).

3. Wrap <App /> in <LocaleProvider> inside src/main.tsx.

4. In LocaleProvider, on every locale change:
   - document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
   - document.documentElement.lang = locale
   - Persist to localStorage under key 'makan.locale'

5. Wire the language toggle placed by Workstream D in NavBar.tsx (look for
   data-testid="locale-toggle") to call setLocale('en'|'ar').

6. Add RTL CSS rules to src/index.css:
   [dir="rtl"] .flip-in-rtl { transform: scaleX(-1); }
   Then add className="flip-in-rtl" to directional icons (chevrons, arrows,
   progress indicators) anywhere they appear.

7. Numbers stay LTR inside RTL text — prefer Western Arabic numerals (0-9).

DO NOT touch: 3D scenes, tokens.css, section internal JSX (just the strings
they read), NavBar beyond the toggle wiring.
REPORT: how to toggle, any untranslated keys, RTL layout bugs you noticed.
```

---

## Workstream G — Typography & font loading

**Master doc sections:** §11 (IBM Plex)

**Tool queries:**
- `python ...search.py "ibm plex sans arabic bilingual" --domain typography -n 3`
- `python ...search.py "type scale enterprise saas" --domain typography -n 2`

**Prompt:**

```
[PREPEND SHARED PREAMBLE]

Your job: switch the site to IBM Plex (Sans, Sans Arabic, Mono).

1. In index.html <head>, add Google Fonts <link> tags:
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

2. Delete the old Apple SF-style .otf fonts from public/fonts/ (thin.otf,
   light.otf, ultralight.otf, regular.otf, medium.otf, semibold.otf, bold.otf,
   heavy.otf, black.otf — they're unused after this migration).

3. Remove any @font-face rules pointing at those .otf files from src/index.css.

4. In src/index.css, define:
   :root {
     --font-sans: 'IBM Plex Sans', sans-serif;
     --font-sans-ar: 'IBM Plex Sans Arabic', sans-serif;
     --font-mono: 'IBM Plex Mono', monospace;
   }

5. Apply by language:
   html, body { font-family: var(--font-sans); }
   [lang="ar"] { font-family: var(--font-sans-ar); }
   code, .mono, .coord, .timestamp, .metric-value { font-family: var(--font-mono); }

6. Type scale from master doc §11:
   Display: 48-72px / line-height 1.1 / bold
   Headline: 32-44px / 1.15 / semibold
   Title: 22-28px / 1.2 / semibold
   Body: 14-16px / 1.6 / regular
   Small: 11-13px / 1.5
   Mono: 12-14px / 1.4

7. Arabic text is 1-2px larger than Latin at same scale. Set on [lang="ar"].

DO NOT touch: component JSX, 3D scenes, constants copy, tokens.css colors.
REPORT: what was deleted from public/fonts/, any files still referencing old fonts.
```

---

## QA / Final pass (run alone after all others finish)

```
You are the QA agent for the Makan landing page migration. Read CLAUDE.md first.

Your job: verify the site builds, looks correct, and has no violations.

1. cd C:\Users\aazh\Projects\makan && npm install
2. npm run dev — visit http://localhost:3000 and http://localhost:3000/#/hybrid
3. npm run lint && npm run build — fix any errors
4. Grep src/ for violations:
   - hex colors outside tokens.css: grep -rn '#[0-9A-Fa-f]\{6\}' src/ --exclude styles/tokens.css
   - purple/violet: grep -rniE '(purple|violet|#[7-9a-f][0-9a-f][0-9a-f][0-9a-f][ef][0-9a-f])' src/
   - banned phrases: grep -rniE '(leverage|unlock|cutting-edge|seamless|world-class|innovative|empowers)' src/
   - bad brand casing: grep -rn 'MAKAN\|makan' src/ | grep -v 'MakanLogo\|class="MAKAN"\|MakanHeroScene'
   - "Query the World" without period: grep -rn 'Query the World[^.]' src/
5. Remove dead MacBook-only files (Macbook.tsx, Macbook-14.tsx, Macbook-16.tsx,
   anything no longer imported). Confirm nothing breaks.
6. Check Lighthouse perf on localhost:3000 — report score.
7. Test RTL: set locale to ar in localStorage, reload, verify dir="rtl" and
   nothing is visually broken.

REPORT: all violations found, all files deleted, Lighthouse score, screenshots
of the landing page in EN and AR.
```

---

## Verification checklist (every workstream agent self-checks before reporting done)

- [ ] Re-read `CLAUDE.md` — nothing in the diff violates any rule
- [ ] No `#[0-9A-Fa-f]{3,6}` hex outside `src/styles/tokens.css`
- [ ] Zero purple/violet anywhere
- [ ] Zero banned copy phrases
- [ ] Brand name spelled `Makan` (not MAKAN/makan) in prose
- [ ] Tagline reads exactly `Query the World.` with period
- [ ] No stock-photo humans, no "AI brain" illustrations, no Lorem Ipsum
- [ ] Only files in the workstream's ownership row were modified
- [ ] `npm run lint` passes on touched files
