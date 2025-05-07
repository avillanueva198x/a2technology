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
    { name: "Nosotros", id: "about" },
    { name: "Clientes", id: "clients" },
    { name: "Equipo", id: "team" }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 shadow-md backdrop-blur-sm py-3" 
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
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-xl md:text-2xl font-bold text-a2tech-blue">
            A2<span className="text-a2tech-teal">Technology</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              href="#"
              className="text-gray-700 hover:text-a2tech-teal transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
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
          className="md:hidden text-gray-800 hover:text-a2tech-teal focus:outline-none"
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
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                href="#"
                className="text-gray-700 hover:text-a2tech-teal py-2 transition-colors cursor-pointer"
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
