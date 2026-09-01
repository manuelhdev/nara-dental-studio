import { caseDisclaimer, type ClinicalCase } from "../../data/cases"
import { BeforeAfter } from "../comparison/BeforeAfter"

interface CaseFileProps {
  clinicalCase: ClinicalCase
}

/** A case presented as a clinical dossier, not a gallery item. */
export function CaseFile({ clinicalCase: c }: CaseFileProps) {
  return (
    <article className="border hairline bg-white/60">
      <header className="flex items-baseline justify-between gap-4 border-b hairline px-5 py-4 sm:px-7">
        <p className="tag !text-mineral">CASE / {c.number}</p>
        <p className="tag !text-[9px]">{c.category}</p>
      </header>

      <div className="px-5 pt-5 sm:px-7 sm:pt-6">
        <h3 className="display text-2xl sm:text-3xl">{c.title}</h3>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="tag mb-1.5 !text-[9px]">Problema</dt>
            <dd className="leading-relaxed text-clinical">{c.problem}</dd>
          </div>
          <div>
            <dt className="tag mb-1.5 !text-[9px]">Objetivo</dt>
            <dd className="leading-relaxed text-clinical">{c.objective}</dd>
          </div>
          <div>
            <dt className="tag mb-1.5 !text-[9px]">Tratamiento</dt>
            <dd className="leading-relaxed text-clinical">{c.treatment}</dd>
          </div>
        </dl>
      </div>

      <div className="p-5 sm:p-7">
        <BeforeAfter
          beforeSrc={c.beforeImage}
          afterSrc={c.afterImage}
          beforeTone={c.beforeTone}
          afterTone={c.afterTone}
          alt={c.title}
        />
        <p className="mt-4 text-sm leading-relaxed text-graphite">
          <span className="tag mr-2 !text-[9px] !text-mineral">Resultado</span>
          {c.result}
        </p>
        <p className="mt-3 border-t hairline pt-3 text-xs italic text-clinical">{caseDisclaimer}</p>
      </div>
    </article>
  )
}
