"use client";
import React from "react";
import aboutData from "../data/about";

const About = () => {
  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="about"
    >
      <div className="w-full">
        <h2 className="text-primary dark:text-secondary text-3xl lg:text-4xl font-bold my-4">
          {aboutData.title}
        </h2>
        <div className="flex gap-10">
          <div className="flex gap-10 flex-col w-1/2">
            <div className="flex-1">
              <p className="mb-4   max-w-[768px]">
                {aboutData.description}
              </p>
              <p className="my-4   max-w-[768px]">
                {aboutData.mainContent}
              </p>
              <p className="my-4  max-w-[768px]">
                {aboutData.closingContent}
              </p>
            </div>
          </div>
          <div className="flex-1 bg-primary dark:bg-secondary rounded-lg p-4 w-1/2">

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
