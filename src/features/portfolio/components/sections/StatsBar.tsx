import { STATS } from "../../constants";

export function StatsBar() {
  return <div style={{ borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>{STATS.map((s, i) => <div key={s.l} style={{ padding: "2rem 0", paddingLeft: i > 0 ? "3rem" : 0, borderRight: i < 3 ? "1px solid hsl(var(--border))" : "none" }}><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "2.5rem", letterSpacing: "-0.04em", lineHeight: 1, color: "hsl(var(--accent))" }}>{s.n}</div><div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginTop: "0.4rem" }}>{s.l}</div></div>)}</div></div>;
}
