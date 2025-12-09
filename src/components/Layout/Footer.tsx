import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-16 sm:mb-12 md:mb-0 w-screen border-t">
      <div className="container mx-auto max-w-6xl border-l border-r">
        <div className="flex flex-col px-6 py-8 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold  mb-2">
              Laban Mogire — Senior Frontend Engineer
            </h3>
            <p className=" text-sm sm:text-base mb-6">
              Crafting fast, reliable, and intuitive digital experiences.
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="mailto:laban405@gmail.com"
              className=""
            >
              laban405@gmail.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              LinkedIn
            </a>
           
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              GitHub
            </a>
           
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Behance
            </a>
          </div>
        </div>

        <div className="px-4 py-6 border-t text-center">
          <span className="text-sm">
            © 2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
