import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="mx-4 md:mx-0 pt-4 scroll-mt-0 sm:min-h-[100vh] flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="sec-title mb-4">
            About <span className="text-primary">Me.</span>
          </h2>
          <div className="flex gap-3 sm:gap-4">
            <div>
              <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/assets/laban_suit.webp"
                  alt="Laban Mogire, Frontend Engineer & AI Specialist based in Nairobi"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
                <p className=" text-zinc-500 text-sm text-center m-2">Toptal Vetted</p>
            </div>
            <p className="text-sm leading-[1.8] sm:mt-6">
              I&rsquo;m Laban Mogire, a Senior Frontend Engineer based in
              Nairobi with 6+ years of experience building scalable web and
              mobile systems across fintech, SaaS, IoT, and enterprise products.
            </p>
          </div>
          <p className="mb-2 text-sm leading-[1.8]">
            I&rsquo;ve worked with teams and clients across Germany, Hong Kong,
            and Africa, delivering systems in both startup and enterprise
            environments.
          </p>
          <p className="mb-2 text-sm leading-[1.8]">
            My speciality lies in building scalable frontend architectures using
            React, Next.js, and Angular. Over the years, I&rsquo;ve led
            migrations from monoliths to microfrontends, built design systems,
            and improved performance and developer velocity in production
            systems at scale.
          </p>
          <p className="mb-2 text-sm leading-[1.8]">
            Currently, I work as a Senior Frontend Engineer at Kamsware, where I
            build enterprise platforms, identity systems, and IoT-enabled
            applications.
          </p>
          <p className="mb-2 text-sm leading-[1.8]">
            I&rsquo;ve recently also been exploring how to integrate AI into
            frontend systems to build smarter interfaces and tools.
          </p>
        </div>
      
    </section>
  );
}
