import { ShoppingCart, Package, Wallet, Building2, Receipt, CheckCircle, Store, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "./motion/Reveal";

const Products = () => {
  const features = [
    { icon: <ShoppingCart className="h-5 w-5 text-a2tech-teal" />, label: "Punto de Venta Rápido (POS)", desc: "Emisión instantánea de comprobantes" },
    { icon: <Package className="h-5 w-5 text-a2tech-teal" />, label: "Control de Inventario", desc: "Sincronizado entre almacenes y locales" },
    { icon: <Wallet className="h-5 w-5 text-a2tech-teal" />, label: "Gestión de Caja & Arqueos", desc: "Cierres diarios con reporte de ingresos" },
    { icon: <Building2 className="h-5 w-5 text-a2tech-teal" />, label: "Soporte Multiempresa / Multilocal", desc: "Administración centralizada" },
    { icon: <Receipt className="h-5 w-5 text-a2tech-teal" />, label: "Facturación SUNAT Integrada", desc: "Boletas, facturas y notas de crédito" },
  ];

  return (
    <section id="products" className="section-padding bg-a2tech-surface/40 overflow-hidden relative border-y border-border/50">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-a2tech-teal/10 border border-a2tech-teal/20 text-a2tech-teal text-xs font-mono mb-4">
            PRODUCTO EMPRESARIAL PROPIO
          </div>
          <h2 className="section-title">Ecosistema Qatuy</h2>
          <p className="section-subtitle">
            Solución integral de ventas, inventario y facturación electrónica diseñada para negocios en crecimiento.
          </p>
        </div>

        <Reveal
          className="relative max-w-5xl mx-auto bg-a2tech-surface rounded-3xl border border-border p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Left Column - Product Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white">Qatuy</span>
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs px-3 py-1">
                En marcha blanca con cliente piloto
              </Badge>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Qatuy es nuestra plataforma de gestión comercial para pequeños y medianos comercios. 
              Centraliza el punto de venta, el control de stock y la emisión de facturas electrónicas SUNAT en una sola interfaz veloz e intuitiva.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-background/50 border border-border/60 hover:border-a2tech-teal/30 transition-colors">
                  <div className="bg-a2tech-teal/10 p-2 rounded-lg shrink-0 mt-0.5 border border-a2tech-teal/20">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - SaaS Interface Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-background border border-border p-5 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-a2tech-teal" />
                  <span className="text-xs font-mono text-white font-semibold">Qatuy POS // Local Central</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  SUNAT Conectado
                </span>
              </div>

              {/* Simulated Stats Bar */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-a2tech-surface/80 p-3 rounded-xl border border-border/60">
                  <span className="text-[11px] text-muted-foreground block font-mono">Ventas del Día</span>
                  <span className="text-lg font-bold text-white font-mono">S/ 4,850.00</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" /> +18.4% vs ayer
                  </span>
                </div>
                <div className="bg-a2tech-surface/80 p-3 rounded-xl border border-border/60">
                  <span className="text-[11px] text-muted-foreground block font-mono">Comprobantes Emitidos</span>
                  <span className="text-lg font-bold text-a2tech-teal font-mono">142 Facturas</span>
                  <span className="text-[10px] text-muted-foreground mt-1 block font-mono">100% CDR Aprobado</span>
                </div>
              </div>

              {/* Simulated Live Transaction Log */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">Últimos comprobantes</span>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-a2tech-surface/40 border border-border/40 font-mono">
                  <span className="text-white">F001-000482</span>
                  <span className="text-muted-foreground">Boleta Electrónica</span>
                  <span className="text-emerald-400 font-bold">S/ 180.00</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2 rounded bg-a2tech-surface/40 border border-border/40 font-mono">
                  <span className="text-white">F001-000481</span>
                  <span className="text-muted-foreground">Factura RUC 2060...</span>
                  <span className="text-emerald-400 font-bold">S/ 1,250.00</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Products;

