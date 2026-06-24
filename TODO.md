# TODO

## SEO

### Quick wins (< 5 min each)

- [x] **Add `priority` to hero image** — done. Also converted to WebP (see below).
- [x] **Fix Stats heading tags** — `Stats.tsx`: `<h2>` → `<p className="stat-big">` for all three stat numbers.
- [x] **Fix header logo heading tag** — `HeaderSection.tsx`: `<h3>` → `<p className="font-semibold ...">`.
- [x] **Add section IDs to Career and Testimonials** — `id="career"` and `id="testimonials"` added.

### Medium effort

- [x] **Add JSON-LD structured data** — `Person` schema added to `src/app/layout.tsx`. Includes name, jobTitle, url, email, telephone, sameAs (LinkedIn + GitHub), and knowsAbout.
- [x] **Convert hero + about + footer portraits to WebP** — converted with Pillow (quality 82):
  - `laban_casual.png` 2,350 KB → `laban_casual.webp` 94 KB (97% smaller)
  - `laban_suit.png` 2,383 KB → `laban_suit.webp` 90 KB (97% smaller)
  - All three `<Image>` src props updated (HeroSection, AboutSection, FooterSection). Hero also has `priority`.

- [ ] **Google Search Console** — After deploying, go to [search.google.com/search-console](https://search.google.com/search-console), add `https://laban.mikrosell.com` as a property, choose "HTML tag" verification, copy the `content` value, and add it to `src/app/layout.tsx`:
  ```ts
  verification: { google: "paste-value-here" }
  ```
  Then deploy and verify. Submit sitemap: `https://laban.mikrosell.com/sitemap.xml`.

### Design work required

- [ ] **OG image (1200×630 landscape)** — The current OG image (`/assets/laban_clean.jpg`) is portrait (1247×1280) and will be cropped when shared on LinkedIn, WhatsApp, or Slack. Design a proper 1200×630 banner in Figma or Canva — name + title + tech stack, matching the site's emerald/cream palette. Save as `/public/assets/og-banner.jpg`, then update both `openGraph.images` and `twitter.images` in `src/app/layout.tsx`.

### Lower priority

- [ ] **Delete unused heavy assets** — these files are not referenced anywhere in the codebase and are dead weight in the Docker image:
  - `public/assets/laban_potrait.png` — 1.5 MB, unreferenced
  - `public/assets/picofme.png` — 747 KB, unreferenced (WebP version `picofme.webp` at 18 KB already exists)

- [ ] **Font subsetting** — 8 TTF font files load on every visit (~500 KB total). Subsetting them to Latin + punctuation only would cut each file by 60–80%. Use `pyftsubset` (fonttools) or an online tool like `glyphhanger`. Not urgent since `display: swap` is already set.
