import { useState } from "react"

interface ToothGroup {
  id: string
  label: string
  note: string
}

const groups: ToothGroup[] = [
  { id: "incisivos", label: "Incisivos", note: "Cortan. Son los protagonistas de la sonrisa." },
  { id: "caninos", label: "Caninos", note: "Guían la mordida al mover la mandíbula." },
  { id: "premolares", label: "Premolares", note: "Transición entre cortar y triturar." },
  { id: "molares", label: "Molares", note: "Trituran. Soportan la mayor carga." },
]

// Tooth index (0–15, left to right) → anatomical group
function groupOf(i: number): string {
  const d = Math.abs(i - 7.5)
  if (d <= 1.5) return "incisivos"
  if (d <= 2.5) return "caninos"
  if (d <= 4.5) return "premolares"
  return "molares"
}

interface Tooth {
  x: number
  y: number
  angle: number
  w: number
  h: number
  group: string
}

const teeth: Tooth[] = Array.from({ length: 16 }, (_, i) => {
  const t = (i / 15) * 2 - 1
  const angle = t * 75 * (Math.PI / 180)
  const g = groupOf(i)
  return {
    x: 100 + 74 * Math.sin(angle),
    y: 148 - 112 * Math.cos(angle),
    angle: (angle * 180) / Math.PI,
    w: g === "molares" ? 15 : g === "incisivos" ? 11 : 12.5,
    h: g === "molares" ? 19 : 22,
    group: g,
  }
})

interface DentalArchProps {
  className?: string
  caption?: string
}

/** Minimal technical diagram of an upper dental arch with anatomical zones. */
export function DentalArch({ className = "", caption }: DentalArchProps) {
  const [active, setActive] = useState<string | null>(null)
  const activeGroup = groups.find((g) => g.id === active)

  return (
    <div className={className}>
      <div className="relative border hairline bg-white/50 p-6 sm:p-10">
        <span aria-hidden="true" className="tag absolute left-4 top-4 !text-[9px]">
          ARCADA SUP. / FIG. 01
        </span>
        <span aria-hidden="true" className="absolute right-4 top-4 h-3 w-3 border-r border-t hairline" />

        <svg viewBox="0 0 200 170" className="mx-auto block w-full max-w-105" role="img" aria-label="Diagrama técnico de una arcada dental superior con incisivos, caninos, premolares y molares">
          {/* Reference geometry */}
          <line x1="100" y1="8" x2="100" y2="162" stroke="currentColor" strokeWidth="0.3" opacity="0.18" strokeDasharray="2 3" />
          <path d="M26 148 C 26 60, 62 22, 100 22 C 138 22, 174 60, 174 148" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.22" />
          {[0, 1].map((s) => (
            <line key={s} x1={s === 0 ? 14 : 186} y1="148" x2={s === 0 ? 30 : 170} y2="148" stroke="currentColor" strokeWidth="0.3" opacity="0.25" />
          ))}

          {teeth.map((tooth, i) => {
            const isActive = active === tooth.group
            return (
              <g
                key={i}
                transform={`translate(${tooth.x} ${tooth.y}) rotate(${tooth.angle})`}
                onMouseEnter={() => setActive(tooth.group)}
                onMouseLeave={() => setActive(null)}
                className="cursor-crosshair transition-opacity"
              >
                <rect
                  x={-tooth.w / 2}
                  y={-tooth.h / 2}
                  width={tooth.w}
                  height={tooth.h}
                  rx={tooth.w / 2.6}
                  fill={isActive ? "rgba(170,183,175,0.45)" : "rgba(247,246,242,0.7)"}
                  stroke={isActive ? "#44574F" : "rgba(34,35,33,0.45)"}
                  strokeWidth={isActive ? 0.9 : 0.55}
                  style={{ transition: "fill 240ms, stroke 240ms" }}
                />
                {tooth.group === "molares" && (
                  <line x1={-tooth.w / 4} y1="0" x2={tooth.w / 4} y2="0" stroke="rgba(34,35,33,0.3)" strokeWidth="0.4" />
                )}
              </g>
            )
          })}
        </svg>

        <p className="tag mt-2 min-h-9 text-center !normal-case !tracking-normal !text-clinical" aria-live="polite">
          {activeGroup ? (
            <>
              <span className="font-semibold uppercase tracking-[0.2em] text-mineral">{activeGroup.label}</span>
              <span className="mx-2 opacity-40">—</span>
              {activeGroup.note}
            </>
          ) : (
            "Pasa el cursor o usa los botones para explorar las zonas."
          )}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Zonas de la arcada dental">
        {groups.map((g) => (
          <button
            key={g.id}
            type="button"
            onMouseEnter={() => setActive(g.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(g.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(active === g.id ? null : g.id)}
            aria-pressed={active === g.id}
            className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
              active === g.id
                ? "border-mineral bg-mineral text-ceramic"
                : "hairline text-clinical hover:border-mineral hover:text-mineral"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {caption && <p className="mt-4 text-center text-sm text-clinical">{caption}</p>}
    </div>
  )
}
