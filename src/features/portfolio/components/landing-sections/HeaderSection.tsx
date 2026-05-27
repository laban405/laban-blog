import { AnimatedButton } from "../../../../components/animated-button";
import { AnimatedLink } from "../../../../components/animated-link";

export function HeaderSection() {
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <div>
          <h3 className="brand text-primary">Laban Mogire</h3>
          <span className="micro-top-inner">Trusted by worldwide teams</span>
        </div>
        <nav className="nav-links">
          <AnimatedLink className="hover:text-primary" href="#">
            Home
          </AnimatedLink>
          <AnimatedLink className="hover:text-primary" href="#about">
            About
          </AnimatedLink>

          <AnimatedLink className="hover:text-primary" href="#services">
            Services
          </AnimatedLink>

          <AnimatedLink className="hover:text-primary" href="#projects">
            Projects
          </AnimatedLink>

          <AnimatedLink className="hover:text-primary" href="#contact">
            Contact Me
          </AnimatedLink>
        </nav>
        <a href="#contact">
          <AnimatedButton className="bg-primary border-none text-primary-foreground">
            Get in Touch
          </AnimatedButton>
        </a>
      </div>
    </header>
  );
}
