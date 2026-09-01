import { siteConfig } from "../data/site"

export interface ScheduleForm {
  name: string
  reason: string
  firstVisit: string
  preference: string
  details: string
}

export function buildWhatsAppMessage(form: ScheduleForm): string {
  const parts: string[] = []
  parts.push(`Hola, soy ${form.name.trim() || "…"}. Quisiera agendar una valoración.`)
  if (form.firstVisit === "si") parts.push("Es mi primera visita.")
  if (form.reason) parts.push(`Motivo principal: ${form.reason.toLowerCase()}.`)
  if (form.details.trim()) parts.push(`Les cuento: ${form.details.trim()}`)
  if (form.preference) parts.push(`Preferencia de horario: ${form.preference.toLowerCase()}.`)
  return parts.join(" ")
}

export function whatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
