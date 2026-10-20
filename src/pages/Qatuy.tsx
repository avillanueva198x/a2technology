import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  Store,
  Wine,
  Hammer,
  Pill,
  BookOpen,
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
  "Hola A2 Technology, quiero una demo de Qatuy Sys para mi negocio."
);
const WHATSAPP_URL = `https://wa.me/51931871964?text=${WHATSAPP_MESSAGE}`;

// Rubros que Qatuy ya atiende hoy con lo esencial de un punto de venta
// (a2/productos/qatuy/brechas-estandar-por-rubro-2026-10-19). Repuestos,
// cómputo/celulares y ropa/calzado quedan fuera de esta lista a propósito:
// tienen brechas que bloquean la venta (series/IMEI, variantes).
const RUBROS = [
  {
    icon: Store,
    name: "Minimarkets y bodegas",
    text: "Cobra rápido con lector de código de barras, acepta efectivo, Yape, Plin y tarjeta, y cierra caja por turno.",
  },
  {
    icon: Hammer,
    name: "Ferreterías",
    text: "Catálogo con código de barras, precios por lista, cotización que se convierte en venta, crédito simple y compras con orden de compra.",
  },
  {
    icon: Wine,
    name: "Licorerías",
    text: "Catálogo, punto de venta y caja con turno y arqueo, igual que el resto de rubros.",
  },
  {
    icon: Package,
    name: "Abarrotes",
    text: "Inventario por almacén, kardex, compras a proveedores y control por lote (sin venta a granel por balanza).",
  },
  {
    icon: Pill,
    name: "Boticas y farmacias",
    text: "Control de inventario por lote y fecha de vencimiento. No reemplaza el registro sanitario DIGEMID.",
  },
  {
    icon: BookOpen,
    name: "Librerías y bazares",
    text: "Catálogo, caja, compras y reportes de ventas y stock, lo esencial de un punto de venta completo.",
  },
];

const PLANS = [
  {
    name: "Básico",
    cuota: "Mensual o anual",
    precio: "S/ 60/mes o S/ 650/año",
    nota: "Hasta 120 comprobantes electrónicos SUNAT al mes incluidos. Pagando anual ahorras S/ 70 frente a 12 cuotas mensuales.",
  },
  {
    name: "Pro",
    cuota: "Mensual",
    precio: "S/ 300/mes",
    nota: "Para negocios que facturan con más de un RUC: hasta 5 empresas en un solo panel.",
  },
];

const FAQS = [
  {
    q: "¿Qatuy ya emite factura y boleta electrónica?",
    a: "Factura electrónica y nota de crédito ya están validadas con SUNAT en producción. La boleta electrónica está en su proceso final de validación y se habilita por RUC.",
  },
  {
    q: "¿Cuánto cuesta y qué incluye?",
    a: "Básico: S/ 60/mes o S/ 650/año, con hasta 120 comprobantes electrónicos al mes incluidos. Pro: S/ 300/mes. Ventas, inventario multialmacén, caja por turno, compras, lotes y vencimiento, y exportación SIRE (beta) están incluidos en ambos planes.",
  },
  {
    q: "¿Funciona con varios almacenes o solo un local?",
    a: "Sí, el control de stock es por almacén en ambos planes.",
  },
  {
    q: "¿Puedo vender a crédito (fiado)?",
    a: "Sí, puedes registrar ventas a crédito con saldo abierto por cliente. Hoy no manejamos un plan de cuotas programadas.",
  },
  {
    q: "¿Maneja productos con fecha de vencimiento?",
    a: "Sí, en ambos planes. Es control de inventario por lote y vencimiento, no reemplaza el registro sanitario DIGEMID de una farmacia.",
  },
  {
    q: "¿Emite comprobantes en dólares?",
    a: "No, hoy opera en soles. Las compras a proveedores sí se pueden registrar en dólares.",
  },
  {
    q: "¿Qué pasa con el PLE o el SIRE que pide mi contador?",
    a: "Desde el período 2026-10, SUNAT ya no exige el PLE y trabaja con el SIRE. Qatuy incluye exportación SIRE en ambos planes, todavía en beta mientras la valida un contador. Pregúntale a tu contador qué necesita y te decimos si te sirve hoy.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Es 100% web, se usa desde el navegador en celular, tablet o computadora.",
  },
  {
    q: "¿Cómo migro desde mi sistema actual?",
    a: "A2 hace el alta: carga tu catálogo desde Excel, configura usuarios y roles, te da una capacitación y te acompaña la primera semana.",
  },
  {
    q: "¿Qué soporte tengo?",
    a: "WhatsApp directo con quien construyó el sistema, con respuesta el mismo día hábil. No es soporte 24/7.",
  },
];

const Qatuy = () => {
  useEffect(() => {
    document.title = "Qatuy Sys | Punto de venta, inventario y SUNAT | A2 Technology";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-a2tech-teal/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="bg-a2tech-teal/10 text-a2tech-teal border-a2tech-teal/30 font-mono mb-4">
            Qatuy Sys
          </Badge>
          <h1 className="section-title">
            Vende, controla tu stock y cierra tu caja sin cuaderno ni Excel.
          </h1>
          <p className="section-subtitle">
            Punto de venta, inventario por almacén, caja por turno y facturación
            electrónica SUNAT, en un sistema que creamos y atendemos nosotros
            mismos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
            >
              Pedir una demo de 10 minutos
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

      {/* RUBROS */}
      <section className="section-padding bg-a2tech-surface/30 border-y border-border/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Rubros que Qatuy atiende hoy</h2>
            <p className="section-subtitle mb-0">
              Negocios reales ya usan Qatuy en estos rubros. Si el tuyo es
              distinto, escríbenos y lo revisamos juntos.
            </p>
          </div>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RUBROS.map((rubro) => {
              const Icon = rubro.icon;
              return (
                <div
                  key={rubro.name}
                  className="rounded-2xl bg-background border border-border p-5 flex flex-col gap-3"
                >
                  <div className="p-2 rounded-lg bg-a2tech-teal/10 border border-a2tech-teal/20 w-fit">
                    <Icon className="h-5 w-5 text-a2tech-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{rubro.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rubro.text}</p>
                </div>
              );
            })}
          </Reveal>
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            Rubros que todavía no cubrimos del todo: ropa y calzado (variantes
            de talla y color), cómputo y celulares, y repuestos (series e
            IMEI). Si tu negocio es de alguno de estos, escríbenos y vemos si
            Qatuy te sirve igual.
          </p>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Planes y precios</h2>
            <p className="section-subtitle mb-0">
              Todo lo demás —ventas, inventario multialmacén, caja por turno,
              compras, lotes y vencimiento, y exportación SIRE (beta)— está
              incluido en ambos planes.
            </p>
          </div>
          {/* Below sm: stacked cards, one per plan, easier to read at 375px. */}
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

          {/* From sm: up, side-by-side comparison table. */}
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
          <p className="text-center text-xs text-muted-foreground mt-4">
            Plan Intermedio disponible a pedido para quien supere los 120 comprobantes con un solo RUC.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-6">
            El alta incluye carga de tu catálogo desde Excel, configuración de
            tu empresa y sedes, usuarios y roles, una capacitación remota y
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
            Te muestro Qatuy con productos como los tuyos en 10 minutos.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-sm h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
          >
            <ShoppingCart className="h-4 w-4" />
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

export default Qatuy;
