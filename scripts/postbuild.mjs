import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const origin = "https://a2technology.com.pe";
const pages = {
  privacidad: { title: "Política de privacidad | A2 Technology", description: "Información sobre el tratamiento de datos personales en A2 Technology." },
  terminos: { title: "Términos y condiciones | A2 Technology", description: "Términos y condiciones de A2 Technology." },
  qatuy: { title: "Qatuy | Sistema de gestión comercial de A2 Technology", description: "Conoce Qatuy, sus funciones de gestión comercial, planes y disponibilidad por configuración." },
};
const shell = readFileSync("dist/index.html", "utf8");
copyFileSync("dist/index.html", "dist/404.html");
for (const [route, page] of Object.entries(pages)) {
  const url = `${origin}/${route}`;
  const html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*(")/g, `$1${page.description}$2`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*(")/g, `$1${page.title}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  mkdirSync(`dist/${route}`, { recursive: true });
  writeFileSync(`dist/${route}/index.html`, html);
}
