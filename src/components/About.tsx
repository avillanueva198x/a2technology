import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-a2tech-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">Sobre Nosotros</h2>
            <p className="text-gray-700 mb-6">
              A2 Technology es una consultora de software naciente, integrada por profesionales de alto nivel comprometidos con brindar servicios de calidad superior y soluciones tecnológicas innovadoras.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-a2tech-blue">Nuestra Misión</h3>
              <p className="text-gray-700">
                Potenciar la transformación digital de las empresas a través de soluciones tecnológicas innovadoras, accesibles y adaptadas a las necesidades específicas de cada negocio, contribuyendo así a su crecimiento y éxito sostenible.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-a2tech-blue">Nuestra Visión</h3>
              <p className="text-gray-700">
                Convertirnos en la empresa líder en soluciones tecnológicas para pequeñas y microempresas de toda la región, expandiéndonos a nivel nacional e internacional, siendo reconocidos por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-a2tech-blue hover:bg-a2tech-blue/90"
            >
              Trabaja con Nosotros
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">¿Por qué elegirnos?</h3>
              
              {[
                "Equipo de profesionales altamente capacitados",
                "Soluciones personalizadas según tus necesidades",
                "Compromiso con la calidad y la excelencia",
                "Tecnología de vanguardia",
                "Soporte continuo y mantenimiento",
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#3CAEA3"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-a2tech-teal/20 rounded-lg"></div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-a2tech-blue/10 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
