import { Button } from "@/components/ui/button";
import Reveal from "./motion/Reveal";

const Cta = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-a2tech-dark">
      <div className="container-custom">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Listo para digitalizar tu negocio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos ayudarte a automatizar procesos y hacer crecer tu operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-a2tech-teal text-a2tech-dark hover:bg-a2tech-teal/90"
              aria-label="Ir al formulario de contacto"
            >
              Contáctanos
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-600/90 text-white">
              <a
                href="https://wa.me/51931871964?text=Hola%20A2%20Technology,%20estoy%20interesado%20en%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir a A2 Technology por WhatsApp"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Cta;
