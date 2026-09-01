import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

/** Editorial pause: the line that crosses the section becomes a route downwards. */
export function Manifesto() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] })
  const scaleY = useTransform(scrollYProgress, [0.35, 1], [0, 1])

  return (
    <section ref={ref} className="relative overflow-hidden py-32 sm:py-44" aria-label="Filosofía">
      {/* Horizontal hairline crossing the section */}
      <span aria-hidden="true" className="absolute left-0 top-1/2 h-px w-full bg-graphite/10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="DIAGNOSIS / 02" className="mb-10" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display max-w-4xl text-[clamp(2.4rem,7vw,4.6rem)]">
            Antes de tratar,
            <br />
            hay que entender.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-clinical">
            La mayoría de las dudas frente al dentista no son sobre tratamientos. Son sobre no saber qué
            está pasando. Por eso nuestro trabajo empieza mucho antes de tocar un diente.
          </p>
        </Reveal>

        {/* The line becomes a route */}
        <div aria-hidden="true" className="mt-16 flex justify-center lg:justify-start lg:pl-20">
          <motion.span
            className="block h-24 w-px origin-top bg-mineral/60 sm:h-32"
            style={reduce ? { scaleY: 1 } : { scaleY }}
          />
        </div>
      </div>
    </section>
  )
}
