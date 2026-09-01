import { Link, useParams } from "react-router-dom"
import { Reveal } from "../components/motion/Reveal"
import { Button } from "../components/ui/Button"
import { SectionTag } from "../components/ui/SectionTag"
import { getTreatment, treatmentGroups } from "../data/treatments"
import { NotFound } from "./NotFound"

const blocks = [
  { key: "what", label: "Qué es" },
  { key: "solves", label: "Qué busca resolver" },
  { key: "evaluation", label: "Cómo se evalúa" },
  { key: "expect", label: "Qué puedes esperar" },
] as const

export function TreatmentDetail() {
  const { slug } = useParams()
  const treatment = slug ? getTreatment(slug) : undefined

  if (!treatment) return <NotFound />

  const group = treatmentGroups.find((g) => g.id === treatment.group)

  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <nav aria-label="Migas de pan" className="tag mb-8 flex flex-wrap items-center gap-2">
            <Link to="/tratamientos" className="underline decoration-transparent underline-offset-4 hover:decoration-mineral">
              Tratamientos
            </Link>
            <span aria-hidden="true">/</span>
            <span className="!text-mineral">{group?.label}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display text-[clamp(2.4rem,7vw,4.4rem)]">{treatment.name}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-lg font-display text-xl italic text-mineral">{treatment.short}</p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-8">
        <dl>
          {blocks.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.04}>
              <div className="grid gap-2 border-t hairline py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
                <dt className="tag !text-mineral">
                  <span aria-hidden="true" className="mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {b.label}
                </dt>
                <dd className="max-w-xl text-base leading-relaxed text-graphite/85">{treatment[b.key]}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal>
          <section aria-labelledby="faq-titulo" className="border-t hairline py-10">
            <h2 id="faq-titulo" className="tag mb-8 !text-mineral">
              <span aria-hidden="true" className="mr-3">05</span>
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {treatment.faqs.map((faq) => (
                <details key={faq.q} className="group border hairline bg-white/60 px-5 py-4 open:bg-white/90">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-lg">
                    {faq.q}
                    <span aria-hidden="true" className="tag transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-clinical">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="border-t hairline py-12" aria-label="Valoración">
            <SectionTag code="VALORACIÓN / 06" className="mb-6" />
            <p className="display max-w-xl text-2xl sm:text-3xl">
              La única forma de saber si este tratamiento es para ti, es valorarte.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/agendar">Agendar valoración</Button>
              <Button to="/tratamientos" variant="ghost" arrow="none">
                ← Ver todos los tratamientos
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  )
}
