import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const origin = "https://a2technology.com.pe";

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
    description: "Información sobre el tratamiento de datos personales en A2 Technology.",
  },
  terminos: {
    title: "Términos y condiciones | A2 Technology",
    description: "Términos y condiciones de A2 Technology.",
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
  const url = `${origin}/${route}`;
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

// Pre-render the home's main textual content into the empty <div id="root">.
// Safe because main.tsx uses createRoot().render(), not hydrateRoot(): React
// replaces these children on mount instead of diffing against them, so there
// is no hydration mismatch. This gives crawlers and non-JS link previews
// (WhatsApp, LinkedIn, Bing) real content instead of an empty shell.
const homeStaticContent = `
  <h1>A2 Technology: software de gestión para negocios en Perú</h1>
  <p>Creamos y operamos sistemas de ventas, facturación electrónica SUNAT, gestión hotelera y reservas deportivas para pymes peruanas. Consultoría y desarrollo de software a medida.</p>
  <ul>
    <li><a href="/qatuy">Qatuy — sistema de ventas y facturación electrónica SUNAT</a></li>
    <li><a href="/wasi">Wasi Sys — software para hoteles y hostales pequeños</a></li>
    <li><a href="/grass">GrassManager — sistema para canchas de fútbol</a></li>
  </ul>
`;
writeFileSync("dist/index.html", shell.replace('<div id="root"></div>', `<div id="root">${homeStaticContent}</div>`));
