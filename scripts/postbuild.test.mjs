import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

test("home startup is styled and readable without changing other route shells", () => {
  const directory = mkdtempSync(join(tmpdir(), "a2-startup-"));
  try {
    mkdirSync(join(directory, "dist"));
    const shell = '<!DOCTYPE html><html><head><title>Home</title></head><body><div id="root"></div></body></html>';
    writeFileSync(join(directory, "dist/index.html"), shell);
    execFileSync(process.execPath, [fileURLToPath(new URL("./postbuild.mjs", import.meta.url))], { cwd: directory });
    const home = readFileSync(join(directory, "dist/index.html"), "utf8");
    assert.match(home, /<style id="a2-home-startup">/);
    assert.match(home, /body:has\(#a2-startup\)/);
    assert.match(home, /<div id="a2-startup" class="corporate-site">/);
    assert.match(home, /Tu negocio avanza\./);
    assert.match(home, /href="\/qatuy"/);
    assert.doesNotMatch(home, /display:\s*none|visibility:\s*hidden|opacity:\s*0/);
    for (const route of ["qatuy", "wasi", "grass", "privacidad", "terminos", "404.html"]) {
      const file = route.endsWith(".html") ? route : `${route}/index.html`;
      const page = readFileSync(join(directory, "dist", file), "utf8");
      assert.doesNotMatch(page, /a2-home-startup|a2-startup/);
      assert.match(page, /<div id="root"><\/div>/);
    }
  } finally {
    assert.equal(dirname(resolve(directory)), resolve(tmpdir()));
    assert.ok(directory.startsWith(join(tmpdir(), "a2-startup-")));
    rmSync(directory, { recursive: true, force: true });
  }
});
