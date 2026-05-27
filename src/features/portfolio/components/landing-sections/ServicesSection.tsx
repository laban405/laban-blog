import { services } from "../../data";

export function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sec-title">What I Will Do For You?</h2>
        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <p className="caps muted">{service.id}</p>
              <h3 className="card-title">{service.title}</h3>
              <p className="muted">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
