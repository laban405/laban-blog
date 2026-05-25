"use client";

import { HeaderSection } from "./components/landing-sections/HeaderSection";
import { HeroSection } from "./components/landing-sections/HeroSection";
import { AboutSection } from "./components/landing-sections/AboutSection";
import { ServicesSection } from "./components/landing-sections/ServicesSection";
import { ExpertiseSection } from "./components/landing-sections/ExpertiseSection";
import { CareerSection } from "./components/landing-sections/CareerSection";
import { TestimonialsSection } from "./components/landing-sections/TestimonialsSection";
import { UpdatesSection } from "./components/landing-sections/UpdatesSection";
import { ContactSection } from "./components/landing-sections/ContactSection";
import { FooterSection } from "./components/landing-sections/FooterSection";

export default function PortfolioFeature() {
  return (
    <main>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <CareerSection />
      <TestimonialsSection />
      <UpdatesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
