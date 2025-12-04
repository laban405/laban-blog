"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import hero from "../../public/assets/icons/hero.png";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

const boxVariant = {
  hidden: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = ({}) => {
  const control = useAnimation();

  return (
    <div
      className={`flex items-center justify-center min-h-screen 
        bg-hero-radial-light  px-8 xl:px-16 max-w-6xl 
        mx-2 sm:mx-auto border-l border-r border-b 
       flex-col md:flex-row gap-8 py-16`}
      id="home"
    >
      <div className="w-full flex flex-col justify-center items-center h-full pt-28 sm:pt-0">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-normal font-black text-center md:text-start">
          Transform Your Business with Enterprise Technology That Actually Works
        </h1>
        <p className="text-foreground text-sm sm:text-xl mt-4 mb-6 text-center md:text-start mx-auto">
          Grow with East Africa&apos;s leading business technology consultants.
          <span className="text-transparent font-semibold mx-2 bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Vessel Global Systems
          </span>
          delivers secure, scalable solutions that drive real growth—from IT
          infrastructure to custom software development.
        </p>
        <div className="flex md:justify-start flex-col sm:flex-row items-center justify-center w-full">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-secondary to-primary m-2 bg-primary text-lg p-2 px-3 font-medium text-white">
              Get Started Now
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
              Explore Services
            </button>
          </LinkScroll>
        </div>
      </div>
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default Hero;
