import { Link } from "react-router-dom"
import { Reveal } from "../components/motion/Reveal"
import { FinalCta } from "../components/sections/FinalCta"
import { SectionTag } from "../components/ui/SectionTag"
import { getGroupTreatments, treatmentGroups } from "../data/treatments"

export function Treatments() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <SectionTag code="TREATMENTS / ÍNDICE" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display max-w-4xl text-[clamp(2.6rem,8vw,5rem)]">
            Distintos problemas.
            <br />
            Distintas soluciones.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-clinical">
            No agrupamos por especialidades, sino por lo que tú necesitas lograr. Es más fácil encontrarte
            así.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        {treatmentGroups.map((group, gi) => {
          const items = getGroupTreatments(group.id)
          return (
            <Reveal key={group.id} delay={0.05}>
              <section aria-labelledby={`grupo-${group.id}`} className="grid gap-6 border-t hairline py-12 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-14">
                <header>
                  <p className="tag mb-3 !text-mineral">{String(gi + 1).padStart(2, "0")} / {group.intent}</p>
                  <h2 id={`grupo-${group.id}`} className="display text-4xl sm:text-5xl">
                    {group.label}
                  </h2>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-clinical">{group.description}</p>
                </header>
                <ul className="self-center">
                  {items.map((t) => (
                    <li key={t.slug} className="border-b hairline first:border-t">
                      <Link
                        to={`/tratamientos/${t.slug}`}
                        className="group flex items-baseline justify-between gap-6 py-4.5 transition-colors duration-300 hover:text-mineral"
                      >
                        <span className="display text-xl transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                          {t.name}
                        </span>
                        <span className="hidden flex-1 text-right text-sm text-clinical sm:block">{t.short}</span>
                        <span aria-hidden="true" className="text-mineral opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )
        })}
      </div>

      <FinalCta />
    </>
  )
}
