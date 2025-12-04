import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Settings2, Users } from "lucide-react";

const stats = [
  {
    title: "100+",
    description: "Our Esteemed Clients and Partners",
    bgColor: "bg-[#0F766E]",
    textColor: "text-white",
  },
  {
    title: "Total Projects 📈 1951+",
    description: "Increase of 128 this month",
    bgColor: "bg-[#86EFAC]",
    textColor: "text-gray-900",
    icon: TrendingUp,
  },
  {
    title: "6+ Years",
    description: "of Dedicated Service",
    bgColor: "bg-[#0F766E]",
    textColor: "text-white",
    icon: Clock,
  },
  {
    title: "Achieve Optimal Efficiency",
    description: "and Boost Productivity",
    bgColor: "bg-[#86EFAC]",
    textColor: "text-gray-900",
    icon: Settings2,
  },
];

export default function ProdmastHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Future of Manufacturing with Latest Technology
              </h1>
              <p className="text-xl text-gray-600">
                Expert tech to elevate your manufacturing. Let&apos;s take your
                business further.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#0F766E] hover:bg-[#0F766E]/90 text-white px-8"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/10 px-8"
              >
                Try Demo
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-lg">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-gray-700 font-medium">
                5.0 from 80+ reviews
              </span>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-6">
            {/* Hero Image Placeholder */}
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p className="text-lg font-semibold">Industrial Building</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`${stat.bgColor} ${stat.textColor} border-0`}
                >
                  <CardContent className="p-4">
                    {stat.icon && (
                      <stat.icon className="h-5 w-5 mb-2 opacity-80" />
                    )}
                    <h3 className="font-bold text-lg mb-1">{stat.title}</h3>
                    <p className="text-sm opacity-90">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

