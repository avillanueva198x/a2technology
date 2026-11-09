import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const origin = "https://www.a2technology.com.pe";

function softwareApplicationSchema(name, description) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    provider: { "@type": "Organization", name: "A2 Technology" },
  });
}

const pages = {
  privacidad: {
    title: "Política de privacidad | A2 Technology",
    description: "Política de privacidad de A2 Technology: qué datos personales tratamos, con qué finalidad, qué proveedores los procesan y cómo ejercer tus derechos ARCO.",
  },
  terminos: {
    title: "Términos y condiciones | A2 Technology",
    description: "Términos y condiciones de los sistemas SaaS de A2 Technology: disponibilidad del servicio, responsabilidades del cliente y condiciones de la suscripción.",
  },
  qatuy: {
    title: "Qatuy | Sistema de ventas con facturación electrónica SUNAT",
    description: "Punto de venta, inventario multialmacén, caja por turno y facturación electrónica SUNAT para bodegas, ferreterías, licorerías y más.",
    schema: softwareApplicationSchema(
      "Qatuy",
      "Sistema de punto de venta, inventario multialmacén y facturación electrónica SUNAT para pymes peruanas."
    ),
  },
  wasi: {
    title: "Wasi Sys | Software para hoteles y hostales pequeños en Perú",
    description: "Gestiona reservas, check-in, caja por turno y tienda de tu hotel u hostal desde el celular. Sistema peruano, con soporte directo por WhatsApp.",
    schema: softwareApplicationSchema(
      "Wasi Sys",
      "Sistema de gestión hotelera para hoteles y hostales pequeños en Perú: reservas, check-in, caja por turno y tienda."
    ),
  },
  grass: {
    title: "GrassManager | Sistema para canchas de fútbol y reservas deportivas",
    description: "Controla reservas por hora, señas y ventas de cafetín en tu complejo de canchas sintéticas. Evita cruces de turno y pagos sin registrar.",
    schema: softwareApplicationSchema(
      "GrassManager",
      "Sistema de reservas por hora, señas y ventas de cafetín para complejos de canchas deportivas."
    ),
  },
};
const shell = readFileSync("dist/index.html", "utf8");
copyFileSync("dist/index.html", "dist/404.html");
for (const [route, page] of Object.entries(pages)) {
  const url = `${origin}/${route}/`;
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*(")/g, `$1${page.description}$2`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*(")/g, `$1${page.title}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (page.schema) {
    html = html.replace("</head>", `<script type="application/ld+json">${page.schema}</script></head>`);
  }
  mkdirSync(`dist/${route}`, { recursive: true });
  writeFileSync(`dist/${route}/index.html`, html);
}

// Keep the no-JS/SEO fallback readable and brand-aligned before React mounts.
// These inline styles apply only while the home fallback exists. React's
// createRoot().render() replaces it; product and error shells stay unchanged.
const homeStartupStyles = `<style id="a2-home-startup">
html:has(#a2-startup),body:has(#a2-startup){margin:0;background:#fff;color:#183044}
#a2-startup{min-height:100vh;background:#fff;color:#183044;font-family:Inter,Arial,sans-serif}
#a2-startup .a2-wrap{width:min(1200px,calc(100% - 64px));margin-inline:auto}
#a2-startup .a2-header{background:#fff;color:#183044}
#a2-startup .a2-nav{min-height:90px;display:flex;align-items:center}
#a2-startup .a2-brand{display:flex;align-items:center;gap:12px;font-size:20px;font-weight:700;text-decoration:none;color:inherit}
#a2-startup .a2-brand img{border-radius:13px}
#a2-startup .a2-brand small{display:block;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:#5e7183}
#a2-startup .a2-hero{background:#0C2144;color:#fff;padding:85px 0 65px}
#a2-startup h1{font-family:'Space Grotesk',Inter,Arial,sans-serif;font-size:clamp(38px,4.4vw,65px);line-height:1.08;letter-spacing:-2px;margin:0 0 25px;font-weight:600}
#a2-startup h1 em{font-style:normal;color:#5EE0C5}
#a2-startup p{max-width:620px;font-size:18px;line-height:1.75;margin:0 0 24px;color:#e0e9f6}
#a2-startup ul{padding:0;list-style:none;line-height:1.8}
#a2-startup li{margin:8px 0}
#a2-startup li a{color:#5EE0C5;text-decoration:underline}
@media(max-width:600px){#a2-startup .a2-wrap{width:calc(100% - 40px)}#a2-startup .a2-hero{padding:50px 0}}
</style>`;
const homeStaticContent = `
<div id="a2-startup" class="corporate-site">
  <header class="a2-header"><div class="a2-wrap a2-nav"><a class="a2-brand" href="/"><img src="/logo.png" alt="" width="44" height="44" /><span>A2 Technology<small>Tu aliado en tecnología</small></span></a></div></header>
  <main class="a2-hero"><div class="a2-wrap">
  <h1>Tu negocio avanza.<br /><em>Tu tecnología<br /> también debería.</em></h1>
  <p>Creamos y operamos sistemas de ventas, facturación electrónica SUNAT, gestión hotelera y reservas deportivas para pymes peruanas. Consultoría y desarrollo de software a medida.</p>
  <ul>
    <li><a href="/qatuy">Qatuy — sistema de ventas y facturación electrónica SUNAT</a></li>
    <li><a href="/wasi">Wasi Sys — software para hoteles y hostales pequeños</a></li>
    <li><a href="/grass">GrassManager — sistema para canchas de fútbol</a></li>
    <li><a href="https://mikhunawasisys.a2technology.com.pe/login">Mikhuna Wasi SYS — sistema para restaurantes</a></li>
  </ul>
  </div></main>
</div>
`;
writeFileSync("dist/index.html", shell
  .replace("</head>", `${homeStartupStyles}</head>`)
  .replace('<div id="root"></div>', `<div id="root">${homeStaticContent}</div>`));
