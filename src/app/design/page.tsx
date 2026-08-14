import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedButton } from "../../components/animated-button";
import { AnimatedLink } from "../../components/animated-link";

export const metadata: Metadata = {
  title: "Design System",
  description: "Design tokens, components, and guidelines extracted from the live codebase.",
  robots: { index: false, follow: false },
};

function Swatch({ varName, label }: { varName: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-md border"
        style={{ background: `hsl(var(--${varName}))`, borderColor: "hsl(var(--border))" }}
      />
      <div>
        <p className="text-[13px] font-semibold">{label}</p>
        <p className="muted font-mono text-[11px]">--{varName}</p>
      </div>
    </div>
  );
}

function PairSwatch({ bg, fg, label }: { bg: string; fg: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-md flex items-center justify-center text-sm font-semibold border"
        style={{ background: `hsl(var(--${bg}))`, color: `hsl(var(--${fg}))`, borderColor: "hsl(var(--border))" }}
      >
        Aa
      </div>
      <div>
        <p className="text-[13px] font-semibold">{label}</p>
        <p className="muted font-mono text-[11px]">--{bg} / --{fg}</p>
      </div>
    </div>
  );
}

function TokenGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Swatch varName="background" label="Background" />
      <Swatch varName="foreground" label="Foreground" />
      <Swatch varName="card" label="Card" />
      <Swatch varName="border" label="Border" />
      <PairSwatch bg="primary" fg="primary-foreground" label="Primary" />
      <PairSwatch bg="secondary" fg="secondary-foreground" label="Secondary" />
      <PairSwatch bg="muted" fg="muted-foreground" label="Muted" />
      <PairSwatch bg="accent" fg="accent-foreground" label="Accent" />
      <PairSwatch bg="destructive" fg="destructive-foreground" label="Destructive" />
      <Swatch varName="input" label="Input" />
      <Swatch varName="ring" label="Ring" />
      <Swatch varName="popover" label="Popover" />
    </div>
  );
}

const spacingScale = [
  { name: "xs", value: 8 },
  { name: "sm", value: 12 },
  { name: "md", value: 16 },
  { name: "lg", value: 22 },
  { name: "xl", value: 28 },
  { name: "section", value: 90 },
];

const radiusScale = [
  { name: "sm", value: "6px", css: "calc(var(--radius) - 2px)" },
  { name: "md", value: "8px", css: "var(--radius)" },
  { name: "pill", value: "999px", css: "999px" },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="list-line grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-start">
      <p className="caps muted pt-1">{label}</p>
      <div>{children}</div>
    </div>
  );
}

function DemoBlock({
  title,
  path,
  desc,
  children,
}: {
  title: string;
  path: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
        <h3 className="card-title" style={{ fontSize: "20px", marginBottom: 0 }}>
          {title}
        </h3>
        <p className="muted font-mono text-[11px] pt-1">{path}</p>
      </div>
      <p className="muted mb-4" style={{ fontSize: "13px" }}>
        {desc}
      </p>
      <div className="pt-2 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="pt-4">{children}</div>
      </div>
    </article>
  );
}

const sectionInventory: { name: string; anchor: string; file: string; purpose: string }[] = [
  { name: "HeaderSection", anchor: "n/a", file: "landing-sections/HeaderSection.tsx", purpose: "Sticky translucent top nav, logo, desktop links, mobile 4-up quick-nav bar." },
  { name: "HeroSection", anchor: "n/a", file: "landing-sections/HeroSection.tsx", purpose: "Full-viewport intro: portrait, name, staggered fade-up copy, primary/secondary CTAs, StatsSection." },
  { name: "AboutSection", anchor: "#about", file: "landing-sections/AboutSection.tsx", purpose: "Bio copy with portrait, centered narrow column." },
  { name: "ServicesSection", anchor: "#services", file: "landing-sections/ServicesSection.tsx", purpose: "Grid of .card items sourced from data.ts services[]." },
  { name: "SkillsSection", anchor: "#skills", file: "landing-sections/SkillsSection.tsx", purpose: "3-up .skills-grid of category cards containing .skill-chip lists." },
  { name: "ProjectsSection", anchor: "#projects", file: "landing-sections/ProjectsSection.tsx", purpose: "Border-divided .list-line rows: problem/outcome copy, metric pills, stack tags, optional screenshot." },
  { name: "CareerSection", anchor: "#career", file: "landing-sections/CareerSection.tsx", purpose: "Reveal-on-hover .career-item accordion rows plus CV download CTA." },
  { name: "TestimonialsSection", anchor: "#testimonials", file: "landing-sections/TestimonialsSection.tsx", purpose: "3-column .testi-list rows: reviewer, company/stars, quote." },
  { name: "CtaSection", anchor: "#letstalk", file: "landing-sections/CtaSection.tsx", purpose: "Full-bleed primary-color band with centered headline and two CTAs." },
  { name: "ContactSection", anchor: "#contact", file: "landing-sections/ContactSection.tsx", purpose: "react-hook-form + zod contact form (.contact-form) beside direct contact links." },
  { name: "FooterSection", anchor: "n/a", file: "landing-sections/FooterSection.tsx", purpose: "Primary-color footer band, nav repeat, social links, copyright." },
  { name: "UpdatesSection", anchor: "n/a", file: "landing-sections/UpdatesSection.tsx", purpose: "News-card grid — currently commented out in features/portfolio/index.tsx, not rendered." },
  { name: "Stats (StatsSection)", anchor: "n/a", file: "landing-sections/Stats.tsx", purpose: "Spring-animated count-up numbers, triggered on scroll-into-view." },
];

