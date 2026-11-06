import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Blocks, Check, Cloud, Code2, Compass, GraduationCap, Handshake, Layers3, MessageCircle, Network, Scissors, ShieldCheck, Sparkles, Store, Hotel, Goal, UtensilsCrossed } from "lucide-react";

const whatsapp = (context: string) => `https://wa.me/51931871964?text=${encodeURIComponent(`Hola A2 Technology. Me gustaría conversar sobre ${context}.`)}`;
const services = [
  { icon: Code2, title: "Software que se adapta a ti", description: "Diseñamos y desarrollamos aplicaciones alrededor de tus procesos, no al revés. Desde una necesidad puntual hasta un sistema de gestión.", label: "Desarrollo a medida", context: "un desarrollo de software a medida" },
  { icon: Network, title: "Tus sistemas, conectados", description: "Integramos aplicaciones, APIs y servicios para que la información fluya y tu equipo evite tareas repetitivas.", label: "Integraciones y automatización", context: "integrar y automatizar mis sistemas" },
  { icon: Cloud, title: "Tecnología que puede evolucionar", description: "Te ayudamos a desplegar, mantener y mejorar tus aplicaciones en la nube, con un alcance de soporte acordado contigo.", label: "Cloud y continuidad", context: "la evolución y el soporte de mis aplicaciones" },
  { icon: Sparkles, title: "IA con una utilidad concreta", description: "Evaluamos dónde la inteligencia artificial puede apoyar a tu operación. Primero el problema; después, la herramienta y sus límites.", label: "IA aplicada al negocio", context: "aplicar inteligencia artificial en mi empresa" },
];
const steps = [
  { title: "Escuchamos tu realidad", text: "Conocemos tu operación, los problemas y lo que ya funciona. Sin empezar por venderte una herramienta." },
  { title: "Acordamos el camino", text: "Definimos alcance, prioridades, entregables y responsabilidades antes de construir." },
  { title: "Construimos contigo", text: "Avanzamos por entregas, compartimos lo realizado y validamos con las personas que lo usarán." },
  { title: "Acompañamos la evolución", text: "Coordinamos la puesta en marcha y acordamos el soporte y las mejoras que tu operación necesita." },
];
// Only add approved, sanitized local captures. Never link client applications.
const cases: { name: string; area: string; description: string; icon: typeof GraduationCap; image?: { src: string; alt: string } }[] = [
  { name: "Mikhuna", area: "Alta Cocina · Instituto Juan Pablo II", description: "Software desarrollado a medida para el área de Alta Cocina. Una solución en uso en el instituto, construida alrededor de su contexto de trabajo.", icon: GraduationCap, image: { src: "/cases/jpii-alta-cocina.png", alt: "Pantalla de acceso de Mikhuna para Alta Cocina, sin datos personales" } },
  { name: "Estilismos", area: "Estilismos · Instituto Juan Pablo II", description: "Sistema de gestión a medida para el área de Estilismos. Tecnología aplicada a las necesidades de una operación real.", icon: Scissors, image: { src: "/cases/jpii-estilismos.png", alt: "Pantalla de acceso del sistema de Estilismos, sin datos personales" } },
];
const solutions = [
  { name: "Qatuy", area: "Gestión comercial", icon: Store, theme: "commerce", description: "Nuestra solución propia para negocios de comercio. Desarrollo aplicado a la gestión comercial.", url: "https://qatuysys.a2technology.com.pe/", page: "/qatuy", status: "En marcha blanca" },
  { name: "Wasi", area: "Gestión hotelera", icon: Hotel, theme: "hospitality", description: "Tecnología propia para el sector hotelero. Una solución construida alrededor de este tipo de negocio.", url: "https://wasisys.a2technology.com.pe/", page: "/wasi", status: "Demo disponible" },
  { name: "GrassManager", area: "Reservas deportivas", icon: Goal, theme: "sports", description: "Una solución para la reserva de canchas deportivas. Software que conecta tecnología y actividad comercial.", url: "https://grassmanager.a2technology.com.pe/", page: "/grass", status: "Demo disponible" },
  { name: "Mikhuna WasiSys", area: "Restaurantes", icon: UtensilsCrossed, theme: "dining", description: "Nuestro sistema para restaurantes. Una línea de software propia, distinta del desarrollo institucional Mikhuna.", url: "https://mikhunawasisys.a2technology.com.pe/login", status: "Consultar disponibilidad" },
];

