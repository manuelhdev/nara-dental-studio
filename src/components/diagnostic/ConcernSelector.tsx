import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { concerns } from "../../data/concerns"
import { getTreatment } from "../../data/treatments"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import { Button } from "../ui/Button"

/** Editorial list of patient concerns. Selecting one reveals possible paths, never a diagnosis. */
export function ConcernSelector() {
  const reduce = useReducedMotion()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const activeId = selected ?? hovered
  const active = concerns.find((c) => c.id === activeId) ?? null
  const selectedConcern = concerns.find((c) => c.id === selected) ?? null

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <ul className="border-t hairline">
        {concerns.map((concern, i) => {
          const isSelected = selected === concern.id
          const isActive = activeId === concern.id
          return (
            <li key={concern.id} className="border-b hairline">
              <button
                type="button"
                onClick={() => setSelected(isSelected ? null : concern.id)}
                onMouseEnter={() => setHovered(concern.id)}
                onMouseLeave={() => setHovered(null)}
                aria-expanded={isSelected}
                className="group flex w-full items-baseline gap-5 py-5 text-left sm:gap-8 sm:py-6"
              >
                <span
                  aria-hidden="true"
                  className={`tag w-8 shrink-0 transition-colors duration-300 ${
                    isActive ? "!text-mineral" : ""
                  }`}
                >
                  {isSelected ? "→" : String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`display text-2xl transition-all duration-300 sm:text-3xl md:text-4xl ${
                    isActive ? "translate-x-1.5 text-mineral sm:translate-x-2" : ""
                  } ${!reduce ? "" : "!translate-x-0"}`}
                >
                  {concern.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`mb-1.5 hidden h-px flex-1 self-end bg-mineral/50 transition-transform duration-500 sm:block ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </button>

              {/* Inline answer (mobile + desktop) */}
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden lg:hidden"
                  >
                    <ConcernAnswer id={concern.id} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>

      {/* Contextual panel (desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <ClinicalPhoto
            key={active?.id ?? "default"}
            src={active?.image ?? "/images/smile-detail.webp"}
            alt={active ? `Referencia visual: ${active.label.toLowerCase()}` : "Detalle macro de esmalte dental"}
            tone={active?.tone ?? "enamel"}
            ratio="landscape"
            code={active ? `REF / ${String(concerns.indexOf(active) + 1).padStart(2, "0")}` : "REF / 00"}
            label="NARA · Archivo visual"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active?.id ?? "none"}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              {active ? (
                <p className="text-[15px] leading-relaxed text-clinical">{active.note}</p>
              ) : (
                <p className="text-[15px] leading-relaxed text-clinical">
                  Elige lo que más se parezca a lo que sientes. No es un diagnóstico: es un punto de partida
                  para conversar.
                </p>
              )}
              {selectedConcern && <ConcernAnswer id={selectedConcern.id} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function ConcernAnswer({ id }: { id: string }) {
  const concern = concerns.find((c) => c.id === id)
  if (!concern) return null
  return (
    <div className="pb-6 pl-13 pr-2 pt-1 sm:pl-16 lg:p-0 lg:pt-6">
      <p className="mb-3 text-sm text-clinical lg:hidden">{concern.note}</p>
      <p className="tag mb-3 !text-mineral">Opciones que podemos evaluar contigo</p>
      <ul className="mb-5 space-y-1.5">
        {concern.treatments.map((slug) => {
          const t = getTreatment(slug)
          if (!t) return null
          return (
            <li key={slug}>
              <Link
                to={`/tratamientos/${slug}`}
                className="group inline-flex items-baseline gap-2 text-[15px] font-medium text-graphite"
              >
                <span aria-hidden="true" className="text-mineral transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="underline decoration-graphite/20 decoration-1 underline-offset-4 group-hover:decoration-mineral">
                  {t.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
      <p className="mb-4 text-xs text-clinical">
        Solo una valoración profesional puede confirmar qué necesitas.
      </p>
      <Button to="/agendar" variant="outline" className="min-h-10 px-5 py-2 text-xs">
        Agendar valoración
      </Button>
    </div>
  )
}
