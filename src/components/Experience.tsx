"use client";
import React from "react";
import experience from "../data/experience";

const Experience = () => {
  return (
    <div
      className="max-w-6xl px-6 sm:px-8 lg:px-16 mx-2 sm:mx-auto pt-24 pb-24 border-l border-r border-b"
      id="experience"
    >
      <div className="w-full">
        <div className="flex-col items-center justify-center text-center sm:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent my-4 bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Experience
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold text-foreground">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-foreground text-sm sm:text-lg mt-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

