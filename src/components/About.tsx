import Reveal from "./motion/Reveal";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <Reveal className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">Sobre Nosotros</h2>
            <p className="text-muted-foreground mb-6">
              A2 Technology es una consultora de software dirigida directamente por su fundador, responsable
              de principio a fin de cada proyecto: arquitectura, desarrollo, seguridad y experiencia de uso.
              Usamos herramientas de inteligencia artificial para trabajar más rápido, no para reemplazar
              el criterio técnico ni el trato directo con quien realmente lidera tu proyecto.
            </p>

            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-3 text-a2tech-teal">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Potenciar la transformación digital de las empresas a través de soluciones tecnológicas innovadoras, accesibles y adaptadas a las necesidades específicas de cada negocio, contribuyendo así a su crecimiento y éxito sostenible.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-3 text-a2tech-teal">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Convertirnos en la empresa líder en soluciones tecnológicas para pequeñas y microempresas de toda la región, expandiéndonos a nivel nacional e internacional, siendo reconocidos por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-a2tech-surface p-8 rounded-lg relative z-10 border border-border">
              <h3 className="font-display text-xl font-bold mb-6 text-center gradient-text">¿Por qué elegirnos?</h3>

              {[
                "Atención directa y personalizada en cada proyecto",
                "Soluciones personalizadas según tus necesidades",
                "Compromiso con la calidad y la excelencia",
                "Tecnología de vanguardia",
                "Soporte continuo y mantenimiento",
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="#2FE0C7"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            {/* Decorative geometric accents (brand shapes, not generic blur blobs) */}
            <div
              className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-a2tech-teal/15 border-2 border-a2tech-teal-dark/40 -z-10"
              aria-hidden="true"
            ></div>
            <div
              className="hidden sm:block absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-a2tech-blue rotate-12 opacity-90 -z-10"
              aria-hidden="true"
            ></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
