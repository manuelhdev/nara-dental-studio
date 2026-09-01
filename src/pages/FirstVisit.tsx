import { ProcessSteps } from "../components/diagnostic/ProcessSteps"
import { Reveal } from "../components/motion/Reveal"
import { Button } from "../components/ui/Button"
import { SectionTag } from "../components/ui/SectionTag"

const practical = [
  { label: "Duración aproximada", value: "Entre 40 y 60 minutos. Sin prisa." },
  { label: "Qué llevar", value: "Solo a ti. Si tienes radiografías o estudios previos, tráelos: ayudan." },
  { label: "Qué ocurre", value: "Conversación, exploración completa y, si hace falta, estudios de apoyo." },
  {
    label: "Qué no ocurre necesariamente",
    value: "No siempre se hace un tratamiento el mismo día. Primero entendemos; después, si tú quieres, planeamos.",
  },
  {
    label: "Cómo se decide un tratamiento",
    value: "Con un diagnóstico claro, opciones explicadas y tu decisión. En ese orden.",
  },
]

const steps = [
  { number: "01", title: "Llegas", text: "Nos cuentas qué te preocupa, con tus palabras." },
  { number: "02", title: "Revisamos", text: "Realizamos una valoración completa de dientes y encías." },
  { number: "03", title: "Explicamos", text: "Te mostramos qué encontramos, en pantalla y sin tecnicismos." },
  { number: "04", title: "Opciones", text: "Hablamos de alternativas, tiempos y costos reales." },
  {
    number: "05",
    title: "Tú decides",
    text: "Planeamos contigo los siguientes pasos.",
    emphasis: "Sin empezar tratamientos que no entiendes.",
  },
]

const faqs = [
  {
    q: "¿Me van a hacer algo ese mismo día?",
    a: "Depende del motivo de consulta y de tu valoración. Una primera cita no implica automáticamente comenzar un tratamiento.",
  },
  {
    q: "¿Qué pasa si tengo miedo al dentista?",
    a: "Cuéntanoslo desde el inicio. Saberlo nos ayuda a adaptar la experiencia y explicarte cada paso.",
  },
  {
    q: "¿Puedo ir solo a preguntar?",
    a: "Sí. Venir a resolver dudas también es un motivo válido de consulta.",
  },
]

export function FirstVisit() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <SectionTag code="GUIDE / PRIMERA VISITA" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display max-w-4xl text-[clamp(2.6rem,8vw,5rem)]">
            Tu primera cita,
            <br />
            sin sorpresas.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-clinical">
            Una pequeña guía de lo que sí pasa, lo que no pasa y lo que puedes preguntar. Leerla toma dos
            minutos; la tranquilidad dura toda la cita.
          </p>
        </Reveal>
      </section>

      <section className="border-y hairline bg-white/50 py-20 sm:py-28" aria-label="Información práctica">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <dl>
            {practical.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.04}>
                <div className="grid gap-2 border-b hairline py-7 first:border-t sm:grid-cols-[260px_1fr] sm:gap-8">
                  <dt className="tag !text-mineral">{item.label}</dt>
                  <dd className="max-w-lg text-[15px] leading-relaxed text-graphite/85">{item.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24 sm:py-32" aria-label="Paso a paso de la visita">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <SectionTag code="STEPS / PASO A PASO" className="mb-12" />
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={steps} />
          </Reveal>
        </div>
      </section>

      <section className="border-t hairline py-24 sm:py-32" aria-label="Preguntas frecuentes">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <h2 className="display mb-10 text-3xl sm:text-4xl">Preguntas honestas, respuestas honestas.</h2>
          </Reveal>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <details className="group border hairline bg-white/60 px-5 py-4 open:bg-white/90">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-lg">
                    {faq.q}
                    <span aria-hidden="true" className="tag transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-clinical">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Button to="/agendar">Agendar valoración</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
