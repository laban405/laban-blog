import { AnimatedButton } from "../../../../components/animated-button";
import { careerItems } from "../../data";

export function CareerSection() {
  return (
    <section id="career" className="mx-4 sm:mx-0 pt-4 scroll-mt-24">
      <div className="max-w-2xl mx-auto mt-16">
        <div>
          <h2 className="sec-title">
            <span className="text-primary">Career</span> Highlights
          </h2>
          <p className="muted mb-3">
            Let&apos;s work together, I&apos;m open for part time and freelance
            collaborations for ambitious product teams.
          </p>
          <a
            href="/LabanFrontendCV2026.pdf"
            download
            className="pill-btn inline-flex items-center"
          >
            <AnimatedButton>Download CV</AnimatedButton>
          </a>
        </div>
        <div>
          {careerItems.map((item) => (
            <article
              className="list-line career-item"
              key={`${item.company}-${item.period}`}
            >
              <div className="uppercase text-zinc-500 text-sm mb-1">{`${item.company}`}</div>
              <div className="top">
                <span className="text-base font-bold">{item.role}</span>
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
