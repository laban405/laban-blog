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

- [x] **Google Search Console** — property verified, sitemap `https://laban.mikrosell.com/sitemap.xml` submitted.

- [ ] **OG banner 1200×630** — Current OG image is portrait (1247×1280) and gets cropped on LinkedIn/WhatsApp/Slack. Design a landscape banner in Canva (name + "Frontend Engineer · AI Specialist" + tech stack, emerald palette). Save as `/public/assets/og-banner.jpg`. Update `openGraph.images` and `twitter.images` in `src/app/layout.tsx`.

- [x] **Delete unused assets** — `laban_casual.png` and `laban_suit.png` deleted (superseded by WebP). ~4.6 MB removed from Docker image.

- [x] **Font subsetting + woff2 conversion** — all 8 active fonts subsetted to Latin + punctuation and converted to woff2. Size per file: ~66 KB → 16 KB (75% smaller). `layout.tsx` updated to load `.woff2` files. Total font payload: ~528 KB → ~128 KB.

- [x] **Delete unused font files** — 4 unreferenced `stack-sans-text-*.ttf` + 8 superseded `*.ttf` files deleted. ~780 KB removed from Docker image.

---

## Portfolio Content

- [x] **Add 3 detailed case studies** — KamsGuard IoT (96% efficiency, 5,000+ devices), Kyosk micro-frontend migration (50% velocity, 3× delivery), NTSA transport system (500K+ vehicles). Each shows problem, outcome, metrics, and stack.
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
