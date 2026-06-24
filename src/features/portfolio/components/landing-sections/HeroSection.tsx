"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedButton } from "../../../../components/animated-button";

import Image from "next/image";
import { StatsSection } from "./Stats";

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
      className="min-h-[calc(100vh-77px)] justify-center pt-0 flex flex-col pb-8 items-center mb-8 mx-3 sm:mx-0"
      {...container}
    >
      <div className="flex gap-6 mx-auto sm:flex-row flex-col">
        <div className="h-36 w-36 rounded-full bg-primary relative overflow-hidden shrink-0">
          <Image src="/assets/laban_casual.webp" alt="Laban Mogire, Full-Stack Software Engineer" fill priority className="h-36 w-36 object-cover"/>
        </div>
        <div>
          <motion.p
            className="text-sm max-w-[900px] tracking-[-0.045em]"
            {...fadeUp}
          >
            Full-Stack Engineer · AI-Native
          </motion.p>
          <motion.h1
            className="text-[clamp(48px,7vw,72px)] max-w-[900px] tracking-[-0.045em]"
            {...fadeUp}
          >
            Laban <span className="text-primary">Mogire</span>
            <span className="sr-only">, Full-Stack Software Engineer</span>
          </motion.h1>
          <div className="">
            <p className="text-sm leading-[1.8] max-w-md">
              I build end-to-end products — web, mobile, and AI-powered systems
              that <span className="font-bold italic">ship fast</span>, scale
              cleanly, and create{" "}
              <span className="font-bold italic">real business value</span>.
            </p>
          </div>
          <motion.div className="mt-6 flex gap-4 flex-col" {...fadeUp}>
            <a href="#contact">
              <AnimatedButton className="border-primary text-primary bg-transparent">
                Let&apos;s Work Together →
              </AnimatedButton>
            </a>
            <StatsSection/>
       
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
