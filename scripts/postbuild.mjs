// GitHub Pages has no server-side routing: a direct GET to a client-side
// route must land on a real file, or it falls through to 404.html.
// - routes below get their own dist/<route>/index.html (copy of the SPA
//   shell) so GitHub Pages serves them with HTTP 200 and BrowserRouter
//   renders the right page on load. Required by Google: the privacy
//   policy URL must respond 200, not 404.
// - 404.html is still the SPA shell too, so any other unmatched path
//   still boots the app (status 404) instead of GitHub's generic page.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = ["privacidad", "terminos", "qatuy"];
const shell = "dist/index.html";

copyFileSync(shell, "dist/404.html");

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync(shell, `dist/${route}/index.html`);
}
