export type PhotoTone = "enamel" | "bone" | "warm" | "mineral" | "graphite" | "sage"

export interface Concern {
  id: string
  label: string
  note: string
  treatments: string[]
  tone: PhotoTone
  image: string
}

export const concerns: Concern[] = [
  {
    id: "dolor",
    label: "Siento dolor",
    note: "El dolor es información. Puede venir de una caries, una fractura o sensibilidad. Lo primero es localizar el origen antes de tocar nada.",
    treatments: ["consulta-diagnostico", "endodoncia", "resinas"],
    tone: "mineral",
    image: "/images/concern-dolor.webp",
  },
  {
    id: "mejorar-sonrisa",
    label: "Quiero mejorar mi sonrisa",
    note: "Puede ser un buen punto de partida para explorar opciones estéticas: desde un blanqueamiento hasta un plan integral. Cada rostro pide algo distinto.",
    treatments: ["blanqueamiento", "carillas", "ortodoncia", "diseno-de-sonrisa"],
    tone: "warm",
    image: "/images/concern-sonrisa.webp",
  },
  {
    id: "manchas",
    label: "Mis dientes están manchados",
    note: "No todas las manchas son iguales: algunas se van con limpieza, otras responden al blanqueamiento y otras piden algo más. Primero hay que verlas de cerca.",
    treatments: ["limpieza-dental", "blanqueamiento", "carillas"],
    tone: "enamel",
    image: "/images/concern-manchas.webp",
  },
  {
    id: "diente-roto",
    label: "Tengo un diente roto",
    note: "Según el tamaño de la fractura, puede resolverse con una resina, una carilla o una corona. La radiografía nos dice qué tan profundo llega.",
    treatments: ["resinas", "carillas", "coronas"],
    tone: "bone",
    image: "/images/concern-roto.webp",
  },
  {
    id: "faltan-piezas",
    label: "Me faltan piezas",
    note: "Existen varias formas de reponer una pieza. Puede ser un buen punto de partida para explorar implantes o prótesis, según tu caso.",
    treatments: ["implantes", "protesis", "consulta-diagnostico"],
    tone: "graphite",
    image: "/images/concern-piezas.webp",
  },
  {
    id: "chuecos",
    label: "Mis dientes están chuecos",
    note: "Puede ser un buen punto de partida para explorar ortodoncia o alineadores. El estudio de tu mordida define cuál conviene.",
    treatments: ["ortodoncia", "alineadores"],
    tone: "sage",
    image: "/images/concern-chuecos.webp",
  },
  {
    id: "limpieza",
    label: "Quiero una limpieza",
    note: "Una higiene profesional es también una oportunidad de revisar todo lo demás. Salimos de dudas en una sola visita.",
    treatments: ["limpieza-dental", "prevencion"],
    tone: "enamel",
    image: "/images/concern-limpieza.webp",
  },
  {
    id: "no-se",
    label: "No sé qué necesito",
    note: "Es más común de lo que crees, y es exactamente para eso que existe la valoración: observar, explicarte y decidir juntos.",
    treatments: ["consulta-diagnostico"],
    tone: "bone",
    image: "/images/concern-nose.webp",
  },
]
