import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about-wrap">
        <div>
        <p className="uppercase text-zinc-500 text-sm">toptal vetted</p>

          <h2 className="sec-title mb-4">About <span className="text-primary">Me</span></h2>
          {/* <p className="mb-2">
            I&apos;m a Senior Frontend Engineer based in Nairobi, Kenya,
            specializing in scalable frontend systems and AI-powered product
            experiences.{" "}
          </p> */}
          <p className="mb-2 text-sm leading-[1.8]">
            Over 6+ years I&apos;ve shipped across fintech, IoT, transport and
            enterprise, stepping into complex codebases and rebuilding them into
            clean, maintainable foundations that teams can actually grow with.
          </p>
          <p className="text-sm leading-[1.8]">
            Now I bring that same architectural discipline to AI integration,
            connecting products to LLMs, building agentic workflows, and
            creating conversational UIs using the Anthropic Claude API, Vercel
            AI SDK, and LangChain.js — on top of the React, Next.js, and Angular
            stack I&apos;ve been mastering for years.
          </p>
        </div>
        <div className="portrait-block">
          <Image
            src="/assets/picofme.webp"
            alt="Laban Portrait"
            width={430}
            height={430}
          />
        </div>
        <div className="stats-col">
          <div>
            <div className="n">5+</div>
            <div className="uppercase text-zinc-500 text-xs mt-2">Industries Served</div>
          </div>
          <div>
            <div className="n">6+</div>
            <div className="uppercase text-zinc-500 text-xs mt-2">Years Building</div>
          </div>
          <div>
            <div className="n">10+</div>
            <div className="uppercase text-zinc-500 text-xs mt-2">Project Collaborations</div>
          </div>
        </div>
      </div>
      <div>
        <p className="italic text-center mt-8">The goal is always the same</p>
        <p className="italic text-center mb-8">
          Architecture invisible to users, frictionless for builders. The
          difference now is it can also think.
        </p>
      </div>
    </section>
  );
}
