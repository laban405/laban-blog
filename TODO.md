# TODO

## SEO

### ✅ Done

- [x] **Hero image `priority` prop** — added. Also converted to WebP (`laban_casual.webp`, 94 KB).
- [x] **Stats heading tags** — `Stats.tsx`: `<h2>` → `<p className="stat-big">` for all three numbers.
- [x] **Header logo heading tag** — `HeaderSection.tsx`: `<h3>` → `<p>`.
- [x] **Section IDs** — `id="career"` and `id="testimonials"` added.
- [x] **JSON-LD structured data** — `Person` schema in `src/app/layout.tsx`. Includes jobTitle, knowsAbout (expanded with Claude API, LLM, Node.js, Flutter), sameAs.
- [x] **WebP conversion** — all three portraits converted (97% smaller each). All `<Image>` src props updated.
- [x] **Positioning update** — title, description, keywords, OG/Twitter tags, JSON-LD all updated to "Frontend Engineer · AI Specialist" framing.

### ⏳ Pending

- [ ] **Google Search Console** — Go to [search.google.com/search-console](https://search.google.com/search-console), add `https://laban.mikrosell.com`, choose HTML tag verification, paste the `content` value into `src/app/layout.tsx`:
  ```ts
  verification: { google: "paste-value-here" }
  ```
  Deploy → verify → submit sitemap `https://laban.mikrosell.com/sitemap.xml`.

- [ ] **OG banner 1200×630** — Current OG image is portrait (1247×1280) and gets cropped on LinkedIn/WhatsApp/Slack. Design a landscape banner in Canva (name + "Frontend Engineer · AI Specialist" + tech stack, emerald palette). Save as `/public/assets/og-banner.jpg`. Update `openGraph.images` and `twitter.images` in `src/app/layout.tsx`.

- [ ] **Delete unused assets** — not referenced anywhere, just bloat in Docker image:
  - `public/assets/laban_potrait.png` (~1.5 MB)
  - `public/assets/picofme.png` (~747 KB) — WebP version already exists

- [ ] **Font subsetting** *(low priority)* — 8 TTF files ~500 KB total. Use `pyftsubset` or glyphhanger to subset to Latin + punctuation. `display: swap` already set so this is not urgent.

---

## Portfolio Content

- [ ] **Add 3 detailed case studies** — NTSA transport system, KamsGuard IoT portal, Kyosk micro-frontend migration. Each needs: problem, your role, stack, measurable outcome. Use real numbers from CV.
- [ ] **Add cal.com / Calendly booking link to CTA** — the "Let's Work Together →" button currently links to `#contact`. Consider pointing it directly to a booking link.
- [ ] **Hero copy** — confirm final wording. Currently reads: *"I build AI-enabled systems that scale, driving faster delivery, better user experiences, and smarter product behavior."* Consider updating to reflect the AI + frontend positioning more sharply.

---

## Business / Launch

- [ ] **Set up cal.com** — free tier, two slots: "Free 20-min Discovery Call" and "60-min Technical Consultation ($150)". Add link to portfolio and LinkedIn.
- [ ] **Set up Wise account** — for USD/EUR international payments.
- [ ] **Create Wave.com invoice template** — free, looks professional.
- [ ] **Write 3 fixed-price service packages** — scope, price, timeline. Publish on LinkedIn and portfolio.
- [ ] **LinkedIn "Open to freelance" mode** — set in profile settings.
- [ ] **LinkedIn announcement post** — template in `mikrosell_launch_plan.md` → Social Posts section.
- [ ] **Upwork profile** — complete to 100%, add portfolio pieces.
- [ ] **Toptal** — set availability active, update rate to $65–80/hr.
