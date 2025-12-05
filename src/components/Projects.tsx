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
          <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-center">
            Featured Projects
          </h3>
          <Spotlight className="grid-cols-1 sm:grid-cols-2 grid gap-4 mt-8">
            {projects.map((project) => {
              return (
                <SpotlightCard key={project.title} className="border">
                  <div className="h-full p-4 z-20">
                    <h4 className="text-primary font-semibold text-xl mb-3">
                      {project.title}
                    </h4>
                    <p className="text-sm sm:text-lg text-foreground">
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

