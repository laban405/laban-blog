"use client";
import React from "react";
import projects from "../data/projects";
import Spotlight, { SpotlightCard } from "./spotlight";

const Projects = () => {
    return (
        <div
            className="min-h-screen pt-24 px-8 lg:px-16 sm:max-w-6xl mx-2 sm:mx-auto pb-24 border-l border-r border-b"
            id="projects"
        >
            <div className="container mx-auto flex flex-col w-full justify-center">
                <div className="w-full">
                    <h2 className="">
                        Featured Projects
                    </h2>
                    <Spotlight className="grid-cols-1 sm:grid-cols-2 grid gap-4 mt-8">
                        {projects.map((project) => {
                            return (
                                <SpotlightCard key={project.title} className="border">
                                    <div className="h-full p-4 z-20">
                                        <h3 className="">
                                            {project.title}
                                        </h3>
                                        <p className="">
                                            {project.description}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            );
                        })}
                    </Spotlight>
                </div>
            </div>
        </div>
    );
};

export default Projects;

