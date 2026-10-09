import Reveal from "./motion/Reveal";

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "Entendemos tu negocio, tus procesos actuales y los problemas que quieres resolver.",
    },
    {
      title: "Diseño de la solución",
      description: "Definimos la arquitectura y el alcance de la solución junto contigo.",
    },
    {
      title: "Implementación",
      description: "Desarrollamos el sistema siguiendo buenas prácticas de seguridad y calidad.",
    },
    {
      title: "Validación",
      description: "Probamos la solución contigo antes de ponerla en marcha.",
    },
    {
      title: "Soporte",
      description: "Acompañamos el sistema en producción y damos mantenimiento continuo.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-a2tech-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Cómo Trabajamos</h2>
          <p className="section-subtitle">
            Un proceso simple y transparente de principio a fin
          </p>
        </div>

        {/* Timeline: horizontal with connector on desktop, vertical on mobile. */}
        <Reveal>
          <ol className="relative flex flex-col md:flex-row gap-10 md:gap-6">
            <div
              className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-a2tech-teal-dark/30"
              aria-hidden="true"
            ></div>
            <div
              className="md:hidden absolute top-0 bottom-0 left-5 w-0.5 bg-a2tech-teal-dark/30"
              aria-hidden="true"
            ></div>

            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-4 md:flex-1 md:flex-col md:text-center md:gap-0">
                <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-a2tech-blue text-white flex items-center justify-center font-display font-bold">
                  {index + 1}
                </div>
                <div className="md:mt-4">
                  <h3 className="font-display font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:px-2">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
