import type { PhotoTone } from "./concerns"

export interface ClinicalCase {
  id: string
  number: string
  category: string
  title: string
  problem: string
  objective: string
  treatment: string
  result: string
  beforeTone: PhotoTone
  afterTone: PhotoTone
  beforeImage: string
  afterImage: string
}

export const caseCategories = [
  "Todos",
  "Restauraciones",
  "Blanqueamiento",
  "Ortodoncia",
  "Carillas",
  "Implantes",
  "Rehabilitación",
] as const

export const clinicalCases: ClinicalCase[] = [
  {
    id: "case-001",
    number: "001",
    category: "Restauraciones",
    title: "Restauración estética anterior",
    problem: "Fractura leve en el borde de un incisivo central.",
    objective: "Recuperar la forma conservando la apariencia natural del diente.",
    treatment: "Restauración estética con resina estratificada.",
    result: "El borde recuperó su longitud y la textura se integró al esmalte vecino.",
    beforeTone: "bone",
    afterTone: "enamel",
    beforeImage: "/images/case-01-before.webp",
    afterImage: "/images/case-01-after.webp",
  },
  {
    id: "case-002",
    number: "002",
    category: "Blanqueamiento",
    title: "Aclaramiento conservador",
    problem: "Oscurecimiento gradual del tono por café y tiempo.",
    objective: "Aclarar el tono general sin perder naturalidad.",
    treatment: "Blanqueamiento supervisado en clínica y refuerzo en casa.",
    result: "Un tono más luminoso que sigue viéndose real en su rostro.",
    beforeTone: "warm",
    afterTone: "enamel",
    beforeImage: "/images/case-02-before.webp",
    afterImage: "/images/case-02-after.webp",
  },
  {
    id: "case-003",
    number: "003",
    category: "Ortodoncia",
    title: "Alineación de apiñamiento moderado",
    problem: "Apiñamiento anterior que dificultaba la higiene.",
    objective: "Alinear la arcada y facilitar la limpieza diaria.",
    treatment: "Ortodoncia con seguimiento mensual durante el proceso.",
    result: "Arcada alineada y una mordida más estable.",
    beforeTone: "sage",
    afterTone: "enamel",
    beforeImage: "/images/case-03-before.webp",
    afterImage: "/images/case-03-after.webp",
  },
  {
    id: "case-004",
    number: "004",
    category: "Carillas",
    title: "Corrección de proporción anterior",
    problem: "Desgaste de bordes y desproporción entre incisivos.",
    objective: "Devolver proporción sin que las piezas parezcan postizas.",
    treatment: "Carillas cerámicas de preparación mínima en cuatro piezas.",
    result: "Proporciones recuperadas, con translucidez similar al esmalte natural.",
    beforeTone: "bone",
    afterTone: "enamel",
    beforeImage: "/images/case-04-before.webp",
    afterImage: "/images/case-04-after.webp",
  },
  {
    id: "case-005",
    number: "005",
    category: "Implantes",
    title: "Reposición de pieza única",
    problem: "Ausencia de un premolar por fractura antigua.",
    objective: "Reponer la pieza sin tocar los dientes vecinos.",
    treatment: "Implante unitario con corona cerámica planificada digitalmente.",
    result: "Función y apariencia integradas con el resto de la arcada.",
    beforeTone: "graphite",
    afterTone: "enamel",
    beforeImage: "/images/case-05-before.webp",
    afterImage: "/images/case-05-after.webp",
  },
  {
    id: "case-006",
    number: "006",
    category: "Rehabilitación",
    title: "Rehabilitación por etapas",
    problem: "Desgaste generalizado y restauraciones antiguas desadaptadas.",
    objective: "Recuperar función y estética con un plan gradual y realista.",
    treatment: "Plan por fases combinando restauraciones y coronas.",
    result: "Una boca estable, tratada al ritmo que el paciente decidió.",
    beforeTone: "warm",
    afterTone: "enamel",
    beforeImage: "/images/case-06-before.webp",
    afterImage: "/images/case-06-after.webp",
  },
]

export const caseDisclaimer = "Resultados individuales. Cada caso requiere valoración."
