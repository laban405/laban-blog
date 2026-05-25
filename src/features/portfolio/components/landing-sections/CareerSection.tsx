import { timeline } from "../../data";

export function CareerSection() {
  return (
    <section className="section">
      <div className="container career-grid">
        <div>
          <h2 className="sec-title">Career Highlights</h2>
          <p className="muted">Let&apos;s work together, I&apos;m open for part time and freelance collaborations for ambitious product teams.</p>
          <button className="pill-btn">Download CV</button>
        </div>
        <div>
          {timeline.map(([company, role, year]) => (
            <div className="list-line" key={role}>
              <div className="muted company">{company}</div>
              <div className="top"><span>{role}</span><span className="score">{year}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
