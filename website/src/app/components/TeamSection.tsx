import type { TeamMember } from "../content/socialProof";

interface TeamSectionProps {
  items: readonly TeamMember[];
}

export function TeamSection({ items }: TeamSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-[#DCD1C4] bg-[#F3ECE3] py-16 lg:py-20" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid items-end gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-[#735F37] uppercase">
              Atención multidisciplinaria
            </p>
            <h2 id="team-heading" className="text-3xl text-[#1E1E1E] lg:text-4xl">
              Nuestro equipo
            </h2>
          </div>
          <p className="max-w-2xl text-[#1E1E1E]/70 lg:justify-self-end">
            Enfermería, medicina y derecho trabajando de forma coordinada para ofrecer una orientación clara a cada familia.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((member) => (
            <li
              key={member.id}
              className="min-w-0 overflow-hidden rounded-3xl border border-[#DCD1C4] bg-white shadow-[0_14px_35px_rgba(68,54,38,0.08)]"
            >
              <div className="flex items-center justify-between border-b border-[#E8E0D5] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#436243] text-xs font-semibold text-white">
                    AC
                  </span>
                  <span className="text-sm font-medium text-[#1E1E1E]">Alium Care</span>
                </div>
                <span className="rounded-full bg-[#436243]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#436243] uppercase">
                  {member.area}
                </span>
              </div>

              <div className="bg-[#E8E0D5]">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  width="480"
                  height="384"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>

              <div className="p-7">
                <h3 className="break-words text-2xl text-[#1E1E1E]">{member.name}</h3>
                <p className="mt-2 break-words font-medium text-[#436243]">{member.role}</p>
                {member.specialty && (
                  <p className="mt-5 min-h-12 break-words text-sm leading-relaxed text-[#1E1E1E]/75">
                    {member.specialty}
                  </p>
                )}
                <div className="mt-6 border-t border-[#E8E0D5] pt-5">
                  <p className="mb-2 text-[0.68rem] font-semibold tracking-[0.14em] text-[#735F37] uppercase">
                    Formación y credenciales
                  </p>
                  <p className="break-words text-sm leading-relaxed text-[#1E1E1E]/65">{member.credential}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
