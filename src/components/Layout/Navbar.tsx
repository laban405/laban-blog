"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";
import { ModeToggle } from "./ModeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 10);
    });
  }, []);


  const [ref, inView] = useInView();



  const sections = ["home", "about", "services", "projects", "contact"];
  const active = useActiveSection(sections);

  const navLinksRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    if (!navLinksRef.current) return;

    console.log('animated>>>');


    const links = navLinksRef.current.querySelectorAll("a");
    const tl = gsap.timeline();

    gsap.set(links, {
      y: 24,
      opacity: 0,
      position: "relative",
      zIndex: -1000,
    });

    tl
    .to(links, {
      y: 0,
      opacity: 1,
      zIndex: 1000,
      ease: "power1.inOut",
      stagger: 0.1,
      duration: 0.3,
      delay:0.3
    },)
  });

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
            <div
              ref={ref}
            >
              <Logo />
            </div>
          </div>
          <div className="flex items-center">
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 grid grid-flow-col py-3 sm:py-4">
              <ul className="hidden md:flex col-start-4 col-end-8  items-center h-[24px] overflow-hidden" ref={navLinksRef}>
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
