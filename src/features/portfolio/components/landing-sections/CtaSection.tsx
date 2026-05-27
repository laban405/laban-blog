import { AnimatedButton } from "../../../../components/animated-button";

export function CtaSection() {
  return (
    <section className="section relative overflow-hidden" id="letstalk">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-[radial-gradient(circle,hsla(var(--primary),0.10)_0%,transparent_70%)]" />
      <div className="container text-center py-10 relative z-10">
        <p className="caps text-[hsl(var(--muted-foreground))]">
          {"// Let's Talk"}
        </p>
        <h2 className="sec-title mt-3 leading-[1]">
          The Right Engineer
          <br />
          for the{" "}
          <span className="text-[hsl(var(--primary))]">Right Problem.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-[hsl(var(--muted-foreground))] text-[1.05rem] leading-[1.7]">
          Scalable architecture, high-quality UI, or a frontend that finally
          performs — I bring structure, clarity, and craft to every engagement.
        </p>

        <a href="mailto:laban405@gmail.com" className="inline-flex">
          <AnimatedButton className="bg-primary border-none text-primary-foreground">
            laban405@gmail.com →
          </AnimatedButton>
        </a>
      </div>
    </section>
  );
}
