import { useState } from "react";
import { 
  ShoppingCart, 
  Package, 
  Wallet, 
  Building2, 
  Receipt, 
  CheckCircle2, 
  Store, 
  TrendingUp, 
  Hotel, 
  BedDouble, 
  Trophy, 
  CalendarDays, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Coins, 
  Check, 
  ArrowRight,
  ChevronRight,
  Layers,
  type LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "./motion/Reveal";

interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  category: "comercio" | "hoteleria" | "deportes" | "fintech";
  categoryLabel: string;
  url: string;
  statusBadge: string;
  // Only set for products with a real paying client and a published
  // pricing page (today just QatuySys, a2/web/pagina-qatuy-2026-10-20-dev).
  pricingNote?: { text: string; path: string };
  description: string;
  accentColor: string;
  borderHoverColor: string;
  iconBgColor: string;
  iconColor: string;
  badgeBgColor: string;
  features: { icon: LucideIcon; title: string; desc: string }[];
  whatsappMessage: string;
  mockup: {
    headerTitle: string;
    headerBadge: string;
    kpis: { label: string; value: string; hint?: string }[];
    details: { label: string; sublabel: string; value: string; isPositive?: boolean }[];
  };
}

const PRODUCTS: SaaSProduct[] = [
  {
    id: "qatuysys",
    name: "QatuySys",
    tagline: "Ventas, stock y almacenes en un solo lugar",
    category: "comercio",
    categoryLabel: "Comercio & Retail",
    url: "https://qatuysys.a2technology.com.pe",
    statusBadge: "En Producción / Marcha Blanca",
    pricingNote: { text: "Desde S/ 60 al mes", path: "/qatuy" },
    description: "Plataforma de gestión comercial multiempresa y multialmacén. Centraliza el punto de venta (POS), el control de stock en tiempo real y la emisión de facturas y boletas electrónicas SUNAT.",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    borderHoverColor: "hover:border-emerald-500/50",
    iconBgColor: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badgeBgColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    whatsappMessage: "Hola A2 Technology, me interesa una demo de QatuySys para mi negocio.",
    features: [
      { icon: ShoppingCart, title: "Punto de Venta Rápido (POS)", desc: "Cobro ágil con lector de barras y comprobante al instante" },
      { icon: Package, title: "Multialmacén & Stock Sincronizado", desc: "Costos, precios y existencias independientes por sucursal" },
      { icon: Receipt, title: "Facturación Electrónica SUNAT", desc: "Boletas, facturas y notas de crédito con CDR inmediato" },
      { icon: Building2, title: "Soporte Multiempresa", desc: "Maneja distintos RUCs y razones sociales desde un solo panel" },
    ],
    mockup: {
      headerTitle: "Qatuy POS // Local Central",
      headerBadge: "SUNAT Conectado",
      kpis: [
        { label: "Ventas del Día", value: "S/ 4,850.00", hint: "+18.4% vs ayer" },
        { label: "Comprobantes Emitidos", value: "142 Facturas", hint: "100% CDR Aprobado" },
      ],
      details: [
        { label: "F001-000482", sublabel: "Boleta Electrónica", value: "S/ 180.00", isPositive: true },
        { label: "F001-000481", sublabel: "Factura RUC 2060...", value: "S/ 1,250.00", isPositive: true },
      ],
    },
  },
  {
    id: "wasisys",
    name: "WasiSys",
    tagline: "Tu hotel entero, en una sola pantalla",
    category: "hoteleria",
    categoryLabel: "Hotelería & Hospedajes",
    url: "https://wasisys.a2technology.com.pe/",
    statusBadge: "Disponible para demo",
    description: "PMS cloud diseñado para hoteles, hostales y apart-hoteles. Permite administrar reservas en tiempo real, agilizar el check-in, coordinar tareas de limpieza y gestionar consumos de minibar.",
    accentColor: "from-blue-500/20 to-cyan-500/10",
    borderHoverColor: "hover:border-cyan-500/50",
    iconBgColor: "bg-cyan-500/10 border-cyan-500/20",
    iconColor: "text-cyan-400",
    badgeBgColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    whatsappMessage: "Hola A2 Technology, quiero solicitar una demo de WasiSys para mi hotel.",
    features: [
      { icon: CalendarDays, title: "Calendario de Disponibilidad", desc: "Matriz visual de habitaciones con estados en tiempo real" },
      { icon: Hotel, title: "Check-in & Check-out Veloz", desc: "Registro de huéspedes en segundos y liquidación de estadías" },
      { icon: BedDouble, title: "Limpieza & Mantenimiento", desc: "Asignación de habitaciones por piso con seguimiento de estados" },
      { icon: Wallet, title: "Caja & Consumos Integrados", desc: "Carga de consumos de minibar y pagos parciales por habitación" },
    ],
    mockup: {
      headerTitle: "WASI SYS // Recepción Central",
      headerBadge: "Multi-dispositivo",
      kpis: [
        { label: "Ocupación Hoy", value: "78%", hint: "12 Llegadas programadas" },
        { label: "Ingresos del Día", value: "S/ 3,480.00", hint: "6 Habitaciones libres" },
      ],
      details: [
        { label: "101 · Vista Jardín", sublabel: "Check-in realizado", value: "Ocupada" },
        { label: "203 · Atardecer", sublabel: "Limpieza finalizada", value: "Disponible", isPositive: true },
      ],
    },
  },
  {
    id: "haytaysys",
    name: "HaytaySys",
    tagline: "Gestiona campeonatos como los profesionales",
    category: "deportes",
    categoryLabel: "Deportes & Torneos",
    url: "https://haytaysys.a2technology.com.pe/",
    statusBadge: "En desarrollo",
    description: "Plataforma multi-tenant para deporte amateur, ligas distritales, promociones escolares y clubes. Reemplaza el caos de planillas Excel y grupos de WhatsApp con fixtures automáticos y pagos validados.",
    accentColor: "from-orange-500/20 to-amber-500/10",
    borderHoverColor: "hover:border-orange-500/50",
    iconBgColor: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    badgeBgColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    whatsappMessage: "Hola A2 Technology, quiero gestionar mi campeonato deportivo con HaytaySys.",
    features: [
      { icon: Trophy, title: "Setup de Torneo en 10 Minutos", desc: "Configuración ágil de categorías, grupos, fixtures y reglamento" },
      { icon: Users, title: "Portal de Delegados", desc: "Inscripción autónoma de equipos, listas de buena fe y fotos de jugadores" },
      { icon: Wallet, title: "Validación Yape / Plin / Transferencias", desc: "Subida de comprobantes desde el celular y aprobación en un clic" },
      { icon: ShieldCheck, title: "Landing Pública con tu Marca", desc: "Página web con tablas de posiciones y estadísticas para hinchas" },
    ],
    mockup: {
      headerTitle: "HaytaySys // Torneo Apertura 2026",
      headerBadge: "Fixtures en Vivo",
      kpis: [
        { label: "Equipos Inscritos", value: "24 Clubes", hint: "100% digital sin papeles" },
        { label: "Partidos Jugados", value: "36 Encuentros", hint: "Tablas actualizadas" },
      ],
      details: [
        { label: "Los Galácticos vs Real Amistad", sublabel: "Categoría Libre · Cancha 1", value: "20:00 hrs" },
        { label: "Pago Cuota Inscripción", sublabel: "Yape validado por delegado", value: "S/ 150.00", isPositive: true },
      ],
    },
  },
  {
    id: "grassmanager",
    name: "GrassManager",
    tagline: "Control de canchas sintéticas, señas y cafetín",
    category: "deportes",
    categoryLabel: "Deportes & Canchas",
    url: "https://grassmanager.a2technology.com.pe/",
    statusBadge: "Disponible para demo",
    description: "Software para dueños de complejos deportivos y canchas de grass sintético. Administra reservas por hora, evita cruces de turnos, controla señas y administra las ventas de bebidas y snacks del cafetín.",
    accentColor: "from-lime-500/20 to-emerald-500/10",
    borderHoverColor: "hover:border-lime-500/50",
    iconBgColor: "bg-lime-500/10 border-lime-500/20",
    iconColor: "text-lime-400",
    badgeBgColor: "bg-lime-500/10 text-lime-400 border-lime-500/30",
    whatsappMessage: "Hola A2 Technology, me gustaría una demo de GrassManager para mi complejo deportivo.",
    features: [
      { icon: CalendarDays, title: "Grilla Horaria Interactiva", desc: "Reserva de canchas por turnos diurnos/nocturnos sin cruces" },
      { icon: Wallet, title: "Control de Señas & Saldos", desc: "Registro de adelantos y cobro del saldo restante antes del partido" },
      { icon: ShoppingCart, title: "Ventas de Cafetín / Tienda", desc: "Punto de venta integrado para bebidas, energizantes y pelotas" },
      { icon: Store, title: "Arqueo de Caja por Turno", desc: "Cierre diario de ingresos de alquileres y productos en minutos" },
    ],
    mockup: {
      headerTitle: "GrassManager // Complejo Deportivo",
      headerBadge: "Turnos en Directo",
      kpis: [
        { label: "Horas Reservadas Hoy", value: "14 Horas", hint: "92% Horas pico ocupadas" },
        { label: "Ingresos Totales Caja", value: "S/ 1,820.00", hint: "Alquiler + Cafetín" },
      ],
      details: [
        { label: "Cancha 1 (Fútbol 7)", sublabel: "Turno 19:00 - 20:00 · Pagado", value: "S/ 120.00", isPositive: true },
        { label: "Cancha 2 (Fútbol 5)", sublabel: "Turno 20:00 - 21:00 · Seña S/ 40", value: "Pend. S/ 50" },
      ],
    },
  },
  {
    id: "qolqesys",
    name: "QolqeSys",
    tagline: "Administra el pandero de tu grupo como una fintech",
    category: "fintech",
    categoryLabel: "Fintech & Grupos",
    url: "https://qolqesys.a2technology.com.pe/",
    statusBadge: "En desarrollo",
    description: "SaaS financiero multi-grupo para panderos familiares, banquitos de ahorro y juntas de comerciantes. Automatiza aportes periódicos, calcula préstamos internos con interés y reparte ganancias con transparencia.",
    accentColor: "from-amber-500/20 to-yellow-500/10",
    borderHoverColor: "hover:border-yellow-500/50",
    iconBgColor: "bg-yellow-500/10 border-yellow-500/20",
    iconColor: "text-yellow-400",
    badgeBgColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    whatsappMessage: "Hola A2 Technology, quiero conocer más de QolqeSys para mi grupo de ahorro.",
    features: [
      { icon: Coins, title: "Aportes Mensuales Automáticos", desc: "Cronogramas de cuotas con alertas de vencimiento y cálculo de mora" },
      { icon: TrendingUp, title: "Préstamos Internos con Interés", desc: "Simulación de amortizaciones y aprobación centralizada" },
      { icon: ShieldCheck, title: "Reparto de Ganancias Proporcional", desc: "Distribución equitativa de intereses generados al cierre del ciclo" },
      { icon: Layers, title: "Aislamiento Total Multi-tenant", desc: "Cada grupo familiar o comercial tiene sus datos 100% independientes" },
    ],
    mockup: {
      headerTitle: "Qolqe // Pandero Familiar",
      headerBadge: "Seguridad Bancaria",
      kpis: [
        { label: "Fondo Colectivo Activo", value: "S/ 34,200", hint: "22 Integrantes activos" },
        { label: "Intereses Generados", value: "S/ 2,450.00", hint: "Por repartir al cierre" },
      ],
      details: [
        { label: "Préstamo #08 (3 Cuotas)", sublabel: "Tasa 4% · Cuota 2 al día", value: "S/ 1,200.00", isPositive: true },
        { label: "Aporte Mensual Octubre", sublabel: "21 de 22 miembros pagaron", value: "95% Cumplido" },
      ],
    },
  },
];

