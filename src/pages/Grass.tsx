import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalendarClock,
  Wallet,
  Coffee,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola A2 Technology, quiero una demo de GrassManager para mi complejo de canchas."
);
const WHATSAPP_URL = `https://wa.me/51931871964?text=${WHATSAPP_MESSAGE}`;

// Funcionalidades verificadas contra el código a la fecha de esta página
// (a2/productos/grass/material-comercial-2026-10-20-v1). La boleta/factura
// electrónica aún no está conectada al cobro: hoy entrega recibo interno.
const FUNCIONES = [
  {
    icon: CalendarClock,
    name: "Reservas por hora",
    text: "Calendario de disponibilidad de tus canchas, reserva por hora sin cruces de turno.",
  },
  {
    icon: Wallet,
    name: "Caja por turno",
    text: "Cobra con apertura, cierre y arqueo de caja por turno.",
  },
  {
    icon: Coffee,
    name: "Cafetín y tienda",
    text: "Vende bebidas y snacks con descuento automático de stock.",
  },
  {
    icon: ShieldCheck,
    name: "Permisos por rol",
    text: "Configura roles y permisos desde el panel, sin roles fijos en el código.",
  },
];

const PLANS = [
  {
    name: "Básico",
    nota: "Hasta 3 canchas y 120 comprobantes al mes, por acuerdo comercial.",
  },
  {
    name: "Pro",
    nota: "Para complejos con más canchas que el plan Básico.",
  },
];

const FAQS = [
  {
    q: "¿Puedo cobrar con boleta o factura electrónica ya mismo?",
    a: "Todavía no. Hoy el sistema entrega un recibo interno sin validez fiscal; la boleta y factura electrónica SUNAT están en desarrollo.",
  },
  {
    q: "¿Cuántas canchas puedo registrar en el plan Básico?",
    a: "Hasta 3. Si tienes más, lo ajustamos contigo antes de darte de alta.",
  },
  {
    q: "¿Puedo vender bebidas y snacks en la cancha?",
    a: "Sí, con control de stock igual que el cafetín de un complejo deportivo.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Es 100% web, se usa desde el celular en la caja de la cancha.",
  },
  {
    q: "¿Cómo migro mis reservas actuales?",
    a: "A2 hace el alta: carga tus canchas y horarios, configura usuarios y roles, te da una capacitación y te acompaña la primera semana.",
  },
  {
    q: "¿Qué soporte tengo?",
    a: "WhatsApp directo con quien construyó el sistema, con respuesta el mismo día hábil. No es soporte 24/7.",
  },
];

const Grass = () => {
  useEffect(() => {
    document.title = "GrassManager | Sistema para canchas de fútbol y reservas deportivas";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-a2tech-teal/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-a2tech-teal/10 text-a2tech-teal border-a2tech-teal/30 font-mono mb-4">
            GrassManager
          </Badge>
          <h1 className="section-title">
            Reservas por hora y caja de tu cancha sin cuaderno ni WhatsApp.
          </h1>
          <p className="section-subtitle">
            Sistema web para canchas de grass sintético: reservas por hora,
            caja por turno y cafetín, en un sistema que creamos y atendemos
            nosotros mismos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
            >
              Pedir una demo de 15 minutos
            </a>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 rounded-xl bg-a2tech-surface border border-border hover:border-a2tech-teal/50 text-foreground font-semibold text-sm h-11 px-6 transition-all"
            >
              Ver planes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FUNCIONES */}
      <section className="section-padding bg-a2tech-surface/30 border-y border-border/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Lo que GrassManager hace hoy</h2>
            <p className="section-subtitle mb-0">
              Pensado para complejos de canchas de grass sintético que hoy
              reservan por WhatsApp o cuaderno y cobran en efectivo sin
              control de caja.
            </p>
          </div>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FUNCIONES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.name}
                  className="rounded-2xl bg-background border border-border p-5 flex flex-col gap-3"
                >
                  <div className="p-2 rounded-lg bg-a2tech-teal/10 border border-a2tech-teal/20 w-fit">
                    <Icon className="h-5 w-5 text-a2tech-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{f.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </Reveal>
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            La boleta y factura electrónica SUNAT llegan en las próximas
            semanas; hoy el cobro entrega un recibo interno. Si tu complejo
            la necesita ya, escríbenos y lo conversamos.
          </p>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Planes</h2>
            <p className="section-subtitle mb-0">
              Reservas por hora, caja por turno, cafetín/tienda y permisos
              por rol están incluidos en ambos planes.
            </p>
          </div>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PLANS.map((plan) => (
              <div key={plan.name} className="rounded-2xl bg-a2tech-surface border border-border p-6">
                <div className="font-display text-xl text-white mb-2">{plan.name}</div>
                <div className="text-sm text-muted-foreground">{plan.nota}</div>
              </div>
            ))}
          </Reveal>
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
            >
              Consultar por WhatsApp
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            El alta incluye carga de tus canchas y horarios, configuración de
            usuarios y roles, una capacitación remota y acompañamiento la
            primera semana.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-a2tech-surface/30 border-y border-border/50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="section-title">
            Te muestro GrassManager con tus canchas reales en 15 minutos.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
          >
            <CalendarClock className="h-4 w-4" />
            Pedir una demo por WhatsApp
          </a>
          <p className="text-xs text-muted-foreground mt-6">
            <Link to="/privacidad" className="hover:text-a2tech-teal transition-colors">
              Política de Privacidad
            </Link>
            {" · "}
            <Link to="/terminos" className="hover:text-a2tech-teal transition-colors">
              Términos y Condiciones
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grass;
