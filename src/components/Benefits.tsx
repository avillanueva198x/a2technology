import { Workflow, Eye, Link2, TrendingUp } from "lucide-react";
import Reveal from "./motion/Reveal";

const Benefits = () => {
  const benefits = [
    {
      icon: <Workflow className="h-6 w-6 text-a2tech-blue" />,
      title: "Menos trabajo manual",
      description: "Automatizamos tareas repetitivas para que tu equipo dedique tiempo a lo que realmente agrega valor.",
    },
    {
      icon: <Eye className="h-6 w-6 text-a2tech-blue" />,
      title: "Visibilidad operativa",
      description: "Información clara y en tiempo real de lo que pasa en tu negocio, sin depender de hojas de cálculo dispersas.",
    },
    {
      icon: <Link2 className="h-6 w-6 text-a2tech-blue" />,
      title: "Sistemas conectados",
      description: "Integramos tus herramientas actuales para que dejen de trabajar de forma aislada entre sí.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-a2tech-blue" />,
      title: "Crecimiento escalable",
      description: "Construimos sobre una base sólida que acompaña tu negocio a medida que crece, sin rehacer todo desde cero.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom">
        {/* Two-column layout: list on one side, abstract visual panel on the
            other, instead of repeating the Services card grid. */}
        <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="section-title text-left">Beneficios para tu Negocio</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Resultados concretos que buscamos en cada proyecto
            </p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="bg-a2tech-blue/10 p-3 rounded-xl shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-a2tech-blue to-a2tech-teal-dark rounded-3xl p-8 md:p-10 grid grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="bg-white p-3 rounded-full">{benefit.icon}</div>
                <span className="text-a2tech-dark text-sm font-medium">{benefit.title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Benefits;
