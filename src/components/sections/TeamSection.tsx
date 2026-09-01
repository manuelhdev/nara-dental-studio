import { team } from "../../data/team"
import { Reveal } from "../motion/Reveal"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import { SectionTag } from "../ui/SectionTag"

const tones = ["bone", "sage", "warm"] as const

export function TeamSection() {
  return (
    <section className="border-t hairline py-28 sm:py-36" aria-label="Nuestro equipo">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="TEAM / EL EQUIPO" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6vw,4rem)]">
            Detrás del diagnóstico
            <br />
            hay personas.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article>
                <ClinicalPhoto
                  src={member.image}
                  alt={`${member.name} — ${member.activity.toLowerCase()}`}
                  tone={tones[i % tones.length]}
                  ratio="portrait"
                  label={member.activity.toUpperCase().slice(0, 26)}
                  code={`DR / ${String(i + 1).padStart(2, "0")}`}
                />
                <h3 className="display mt-5 text-2xl">{member.name}</h3>
                <p className="tag mt-1.5 !text-[10px] !text-mineral">{member.specialty}</p>
                <p className="mt-3 text-sm leading-relaxed text-clinical">“{member.bio}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
