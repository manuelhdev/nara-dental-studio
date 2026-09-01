import { Reveal } from "../motion/Reveal"
import { Button } from "../ui/Button"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import { SectionTag } from "../ui/SectionTag"

export function FinalCta() {
  return (
    <section className="bg-mineral-deep py-28 text-ceramic sm:py-36" aria-label="Agendar valoración">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionTag code="READY / 05" dark className="mb-10" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[clamp(2.4rem,7vw,4.6rem)]">
              Primero entender.
              <br />
              Después decidir.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ceramic/70">
              Agenda una valoración y conversemos sobre lo que necesitas. Sin compromiso, sin letras
              pequeñas.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9">
              <Button to="/agendar" variant="onDark">
                Agendar valoración
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ClinicalPhoto
            src="/images/smile-detail.webp"
            alt="Sonrisa parcial natural, encuadre cercano con luz suave"
            tone="warm"
            ratio="portrait"
            label="SONREÍR / 05"
            code="END"
            className="mx-auto max-w-sm"
          />
        </Reveal>
      </div>
    </section>
  )
}
