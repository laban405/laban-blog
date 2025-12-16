"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import heroData from "../data/hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Hero = ({ }) => {

  const heroRef = useRef(null)


  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.fromTo(
        ".hero-top",
        { y: 0 },
        { y: 30, ease: "none" },
        0
      )
        .fromTo(
          ".hero-headline",
          { y: 0 },
          { y: -60, ease: "none" },
          0
        )
        .fromTo(
          ".hero-sub",
          { y: 0 },
          { y: -40, ease: "none" },
          0
        )
        .fromTo(
          ".hero-cta",
          { y: 0 },
          {
            y: 100, ease: "none",

          },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  })

  return (
    <div
      ref={heroRef}
      className={`flex items-center justify-center min-h-screen 
        bg-hero-radial-light  px-8 xl:px-16 max-w-6xl 
        mx-2 sm:mx-auto border-l border-r border-b 
       flex-col md:flex-row gap-8 py-16`}
      id="home"
    >
      <div className="container mx-auto flex flex-col justify-center h-full pt-28 sm:pt-0">
        <p className=" max-w-[768px] hero-top text-base mb-4 text-center md:text-start font-medium">
          {heroData.topLabel}
        </p>
        <h1 className="max-w-[768px] hero-headline">
          {heroData.headline}
        </h1>
        <p className="max-w-[768px] mt-4 mb-6 hero-sub">
          {heroData.subHeadline}
        </p>
        {/* <p className=" text-sm sm:text-lg mt-2 mb-6 text-center md:text-start mx-auto">
          {heroData.supportingLine}
        </p> */}
        <div className="hero-cta flex md:justify-start flex-col sm:flex-row items-center justify-center w-full">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-secondary to-primary m-2 bg-primary text-lg p-2 px-3 font-medium text-white">
              {heroData.primaryCTA}
            </button>
          </Link>
          <LinkScroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button className="m-2 border border-primary text-lg p-2 px-3 font-medium hover:border-secondary text-primary hover:text-secondary">
              {heroData.secondaryCTA}
            </button>
          </LinkScroll>
        </div>
      </div>
      {/* <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="flex w-full"
      >
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={hero}
            alt="Vessel GS"
            priority
            quality={100}
            className="w-full"
          />
        </div>
      </motion.div> */}
    </div>
  );
};

export default Hero;
