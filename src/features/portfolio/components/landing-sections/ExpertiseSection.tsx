import { expertise } from "../../data";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container expertise-grid">
        <div>
          <h2 className="sec-title">Expertise</h2>
          <p className="muted">I am always eager to learn and explore new things. Continuous practice helps me grow both personally and professionally.</p>
        </div>
        <div>
          {expertise.map((row) => (
            <div className="list-line" key={row.tool}>
              <div className="top"><span>{row.tool}</span><span className="score">{row.score}</span></div>
              <p className="muted">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
