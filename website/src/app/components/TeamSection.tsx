import type { TeamMember } from "../content/socialProof";

interface TeamSectionProps {
  items: readonly TeamMember[];
}

export function TeamSection({ items }: TeamSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-[#E8E0D5] bg-[#FAF5EF] py-14 lg:py-16" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 grid items-end gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
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
        <ul className="grid overflow-hidden rounded-2xl border border-[#E8E0D5] bg-white shadow-sm md:grid-cols-3 md:divide-x md:divide-[#E8E0D5]">
          {items.map((member) => (
            <li
              key={member.id}
              className="min-w-0 border-b border-[#E8E0D5] p-5 last:border-b-0 md:border-b-0 lg:p-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  width="80"
                  height="80"
                  className="size-20 shrink-0 rounded-2xl object-cover shadow-sm"
                />
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold tracking-wide text-[#436243] uppercase">{member.area}</p>
                  <h3 className="break-words text-xl text-[#1E1E1E]">{member.name}</h3>
                  <p className="mt-1 break-words text-sm text-[#1E1E1E]/65">{member.role}</p>
                </div>
              </div>
              {member.specialty && (
                <p className="mt-4 break-words text-sm leading-relaxed text-[#1E1E1E]/75">{member.specialty}</p>
              )}
              <p className="mt-2 break-words text-xs leading-relaxed text-[#1E1E1E]/55">{member.credential}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
