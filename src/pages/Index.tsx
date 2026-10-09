
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import ProductionSystems from "@/components/ProductionSystems";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

// NOTE: Clients.tsx and Team.tsx exist in this codebase but are intentionally
// left out of the main flow. Clients.tsx lists customer names/logos and a
// testimonial that could not be verified against A2 Technology's real,
// authorized client list, and the current landing redesign scope does not
// require a clients/team section. Owner must confirm which real, authorized
// clients (if any) can be shown publicly before either component is reused.

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "A2 Technology | Soluciones Digitales Personalizadas";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <ProductionSystems />
      <Benefits />
      <Process />
      <About />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
