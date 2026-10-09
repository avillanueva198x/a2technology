import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap, Cpu, Server, CheckCircle2, ShieldCheck, Code2, Bot } from "lucide-react";
import Reveal from "./motion/Reveal";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-a2tech-dark via-background to-background bg-grid-pattern glow-teal relative overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemProp="mainContentOfPage"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Innovation Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-a2tech-teal/10 border border-a2tech-teal/30 text-a2tech-teal text-xs font-mono tracking-wide mb-6 shadow-[0_0_20px_rgba(47,224,199,0.15)] animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-a2tech-teal animate-pulse" />
            <span>CONSULTORÍA TECNOLÓGICA & SOFTWARE EMPRESARIAL</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white"
            itemProp="headline"
          >
            Transformamos procesos complejos en <span className="gradient-text">soluciones digitales de alto impacto</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Diseñamos software a medida, automatizamos flujos operativos e integramos inteligencia artificial para que tu empresa incremente su eficiencia y gane escalabilidad real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-a2tech-teal hover:bg-a2tech-teal/90 text-a2tech-dark font-semibold px-8 h-12 shadow-[0_0_25px_rgba(47,224,199,0.3)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              aria-label="Agendar evaluación de proyecto"
            >
              Agendar Consultoría
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-a2tech-surface hover:border-a2tech-teal/40 h-12 px-6 w-full sm:w-auto"
              aria-label="Explorar nuestros servicios"
            >
              Explorar Soluciones
            </Button>
            <a
              href="https://wa.me/51931871964?text=Hola%20A2%20Technology,%20quiero%20más%20información%20sobre%20sus%20servicios%20de%20consultoría."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600/90 hover:bg-emerald-600 text-white h-12 px-6 font-medium text-sm transition-all duration-300 w-full sm:w-auto shadow-md"
              aria-label="Escribir a A2 Technology por WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp Directo
            </a>
          </div>

          {/* Key Trust Signals */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-a2tech-teal" />
              <span>Arquitectura Escalable</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-a2tech-teal" />
              <span>Automatización a Medida</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-a2tech-teal" />
              <span>Integración de IA & APIs</span>
            </div>
          </div>
        </div>

        {/* Technical Architecture Interactive Mockup Showcase */}
        <Reveal className="max-w-5xl mx-auto mt-6">
          <div className="relative rounded-2xl bg-a2tech-surface/80 border border-border p-3 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden group">
            {/* Top window header bar */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4 px-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs font-mono text-muted-foreground ml-3 hidden sm:inline">a2tech-system-engine v2.4 // Active Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded bg-a2tech-teal/10 text-a2tech-teal border border-a2tech-teal/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-a2tech-teal animate-ping"></span>
                  Sistemas Operativos 99.9%
                </span>
              </div>
            </div>

            {/* Architecture grid cards mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Module 1 */}
              <div className="p-4 rounded-xl bg-background/60 border border-border/80 hover:border-a2tech-teal/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-a2tech-blue/10 text-a2tech-blue">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-a2tech-teal">Core Module</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Software a Medida</h3>
                <p className="text-xs text-muted-foreground mb-3">Sistemas ERP/CRM adaptados a la lógica del negocio.</p>
                <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-a2tech-teal h-full w-[85%]"></div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="p-4 rounded-xl bg-background/60 border border-border/80 hover:border-a2tech-teal/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-a2tech-teal/10 text-a2tech-teal">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Automatizado</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Flujos de Trabajo & APIs</h3>
                <p className="text-xs text-muted-foreground mb-3">Sincronización multi-plataforma e integración SUNAT.</p>
                <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[95%]"></div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="p-4 rounded-xl bg-background/60 border border-border/80 hover:border-a2tech-teal/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-400">IA Activa</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Asistentes Inteligentes</h3>
                <p className="text-xs text-muted-foreground mb-3">Modelos aplicados a la atención y análisis de datos.</p>
                <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full w-[78%]"></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative ambient lighting elements */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-a2tech-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-a2tech-blue/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;

