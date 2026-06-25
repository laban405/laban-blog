import { AnimatedButton } from "../../../../components/animated-button";

export function CtaSection() {
  return (
    <section className="scroll-mt-24 sm:min-h-[90vh]" id="letstalk">
      <div className="max-w-2xl mx-auto text-center py-10 relative z-10 min-h-[100vh] flex flex-col justify-center">
        <p className="uppercase text-zinc-500 text-sm">{"Let's Talk"}</p>
        <h2 className="sec-title mt-3 leading-[1]">
          The Right Engineer
          <br />
          for the{" "}
          <span className="text-[hsl(var(--primary))]">Right Problem.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-zinc-500 text-[1.05rem] leading-[1.7] mb-3">
          Scalable architecture, AI-powered features, or a frontend that finally
          performs — I bring structure, clarity, and craft to every engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
          <a href="https://cal.com/laban" target="_blank" rel="noopener noreferrer">
            <AnimatedButton className="bg-primary border-none text-primary-foreground">
              Book a Free Discovery Call →
            </AnimatedButton>
          </a>
          <a href="mailto:laban405@gmail.com">
            <AnimatedButton className="border-primary text-primary bg-transparent">
              laban405@gmail.com
            </AnimatedButton>
          </a>
        </div>
      </div>
    </section>
  );
}
