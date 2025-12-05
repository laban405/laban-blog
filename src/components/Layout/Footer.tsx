import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-16 sm:mb-12 md:mb-0 w-screen border-t">
      <div className="container mx-auto max-w-6xl border-l border-r">
        <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Laban Mogire — Senior Frontend Engineer
          </h3>
          <p className="text-foreground text-sm sm:text-base mb-6">
            Crafting fast, reliable, and intuitive digital experiences.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <a
              href="mailto:laban405@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              📧 laban405@gmail.com
            </a>
          </div>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-foreground">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <span className="text-foreground">•</span>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Behance
            </a>
          </div>
        </div>

        <div className="px-4 py-6 border-t text-center">
          <span className="text-sm text-foreground">
            © 2025 Laban Mogire. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
