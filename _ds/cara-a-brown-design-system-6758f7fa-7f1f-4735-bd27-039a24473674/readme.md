# Cara A. Brown — Design System

A print-first personal brand system for **Cara A. Brown, MBA** — Principal Service Designer. It exists to produce professional documents that read as decisive, factual, and credential-forward: resumes, cover letters, pitch documents, and case-study presentations.

This system is derived directly from Cara's published **Resume Format Style Guide**:
**Source:** https://caraabrown.github.io/resumestyleguide/ (fetched July 2026)

There is **no attached codebase or Figma file** — the style guide is the single ground truth. All numeric values (point sizes, inch margins, tracking, colors) are copied verbatim from it. Where this system extends beyond the guide (slide system, cover-letter match table as a reusable component), it is noted under "Intentional additions."

---

## Brand at a glance

Cara's brand is **corporate, professional, refined, and minimal**. It is built almost entirely from typography, whitespace, and a single navy/accent-blue axis — no decorative color, no gradients, no illustration, no icons. The recurring signature device is a **2px accent-blue bar** (`.hbar`) under the header. The medium is the printed page (US Letter, 8.5×11in).

---

## CONTENT FUNDAMENTALS

How the brand writes.

- **Voice:** Third-person / credential-forward in the synopsis ("Proven Principal Service Designer with enterprise-scale impact…"). First-person only in cover letters ("I am writing to…"). Never chatty, never confessional.
- **Tone:** Direct, factual, outcome-led — "like a pitch, not a story." Every claim is backed by a metric or a concrete deliverable.
- **Casing:** Section labels and company names are UPPERCASE with letter-spacing. Role/title lines are uppercase and tracked. Body is sentence case.
- **Bullets:** Lead with the action or outcome, never the setup. Each bullet is **≤ 2 printed lines**. Metrics are bolded with `<strong>` (e.g. **NPS: −36 → +49**). Never a bold lead-in label.
- **Numbers:** Real metrics preferred over adjectives. **Never** use "X years" / "X+ years" — use "proven" instead. No graduation years.
- **Emoji / icons:** **None, ever.** No decorative characters. Bullets are an em-dash drawn in CSS — never a typed •, ▪, or →.
- **Banned constructions (hard rule — never generate):**
  - "The work is rarely what it appears…"
  - "what looks like a technology gap is usually a diagnostic failure"
  - "I start there"
  - Any rhetorical "what looks like X is really Y" framing.
