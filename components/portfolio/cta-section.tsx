import { Button } from "@/components/ui/button";
import { FileText, Linkedin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">
          Let&apos;s Build World-Class Frontend Experiences
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Ready to accelerate your frontend development? Let&apos;s discuss how I
          can help your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="px-8"
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

