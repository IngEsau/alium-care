import { Quote } from "lucide-react";
import type { Testimonial } from "../content/socialProof";

interface TestimonialsSectionProps {
  items: readonly Testimonial[];
}

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="testimonials-heading" className="text-3xl text-[#1E1E1E] lg:text-4xl">
            Testimonios
          </h2>
          <p className="mt-4 text-[#1E1E1E]/70">Historias de familias que encontraron claridad y acompañamiento.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.id}
              className="relative min-w-0 overflow-hidden rounded-2xl border border-[#E8E0D5] bg-[#FAF5EF] p-8 shadow-sm"
            >
              <Quote className="mb-5 size-8 text-[#C8A96E]" aria-hidden="true" />
              <blockquote className="mb-6 text-[#1E1E1E]/80">
                <p className="break-words leading-relaxed">{item.quote}</p>
              </blockquote>
              <figcaption className="flex items-center gap-4">
                {item.image && item.imageAlt && (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    width="64"
                    height="64"
                    className="size-16 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                )}
                <div className="min-w-0">
                  <p className="break-words font-medium text-[#1E1E1E]">{item.name}</p>
                  <p className="break-words text-sm text-[#1E1E1E]/60">{item.relationship}</p>
                  <p className="mt-1 break-words text-xs font-medium text-[#436243]">
                    Asesoría en {item.area}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
