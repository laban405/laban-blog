"use client";

import Image from "next/image";
import { useEffect } from "react";
import { globalStyles } from "./styles";

const services = [
  "Visual Design",
  "Brand Design",
  "Website Design",
  "Digital Design",
  "UX/UI Design",
];

const expertise = [
  { tool: "Figma", score: "150+", desc: "Prototyping and polished UI systems for modern products." },
  { tool: "Adobe XD", score: "90+", desc: "Interactive wireframes and feature-focused UX flows." },
  { tool: "Sketch", score: "70+", desc: "Design systems and reusable UI kits for web teams." },
  { tool: "Adobe Illustrator", score: "110+", desc: "Iconography, branding graphics and scalable assets." },
  { tool: "Photoshop", score: "100+", desc: "Image composition and visual refinement for campaigns." },
  { tool: "Webflow", score: "60+", desc: "Visual development and responsive site implementation." },
];

const timeline = [
  ["Google Singapore", "UI/UX Lead & Manager", "2010 - 2012"],
  ["Gojek", "Visual Designer", "2013 - 2015"],
  ["Tokopedia", "UI/UX Specialist", "2015 - 2018"],
  ["Workflow", "UI Developer", "2018 - 2020"],
  ["Awwards", "Graphic Designer", "2020 - Present"],
];

const updates = [
  "/assets/illustration-1.jpg",
  "/assets/2Illustration1.png",
  "/assets/people-1.png",
  "/assets/people-2.png",
  "/assets/people-3.png",
  "/assets/Illustration2.png",
];

export default function PortfolioFeature() {
  useEffect(() => {
    const id = "laban-global-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <main>
      <div className="micro-top">
        <div className="container micro-top-inner">
          <span>ww</span>
          <span>Trusted by worldwide teams</span>
        </div>
      </div>

      <header className="topnav">
        <div className="container topnav-inner">
          <div className="brand">Fin Harper</div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#expertise">Expertise</a>
          </nav>
          <button className="pill-btn">Get in Touch</button>
        </div>
      </header>

      <section className="hero container">
        <h1 className="hero-title">UI/UX Designer &amp;<br />Web Developer</h1>
        <div className="hero-grid">
          <div>
            <div className="stat-big">#230+</div>
            <p className="muted caps">Completed Projects</p>
          </div>
          <div>
            <h3 className="hero-subtitle">Nova Health Platform</h3>
            <p className="muted">I&apos;m Fin Harper, a UI/UX Designer passionate about creating intuitive, user-focused digital experiences. I specialize in crafting clean interfaces that solve problems and feel effortless.</p>
          </div>
        </div>
        <div className="row-social">
          <button className="ghost-pill">Explore More</button>
          <div className="socials"><span>Github</span><span>Pinterest</span><span>Dribbble</span><span>Behance</span></div>
        </div>
      </section>

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

      <section id="expertise" className="section">
        <div className="container expertise-grid">
          <div>
            <h2 className="sec-title">Expertise</h2>
            <p className="muted">I am always eager to learn and explore new things. Continuous practice helps me grow both personally and professionally.</p>
          </div>
          <div>
            {expertise.map((row) => (
              <div className="list-line" key={row.tool}>
                <div className="top"><span>{row.tool}</span><span className="score">{row.score}</span></div>
                <p className="muted">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container career-grid">
          <div>
            <h2 className="sec-title">Career Highlights</h2>
            <p className="muted">Let&apos;s work together, I&apos;m open for part time and freelance collaborations for ambitious product teams.</p>
            <button className="pill-btn">Download CV</button>
          </div>
          <div>
            {timeline.map(([company, role, year]) => (
              <div className="list-line" key={role}>
                <div className="muted company">{company}</div>
                <div className="top"><span>{role}</span><span className="score">{year}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="section" id="project">
        <div className="container">
          <div className="row-social">
            <h2 className="sec-title">Recent Updates</h2>
            <button className="pill-btn">See all news</button>
          </div>
          <div className="updates-grid">
            {updates.map((src, i) => (
              <article className="news-card" key={src + i}>
                <Image src={src} alt={`News ${i + 1}`} width={560} height={176} />
                <p className="muted">April 25, 2024</p>
                <h3 className="news-title">{`News Title ${String(i + 1).padStart(2, "0")}`}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="sec-title">Contact</h2>
            <p className="muted">Feel free to reach out for collaborations, inquiries, or just a quick conversation.</p>
            <div className="contact-lines muted">
              <p>contact@finharperdesigns.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Design Ave, San Francisco, CA</p>
            </div>
          </div>
          <form className="contact-form">
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <input placeholder="Your Phone" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows={4} />
            <button type="button" className="pill-btn" style={{ width: "fit-content" }}>Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer-dark">
        <div className="container">
          <p className="caps">Got a project in mind?</p>
          <h2 className="hero-line">Let&apos;s Chat!</h2>
          <div className="footer-meta muted">Pages · Home · About · Project · Contact</div>
        </div>
      </footer>
    </main>
  );
}
