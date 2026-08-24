import { Button, AccordionRow } from "@laban405/design-system";
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
            <Button>Download CV</Button>
          </a>
        </div>
        <div>
          {careerItems.map((item) => (
            <AccordionRow
              key={`${item.company}-${item.period}`}
              eyebrow={item.company}
              title={item.role}
              meta={item.period}
              summary={item.summary}
              bullets={item.bullets}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
