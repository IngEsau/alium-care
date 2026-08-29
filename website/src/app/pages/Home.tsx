import { Link } from "react-router";
import { ArrowRight, BookOpen, Check, Globe, Heart, Scale, Stethoscope, Users } from "lucide-react";
import heroImg from "figma:asset/26ac470c256aaee8ec07ea46ae1d337bf3b0b9ef.png";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { consultationCta, siteFeatures, siteLinks } from "../config/site";
import { testimonials } from "../content/socialProof";
import { PageMeta } from "../components/PageMeta";

export function Home() {
  return (
    <div className="bg-[#FAF5EF]">
      <PageMeta
        title="Alium Care | Orientación integral para familias"
        description="Orientación en enfermería, medicina y derecho para familias y personas cuidadoras que necesitan información clara y acompañamiento."
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-[#1E1E1E]">
                Cuando más lo necesitas, estamos aquí
              </h1>
              <p className="text-lg lg:text-xl text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Orientación integral en salud, derecho y cuidados para familias que acompañan a sus seres queridos en momentos críticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={siteLinks.services}
                  className="px-8 py-3.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Conoce nuestros servicios
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to={siteLinks.consultation}
                  className="px-8 py-3.5 border-2 border-[#436243] text-[#436243] rounded-lg hover:bg-[#436243] hover:text-white transition-colors text-center"
                >
                  {consultationCta.label}
                </Link>
              </div>
            </div>

            {/* Decorative organic shapes */}
            <div className="hidden lg:block relative h-96">
              <img
                src={heroImg}
                alt="Cuidadora acompañando a su familiar"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-8 h-8 text-[#436243]" />}
              title="Asesoría en Enfermería"
              description="Guía práctica para el cuidado diario de tu familiar."
              link={siteLinks.nursingService}
            />
            <ServiceCard
              icon={<Stethoscope className="w-8 h-8 text-[#436243]" />}
              title="Orientación Médica"
              description="Entiende diagnósticos y opciones de tratamiento con claridad."
              link={siteLinks.medicalService}
            />
            <ServiceCard
              icon={<Scale className="w-8 h-8 text-[#436243]" />}
              title="Asesoría Legal"
              description="Conoce tus derechos y los de tu familia en situaciones de salud."
              link={siteLinks.legalService}
            />
          </div>
        </div>
      </section>

      {/* Trust/Why Us Section */}
      <section className="py-20 bg-[#436243] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-center mb-16">
            ¿Por qué Alium Care?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <TrustCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Recursos prácticos"
              description="Guías breves para preparar conversaciones, organizar cuidados y reconocer próximos pasos."
            />
            <TrustCard
              icon={<Globe className="w-10 h-10" />}
              title="Alcance hispanohablante"
              description="Orientación profesional en tu idioma, sin barreras de comunicación."
            />
            <TrustCard
              icon={<Users className="w-10 h-10" />}
              title="Enfoque multidisciplinario"
              description="Equipo de enfermería, medicina y derecho trabajando por tu familia."
            />
          </div>
        </div>
      </section>

      <TestimonialsSection items={testimonials} />

      {siteFeatures.resources && siteFeatures.resourceDownloads && (
      <section className="py-16 lg:py-20" id="guia-gratuita">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-[#E8E0D5] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-64 items-center justify-center bg-[#5F775D] p-10 text-white">
              <div className="flex size-32 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <BookOpen className="size-16" aria-hidden="true" />
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">Guía gratuita</p>
              <h2 className="text-3xl leading-tight text-[#1E1E1E] lg:text-4xl">
                5 preguntas para conversar mejor con el equipo médico
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#1E1E1E]/70">
                Una lectura breve para ordenar tus dudas, aprovechar la consulta y salir con próximos pasos más claros.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#1E1E1E]/75">
                <GuideBenefit text="Prepara la información esencial antes de la consulta." />
                <GuideBenefit text="Identifica beneficios, riesgos, alternativas y seguimiento." />
                <GuideBenefit text="Registra acuerdos para compartirlos con tu familia." />
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={siteLinks.featuredGuide}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#436243] px-6 py-3 text-white transition-colors hover:bg-[#5F775D]"
                >
                  Descargar la guía
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
                <Link
                  to={siteLinks.resources}
                  className="inline-flex items-center justify-center rounded-lg border border-[#436243] px-6 py-3 text-[#436243] transition-colors hover:bg-[#436243] hover:text-white"
                >
                  Ver todos los recursos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}

function GuideBenefit({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#436243]/10">
        <Check className="size-3.5 text-[#436243]" aria-hidden="true" />
      </span>
      <span>{text}</span>
    </li>
  );
}

function ServiceCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl border-l-4 border-[#436243] hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl mb-3 text-[#1E1E1E]">{title}</h3>
      <p className="text-[#1E1E1E]/70 mb-4 leading-relaxed">{description}</p>
      <Link to={link} className="text-[#436243] hover:text-[#5F775D] transition-colors inline-flex items-center gap-2">
        Saber más
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function TrustCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
}
