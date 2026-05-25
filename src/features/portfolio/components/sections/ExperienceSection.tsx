import { EXPERIENCE } from "../../constants";
import { S } from "../../styles";
import { Reveal, SectionTag, SectionTitle } from "../ui";

export function ExperienceSection() {
  return <div style={S.sectionWrap} id="experience"><div style={S.section}><Reveal><SectionTag>{"// Experience"}</SectionTag><SectionTitle>Where I&apos;ve Done<br />the Work</SectionTitle></Reveal><div style={{ marginTop: "3.5rem" }}>{EXPERIENCE.map((e, i) => <Reveal key={e.company} delay={i * 70}><div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "3rem", padding: "2.5rem 0", borderTop: i === 0 ? "1px solid hsl(var(--border))" : "none", borderBottom: "1px solid hsl(var(--border))", alignItems: "start" }}><div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", paddingTop: "0.2rem" }}>{e.company}</div><div><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em", marginBottom: "0.6rem", color: "hsl(var(--foreground))" }}>{e.role}</div><div style={{ fontSize: "0.9rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.65 }}>{e.desc}</div></div></div></Reveal>)}</div></div></div>;
}
