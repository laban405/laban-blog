# SEO Audit — laban.mikrosell.com

**Last updated:** 2026-06-24  
**Stack:** Next.js 13.4 · App Router · TypeScript · Tailwind

---

## Status Overview

| Item | Status |
|---|---|
| Title tag | ✅ Updated |
| Meta description | ✅ Updated |
| Keywords | ✅ Updated |
| Open Graph tags | ✅ Updated |
| Twitter card | ✅ Updated |
| Canonical URL | ✅ Done |
| JSON-LD structured data | ✅ Done |
| Hero image `priority` prop | ✅ Done |
| Hero + About + Footer images → WebP | ✅ Done |
| Stats heading tags `<h2>` → `<p>` | ✅ Done |
| Header logo `<h3>` → `<p>` | ✅ Done |
| Section IDs (Career, Testimonials) | ✅ Done |
| sitemap.xml | ✅ Auto-generated |
| robots.txt | ✅ Auto-generated |
| OG image dimensions (1200×630) | ❌ Still portrait — design work needed |
| Google Search Console | ✅ Done |
| Unused heavy assets deleted | 🔲 Pending |
| Font subsetting + woff2 conversion | ✅ Done |

---

## ❌ Remaining Issues

### 1. OG Image is Portrait (1247×1280)

**File:** `src/app/layout.tsx` — `openGraph.images` and `twitter.images`  
**Current image:** `/assets/laban_clean.jpg` — portrait orientation  
**Impact:** LinkedIn, WhatsApp, Facebook, and Slack all crop to landscape (1200×630). This produces a heavily cropped thumbnail that looks unintentional.

**Fix:**
1. Design a 1200×630 banner in Canva or Figma — name + "Frontend Engineer · AI Specialist" + tech stack pills, emerald/cream palette
2. Save as `/public/assets/og-banner.jpg`
3. Update `src/app/layout.tsx`:
```ts
openGraph: {
  images: [{ url: "/assets/og-banner.jpg", width: 1200, height: 630, alt: "Laban Mogire — Frontend Engineer & AI Specialist" }],
},
twitter: {
  images: ["/assets/og-banner.jpg"],
},
```

---

### 2. Google Search Console Not Verified

**Impact:** Google has no confirmed owner for the domain. No index coverage alerts, no manual action notifications, no Core Web Vitals data.

**Steps:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://laban.mikrosell.com`
3. Choose **HTML tag** verification — copy the `content` value
4. Add to `src/app/layout.tsx` inside `metadata`:
```ts
verification: {
  google: "paste-your-content-value-here",
},
```
5. Deploy, then click **Verify** in GSC
6. Submit sitemap: `https://laban.mikrosell.com/sitemap.xml`

---

### 3. Unused Heavy Assets Still in `/public`

**Files:**
- `public/assets/laban_potrait.png` — ~1.5 MB, not referenced anywhere
- `public/assets/picofme.png` — ~747 KB, not referenced (WebP version `picofme.webp` at 18 KB already exists)
- `public/fonts/stack/stack-sans-text-{400,500,600,700}.ttf` — 4 TTF files, not loaded by `layout.tsx` (the `--font-stack-sans-text` variable is served by `mozilla-text-*.woff2`)

**Impact:** These inflate the Docker image and add deploy time. No SEO impact but worth cleaning up.

**Fix:** Delete all listed files.

---


## ✅ Resolved Items

| Item | Detail |
|---|---|
| Title tag | `Laban Mogire \| AI-Native Frontend Engineer — React, Next.js & Angular` |
| Meta description | Frontend + AI specialist framing, 6+ years experience |
| Keywords | Updated: "AI Frontend Engineer", "LLM UI Engineer", "Frontend AI Specialist", etc. |
| OG / Twitter titles | Updated to "AI-Native Frontend Engineer" |
| JSON-LD `jobTitle` | `"Frontend Engineer & AI Integration Specialist"` |
| JSON-LD `knowsAbout` | Expanded: Claude API, LLM Applications, Flutter, Node.js, Full-Stack |
| Canonical URL | `https://laban.mikrosell.com` |
| Hero image `priority` | Added — Next.js now preloads the LCP image |
| Hero image WebP | `laban_casual.png` (2.3 MB) → `laban_casual.webp` (94 KB) — 97% smaller |
| About image WebP | `laban_suit.png` (2.3 MB) → `laban_suit.webp` (90 KB) — 97% smaller |
| Footer image WebP | Also converted and updated |
| Stats `<h2>` → `<p>` | `Stats.tsx` — all three stat numbers now use `<p className="stat-big">` |
| Header logo `<h3>` → `<p>` | `HeaderSection.tsx` — logo element now uses `<p>` |
| Section IDs | `id="career"` and `id="testimonials"` added |
| `sitemap.xml` | Auto-generated via `src/app/sitemap.ts` |
| `robots.txt` | Auto-generated with sitemap reference |
| `lang="en"` | Present on `<html>` |
| `metadataBase` | Set — relative image URLs resolve correctly |
| `h1` | Renders correctly via `motion.h1` |
| Alt text | All three portrait images have descriptive alt text |

---

## Prioritised Remaining Actions

| Priority | Action | Effort |
|---|---|---|
| 1 | Submit to Google Search Console | 10 min |
| 2 | Create 1200×630 OG banner image | 30–60 min (design) |
| 3 | Update `og-banner.jpg` references in `layout.tsx` | 5 min |
| 4 | Delete unused assets (`laban_potrait.png`, `picofme.png`) | 2 min |
| 5 | Font subsetting | 30 min |
