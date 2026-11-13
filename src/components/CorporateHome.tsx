import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Blocks, Check, Cloud, Code2, Compass, GraduationCap, Handshake, Layers3, MessageCircle, Network, Scissors, ShieldCheck, Sparkles, Store, Hotel, Goal, UtensilsCrossed } from "lucide-react";

const whatsapp = (context: string) => `https://wa.me/51931871964?text=${encodeURIComponent(`Hola A2 Technology. Me gustar�a conversar sobre ${context}.`)}`;
const services = [
  { icon: Code2, title: "Software que se adapta a ti", description: "Dise�amos y desarrollamos aplicaciones alrededor de tus procesos, no al rev�s. Desde una necesidad puntual hasta un sistema de gesti�n.", label: "Desarrollo a medida", context: "un desarrollo de software a medida" },
  { icon: Network, title: "Tus sistemas, conectados", description: "Integramos aplicaciones, APIs y servicios para que la informaci�n fluya y tu equipo evite tareas repetitivas.", label: "Integraciones y automatizaci�n", context: "integrar y automatizar mis sistemas" },
  { icon: Cloud, title: "Tecnolog�a que puede evolucionar", description: "Te ayudamos a desplegar, mantener y mejorar tus aplicaciones en la nube, con un alcance de soporte acordado contigo.", label: "Cloud y continuidad", context: "la evoluci�n y el soporte de mis aplicaciones" },
  { icon: Sparkles, title: "IA con una utilidad concreta", description: "Evaluamos d�nde la inteligencia artificial puede apoyar a tu operaci�n. Primero el problema; despu�s, la herramienta y sus l�mites.", label: "IA aplicada al negocio", context: "aplicar inteligencia artificial en mi empresa" },
];
const steps = [
  { title: "Escuchamos tu realidad", text: "Conocemos tu operaci�n, los problemas y lo que ya funciona. Sin empezar por venderte una herramienta." },
  { title: "Acordamos el camino", text: "Definimos alcance, prioridades, entregables y responsabilidades antes de construir." },
  { title: "Construimos contigo", text: "Avanzamos por entregas, compartimos lo realizado y validamos con las personas que lo usar�n." },
  { title: "Acompa�amos la evoluci�n", text: "Coordinamos la puesta en marcha y acordamos el soporte y las mejoras que tu operaci�n necesita." },
];
// Only add approved, sanitized local captures. Never link client applications.
const cases: { name: string; area: string; description: string; icon: typeof GraduationCap; image?: { src: string; alt: string } }[] = [
  { name: "Mikhuna", area: "Alta Cocina � Instituto Juan Pablo II", description: "Software desarrollado a medida para el �rea de Alta Cocina. Una soluci�n en uso en el instituto, construida alrededor de su contexto de trabajo.", icon: GraduationCap, image: { src: "/cases/jpii-alta-cocina.png", alt: "Pantalla de acceso de Mikhuna para Alta Cocina, sin datos personales" } },
  { name: "Estilismos", area: "Estilismos � Instituto Juan Pablo II", description: "Sistema de gesti�n a medida para el �rea de Estilismos. Tecnolog�a aplicada a las necesidades de una operaci�n real.", icon: Scissors, image: { src: "/cases/jpii-estilismos.png", alt: "Pantalla de acceso del sistema de Estilismos, sin datos personales" } },
];
const solutions = [
  { name: "Qatuy", area: "Gesti�n comercial", icon: Store, theme: "commerce", description: "Controla ventas, inventario por almac�n, compras y caja por turno. Consulta la facturaci�n electr�nica disponible para tu RUC.", url: "https://qatuysys.a2technology.com.pe/", page: "/qatuy", status: "En marcha blanca" },
  { name: "Wasi Sys", area: "Gesti�n hotelera", icon: Hotel, theme: "hospitality", description: "Organiza reservas, entradas y salidas de hu�spedes, ventas de recepci�n y cochera desde un mismo sistema.", url: "https://wasisys.a2technology.com.pe/", page: "/wasi", status: "Demo disponible" },
  { name: "GrassManager", area: "Reservas deportivas", icon: Goal, theme: "sports", description: "Organiza las reservas por hora de tus canchas, cobra por turno y registra las ventas de bebidas y snacks.", url: "https://grassmanager.a2technology.com.pe/", page: "/grass", status: "Demo disponible" },
  { name: "Mikhuna Wasi SYS", area: "Restaurantes", icon: UtensilsCrossed, theme: "dining", description: "Una soluci�n para organizar la atenci�n de tu restaurante. Cu�ntanos c�mo trabajas y revisemos juntos una demo.", url: "https://mikhunawasisys.a2technology.com.pe/login", status: "Consultar disponibilidad" },
];

