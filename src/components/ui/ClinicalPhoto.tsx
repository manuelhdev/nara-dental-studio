import { useState } from "react"
import type { ReactNode } from "react"
import type { PhotoTone } from "../../data/concerns"

const toneBackgrounds: Record<PhotoTone, string> = {
  enamel:
    "radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 55%), linear-gradient(135deg, #fdfcf8 0%, #f2eee5 38%, #e8e3d8 64%, #f5f3ec 100%)",
  bone:
    "radial-gradient(110% 80% at 70% 15%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 50%), linear-gradient(150deg, #f0ece3 0%, #e2dcd0 55%, #eae6de 100%)",
  warm:
    "radial-gradient(100% 80% at 25% 25%, rgba(255,250,244,0.8) 0%, rgba(255,255,255,0) 55%), linear-gradient(140deg, #f3ece5 0%, #e7d9ce 48%, #d9c3b6 100%)",
  mineral:
    "radial-gradient(110% 85% at 30% 15%, rgba(170,183,175,0.35) 0%, rgba(170,183,175,0) 55%), linear-gradient(150deg, #4d6157 0%, #3d4e46 55%, #35443d 100%)",
  graphite:
    "radial-gradient(110% 85% at 70% 10%, rgba(170,183,175,0.18) 0%, rgba(170,183,175,0) 50%), linear-gradient(150deg, #2f302e 0%, #222321 60%, #1b1c1a 100%)",
  sage:
    "radial-gradient(100% 80% at 30% 20%, rgba(247,246,242,0.55) 0%, rgba(247,246,242,0) 55%), linear-gradient(140deg, #c4cec7 0%, #aab7af 55%, #99a89f 100%)",
}

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
  auto: "",
} as const

interface ClinicalPhotoProps {
  src?: string
  alt: string
  tone?: PhotoTone
  label?: string
  code?: string
  ratio?: keyof typeof ratios
  marks?: boolean
  className?: string
  children?: ReactNode
}

/** Photo frame that renders an art-directed clinical placeholder when the asset is missing. */
export function ClinicalPhoto({
  src,
  alt,
  tone = "enamel",
  label,
  code,
  ratio = "landscape",
  marks = true,
  className = "",
  children,
}: ClinicalPhotoProps) {
  const [failed, setFailed] = useState(false)
  const dark = tone === "mineral" || tone === "graphite"
  const line = dark ? "rgba(247,246,242,0.28)" : "rgba(34,35,33,0.16)"
  const text = dark ? "text-ceramic/60" : "text-graphite/50"

  return (
    <figure
      className={`relative overflow-hidden ${ratios[ratio]} ${className}`}
      role={failed || !src ? "img" : undefined}
      aria-label={failed || !src ? alt : undefined}
    >
      <div aria-hidden="true" className="absolute inset-0" style={{ background: toneBackgrounds[tone] }}>
        {/* Enamel-like soft sheen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 50% 62%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        {/* Arch curve motif */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <path d="M60 260 C 80 120, 160 70, 200 70 C 240 70, 320 120, 340 260" fill="none" stroke={line} strokeWidth="1" />
          <path d="M90 260 C 106 150, 168 108, 200 108 C 232 108, 294 150, 310 260" fill="none" stroke={line} strokeWidth="0.6" opacity="0.6" />
        </svg>
      </div>

      {src && !failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {marks && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute left-3 top-3 h-3 w-3 border-l border-t" style={{ borderColor: line }} />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r" style={{ borderColor: line }} />
          <span className="absolute left-[38%] top-0 h-full w-px" style={{ backgroundColor: line, opacity: 0.45 }} />
          <span className="absolute left-0 top-[64%] h-px w-full" style={{ backgroundColor: line, opacity: 0.45 }} />
          {code && (
            <span className={`tag absolute right-3 top-3 !text-[9px] ${text}`}>{code}</span>
          )}
          {label && (
            <span className={`tag absolute bottom-3 left-3 !text-[9px] ${text}`}>{label}</span>
          )}
        </div>
      )}

      {children}
    </figure>
  )
}
