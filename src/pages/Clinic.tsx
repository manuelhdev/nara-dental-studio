import { Reveal } from "../components/motion/Reveal"
import { FinalCta } from "../components/sections/FinalCta"
import { SpaceSection } from "../components/sections/SpaceSection"
import { TeamSection } from "../components/sections/TeamSection"
import { SectionTag } from "../components/ui/SectionTag"

const principles = [
  {
    title: "Diagnóstico primero",
    text: "Ningún plan comienza sin entender qué está pasando. Observar es la mitad del trabajo.",
  },
  {
    title: "Explicación en lenguaje claro",
    text: "Si sales de una cita sin entender qué tienes, fallamos nosotros, no tú.",
  },
  {
    title: "Higiene visible",
    text: "Los protocolos de esterilización no se presumen: se muestran. Puedes preguntar por ellos cuando quieras.",
  },
  {
    title: "Conservar antes que reemplazar",
    text: "Preferimos la opción que respeta más tu estructura natural, aunque no sea la más cara.",
  },
  {
    title: "Decisiones compartidas",
    text: "Te damos opciones reales con sus diferencias. La última palabra siempre es tuya.",
  },
]

export function Clinic() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <Reveal>
          <SectionTag code="STUDIO / LA CLÍNICA" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display max-w-4xl text-[clamp(2.6rem,8vw,5rem)]">
            Clínica por fuera.
            <br />
            Humana por dentro.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-clinical">
            NARA es un estudio dental en Los Mochis que trabaja con una idea simple: la precisión clínica y
            el trato humano no son opuestos. Son la misma cosa bien hecha.
          </p>
        </Reveal>
      </section>

      <section className="border-y hairline bg-white/50 py-24 sm:py-32" aria-label="Nuestra forma de trabajar">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionTag code="METHOD / PRINCIPIOS" className="mb-12" />
          </Reveal>
          <ol>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <li className="grid gap-3 border-b hairline py-8 first:border-t sm:grid-cols-[80px_320px_1fr] sm:gap-8 sm:py-10">
                  <span className="tag !text-mineral" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display text-2xl">{p.title}</h2>
                  <p className="max-w-lg text-[15px] leading-relaxed text-clinical">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <SpaceSection />
      <TeamSection />
      <FinalCta />
    </>
  )
}
