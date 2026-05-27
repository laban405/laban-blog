import Image from "next/image";
import { careerItems } from "../../data";

const testimonials = [
  {
    name: "Program Director",
    title: "Enterprise IoT Operations",
    company: "Kamsware Ltd",
    stars: "★★★★★",
    quote:
      "He designed our hardware-connected frontend architecture so well that provisioning and diagnostics across 5,000+ devices became predictable, fast, and dramatically more efficient for field teams.",
    source: careerItems[0],
  },
  {
    name: "Head of Product",
    title: "Digital Commerce & Logistics",
    company: "Kyosk Digital",
    stars: "★★★★★",
    quote:
      "The migration to micro-frontends and GraphQL didn’t just modernize our stack, it improved delivery speed and product responsiveness in ways our teams and users felt immediately.",
    source: careerItems[1],
  },
  {
    name: "Delivery Lead",
    title: "Mobility & Platforms",
    company: "Data Integrated",
    stars: "★★★★★",
    quote:
      "From UX-led redesigns to large-scale transport interfaces, he consistently translated complex requirements into clear, high-performing experiences with measurable business impact.",
    source: careerItems[3],
  },
];

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="testimonial-head">
          <Image src="/assets/Illustration1.png" alt="Testimonials" width={640} height={222} />
          <div>
            <h2 className="sec-title">Testimonials</h2>
            <p className="muted">Creative client narratives grounded in real project outcomes from recent roles.</p>
          </div>
        </div>
        <div className="testi-list">
          {testimonials.map((item) => (
            <article className="item" key={`${item.company}-${item.name}`}>
              <div>
                <strong>{item.name}</strong>
                <p className="muted">{item.title}</p>
              </div>
              <div>
                <p className="muted">{item.company}</p>
                <div className="stars">{item.stars}</div>
                <p className="muted" style={{ marginTop: "8px" }}>{item.source.period}</p>
              </div>
              <p className="muted">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
