import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Boosting Quality with Tech",
    description:
      "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.",
  },
  {
    title: "Optimization Production Process",
    description:
      "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.",
  },
  {
    title: "AI-Driven Production",
    description:
      "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dashboard Widgets */}
          <div className="space-y-6">
            <Card className="bg-gray-50 border-0">
              <CardHeader>
                <CardTitle className="text-lg">Total Projects 1475 📈 36%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Finished</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#86EFAC] h-2 rounded-full w-[60%]"></div>
                    </div>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Underway</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2DD4BF] h-2 rounded-full w-[30%]"></div>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Repeated</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#0F766E] h-2 rounded-full w-[10%]"></div>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0">
              <CardHeader>
                <CardTitle className="text-lg">Total Projects 📈 1951+</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-3 h-32">
                  <div className="flex-1 bg-[#86EFAC] rounded-t" style={{ height: "40%" }}></div>
                  <div className="flex-1 bg-[#2DD4BF] rounded-t" style={{ height: "70%" }}></div>
                  <div className="flex-1 bg-[#0F766E] rounded-t" style={{ height: "100%" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Benefits List */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key Benefits of Our System for Your Business Efficiency
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our systems boost productivity, cut costs, and drive business
                growth.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-[#86EFAC] flex items-center justify-center">
                      <Check className="h-4 w-4 text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

