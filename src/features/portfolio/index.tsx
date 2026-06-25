"use client";

import { HeaderSection } from "./components/landing-sections/HeaderSection";
import { HeroSection } from "./components/landing-sections/HeroSection";
import { AboutSection } from "./components/landing-sections/AboutSection";
import { ServicesSection } from "./components/landing-sections/ServicesSection";
import { SkillsSection } from "./components/landing-sections/SkillsSection";
import { ProjectsSection } from "./components/landing-sections/ProjectsSection";
import { CtaSection } from "./components/landing-sections/CtaSection";
import { CareerSection } from "./components/landing-sections/CareerSection";
import { TestimonialsSection } from "./components/landing-sections/TestimonialsSection";
import { ContactSection } from "./components/landing-sections/ContactSection";
import { FooterSection } from "./components/landing-sections/FooterSection";
import { CursorTrail } from "../../components/cursor-trail";

export default function PortfolioFeature() {
  return (
    <main className="">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <CareerSection />
      <TestimonialsSection />
      <CtaSection />
      {/* <UpdatesSection /> */}
      <ContactSection />
      <FooterSection />
      <CursorTrail />
    </main>
  );
}
