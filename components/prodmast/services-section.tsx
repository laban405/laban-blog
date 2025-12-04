import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings2,
  Wrench,
  Shield,
  Package,
  TrendingUp,
  Factory,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Production and Assembly",
    description:
      "Details on production processes, assembly capacity, and product types.",
  },
  {
    icon: Settings2,
    title: "Custom Manufacturing",
    description:
      "Custom product creation with design and customization options.",
  },
  {
    icon: Wrench,
    title: "Quality Control",
    description:
      "Procedures and systems in place to ensure high product quality.",
  },
  {
    icon: Shield,
    title: "Technology and Innovation",
    description:
      "Details on the latest manufacturing technologies and ongoing innovations.",
  },
  {
    icon: Package,
    title: "Packaging and Logistics",
    description:
      "Packaging and logistics for shipping to customers and distributors.",
  },
  {
    icon: TrendingUp,
    title: "Consulting Market Research",
    description:
      "Services to help companies understand market needs and provide strategic advice.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0F766E] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Efficient and Integrated Manufacturing Services
          </h2>
          <p className="text-xl text-white/90">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-[#0F766E] mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

