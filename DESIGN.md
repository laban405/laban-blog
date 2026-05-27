---
name: Laban Portfolio
description: High-end editorial portfolio for frontend engineering and AI craftsmanship.
colors:
  bg-warm: "#f5f3ef"
  text-ink: "#18181b"
  surface-soft: "#f2f1ed"
  accent-emerald: "#30815a"
  border-mist: "#c6ccc7"
  muted-stone: "#6d6f68"
  signal-gold: "#f2bf2b"
typography:
  display:
    fontFamily: "var(--font-stack-sans-notch), sans-serif"
    fontSize: "clamp(62px, 8.5vw, 98px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "var(--font-stack-sans-notch), sans-serif"
    fontSize: "clamp(46px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  title:
    fontFamily: "var(--font-stack-sans-notch), sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "var(--font-stack-sans-text), sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "var(--font-stack-sans-text), sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  section: "90px"
components:
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  card-default:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  card-cta:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  chip-skill:
    backgroundColor: "{colors.bg-warm}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  nav-top:
    backgroundColor: "{colors.bg-warm}"
    textColor: "{colors.text-ink}"
    height: "76px"
---

# Design System: Laban Portfolio

## 1. Overview

**Creative North Star: "The Editorial Engine"**

This system presents technical mastery with editorial discipline. It uses strong typographic contrast, warm neutrals, and restrained accent deployment to make work feel intentional rather than promotional. Density stays controlled so each section reads like a designed spread, not a utility dashboard.

The mood is refined and restrained, but never sterile. Micro-interactions communicate craft and responsiveness without theatrical motion. Surface and copy choices prioritize credibility, clarity, and focused storytelling.

This system explicitly rejects SaaS dashboard aesthetics, generic UI kit sameness, and excessive neutrality that erases personality.

**Key Characteristics:**
- Bold display typography with tight tracking
- Warm neutral surfaces with one strategic accent family
- Tonal layering instead of heavy shadow theatrics
- Border-led structure and disciplined spacing rhythm
- Motion used for emphasis, not decoration

## 2. Colors

The palette is warm, grounded, and editorial, anchored by neutral paper-like surfaces and a controlled emerald accent.

### Primary
- **Engine Emerald** (`#30815a`): Used for high-value emphasis, portraits, score accents, and selective call-to-action moments.

### Neutral
- **Paper Warm** (`#f5f3ef`): Primary page field and atmospheric background.
- **Soft Stock** (`#f2f1ed`): Card and container surfaces for tonal separation.
- **Ink Black** (`#18181b`): Main text and high-contrast UI labels.
- **Mist Border** (`#c6ccc7`): Structural separators, card borders, and list dividers.
- **Stone Muted** (`#6d6f68`): Supporting metadata and secondary text.

### Tertiary
- **Signal Gold** (`#f2bf2b`): Rare trust/quality indicator for rating-like moments only.

### Named Rules
**The One-Voice Accent Rule.** Emerald is the only recurring accent family. Do not introduce competing saturated accents.

**The Warm Field Rule.** Neutral backgrounds stay warm-tinted. Pure grayscale neutrals are prohibited.

## 3. Typography

**Display Font:** Stack Sans Notch (`var(--font-stack-sans-notch), sans-serif`)
**Body Font:** Stack Sans Text (`var(--font-stack-sans-text), sans-serif`)
**Label/Mono Font:** Stack Sans Text (`var(--font-stack-sans-text), sans-serif`)

**Character:** The pairing is architectural and modern, with assertive display rhythm balanced by highly readable long-form body texture.

### Hierarchy
- **Display** (600, `clamp(62px, 8.5vw, 98px)`, 1.03): Hero headlines and section-defining statements.
- **Headline** (600, `clamp(46px, 5vw, 64px)`, 1.03): Major section titles and narrative transitions.
- **Title** (600, `28px`, 1.2): Card and content block headers.
- **Body** (400, `16px`, 1.8): Reading content and descriptive copy; keep line length in the 65-75ch range.
- **Label** (500, `11px`, `0.12em`, uppercase): Navigation, chips, and micro-UI language.

### Named Rules
**The Tight-Headline Rule.** Display and headline lines always use negative tracking and compact leading to preserve editorial authority.

## 4. Elevation

Depth is communicated primarily through tonal layering, border contrast, and careful background mixing rather than heavy drop shadows. Surfaces separate by value and tint steps, not by dramatic blur.

### Named Rules
**The Tonal Depth Rule.** At rest, components differentiate with tone and border. Shadow is stateful and minimal.

## 5. Components

### Buttons
- **Shape:** Fully rounded pill (`999px`) for ghost actions.
- **Primary:** Emphasis actions use emerald-tinted surfaces with restrained contrast.
- **Hover / Focus:** Fast, subtle state transitions (`0.2s`) with color or underline shifts, never bounce.
- **Ghost:** Transparent fill with 1px border and uppercase label language.

### Chips
- **Style:** Pill chips with warm mixed background, 1px border, and compact uppercase-adjacent text rhythm.
- **State:** Static informational tags; no saturated fill states by default.

### Cards / Containers
- **Corner Style:** Soft square (`8px`).
- **Background:** Neutral tonal surfaces, with selective accent tint for CTA cards.
- **Shadow Strategy:** Tonal layering first, no permanent heavy shadows.
- **Border:** 1px mist border defines shape.
- **Internal Padding:** Medium interior rhythm (`22px`).

### Inputs / Fields
- **Style:** Transparent background with bottom-border emphasis.
- **Focus:** Outline removed, clarity provided by contrast and context.
- **Error / Disabled:** Preserve minimalist form language, switch only semantic color roles.

### Navigation
- Sticky top navigation with warm translucent surface, 8px backdrop blur, uppercase micro-labels, and wide tracking.

## 6. Do's and Don'ts

### Do:
- **Do** use warm neutral fields (`#f5f3ef`, `#f2f1ed`) as the dominant canvas.
- **Do** enforce uppercase micro-typography for navigational and utility labels.
- **Do** use 1px structural borders (`#c6ccc7`) to organize sections and lists.
- **Do** keep motion smooth and purposeful with short ease-out transitions.

### Don't:
- **Don't** use SaaS dashboard aesthetics.
- **Don't** use generic UI kits.
- **Don't** introduce excessive neutrality that removes tonal warmth and identity.
- **Don't** use gradient text treatments.
- **Don't** use colored side-stripe borders as card accents.
