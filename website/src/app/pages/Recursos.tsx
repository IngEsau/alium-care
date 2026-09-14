import { ArrowRight, Clock3, HeartHandshake } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import { siteLinks } from "../config/site";
import { featuredResource } from "../content/resources";

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

      <section className="py-16 lg:py-24" aria-labelledby="featured-article-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-3xl border border-[#DCD1C4] bg-white shadow-sm lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex min-h-72 items-center justify-center bg-[#436243] p-10 text-white">
              <div className="flex size-36 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <HeartHandshake className="size-16" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#735F37] uppercase">
                {featuredResource.category}
              </p>
              <h2 id="featured-article-heading" className="mt-4 text-3xl leading-tight lg:text-4xl">
                {featuredResource.title}
              </h2>
              <p className="mt-3 text-xl leading-snug text-[#436243]">{featuredResource.subtitle}</p>
              <p className="mt-6 text-lg leading-relaxed text-[#1E1E1E]/70">{featuredResource.excerpt}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[#1E1E1E]/55">
                <Clock3 className="size-4" aria-hidden="true" />
                {featuredResource.readingTime}
              </div>
              <Link
                to={siteLinks.featuredArticle}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#436243] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5F775D]"
              >
                Leer artículo
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