const CorporateHome = () => <>
  <section className="a2-hero" id="home">
    <div className="a2-wrap a2-hero-grid">
      <div className="a2-hero-copy"><p className="a2-eyebrow"><span /> CONSULTOR�A Y DESARROLLO DE SOFTWARE</p>
        <h1>Tu negocio avanza.<br /><em>Tu tecnolog�a<br className="a2-desktop-break" /> tambi�n deber�a.</em></h1>
        <p className="a2-hero-intro">Software a medida y sistemas para que vendas, atiendas y administres tu negocio con m�s orden.</p>
        <p className="a2-hero-detail">Para comercios, hoteles, restaurantes y canchas en Per�. Con atenci�n directa para elegir la soluci�n que necesitas.</p>
        <div className="a2-actions"><a className="a2-btn a2-btn-cyan" href={whatsapp("las necesidades tecnol�gicas de mi empresa")} target="_blank" rel="noopener noreferrer">Cu�ntanos qu� necesitas <ArrowUpRight size={19} aria-hidden="true" /></a><a className="a2-text-link" href="#services">Conoce c�mo te ayudamos <ArrowDown size={16} aria-hidden="true" /></a></div>
        <div className="a2-hero-promises"><span><Check size={15} aria-hidden="true" /> Comunicaci�n directa</span><span><Check size={15} aria-hidden="true" /> Alcance claro</span><span><Check size={15} aria-hidden="true" /> Visi�n de largo plazo</span></div>
      </div>
      <div className="a2-collaboration" aria-label="Esquema ilustrativo del acompa�amiento de A2 a tu empresa">
        <div className="a2-orbit a2-orbit-one" /><div className="a2-orbit a2-orbit-two" />
        <div className="a2-diagram-heading"><span>UNA VISI�N CONECTADA</span><Layers3 size={19} aria-hidden="true" /></div>
        <div className="a2-business-node"><div className="a2-node-symbol"><Blocks size={30} aria-hidden="true" /></div><strong>Tu empresa</strong><span>Personas � Procesos � Objetivos</span></div>
        <div className="a2-diagram-line" />
        <div className="a2-partner-node"><img src="/logo.png" alt="" width="42" height="42" /><div><strong>Tu aliado tecnol�gico</strong><span>A2 Technology</span></div><Handshake size={25} aria-hidden="true" /></div>
        <div className="a2-capabilities"><span><Code2 size={19} aria-hidden="true" /> Software</span><span><Network size={19} aria-hidden="true" /> Integraci�n</span><span><Cloud size={19} aria-hidden="true" /> Cloud</span></div>
        <div className="a2-diagram-note"><span /> Entender. Construir. Acompa�ar.</div><small className="a2-illustration-label">Esquema ilustrativo de colaboraci�n</small>
      </div>
    </div>
    <div className="a2-wrap a2-hero-bottom"><span>DE LA NECESIDAD A LA SOLUCI�N</span><p>No solo entregamos c�digo. Trabajamos contigo para que la tecnolog�a tenga sentido en tu negocio.</p></div>
  </section>
  <section className="a2-section a2-light" id="services"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">LO QUE PODEMOS HACER CONTIGO</p><h2>Menos piezas sueltas.<br /><span>M�s soluciones conectadas.</span></h2></div><p>Un punto de contacto para ordenar tus necesidades de software, integraci�n y evoluci�n tecnol�gica.</p></div>
    <div className="a2-services-grid">{services.map(({ icon: Icon, title, description, label, context }, i) => <article className="a2-service-card" key={title}><div className="a2-card-top"><Icon size={27} aria-hidden="true" /><span>0{i + 1}</span></div><p className="a2-card-kicker">{label}</p><h3>{title}</h3><p>{description}</p><a href={whatsapp(context)} target="_blank" rel="noopener noreferrer">Conversemos <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> sobre {label.toLowerCase()}</span></a></article>)}</div>
    <div className="a2-service-bottom"><Compass size={22} aria-hidden="true" /><p><strong>�No sabes por d�nde empezar?</strong> Revisemos tu situaci�n y definamos un primer paso con sentido.</p><a href="#contact">Cu�ntanos tu reto <ArrowRight size={17} aria-hidden="true" /></a></div>
  </div></section>
  <section className="a2-section a2-needs" aria-labelledby="a2-needs-title"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">EMPECEMOS POR TU NEGOCIO</p><h2 id="a2-needs-title">�Qu� necesitas resolver hoy?</h2></div><p>No necesitas conocer de tecnolog�a para dar el primer paso. Cu�ntanos qu� te est� quitando tiempo.</p></div>
    <div className="a2-needs-grid">
      <a className="a2-need-card" href="#products"><Store size={26} aria-hidden="true" /><h3>Quiero ordenar mi negocio</h3><p>Buscas un sistema para tus ventas, habitaciones, restaurante o reservas.</p><span>Conoce nuestros productos <ArrowRight size={17} aria-hidden="true" /></span></a>
      <a className="a2-need-card" href={whatsapp("un sistema a medida para reemplazar mis procesos manuales")} target="_blank" rel="noopener noreferrer"><Code2 size={26} aria-hidden="true" /><h3>Mi operaci�n necesita algo propio</h3><p>Trabajas entre Excel, cuadernos y mensajes, y necesitas conectar tu informaci�n.</p><span>Conversemos sobre tu proyecto <ArrowUpRight size={17} aria-hidden="true" /></span></a>
      <a className="a2-need-card" href={whatsapp("mejorar o integrar un sistema que ya tengo")} target="_blank" rel="noopener noreferrer"><Network size={26} aria-hidden="true" /><h3>Ya tengo software y quiero mejorarlo</h3><p>Necesitas integrar aplicaciones, automatizar tareas o hacer evolucionar tu sistema.</p><span>Cu�ntanos qu� quieres mejorar <ArrowUpRight size={17} aria-hidden="true" /></span></a>
    </div>
  </div></section>
  <section className="a2-section a2-cases" id="production"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">EXPERIENCIA APLICADA</p><h2>Soluciones reales.<br /><span>Contextos diferentes.</span></h2></div><p>As� llevamos el desarrollo a medida a la pr�ctica: sistemas que responden a las necesidades de quienes los utilizan.</p></div>
    <div className="a2-cases-grid">{cases.map(({ name, area, description, icon: Icon, image }) => <article className="a2-case-card" key={name}>{image && <figure><img className="a2-case-image" src={image.src} alt={image.alt} loading="lazy" width="900" height="560" /><figcaption>Vista de acceso al sistema. Sin informaci�n privada.</figcaption></figure>}<div className="a2-case-body"><div className="a2-case-top"><Icon size={27} aria-hidden="true" /><span>SOFTWARE EN USO</span></div><p className="a2-card-kicker">{area}</p><h3>{name}</h3><p>{description}</p><div className="a2-case-tags"><span>Desarrollo a medida</span><span>Gesti�n institucional</span></div></div></article>)}</div>
    <p className="a2-confidentiality"><ShieldCheck size={17} aria-hidden="true" /> Protegemos la informaci�n de nuestros clientes. No publicamos accesos ni datos de sus sistemas.</p>
  </div></section>
  <section className="a2-section a2-products" id="products" aria-labelledby="a2-products-title"><div className="a2-wrap">
    <div className="a2-section-heading"><div><p className="a2-eyebrow">TECNOLOG�A PROPIA � CONSTRUIDA POR A2</p><h2 id="a2-products-title">No nos quedamos en las ideas.<br /><span>Tambi�n construimos productos.</span></h2></div><p>Adem�s de desarrollar a medida, creamos nuestras propias soluciones. Experiencia concreta en comercio, hoteler�a, deporte y gastronom�a.</p></div>
    <div className="a2-products-grid">{solutions.map(({ name, area, description, icon: Icon, theme, status, url, page }) => <article className={`a2-product-card a2-product-${theme}`} key={name}>
      <div className="a2-product-showcase">
        <div className="a2-product-summary"><span className="a2-showcase-icon"><Icon size={25} aria-hidden="true" /></span><h3>{name}</h3><p>{theme === "commerce" ? "Ventas, inventario y caja." : theme === "hospitality" ? "Reservas y gesti�n hotelera." : theme === "dining" ? "Organiza la atenci�n de tu restaurante." : "Reservas para tus canchas."}</p>
          {page ? <Link className="a2-showcase-link" to={page}>Conocer {name} <ArrowUpRight size={15} aria-hidden="true" /></Link> : <a className="a2-showcase-link" href={whatsapp("una demo de " + name)} target="_blank" rel="noopener noreferrer">Conocer {name} <ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div>
        <div className="a2-preview-window" aria-hidden="true">
          <div className="a2-preview-bar"><span /><span /><span /><strong>{theme === "commerce" ? "Venta en caja" : theme === "hospitality" ? "Habitaciones" : theme === "dining" ? "Sal�n principal" : "Reservas de canchas"}</strong></div>
          {theme === "commerce" ? <><div className="a2-preview-sale"><span>Producto</span><span>Importe</span></div>{[["Arroz 1 kg", "S/ 4.50"], ["Aceite 1 L", "S/ 8.00"], ["Az�car 1 kg", "S/ 3.50"]].map(([item, amount]) => <div className="a2-preview-sale" key={item}><span>{item}</span><strong>{amount}</strong></div>)}<div className="a2-preview-total"><span>Total</span><strong>S/ 16.00</strong></div></> : theme === "sports" ? <div className="a2-preview-bookings"><span /><b>08:00</b><b>09:00</b><b>10:00</b>{["Cancha 1", "Cancha 2"].map((court, row) => <div className="a2-preview-booking-row" key={court}><b>{court}</b>{[0,1,2].map(col => <span key={col} className={(row+col)%3 === 1 ? "is-occupied" : "is-free"}>{(row+col)%3 === 1 ? "Reservada" : "Libre"}</span>)}</div>)}</div> : <div className="a2-preview-tiles">{[0,1,2,3,4,5].map(i => <div key={i} className={i===1||i===3 ? "is-occupied" : "is-free"}>{theme === "hospitality" ? <Hotel size={19} /> : <UtensilsCrossed size={19} />}<strong>{theme === "hospitality" ? [101,102,103,201,202,203][i] : "Mesa " + (i+1)}</strong><span>{i===1||i===3 ? "Ocupada" : "Libre"}</span></div>)}</div>}
          <span className="a2-preview-caption">Vista ilustrativa</span>
        </div>
      </div>
      <div className="a2-product-body"><div className="a2-product-heading"><p className="a2-card-kicker">{area}</p><span className="a2-product-status">{status}</span></div><p>{description}</p><a href={url} target="_blank" rel="noopener noreferrer">Ver el sistema <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> {name} (abre en una pesta�a nueva)</span></a></div>
    </article>)}</div>
    <div className="a2-product-demo"><div><h3>�Quieres verlo con un caso de tu negocio?</h3><p>Cu�ntanos qu� vendes o c�mo atiendes. Coordinamos una demo y revisamos si la soluci�n encaja contigo.</p></div><a className="a2-btn a2-btn-dark" href={whatsapp("coordinar una demo para mi negocio")} target="_blank" rel="noopener noreferrer">Quiero una demo <ArrowUpRight size={18} aria-hidden="true" /></a></div>
    <div className="a2-products-note"><Code2 size={22} aria-hidden="true" /><p><strong>Productos propios. La misma capacidad para tu proyecto.</strong> Esta experiencia es parte de lo que llevamos al desarrollo de soluciones para otras empresas.</p></div>
  </div></section>
  <section className="a2-section a2-process" id="process"><div className="a2-wrap"><div className="a2-section-heading"><div><p className="a2-eyebrow">LA EXPERIENCIA DE TRABAJAR CON A2</p><h2>Un camino claro.<br /><span>Desde la primera conversaci�n.</span></h2></div><p>Decisiones compartidas, avances visibles y una relaci�n cercana. Saber qu� estamos haciendo es parte del servicio.</p></div><ol className="a2-steps">{steps.map(({ title, text }, i) => <li key={title}><span className="a2-step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><div className="a2-process-note"><MessageCircle size={20} aria-hidden="true" /><p>Sin soluciones impuestas. El alcance, los tiempos y el acompa�amiento se acuerdan seg�n cada proyecto.</p></div></div></section>
  <section className="a2-section a2-about" id="about"><div className="a2-wrap a2-about-grid"><div className="a2-about-mark" aria-hidden="true"><img src="/logo.png" alt="" width="130" height="130" /><span>TECNOLOG�A CON PROP�SITO.<br />PERSONAS CON CRITERIO.</span></div><div><p className="a2-eyebrow">UNA RELACI�N CERCANA, UNA BASE T�CNICA S�LIDA</p><h2>Queremos conocer tu empresa.<br /><span>No solo tu requerimiento.</span></h2><p>A2 Technology es una iniciativa liderada por su fundador, con participaci�n directa en las decisiones t�cnicas y en la construcci�n de cada soluci�n.</p><p>Combinamos desarrollo, integraci�n y herramientas de inteligencia artificial bajo criterio humano. La tecnolog�a es un medio: entender el negocio y cuidar lo que construimos es lo esencial.</p><a className="a2-text-link" href="#contact">Conozc�monos <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
</>;
export default CorporateHome;

