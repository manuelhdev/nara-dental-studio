import { motion, useReducedMotion } from "motion/react"

/**
 * Visual metaphor for intraoral scanning: a light line sweeps a technical
 * arch drawing, revealing a more precise annotated layer behind it.
 */
export function ScanReveal({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion()

  const arch = (
    <path
      d="M50 210 C 55 90, 115 45, 160 45 C 205 45, 265 90, 270 210"
      fill="none"
      strokeLinecap="round"
    />
  )

  return (
    <div className={`relative overflow-hidden border hairline bg-graphite ${className}`}>
      <span className="tag absolute left-4 top-4 z-10 !text-[9px] !text-ceramic/50">SCAN / IOS-04</span>
      <span className="tag absolute right-4 top-4 z-10 !text-[9px] !text-ceramic/50" aria-hidden="true">
        REC ●
      </span>

      <svg viewBox="0 0 320 240" className="block w-full" role="img" aria-label="Representación de un escaneo digital de la arcada dental">
        {/* Base layer: faint outline */}
        <g stroke="rgba(247,246,242,0.22)" strokeWidth="1.4">{arch}</g>
        <g stroke="rgba(247,246,242,0.12)" strokeWidth="0.8">
          <path d="M75 210 C 80 115, 125 78, 160 78 C 195 78, 240 115, 245 210" fill="none" />
        </g>

        {/* Precise layer, revealed by the scan mask */}
        <g mask={reduce ? undefined : "url(#scanMask)"}>
          <g stroke="#AAB7AF" strokeWidth="1.6">{arch}</g>
          <path d="M75 210 C 80 115, 125 78, 160 78 C 195 78, 240 115, 245 210" fill="none" stroke="rgba(170,183,175,0.55)" strokeWidth="0.9" />
          {/* Measurement annotations */}
          <g stroke="rgba(170,183,175,0.65)" strokeWidth="0.6">
            <line x1="160" y1="45" x2="160" y2="26" />
            <line x1="150" y1="26" x2="170" y2="26" />
            <line x1="50" y1="210" x2="50" y2="226" />
            <line x1="270" y1="210" x2="270" y2="226" />
            <line x1="50" y1="222" x2="270" y2="222" strokeDasharray="3 4" />
          </g>
          <g fill="#AAB7AF" fontSize="8" fontFamily="Manrope, sans-serif" letterSpacing="1.5">
            <text x="160" y="20" textAnchor="middle">A-01</text>
            <text x="160" y="234" textAnchor="middle">54.2 mm</text>
          </g>
          {/* Sample points */}
          {[
            [160, 45],
            [104, 62],
            [216, 62],
            [66, 130],
            [254, 130],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="none" stroke="#AAB7AF" strokeWidth="0.8" />
          ))}
        </g>

        {!reduce && (
          <>
            <defs>
              <mask id="scanMask">
                <motion.rect
                  x="0"
                  y="0"
                  height="240"
                  fill="white"
                  initial={{ width: 0 }}
                  whileInView={{ width: 320 }}
                  viewport={{ once: false, margin: "-15% 0px" }}
                  transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.6, repeatType: "loop" }}
                />
              </mask>
            </defs>
            {/* Scan line */}
            <motion.line
              y1="16"
              y2="224"
              stroke="#F7F6F2"
              strokeWidth="1"
              opacity="0.85"
              initial={{ x1: 0, x2: 0 }}
              whileInView={{ x1: 320, x2: 320 }}
              viewport={{ once: false, margin: "-15% 0px" }}
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.6, repeatType: "loop" }}
            />
          </>
        )}
      </svg>
      <p className="border-t border-ceramic/10 px-4 py-3 text-xs leading-relaxed text-ceramic/60">
        Escaneo intraoral — registra digitalmente la forma de tus dientes en determinados tratamientos.
      </p>
    </div>
  )
}
