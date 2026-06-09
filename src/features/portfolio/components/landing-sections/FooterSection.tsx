import { AnimatedLink } from "../../../../components/animated-link";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container flex justify-between items-center">
        <div>
          <p className="text-primary-foreground">Got a project in mind?</p>
          <h2 className="hero-line">Let&apos;s Chat!</h2>
          <nav className="nav-links">
            <AnimatedLink className="" href="#">
              Home
            </AnimatedLink>
            <AnimatedLink className="" href="#about">
              About
            </AnimatedLink>

            <AnimatedLink className="" href="#services">
              Services
            </AnimatedLink>

            <AnimatedLink className="" href="#projects">
              Projects
            </AnimatedLink>

            <AnimatedLink className="" href="#contact">
              Contact Me
            </AnimatedLink>
          </nav>
        </div>
        <div className="relative w-[100px] h-[100px] aspect-square shrink-0">
          <Image
            src="/assets/picofme-nobg-gray.webp"
            alt="Laban Mogire Software Engineer"
            fill
            className="object-cover drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
      {/* <h3 className="hero-subtitle text-center mt-8">I Build Interfaces That Think</h3> */}
    </footer>
  );
}
