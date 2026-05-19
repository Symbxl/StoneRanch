import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import Testimonials from "./components/Testimonials";
import ServiceAreas from "./components/ServiceAreas";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <ServiceAreas />
      <CtaBanner />
    </>
  );
}
