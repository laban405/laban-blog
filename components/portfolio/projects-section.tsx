import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Whiteboard Paint & Drawing Tool",
    description:
      "Real-time collaborative drawing tool built with React, Node.js, and Socket.IO.",
    details:
      "Live multi-user canvas with shading, annotations, and low-latency sync.",
    tech: ["React", "Node.js", "Socket.IO"],
  },
  {
    title: "Carwash POS (SaaS)",
    description:
      "Full-stack POS solution using React + Node.js.",
    details:
      "Includes receipts, staff management, transaction tracking, and reporting.",
    tech: ["React", "Node.js", "SaaS"],
  },
  {
    title: "Intelligent Road Transport Management (NTSA Project)",
    description:
      "Led UI/UX design & frontend integration for traffic intelligence and safety systems.",
    details:
      "Enterprise-level system for traffic management and safety monitoring.",
    tech: ["Angular", "TypeScript", "Enterprise"],
  },
  {
    title: "Spare Parts Sourcing System",
    description:
      "Improved accident resolution through real-time sourcing, quoting, and validation flows.",
    details:
      "Insurer & Garage workflow optimization with intelligent matching algorithms.",
    tech: ["React", "GraphQL", "Real-time"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-sm text-muted-foreground/80">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

