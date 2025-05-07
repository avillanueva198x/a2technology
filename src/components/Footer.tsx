const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-a2tech-blue text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              A2<span className="text-a2tech-teal">Technology</span>
            </h3>
            <p className="text-white/70 mb-4">
              Soluciones tecnológicas personalizadas para impulsar el crecimiento de tu negocio.
            </p>
            <p className="text-white/70">
              © {new Date().getFullYear()} A2 Technology. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", id: "home" },
                { name: "Servicios", id: "services" },
                { name: "Nosotros", id: "about" },
                { name: "Clientes", id: "clients" },
                { name: "Equipo", id: "team" },
                { name: "Contacto", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    href="#"
                    className="text-white/70 hover:text-a2tech-teal transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">📍</span>
                <span className="text-white/70">Ayacucho, Perú</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">📞</span>
                <a 
                  href="tel:+51931871964" 
                  className="text-white/70 hover:text-a2tech-teal transition-colors"
                >
                  +51 931 871 964
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">✉️</span>
                <a 
                  href="mailto:contacto@a2technology.com.pe" 
                  className="text-white/70 hover:text-a2tech-teal transition-colors"
                >
                  contacto@a2technology.com.pe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
