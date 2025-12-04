import { Button } from "@/components/ui/button";

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Empowering Top Companies with Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Experience seamless connections with our innovative solutions,
              designed to effortlessly integrate with your existing systems,
              enhance productivity, and drive your business towards greater
              success.
            </p>
            <Button
              size="lg"
              className="bg-[#86EFAC] hover:bg-[#86EFAC]/90 text-gray-900 px-8"
            >
              Work With Us
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 bg-[#86EFAC] rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl"
                  >
                    {["🔵", "🟢", "🟡", "🟣", "🔴", "🟠", "⚪", "🟤", "⚫"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

