import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Variant = "primary" | "outline" | "onDark" | "ghost"

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300"

const variants: Record<Variant, string> = {
  primary: "bg-graphite text-ceramic hover:bg-mineral",
  outline: "border border-graphite/25 text-graphite hover:border-graphite hover:bg-graphite hover:text-ceramic",
  onDark: "bg-ceramic text-graphite hover:bg-bone",
  ghost: "text-graphite underline decoration-graphite/30 decoration-1 underline-offset-8 hover:decoration-mineral",
}

interface ButtonProps {
  to?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit"
  variant?: Variant
  arrow?: "right" | "down" | "external" | "none"
  className?: string
  children: ReactNode
}

const arrows = { right: "→", down: "↓", external: "↗", none: "" }

export function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  arrow = "right",
  className = "",
  children,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow !== "none" && (
        <span
          aria-hidden="true"
          className={`transition-transform duration-300 ${
            arrow === "down" ? "group-hover:translate-y-1" : "group-hover:translate-x-1"
          }`}
        >
          {arrows[arrow]}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith("http")
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
