import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { FloatingCta } from "./FloatingCta"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:bg-graphite focus:px-4 focus:py-2 focus:text-ceramic"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  )
}
