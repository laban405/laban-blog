"use client";
import React, {  } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
    

  return (
    <>
      <Link href="/#home">
        <Image
          src={
            theme === "dark"
              ? "/assets/white-logo.png"
              : "/assets/dark-logo.png"
          }
          alt="Logo"
          height={50}
          width={110}
          priority
        />
      </Link>
    </>
  );
};

export default Logo;
