import { useMemo, useState } from "react"
import { Reveal } from "../components/motion/Reveal"
import { SectionTag } from "../components/ui/SectionTag"
import { buildWhatsAppMessage, whatsAppLink, type ScheduleForm } from "../lib/whatsapp"

const reasons = [
  "Dolor",
  "Limpieza",
  "Revisión",
  "Mejorar mi sonrisa",
  "Ortodoncia",
  "Implante",
  "Diente roto",
  "Otro",
]

const preferences = ["Mañana", "Tarde", "Cualquier horario"]

const initial: ScheduleForm = {
  name: "",
  reason: "",
  firstVisit: "",
  preference: "",
  details: "",
}

export function Schedule() {
  const [form, setForm] = useState<ScheduleForm>(initial)
  const [submitted, setSubmitted] = useState(false)

  const message = useMemo(() => buildWhatsAppMessage(form), [form])
  const valid = form.name.trim().length > 1 && form.reason !== ""

  function set<K extends keyof ScheduleForm>(key: K, value: ScheduleForm[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) {
      setSubmitted(true)
      return
    }
    window.open(whatsAppLink(message), "_blank", "noopener")
  }

  const radioClass = (active: boolean) =>
    `cursor-pointer border px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
      active ? "border-mineral bg-mineral text-ceramic" : "hairline text-graphite/80 hover:border-mineral hover:text-mineral"
    }`

  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 pt-36 sm:px-8 sm:pt-44">
      <Reveal>
        <SectionTag code="READY / AGENDAR" className="mb-8" />
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="display max-w-4xl text-[clamp(2.4rem,7.5vw,4.8rem)]">
          Empecemos
          <br />
          por entender qué necesitas.
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-7 max-w-md text-base leading-relaxed text-clinical">
          Cuéntanos un poco y te contactamos por WhatsApp para coordinar tu valoración. Dos minutos, sin
          compromiso.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            <div>
              <label htmlFor="nombre" className="tag mb-3 block !text-graphite">
                01 / Tu nombre
              </label>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={submitted && form.name.trim().length < 2}
                aria-describedby={submitted && form.name.trim().length < 2 ? "error-nombre" : undefined}
                placeholder="¿Cómo te llamas?"
                className="w-full border-b border-graphite/25 bg-transparent py-3 font-display text-2xl outline-none transition-colors placeholder:text-graphite/30 focus:border-mineral"
              />
              {submitted && form.name.trim().length < 2 && (
                <p id="error-nombre" className="mt-2 text-sm text-terracotta">
                  Necesitamos tu nombre para saludarte bien.
                </p>
              )}
            </div>

            <fieldset>
              <legend className="tag mb-4 !text-graphite">02 / Motivo principal</legend>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-required="true">
                {reasons.map((r) => (
                  <label key={r} className={radioClass(form.reason === r)}>
                    <input
                      type="radio"
                      name="motivo"
                      value={r}
                      checked={form.reason === r}
                      onChange={() => set("reason", r)}
                      className="sr-only"
                    />
                    {r}
                  </label>
                ))}
              </div>
              {submitted && !form.reason && (
                <p className="mt-2 text-sm text-terracotta">Elige el motivo que más se acerque.</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="tag mb-4 !text-graphite">03 / ¿Es tu primera visita?</legend>
              <div className="flex gap-2">
                {[
                  { value: "si", label: "Sí" },
                  { value: "no", label: "No" },
                ].map((opt) => (
                  <label key={opt.value} className={radioClass(form.firstVisit === opt.value)}>
                    <input
                      type="radio"
                      name="primera-visita"
                      value={opt.value}
                      checked={form.firstVisit === opt.value}
                      onChange={() => set("firstVisit", opt.value)}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="tag mb-4 !text-graphite">04 / Preferencia de horario</legend>
              <div className="flex flex-wrap gap-2">
                {preferences.map((p) => (
                  <label key={p} className={radioClass(form.preference === p)}>
                    <input
                      type="radio"
                      name="preferencia"
                      value={p}
                      checked={form.preference === p}
                      onChange={() => set("preference", p)}
                      className="sr-only"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="detalles" className="tag mb-3 block !text-graphite">
                05 / Cuéntanos brevemente qué ocurre
              </label>
              <textarea
                id="detalles"
                rows={4}
                value={form.details}
                onChange={(e) => set("details", e.target.value)}
                placeholder="Por ejemplo: hace meses siento sensibilidad al tomar algo frío…"
                className="w-full resize-y border hairline bg-white/60 p-4 text-base leading-relaxed outline-none transition-colors placeholder:text-graphite/30 focus:border-mineral"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 bg-graphite px-8 py-4 text-sm font-semibold text-ceramic transition-colors duration-300 hover:bg-mineral sm:w-auto"
            >
              Enviar por WhatsApp
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <p className="text-xs text-clinical">
              Al enviar se abrirá WhatsApp con tu mensaje ya escrito. Tú decides si lo mandas.
            </p>
          </form>
        </Reveal>

        {/* Live message preview */}
        <Reveal delay={0.18}>
          <aside className="lg:sticky lg:top-28" aria-label="Vista previa de tu mensaje">
            <div className="border hairline bg-white/70 p-6">
              <p className="tag mb-4 flex items-center justify-between !text-[10px]">
                Vista previa del mensaje
                <span aria-hidden="true" className="text-mineral">MSG / 01</span>
              </p>
              <p className="font-display text-lg italic leading-relaxed text-graphite/85" aria-live="polite">
                “{message}”
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-clinical">
              Este mensaje llega directo a la clínica. Te respondemos en horario de atención para coordinar
              fecha y hora.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