- **Banned characters in body text:** `→` (write "to"), a typed `—` as a bullet (CSS `::before` only), `#CloseTheGap` (write "CloseTheGap").
- **Synopsis rules:** exactly 1 paragraph, 100–150 words, no narrative, ends on the MBA credential (California College of the Arts, ranked #2 graduate design program globally).
- **Tools section:** dot-separated list only (`Figma · Miro · FigJam`), never sentences.
- **Title line:** max 3 role/function items, must fit on one line, roles only — never skills.

**Example synopsis tone:** "Proven Principal Service Designer with enterprise-scale impact across logistics, e-commerce, and public sector delivery — specializing in **end-to-end service design, systems diagnosis, and experience strategy**."

---

## VISUAL FOUNDATIONS

- **Color:** A near-monochrome print palette. Black `#0d0d0b` (name/headings), Ink `#1e1e1c` (body), Navy `#1a2744` (print bar / footer band), Accent Blue `#2a4080` (titles, section labels, bullet dashes, the hbar), Mid Gray `#888680` (contact, dates, captions), Rule `#dddad3` (dividers), Off-White `#efede8` (screen page background), White `#ffffff` (page surface). No tints, no gradients, no color beyond this axis.
- **Type:** One family only — **Helvetica Neue, Arial, sans-serif**. No serifs anywhere, ever. The system runs on weight (300/400/600/700), tracking, and case rather than many sizes. Print scale is point-native: Name 25pt/700/−0.02em, Company 8.5pt/700 uppercase, Job title 8pt/600 accent, Body 7.5pt/400, Labels 6pt/700/0.08em.
- **Spacing:** Print-native inches. Tight vertical rhythm (0.02–0.11in gaps), generous side margins (0.6in on the 2-page resume). Content flows naturally across pages — never locked to a page, never leaving white-space gaps.
- **Backgrounds:** Flat only. White page surface on a deep neutral (`#7a7975`) or off-white backdrop on screen; pure white in print. No images, no textures, no patterns, no full-bleed photography.
- **The hbar:** a 2px accent-blue rule under the header, page 1 only. The single brand device.
- **Borders & rules:** 1px `#dddad3` hairlines under section labels, above footers, and around table cells. No heavy borders.
- **Cards / shadows:** There are no "cards" in the document brand — content sits directly on the page. On screen only, the page sheet gets a soft drop shadow (`0 3px 18px rgba(0,0,0,0.18)`) to read as paper; removed in print. No rounded corners on document surfaces (the print-bar button uses a 2px radius only).
- **Corner radii:** Effectively 0 for document surfaces; 2px on the single UI button.
- **Animation:** None. This is print. (The slide system, an extension, also stays still — no motion by default.)
- **Hover / press states:** Only the screen-only PrintBar button has interaction; hover darkens toward navy. Documents are non-interactive.
- **Transparency / blur:** None.
- **Imagery vibe:** N/A — the brand uses no imagery.

---

## ICONOGRAPHY

**The brand uses no icons.** This is a deliberate, documented rule: "No emojis or decorative icons." There is no icon font, no SVG icon set, no unicode glyphs used as icons, and no emoji. The only recurring non-text mark is the **em-dash bullet** (drawn via CSS `::before`, never typed) and the **2px accent bar**. If a future artifact genuinely needs an icon, flag it — do not introduce one silently, and never a decorative or emoji glyph.

**Logo:** No graphic logo or wordmark asset was supplied. The identity is the name set in Helvetica Neue 700 (`Cara A. Brown, MBA`). Wherever a mark would go, set the name in type. **A logo upload is pending from the user** — see Caveats.

---

## Components

Reusable primitives, all under `components/document/`. These are print/document pieces, styled entirely via the CSS custom properties in `styles.css`.

- **ResumeHeader** — name / role line / contact lockup + accent hbar.
- **SectionLabel** — uppercase tracked accent label with hairline rule.
- **Synopsis** — the single credential-forward summary paragraph.
- **ExpertiseGrid** — single-column competency clusters (also used for Tools).
- **JobBlock** — one role: org/date header, accent title, em-dash bullets.
- **ResumeFooter** — mandatory per-page footer (name · page · portfolio).
- **HBar** — the signature 2px accent bar device.
- **PrintBar** — screen-only navy instruction bar with "Save as PDF".
- **MatchTable** — cover-letter needs/abilities table (intentional addition).

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (usage).

---

## UI Kits

- **`ui_kits/resume/`** — print-ready 2-page resume recreation (`index.html` + `Resume.jsx`). A `@startingPoint`.
- **`ui_kits/cover-letter/`** — one-page cover letter with the match table (`index.html` + `CoverLetter.jsx`). A `@startingPoint`.

## Slides

- **`slides/`** — a 16:9 case-study presentation template (Title, Section Divider, Content, Metrics, Process, Quote, Closing), sharing `slides/slide.css`. The print foundations translated to presentation scale.

## Intentional additions

- **MatchTable** — the style guide defines the cover-letter table's exact styling but not as a named component; promoted to a reusable primitive because it recurs.
- **Slide system** (`slides/`) — the guide covers resumes and cover letters only. The deck applies the same foundations (Helvetica Neue, navy/accent axis, hbar device, em-dash bullets) at presentation scale to meet the case-study-presentation need.

---

## Index / manifest (root)

- `styles.css` — global entry point (@import lines only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/document/` — the 9 primitives above.
- `ui_kits/resume/`, `ui_kits/cover-letter/` — full-document recreations.
- `slides/` — case-study slide template + `slide.css`.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry point.

---

## Caveats

- **No logo asset** — the user will upload one. Until then, the name is set in type wherever a mark would go.
- Fonts are the system stack (Helvetica Neue / Arial) — no webfont files needed, no substitution made.
