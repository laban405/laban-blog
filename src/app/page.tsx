import About from "../components/About";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <CTA />
    </>
  );
}
