import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="testimonial-head">
          <Image src="/assets/Illustration1.png" alt="Testimonials" width={640} height={222} />
          <div>
            <h2 className="sec-title">Testimonials</h2>
            <p className="muted">Real responses from clients and teams after collaboration.</p>
          </div>
        </div>
        <div className="testi-list">
          {["Olivia Bennett", "Marcus Lee", "Jenna Alvarez"].map((name) => (
            <article className="item" key={name}>
              <div><strong>{name}</strong><p className="muted">Founder</p></div>
              <div><p className="muted">Founder &amp; CEO, Mia Techno</p><div className="stars">★★★★★</div></div>
              <p className="muted">Working with Fin was seamless from start to finish. His design thinking and execution elevated our product experience.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
