import { AnimatedLink } from "../../../../components/animated-link";
import Image from "next/image";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container ">
        <div className="pt-10 flex justify-between items-start gap-8 max-[980px]:flex-col">
          <div className="flex-1">
            <p className="text-primary-foreground text-sm opacity-80">Got a project in mind?</p>
            <h2 className="hero-line">Let&apos;s Chat!</h2>
            <nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] mt-2"
              aria-label="Footer navigation"
            >
              <AnimatedLink href="#">Home</AnimatedLink>
              <AnimatedLink href="#about">About</AnimatedLink>
              <AnimatedLink href="#services">Services</AnimatedLink>
              <AnimatedLink href="#projects">Projects</AnimatedLink>
              <AnimatedLink href="#career">Career</AnimatedLink>
              <AnimatedLink href="#contact">Contact</AnimatedLink>
            </nav>
          </div>

          <div className="relative w-[100px] h-[100px] aspect-square shrink-0 rounded-full overflow-hidden max-[980px]:hidden">
            <Image
              src="/assets/laban_casual.webp"
              alt="Laban Mogire Software Engineer"
              fill
              className="object-cover drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <div className="py-6 border-t border-zinc-300 mt-6 flex justify-between items-center gap-4 flex-wrap text-[11px] uppercase tracking-[0.12em]">
          <span>© {year} Laban Mogire</span>
          <nav className="flex gap-5" aria-label="Social links">
            <AnimatedLink
              href="https://www.linkedin.com/in/laban405/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="https://github.com/laban405"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </AnimatedLink>
            <AnimatedLink href="mailto:laban405@gmail.com">Email</AnimatedLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
