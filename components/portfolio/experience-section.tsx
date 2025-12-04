import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Kamsware",
    role: "Senior Frontend Engineer",
    period: "2023–Present",
    description:
      "Performance optimization, CI/CD improvements, real-time dashboards.",
  },
  {
    company: "Kyosk Digital Services",
    role: "Frontend Engineer",
    period: "2022–2023",
    description:
      "Design systems, GraphQL migration, micro-frontends, PWAs.",
  },
  {
    company: "Innovex Solutions",
    role: "Frontend Engineer",
    period: "2022",
    description:
      "Spare parts sourcing system, mentoring, component architecture.",
  },
  {
    company: "Data Integrated",
    role: "Frontend Engineer & UI/UX Architect",
    period: "2020–2021",
    description:
      "Ticketing platforms, transport systems, UX audits, standards.",
  },
  {
    company: "Ciphercom",
    role: "Software Developer & UI/UX Architect",
    period: "2020",
    description:
      "M-Rescue App, SACCO/Loan Management SaaS, code standards.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Professional Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

