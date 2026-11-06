import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BedDouble,
  LogIn,
  Store,
  Car,
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
  "Hola A2 Technology, quiero una demo de Wasi Sys para mi hotel."
);
const WHATSAPP_URL = `https://wa.me/51931871964?text=${WHATSAPP_MESSAGE}`;

// Funcionalidades verificadas contra el código a la fecha de esta página
// (a2/productos/wasisys/material-comercial-2026-10-20-v1). No se incluyen
// limpieza, reportes reales ni nota de débito: están en desarrollo.
const FUNCIONES = [
  {
    icon: BedDouble,
    name: "Reservas y tarifa por noche",
    text: "Registra reservas de habitaciones con su tarifa por noche, sin cuaderno ni Excel.",
  },
  {
    icon: LogIn,
    name: "Check-in y check-out",
    text: "Controla la entrada y salida de cada huésped y el estado de la estadía.",
  },
  {
    icon: Store,
    name: "Tienda de mostrador",
    text: "Vende snacks y bebidas en recepción con descuento automático de stock.",
  },
  {
    icon: Car,
    name: "Cochera",
    text: "Alquila y cobra espacios de parqueo con el mismo sistema.",
  },
];

const PLANS = [
  {
    name: "Básico",
    cuota: "Mensual o anual",
    precio: "S/ 60/mes o S/ 650/año",
    nota: "Hasta 120 comprobantes electrónicos SUNAT al mes incluidos.",
  },
  {
    name: "Pro",
    cuota: "Mensual",
    precio: "S/ 300/mes",
    nota: "Para hoteles con más habitaciones y usuarios que el plan Básico.",
  },
];

const FAQS = [
  {
    q: "¿Wasi Sys ya emite boleta o factura electrónica?",
    a: "Sí, al finalizar la estadía con el saldo en cero. Un cargo a mitad de estadía todavía no se puede facturar por separado.",
  },
  {
    q: "¿Tiene módulo de limpieza o reportes?",
    a: "Están en desarrollo. Avisamos apenas estén disponibles, sin costo adicional mientras llegan.",
  },
  {
    q: "¿Puedo cobrar la tienda y la cochera además del hospedaje?",
    a: "Sí, con la misma caja de turno de recepción.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Es 100% web, se usa desde el celular o la tablet de recepción.",
  },
  {
    q: "¿Cómo migro mis reservas actuales?",
    a: "A2 hace el alta: carga tus habitaciones y tarifas, configura usuarios y roles, te da una capacitación y te acompaña la primera semana.",
  },
  {
    q: "¿Qué soporte tengo?",
    a: "WhatsApp directo con quien construyó el sistema, con respuesta el mismo día hábil. No es soporte 24/7.",
  },
];

const Wasi = () => {
  useEffect(() => {
    document.title = "Wasi Sys | Software para hoteles y hostales pequeños | A2 Technology";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-a2tech-teal/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-a2tech-teal/10 text-a2tech-teal border-a2tech-teal/30 font-mono mb-4">
            Wasi Sys
          </Badge>
          <h1 className="section-title">
            Reservas, check-in y caja de tu hotel sin cuaderno ni Excel.
          </h1>
          <p className="section-subtitle">
            Sistema web para hoteles y hostales pequeños: reservas, check-in y
            check-out, caja por turno y tienda de mostrador, en un sistema que
            creamos y atendemos nosotros mismos.
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
              Ver planes y precios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FUNCIONES */}
      <section className="section-padding bg-a2tech-surface/30 border-y border-border/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Lo que Wasi Sys hace hoy</h2>
            <p className="section-subtitle mb-0">
              Pensado para hostales y hoteles pequeños que hoy llevan reservas
              y cobros en cuaderno, Excel o WhatsApp.
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
            Limpieza, reportes con tus cifras reales y nota de débito están en
            desarrollo. Si tu hotel los necesita hoy, escríbenos y lo
            conversamos.
          </p>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Planes y precios</h2>
            <p className="section-subtitle mb-0">
              Reservas, check-in/check-out, caja por turno, tienda de
              mostrador y cochera están incluidos en ambos planes.
            </p>
          </div>
          <Reveal className="sm:hidden grid grid-cols-1 gap-4">
            {PLANS.map((plan) => (
              <div key={plan.name} className="rounded-2xl bg-a2tech-surface border border-border p-5">
                <div className="font-display text-xl text-white mb-2">{plan.name}</div>
                <div className="font-display text-lg font-bold text-a2tech-teal">{plan.precio}</div>
                <div className="text-xs text-muted-foreground mt-1">{plan.cuota}</div>
                <div className="text-xs text-muted-foreground mt-3">{plan.nota}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="hidden sm:block overflow-x-auto">
            <table className="w-full border border-border rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-a2tech-surface">
                  <th className="p-4 text-left text-muted-foreground font-mono text-xs uppercase tracking-wider"></th>
                  {PLANS.map((plan) => (
                    <th key={plan.name} className="p-4 text-left font-display text-xl text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-4 text-muted-foreground font-mono text-xs uppercase tracking-wider">Cuota</td>
                  {PLANS.map((plan) => (
                    <td key={plan.name} className="p-4 text-foreground">{plan.cuota}</td>
                  ))}
                </tr>
                <tr className="border-t border-border bg-a2tech-surface/40">
                  <td className="p-4 text-muted-foreground font-mono text-xs uppercase tracking-wider">Precio</td>
                  {PLANS.map((plan) => (
                    <td key={plan.name} className="p-4">
                      <div className="font-display text-lg font-bold text-a2tech-teal">{plan.precio}</div>
                      <div className="text-xs text-muted-foreground mt-1">{plan.nota}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>
          <p className="text-center text-xs text-muted-foreground mt-6">
            El alta incluye carga de tus habitaciones y tarifas,
            configuración de usuarios y roles, una capacitación remota y
            acompañamiento la primera semana.
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
            Te muestro Wasi Sys con tus habitaciones reales en 15 minutos.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
          >
            <BedDouble className="h-4 w-4" />
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

export default Wasi;
