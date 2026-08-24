import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { FaqSection } from "../components/FaqSection";
import { PageMeta } from "../components/PageMeta";
import { siteLinks, whatsappContact } from "../config/site";
import { serviceFaqs } from "../content/faqs";

export function PreguntasFrecuentes() {
  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <PageMeta
        title="Preguntas frecuentes | Alium Care"
        description="Resuelve dudas sobre los servicios, el alcance de la orientación y las formas de contacto de Alium Care."
      />

      <header className="border-b border-[#E8E0D5] bg-[#FAF5EF] py-16 text-center lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">Estamos para orientarte</p>
          <h1 className="text-4xl lg:text-5xl">Preguntas frecuentes</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#1E1E1E]/70">
            Conoce cómo funciona el acompañamiento, qué puedes preparar y cuál es el mejor canal para iniciar una conversación.
          </p>
        </div>
      </header>

      <FaqSection
        items={serviceFaqs}
        eyebrow="Servicios y contacto"
        title="Respuestas para comenzar"
        description="Si tu situación requiere una revisión particular, contáctanos para identificar el siguiente paso adecuado."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl lg:text-4xl">¿Tu pregunta no aparece aquí?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1E1E1E]/70">
            Escríbenos de forma general y te ayudaremos a identificar el canal más adecuado.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to={siteLinks.consultation}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#436243] px-7 py-3.5 text-white transition-colors hover:bg-[#5F775D]"
            >
              Habla con nuestro equipo
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <a
              href={whatsappContact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#436243] px-7 py-3.5 text-[#436243] transition-colors hover:bg-[#436243] hover:text-white"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