const sharedComponents: { name: string; file: string; purpose: string }[] = [
  { name: "AnimatedButton", file: "components/animated-button.tsx", purpose: "Pill button, vertical text-slide hover swap. Default styling is the ghost variant; bg/text/border overridden via className for primary/outline variants." },
  { name: "AnimatedLink", file: "components/animated-link.tsx", purpose: "Anchor with the same vertical text-slide hover effect as AnimatedButton, used for all nav and footer links." },
  { name: "CursorTrail", file: "components/cursor-trail.tsx", purpose: "Fixed-position spring-following dot + ring that replaces the system cursor. Gated on (pointer: fine); no-ops on touch devices." },
  { name: "useActiveSection", file: "hooks/useActiveSection.tsx", purpose: "IntersectionObserver + scroll-fallback hook for tracking which section is active for nav highlighting." },
];

export default function DesignSystemPage() {
  return (
    <main className="pb-24">
      <div className="container pt-10 pb-6 border-b" style={{ borderColor: "hsl(var(--border))" }}>
        <Link href="/" className="muted text-[11px] uppercase tracking-[0.12em] hover:text-primary">
          ← Back to site
        </Link>
        <h1 className="sec-title mt-3">
          Design <span className="text-primary">System.</span>
        </h1>
        <p className="muted max-w-xl mt-2">
          Tokens, components, and guidelines as implemented in this codebase — read directly from{" "}
          <span className="font-mono text-[12px]">globals.css</span>,{" "}
          <span className="font-mono text-[12px]">DESIGN.md</span>, and the section components, not redrawn from
          scratch.
        </p>
      </div>

      {/* ── Colors ───────────────────────────────────────────── */}
      <section className="container pt-14">
        <p className="caps muted mb-2">01 — Foundations</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Color Tokens
        </h2>
        <p className="muted mb-6 max-w-xl" style={{ fontSize: "13px" }}>
          shadcn-style HSL custom properties. Live-rendered from the active <span className="font-mono">:root</span> —
          what you see is the real token value, not a copy.
        </p>
        <TokenGrid />

        <p className="muted mt-10 mb-4" style={{ fontSize: "13px" }}>
          A parallel <span className="font-mono">.dark</span> token set exists in globals.css but is inert — the app
          forces <span className="font-mono">defaultTheme=&quot;light&quot;</span> in{" "}
          <span className="font-mono">layout.tsx</span>. Rendered below by scoping the tokens to a{" "}
          <span className="font-mono">.dark</span> wrapper.
        </p>
        <div
          className="dark rounded-lg p-6"
          style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
        >
          <TokenGrid />
        </div>
      </section>

      {/* ── Typography ───────────────────────────────────────── */}
      <section className="container pt-16">
        <p className="caps muted mb-2">02 — Foundations</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Typography
        </h2>
        <p className="muted mb-6 max-w-xl" style={{ fontSize: "13px" }}>
          Two local font families: <span className="font-mono">--font-stack-sans-notch</span> for all headings,{" "}
          <span className="font-mono">--font-stack-sans-text</span> for body/labels/buttons (files served from{" "}
          <span className="font-mono">public/fonts/mozilla/</span>).
        </p>

        <div className="border-t" style={{ borderColor: "hsl(var(--border))" }}>
          <Row label="Display — .hero-line">
            <p className="hero-line" style={{ margin: 0 }}>
              Build.
            </p>
            <p className="muted font-mono text-[11px]">clamp(62px, 8.5vw, 98px) · 600 · -0.045em · 1.03</p>
          </Row>
          <Row label="Headline — .sec-title">
            <p className="sec-title" style={{ margin: 0 }}>
              Ship it.
            </p>
            <p className="muted font-mono text-[11px]">clamp(46px, 5vw, 64px) · 600 · -0.035em · 1.03</p>
          </Row>
          <Row label="Title — .card-title">
            <p className="card-title" style={{ margin: 0 }}>
              Card heading
            </p>
            <p className="muted font-mono text-[11px]">28px · 600 · 1.2</p>
          </Row>
          <Row label="Body — p">
            <p style={{ maxWidth: "60ch" }}>
              Reading content and descriptive copy. Line-height is intentionally loose (1.8) to keep long paragraphs
              comfortable at a compact 16px size.
            </p>
            <p className="muted font-mono text-[11px]">16px · 400 · 1.8</p>
          </Row>
          <Row label="Label — .caps">
            <p className="caps">Uppercase micro label</p>
            <p className="muted font-mono text-[11px]">11px · 500 · 0.12em uppercase</p>
          </Row>
          <Row label="Muted — .muted">
            <p className="muted">Secondary / metadata text</p>
            <p className="muted font-mono text-[11px]">13.5px · hsl(var(--muted-foreground))</p>
          </Row>
        </div>
      </section>

      {/* ── Spacing & radius ─────────────────────────────────── */}
      <section className="container pt-16">
        <p className="caps muted mb-2">03 — Foundations</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Spacing &amp; Radius
        </h2>
        <div className="grid sm:grid-cols-2 gap-10 mt-6">
          <div>
            <p className="muted mb-4" style={{ fontSize: "13px" }}>
              Spacing scale (DESIGN.md tokens)
            </p>
            <div className="flex flex-col gap-3">
              {spacingScale.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] w-16 shrink-0">{s.name}</span>
                  <div
                    className="bg-primary rounded-sm"
                    style={{ height: 10, width: Math.min(s.value, 200) }}
                  />
                  <span className="muted text-[11px]">{s.value}px</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="muted mb-4" style={{ fontSize: "13px" }}>
              Radius scale
            </p>
            <div className="flex gap-6 items-end">
              {radiusScale.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 border bg-[hsl(var(--card))]"
                    style={{ borderRadius: r.value === "999px" ? "999px" : r.css, borderColor: "hsl(var(--border))" }}
                  />
                  <p className="text-[11px] font-mono">{r.name}</p>
                  <p className="muted text-[11px]">{r.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="card">
            <p className="caps muted">Breakpoint</p>
            <p className="card-title" style={{ fontSize: "22px" }}>
              980px
            </p>
            <p className="muted" style={{ fontSize: "13px" }}>
              Custom, not a default Tailwind breakpoint. Used as arbitrary variants:{" "}
              <span className="font-mono">max-[980px]:</span> / <span className="font-mono">min-[981px]:</span>. Nav
              collapses and multi-column grids stack to 1 column below this width.
            </p>
          </div>
          <div className="card">
            <p className="caps muted">Container</p>
            <p className="card-title" style={{ fontSize: "22px" }}>
              1160px
            </p>
            <p className="muted" style={{ fontSize: "13px" }}>
              <span className="font-mono">.container</span> — max-width 1160px, centered, 28px horizontal padding.
              Section content, however, is mostly wrapped in an inner{" "}
              <span className="font-mono">max-w-2xl mx-auto</span> column.
            </p>
          </div>
        </div>
      </section>

      {/* ── Components ───────────────────────────────────────── */}
      <section className="container pt-16">
        <p className="caps muted mb-2">04 — Components</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Live Components
        </h2>
        <p className="muted mb-6 max-w-xl" style={{ fontSize: "13px" }}>
          Rendered with the actual components / CSS classes from the codebase — hover the interactive ones.
        </p>

        <div className="grid gap-4">
          <DemoBlock
            title="Buttons"
            path="components/animated-button.tsx"
            desc="Pill button with a vertical text-slide hover swap. No built-in variant prop — primary/outline are className overrides of the ghost default."
          >
            <div className="flex flex-wrap gap-3 items-center">
              <AnimatedButton className="bg-primary border-none text-primary-foreground">
                Primary
              </AnimatedButton>
              <AnimatedButton className="border-primary text-primary bg-transparent">
                Outline
              </AnimatedButton>
              <AnimatedButton>Ghost (default)</AnimatedButton>
            </div>
          </DemoBlock>

          <DemoBlock
            title="Links"
            path="components/animated-link.tsx"
            desc="Same vertical text-slide hover as AnimatedButton, used for all nav and footer anchors."
          >
            <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.14em]">
              <AnimatedLink href="#">Nav Link</AnimatedLink>
              <AnimatedLink className="hover:text-primary" href="#">
                Hover Accent
              </AnimatedLink>
            </div>
          </DemoBlock>

          <DemoBlock
            title="Cards"
            path=".card / .card.cta — globals.css"
            desc="Tonal surface, 1px border, 8px radius. .cta variant tints toward the primary color for emphasis blocks."
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="card">
                <p className="caps muted">01</p>
                <h3 className="card-title">Default Card</h3>
                <p className="muted">Used for services and skill-category groupings.</p>
              </div>
              <div className="card cta">
                <p className="caps muted">02</p>
                <h3 className="card-title">CTA Card</h3>
                <p className="muted">Accent-tinted background and border.</p>
              </div>
            </div>
          </DemoBlock>

          <DemoBlock
            title="Chips & Pills"
            path=".skill-chip / .ghost-pill — globals.css"
            desc="Pill-shaped tags. Metric pills (e.g. project outcomes) are an inline-style one-off, not a shared class."
          >
            <div className="flex flex-wrap gap-2 items-center">
              <span className="skill-chip">React</span>
              <span className="skill-chip">Next.js</span>
              <span className="ghost-pill">Ghost Pill</span>
              <span
                style={{
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: "hsl(var(--primary) / 0.1)",
                  color: "hsl(var(--primary))",
                  border: "1px solid hsl(var(--primary) / 0.25)",
                  fontWeight: 600,
                }}
              >
                +40% Conversion
              </span>
            </div>
          </DemoBlock>

          <DemoBlock
            title="List Row"
            path=".list-line — globals.css"
            desc="Border-bottom divider row, no card container. Used for Projects and Career entries."
          >
            <div className="list-line">
              <div className="top">
                <span>01</span>
                <span className="caps muted" style={{ fontSize: "11px" }}>
                  Case Study
                </span>
              </div>
              <p className="muted" style={{ marginTop: 8, fontSize: "13px" }}>
                Row pattern — title/eyebrow on top, freeform content below.
              </p>
            </div>
          </DemoBlock>

          <DemoBlock
            title="Reveal-on-Hover Accordion"
            path=".career-item / .career-expand — globals.css"
            desc="Pure-CSS max-height transition, no JS. Hover the row to reveal bullets and tags."
          >
            <article className="list-line career-item">
              <div className="top">
                <span className="text-base font-bold">Senior Engineer</span>
                <span className="score">2023 — Present</span>
              </div>
              <p className="muted career-summary">Hover this row to expand.</p>
              <div className="career-expand">
                <ul className="career-bullets">
                  <li>Detail bullet revealed on hover.</li>
                  <li>Second supporting bullet.</li>
                </ul>
                <div className="career-tags">
                  <span className="skill-chip">React</span>
                  <span className="skill-chip">TypeScript</span>
                </div>
              </div>
            </article>
          </DemoBlock>

          <DemoBlock
            title="Stat Counter"
            path="landing-sections/Stats.tsx"
            desc="Spring-animated count-up (Framer Motion useSpring), triggered once via IntersectionObserver when scrolled into view. Static value shown here."
          >
            <div className="flex gap-8">
              <div>
                <p className="stat-big">10+</p>
                <div className="uppercase text-zinc-500 text-xs mt-2">Projects Done</div>
              </div>
              <div>
                <p className="stat-big">6+</p>
                <div className="uppercase text-zinc-500 text-xs mt-2">Years Building</div>
              </div>
            </div>
          </DemoBlock>

          <DemoBlock
            title="Form Fields"
            path=".contact-form — globals.css"
            desc="Borderless inputs with a bottom-border only; no visible focus ring, contrast carries the state change."
          >
            <div className="contact-form" style={{ maxWidth: 360 }}>
              <input placeholder="Your Name" />
              <textarea placeholder="Message" rows={3} />
            </div>
          </DemoBlock>

          <DemoBlock
            title="Cursor Trail"
            path="components/cursor-trail.tsx"
            desc="Global fixed-position spring-following dot + ring that replaces the OS cursor site-wide, gated on (pointer: fine) so it no-ops on touch devices. Not embedded here since it binds to the real mouse position; see it live on the main site."
          >
            <p className="muted" style={{ fontSize: "13px" }}>
              Two nested <span className="font-mono">motion.div</span> elements — a tight dot (stiffness 1000) and a
              looser trailing ring (stiffness 120) — both following the cursor via independent springs.
            </p>
          </DemoBlock>
        </div>
      </section>

      {/* ── Section inventory ────────────────────────────────── */}
      <section className="container pt-16">
        <p className="caps muted mb-2">05 — Composition</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Page Sections
        </h2>
        <p className="muted mb-6 max-w-xl" style={{ fontSize: "13px" }}>
          Assembled in <span className="font-mono">features/portfolio/index.tsx</span>, in render order.
        </p>
        <div className="border-t" style={{ borderColor: "hsl(var(--border))" }}>
          {sectionInventory.map((s) => (
            <div key={s.name} className="list-line grid sm:grid-cols-[1fr_1fr_2fr] gap-2 sm:gap-6">
              <div>
                <p className="font-semibold text-[14px]">{s.name}</p>
                <p className="muted font-mono text-[11px]">{s.anchor}</p>
              </div>
              <p className="muted font-mono text-[11px]">{s.file}</p>
              <p className="muted text-[13px]">{s.purpose}</p>
            </div>
          ))}
        </div>

        <p className="caps muted mt-12 mb-2">Shared components &amp; hooks</p>
        <div className="border-t" style={{ borderColor: "hsl(var(--border))" }}>
          {sharedComponents.map((c) => (
            <div key={c.name} className="list-line grid sm:grid-cols-[1fr_1fr_2fr] gap-2 sm:gap-6">
              <p className="font-semibold text-[14px]">{c.name}</p>
              <p className="muted font-mono text-[11px]">{c.file}</p>
              <p className="muted text-[13px]">{c.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Guidelines ───────────────────────────────────────── */}
      <section className="container pt-16">
        <p className="caps muted mb-2">06 — Guidelines</p>
        <h2 className="card-title" style={{ fontSize: "28px" }}>
          Do&apos;s, Don&apos;ts &amp; Named Rules
        </h2>
        <p className="muted mb-6 max-w-xl" style={{ fontSize: "13px" }}>
          From <span className="font-mono">DESIGN.md</span> and <span className="font-mono">CLAUDE.md</span>.
          Creative north star: &ldquo;The Editorial Engine&rdquo; — technical mastery presented with editorial
          discipline, warm neutrals, restrained accent, tonal layering over shadow theatrics.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div className="card">
            <h3 className="card-title" style={{ fontSize: "18px" }}>
              Do
            </h3>
            <ul className="career-bullets" style={{ paddingLeft: 18, marginTop: 8 }}>
              <li>Use warm neutral fields (paper/soft-stock) as the dominant canvas.</li>
              <li>Enforce uppercase micro-typography for nav and utility labels.</li>
              <li>Use 1px structural borders to organize sections and lists.</li>
              <li>Keep motion smooth and purposeful with short ease-out transitions.</li>
              <li>Prefer existing globals.css classes over one-off Tailwind utilities for structure.</li>
              <li>Gate every entry animation on useReducedMotion(), short-circuiting to {"{}"} when set.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title" style={{ fontSize: "18px" }}>
              Don&apos;t
            </h3>
            <ul className="career-bullets" style={{ paddingLeft: 18, marginTop: 8 }}>
              <li>Use SaaS dashboard aesthetics or generic UI-kit sameness.</li>
              <li>Introduce a second saturated accent color alongside emerald.</li>
              <li>Use gradient text treatments.</li>
              <li>Use colored side-stripe borders as card accents.</li>
              <li>Use pure grayscale neutrals — backgrounds stay warm-tinted.</li>
              <li>Use decorative bounce easing — motion is for emphasis only.</li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="card cta">
            <p className="caps muted">Named Rule</p>
            <p className="font-semibold mt-1">One-Voice Accent Rule</p>
            <p className="muted text-[13px] mt-1">
              Emerald is the only recurring accent family. No competing saturated accents.
            </p>
          </div>
          <div className="card cta">
            <p className="caps muted">Named Rule</p>
            <p className="font-semibold mt-1">Warm Field Rule</p>
            <p className="muted text-[13px] mt-1">Neutral backgrounds stay warm-tinted; pure grayscale is prohibited.</p>
          </div>
          <div className="card cta">
            <p className="caps muted">Named Rule</p>
            <p className="font-semibold mt-1">Tight-Headline Rule</p>
            <p className="muted text-[13px] mt-1">
              Display and headline lines always use negative tracking and compact leading.
            </p>
          </div>
          <div className="card cta">
            <p className="caps muted">Named Rule</p>
            <p className="font-semibold mt-1">Tonal Depth Rule</p>
            <p className="muted text-[13px] mt-1">
              Depth comes from tone and border at rest; shadow is stateful and minimal, never a permanent heavy drop
              shadow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
