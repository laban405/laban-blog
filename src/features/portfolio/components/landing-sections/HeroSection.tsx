"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedButton } from "../../../../components/animated-button";
import GithubIcon from "../../../../components/icons/github";
import LinkedInIcon from "../../../../components/icons/linkedin";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.08,
            },
          },
        },
      };

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 26 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easeOutExpo },
          },
        },
      };

  return (
    <motion.section
      className="container min-h-[calc(100vh-77px)] justify-center pt-0 flex flex-col pb-8"
      {...container}
    >
      <motion.h1
        className="text-[clamp(48px,7vw,72px)] max-w-[900px] tracking-[-0.045em]"
        {...fadeUp}
      >
        Senior Frontend Engineer &amp;
        <br />
        AI Integration Specialist
      </motion.h1>

      <motion.div
        className="grid min-h-[100px] mt-[38px] gap-[30px] grid-cols-[220px_1fr] max-[980px]:grid-cols-1"
        {...fadeUp}
      >
        <motion.div
          className="border-r border-r-zinc-500 flex flex-col justify-center max-[980px]:border-r-0"
          whileHover={
            prefersReducedMotion ? undefined : { x: 2, transition: { duration: 0.2 } }
          }
        >
          <div className="mb-4 text-[46px] font-bold tracking-[-0.03em]">#10+</div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            Completed Projects
          </p>
        </motion.div>

        <div className="min-h-[100px] flex flex-col justify-center">
          <p className="text-sm leading-[1.8]">
            <span className="font-semibold">I&apos;m Laban Mogire</span>, a Senior Frontend
            Engineer who specializes in frontend systems that stay clean as products scale, and
            increasingly, systems that use AI to do more for the people who use them.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 flex justify-between items-center gap-4 flex-wrap"
        {...fadeUp}
      >
        <a href="#contact">
          <AnimatedButton className="border-primary text-primary bg-transparent">
            Let&apos;s Work Together →
          </AnimatedButton>
        </a>

        <div className="flex gap-[18px] text-[14px] uppercase tracking-[0.12em]">
          <motion.a
            href="https://github.com/laban405"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center text-zinc-500 hover:underline hover:text-primary"
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -2,
                    transition: { duration: 0.2, ease: easeOutExpo },
                  }
            }
          >
            <GithubIcon className="h-6 w-6" />
            <span>Github</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/laban405/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center text-zinc-500 hover:underline hover:text-primary"
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -2,
                    transition: { duration: 0.2, ease: easeOutExpo },
                  }
            }
          >
            <LinkedInIcon className="h-7 w-7" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
