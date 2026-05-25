export function HeroSection() {
  return (
    <section className="container min-h-[calc(100vh-77px)] justify-center p-4 flex flex-col">
      <h1 className="hero-title">
        Senior Frontend Engineer &amp;
        <br />
        AI Integration Specialist
      </h1>
      <div className="hero-grid min-h-[100px]">
        <div className="border-r border-r-zinc-500 flex flex-col justify-center">
          <div className="stat-big mb-4">#10+</div>
          <p className="muted caps">Completed Projects</p>
        </div>
        <div className="min-h-[100px] flex flex-col justify-center">
          <p className="muted">
            I&apos;m Laban Mogire, a Senior Frontend Engineer who specializes in
            frontend systems that stay clean as products scale, and
            increasingly, systems that use AI to do more for the people who use
            them.
          </p>
        </div>
      </div>
      <div className="row-social">
        <button className="ghost-pill">Let&apos;s Work Together →</button>
        <div className="socials">
          <div>  <span className="rounded-full h-2 w-2"></span> <span>Github</span></div>
       <div><span className="rounded-full h-2 w-2"></span><span>LinkedIn</span></div>
          
        </div>
      </div>
    </section>
  );
}
