import { ArrowLeft, ArrowRight, Clock3, HeartHandshake } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { siteLinks } from "../config/site";
import { getResourceBySlug, type ResourceSection } from "../content/resources";

export function ArticuloDetalle() {
  const { slug } = useParams();
  const article = getResourceBySlug(slug);

  if (!article) {
    return (
      <div className="bg-[#FAF5EF] py-24 text-[#1E1E1E]">
        <PageMeta
          title="Artículo no encontrado | Alium Care"
          description="El artículo solicitado no está disponible en el blog de Alium Care."
        />
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-4xl">No encontramos este artículo</h1>
          <p className="mt-5 text-lg text-[#1E1E1E]/70">
            Puede haber cambiado de dirección o ya no estar disponible.
          </p>
          <Link
            to={siteLinks.blog}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#436243] px-6 py-3 text-white hover:bg-[#5F775D]"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <PageMeta title={`${article.title} | Alium Care`} description={article.description} type="article" />

      <header className="border-b border-[#E8E0D5] bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#1E1E1E]/60" aria-label="Migas de pan">
            <Link to="/" className="hover:text-[#436243]">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to={siteLinks.blog} className="hover:text-[#436243]">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1E1E1E]/80">{article.category}</span>
          </nav>

          <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#436243]/10 text-[#436243]">
            <HeartHandshake className="size-7" aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">{article.category}</p>
          <h1 className="mt-4 text-4xl leading-tight lg:text-6xl">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-[#436243] lg:text-2xl">{article.subtitle}</p>
          <p className="mt-7 flex items-center gap-2 text-sm text-[#1E1E1E]/55">
            <Clock3 className="size-4" aria-hidden="true" />
            {article.readingTime}
          </p>
        </div>
      </header>

      <main className="py-14 lg:py-20">
        <article className="mx-auto max-w-4xl rounded-3xl border border-[#E8E0D5] bg-white px-7 py-10 shadow-sm sm:px-10 lg:px-16 lg:py-14">
          <div className="space-y-5 text-lg leading-8 text-[#1E1E1E]/75">
            {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          {article.sections.map((section) => <ArticleSection key={section.heading} section={section} />)}

          <section className="mt-12 rounded-2xl bg-[#436243] p-7 text-white lg:p-9" aria-labelledby="article-conclusion">
            <h2 id="article-conclusion" className="text-2xl lg:text-3xl">Conclusión</h2>
            <div className="mt-5 space-y-4 leading-7 text-white/85">
              {article.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <aside className="mt-10 border-t border-[#E8E0D5] pt-7 text-sm leading-relaxed text-[#1E1E1E]/60">
            Este artículo ofrece información general y no sustituye una valoración médica, psicológica,
            de enfermería o jurídica individual. Ante una urgencia, utiliza los servicios de emergencia de tu localidad.
          </aside>
        </article>

        <section className="mx-auto mt-14 max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl">¿Necesitas orientación?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1E1E1E]/70">
            Cuéntanos de forma general qué necesitas y te ayudaremos a identificar el canal más adecuado.
          </p>
          <Link
            to={siteLinks.consultation}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#436243] px-7 py-3.5 text-white transition-colors hover:bg-[#5F775D]"
          >
            Habla con nuestro equipo
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </section>
      </main>
    </div>
  );
}

function ArticleSection({ section }: { section: ResourceSection }) {
  const List = section.ordered ? "ol" : "ul";

  return (
    <section className="mt-12 border-t border-[#E8E0D5] pt-10">
      <h2 className="text-3xl leading-tight lg:text-4xl">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-lg leading-8 text-[#1E1E1E]/75">{paragraph}</p>
      ))}
      {section.bullets && (
        <List className={`${section.ordered ? "list-decimal" : "list-disc"} mt-7 space-y-5 pl-7 text-[#1E1E1E]/75 marker:font-semibold marker:text-[#436243]`}>
          {section.bullets.map((item) => (
            <li key={item} className="pl-2 leading-7">{formatListItem(item)}</li>
          ))}
        </List>
      )}
    </section>
  );
}

function formatListItem(item: string) {
  const separatorIndex = item.indexOf(":");

  if (separatorIndex === -1) {
    return item;
  }

  return (
    <>
      <strong className="font-semibold text-[#1E1E1E]">{item.slice(0, separatorIndex + 1)}</strong>
      {item.slice(separatorIndex + 1)}
    </>
  );
}
