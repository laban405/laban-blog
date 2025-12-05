import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Experience />
      <CTA />
    </>
  );
}
