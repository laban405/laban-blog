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
                <h2 className="">
                    Experience
                </h2>
                <div className="flex flex-col gap-6 max-w-[768px] mt-8">
                    {experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-primary pl-6 py-4">
                            <h3 className="">
                                {exp.role} — {exp.company}
                            </h3>
                            <p className="mt-2">
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

