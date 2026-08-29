import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { ResourceDownloadForm } from "../components/ResourceDownloadForm";
import { siteFeatures, siteLinks } from "../config/site";
import { getResourceBySlug, resources } from "../content/resources";

export function RecursoDetalle() {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <div className="bg-[#FAF5EF] py-24 text-[#1E1E1E]">
        <PageMeta
          title="Recurso no encontrado | Alium Care"
          description="El recurso solicitado no está disponible. Consulta la biblioteca de Alium Care."
        />
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-4xl">No encontramos este recurso</h1>
          <p className="mt-5 text-lg text-[#1E1E1E]/70">Puede haber cambiado de dirección o ya no estar disponible.</p>
          <Link
            to={siteLinks.resources}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#436243] px-6 py-3 text-white hover:bg-[#5F775D]"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
            Volver a Recursos
          </Link>
        </div>
      </div>
    );
  }

  const relatedResources = resources.filter((item) => item.slug !== resource.slug).slice(0, 2);

  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <PageMeta title={`${resource.title} | Alium Care`} description={resource.description} type="article" />

      <header className="border-b border-[#E8E0D5] bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#1E1E1E]/60" aria-label="Migas de pan">
            <Link to="/" className="hover:text-[#436243]">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to={siteLinks.resources} className="hover:text-[#436243]">Recursos</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1E1E1E]/80">{resource.category}</span>
          </nav>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">{resource.category}</p>
          <h1 className="mt-4 text-4xl leading-tight lg:text-5xl">{resource.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1E1E1E]/70">{resource.description}</p>
          <p className="mt-6 flex items-center gap-2 text-sm text-[#1E1E1E]/55">
            <Clock3 className="size-4" aria-hidden="true" />
            {resource.readingTime}
          </p>
        </div>
      </header>

      <main className="py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-8">
          <article className="rounded-3xl border border-[#E8E0D5] bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">Vista previa</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E1E1E]/75">{resource.excerpt}</p>

            {resource.sections.slice(0, 1).map((section) => (
              <section key={section.heading} className="mt-9">
                <h2 className="text-2xl lg:text-3xl">{section.heading}</h2>
                {section.paragraphs?.slice(0, 1).map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-[#1E1E1E]/75">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 list-disc space-y-3 pl-6 text-[#1E1E1E]/75">
                    {section.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="pl-1 leading-7">{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="relative mt-10 overflow-hidden border-t border-[#E8E0D5] pt-8">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-[#1E1E1E]/55">
                El archivo completo incluye recomendaciones, listas prácticas, siguientes pasos y notas sobre el alcance del contenido.
              </p>
            </div>

            <aside className="mt-8 rounded-2xl border border-[#C8A96E]/35 bg-[#FAF5EF] p-6">
              <h2 className="text-lg font-semibold text-[#436243]">Alcance de este contenido</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#1E1E1E]/70">
                Esta lectura ofrece información general y no sustituye una valoración médica, de enfermería o jurídica. Ante una urgencia, utiliza los servicios de emergencia de tu localidad.
              </p>
            </aside>
          </article>

          {siteFeatures.resourceDownloads && <ResourceDownloadForm resource={resource} />}
        </div>

        <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8" aria-labelledby="related-heading">
          <div className="mb-7 flex items-end justify-between gap-5">
            <h2 id="related-heading" className="text-3xl">También te puede interesar</h2>
            <Link to={siteLinks.resources} className="hidden text-sm font-medium text-[#436243] hover:text-[#5F775D] sm:block">
              Ver todos los recursos
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedResources.map((related) => (
              <Link
                key={related.slug}
                to={`${siteLinks.resources}/${related.slug}`}
                className="group rounded-2xl border border-[#E8E0D5] bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-wide text-[#735F37] uppercase">{related.category}</p>
                <h3 className="mt-3 text-2xl leading-snug group-hover:text-[#436243]">{related.title}</h3>
                <p className="mt-4 leading-relaxed text-[#1E1E1E]/65">{related.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#436243]">
                  Leer recurso
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
