import { ConcernSelector } from "../diagnostic/ConcernSelector"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

export function Concerns() {
  return (
    <section className="pb-28 sm:pb-36" aria-label="Qué te preocupa">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="YOU / LO QUE TÚ VES" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6vw,4rem)]">
            Empecemos por lo que tú ves.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mb-14 mt-6 max-w-md text-base leading-relaxed text-clinical">
            ¿Qué te gustaría mejorar o revisar? Elige una opción y te mostramos por dónde podríamos
            empezar. Sin diagnósticos automáticos, sin compromisos.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <ConcernSelector />
        </Reveal>
      </div>
    </section>
  )
}
