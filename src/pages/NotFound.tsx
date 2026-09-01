import { Reveal } from "../components/motion/Reveal"
import { Button } from "../components/ui/Button"
import { SectionTag } from "../components/ui/SectionTag"

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 py-32 sm:px-8">
      <Reveal>
        <SectionTag code="NOT FOUND / 404" className="mb-10" />
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="display max-w-3xl text-[clamp(2.6rem,8vw,5rem)]">
          Esta ruta
          <br />
          no estaba en el plan.
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-7 max-w-sm text-base leading-relaxed text-clinical">
          Revisamos el expediente y esta página no existe. Volvamos a un punto conocido.
        </p>
      </Reveal>
      <Reveal delay={0.22}>
        <div className="mt-10">
          <Button to="/">Volver al inicio</Button>
        </div>
      </Reveal>
    </section>
  )
}
