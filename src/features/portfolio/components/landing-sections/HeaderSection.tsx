import { AnimatedButton } from "../../../../components/animated-button";

export function HeaderSection() {
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <div>
          <h3 className="brand">Laban Mogire</h3>
          <span className="micro-top-inner">Trusted by worldwide teams</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#expertise">Expertise</a>
        </nav>
        <AnimatedButton className="bg-primary border-none text-primary-foreground">
          Get in Touch
        </AnimatedButton>
      </div>
    </header>
  );
}
