import { useState } from "react"
import { CaseFile } from "../components/cases/CaseFile"
import { Reveal } from "../components/motion/Reveal"
import { FinalCta } from "../components/sections/FinalCta"
import { SectionTag } from "../components/ui/SectionTag"
import { caseCategories, clinicalCases } from "../data/cases"

export function CasesPage() {
  const [filter, setFilter] = useState<string>("Todos")
  const visible = filter === "Todos" ? clinicalCases : clinicalCases.filter((c) => c.category === filter)

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <SectionTag code="ARCHIVE / CASOS" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display max-w-4xl text-[clamp(2.6rem,8vw,5rem)]">
            Archivo
            <br />
            de casos.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-clinical">
            Cada caso es un pequeño expediente: problema, objetivo, tratamiento y resultado. Documentación,
            no galería.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filtrar casos por categoría">
            {caseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  filter === cat
                    ? "border-mineral bg-mineral text-ceramic"
                    : "hairline text-clinical hover:border-mineral hover:text-mineral"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8" aria-live="polite" aria-label="Listado de casos">
        <div className="grid gap-8 lg:grid-cols-2">
          {visible.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.04}>
              <CaseFile clinicalCase={c} />
            </Reveal>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="py-16 text-center text-clinical">No hay casos en esta categoría todavía.</p>
        )}
      </section>

      <FinalCta />
    </>
  )
}
