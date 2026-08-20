import { Link } from "react-router";
import { Heart, Stethoscope, Scale, Check, Video, ArrowRight } from "lucide-react";
import nursingImg from "figma:asset/eab73e75ce8c25a446a0bedc62b77f0b569daef1.png";
import medicalImg from "figma:asset/63fc8ff656a37c32004a18650478a2cc88ddd638.png";
import legalImg from "figma:asset/c0e4203759f6966b6786a263de5e22650deeadd0.png";

export function Servicios() {
  return (
    <div className="bg-[#FAF5EF]">
      {/* Page Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6 text-[#1E1E1E]">
            Nuestros servicios
          </h1>
          <p className="text-lg lg:text-xl text-[#1E1E1E]/70">
            Asesorías integrales diseñadas para acompañarte en cada etapa.
          </p>
        </div>
      </section>

      {/* Service 1 - Nursing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-[#436243] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-[#1E1E1E]">
                Asesoría en Enfermería
              </h2>
              <p className="text-lg text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Te enseñamos a cuidar a tu familiar con seguridad y confianza. Desde el manejo de medicamentos hasta la organización de cuidados diarios.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureItem text="Cuidado diario" />
                <FeatureItem text="Manejo de medicamentos" />
                <FeatureItem text="Red de cuidadores" />
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={nursingImg}
                alt="Enfermera ayudando a paciente con medicamentos"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Medical */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={medicalImg}
                alt="Doctor explicando plan de tratamiento a familia"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-[#436243] rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-[#1E1E1E]">
                Orientación Médica
              </h2>
              <p className="text-lg text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Traducimos el lenguaje médico a palabras que se entienden. Te ayudamos a tomar decisiones informadas con claridad y sin miedo.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureItem text="Interpretación de diagnósticos" />
                <FeatureItem text="Opciones de tratamiento" />
                <FeatureItem text="Acompañamiento en consultas" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Legal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-[#436243] rounded-full flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-[#1E1E1E]">
                Asesoría Legal
              </h2>
              <p className="text-lg text-[#1E1E1E]/70 mb-8 leading-relaxed">
                Conoce tus derechos y los de tu familiar. Te orientamos en aspectos legales de salud, cuidados y bienestar económico familiar.
              </p>
              <ul className="space-y-4 mb-8">
                <FeatureItem text="Derechos del paciente" />
                <FeatureItem text="Testamentos y voluntades" />
                <FeatureItem text="Seguros y beneficios" />
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={legalImg}
                alt="Asesora legal orientando a una familia"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Highlight */}
      <section className="py-20 bg-[#5F775D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="w-8 h-8" />
          </div>
          <h2 className="text-3xl lg:text-4xl mb-6">
            Webinars en vivo
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Sesiones educativas con expertos. Aprende desde donde estés, en tu idioma, a tu ritmo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#5F775D] rounded-lg hover:bg-white/90 transition-colors"
          >
            Ver próximas fechas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6 text-[#1E1E1E]">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-[#1E1E1E]/70 mb-8">
            Agenda una consulta sin compromiso y descubre cómo podemos apoyarte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors"
          >
            Contactar ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-6 h-6 bg-[#436243]/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="w-4 h-4 text-[#436243]" />
      </div>
      <span className="text-[#1E1E1E]">{text}</span>
    </li>
  );
}