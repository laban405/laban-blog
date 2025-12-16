"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {
  const { theme } = useTheme();

  const logoContainerRef = useRef(null)
  const logoRef = useRef(null)


  useGSAP(() => {
    const tl = gsap.timeline({

    })

    gsap.set(logoRef.current, {
      y: 24,
      zIndex: -1000,
      opacity:0
    })

    tl.to(logoRef.current, {
      y: 0,
      zIndex: 1,
      opacity:1,
      ease:'power1.inOut'
    })
  }, { scope: logoContainerRef })


  return (
    <div ref={logoContainerRef} className="overflow-hidden h-[24px] relative flex items-center">
      <Link href="/#home" >
        <span ref={logoRef} className="flex gap-1 items-center relative">
          <span className="font-bold text-primary dark:text-secondary font-cardo">Laban </span>
          <span className="font-bold text-secondary font-cardo dark:text-accent-foreground">  Mogire</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
