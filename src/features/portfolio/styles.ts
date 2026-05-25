import type { StyleMap } from "./types";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');
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
  body { background-color: hsl(var(--background)); color: hsl(var(--foreground)); font-family: 'Instrument Sans', sans-serif; font-size: 16px; line-height: 1.6; transition: background-color 0.3s ease, color 0.3s ease; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: hsl(var(--background)); }
  ::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 2px; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes scrollPulse { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.9; } }
`;

export const S: StyleMap = {
  page: { minHeight: "100vh", overflowX: "hidden" },
  section: { padding: "7rem 4rem", maxWidth: "1280px", margin: "0 auto" },
  sectionWrap: { borderTop: "1px solid hsl(var(--border))" },
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "1.25rem 4rem", borderBottom: "1px solid hsl(var(--border))",
    backdropFilter: "blur(16px)", background: "hsla(var(--background), 0.8)", transition: "background 0.3s",
  },
  navLogo: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "hsl(var(--foreground))", textDecoration: "none" },
  navLinks: { display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" },
  navLink: { fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", textDecoration: "none", transition: "color 0.2s" },
  hero: { minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 4rem 5rem", position: "relative", overflow: "hidden" },
  heroBgText: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(90px, 18vw, 260px)", color: "transparent", WebkitTextStroke: "1px hsl(var(--accent) / 0.12)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" },
  heroEyebrow: { fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(var(--accent))", marginBottom: "1.5rem", animation: "fadeUp 0.8s 0.2s both" },
  heroTitle: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 7vw, 6.5rem)", lineHeight: 1, letterSpacing: "-0.04em", maxWidth: "14ch", color: "hsl(var(--foreground))", animation: "fadeUp 0.9s 0.4s both" },
  heroAccent: { color: "hsl(var(--accent))" },
  heroSub: { marginTop: "2rem", fontSize: "1.1rem", color: "hsl(var(--muted-foreground))", maxWidth: "52ch", lineHeight: 1.75, animation: "fadeUp 0.9s 0.6s both" },
  heroCta: { marginTop: "3rem", display: "flex", gap: "1rem", alignItems: "center", animation: "fadeUp 0.9s 0.8s both" },
  scrollIndicator: { position: "absolute", right: "4rem", bottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", animation: "fadeUp 1s 1.2s both" },
  scrollLine: { width: "1px", height: "48px", background: "linear-gradient(to bottom, hsl(var(--muted-foreground)), transparent)", animation: "scrollPulse 2.2s infinite" },
};
