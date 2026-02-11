"use client";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   shadcn/ui-compatible CSS-variable theme
   Drop this into your globals.css in a
   real Next.js / Vite + shadcn project.
   ───────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');

  /* ── shadcn CSS variable tokens ── */
  /*
   * Accent palette — nature-inspired green
   *   Light: #2d6a4f  (HSL 152 41% 29%)  — forest green,  contrast 7.2:1 on white  ✓ WCAG AA
   *   Dark:  #52b788  (HSL 150 44% 52%)  — fresh moss,    contrast 4.6:1 on #0a0a0a ✓ WCAG AA
   */
  :root {
    --background: 45 20% 96%;
    --foreground: 30 8% 8%;
    --card: 40 15% 93%;
    --card-foreground: 30 8% 8%;
    --popover: 40 15% 93%;
    --popover-foreground: 30 8% 8%;
    --primary: 152 41% 29%;
    --primary-foreground: 0 0% 98%;
    --secondary: 152 15% 88%;
    --secondary-foreground: 152 20% 20%;
    --muted: 152 8% 85%;
    --muted-foreground: 30 5% 42%;
    --accent: 152 41% 29%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 152 8% 80%;
    --input: 152 8% 80%;
    --ring: 152 41% 29%;
    --radius: 0.125rem;
  }

  .dark {
    --background: 0 0% 4%;
    --foreground: 45 15% 96%;
    --card: 0 0% 7%;
    --card-foreground: 45 15% 96%;
    --popover: 0 0% 7%;
    --popover-foreground: 45 15% 96%;
    --primary: 150 44% 52%;
    --primary-foreground: 0 0% 4%;
    --secondary: 152 12% 12%;
    --secondary-foreground: 150 20% 75%;
    --muted: 0 0% 12%;
    --muted-foreground: 45 5% 50%;
    --accent: 150 44% 52%;
    --accent-foreground: 0 0% 4%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 152 6% 15%;
    --input: 152 6% 15%;
    --ring: 150 44% 52%;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: 'Instrument Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* noise grain overlay */
  body::after {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.3;
  }

  /* scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: hsl(var(--background)); }
  ::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.25; }
    50%       { opacity: 0.9; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/* ─── Tiny cn helper (replaces clsx + tailwind-merge) ─── */
const cn = (...classes) => classes.filter(Boolean).join(" ");

/* ─── useTheme hook ─── */
function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);
  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

/* ─── useReveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ────────────────────────────────────────────────
   shadcn-style primitive components
   (mirrors what shadcn generates — swap these
    with real shadcn imports in your project)
   ──────────────────────────────────────────────── */

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: "0.5rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
    cursor: "pointer", border: "none", textDecoration: "none",
    transition: "all 0.2s ease", borderRadius: "var(--radius)",
    letterSpacing: "-0.01em",
  };
  const variants = {
    default: {
      background: "hsl(var(--primary))",
      color: "hsl(var(--primary-foreground))",
      padding: size === "lg" ? "0.9rem 2rem" : "0.75rem 1.5rem",
      fontSize: size === "lg" ? "1rem" : "0.875rem",
    },
    outline: {
      background: "transparent",
      color: "hsl(var(--foreground))",
      border: "1px solid hsl(var(--border))",
      padding: size === "lg" ? "0.9rem 2rem" : "0.75rem 1.5rem",
      fontSize: size === "lg" ? "1rem" : "0.875rem",
    },
    ghost: {
      background: "transparent",
      color: "hsl(var(--muted-foreground))",
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
    },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      className={className}
      onMouseEnter={e => {
        if (variant === "default") {
          e.currentTarget.style.transform = "translate(-2px,-2px)";
          e.currentTarget.style.boxShadow = "4px 4px 0 hsl(var(--foreground) / 0.5)";
          e.currentTarget.style.filter = "brightness(1.08)";
        }
        if (variant === "outline") e.currentTarget.style.borderColor = "hsl(var(--foreground))";
        if (variant === "ghost") e.currentTarget.style.color = "hsl(var(--accent))";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.filter = "";
        if (variant === "outline") e.currentTarget.style.borderColor = "hsl(var(--border))";
        if (variant === "ghost") e.currentTarget.style.color = "hsl(var(--muted-foreground))";
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "outline" }) => (
  <span style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.06em",
    padding: "0.3rem 0.7rem",
    border: "1px solid hsl(var(--border))",
    borderRadius: "var(--radius)",
    color: "hsl(var(--muted-foreground))",
    background: variant === "filled" ? "hsl(var(--muted))" : "transparent",
    transition: "all 0.2s",
    cursor: "default",
    display: "inline-block",
  }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "hsl(var(--accent))";
      e.currentTarget.style.color = "hsl(var(--accent))";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "hsl(var(--border))";
      e.currentTarget.style.color = "hsl(var(--muted-foreground))";
    }}
  >{children}</span>
);

