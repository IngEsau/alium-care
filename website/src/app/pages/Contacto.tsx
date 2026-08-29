import { useState } from "react";
import { MapPin, Mail, Instagram, Facebook, MessageCircle, Shield } from "lucide-react";
import { contactEmail, socialLinks, whatsappContact } from "../config/site";
import { PageMeta } from "../components/PageMeta";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Solicitud de información de ${formData.name}`;
    const body = [
      `Nombre: ${formData.name}`,
      `Correo de contacto: ${formData.email}`,
      `WhatsApp: ${formData.whatsapp}`,
      "",
      "Mensaje:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#FAF5EF]">
      <PageMeta
        title="Contacto | Alium Care"
        description="Contacta a Alium Care para solicitar información sobre orientación en cuidados, medicina y derecho."
      />
      {/* Page Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6 text-[#1E1E1E]">
            Estamos aquí para ti
          </h1>
          <p className="text-lg lg:text-xl text-[#1E1E1E]/70">
            Escríbenos e indícanos de forma general qué orientación buscas.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="formulario-contacto" className="scroll-mt-24 bg-white p-8 lg:p-12 rounded-2xl">
              <h2 className="text-2xl lg:text-3xl mb-8 text-[#1E1E1E]">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E0D5] bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#436243]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E0D5] bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#436243]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E0D5] bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#436243]"
                    placeholder="+52 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E0D5] bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#436243] resize-none"
                    placeholder="Describe de forma general cómo podemos ayudarte..."
                  />
                  <p className="mt-2 text-xs leading-relaxed text-[#1E1E1E]/60">
                    No incluyas diagnósticos, expedientes, tratamientos ni otros datos de salud.
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[#1E1E1E]/65">
                  Al continuar se abrirá tu aplicación de correo con el mensaje dirigido a {contactEmail}.
                  Revisa la información y pulsa Enviar desde tu correo.
                </p>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors"
                >
                  Continuar por correo
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl mb-8 text-[#1E1E1E]">
                  Información de contacto
                </h2>

                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<MessageCircle className="w-6 h-6 text-[#436243]" />}
                    label="WhatsApp"
                    value={whatsappContact.displayNumber}
                    link={whatsappContact.url}
                  />
                  <ContactInfoItem
                    icon={<Mail className="w-6 h-6 text-[#436243]" />}
                    label="Email"
                    value={contactEmail}
                    link={`mailto:${contactEmail}`}
                  />
                  <ContactInfoItem
                    icon={<MapPin className="w-6 h-6 text-[#436243]" />}
                    label="Ubicación"
                    value="San Andrés Cholula, Puebla, México"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-xl mb-6 text-[#1E1E1E]">Síguenos en redes</h3>
                <div className="space-y-4">
                  <SocialLink
                    icon={<Instagram className="w-5 h-5" />}
                    label="Instagram"
                    handle="@aliumcare"
                    link={socialLinks.instagram}
                  />
                  <SocialLink
                    icon={<Facebook className="w-5 h-5" />}
                    label="Facebook"
                    handle="Alium Care"
                    link="https://facebook.com"
                  />
                  <SocialLink
                    icon={
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    }
                    label="TikTok"
                    handle="@aliumcare"
                    link="https://tiktok.com"
                  />
                </div>
              </div>

              {/* Trust Note */}
              <div className="bg-[#436243]/5 p-6 rounded-xl border border-[#436243]/10">
                <div className="flex gap-3">
                  <Shield className="w-6 h-6 text-[#436243] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#1E1E1E]/80 leading-relaxed">
                      El formulario no almacena ni envía datos directamente. El mensaje se prepara en tu aplicación de correo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ContactInfoItem({ icon, label, value, link }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-[#436243]/10 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#1E1E1E]/60 mb-1">{label}</p>
        <p className="text-[#1E1E1E] font-medium">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

function SocialLink({ icon, label, handle, link }: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FAF5EF] transition-colors"
    >
      <div className="w-10 h-10 bg-[#436243]/10 rounded-full flex items-center justify-center text-[#436243]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#1E1E1E]/60">{label}</p>
        <p className="text-[#1E1E1E] font-medium">{handle}</p>
      </div>
    </a>
  );
}
