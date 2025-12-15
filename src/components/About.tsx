"use client";
import React from "react";
import aboutData from "../data/about";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = new SplitText("#target", { type: "chars" });
      gsap.to(split.chars, {
        color: "green",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger:  containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
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
      <div className="mx-auto max-w-[768px]">
        <h2 className="text-primary dark:text-secondary text-3xl lg:text-4xl font-bold my-4">
          {aboutData.title}
        </h2>
        <div className="flex gap-10">
          <div className="flex gap-10 flex-col parent" ref={containerRef} style={{ height: "80vh"}}>
            <div className="flex-1 text-lg" id='target'>
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
