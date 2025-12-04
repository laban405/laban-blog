import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const achievements = [
  {
    metric: "50%",
    description:
      "reduction in app load times via caching + OData request refactoring (Kamsware)",
  },
  {
    metric: "35%",
    description:
      "faster CI/CD pipelines through NX upgrades and workflow optimization",
  },
  {
    metric: "40%",
    description:
      "increase in UX efficiency with design systems (Kyosk Digital Services)",
  },
  {
    metric: "70%",
    description:
      "lower mobile data usage through PWA + compression techniques",
  },
  {
    metric: "3×",
    description: "delivery volume increase after GraphQL migration",
  },
  {
    metric: "50%",
    description:
      "accelerated code onboarding with documentation + component libraries",
  },
];

export default function AchievementsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Impact That Scales Across Products and Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-primary border-0 text-primary-foreground hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 flex-shrink-0 opacity-80" />
                  <div>
                    <div className="text-4xl font-bold mb-2">
                      {achievement.metric}
                    </div>
                    <p className="text-primary-foreground/90 text-sm">
                      {achievement.description}
                    </p>
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

