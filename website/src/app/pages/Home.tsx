import { Link } from "react-router";
import { Heart, Stethoscope, Scale, Users, Globe, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImg from "figma:asset/26ac470c256aaee8ec07ea46ae1d337bf3b0b9ef.png";
import communityImg from "figma:asset/af0e2ac995fa50f45a2913f1525aaa8364bdea77.png";
import { siteLinks } from "../config/site";

export function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias por tu interés! Te contactaremos pronto a ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-[#FAF5EF]">
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
                  Agenda una consulta
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
              icon={<Sparkles className="w-10 h-10" />}
              title="Webinar único en su tipo"
              description="Sesiones educativas exclusivas con expertos en cuidados integrales."
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

      {/* Community CTA Section */}
      <section className="py-20" id="comunidad">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <img
            src={communityImg}
            alt="Manos de familia unidas"
            className="w-full h-64 object-cover rounded-2xl mb-10 mx-auto max-w-2xl"
          />
          <h2 className="text-3xl lg:text-4xl text-[#1E1E1E] mb-6">
            Únete a nuestra comunidad
          </h2>
          <p className="text-lg text-[#1E1E1E]/70 mb-8">
            Aprende, comparte y encuentra apoyo con familias que viven lo mismo que tú.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              aria-label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-6 py-3.5 rounded-lg border border-[#E8E0D5] bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#436243]"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors whitespace-nowrap"
            >
              Quiero unirme
            </button>
          </form>
        </div>
      </section>
    </div>
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
