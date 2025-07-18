import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:py-36 bg-gradient-to-br from-white to-a2tech-light bg-hero-pattern relative overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemProp="mainContentOfPage"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            itemProp="headline"
          >
            Soluciones Digitales que <span className="gradient-text">Transforman</span> tu Negocio
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            itemProp="description"
          >
            Desarrollamos software personalizado que impulsa el crecimiento de pequeñas y medianas empresas en todo Perú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg" 
              className="bg-a2tech-blue hover:bg-a2tech-blue/90 text-white"
              aria-label="Ver nuestros servicios"
            >
              Nuestros Servicios
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              variant="outline" 
              className="border-a2tech-teal text-a2tech-teal hover:bg-a2tech-teal/10"
              aria-label="Contactar con A2 Technology"
            >
              Contactar Ahora
            </Button>
          </div>
          
          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div 
              className="text-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <p className="text-3xl font-bold text-a2tech-blue" itemProp="name">100%</p>
              <p className="text-gray-600" itemProp="description">Soluciones Personalizadas</p>
              <meta itemProp="position" content="1" />
            </div>
            <div 
              className="text-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <p className="text-3xl font-bold text-a2tech-blue" itemProp="name">4+</p>
              <p className="text-gray-600" itemProp="description">Clientes Satisfechos</p>
              <meta itemProp="position" content="2" />
            </div>
            <div 
              className="text-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <p className="text-3xl font-bold text-a2tech-blue" itemProp="name">24/7</p>
              <p className="text-gray-600" itemProp="description">Soporte Técnico</p>
              <meta itemProp="position" content="3" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-a2tech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-a2tech-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
