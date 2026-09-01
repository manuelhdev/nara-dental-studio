import { ProcessSteps } from "../diagnostic/ProcessSteps"
import { Reveal } from "../motion/Reveal"
import { Button } from "../ui/Button"
import { SectionTag } from "../ui/SectionTag"

const steps = [
  { number: "01", title: "Llegas", text: "Nos cuentas qué te preocupa. Con tus palabras, sin tecnicismos." },
  { number: "02", title: "Revisamos", text: "Realizamos una valoración completa, con calma." },
  { number: "03", title: "Explicamos", text: "Te mostramos qué encontramos, en pantalla y en lenguaje claro." },
  { number: "04", title: "Opciones", text: "Hablamos de alternativas reales, con sus alcances y diferencias." },
  {
    number: "05",
    title: "Tú decides",
    text: "Planeamos contigo los siguientes pasos, a tu ritmo.",
    emphasis: "Sin empezar tratamientos que no entiendes.",
  },
]

export function FirstVisitSection() {
  return (
    <section className="border-y hairline bg-bone/60 py-28 sm:py-36" aria-label="Cómo es la primera visita">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTag code="VISIT / PRIMERA VEZ" className="mb-8" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(2.2rem,6vw,4rem)]">
              Saber qué va a pasar
              <br />
              también da tranquilidad.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-clinical">
              Si hace años que no visitas al dentista, o si te da ansiedad, esto es exactamente lo que
              ocurre en tu primera cita. Ni más, ni menos.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9">
              <Button to="/primera-visita" variant="outline">
                Leer la guía completa
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ProcessSteps steps={steps} />
        </Reveal>
      </div>
    </section>
  )
}
