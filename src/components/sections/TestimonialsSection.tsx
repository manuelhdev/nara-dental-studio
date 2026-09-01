import { testimonials } from "../../data/testimonials"
import { Reveal } from "../motion/Reveal"
import { SectionTag } from "../ui/SectionTag"

export function TestimonialsSection() {
  return (
    <section className="bg-white/60 py-28 sm:py-36" aria-label="Testimonios de pacientes">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionTag code="HEARD / LO QUE ESCUCHAMOS" className="mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display max-w-2xl text-[clamp(2rem,5.5vw,3.6rem)]">
            Lo que más escuchamos
            <br />
            no es “qué bonito”.
          </h2>
        </Reveal>

        <div className="mt-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.05}>
              <blockquote className="border-t hairline py-10 first:border-t-0 sm:py-12">
                <p className="display max-w-3xl text-[clamp(1.4rem,3.4vw,2.2rem)] italic leading-snug">
                  “{t.quote}”
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-terracotta/70" />
                  <cite className="tag not-italic">{t.author}</cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