const Separator = ({ orientation = "horizontal" }) => (
  <div style={{
    background: "hsl(var(--border))",
    ...(orientation === "horizontal"
      ? { width: "100%", height: "1px" }
      : { width: "1px", height: "100%", display: "inline-block" }),
  }} />
);

const Card = ({ children, style = {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => (
  <div
    style={{
      background: "hsl(var(--card))",
      color: "hsl(var(--card-foreground))",
      borderRadius: "var(--radius)",
      transition: "background 0.3s",
      ...style,
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

/* ─── Reveal wrapper ─── */
const Reveal = ({ children, delay = 0 }) => {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

/* ─── Section label ─── */
const SectionTag = ({ children }) => (
  <p style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "hsl(var(--accent))",
    marginBottom: "0.75rem",
  }}>{children}</p>
);

const SectionTitle = ({ children }) => (
  <h2 style={{
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    letterSpacing: "-0.04em",
    lineHeight: 1.05,
    color: "hsl(var(--foreground))",
  }}>{children}</h2>
);

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */
const SKILLS = ["React","TypeScript","Next.js","GraphQL","Micro-frontends","Design Systems","PWA","React Native","Performance","CI/CD","Accessibility","Node.js"];

const SERVICES = [
  { n:"01", icon:"⬡", title:"Frontend Development",     desc:"Clean, scalable implementations built on best practices, maintainable patterns, and long-term stability — not just something that works today." },
  { n:"02", icon:"↑", title:"Frontend Modernization",    desc:"I take legacy interfaces and rebuild them into modular, performant architectures that your team won't dread touching." },
  { n:"03", icon:"◈", title:"UI/UX Engineering",         desc:"Better flow, sharper clarity, and real accessibility — structured UX audits and interfaces designed to work, not just look good." },
  { n:"04", icon:"⚡", title:"Performance Optimization",  desc:"Faster load times, tighter responsiveness, and streamlined CI/CD workflows. Speed isn't a feature — it's the foundation." },
  { n:"05", icon:"◻", title:"Mobile App Engineering",     desc:"Cross-platform mobile apps with smooth interactions, clean UI, and consistent performance across devices." },
  { n:"06", icon:"◎", title:"Technical Leadership",       desc:"Design systems, coding standards, documentation, and team mentorship to raise the bar across your entire engineering org." },
];

const PROJECTS = [
  { idx:"01", title:"Real-Time Whiteboard Collaboration", desc:"Low-latency multi-user drawing and annotation platform for collaboration, training, and design sessions.", type:"WebSockets · Canvas" },
  { idx:"02", title:"Carwash POS — SaaS Platform",        desc:"Modern point-of-sale and operations system with receipts, staff management, transaction tracking, and reporting.", type:"SaaS · Dashboard" },
  { idx:"03", title:"Transport Management & Ticketing",   desc:"Led UI/UX and frontend engineering for a large-scale transport intelligence system deployed across Kenya.", type:"Enterprise · Transport" },
  { idx:"04", title:"Spare Parts & Insurance Workflow",   desc:"Parts sourcing, quoting, and approval system that streamlines accident resolution for insurers and garages.", type:"Workflow · Fintech" },
];

const EXPERIENCE = [
  { company:"Kamsware",              role:"Senior Frontend Engineer",           desc:"Performance improvements, real-time dashboards, architecture upgrades, and CI/CD optimization across production systems." },
  { company:"Kyosk Digital Services",role:"Frontend Engineer",                  desc:"Micro-frontend architecture, design systems, GraphQL migration, PWA optimization, and developer tooling at scale." },
  { company:"Innovex Solutions",     role:"Frontend Engineer",                  desc:"UI architecture ownership, reusable component libraries, and direct team mentorship." },
  { company:"Data Integrated",       role:"Frontend Engineer & UI/UX Architect",desc:"Ticketing systems, UX audits, frontend redesigns, and coding standards across the product team." },
  { company:"Ciphercom",             role:"Software Developer & UI/UX Architect",desc:"M-Rescue App, SaaS financial tools, and internal documentation systems from concept through delivery." },
];

/* ─────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────── */
export default function LabanMogirePortfolio() {
  const { theme, toggle } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  /* inject global styles once */
  useEffect(() => {
    const id = "laban-global-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
    document.documentElement.classList.add("dark");
  }, []);

  /** @type {{ [key: string]: import('react').CSSProperties }} */
  const S = {
    /* layout */
    page:    { minHeight: "100vh", overflowX: "hidden" },
    section: { padding: "7rem 4rem", maxWidth: "1280px", margin: "0 auto" },
    sectionWrap: { borderTop: "1px solid hsl(var(--border))" },

    /* nav */
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.25rem 4rem",
      borderBottom: "1px solid hsl(var(--border))",
      backdropFilter: "blur(16px)",
      background: "hsla(var(--background), 0.8)",
      transition: "background 0.3s",
    },
    navLogo: {
      fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem",
      letterSpacing: "-0.02em", color: "hsl(var(--foreground))",
      textDecoration: "none",
    },
    navLinks: { display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" },
    navLink: {
      fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
      letterSpacing: "0.08em", textTransform: "uppercase",
      color: "hsl(var(--muted-foreground))", textDecoration: "none",
      transition: "color 0.2s",
    },

    /* hero */
    hero: {
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", padding: "0 4rem 5rem",
      position: "relative", overflow: "hidden",
    },
    heroBgText: {
      position: "absolute", top: "50%", left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "'Syne', sans-serif", fontWeight: 800,
      fontSize: "clamp(90px, 18vw, 260px)",
      color: "transparent",
      WebkitTextStroke: "1px hsl(var(--accent) / 0.12)",
      whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
      letterSpacing: "-0.04em",
    },
    heroEyebrow: {
      fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
      letterSpacing: "0.12em", textTransform: "uppercase",
      color: "hsl(var(--accent))", marginBottom: "1.5rem",
      animation: "fadeUp 0.8s 0.2s both",
    },
    heroTitle: {
      fontFamily: "'Syne', sans-serif", fontWeight: 800,
      fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
      lineHeight: 1, letterSpacing: "-0.04em", maxWidth: "14ch",
      color: "hsl(var(--foreground))",
      animation: "fadeUp 0.9s 0.4s both",
    },
    heroAccent: { color: "hsl(var(--accent))" },
    heroSub: {
      marginTop: "2rem", fontSize: "1.1rem",
      color: "hsl(var(--muted-foreground))",
      maxWidth: "52ch", lineHeight: 1.75,
      animation: "fadeUp 0.9s 0.6s both",
    },
    heroCta: {
      marginTop: "3rem", display: "flex", gap: "1rem", alignItems: "center",
      animation: "fadeUp 0.9s 0.8s both",
    },
    scrollIndicator: {
      position: "absolute", right: "4rem", bottom: "5rem",
      display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
      fontFamily: "'DM Mono', monospace", fontSize: "0.62rem",
      letterSpacing: "0.1em", textTransform: "uppercase",
      color: "hsl(var(--muted-foreground))",
      animation: "fadeUp 1s 1.2s both",
    },
    scrollLine: {
      width: "1px", height: "48px",
      background: "linear-gradient(to bottom, hsl(var(--muted-foreground)), transparent)",
      animation: "scrollPulse 2.2s infinite",
    },
  };

  return (
    <div style={S.page}>
      {/* ─── NAV ─── */}
      <nav style={S.nav}>
        <a href="#" style={S.navLogo}>LM</a>
        <ul style={S.navLinks}>
          {["About","Services","Projects","Experience","Contact"].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={S.navLink}
                onMouseEnter={e => e.currentTarget.style.color = "hsl(var(--accent))"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(var(--muted-foreground))"}
              >{l}</a>
            </li>
          ))}
          {/* Theme toggle — shadcn-style icon button */}
          <li>
            <Button variant="ghost" onClick={toggle} style={{ padding: "0.45rem 0.6rem", fontSize: "1rem" }} title="Toggle theme">
              {theme === "dark" ? "☀" : "☾"}
            </Button>
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section style={S.hero}>
        <div style={S.heroBgText} aria-hidden>FRONTEND</div>
        <p style={S.heroEyebrow}>Senior Frontend Engineer — Available for work</p>
        <h1 style={S.heroTitle}>
          I Build Interfaces That{" "}
          <span style={S.heroAccent}>Hold Up.</span>
        </h1>
        <p style={S.heroSub}>
          Fast, scalable, and built to last. I turn complex problems into clean frontend systems — the kind teams can actually grow with.
        </p>
        <div style={S.heroCta}>
          <Button variant="default" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}>
            Let&apos;s Work Together →
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}>
            See My Work
          </Button>
        </div>
        <div style={S.scrollIndicator}>
          <div style={S.scrollLine} />
          Scroll
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div style={{ borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:"1280px", margin:"0 auto", padding:"0 4rem" }}>
          {[
            { n:"5+",  l:"Years of experience" },
            { n:"5",   l:"Industries served" },
            { n:"10+", l:"Products shipped" },
            { n:"0",   l:"Tolerance for spaghetti code" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "2rem 0",
              paddingLeft: i > 0 ? "3rem" : 0,
              borderRight: i < 3 ? "1px solid hsl(var(--border))" : "none",
            }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"2.5rem", letterSpacing:"-0.04em", lineHeight:1, color:"hsl(var(--accent))" }}>{s.n}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"hsl(var(--muted-foreground))", marginTop:"0.4rem" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <div style={S.sectionWrap} id="about">
        <div style={{ ...S.section, display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"start" }}>
          <Reveal>
            <SectionTag>{"// About"}</SectionTag>
            <SectionTitle>I Fix Messy.<br/>I Build Lasting.</SectionTitle>
            <div style={{ marginTop:"2rem", display:"flex", flexDirection:"column", gap:"1.25rem", color:"hsl(var(--muted-foreground))", fontSize:"1.05rem", lineHeight:1.8 }}>
              <p>I&apos;m a Senior Frontend Engineer who specializes in <strong style={{ color:"hsl(var(--foreground))", fontWeight:600 }}>frontend systems that stay clean as products scale.</strong> Most of my work involves stepping into complex, aging codebases and rebuilding them into structured, predictable foundations.</p>
              <p>I&apos;ve shipped across <strong style={{ color:"hsl(var(--foreground))", fontWeight:600 }}>e-commerce, fintech, transport, IoT,</strong> and large internal tools. I define patterns, establish shared building blocks, and align UI behavior across devices and network conditions.</p>
              <p>The goal is always the same: architecture that&apos;s invisible to users and frictionless for the team building it.</p>
            </div>
            <div style={{ marginTop:"2rem", display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              {SKILLS.map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{
              borderLeft: "2px solid hsl(var(--accent))",
              paddingLeft: "1.75rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.35rem",
              fontWeight: 700,
              lineHeight: 1.45,
              letterSpacing: "-0.02em",
              color: "hsl(var(--foreground))",
              marginTop: "4rem",
            }}>
              &quot;Good frontend architecture should fade into the background for users — and remove friction for the people building it.&quot;
            </div>
            <div style={{ marginTop:"3rem", padding:"2rem", background:"hsl(var(--card))", border:"1px solid hsl(var(--border))", borderRadius:"var(--radius)" }}>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"hsl(var(--muted-foreground))", marginBottom:"1rem" }}>Currently open to</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                {["Full-time senior / lead roles","Contract & freelance projects","Architecture consulting","Frontend audits & modernization"].map(i => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.75rem", fontSize:"0.9rem", color:"hsl(var(--foreground))" }}>
                    <span style={{ color:"hsl(var(--accent))", fontSize:"0.6rem" }}>◆</span> {i}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <div style={S.sectionWrap} id="services">
        <div style={S.section}>
          <Reveal>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3.5rem" }}>
              <div>
                <SectionTag>{"// Services"}</SectionTag>
                <SectionTitle>What I Bring<br/>to the Table</SectionTitle>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", background:"hsl(var(--border))", border:"1px solid hsl(var(--border))" }}>
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    background: hoveredService === i ? "hsl(var(--card))" : "hsl(var(--background))",
                    padding: "2.5rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "background 0.3s",
                    cursor: "default",
                  }}
                >
                  {/* accent bottom line */}
                  <div style={{
                    position:"absolute", bottom:0, left:0, right:0, height:"2px",
                    background:"hsl(var(--accent))",
                    transform: hoveredService === i ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.35s ease",
                  }} />
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:"hsl(var(--muted-foreground))", letterSpacing:"0.1em", marginBottom:"1.5rem" }}>{svc.n}</div>
                  <div style={{ fontSize:"1.4rem", marginBottom:"0.85rem" }}>{svc.icon}</div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.1rem", letterSpacing:"-0.02em", marginBottom:"0.75rem", color:"hsl(var(--foreground))" }}>{svc.title}</h3>
                  <p style={{ fontSize:"0.875rem", color:"hsl(var(--muted-foreground))", lineHeight:1.65 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ─── PROJECTS ─── */}
      <div style={S.sectionWrap} id="projects">
        <div style={S.section}>
          <Reveal>
            <SectionTag>{"// Featured Work"}</SectionTag>
            <SectionTitle>Projects That<br/>Shipped.</SectionTitle>
          </Reveal>
          <div style={{ marginTop:"3.5rem", borderTop:"1px solid hsl(var(--border))" }}>
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto auto",
                    gap: "2rem",
                    alignItems: "center",
                    padding: `2rem ${hoveredProject === i ? "2rem 2rem 2rem 3rem" : "2rem"}`,
                    borderBottom: "1px solid hsl(var(--border))",
                    cursor: "pointer",
                    transition: "padding 0.3s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.68rem", color:"hsl(var(--muted-foreground))", letterSpacing:"0.06em" }}>{p.idx}</span>
                  <div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.3rem", letterSpacing:"-0.03em", color: hoveredProject === i ? "hsl(var(--accent))" : "hsl(var(--foreground))", transition:"color 0.25s" }}>{p.title}</div>
                    <div style={{ fontSize:"0.85rem", color:"hsl(var(--muted-foreground))", marginTop:"0.3rem", maxWidth:"50ch" }}>{p.desc}</div>
                  </div>
                  <Badge>{p.type}</Badge>
                  <span style={{
                    color: "hsl(var(--accent))", fontSize:"1.2rem",
                    opacity: hoveredProject === i ? 1 : 0,
                    transform: hoveredProject === i ? "translateX(0)" : "translateX(-8px)",
                    transition: "opacity 0.25s, transform 0.25s",
                  }}>→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EXPERIENCE ─── */}
      <div style={S.sectionWrap} id="experience">
        <div style={S.section}>
          <Reveal>
            <SectionTag>{"// Experience"}</SectionTag>
            <SectionTitle>Where I&apos;ve Done<br/>the Work</SectionTitle>
          </Reveal>
          <div style={{ marginTop:"3.5rem" }}>
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr",
                  gap: "3rem",
                  padding: "2.5rem 0",
                  borderTop: i === 0 ? "1px solid hsl(var(--border))" : "none",
                  borderBottom: "1px solid hsl(var(--border))",
                  alignItems: "start",
                }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"hsl(var(--muted-foreground))", paddingTop:"0.2rem" }}>{e.company}</div>
                  <div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.1rem", letterSpacing:"-0.02em", marginBottom:"0.6rem", color:"hsl(var(--foreground))" }}>{e.role}</div>
                    <div style={{ fontSize:"0.9rem", color:"hsl(var(--muted-foreground))", lineHeight:1.65 }}>{e.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div style={{ ...S.sectionWrap, position:"relative", overflow:"hidden" }} id="contact">
        {/* glow orb */}
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"600px", height:"600px",
          background:"radial-gradient(circle, hsla(var(--accent), 0.06) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />
        <div style={{ ...S.section, textAlign:"center", padding:"9rem 4rem" }}>
          <Reveal>
            <SectionTag>{"// Let's Talk"}</SectionTag>
            <h2 style={{
              fontFamily:"'Syne',sans-serif", fontWeight:800,
              fontSize:"clamp(2.5rem, 6vw, 5rem)",
              letterSpacing:"-0.05em", lineHeight:1,
              marginBottom:"1.5rem", color:"hsl(var(--foreground))",
            }}>
              The Right Engineer<br/>for the <span style={{ color:"hsl(var(--accent))" }}>Right Problem.</span>
            </h2>
            <p style={{ color:"hsl(var(--muted-foreground))", maxWidth:"48ch", margin:"0 auto 3rem", fontSize:"1.05rem", lineHeight:1.7 }}>
              Scalable architecture, high-quality UI, or a frontend that finally performs — I bring structure, clarity, and craft to every engagement.
            </p>
            <Button variant="default" size="lg" onClick={() => window.location.href="mailto:laban405@gmail.com"}>
              laban405@gmail.com →
            </Button>
          </Reveal>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop:"1px solid hsl(var(--border))", padding:"2.5rem 4rem", display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"100%" }}>
        <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.875rem", letterSpacing:"-0.01em" }}>Laban Mogire</div>
        <ul style={{ display:"flex", gap:"2rem", listStyle:"none" }}>
          {[
            { label:"Email", href:"mailto:laban405@gmail.com" },
            { label:"LinkedIn", href:"#" },
            { label:"GitHub", href:"#" },
            { label:"Behance", href:"#" },
          ].map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"hsl(var(--muted-foreground))", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "hsl(var(--accent))"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(var(--muted-foreground))"}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:"hsl(var(--muted-foreground))", letterSpacing:"0.06em" }}>© 2025</div>
      </footer>
    </div>
  );
}
