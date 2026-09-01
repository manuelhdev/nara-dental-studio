import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { useRef, useState } from "react"
import { Reveal } from "../motion/Reveal"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import { SectionTag } from "../ui/SectionTag"
import type { PhotoTone } from "../../data/concerns"

const facets = [
  { word: "Forma", note: "El contorno que define el carácter de cada diente." },
  { word: "Color", note: "No un blanco: un tono que pertenece a tu rostro." },
  { word: "Textura", note: "Las microirregularidades que hacen real una superficie." },
  { word: "Proporción", note: "La relación entre piezas, labios y sonrisa." },
  { word: "Naturalidad", note: "Cuando todo lo anterior deja de notarse." },
]

const details: { tag: string; tone: PhotoTone; src: string; alt: string }[] = [
  { tag: "TEXTURE", tone: "enamel", src: "/images/detail-texture.webp", alt: "Macro de la textura superficial del esmalte" },
  { tag: "TRANSLUCENCY", tone: "bone", src: "/images/detail-translucency.webp", alt: "Translucidez del borde incisal de un diente natural" },
  { tag: "SHAPE", tone: "warm", src: "/images/detail-shape.webp", alt: "Contorno y forma de incisivos centrales" },
  { tag: "COLOR", tone: "sage", src: "/images/detail-color.webp", alt: "Guía de color cerámica junto a dientes naturales" },
]

export function AestheticSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(facets.length - 1, Math.floor(v * facets.length)))
  })

  return (
    <section className="bg-bone py-28 sm:py-36" aria-label="Estética dental natural">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="CRAFT / ESTÉTICA" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6vw,4rem)]">
            Natural
            <br />
            sigue siendo la meta.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-clinical">
            La odontología estética no debería hacer que todos sonrían igual. Un resultado que se ve bien
            depende de capas que casi nadie nombra.
          </p>
        </Reveal>

        {/* Macro details with editorial annotations */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {details.map((d, i) => (
            <Reveal key={d.tag} delay={i * 0.07}>
              <figure className="group">
                <ClinicalPhoto src={d.src} alt={d.alt} tone={d.tone} ratio="portrait" marks={false} className="transition-transform duration-700 group-hover:scale-[1.015]" />
                <figcaption className="tag mt-3 flex items-center gap-2 !text-[10px]">
                  <span aria-hidden="true" className="h-px w-4 bg-terracotta/70" />
                  {d.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Layered concepts on scroll */}
      {reduce ? (
        <div className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
          <ul className="space-y-6 border-t hairline pt-10">
            {facets.map((f, i) => (
              <li key={f.word} className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                <span className="tag w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-3xl sm:text-4xl">{f.word}</span>
                <span className="text-sm text-clinical">{f.note}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div ref={ref} className="relative mt-10 h-[320svh]">
          <div className="sticky top-0 flex h-svh items-center overflow-hidden">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
              <div>
                <p className="tag mb-6" aria-hidden="true">
                  CAPA {String(active + 1).padStart(2, "0")} / {String(facets.length).padStart(2, "0")}
                </p>
                <div aria-live="polite">
                  {facets.map((f, i) => (
                    <motion.div
                      key={f.word}
                      className="absolute"
                      initial={false}
                      animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : active > i ? -18 : 18 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      style={{ pointerEvents: active === i ? "auto" : "none" }}
                    >
                      <h3 className="display text-[clamp(3rem,9vw,6rem)] text-graphite">{f.word}</h3>
                      <p className="mt-4 max-w-sm text-base text-clinical">{f.note}</p>
                    </motion.div>
                  ))}
                </div>
                {/* Progress marks */}
                <div className="mt-56 flex gap-2" aria-hidden="true">
                  {facets.map((f, i) => (
                    <span
                      key={f.word}
                      className={`h-px w-10 transition-colors duration-300 ${i <= active ? "bg-mineral" : "bg-graphite/15"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <ClinicalPhoto
                  src="/images/smile-natural.webp"
                  alt="Sonrisa parcial natural con luz suave de estudio"
                  tone={active < 2 ? "warm" : "enamel"}
                  ratio="portrait"
                  label="NATURAL / REF"
                  code={`L-${String(active + 1).padStart(2, "0")}`}
                  className="mx-auto max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
