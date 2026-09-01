import { DentalArch } from "../diagnostic/DentalArch"
import { ProcessSteps } from "../diagnostic/ProcessSteps"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

const steps = [
  {
    number: "01",
    title: "Exploración",
    text: "Revisamos tu boca con calma y escuchamos qué te trajo aquí.",
  },
  {
    number: "02",
    title: "Estudios",
    text: "Solo cuando son necesarios: radiografía, fotografía o escaneo.",
  },
  {
    number: "03",
    title: "Diagnóstico",
    text: "Te mostramos qué encontramos, en tu boca y en pantalla, con palabras claras.",
  },
  {
    number: "04",
    title: "Opciones",
    text: "Casi nunca existe un solo camino. Te explicamos las alternativas reales.",
  },
  {
    number: "05",
    title: "Plan",
    text: "Definimos juntos el orden, los tiempos y lo que puedes esperar de cada etapa.",
  },
]

export function DiagnosticSection() {
  return (
    <section id="proceso" className="border-y hairline bg-white/50 py-28 sm:py-36" aria-label="Nuestro proceso de diagnóstico">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionTag code="PLAN / 03" className="mb-8" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display text-[clamp(2.2rem,6vw,4rem)]">
                No empezamos
                <br />
                por el tratamiento.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mb-14 mt-6 max-w-sm text-base leading-relaxed text-clinical">
                Empezamos por entender tu boca. Cada paso alimenta al siguiente; nada se decide en el aire.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ProcessSteps steps={steps} />
            </Reveal>
          </div>

          <div className="lg:pt-24">
            <Reveal delay={0.15}>
              <DentalArch caption="Distintas zonas cumplen funciones distintas. Por eso distintos problemas requieren distintas soluciones." />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
