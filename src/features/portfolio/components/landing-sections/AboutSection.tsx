import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about-wrap">
        <div>
          <h2 className="sec-title">About Me</h2>
          <p className="muted">I&apos;m Fin Harper, a UI/UX designer with over 15 years of experience transforming ideas into engaging digital products for agencies, startups, and established businesses.</p>
        </div>
        <div className="portrait-block">
          <Image src="/assets/xavier.jpeg" alt="Portrait" width={430} height={430} />
        </div>
        <div className="stats-col">
          <div><div className="n">3.5K+</div><div className="muted">Happy Clients</div></div>
          <div><div className="n">10+</div><div className="muted">Years of Expertise</div></div>
          <div><div className="n">600+</div><div className="muted">Project Collaborations</div></div>
        </div>
      </div>
    </section>
  );
}
