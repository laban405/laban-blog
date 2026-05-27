import { projects } from "../../data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="caps muted">/ Featured Work</p>
        <h2 className="sec-title">Projects That<br />Shipped.</h2>

        <div style={{ marginTop: "28px" }}>
          {projects.map((project) => (
            <article className="list-line" key={project.id}>
              <div className="top">
                <span>{project.id}</span>
                <span className="score">→</span>
              </div>
              <h3 style={{ fontSize: "30px", marginTop: "8px", marginBottom: "8px" }}>{project.title}</h3>
              <p className="muted" style={{ marginBottom: "10px", maxWidth: "72ch" }}>{project.desc}</p>
              <p className="caps muted" style={{ fontSize: "12px" }}>{project.type}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
