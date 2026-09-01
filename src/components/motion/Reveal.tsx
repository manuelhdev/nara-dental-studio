import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

/** Quiet fade + rise on first view. Static when the user prefers reduced motion. */
export function Reveal({ children, delay = 0, className = "", y = 22 }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
