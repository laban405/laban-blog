import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "This package offers the basic features you need to get started.",
    price: "$39",
    period: "/month",
    features: [
      "Production up to 10,000 units per month",
      "24/7 technical support",
      "Access the production dashboard",
      "Initial setup guide",
    ],
  },
  {
    name: "Enterprise",
    description: "This package provides full access to all premium features.",
    price: "$99",
    period: "/month",
    features: [
      "Unlimited production units",
      "Dedicated account manager",
      "Tailored manufacturing solutions",
      "Predictive production optimization",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tailored Plans for Your Manufacturing Scale
          </h2>
          <p className="text-xl text-gray-400">Flexible pricing for any business size.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 text-white"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#86EFAC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#0F766E] hover:bg-[#0F766E]/90 text-white"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Banner */}
        <Card className="bg-[#0F766E] border-0 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional
                </h3>
                <p className="text-white/90">
                  Designed for greater flexibility, this solution offers advanced
                  tools for custom tailoring to your needs.
                </p>
              </div>
              <Button
                className="bg-white text-[#0F766E] hover:bg-gray-100"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

