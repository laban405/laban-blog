import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Product Manager",
    company: "Company Name",
    content:
      "Outstanding work on modernizing our frontend architecture. The performance improvements were remarkable.",
  },
  {
    name: "Client Name",
    role: "Engineering Lead",
    company: "Company Name",
    content:
      "Exceptional attention to detail and deep understanding of modern frontend patterns. Highly recommended.",
  },
  {
    name: "Client Name",
    role: "CTO",
    company: "Company Name",
    content:
      "Delivered complex features on time with clean, maintainable code. A true professional.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-foreground mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

