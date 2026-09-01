import { motion, useReducedMotion } from "motion/react"
import { Button } from "../ui/Button"
import { ClinicalLens } from "../ui/ClinicalLens"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"

const EASE = [0.22, 1, 0.36, 1] as const

/** Opening: from blur to focus. A scan pass reveals the image, then the message. */
export function Hero() {
  const reduce = useReducedMotion()

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  )

  return (
    <section className="relative min-h-svh overflow-hidden" aria-label="Introducción">
      <div className="mx-auto grid min-h-svh max-w-7xl grid-cols-1 px-5 pt-16 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Clinical macro photograph */}
        <div className="relative order-1 mt-6 lg:order-2 lg:col-span-6 lg:mt-0 lg:flex lg:items-center">
          <motion.div
            className="relative w-full"
            initial={reduce ? false : { filter: "blur(14px)", scale: 1.02 }}
            animate={{ filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.4 }}
          >
            <ClinicalLens>
              <ClinicalPhoto
                src="/images/hero-clinical.webp"
                alt="Macrofotografía clínica del borde de incisivos naturales, con la translucidez del esmalte visible"
                tone="enamel"
                ratio="portrait"
                label="MACRO · ESMALTE NATURAL"
                code="N 25.79 / W 109.00"
                className="max-h-[52svh] w-full lg:max-h-none lg:aspect-[4/5]"
              >
                {/* Diagnostic interface overlay */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <span className="absolute left-[22%] top-[30%] h-14 w-14 rounded-full border border-graphite/20" />
                  <span className="absolute left-[22%] top-[30%] ml-14 mt-7 h-px w-16 bg-graphite/25" />
                  <span className="tag absolute left-[22%] top-[30%] ml-31 mt-5 !text-[9px]">A2 / 0.4</span>
                  <span className="tag absolute bottom-[26%] right-[10%] !text-[9px]">12.4 — 08.2</span>
                </div>
              </ClinicalPhoto>
            </ClinicalLens>

            {/* Scan pass */}
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-y-0 w-px bg-white shadow-[0_0_16px_2px_rgba(255,255,255,0.85)]"
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.95, ease: "easeInOut", delay: 0.15, times: [0, 0.12, 0.85, 1] }}
              />
            )}
          </motion.div>
        </div>

        {/* Message */}
        <div className="order-2 flex flex-col justify-center pb-24 pt-10 lg:order-1 lg:col-span-6 lg:pb-16 lg:pr-6">
          <motion.p
            className="tag mb-6 flex items-center gap-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-graphite/30" />
            OBSERVE / 01 — OBSERVAR
          </motion.p>

          <h1 className="display text-[clamp(2.6rem,8vw,4.9rem)]">
            {line("Saber qué necesitas", 0.85)}
            {line("cambia todo.", 0.97)}
          </h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-relaxed text-clinical sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.15 }}
          >
            Odontología basada en diagnóstico, explicación y un plan pensado para ti.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.25 }}
          >
            <Button to="/agendar">Agendar valoración</Button>
            <Button href="#proceso" variant="ghost" arrow="down">
              Conocer el proceso
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
