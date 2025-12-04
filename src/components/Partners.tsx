"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import partnersList from "../data/partners";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

const logoVariant = {
  hidden: { opacity: 0.5, scale: 0.5, transition: { duration: 0.5 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const logoWrapperVariant = {
  hidden: { opacity: 1, scale: 0.9, transition: { duration: 0.8 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Partners = () => {
  const control = useAnimation();

  const { theme } = useTheme();

  return (
    <div
      className={cn({
        "mx-2 sm:mx-auto 2xl:container overflow-hidden pt-24 max-w-6xl border-l border-r border-b":
          true,
        "": theme !== "dark",
        "": theme === "dark",
      })}
      id="partners"
    >
      <div className="w-full">
        
          <h3 className="mb-10 text-center text-3xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Our Trusted Partners
          </h3>
       

        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          {partnersList.map((partner, index) => (
            <div
              key={partner.website}
              className={cn(
                "py-12 border-t sm:border-r border-b-0 bg-neutral-50 dark:bg-neutral-900",
                index === 0 && "sm:border-l"
              )}
            >
              <Link
                href={partner.website}
                key={partner.website}
                className="focus:outline-none"
              >
                <motion.div
                  variants={logoWrapperVariant}
                  initial="hidden"
                  animate={control}
                  style={{ height: 220 }}
                  className={`flex justify-center items-center flex-col text-center 
                py-2 px-0 space-y-6`}
                >
                  <Image
                    key={partner.icon}
                    src={partner.icon}
                    layout="raw"
                    width={200}
                    height={200}
                    alt="Free Plan"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
