import { Link } from "react-router-dom"
import { siteConfig } from "../../data/site"
import { whatsAppLink } from "../../lib/whatsapp"

const nav = [
  { to: "/tratamientos", label: "Tratamientos" },
  { to: "/casos", label: "Casos" },
  { to: "/clinica", label: "Clínica" },
  { to: "/primera-visita", label: "Primera visita" },
  { to: "/agendar", label: "Agendar" },
]

export function Footer() {
  return (
    <footer className="bg-graphite text-ceramic">
      {/* Arch-curve divider */}
      <svg aria-hidden="true" viewBox="0 0 1440 60" className="block w-full bg-ceramic" preserveAspectRatio="none">
        <path d="M0 60 C 360 8, 1080 8, 1440 60 Z" fill="#222321" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl">NARA</p>
            <p className="tag mt-1 !text-ceramic/50">Dental Studio</p>
            <p className="mt-5 text-sm text-ceramic/70">{siteConfig.descriptor}</p>
            <p className="mt-1 text-sm text-ceramic/70">{siteConfig.city}</p>
            <p className="mt-1 text-sm text-ceramic/50">{siteConfig.address}</p>
          </div>

          <nav aria-label="Pie de página">
            <p className="tag mb-4 !text-ceramic/50">Navegación</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ceramic/80 underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-300 hover:text-ceramic hover:decoration-sage"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="tag mb-4 !text-ceramic/50">Contacto</p>
            <ul className="space-y-2.5 text-sm text-ceramic/80">
              <li>
                <a href={whatsAppLink()} target="_blank" rel="noreferrer" className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-300 hover:text-ceramic hover:decoration-sage">
                  WhatsApp · {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${siteConfig.instagram}`} target="_blank" rel="noreferrer" className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-300 hover:text-ceramic hover:decoration-sage">
                  @{siteConfig.instagram}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-300 hover:text-ceramic hover:decoration-sage">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="tag mb-3 mt-7 !text-ceramic/50">Horario</p>
            <ul className="space-y-1 text-sm text-ceramic/70">
              {siteConfig.schedule.map((s) => (
                <li key={s.days} className="flex justify-between gap-4 border-b border-ceramic/10 pb-1">
                  <span>{s.days}</span>
                  <span>{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ceramic/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-display text-lg italic text-sage">Clarity before treatment.</p>
          <p className="text-xs text-ceramic/45">
            © 2026 {siteConfig.name} — Sitio conceptual de portafolio. Clínica ficticia.
          </p>
        </div>
      </div>
    </footer>
  )
}
