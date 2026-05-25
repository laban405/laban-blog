export function HeroSection() {
  return (
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
  );
}
