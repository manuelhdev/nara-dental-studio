import { ScanReveal } from "../diagnostic/ScanReveal"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

const instruments = [
  {
    name: "Fotografía clínica",
    text: "Documenta el punto de partida y permite comparar con honestidad.",
  },
  {
    name: "Radiografía digital",
    text: "Muestra lo que la exploración visual no alcanza, con menos radiación que los sistemas antiguos.",
  },
  {
    name: "Escaneo intraoral",
    text: "Permite registrar digitalmente la forma de tus dientes en determinados tratamientos.",
  },
  {
    name: "Planificación digital",
    text: "Ayuda a conversar sobre opciones y expectativas antes de tocar un solo diente.",
  },
]

export function TechnologySection() {
  return (
    <section className="bg-mineral-deep bg-mineral py-28 text-ceramic sm:py-36" aria-label="Herramientas de diagnóstico">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionTag code="TOOLS / INSTRUMENTOS" dark className="mb-8" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display text-[clamp(2.2rem,6vw,4rem)]">
                Ver más
                <br />
                nos ayuda a decidir mejor.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ceramic/70">
                La tecnología no es un argumento de venta. Es un conjunto de instrumentos para observar
                mejor y equivocarnos menos.
              </p>
            </Reveal>

            <ul className="mt-12 border-t border-ceramic/15">
              {instruments.map((inst, i) => (
                <Reveal key={inst.name} delay={i * 0.06}>
                  <li className="grid gap-1 border-b border-ceramic/15 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                    <h3 className="display text-xl text-ceramic">{inst.name}</h3>
                    <p className="text-sm leading-relaxed text-ceramic/65">{inst.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2} className="lg:sticky lg:top-28">
            <ScanReveal />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
