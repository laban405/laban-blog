"use client";

import { useEffect } from "react";
import { globalStyles } from "./styles";
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
  useEffect(() => {
    const id = "laban-global-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

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
