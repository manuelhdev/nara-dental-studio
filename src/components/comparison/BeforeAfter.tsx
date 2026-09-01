import { useCallback, useRef, useState } from "react"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import type { PhotoTone } from "../../data/concerns"

interface BeforeAfterProps {
  beforeSrc?: string
  afterSrc?: string
  beforeTone?: PhotoTone
  afterTone?: PhotoTone
  alt: string
  className?: string
}

/** Accessible before/after comparator: drag, touch and keyboard. */
export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeTone = "bone",
  afterTone = "enamel",
  alt,
  className = "",
}: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    update(e.clientX)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5))
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5))
    else if (e.key === "Home") setPos(0)
    else if (e.key === "End") setPos(100)
    else return
    e.preventDefault()
  }

  return (
    <div
      ref={ref}
      className={`relative select-none touch-none overflow-hidden ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* After (base layer) */}
      <ClinicalPhoto src={afterSrc} alt={`${alt} — después`} tone={afterTone} ratio="landscape" marks={false} />

      {/* Before (clipped layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden="true">
        <ClinicalPhoto src={beforeSrc} alt="" tone={beforeTone} ratio="landscape" marks={false} className="h-full" />
      </div>

      {/* Labels */}
      <span
        className="tag absolute bottom-3 left-3 bg-graphite/70 px-2 py-1 !text-[9px] !text-ceramic transition-opacity duration-200"
        style={{ opacity: pos > 12 ? 1 : 0 }}
        aria-hidden="true"
      >
        ANTES
      </span>
      <span
        className="tag absolute bottom-3 right-3 bg-graphite/70 px-2 py-1 !text-[9px] !text-ceramic transition-opacity duration-200"
        style={{ opacity: pos < 88 ? 1 : 0 }}
        aria-hidden="true"
      >
        DESPUÉS
      </span>

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Comparador antes y después: ${alt}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% antes visible`}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 -ml-5 w-10 cursor-ew-resize outline-offset-0"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ceramic shadow-[0_0_6px_rgba(34,35,33,0.35)]" />
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-graphite/20 bg-ceramic text-[10px] text-graphite shadow-[0_2px_10px_rgba(34,35,33,0.18)]">
          <span aria-hidden="true">◂▸</span>
        </span>
      </div>
    </div>
  )
}
