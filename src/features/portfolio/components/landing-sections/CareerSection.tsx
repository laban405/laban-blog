import { careerItems } from "../../data";

export function CareerSection() {
  return (
    <section className="section">
      <div className="container career-grid">
        <div>
          <h2 className="sec-title">Career Highlights</h2>
          <p className="muted">
            Let&apos;s work together, I&apos;m open for part time and freelance
            collaborations for ambitious product teams.
          </p>
          <button className="pill-btn">Download CV</button>
        </div>
        <div>
          {careerItems.map((item) => (
            <article
              className="list-line career-item"
              key={`${item.company}-${item.period}`}
            >
              <div className="muted company">{item.company}</div>
              <div className="top">
                <span>{item.role}</span>
                <span className="score">{item.period}</span>
              </div>
              <p className="muted career-summary">{item.summary}</p>
              <div className="career-expand">
                <ul className="career-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="career-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
