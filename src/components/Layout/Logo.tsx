"use client";
import React, { } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();


  return (
    <>
      <Link href="/#home">
        <span className="font-bold text-primary dark:text-secondary font-cardo">Laban </span>
        <span className="font-bold text-secondary font-cardo dark:text-accent-foreground">  Mogire</span>
      </Link>
    </>
  );
};

export default Logo;
