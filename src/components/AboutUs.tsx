"use client";
import React from "react";
import aboutData from "../data/about";

const AboutUs = () => {
  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="about"
    >
      <div className="w-full">
        <div className="flex-col items-center justify-center text-center sm:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent my-4 bg-clip-text bg-gradient-to-r from-secondary to-primary">
            {aboutData.title}
          </h2>
        </div>
        <div className="flex gap-10 flex-col">
          <div className="flex-1">
            <p className="my-4 text-foreground text-sm sm:text-lg max-w-[800px] mx-auto">
              {aboutData.description}
            </p>
            <p className="my-4 text-foreground text-sm sm:text-lg max-w-[800px] mx-auto">
              {aboutData.mainContent}
            </p>
            <p className="my-4 text-foreground text-sm sm:text-lg max-w-[800px] mx-auto">
              {aboutData.closingContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
