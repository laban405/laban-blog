# SEO Audit — laban.mikrosell.com

**Date:** 2026-06-23  
**Audited by:** Claude Code  
**Stack:** Next.js 13.4 · App Router · TypeScript · Tailwind

---

## Summary

| Category | Status |
|---|---|
| Title tag | ✅ Done |
| Meta description | ✅ Done |
| Open Graph tags | ✅ Done (image suboptimal — see below) |
| Twitter card | ✅ Done |
| Canonical URL | ✅ Done |
| H1 tag | ✅ Done |
| Image alt text | ✅ Mostly done |
| sitemap.xml | ✅ Done |
| robots.txt | ✅ Done |
| Structured data (JSON-LD) | ❌ Missing |
| LCP image performance | ❌ Critical issues |
| OG image dimensions | ⚠️ Suboptimal |
| Heading hierarchy | ⚠️ Issues found |
| Google Search Console | 🔲 Pending manual action |

---

## ❌ Critical Issues

### 1. No JSON-LD Structured Data

**Impact:** High. Google uses schema.org markup to power rich results and understand entities. A portfolio site without `Person` schema is a missed opportunity for personal brand indexing.

**Fix:** Add a `<script type="application/ld+json">` block to `src/app/layout.tsx`:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Laban Mogire",
  jobTitle: "Senior Frontend Engineer",
  url: "https://laban.mikrosell.com",
  email: "laban405@gmail.com",
  telephone: "+254797313732",
  sameAs: [
    "https://www.linkedin.com/in/laban405/",
    "https://github.com/laban405",
  ],
  knowsAbout: [
    "React", "Next.js", "Angular", "TypeScript",
    "Micro-frontend Architecture", "IoT UI", "AI Integration",
  ],
};

// Inside <head> via Next.js Script or directly in layout:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

### 2. Hero Portrait — 2.3 MB PNG, No `priority` Prop

**File:** `src/features/portfolio/components/landing-sections/HeroSection.tsx:50`  
**Image:** `/assets/laban_casual.png` — **2.3 MB**  
**Impact:** This is the Largest Contentful Paint (LCP) element. Without `priority`, Next.js does not preload it. A 2.3 MB image with no preload will produce a very poor LCP score (target: under 2.5s).

**Note:** `/public/assets/picofme.webp` (18 KB) exists but is not being used. `laban_casual.png` (2.3 MB PNG) is used instead. This is a ~127× size difference.

**Fix — two steps:**

1. Add `priority` to the hero `<Image>` immediately:
```tsx
<Image
  src="/assets/laban_casual.png"
  alt="Laban Mogire, Senior Frontend Engineer"
  fill
  priority        // ← add this
  className="h-36 w-36 object-cover"
/>
```

2. Convert `laban_casual.png` to WebP and swap the source. Target: under 100 KB.

---

### 3. About Section Portrait — 2.3 MB PNG, No WebP

**File:** `src/features/portfolio/components/landing-sections/AboutSection.tsx:13`  
**Image:** `/assets/laban_suit.png` — **2.3 MB**  
**Impact:** Not LCP but still a heavy image that delays load and increases bandwidth cost on mobile.

**Fix:** Convert to WebP (target: under 150 KB) and swap the `src`.

---

## ⚠️ High Issues

### 4. OG Image is Portrait (1247×1280), Not Landscape

**File:** `src/app/layout.tsx:38–45`  
**Impact:** LinkedIn, WhatsApp, Slack, and Facebook crop social share previews to a landscape ratio (ideally 1200×630). A portrait image will show a heavily cropped thumbnail that looks unintentional.

**Fix:** Create a branded 1200×630 banner image (Figma, Canva, or any design tool). Save as `/public/assets/og-banner.jpg`. Then update `src/app/layout.tsx`:
```ts
images: [{ url: "/assets/og-banner.jpg", width: 1200, height: 630, alt: "Laban Mogire — Senior Frontend Engineer" }]
// and twitter:
images: ["/assets/og-banner.jpg"]
```

**Content suggestion for the banner:** Name + title + tech stack pills + emerald accent — matches the current site aesthetic.

---

### 5. Stats Numbers Use `<h2>` Semantically

**File:** `src/features/portfolio/components/landing-sections/Stats.tsx:5,11,17`  
**Impact:** The numbers `5+`, `6+`, `10+` are rendered as `<h2>` elements. Screen readers and crawlers see these as major section headings, which pollutes the heading outline and signals poor document structure.

