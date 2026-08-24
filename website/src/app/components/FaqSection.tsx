import { Plus } from "lucide-react";
import type { FaqItem } from "../content/faqs";

interface FaqSectionProps {
  items: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FaqSection({
  items,
  eyebrow = "Información útil",
  title = "Lo que necesitas saber",
  description = "Respuestas breves sobre el alcance de la orientación y cómo preparar un primer contacto.",
}: FaqSectionProps) {
  return (
    <section className="border-t border-[#E8E0D5] bg-white py-16 lg:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#735F37] uppercase">{eyebrow}</p>
          <h2 id="faq-heading" className="text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-[#1E1E1E]/70">
            {description}
          </p>
        </div>

        <div className="divide-y divide-[#E8E0D5] border-y border-[#E8E0D5]">
          {items.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-medium text-[#1E1E1E] marker:content-none">
                <span>{item.question}</span>
                <Plus className="size-5 shrink-0 text-[#436243] transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-[#1E1E1E]/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
