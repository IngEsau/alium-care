import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { resources } from "../src/app/content/resources.ts";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = dirname(scriptDirectory);
const outputDirectory = join(projectDirectory, "public", "downloads");
const temporaryDirectory = await mkdtemp(join(tmpdir(), "alium-care-resources-"));

await mkdir(outputDirectory, { recursive: true });

try {
  for (const resource of resources) {
    const htmlPath = join(temporaryDirectory, `${resource.slug}.html`);
    const pdfPath = join(outputDirectory, `${resource.slug}.pdf`);

    await rm(pdfPath, { force: true });
    await writeFile(htmlPath, renderResource(resource), "utf8");

    execFileSync(
      "libreoffice",
      ["--headless", "--convert-to", "pdf:writer_pdf_Export", "--outdir", outputDirectory, htmlPath],
      { stdio: "inherit" },
    );
  }
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}

function renderResource(resource) {
  const sections = resource.sections
    .map(
      (section) => `
        <section>
          <h2>${escapeHtml(section.heading)}</h2>
          ${(section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
          ${
            section.bullets
              ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("\n")}</ul>`
              : ""
          }
        </section>`,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="es-MX">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(resource.title)} | Alium Care</title>
    <style>
      @page { size: A4; margin: 19mm 18mm 20mm; }
      * { box-sizing: border-box; }
      body { color: #1e1e1e; font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.55; margin: 0; }
      header { border-bottom: 2px solid #436243; margin-bottom: 28px; padding-bottom: 22px; }
      .brand { color: #436243; font-size: 12pt; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
      .category { color: #735f37; font-size: 9pt; font-weight: 700; letter-spacing: 0.12em; margin-top: 24px; text-transform: uppercase; }
      h1 { color: #1e1e1e; font-family: Georgia, serif; font-size: 27pt; line-height: 1.15; margin: 8px 0 13px; }
      .description { color: #555; font-size: 12pt; margin: 0; }
      section { margin-top: 27px; page-break-inside: avoid; }
      h2 { color: #315031; font-family: Georgia, serif; font-size: 18pt; margin: 0 0 12px; }
      p { margin: 0 0 12px; }
      ul { margin: 8px 0 0; padding-left: 24px; }
      li { margin-bottom: 9px; }
      aside { background: #faf5ef; border: 1px solid #d8c9b9; border-radius: 8px; margin-top: 32px; padding: 16px 18px; }
      aside strong { color: #436243; }
      footer { border-top: 1px solid #d8c9b9; color: #777; font-size: 8.5pt; margin-top: 30px; padding-top: 13px; }
    </style>
  </head>
  <body>
    <header>
      <div class="brand">Alium Care</div>
      <div class="category">${escapeHtml(resource.category)}</div>
      <h1>${escapeHtml(resource.title)}</h1>
      <p class="description">${escapeHtml(resource.description)}</p>
    </header>
    <main>${sections}</main>
    <aside>
      <strong>Alcance de este contenido</strong>
      <p>Esta guía ofrece información general y no sustituye una valoración médica, de enfermería o jurídica. Ante una urgencia, utiliza los servicios de emergencia de tu localidad.</p>
    </aside>
    <footer>Alium Care · Recurso informativo para familias y personas cuidadoras</footer>
  </body>
</html>`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
