"use client";
import React from "react";
import aboutData from "../data/about";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme()
  console.log(theme);


  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to('.title', {
        y: 30,
        ease: 'none'
      })

      const split = new SplitText("#target", { type: "chars" });
      gsap.to(split.chars, {
        color: theme.theme == 'dark' ? '#3faf87ff' : "#0d332aff",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
        },
      });
      return () => split.revert();
    },
    { scope: containerRef }
  );
  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="about"
    >
      <div className="container mx-auto " ref={containerRef}>
        <h2 className="title text-primary dark:text-secondary text-3xl lg:text-4xl font-bold my-4">
          {aboutData.title}
        </h2>
        <div className="flex gap-10">
          <div className="flex gap-10 flex-col parent" style={{ height: "80vh" }}>
            <div className="max-w-[768px] flex-1 text-lg text-neutral-300 dark:text-primary" id='target'>
              <p className="mb-4">
                {aboutData.description}
              </p>
              <p className="my-4">
                {aboutData.mainContent}
              </p>
              <p className="my-4">
                {aboutData.closingContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
