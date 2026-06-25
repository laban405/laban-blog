# OG Banner Design Brief — laban.mikrosell.com
Create this in Canva. Exact spec: **1200 × 630 px**. Save as `og-banner.jpg`, drop into `public/assets/`, tell Claude Code to wire it up.

---

## Content

**Left side (60% of width):**
- Name: `Laban Mogire` — large, heading weight
- Title: `Frontend Engineer · AI Specialist` — smaller, muted
- Stack line: `React · Angular · Next.js · Flutter · Claude API` — small, pill style or plain text
- Location: `Nairobi, Kenya · Available Globally` — smallest, muted

**Right side (40% of width):**
- Profile photo: use `/public/assets/laban_casual.webp`
- Circular crop, no border or with a thin emerald border

---

## Visual Style
- **Background:** warm off-white / cream — matches site (`hsl(45, 20%, 96%)` approx)
- **Accent colour:** emerald green — `#30815a` (same as `--primary` on the site)
- **Typography:** bold weight for name, regular for everything else. Use a clean sans-serif (Inter, DM Sans, or similar — Canva has both)
- **No gradients, no dark background, no neon accents**
- Minimal — lots of breathing room. This is not a banner ad.

---

## Optional elements
- A thin emerald horizontal rule between name and stack line
- A small `laban.mikrosell.com` URL in the bottom-right corner (very small, muted)
- A subtle `LM.` monogram in emerald in one corner (matches the site header)

---

## After creating it

1. Export as JPG, quality 85%+
2. Save to `/Users/laban/Documents/learning/consultancy/laban-blog/public/assets/og-banner.jpg`
3. Tell Claude Code — it will update `src/app/layout.tsx` with:
```ts
openGraph: {
  images: [{ url: "/assets/og-banner.jpg", width: 1200, height: 630, alt: "Laban Mogire — Frontend Engineer & AI Specialist" }],
},
twitter: {
  images: ["/assets/og-banner.jpg"],
},
```
