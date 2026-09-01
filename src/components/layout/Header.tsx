import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { siteConfig } from "../../data/site"

const navItems = [
  { to: "/tratamientos", label: "Tratamientos" },
  { to: "/casos", label: "Casos" },
  { to: "/clinica", label: "Clínica" },
  { to: "/primera-visita", label: "Primera visita" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b hairline bg-ceramic/85 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2.5" aria-label={`${siteConfig.name} — inicio`}>
          <span className="display text-[22px] font-medium tracking-tight">NARA</span>
          <span className="tag hidden !text-[9px] sm:inline">Dental Studio</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Principal">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-mineral after:transition-transform after:duration-300 ${
                      isActive
                        ? "text-mineral after:scale-x-100"
                        : "text-graphite/75 after:scale-x-0 hover:text-graphite hover:after:scale-x-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/agendar"
            className="group hidden items-center gap-2 border border-graphite/25 px-4 py-2 text-[13px] font-semibold transition-colors duration-300 hover:border-graphite hover:bg-graphite hover:text-ceramic md:inline-flex"
          >
            Agendar valoración
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-graphite transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-graphite transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menú móvil"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ceramic md:hidden"
          >
            <ul className="border-t hairline px-5 pt-4">
              {[{ to: "/", label: "Inicio" }, ...navItems].map((item, i) => (
                <li key={item.to} className="border-b hairline">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-5 ${isActive ? "text-mineral" : "text-graphite"}`
                    }
                  >
                    <span className="tag w-7" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-3xl">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="px-5 py-8">
              <Link
                to="/agendar"
                className="group flex min-h-12 w-full items-center justify-center gap-2 bg-graphite px-6 py-4 text-sm font-semibold text-ceramic"
              >
                Agendar valoración
                <span aria-hidden="true">→</span>
              </Link>
              <p className="tag mt-6 text-center !text-[10px]">{siteConfig.city}</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
