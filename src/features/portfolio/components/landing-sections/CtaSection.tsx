import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "../../../../components/animated-button";

export function CtaSection() {
  return (
    <section className="scroll-mt-24 bg-primary" id="letstalk">
      <div className="max-w-2xl mx-auto text-center px-4 relative z-10 min-h-[100vh] flex flex-col justify-center">
        <p className="uppercase text-primary-foreground/60 text-sm tracking-widest">{"Let's Talk"}</p>
        <h2 className="sec-title mt-3 leading-[1] text-primary-foreground">
          The Right Engineer
          <br />
          for the{" "}
          <span className="italic">Right Problem.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-primary-foreground/70 text-[1.05rem] leading-[1.7] mb-3">
          Scalable architecture, AI-powered features, or a product that finally
          performs: I bring structure, clarity, and craft to every engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
          <a href="https://cal.com/laban" target="_blank" rel="noopener noreferrer">
            <AnimatedButton className="bg-white border-none text-primary">
              <span className="inline-flex items-center gap-1">
                Book a Free Discovery Call
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </AnimatedButton>
          </a>
          <a href="mailto:laban405@gmail.com">
            <AnimatedButton className="border-white text-white bg-transparent">
              laban405@gmail.com
            </AnimatedButton>
          </a>
        </div>
      </div>
    </section>
  );
}
