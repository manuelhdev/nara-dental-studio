import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

/** Quiet persistent CTA: text link on desktop, slim bottom bar on mobile. */
export function FloatingCta() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (pathname === "/agendar") return null

  return (
    <>
      {/* Desktop */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-500 md:block ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <Link
          to="/agendar"
          className="group inline-flex items-center gap-2 border hairline bg-ceramic/90 px-5 py-3 text-[13px] font-semibold text-graphite backdrop-blur-sm transition-colors duration-300 hover:bg-graphite hover:text-ceramic"
        >
          Agendar valoración
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>
      </div>

      {/* Mobile bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t hairline bg-ceramic/92 backdrop-blur-sm transition-transform duration-500 md:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-stretch">
          <Link
            to="/agendar"
            className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-graphite"
          >
            Agendar valoración <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}
