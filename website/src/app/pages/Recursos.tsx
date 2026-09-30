import { ArrowRight, Clock3, HeartHandshake } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { siteLinks } from "../config/site";
import { resources, type Resource } from "../content/resources";

export function Blog() {
  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <PageMeta
        title="Blog | Alium Care"
        description="Reflexiones para comprender y acompañar el cuidado de las personas mayores y de quienes las cuidan."
      />

      <section className="border-b border-[#E8E0D5] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">
            Alium Care
          </p>
          <h1 className="text-4xl lg:text-5xl">Blog</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#1E1E1E]/70">
            Un espacio para reflexionar sobre el cuidado, las redes de apoyo y el bienestar de las familias.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-label="Artículos del blog">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          {[...resources].reverse().map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article }: { article: Resource }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#DCD1C4] bg-white shadow-sm">
      <div className="flex h-40 items-center justify-center bg-[#436243] text-white sm:h-48">
        <div className="flex size-24 items-center justify-center rounded-full border border-white/25 bg-white/10 sm:size-28">
          <HeartHandshake className="size-12" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-[#735F37] uppercase">{article.category}</p>
        <h2 className="mt-4 break-words text-2xl leading-tight sm:text-3xl">{article.title}</h2>
        {article.subtitle && <p className="mt-3 text-lg leading-snug text-[#436243]">{article.subtitle}</p>}
        <p className="mt-5 flex-1 leading-relaxed text-[#1E1E1E]/70">{article.excerpt}</p>
        {article.readingTime && (
          <p className="mt-5 flex items-center gap-2 text-sm text-[#1E1E1E]/55">
            <Clock3 className="size-4 shrink-0" aria-hidden="true" />
            {article.readingTime}
          </p>
        )}
        <Link
          to={article.featured ? siteLinks.featuredArticle : `${siteLinks.blog}/${article.slug}`}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#436243] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5F775D]"
        >
          Leer artículo
          <ArrowRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
