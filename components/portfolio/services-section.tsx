import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  RefreshCw,
  Palette,
  Zap,
  Smartphone,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "High-quality implementation of modern web interfaces.",
  },
  {
    icon: RefreshCw,
    title: "Frontend Modernization",
    description:
      "Migrating legacy systems to scalable architectures.",
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    description:
      "Improving user flows, accessibility, and visual clarity.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Reducing load times, improving responsiveness, and optimizing CI/CD.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform app development using modern frameworks.",
  },
  {
    icon: Users,
    title: "Architecture & Technical Leadership",
    description:
      "Design systems, code standards, documentation, mentoring.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How I Can Help Your Team or Product
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-muted border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

