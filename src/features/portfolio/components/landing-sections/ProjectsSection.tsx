import Image from "next/image";
import { projects } from "../../data";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-4 sm:mx-0 sm:min-h-[100vh] scroll-mt-24">
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="sec-title">Projects That<br /><span className="text-primary">Shipped.</span></h2>

        <div style={{ marginTop: "28px" }}>
          {projects.map((project) => (
            <article className="list-line" key={project.id}>
              <div className="top">
                <span>{project.id}</span>
                <span className="caps muted" style={{ fontSize: "11px" }}>{project.type}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5" style={{ marginTop: "8px", alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "26px" }}>{project.title}</h3>
                    {"url" in project && project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                        style={{ fontSize: "12px", textDecoration: "underline", textUnderlineOffset: "3px" }}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>

                  <p className="muted" style={{ fontSize: "12px", marginBottom: "12px" }}>
                    {project.company} · {project.period}
                  </p>

                  <p className="muted" style={{ fontSize: "13px", lineHeight: "1.7", marginBottom: "8px" }}>
                    <span style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>Problem: </span>
                    {project.problem}
                  </p>

                  <p className="muted" style={{ fontSize: "13px", lineHeight: "1.7", marginBottom: "14px" }}>
                    <span style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>Outcome: </span>
                    {project.outcome}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        style={{
                          fontSize: "11px",
                          padding: "3px 10px",
                          borderRadius: "20px",
                          background: "hsl(var(--primary) / 0.1)",
                          color: "hsl(var(--primary))",
                          border: "1px solid hsl(var(--primary) / 0.25)",
                          fontWeight: 600,
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="career-tags">
                    {project.stack.map((tag) => (
                      <span className="ghost-pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {"image" in project && project.image && (
                  <div className="relative w-full sm:w-[180px] sm:flex-shrink-0 h-44 sm:h-[112px] overflow-hidden rounded-sm" style={{ border: "1px solid hsl(var(--border))" }}>
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
