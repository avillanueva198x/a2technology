import { GraduationCap, Scissors } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "./motion/Reveal";

const ProductionSystems = () => {
  const systems = [
    {
      icon: <GraduationCap className="h-6 w-6 text-a2tech-teal" />,
      name: "Instituto Juan Pablo II — Alta Cocina",
      description:
        "Sistema académico en producción: matrícula, asistencia, notas y caja para el instituto, en uso diario real.",
    },
    {
      icon: <Scissors className="h-6 w-6 text-a2tech-teal" />,
      name: "Instituto Juan Pablo II — Estilismos",
      description:
        "Sistema de gestión desarrollado a medida para la escuela de estilismos, en producción desde su lanzamiento.",
    },
  ];

  return (
    <section id="production" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Sistemas en Producción</h2>
          <p className="section-subtitle">
            No son mockups: son sistemas reales, con usuarios reales, funcionando hoy
          </p>
        </div>

        <Reveal className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {systems.map((system) => (
            <div
              key={system.name}
              className="bg-a2tech-surface p-6 rounded-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-a2tech-teal/10 p-2 rounded-full shrink-0">{system.icon}</div>
                <Badge variant="secondary" className="bg-a2tech-teal/10 text-a2tech-teal-dark border-a2tech-teal-dark/30">
                  En producción
                </Badge>
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{system.name}</h3>
              <p className="text-muted-foreground text-sm">{system.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default ProductionSystems;
