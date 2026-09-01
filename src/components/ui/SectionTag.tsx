interface SectionTagProps {
  code: string
  dark?: boolean
  className?: string
}

/** Small editorial coordinate, e.g. `DIAGNOSIS / 02`. */
export function SectionTag({ code, dark = false, className = "" }: SectionTagProps) {
  return (
    <p className={`tag flex items-center gap-3 ${dark ? "text-ceramic/60" : ""} ${className}`}>
      <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-ceramic/40" : "bg-graphite/30"}`} />
      {code}
    </p>
  )
}
