"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import about from "../../public/assets/icons/about.png";

import { motion, useAnimation } from "framer-motion";

const boxVariant = {
  hidden: { opacity: 0.3, scale: 0.9, transition: { duration: 0.8 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  const control = useAnimation();

  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="about"
    >
      <div className=" w-full">
        <div className="flex-col items-center justify-center text-center sm:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent my-4 bg-clip-text bg-gradient-to-r from-secondary to-primary">
            About Us
          </h2>
          {/* <h4 className="sm:mb-4">
            Driving Business Success with Innovative Solutions
          </h4> */}
          <h3>Why Leading Companies Choose Vessel Global Systems</h3>
        </div>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="  flex-1">
             <div className="h-full w-full flex justify-center items-center">
          <Image
            src={about}
            alt="Vessel GS"
            priority
            quality={100}
            className="w-full"
          />
        </div>
          </div>
          <div className="flex-1">
            <p className="my-2 text-foreground text-sm sm:text-lg max-w-[600px]">
              Vessel Global Systems (VGS) is a leading business consulting firm,
              founded and incorporated under the laws of the Republic of Kenya.
              We specialize in enhancing business processes through innovative
              solutions in management and technology.
            </p>
            <p className="my-2 text-foreground text-sm sm:text-lg max-w-[700px]">
              At VGS, we deliver tailored solutions across various industries,
              including project management, business process outsourcing (BPO),
              and IT services. Our strategic partnerships with top technology
              manufacturers and vendors enable us to provide comprehensive
              services, from endpoint devices and infrastructure management to
              information security, software development, and maintenance.
            </p>
            <p className="my-2 text-foreground text-sm sm:text-lg max-w-[700px]">
              With a strong presence in both local and international markets,
              our approach is rooted in a commitment to quality standards, best
              practices, and sustainable operations. Our dynamic team of experts
              is dedicated to helping businesses thrive by offering
              cutting-edge, environmentally responsible solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
