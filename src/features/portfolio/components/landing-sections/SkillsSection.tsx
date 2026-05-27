import { skillCategories } from "../../data";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="sec-title"><span className="text-primary">Expert</span>ise</h2>
        <p className="muted" style={{ maxWidth: "36ch", marginTop: "10px" }}>
          A rare combination of depth and breadth
        </p>

        <div className="skills-grid" style={{ marginTop: "28px" }}>
          {skillCategories.map((category) => (
            <article className="card skill-card" key={category.title}>
              {/* <p className="caps muted" style={{ marginBottom: "8px" }}>
                {category.icon}
              </p> */}
              <h3 className="card-title" style={{ fontSize: "24px", marginBottom: "12px" }}>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
