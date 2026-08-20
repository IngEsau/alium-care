import { CheckCircle2, ExternalLink } from "lucide-react";

const lawUrl = "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf";
const regulationUrl = "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFPDPPP.pdf";

export function AvisoPrivacidad() {
  return (
    <div className="bg-[#FAF5EF] text-[#1E1E1E]">
      <section className="border-b border-[#E8E0D5] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="mb-6 text-4xl lg:text-5xl">Aviso de privacidad integral</h1>
          <p className="max-w-3xl text-lg text-[#1E1E1E]/70">
            Información sobre el tratamiento de datos personales y los derechos de sus titulares.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-6 lg:px-8">
          <PrivacySection title="Estado comprobado del prototipo">
            <ul className="space-y-3">
              <StatusItem>Los formularios conservan la información sólo en memoria del navegador.</StatusItem>
              <StatusItem>No existe envío a servidor, API, base de datos, CRM o servicio de correo.</StatusItem>
              <StatusItem>No se detectaron analytics, pasarela de pagos ni cookies activas de la aplicación.</StatusItem>
              <StatusItem>
                El navegador sí solicita fuentes a Adobe Typekit y Google Fonts; los enlaces sociales y
                WhatsApp sólo se abren cuando la persona decide pulsarlos.
              </StatusItem>
            </ul>
            <p className="mt-5 text-sm text-[#1E1E1E]/65">
              Este estado debe volver a verificarse en el ambiente de producción y cada vez que se integre
              un proveedor.
            </p>
          </PrivacySection>

          <PrivacySection title="1. Identidad y domicilio de la persona responsable">
            <p>
              <strong>[PENDIENTE: nombre completo o razón social]</strong>, quien opera la marca
              “Alium Care”, con domicilio para oír y recibir notificaciones en
              <strong> [PENDIENTE: calle, número, colonia, código postal, municipio, estado y país]</strong>,
              será responsable del tratamiento de los datos personales descritos en este aviso.
            </p>
          </PrivacySection>

          <PrivacySection title="2. Datos personales previstos">
            <p>Si se habilitan los formularios actuales, podrían recabarse las siguientes categorías:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#1E1E1E]/80">
              <li>Identificación: nombre.</li>
              <li>Contacto: correo electrónico y número de WhatsApp.</li>
              <li>Contenido de la consulta: mensaje escrito libremente por la persona.</li>
              <li>
                Datos técnicos de navegación y registros del servidor:
                <strong> [PENDIENTE: confirmar hosting, campos y periodo de conservación]</strong>.
              </li>
            </ul>
            <div className="mt-5 rounded-xl border border-[#E8E0D5] bg-[#FAF5EF] p-5">
              <p className="font-semibold text-[#436243]">Datos personales sensibles</p>
              <p className="mt-2 text-sm text-[#1E1E1E]/75">
                El formulario inicial no debe solicitar diagnósticos, expedientes, tratamientos ni otros
                datos de salud propios o de terceras personas. Si Alium Care decide tratarlos, deberá
                justificar una finalidad legítima y concreta, habilitar un canal seguro y obtener el
                consentimiento expreso y por escrito mediante un mecanismo de autenticación verificable.
              </p>
            </div>
          </PrivacySection>

          <PrivacySection title="3. Finalidades del tratamiento">
            <p className="font-semibold">Finalidades primarias propuestas, sujetas a confirmación:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[#1E1E1E]/80">
              <li>Recibir, identificar y responder solicitudes de información u orientación.</li>
              <li>Contactar a la persona por el medio que elija para dar seguimiento a su solicitud.</li>
              <li>Gestionar una eventual relación de servicios y cumplir obligaciones aplicables.</li>
            </ul>
            <p className="mt-6 font-semibold">Finalidades secundarias posibles:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[#1E1E1E]/80">
              <li>Enviar información sobre comunidad, webinars, contenidos o novedades.</li>
              <li>Realizar encuestas de experiencia y comunicaciones promocionales.</li>
            </ul>
            <p className="mt-4 text-sm text-[#1E1E1E]/70">
              <strong>[PENDIENTE]</strong> Confirmar cuáles existirán y habilitar desde la recolección un
              medio separado, no premarcado, para rechazarlas sin afectar las finalidades primarias.
            </p>
          </PrivacySection>

          <PrivacySection title="4. Opciones para limitar el uso o divulgación">
            <p>
              La persona podrá solicitar la baja de comunicaciones secundarias o limitar usos no
              indispensables mediante <strong>[PENDIENTE: correo o formulario específico]</strong>. Alium Care
              deberá indicar el tiempo de atención y conservar evidencia de la solicitud.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Tecnologías de rastreo y proveedores web">
            <p>
              En el prototipo no se detectaron herramientas de analytics ni cookies creadas por la
              aplicación. Se cargan recursos tipográficos desde Adobe Typekit y Google Fonts, lo cual
              genera solicitudes técnicas a esos proveedores. El proveedor de hosting, sus registros,
              ubicación y plazos de conservación están <strong>[PENDIENTES de confirmar]</strong>.
            </p>
            <p className="mt-4">
              Antes de incorporar cookies no esenciales, píxeles, analítica o publicidad, Alium Care deberá
              actualizar este apartado e implementar información y controles coherentes con la tecnología
              realmente utilizada.
            </p>
          </PrivacySection>

          <PrivacySection title="6. Personas encargadas, proveedores y transferencias">
            <p>
              El prototipo no transmite el contenido de los formularios. Antes de activarlos se deberán
              documentar el hosting, correo, CRM, base de datos, agenda, videollamada, almacenamiento,
              WhatsApp y cualquier futuro proveedor de pagos o analítica.
            </p>
            <p className="mt-4">
              <strong>[PENDIENTE]</strong> Clasificar cada proveedor como persona encargada o tercero,
              formalizar sus obligaciones y declarar las transferencias nacionales o internacionales que
              correspondan, sus finalidades, receptores y mecanismo de consentimiento cuando resulte
              exigible.
            </p>
          </PrivacySection>

          <PrivacySection title="7. Conservación, bloqueo y supresión">
            <p>
              Hoy no existe almacenamiento de servidor: los datos escritos se pierden al recargar la página
              o después de la simulación de envío. Esto no cubre mensajes enviados voluntariamente por
              WhatsApp o correo electrónico.
            </p>
            <p className="mt-4">
              Antes de operar, Alium Care deberá aprobar una matriz de conservación por dato y finalidad.
              Cumplida la finalidad, los datos deberán dejar de utilizarse, bloquearse durante los plazos de
              responsabilidad aplicables y suprimirse de forma verificable al concluirlos, incluyendo copias
              y proveedores. <strong>[PENDIENTE: plazos y responsables internos]</strong>.
            </p>
          </PrivacySection>

          <PrivacySection title="8. Derechos ARCO y revocación del consentimiento">
            <p>
              La persona titular podrá solicitar acceso, rectificación, cancelación u oposición, así como
              revocar su consentimiento, ante
              <strong> [PENDIENTE: persona o departamento de datos personales]</strong> por medio de
              <strong> [PENDIENTE: correo monitoreado y medio alterno]</strong>.
            </p>
            <p className="mt-4">La solicitud deberá incluir:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[#1E1E1E]/80">
              <li>Nombre de la persona titular y medio para recibir notificaciones.</li>
              <li>Acreditación de identidad y, en su caso, de la representación.</li>
              <li>Descripción clara de los datos y del derecho que desea ejercer.</li>
              <li>Elementos que faciliten localizar la información.</li>
              <li>Para rectificación, la modificación solicitada y sus documentos de soporte.</li>
            </ul>
            <p className="mt-4">
              Alium Care deberá comunicar su determinación en un máximo de 20 días hábiles y, si resulta
              procedente, hacerla efectiva dentro de los 15 días hábiles siguientes. Cada plazo puede
              ampliarse una sola vez por un periodo igual cuando exista justificación.
            </p>
          </PrivacySection>

          <PrivacySection title="9. Seguridad e incidentes">
            <p>
              <strong>[PENDIENTE]</strong> Documentar medidas administrativas, físicas y técnicas acordes con
              los datos y riesgos reales; controles de acceso, confidencialidad, respaldo, gestión de
              proveedores, capacitación, auditoría y respuesta a incidentes. No se declara aquí ningún
              control como implementado hasta contar con evidencia operativa.
            </p>
          </PrivacySection>

          <PrivacySection title="10. Cambios a este aviso">
            <p>
              Las modificaciones se comunicarán mediante
              <strong> [PENDIENTE: URL definitiva y, cuando corresponda, correo u otro canal]</strong>. La
              versión publicada deberá indicar fecha de entrada en vigor y fecha de última actualización.
            </p>
          </PrivacySection>

          <PrivacySection title="Referencias normativas">
            <p className="text-sm text-[#1E1E1E]/70">
              Este modelo considera la Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares publicada el 20 de marzo de 2025, con última reforma publicada el 14 de noviembre
              de 2025, y el Reglamento publicado el 21 de diciembre de 2011 en lo que resulte compatible con
              la ley vigente. Se recomienda validación jurídica antes de publicar.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ExternalReference href={lawUrl}>Consultar Ley vigente</ExternalReference>
              <ExternalReference href={regulationUrl}>Consultar Reglamento</ExternalReference>
            </div>
          </PrivacySection>
        </div>
      </section>
    </div>
  );
}

function PrivacySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-[#E8E0D5] bg-white p-7 shadow-sm lg:p-9">
      <h2 className="mb-5 text-2xl text-[#1E1E1E] lg:text-3xl">{title}</h2>
      <div className="text-[#1E1E1E]/80">{children}</div>
    </article>
  );
}

function StatusItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[#1E1E1E]/80">
      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#436243]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function ExternalReference({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#436243] px-4 py-2.5 text-sm font-medium text-[#436243] transition-colors hover:bg-[#436243] hover:text-white"
    >
      {children}
      <ExternalLink className="size-4" aria-hidden="true" />
    </a>
  );
}
