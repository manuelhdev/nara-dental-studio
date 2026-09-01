import { Link } from "react-router-dom"
import { caseDisclaimer, clinicalCases } from "../../data/cases"
import { BeforeAfter } from "../comparison/BeforeAfter"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

const featured = ["Blanqueamiento", "Restauraciones", "Ortodoncia", "Carillas"]

export function ResultsSection() {
  const cases = featured
    .map((cat) => clinicalCases.find((c) => c.category === cat))
    .filter((c) => c !== undefined)

  return (
    <section className="py-28 sm:py-36" aria-label="Resultados antes y después">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="RESULTS / 04" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6vw,4rem)]">
            Los resultados
            <br />
            se entienden mejor así.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-clinical">
            Desliza para comparar. Sin retoques exagerados, sin promesas visuales que después no se cumplen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:gap-12 lg:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <figure>
                <BeforeAfter
                  beforeSrc={c.beforeImage}
                  afterSrc={c.afterImage}
                  beforeTone={c.beforeTone}
                  afterTone={c.afterTone}
                  alt={c.title}
                />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="display text-lg">{c.title}</span>
                  <span className="tag !text-[9px]">CASE / {c.number}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-sm italic text-clinical">{caseDisclaimer}</p>
          <Link
            to="/casos"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-graphite underline decoration-graphite/25 decoration-1 underline-offset-8 hover:decoration-mineral"
          >
            Ver el archivo completo de casos
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