type CategoryFilter = "todos" | "comercio" | "hoteleria" | "deportes" | "fintech";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("todos");
  const [selectedProductId, setSelectedProductId] = useState<string>("qatuysys");

  const filteredProducts = activeCategory === "todos" 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden border-y border-border/50">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-a2tech-teal/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-a2tech-teal/10 border border-a2tech-teal/20 text-a2tech-teal text-xs font-mono mb-4">
            <Sparkles className="h-3.5 w-3.5 text-a2tech-teal" />
            <span>ECOSISTEMA DE PLATAFORMAS SAAS</span>
          </div>
          <h2 className="section-title">
            Nuestros Productos Digitales Especializados
          </h2>
          <p className="section-subtitle">
            No solo creamos software por encargo: diseñamos, desplegamos y operamos nuestras propias plataformas SaaS multi-tenant para industrias reales.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("todos")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "todos"
                  ? "bg-a2tech-teal text-a2tech-dark shadow-[0_0_15px_rgba(47,224,199,0.3)]"
                  : "bg-a2tech-surface/80 text-muted-foreground hover:text-white border border-border"
              }`}
            >
              Todos los Sistemas ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory("comercio")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "comercio"
                  ? "bg-a2tech-teal text-a2tech-dark shadow-[0_0_15px_rgba(47,224,199,0.3)]"
                  : "bg-a2tech-surface/80 text-muted-foreground hover:text-white border border-border"
              }`}
            >
              Comercio & Retail
            </button>
            <button
              onClick={() => setActiveCategory("hoteleria")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "hoteleria"
                  ? "bg-a2tech-teal text-a2tech-dark shadow-[0_0_15px_rgba(47,224,199,0.3)]"
                  : "bg-a2tech-surface/80 text-muted-foreground hover:text-white border border-border"
              }`}
            >
              Hotelería & Turismo
            </button>
            <button
              onClick={() => setActiveCategory("deportes")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "deportes"
                  ? "bg-a2tech-teal text-a2tech-dark shadow-[0_0_15px_rgba(47,224,199,0.3)]"
                  : "bg-a2tech-surface/80 text-muted-foreground hover:text-white border border-border"
              }`}
            >
              Deportes & Canchas
            </button>
            <button
              onClick={() => setActiveCategory("fintech")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "fintech"
                  ? "bg-a2tech-teal text-a2tech-dark shadow-[0_0_15px_rgba(47,224,199,0.3)]"
                  : "bg-a2tech-surface/80 text-muted-foreground hover:text-white border border-border"
              }`}
            >
              Fintech & Grupos
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProducts.map((product) => {
            const isFeatured = product.id === selectedProductId;
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className={`group relative rounded-2xl bg-a2tech-surface/90 border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer ${
                  isFeatured 
                    ? "border-a2tech-teal shadow-[0_0_30px_rgba(47,224,199,0.15)] ring-1 ring-a2tech-teal/40" 
                    : "border-border hover:border-border/90 hover:bg-a2tech-surface"
                }`}
              >
                <div>
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      {product.categoryLabel}
                    </span>
                    <Badge variant="secondary" className={`${product.badgeBgColor} text-[10px] font-mono px-2 py-0.5`}>
                      {product.statusBadge}
                    </Badge>
                  </div>

                  {/* Product Title & Tagline */}
                  <div className="mb-3">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-a2tech-teal transition-colors flex items-center gap-2">
                      {product.name}
                      <span className="text-xs font-mono text-muted-foreground font-normal">.a2technology</span>
                    </h3>
                    <p className="text-xs text-a2tech-teal/90 font-medium mt-1">
                      {product.tagline}
                    </p>
                    {product.pricingNote && (
                      <Link
                        to={product.pricingNote.path}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-a2tech-teal transition-colors mt-2"
                      >
                        {product.pricingNote.text} · Ver planes →
                      </Link>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => {
                      const IconComp = feat.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <div className={`p-1 rounded-md shrink-0 ${product.iconBgColor}`}>
                            <IconComp className={`h-3.5 w-3.5 ${product.iconColor}`} />
                          </div>
                          <span className="truncate">{feat.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2 mt-2">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-a2tech-teal transition-colors"
                  >
                    <span>Explorar web</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/51931871964?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/20 transition-colors"
                  >
                    Solicitar demo
                  </a>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* Selected Product Interactive Deep-Dive View */}
        <Reveal className="bg-a2tech-surface rounded-3xl border border-border p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  {selectedProduct.name}
                </span>
                <Badge variant="secondary" className={`${selectedProduct.badgeBgColor} font-mono text-xs px-3 py-1`}>
                  {selectedProduct.statusBadge}
                </Badge>
              </div>

              <div className="text-base text-a2tech-teal font-medium">
                {selectedProduct.tagline}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Core Features List */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {selectedProduct.features.map((feature, idx) => {
                  const IconComp = feature.icon;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/60"
                    >
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 border ${selectedProduct.iconBgColor}`}>
                        <IconComp className={`h-4 w-4 ${selectedProduct.iconColor}`} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">{feature.title}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{feature.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={selectedProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-xs h-11 px-6 shadow-[0_0_20px_rgba(47,224,199,0.3)] transition-all"
                >
                  <span>Probar Plataforma en Vivo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={`https://wa.me/51931871964?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs h-11 px-5 font-medium transition-all"
                >
                  <span>Pedir Demostración Guiada</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Live Interface Mockup Simulation */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-background border border-border p-5 space-y-4 shadow-2xl relative overflow-hidden">
                {/* Header of simulated app */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-white font-semibold">
                      {selectedProduct.mockup.headerTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {selectedProduct.mockup.headerBadge}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-muted-foreground block -mt-1">
                  Datos de ejemplo, no corresponden a actividad real
                </span>

                {/* Simulated Stats Bar */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedProduct.mockup.kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-a2tech-surface/80 p-3.5 rounded-xl border border-border/60">
                      <span className="text-[11px] text-muted-foreground block font-mono">{kpi.label}</span>
                      <span className="text-lg font-bold text-white font-mono mt-0.5 block">{kpi.value}</span>
                      {kpi.hint && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                          <TrendingUp className="h-3 w-3" /> {kpi.hint}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Simulated Transaction / Status Feed */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                    Actividad Reciente del Sistema
                  </span>
                  {selectedProduct.mockup.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-a2tech-surface/50 border border-border/40 font-mono"
                    >
                      <div>
                        <div className="text-white font-medium">{detail.label}</div>
                        <div className="text-[10px] text-muted-foreground">{detail.sublabel}</div>
                      </div>
                      <span className={`font-bold ${detail.isPositive ? "text-emerald-400" : "text-a2tech-teal"}`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subdomain pill */}
                <div className="pt-2 text-center">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Instancia desplegada en: <span className="text-white underline">{selectedProduct.url}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The Custom Bridge (SaaS -> Bespoke Development) */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-a2tech-surface via-background to-a2tech-surface border border-border/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display text-lg md:text-xl font-bold text-white">
              ¿Tu empresa requiere un sistema a la medida con reglas exclusivas?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl">
              Reutilizamos la arquitectura base de nuestras plataformas (autenticación multi-tenant, facturación SUNAT, pasarelas de pago y reservas en tiempo real) para entregarte un software 100% personalizado en la mitad del tiempo.
            </p>
          </div>
          <Button
            onClick={scrollToContact}
            className="bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold text-xs h-11 px-6 whitespace-nowrap shadow-[0_0_20px_rgba(47,224,199,0.2)] shrink-0"
          >
            Cotizar Software a Medida
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