**Fix:** Replace with `<p>` or `<span>` and apply the visual style via CSS class:
```tsx
// Before
<h2 className="">5+</h2>

// After
<p className="stat-big">5+</p>
```

Add `.stat-big` styles from the existing `globals.css` `stat-big` class (already defined there).

---

### 6. Header Logo Uses `<h3>`

**File:** `src/features/portfolio/components/landing-sections/HeaderSection.tsx:9`  
**Impact:** The site logo "LM." is wrapped in `<h3>`. It's neither a heading nor logically a child of an `<h2>`. Crawlers see a `<h3>` before any `<h1>` or `<h2>`, which is invalid document outline.

**Fix:** Change `<h3>` to `<span>` or `<p>` and replicate the styles with `className`:
```tsx
// Before
<h3 className="text-[1.5rem] tracking-[-0.03em] ...">L<span className="text-primary">M.</span></h3>

// After
<p className="text-[1.5rem] font-semibold tracking-[-0.03em] ...">L<span className="text-primary">M.</span></p>
```

---

### 7. Google Search Console — Not Submitted

**Impact:** Without GSC verification, Google has no confirmed owner for the domain and won't send you index coverage or manual action alerts.

**Steps:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://laban.mikrosell.com`
3. Choose **HTML tag** verification — copy the `content` value from the meta tag they give you
4. In `src/app/layout.tsx`, add to the `metadata` object:
```ts
verification: {
  google: "paste-your-content-value-here",
},
```
5. Deploy, then click **Verify** in GSC
6. Submit sitemap: `https://laban.mikrosell.com/sitemap.xml`

---

## ⚠️ Medium Issues

### 8. CareerSection and TestimonialsSection Have No Section IDs

**Files:**
- `src/features/portfolio/components/landing-sections/CareerSection.tsx:6`
- `src/features/portfolio/components/landing-sections/TestimonialsSection.tsx:36`

**Impact:** These sections can't be directly linked to (e.g. from external sites or a future `#career` nav link). Not a ranking issue today but limits deep-link shareability.

**Fix:** Add `id="career"` and `id="testimonials"` respectively.

---

### 9. Eight Font Files (No Subsetting)

**Location:** `public/fonts/` — 8 TTF files totalling ~500 KB  
**Impact:** All 8 weights are downloaded on first visit. `display: swap` means text is shown in a fallback font briefly, but 500 KB of fonts is a Largest Contentful Paint and Total Blocking Time contributor.

**Fix (optional, lower priority):** Subset the fonts to include only the character sets actually used (Latin characters, numbers, punctuation). Tools: `pyftsubset` (fonttools), `glyphhanger`, or Fontaine. Can reduce each file by 60–80%.

---

## ✅ Resolved Items

| Item | Detail |
|---|---|
| Title tag | `Laban Mogire \| Senior Frontend Engineer — React, Next.js & Angular` |
| Meta description | 160-char keyword-targeted description |
| OG `og:type`, `og:url`, `og:title`, `og:description` | All set in `src/app/layout.tsx` |
| Twitter `summary_large_image` card | Set with `@laban_mogire` creator |
| Canonical URL | `https://laban.mikrosell.com` |
| H1 | `motion.h1` renders as `<h1>` with sr-only "Senior Frontend Engineer" appended |
| Alt text — hero portrait | `"Laban Mogire, Senior Frontend Engineer"` |
| Alt text — about portrait | `"Laban Mogire, Senior Frontend Engineer based in Nairobi"` |
| Alt text — footer portrait | `"Laban Mogire Software Engineer"` |
| `sitemap.xml` | Auto-generated at `/sitemap.xml` via `src/app/sitemap.ts` |
| `robots.txt` | Auto-generated at `/robots.txt` with sitemap reference |
| `lang="en"` on `<html>` | Present |
| `metadataBase` | Set — relative image URLs resolve correctly |

---

## Prioritised Fix Order

| Priority | Fix | Effort |
|---|---|---|
| 1 | Add `priority` to hero `<Image>` | 2 min |
| 2 | Fix Stats `<h2>` → `<p>` numbers | 5 min |
| 3 | Fix header logo `<h3>` → `<p>` | 2 min |
| 4 | Add JSON-LD `Person` schema | 15 min |
| 5 | Submit to Google Search Console | 10 min |
| 6 | Create 1200×630 OG banner image | 30–60 min (design work) |
| 7 | Convert hero + about portraits to WebP | 10 min (convert + swap) |
| 8 | Add `id` to Career and Testimonials sections | 2 min |
| 9 | Font subsetting | 30 min |
