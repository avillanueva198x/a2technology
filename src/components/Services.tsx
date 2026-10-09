
import {
  Code2,
  Workflow,
  Plug,
  Cloud,
  Bot,
  ArrowUpRight
} from "lucide-react";
import Reveal from "./motion/Reveal";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-7 w-7 text-a2tech-teal" />,
      title: "Desarrollo de Software a Medida",
      subtitle: "Sistemas Core & Plataformas Empresariales",
      description: "Construimos soluciones personalizadas alineadas 100% a la lógica real de tu negocio: portales, ERPs, CRMs y sistemas de gestión.",
      tags: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      icon: <Workflow className="h-7 w-7 text-a2tech-teal" />,
      title: "Automatización de Procesos",
      subtitle: "Flujos de Trabajo Inteligentes",
      description: "Convertimos tareas repetitivas y cuellos de botella manuales en flujos automáticos, eliminando errores operativos y ahorrando horas trabajo.",
      tags: ["Workflows", "RPA", "Alertas en Tiempo Real", "Triggers"]
    },
    {
      icon: <Plug className="h-7 w-7 text-a2tech-teal" />,
      title: "Integración de Sistemas y APIs",
      subtitle: "Ecosistemas Digitales Conectados",
      description: "Conectamos tus herramientas actuales (facturación SUNAT, ERP, e-commerce, pasarelas de pago) para que la información fluya sin fricción.",
      tags: ["REST / GraphQL", "Webhooks", "SUNAT APIs", "Payment Gateways"]
    },
    {
      icon: <Cloud className="h-7 w-7 text-a2tech-teal" />,
      title: "Soluciones en la Nube & Devops",
      subtitle: "Infraestructura Segura y Escalable",
      description: "Desplegamos tu infraestructura en la nube optimizada para garantizar la máxima disponibilidad, seguridad de datos y crecimiento continuo.",
      tags: ["AWS / GCP", "Docker", "CI/CD", "Cloud Backup"]
    },
    {
      icon: <Bot className="h-7 w-7 text-a2tech-teal" />,
      title: "IA Aplicada & Asistentes Inteligentes",
      subtitle: "Inteligencia Artificial para tu Operación",
      description: "Integración de modelos masivos de lenguaje (LLM), chatbots entrenados con tus datos empresariales y procesamiento inteligente de documentos.",
      tags: ["OpenAI / Claude", "Custom RAG", "Bots Operativos", "IA Documental"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-a2tech-teal/10 border border-a2tech-teal/20 text-a2tech-teal text-xs font-mono mb-4">
            SOLUCIONES ESPECIALIZADAS
          </div>
          <h2 className="section-title">Servicios de Consultoría e Ingeniería</h2>
          <p className="section-subtitle">
            Combinamos visión de producto, diseño de arquitectura y desarrollo técnico para construir soluciones que transforman empresas.
          </p>
        </div>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-a2tech-surface/90 p-7 rounded-2xl transition-all duration-300 border border-border/80 hover:border-a2tech-teal/50 hover:shadow-[0_10px_30px_rgba(47,224,199,0.1)] hover:-translate-y-1.5 group flex flex-col justify-between relative overflow-hidden ${
                index === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-a2tech-teal/10 p-3.5 rounded-xl inline-flex items-center justify-center border border-a2tech-teal/20 group-hover:bg-a2tech-teal/20 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-background/60 px-2.5 py-1 rounded border border-border">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-a2tech-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono bg-background px-2.5 py-0.5 rounded text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Services;

