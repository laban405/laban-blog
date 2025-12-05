"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { cn } from "../lib/utils";

import services from "../data/services";
import Spotlight, { SpotlightCard } from "./spotlight";
import { useTheme } from "next-themes";

const boxVariant = {
  hidden: { opacity: 0.3, scale: 0.9, transition: { duration: 0.8 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Services = () => {
  const control = useAnimation();


  const theme = useTheme()

  return (
    <div
      className={cn({
        "min-h-screen pt-24 px-8 lg:px-16 sm:max-w-6xl mx-2 sm:mx-auto pb-24 border-l border-r border-b": true,
        "": theme.theme !== "dark",
        "": theme.theme === "dark",
      })}
      id="services"
    >
      <div className="container mx-auto flex flex-col w-full justify-center ">
        <div className="w-full">
          <h3 className="text-3xl lg:text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-secondary to-primary text-center">
            Services
          </h3>
          <Spotlight className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-4 min-h-screen">
            {services.map((service) => {
              return (
                <SpotlightCard
                  key={service.title}
                  className="border "
                >
                  <div className="h-full p-4 z-20 text-center">
                    <div className="my-4 sm:my-6 flex justify-center">
                      <Image
                        src={service.icon}
                        width={80}
                        height={100}
                        alt={service.title}
                      />
                    </div>
                    <p className="text-primary font-semibold text-xl h-20 sm:h-14">
                      {service.title}
                    </p>
                    <p className="text-sm sm:text-lg mx-auto my-2">{service.content}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </Spotlight>
        </div>
      </div>
    </div>
  );
};

export default Services;