const CorporateHome = () => <>
  <section className="a2-hero" id="home">
    <div className="a2-wrap a2-hero-grid">
      <div className="a2-hero-copy"><p className="a2-eyebrow"><span /> CONSULTORÍA Y DESARROLLO DE SOFTWARE</p>
        <h1>Tu negocio avanza.<br /><em>Tu tecnología<br className="a2-desktop-break" /> también debería.</em></h1>
        <p className="a2-hero-intro">Un aliado para entender tus retos, construir las soluciones y acompañar la evolución de tu tecnología.</p>
        <p className="a2-hero-detail">En A2 Technology conectamos estrategia, software e integración para que puedas enfocarte en tu empresa.</p>
        <div className="a2-actions"><a className="a2-btn a2-btn-cyan" href={whatsapp("las necesidades tecnológicas de mi empresa")} target="_blank" rel="noopener noreferrer">Cuéntanos qué necesitas <ArrowUpRight size={19} aria-hidden="true" /></a><a className="a2-text-link" href="#services">Conoce cómo te ayudamos <ArrowDown size={16} aria-hidden="true" /></a></div>
        <div className="a2-hero-promises"><span><Check size={15} aria-hidden="true" /> Comunicación directa</span><span><Check size={15} aria-hidden="true" /> Alcance claro</span><span><Check size={15} aria-hidden="true" /> Visión de largo plazo</span></div>
      </div>
      <div className="a2-collaboration" aria-label="Esquema ilustrativo del acompañamiento de A2 a tu empresa">
        <div className="a2-orbit a2-orbit-one" /><div className="a2-orbit a2-orbit-two" />
        <div className="a2-diagram-heading"><span>UNA VISIÓN CONECTADA</span><Layers3 size={19} aria-hidden="true" /></div>
        <div className="a2-business-node"><div className="a2-node-symbol"><Blocks size={30} aria-hidden="true" /></div><strong>Tu empresa</strong><span>Personas · Procesos · Objetivos</span></div>
        <div className="a2-diagram-line" />
        <div className="a2-partner-node"><img src="/logo.png" alt="" width="42" height="42" /><div><strong>Tu aliado tecnológico</strong><span>A2 Technology</span></div><Handshake size={25} aria-hidden="true" /></div>
        <div className="a2-capabilities"><span><Code2 size={19} aria-hidden="true" /> Software</span><span><Network size={19} aria-hidden="true" /> Integración</span><span><Cloud size={19} aria-hidden="true" /> Cloud</span></div>
        <div className="a2-diagram-note"><span /> Entender. Construir. Acompañar.</div><small className="a2-illustration-label">Esquema ilustrativo de colaboración</small>
      </div>
    </div>
    <div className="a2-wrap a2-hero-bottom"><span>DE LA NECESIDAD A LA SOLUCIÓN</span><p>No solo entregamos código. Trabajamos contigo para que la tecnología tenga sentido en tu negocio.</p></div>
  </section>
  <section className="a2-section a2-light" id="services"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">LO QUE PODEMOS HACER CONTIGO</p><h2>Menos piezas sueltas.<br /><span>Más soluciones conectadas.</span></h2></div><p>Un punto de contacto para ordenar tus necesidades de software, integración y evolución tecnológica.</p></div>
    <div className="a2-services-grid">{services.map(({ icon: Icon, title, description, label, context }, i) => <article className="a2-service-card" key={title}><div className="a2-card-top"><Icon size={27} aria-hidden="true" /><span>0{i + 1}</span></div><p className="a2-card-kicker">{label}</p><h3>{title}</h3><p>{description}</p><a href={whatsapp(context)} target="_blank" rel="noopener noreferrer">Conversemos <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> sobre {label.toLowerCase()}</span></a></article>)}</div>
    <div className="a2-service-bottom"><Compass size={22} aria-hidden="true" /><p><strong>¿No sabes por dónde empezar?</strong> Revisemos tu situación y definamos un primer paso con sentido.</p><a href="#contact">Cuéntanos tu reto <ArrowRight size={17} aria-hidden="true" /></a></div>
  </div></section>
  <section className="a2-section a2-cases" id="production"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">EXPERIENCIA APLICADA</p><h2>Soluciones reales.<br /><span>Contextos diferentes.</span></h2></div><p>Así llevamos el desarrollo a medida a la práctica: sistemas que responden a las necesidades de quienes los utilizan.</p></div>
    <div className="a2-cases-grid">{cases.map(({ name, area, description, icon: Icon, image }) => <article className="a2-case-card" key={name}>{image && <figure><img className="a2-case-image" src={image.src} alt={image.alt} loading="lazy" width="900" height="560" /><figcaption>Vista de acceso al sistema. Sin información privada.</figcaption></figure>}<div className="a2-case-body"><div className="a2-case-top"><Icon size={27} aria-hidden="true" /><span>SOFTWARE EN USO</span></div><p className="a2-card-kicker">{area}</p><h3>{name}</h3><p>{description}</p><div className="a2-case-tags"><span>Desarrollo a medida</span><span>Gestión institucional</span></div></div></article>)}</div>
    <p className="a2-confidentiality"><ShieldCheck size={17} aria-hidden="true" /> Protegemos la información de nuestros clientes. No publicamos accesos ni datos de sus sistemas.</p>
  </div></section>
  <section className="a2-section a2-products" id="products" aria-labelledby="a2-products-title"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">TECNOLOGÍA PROPIA · CONSTRUIDA POR A2</p><h2 id="a2-products-title">No nos quedamos en las ideas.<br /><span>También construimos productos.</span></h2></div><p>Además de desarrollar a medida, creamos nuestras propias soluciones. Experiencia concreta en comercio, hotelería, deporte y gastronomía.</p></div>
    <div className="a2-products-grid">{solutions.map(({ name, area, description, icon: Icon, theme, status, url, page }) => <article className={`a2-product-card a2-product-${theme}`} key={name}>
      <div className="a2-product-identity" aria-hidden="true"><div className="a2-product-identity-top"><span>DESARROLLADO POR A2</span><Blocks size={19} /></div><div className="a2-product-brand"><span className="a2-product-symbol"><Icon size={38} strokeWidth={1.5} /></span><span>{name}</span></div><span className="a2-product-sector">{area}</span></div>
      <div className="a2-product-body"><div className="a2-product-heading"><h3>{name}</h3><span className="a2-product-status">{status}</span></div><p>{description}</p>
        {page && <Link to={page}>Ver planes y precios <ArrowRight size={18} aria-hidden="true" /><span className="sr-only"> de {name}</span></Link>}
        <a href={url} target="_blank" rel="noopener noreferrer">Explorar el proyecto <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> {name} (abre en una pestaña nueva)</span></a>
      </div>
    </article>)}</div>
    <div className="a2-products-note"><Code2 size={22} aria-hidden="true" /><p><strong>Productos propios. La misma capacidad para tu proyecto.</strong> Esta experiencia es parte de lo que llevamos al desarrollo de soluciones para otras empresas.</p></div>
  </div></section>
  <section className="a2-section a2-process" id="process"><div className="a2-wrap"><div className="a2-section-heading"><div><p className="a2-eyebrow">LA EXPERIENCIA DE TRABAJAR CON A2</p><h2>Un camino claro.<br /><span>Desde la primera conversación.</span></h2></div><p>Decisiones compartidas, avances visibles y una relación cercana. Saber qué estamos haciendo es parte del servicio.</p></div><ol className="a2-steps">{steps.map(({ title, text }, i) => <li key={title}><span className="a2-step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><div className="a2-process-note"><MessageCircle size={20} aria-hidden="true" /><p>Sin soluciones impuestas. El alcance, los tiempos y el acompañamiento se acuerdan según cada proyecto.</p></div></div></section>
  <section className="a2-section a2-about" id="about"><div className="a2-wrap a2-about-grid"><div className="a2-about-mark" aria-hidden="true"><img src="/logo.png" alt="" width="130" height="130" /><span>TECNOLOGÍA CON PROPÓSITO.<br />PERSONAS CON CRITERIO.</span></div><div><p className="a2-eyebrow">UNA RELACIÓN CERCANA, UNA BASE TÉCNICA SÓLIDA</p><h2>Queremos conocer tu empresa.<br /><span>No solo tu requerimiento.</span></h2><p>A2 Technology es una iniciativa liderada por su fundador, con participación directa en las decisiones técnicas y en la construcción de cada solución.</p><p>Combinamos desarrollo, integración y herramientas de inteligencia artificial bajo criterio humano. La tecnología es un medio: entender el negocio y cuidar lo que construimos es lo esencial.</p><a className="a2-text-link" href="#contact">Conozcámonos <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
</>;
export default CorporateHome;

