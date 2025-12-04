import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-[#0F766E] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          From Idea to Production in Days
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Accelerate your production with our technology. Reduce downtime and
          optimize costs. Get a special offer now!
        </p>
        <Button
          size="lg"
          className="bg-[#86EFAC] hover:bg-[#86EFAC]/90 text-gray-900 px-8"
        >
          Work With Us
        </Button>
      </div>
    </section>
  );
}

