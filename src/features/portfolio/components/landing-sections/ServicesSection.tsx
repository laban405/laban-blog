import { services } from "../../data";

export function ServicesSection() {
  return (
    <section className="mx-4 sm:mx-0 pt-4 scroll-mt-16 sm:min-h-[100vh]" id='services'>
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="sec-title">What <span className="text-primary">I Will Do</span> <br></br>For You.</h2>
        <div>
        <p className="my-4 text-sm">The goal is always the same,
          Architecture invisible to users, frictionless for builders. The
          difference now is it can also think.
        </p>
      </div>
        <div className="grid sm:grid-cols-2 gap-3">
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
