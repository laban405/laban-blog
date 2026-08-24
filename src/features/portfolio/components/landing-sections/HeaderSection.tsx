import { Button, AnimatedLink } from "@laban405/design-system";

export function HeaderSection() {
  return (
    <header className="sticky top-0 z-[60] bg-[color-mix(in_srgb,hsl(var(--background))_88%,hsl(var(--secondary))_12%)] backdrop-blur-[8px]">
      <div className="container flex min-h-[76px] items-center justify-between gap-4 max-[980px]:min-h-[68px] max-[980px]:gap-3">
        <div>
          <p className="text-[1.5rem] font-semibold tracking-[-0.03em] max-[980px]:text-[1.2rem]">
            L<span className="text-primary">M.</span>
          </p>
          <span className="flex h-full items-center justify-between text-[10px] text-[hsl(var(--muted-foreground))] max-[980px]:text-[9px]">
            Trusted by worldwide teams
          </span>
        </div>

        <nav className="hidden gap-[34px] text-[11px] uppercase tracking-[0.14em] min-[981px]:flex">
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
          <Button
            variant="primary"
            className="max-[980px]:px-[14px] max-[980px]:text-[10px] max-[980px]:tracking-[0.08em]"
          >
            Get in Touch
          </Button>
        </a>
      </div>

      <nav
        className="container hidden min-h-[44px] grid-cols-4 border-t border-t-[hsl(var(--border))] max-[980px]:grid"
        aria-label="Mobile section navigation"
      >
        <a
          href="#about"
          className="inline-flex min-h-[44px] items-center justify-center border-r border-r-[hsl(var(--border))] text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]"
        >
          About
        </a>
        <a
          href="#services"
          className="inline-flex min-h-[44px] items-center justify-center border-r border-r-[hsl(var(--border))] text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]"
        >
          Services
        </a>
        <a
          href="#projects"
          className="inline-flex min-h-[44px] items-center justify-center border-r border-r-[hsl(var(--border))] text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center justify-center text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
