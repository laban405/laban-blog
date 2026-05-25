"use client";

import { useEffect } from "react";
import { globalStyles, S } from "./styles";
import { useTheme } from "./components/ui";
import { AboutSection } from "./components/sections/AboutSection";
import { CtaSection } from "./components/sections/CtaSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FooterSection } from "./components/sections/FooterSection";
import { HeroSection } from "./components/sections/HeroSection";
import { NavBar } from "./components/sections/NavBar";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { StatsBar } from "./components/sections/StatsBar";

export default function PortfolioFeature() {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const id = "laban-global-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div style={S.page}>
      <NavBar theme={theme} toggle={toggle} />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
