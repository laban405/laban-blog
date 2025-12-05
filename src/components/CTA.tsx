"use client";
import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="contact"
    >
      <div className="w-full text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-transparent my-4 bg-clip-text bg-gradient-to-r from-secondary to-primary">
          Let's Build Something Exceptional
        </h2>
        <p className="text-foreground text-sm sm:text-lg max-w-[700px] mx-auto my-6">
          Whether you need help designing a scalable architecture, improving UI quality, or delivering a high-impact frontend, I bring clarity, structure, and a performance-focused approach to every project.
        </p>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-secondary to-primary bg-primary text-lg p-3 px-6 font-medium text-white rounded hover:opacity-90 transition-opacity">
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;

