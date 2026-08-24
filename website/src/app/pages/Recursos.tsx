import { ArrowRight, BookOpen, Clock3, HeartHandshake, Scale, Stethoscope } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { siteLinks } from "../config/site";
import { featuredResource, resources, type Resource, type ResourceCategory } from "../content/resources";

const categoryIcons: Record<ResourceCategory, React.ReactNode> = {
  Cuidados: <HeartHandshake className="size-6" aria-hidden="true" />,
  "Orientación médica": <Stethoscope className="size-6" aria-hidden="true" />,
  "Derechos y previsión": <Scale className="size-6" aria-hidden="true" />,
};

export function Recursos() {
  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <PageMeta
        title="Recursos para familias y personas cuidadoras | Alium Care"
        description="Guías breves sobre cuidados, conversaciones médicas, derechos y organización familiar preparadas por Alium Care."
      />

      <section className="border-b border-[#E8E0D5] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">Biblioteca práctica</p>
          <h1 className="text-4xl lg:text-5xl">Recursos para cuidar y decidir con más claridad</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#1E1E1E]/70">
            Lecturas breves para preparar conversaciones, organizar cuidados y reconocer las preguntas que conviene llevar a una orientación profesional.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-labelledby="featured-resource-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-3xl bg-[#436243] text-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-72 items-center justify-center bg-[#5F775D] p-10">
              <div className="flex size-32 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <BookOpen className="size-16" aria-hidden="true" />
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#F1DEC0] uppercase">Guía destacada</p>
              <h2 id="featured-resource-heading" className="text-3xl leading-tight lg:text-4xl">
                {featuredResource.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{featuredResource.description}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-white/65">
                <Clock3 className="size-4" aria-hidden="true" />
                {featuredResource.readingTime}
              </div>
              <Link
                to={`${siteLinks.resources}/${featuredResource.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-[#436243] transition-colors hover:bg-[#FAF5EF]"
              >
                Ver y descargar
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">Explora por tema</p>
              <h2 id="resources-heading" className="text-3xl lg:text-4xl">Lecturas recientes</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#1E1E1E]/60">
              Contenido informativo general. No sustituye una valoración médica, de enfermería o jurídica individual.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E0D5] bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl">¿Necesitas revisar una situación particular?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1E1E1E]/70">
            Los recursos ayudan a ordenar preguntas. Una orientación individual permite revisar el contexto de tu familia.
          </p>
          <Link
            to={siteLinks.consultation}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#436243] px-7 py-3.5 text-white transition-colors hover:bg-[#5F775D]"
          >
            Agendar consulta
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-[#E8E0D5] bg-white p-7 shadow-sm transition-transform hover:-translate-y-1">
      <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#436243]/10 text-[#436243]">
        {categoryIcons[resource.category]}
      </div>
      <p className="text-xs font-semibold tracking-wide text-[#735F37] uppercase">{resource.category}</p>
      <h3 className="mt-3 text-2xl leading-snug">{resource.title}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-[#1E1E1E]/70">{resource.excerpt}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#E8E0D5] pt-5">
        <span className="flex items-center gap-2 text-xs text-[#1E1E1E]/55">
          <Clock3 className="size-4" aria-hidden="true" />
          {resource.readingTime}
        </span>
        <Link
          to={`${siteLinks.resources}/${resource.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#436243] hover:text-[#5F775D]"
          aria-label={`Leer ${resource.title}`}
        >
          Ver recurso
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
