import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export interface Step {
  number: string
  title: string
  text: string
  emphasis?: string
}

interface ProcessStepsProps {
  steps: Step[]
  dark?: boolean
  className?: string
}

/** Numbered clinical process connected by a line that draws itself on scroll. */
export function ProcessSteps({ steps, dark = false, className = "" }: ProcessStepsProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const lineColor = dark ? "bg-ceramic/20" : "bg-graphite/12"
  const lineActive = dark ? "bg-sage" : "bg-mineral"
  const numColor = dark ? "text-sage" : "text-mineral"
  const textColor = dark ? "text-ceramic/70" : "text-clinical"
  const titleColor = dark ? "text-ceramic" : "text-graphite"

  return (
    <ol ref={ref} className={`relative ${className}`}>
      {/* Connecting line */}
      <span aria-hidden="true" className={`absolute bottom-4 left-[19px] top-4 w-px ${lineColor}`} />
      <motion.span
        aria-hidden="true"
        className={`absolute bottom-4 left-[19px] top-4 w-px origin-top ${lineActive}`}
        style={reduce ? { scaleY: 1 } : { scaleY }}
      />

      {steps.map((step) => (
        <li key={step.number} className="relative flex gap-6 pb-10 pl-0 last:pb-0 sm:gap-10">
          <span
            className={`tag z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border !text-[10px] ${
              dark ? "border-ceramic/30 bg-mineral-deep" : "hairline bg-ceramic"
            } ${numColor}`}
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div className="pt-1.5">
            <h3 className={`display text-xl sm:text-2xl ${titleColor}`}>
              <span className="sr-only">Paso {step.number}: </span>
              {step.title}
            </h3>
            <p className={`mt-2 max-w-md text-[15px] leading-relaxed ${textColor}`}>{step.text}</p>
            {step.emphasis && (
              <p className={`mt-3 font-display text-lg italic ${dark ? "text-sage" : "text-mineral"}`}>
                {step.emphasis}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
