import { MessageCircle } from "lucide-react";
import { whatsappContact } from "../config/site";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappContact.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Alium Care por WhatsApp"
      title="Contactar por WhatsApp"
      className="fixed right-6 bottom-7 z-40 inline-flex size-16 items-center justify-center rounded-full border-2 border-white bg-[#436243] text-white shadow-[0_12px_30px_rgba(30,30,30,0.3)] ring-1 ring-[#436243]/20 transition-[transform,background-color,box-shadow] hover:scale-105 hover:bg-[#5F775D] hover:shadow-[0_16px_36px_rgba(30,30,30,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C8A96E] focus-visible:ring-offset-2 sm:right-10 sm:bottom-10 sm:size-[4.5rem]"
      style={{
        marginRight: "env(safe-area-inset-right)",
        marginBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <MessageCircle className="size-8 sm:size-9" aria-hidden="true" />
    </a>
  );
}
