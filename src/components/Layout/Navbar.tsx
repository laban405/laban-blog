"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";
import { ModeToggle } from "./ModeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const logoVariant = {
  hidden: {
    x: 200,
    opacity: 0.5,
    scale: [1, 2, 2, 1, 1],
    transition: { duration: 1 },
  },
  visible: { x: 0, y: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 10);
    });
  }, []);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const sections = ["home", "about", "services", "projects","contact"];
  const active = useActiveSection(sections);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-30 w-screen border-b transition-all",
          scrollActive
            ? "sm:backdrop-blur-3xl sm:bg-transparent bg-background"
            : "bg-background"
        )}
      >
        <div className="max-w-6xl mx-2 sm:mx-auto flex justify-between items-center border-l border-r px-2">
          <div className="p-2 pl-0">
            <motion.div
              ref={ref}
              variants={logoVariant}
              initial="hidden"
              animate={control}
            >
              <Logo />
            </motion.div>
          </div>
          <div className="flex items-center">
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 grid grid-flow-col py-3 sm:py-4">
              <ul className="hidden md:flex col-start-4 col-end-8  items-center">
                {sections.map((id) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={cn(
                      "px-2 py-1 transition-colors",
                      active === id ? "font-semibold" : "hover:text-primary"
                    )}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                ))}
              </ul>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed md:hidden bg-background bottom-0 left-0 right-0 z-20 w-screen border-t">
        <div className="bg-background sm:px-3">
          <ul className="flex w-full justify-between items-start text-center">
            {sections.map((id) => (
              <Link
                key={id}
                href={`/#${id}`}
                className={cn(
                  "px-2 py-6 transition-colors text-sm",
                  active === id ? "font-semibold" : "hover:text-primary"
                )}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export { Navbar };
