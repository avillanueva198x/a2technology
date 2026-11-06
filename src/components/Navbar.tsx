import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [["Servicios", "services"], ["Experiencia", "production"], ["Cómo trabajamos", "process"], ["Nosotros", "about"]];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    setOpen(false);
    if (!hash) { window.scrollTo(0, 0); return; }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return <header className="a2-header">
    <a className="a2-skip" href="#main-content">Ir al contenido</a>
    <div className="a2-wrap a2-nav">
      <Link to="/" className="a2-brand" aria-label="A2 Technology, inicio"><img src="/logo.png" alt="" width="44" height="44" /><span>A2 Technology<small>Tu aliado en tecnología</small></span></Link>
      <nav aria-label="Navegación principal" className="a2-desktop-nav">{links.map(([label, id]) => <Link key={id} to={`/#${id}`}>{label}</Link>)}</nav>
      <Link className="a2-btn a2-btn-dark a2-nav-cta" to="/#contact">Hablemos <ArrowUpRight size={17} aria-hidden="true" /></Link>
      <button className="a2-menu" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="a2-mobile-nav">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="a2-mobile-nav" aria-label="Navegación móvil" className="a2-mobile-nav">{links.map(([label, id]) => <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}<Link to="/#contact" onClick={() => setOpen(false)}>Hablemos de tu empresa ↗</Link></nav>}
  </header>;
};
export default Navbar;
