import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Palette,
  Layers,
  Zap,
  Smartphone,
  Settings,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Engineering",
    description:
      "Building high-quality interfaces using Angular, React, TypeScript, and modern architectural patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    description:
      "Translating complex workflows into clean, intuitive, and accessible user experiences.",
  },
  {
    icon: Layers,
    title: "Architecture & Modernization",
    description:
      "Micro-frontends, monorepos, modular design, and scaling large codebases using NX, Webpack, and GraphQL transitions.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Reducing load times through caching, PWA techniques, compression, CI improvements, and code optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    description:
      "Building robust mobile experiences with Flutter, React Native, Ionic, and Capacitor.",
  },
  {
    icon: Settings,
    title: "Engineering Productivity",
    description:
      "Design systems, reusable components, CI/CD workflows, coding standards, documentation, and tooling.",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Expertise Across Modern Frontend Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <skill.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

