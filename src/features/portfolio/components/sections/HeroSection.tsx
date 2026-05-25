import { S } from "../../styles";
import { Button } from "../ui";

export function HeroSection() {
  return (
    <section style={S.hero}>
      <div style={S.heroBgText} aria-hidden>FRONTEND</div>
      <p style={S.heroEyebrow}>Senior Frontend Engineer — Available for work</p>
      <h1 style={S.heroTitle}>I Build Interfaces That <span style={S.heroAccent}>Hold Up.</span></h1>
      <p style={S.heroSub}>Fast, scalable, and built to last. I turn complex problems into clean frontend systems — the kind teams can actually grow with.</p>
      <div style={S.heroCta}>
        <Button variant="default" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Let&apos;s Work Together →</Button>
        <Button variant="outline" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>See My Work</Button>
      </div>
      <div style={S.scrollIndicator}><div style={S.scrollLine} />Scroll</div>
    </section>
  );
}
