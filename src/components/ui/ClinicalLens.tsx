import { useReducedMotion } from "motion/react"
import { useRef, useState } from "react"
import type { ReactNode } from "react"

const LENS = 150
const ZOOM = 2.2

interface ClinicalLensProps {
  className?: string
  children: ReactNode
}

/**
 * Inspection lens: on fine-pointer devices a circular magnifier follows the
 * cursor over the composition. Hidden on touch and with reduced motion.
 */
export function ClinicalLens({ className = "", children }: ClinicalLensProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [size, setSize] = useState({ w: 1, h: 1 })

  const enabled =
    !reduce && typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches

  function handleMove(e: React.PointerEvent) {
    if (!enabled || !ref.current || e.pointerType !== "mouse") return
    const rect = ref.current.getBoundingClientRect()
    setSize({ w: rect.width, h: rect.height })
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={() => setPos(null)}
    >
      {children}
      {enabled && pos && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 overflow-hidden rounded-full border border-graphite/30 shadow-[0_2px_18px_rgba(34,35,33,0.14)]"
          style={{ width: LENS, height: LENS, left: pos.x - LENS / 2, top: pos.y - LENS / 2 }}
        >
          <div
            className="absolute origin-top-left"
            style={{
              width: size.w,
              height: size.h,
              transform: `translate(${-pos.x * ZOOM + LENS / 2}px, ${-pos.y * ZOOM + LENS / 2}px) scale(${ZOOM})`,
            }}
          >
            {children}
          </div>
          {/* Reticle */}
          <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-graphite/40" />
          <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-graphite/40" />
        </div>
      )}
      {enabled && pos && (
        <span
          aria-hidden="true"
          className="tag pointer-events-none absolute z-10 !text-[9px]"
          style={{ left: pos.x + LENS / 2 + 8, top: pos.y - 6 }}
        >
          ×{ZOOM}
        </span>
      )}
    </div>
  )
}
