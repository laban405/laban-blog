import { services } from "../../data";

export function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="center-title">WHAT I DO ?</h2>
        <div className="cards">
          {services.map((name) => (
            <article className="card" key={name}>
              <h3 className="card-title">{name}</h3>
              <p className="muted">Visual-first, usability-driven solutions that balance creativity and practical outcomes.</p>
            </article>
          ))}
          <article className="card cta">
            <p className="caps muted">Request for More</p>
            <h3 className="card-title">I value feedback and enjoy exploring new ideas and skills.</h3>
            <button className="pill-btn">Your Feedback Matters</button>
          </article>
        </div>
      </div>
    </section>
  );
}
