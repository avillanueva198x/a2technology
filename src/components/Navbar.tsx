import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Inicio", id: "home" },
    { name: "Servicios", id: "services" },
    { name: "Ecosistema SaaS", id: "products" },
    { name: "En Producción", id: "production" },
    { name: "Proceso", id: "process" },
    { name: "Nosotros", id: "about" }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 border-b border-border backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          href="#"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Official A2 Badge Icon */}
          <div className="relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            <svg className="w-9 h-9 rounded-xl shadow-[0_0_15px_rgba(47,224,199,0.25)] border border-a2tech-teal/30" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="14" fill="#0a2463"/>
              <text x="32" y="45" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="36">
                <tspan fill="#ffffff">A</tspan>
                <tspan fill="#2FE0C7">2</tspan>
              </text>
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
              A2<span className="text-a2tech-teal"> Technology</span>
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase font-mono mt-0.5">
              Consultoría & Software
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              href="#"
              className="text-foreground/80 hover:text-a2tech-teal transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/51931871964?text=Hola%20A2%20Technology,%20estoy%20interesado%20en%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir a A2 Technology por WhatsApp"
            className="inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-600/90 text-white h-10 w-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-a2tech-teal hover:bg-a2tech-teal/90"
          >
            Contáctanos
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2.5 -m-2.5 text-foreground hover:text-a2tech-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border absolute w-full animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                href="#"
                className="text-foreground/80 hover:text-a2tech-teal py-2 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-a2tech-teal hover:bg-a2tech-teal/90 w-full mt-2"
            >
              Contáctanos
            </Button>
            <a
              href="https://wa.me/51931871964?text=Hola%20A2%20Technology,%20estoy%20interesado%20en%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 hover:bg-green-600/90 text-white h-10 px-4 py-2 text-sm font-medium w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
