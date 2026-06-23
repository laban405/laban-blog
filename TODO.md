# TODO

## SEO

- [ ] **OG image** — Create a proper 1200×630 landscape banner (Figma/Canva) and save to `public/assets/og-banner.jpg`, then update the two image references in `src/app/layout.tsx` (`openGraph.images` and `twitter.images`). Current image is portrait (1247×1280) and will be cropped on LinkedIn/WhatsApp.
- [ ] **Google Search Console** — After deploying, add `https://laban.mikrosell.com` as a property, verify ownership (paste the HTML meta tag into the `verification` field in `src/app/layout.tsx`), then submit `https://laban.mikrosell.com/sitemap.xml`.
