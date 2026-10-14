const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-a2tech-dark text-foreground py-10 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg className="w-8 h-8 rounded-xl shadow-[0_0_15px_rgba(47,224,199,0.25)] border border-a2tech-teal/30" viewBox="0 0 64 64">
                <rect width="64" height="64" rx="14" fill="#0a2463"/>
                <text x="32" y="45" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="36">
                  <tspan fill="#ffffff">A</tspan>
                  <tspan fill="#2FE0C7">2</tspan>
                </text>
              </svg>
              <h3 className="text-xl font-bold text-white tracking-tight">
                A2<span className="text-a2tech-teal"> Technology</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Consultoría en software empresarial, arquitectura cloud y desarrollo de plataformas SaaS verticales.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} A2 Technology. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-4">
              Ecosistema SaaS
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "QatuySys (POS & SUNAT)", url: "https://qatuysys.a2technology.com.pe" },
                { name: "WasiSys (Gestión Hotelera)", url: "https://wasisys.a2technology.com.pe/" },
                { name: "HaytaySys (Torneos Deportivos)", url: "https://haytaysys.a2technology.com.pe/" },
                { name: "GrassManager (Canchas Sintéticas)", url: "https://grassmanager.a2technology.com.pe/" },
                { name: "QolqeSys (Fintech & Panderos)", url: "https://qolqesys.a2technology.com.pe/" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-a2tech-teal transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-a2tech-teal opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Inicio", id: "home" },
                { name: "Servicios", id: "services" },
                { name: "Ecosistema SaaS", id: "products" },
                { name: "En Producción", id: "production" },
                { name: "Proceso", id: "process" },
                { name: "Nosotros", id: "about" },
                { name: "Contacto", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    href="#"
                    className="text-muted-foreground hover:text-a2tech-teal transition-colors cursor-pointer"
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
                <div>
                  <span className="text-muted-foreground">Lima, Perú</span><br/>
                  <span className="text-muted-foreground">Ayacucho, Perú</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">📞</span>
                <a 
                  href="tel:+51931871964" 
                  className="text-muted-foreground hover:text-a2tech-teal transition-colors"
                >
                  +51 931 871 964
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">💬</span>
                <a 
                  href="https://wa.me/51931871964?text=Hola%20A2%20Technology,%20estoy%20interesado%20en%20sus%20servicios." 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-a2tech-teal transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-a2tech-teal">✉️</span>
                <a 
                  href="mailto:contacto@a2technology.com.pe" 
                  className="text-muted-foreground hover:text-a2tech-teal transition-colors"
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
