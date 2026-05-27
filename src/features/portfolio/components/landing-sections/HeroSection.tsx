import { AnimatedButton } from "../../../../components/animated-button";
import GithubIcon from "../../../../components/icons/github";
import LinkedInIcon from "../../../../components/icons/linkedin";

export function HeroSection() {
  return (
    <section className="container min-h-[calc(100vh-77px)] justify-center pt-0 flex flex-col pb-8">
      <h1 className="text-[clamp(48px,7vw,72px)] max-w-[900px] tracking-[-0.045em] ">
        Senior Frontend Engineer &amp;
        <br />
        AI Integration Specialist
      </h1>
      <div className="grid min-h-[100px] mt-[38px] gap-[30px] grid-cols-[220px_1fr] max-[980px]:grid-cols-1">
        <div className="border-r border-r-zinc-500 flex flex-col justify-center max-[980px]:border-r-0">
          <div className="mb-4 text-[46px] font-bold tracking-[-0.03em]">
            #10+
          </div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
            Completed Projects
          </p>
        </div>
        <div className="min-h-[100px] flex flex-col justify-center">
          <p className="text-base text-[hsl(var(--muted-foreground))] leading-[1.8]">
            <span className="font-semibold">I&apos;m Laban Mogire</span>, a
            Senior Frontend Engineer who specializes in frontend systems that
            stay clean as products scale, and increasingly, systems that use AI
            to do more for the people who use them.
          </p>
        </div>
      </div>
      <div className="mt-24 flex justify-between items-center gap-4 flex-wrap">
       
        <AnimatedButton className="border-primary text-primary bg-transparent">  Let&apos;s Work Together →</AnimatedButton>

        <div className="flex gap-[18px] text-[14px] uppercase tracking-[0.12em]">
          <a
            href="https://github.com/laban405"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center"
          >
            <GithubIcon className="h-6 w-6" />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/laban405/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center"
          >
            <LinkedInIcon className="h-7 w-7" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
