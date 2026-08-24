import { Download, LoaderCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import type { Resource } from "../content/resources";

interface ResourceDownloadFormProps {
  resource: Resource;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

const emptyLead: LeadData = {
  name: "",
  email: "",
  phone: "",
};

export function ResourceDownloadForm({ resource }: ResourceDownloadFormProps) {
  const [lead, setLead] = useState<LeadData>(emptyLead);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const downloadUrl = `/downloads/${resource.slug}.pdf`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLead((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_RESOURCE_LEAD_ENDPOINT?.trim();

    if (!endpoint) {
      setStatus("error");
      setMessage("El envío de solicitudes todavía no está conectado. Configura el endpoint de leads para habilitar la descarga.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          resourceSlug: resource.slug,
          resourceTitle: resource.title,
          source: "alium-care-recursos",
          privacyNoticeAccepted: true,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Lead endpoint responded with ${response.status}`);
      }

      setStatus("success");
      setMessage("Tus datos fueron recibidos. La descarga comenzará automáticamente.");
      setLead(emptyLead);
      startDownload(downloadUrl, resource.slug);
    } catch {
      setStatus("error");
      setMessage("No pudimos procesar la solicitud. Revisa tu conexión o inténtalo nuevamente más tarde.");
    }
  };

  return (
    <aside className="rounded-3xl border border-[#DCD1C4] bg-white p-7 shadow-sm lg:sticky lg:top-28 lg:p-8">
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#436243]/10 text-[#436243]">
        <Download className="size-6" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-2xl">Descarga el recurso completo</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#1E1E1E]/65">
        Completa tus datos para recibir acceso al archivo en PDF.
      </p>

      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <FormField
          id="resource-name"
          name="name"
          label="Nombre"
          value={lead.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <FormField
          id="resource-email"
          name="email"
          label="Correo electrónico"
          type="email"
          value={lead.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <FormField
          id="resource-phone"
          name="phone"
          label="Teléfono"
          type="tel"
          value={lead.phone}
          onChange={handleChange}
          autoComplete="tel"
        />

        <label className="flex items-start gap-3 text-xs leading-relaxed text-[#1E1E1E]/65">
          <input
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 accent-[#436243]"
          />
          <span>
            He leído el <Link to="/aviso-de-privacidad" className="font-medium text-[#436243] underline">aviso de privacidad</Link> y acepto el uso de mis datos para atender esta solicitud.
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#436243] px-6 py-3.5 text-white transition-colors hover:bg-[#5F775D] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? (
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <Download className="size-5" aria-hidden="true" />
          )}
          {status === "submitting" ? "Procesando…" : "Enviar y descargar"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-5 rounded-xl p-4 text-sm leading-relaxed ${
            status === "success" ? "bg-[#436243]/10 text-[#315031]" : "bg-[#F4E8E3] text-[#7B3F32]"
          }`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
          {status === "success" && (
            <button
              type="button"
              onClick={() => startDownload(downloadUrl, resource.slug)}
              className="mt-3 block font-semibold underline"
            >
              Descargar nuevamente
            </button>
          )}
        </div>
      )}

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-[#1E1E1E]/50">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#436243]" aria-hidden="true" />
        No incluyas diagnósticos ni datos clínicos. Este formulario solicita únicamente información de contacto.
      </p>
    </aside>
  );
}

interface FormFieldProps {
  id: string;
  name: keyof LeadData;
  label: string;
  type?: "text" | "email" | "tel";
  value: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({ id, name, label, type = "text", value, autoComplete, onChange }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1E1E1E]">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required
        className="w-full rounded-lg border border-[#DCD1C4] bg-white px-4 py-3 text-[#1E1E1E] outline-none transition-shadow focus:ring-2 focus:ring-[#436243]"
      />
    </div>
  );
}

function startDownload(url: string, slug: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `alium-care-${slug}.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
