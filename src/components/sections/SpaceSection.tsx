import { Reveal } from "../motion/Reveal"
import { ClinicalPhoto } from "../ui/ClinicalPhoto"
import { SectionTag } from "../ui/SectionTag"

export function SpaceSection() {
  return (
    <section className="py-28 sm:py-36" aria-label="El espacio de la clínica">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="STUDIO / EL ESPACIO" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6vw,4rem)]">
            Un espacio clínico
            <br />
            que no se siente frío.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-6 gap-3 sm:gap-5">
          <Reveal className="col-span-6 lg:col-span-4">
            <ClinicalPhoto
              src="/images/clinic-01.webp"
              alt="Recepción de la clínica con materiales cálidos y luz natural"
              tone="bone"
              ratio="wide"
              label="RECEPCIÓN"
              code="SP / 01"
            />
          </Reveal>
          <Reveal delay={0.08} className="col-span-3 lg:col-span-2">
            <ClinicalPhoto
              src="/images/clinic-02.webp"
              alt="Lámpara del sillón dental apagada, en reposo"
              tone="sage"
              ratio="auto"
              label="LÁMPARA"
              code="SP / 02"
              className="h-full min-h-40"
            />
          </Reveal>
          <Reveal delay={0.05} className="col-span-3 lg:col-span-2">
            <ClinicalPhoto
              src="/images/clinic-03.webp"
              alt="Instrumental de exploración preparado sobre bandeja"
              tone="enamel"
              ratio="square"
              label="INSTRUMENTAL"
              code="SP / 03"
            />
          </Reveal>
          <Reveal delay={0.1} className="col-span-3 lg:col-span-2">
            <ClinicalPhoto
              src="/images/clinic-04.webp"
              alt="Sillón dental en un consultorio con acabados de madera clara"
              tone="warm"
              ratio="square"
              label="CONSULTORIO"
              code="SP / 04"
            />
          </Reveal>
          <Reveal delay={0.15} className="col-span-6 lg:col-span-2">
            <ClinicalPhoto
              src="/images/clinic-05.webp"
              alt="Muestras de cerámica dental ordenadas sobre una superficie limpia"
              tone="graphite"
              ratio="square"
              label="MATERIALES"
              code="SP / 05"
              className="h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-md text-base leading-relaxed text-clinical">
            Superficies limpias, luz controlada y materiales que envejecen bien. Todo lo que ves está
            pensado para trabajar con precisión — y para que tú estés tranquilo mientras tanto.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
