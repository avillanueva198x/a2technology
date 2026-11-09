import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const Footer = () => <footer className="a2-footer">
  <div className="a2-wrap a2-footer-top">
    <div><Link to="/" className="a2-brand"><img src="/logo.png" alt="" width="44" height="44" /><span>A2 Technology<small>Tu aliado en tecnología</small></span></Link><p>Software, integraciones y acompañamiento<br />para hacer avanzar tu empresa.</p></div>
    <div><strong>Conversemos</strong><a href="mailto:contacto@a2technology.com.pe">contacto@a2technology.com.pe</a><a href="https://wa.me/51931871964" target="_blank" rel="noopener noreferrer">WhatsApp · +51 931 871 964 <ArrowUpRight size={14} aria-hidden="true" /></a><span>Lima y Ayacucho · Perú</span></div>
    <nav aria-label="Enlaces del pie de página"><strong>Conoce A2</strong><Link to="/#services">Servicios</Link><Link to="/#production">Experiencia real</Link><Link to="/#process">Cómo trabajamos</Link><Link to="/#about">Nosotros</Link></nav>
  </div>
  <div className="a2-wrap a2-footer-bottom"><span>© {new Date().getFullYear()} A2 Technology · A2 Technology E.I.R.L. · RUC 20614497115 · Jr. Las Orquídeas Mz. D3 Lt. 4, Urbanización Primavera, Huamanga, Ayacucho, Perú</span><div><Link to="/privacidad">Privacidad</Link><Link to="/terminos">Términos y condiciones</Link></div></div>
</footer>;
export default Footer;
