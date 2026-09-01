export interface TreatmentFaq {
  q: string
  a: string
}

export interface Treatment {
  slug: string
  name: string
  group: string
  short: string
  what: string
  solves: string
  evaluation: string
  expect: string
  faqs: TreatmentFaq[]
}

export interface TreatmentGroup {
  id: string
  label: string
  intent: string
  description: string
}

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: "prevenir",
    label: "Prevenir",
    intent: "Cuidar lo que está sano",
    description:
      "Revisiones y limpiezas que ayudan a detectar a tiempo y evitar tratamientos mayores.",
  },
  {
    id: "reparar",
    label: "Reparar",
    intent: "Recuperar lo que se dañó",
    description:
      "Cuando un diente presenta caries, fractura o desgaste, existen distintas formas de restaurarlo.",
  },
  {
    id: "reponer",
    label: "Reponer",
    intent: "Sustituir lo que falta",
    description:
      "Alternativas para reemplazar piezas ausentes y recuperar función y estética.",
  },
  {
    id: "alinear",
    label: "Alinear",
    intent: "Corregir la posición",
    description:
      "Opciones para mejorar la alineación y la mordida, con distintos niveles de visibilidad y duración.",
  },
  {
    id: "mejorar",
    label: "Mejorar",
    intent: "Refinar la apariencia",
    description:
      "Tratamientos estéticos que buscan resultados naturales, no sonrisas idénticas.",
  },
]

export const treatments: Treatment[] = [
  {
    slug: "consulta-diagnostico",
    name: "Consulta y diagnóstico",
    group: "prevenir",
    short: "El punto de partida de cualquier plan.",
    what: "Una revisión completa en la que exploramos tu boca, escuchamos qué te preocupa y, cuando es necesario, tomamos estudios de apoyo.",
    solves: "La incertidumbre. Antes de hablar de tratamientos, necesitamos entender qué está pasando.",
    evaluation:
      "Exploración clínica, fotografía y radiografía digital cuando el caso lo requiere.",
    expect:
      "Salir de la cita sabiendo qué encontramos, qué opciones existen y qué pasos podrías seguir. Nada se decide ese día si no quieres.",
    faqs: [
      {
        q: "¿La primera consulta duele?",
        a: "No. Es una revisión visual y con instrumentos de exploración. Si algo pudiera generar molestia, te lo decimos antes.",
      },
      {
        q: "¿Me van a hacer algo ese mismo día?",
        a: "Depende del motivo de consulta y de tu valoración. Una primera cita no implica automáticamente comenzar un tratamiento.",
      },
    ],
  },
  {
    slug: "limpieza-dental",
    name: "Limpieza dental",
    group: "prevenir",
    short: "Remoción profesional de placa y sarro.",
    what: "Una higiene profesional que elimina placa y sarro en zonas que el cepillado no alcanza.",
    solves: "Acumulación de sarro, inflamación de encías y manchas superficiales.",
    evaluation:
      "Revisamos el estado de tus encías para definir el tipo de limpieza que necesitas.",
    expect:
      "Sensación de limpieza inmediata. Algunas personas presentan sensibilidad leve durante uno o dos días.",
    faqs: [
      {
        q: "¿Cada cuánto debo hacerme una limpieza?",
        a: "En general cada seis meses, aunque depende de cada boca. En tu valoración te damos una recomendación personalizada.",
      },
      {
        q: "¿La limpieza blanquea los dientes?",
        a: "Elimina manchas superficiales, pero no cambia el color natural del diente. Para eso existe el blanqueamiento.",
      },
    ],
  },
  {
    slug: "prevencion",
    name: "Odontología preventiva",
    group: "prevenir",
    short: "Detectar antes de que sea un problema.",
    what: "Revisiones periódicas, selladores y fluorización según el caso, con seguimiento de zonas de riesgo.",
    solves: "Caries incipientes, desgastes y problemas de encías detectados a tiempo.",
    evaluation: "Exploración periódica y comparación con registros anteriores.",
    expect: "Menos tratamientos mayores a largo plazo. La prevención es el tratamiento más barato que existe.",
    faqs: [
      {
        q: "¿Cada cuánto conviene una revisión?",
        a: "Para la mayoría de las personas, una o dos veces al año es suficiente. Cada boca es distinta.",
      },
    ],
  },
  {
    slug: "resinas",
    name: "Resinas",
    group: "reparar",
    short: "Restauraciones del color del diente.",
    what: "Restauraciones estéticas que reconstruyen zonas dañadas por caries o fracturas pequeñas, imitando el color del diente.",
    solves: "Caries, bordes fracturados y desgastes localizados.",
    evaluation: "Exploración y radiografía para conocer la extensión del daño.",
    expect:
      "Una restauración que se integra visualmente al diente. Su duración depende del tamaño, la mordida y los hábitos de cuidado.",
    faqs: [
      {
        q: "¿Se nota la resina?",
        a: "Trabajamos con capas y tonos para que se integre al diente. En zonas visibles cuidamos especialmente la textura y el color.",
      },
    ],
  },
  {
    slug: "coronas",
    name: "Coronas",
    group: "reparar",
    short: "Protección completa para dientes debilitados.",
    what: "Una cubierta que rodea por completo un diente debilitado o muy destruido para protegerlo y devolverle forma.",
    solves: "Dientes con tratamientos de conducto, fracturas amplias o gran pérdida de estructura.",
    evaluation: "Valoración clínica y radiográfica para confirmar que el diente puede conservarse.",
    expect:
      "El proceso suele requerir dos o más citas. El resultado busca integrarse en color y forma con los dientes vecinos.",
    faqs: [
      {
        q: "¿De qué material son las coronas?",
        a: "Trabajamos principalmente con cerámica. El material específico se decide según la zona y el caso.",
      },
    ],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    group: "reparar",
    short: "Conservar un diente en lugar de extraerlo.",
    what: "El tratamiento del interior del diente cuando el nervio está dañado o infectado, para poder conservarlo.",
    solves: "Dolor intenso, infecciones y caries profundas que alcanzan el nervio.",
    evaluation: "Radiografía y pruebas de sensibilidad para confirmar el diagnóstico.",
    expect:
      "Se realiza con anestesia local. En la mayoría de los casos alivia el dolor que originó la consulta.",
    faqs: [
      {
        q: "¿La endodoncia duele?",
        a: "Se realiza con anestesia. La mayoría de los pacientes la describe como similar a una restauración larga.",
      },
    ],
  },
  {
    slug: "extracciones",
    name: "Extracciones",
    group: "reparar",
    short: "Cuando conservar ya no es opción.",
    what: "La remoción de una pieza que no puede conservarse, siempre como última alternativa y con un plan para reponerla si es necesario.",
    solves: "Piezas con daño irreversible, restos radiculares o terceros molares problemáticos.",
    evaluation: "Radiografía y valoración clínica. Primero agotamos las opciones para conservar.",
    expect:
      "Procedimiento con anestesia local y molestias controlables los días posteriores, con indicaciones claras de cuidado.",
    faqs: [
      {
        q: "¿Siempre hay que reponer el diente extraído?",
        a: "No siempre, pero en muchos casos conviene para evitar movimientos de los dientes vecinos. Lo evaluamos contigo.",
      },
    ],
  },
  {
    slug: "implantes",
    name: "Implantes",
    group: "reponer",
    short: "Reponer una pieza desde la raíz.",
    what: "Una raíz artificial de titanio sobre la que se coloca una corona, para sustituir una pieza ausente.",
    solves: "La ausencia de una o varias piezas, sin desgastar dientes vecinos.",
    evaluation:
      "Estudios de imagen para valorar el hueso disponible y planear la posición del implante.",
    expect:
      "Es un proceso por etapas que toma algunos meses. El resultado busca función y apariencia cercanas a un diente natural.",
    faqs: [
      {
        q: "¿Cualquier persona puede recibir un implante?",
        a: "La mayoría sí, pero depende del hueso disponible y del estado de salud general. Por eso la valoración es indispensable.",
      },
    ],
  },
  {
    slug: "protesis",
    name: "Prótesis",
    group: "reponer",
    short: "Alternativas para varias piezas ausentes.",
    what: "Soluciones fijas o removibles para reponer varias piezas y recuperar masticación y estética.",
    solves: "Ausencias múltiples que afectan la función y la confianza al hablar o comer.",
    evaluation: "Valoración del estado de las piezas restantes, encías y hueso.",
    expect:
      "Existen varias alternativas con distintos alcances. Te explicamos las diferencias reales entre cada una.",
    faqs: [
      {
        q: "¿Prótesis o implantes?",
        a: "No compiten: a veces se combinan. La mejor opción depende de tu caso, tus prioridades y tu presupuesto.",
      },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    group: "alinear",
    short: "Corregir posición y mordida con brackets.",
    what: "El movimiento controlado de los dientes mediante brackets para corregir alineación y mordida.",
    solves: "Apiñamiento, espacios, mordidas que desgastan o dificultan la higiene.",
    evaluation: "Estudio de ortodoncia con fotografías, radiografías y análisis de mordida.",
    expect:
      "Un proceso gradual de meses con citas periódicas de ajuste. Los tiempos varían según cada caso.",
    faqs: [
      {
        q: "¿Hay edad límite para la ortodoncia?",
        a: "No. Con encías sanas, los dientes pueden moverse a cualquier edad.",
      },
    ],
  },
  {
    slug: "alineadores",
    name: "Alineadores invisibles",
    group: "alinear",
    short: "Ortodoncia removible y discreta.",
    what: "Guardas transparentes hechas a medida que se cambian por etapas para mover los dientes de forma gradual.",
    solves: "Casos de apiñamiento o espaciamiento donde se busca una alternativa discreta y removible.",
    evaluation:
      "Escaneo digital y análisis del caso para confirmar si los alineadores son adecuados para ti.",
    expect:
      "Se usan la mayor parte del día y se retiran para comer. No todos los casos son candidatos; eso se define en la valoración.",
    faqs: [
      {
        q: "¿Los alineadores funcionan igual que los brackets?",
        a: "En muchos casos sí, pero no en todos. Hay movimientos que se controlan mejor con brackets. Te lo decimos con honestidad.",
      },
    ],
  },
  {
    slug: "blanqueamiento",
    name: "Blanqueamiento",
    group: "mejorar",
    short: "Aclarar el tono conservando lo natural.",
    what: "Un procedimiento que aclara el tono de los dientes mediante geles aplicados en clínica o en casa con supervisión.",
    solves: "Dientes que se han oscurecido con el tiempo, café, té o tabaco.",
    evaluation:
      "Revisamos el origen del color y el estado del esmalte. No todas las manchas responden igual.",
    expect:
      "Los resultados varían según el tono de partida y el tipo de mancha. Buscamos un cambio que se vea bien en tu cara, no un blanco artificial.",
    faqs: [
      {
        q: "¿Cuántos tonos voy a aclarar?",
        a: "Depende de cada caso. Preferimos mostrarte expectativas realistas en la valoración antes que prometer cifras.",
      },
      {
        q: "¿El blanqueamiento daña el esmalte?",
        a: "Realizado con supervisión profesional y en dientes sanos, no daña el esmalte. Puede generar sensibilidad temporal.",
      },
    ],
  },
  {
    slug: "carillas",
    name: "Carillas",
    group: "mejorar",
    short: "Láminas finas que corrigen forma y color.",
    what: "Láminas delgadas de cerámica o resina que se adhieren al frente del diente para mejorar forma, color o proporción.",
    solves: "Desgastes, fracturas del borde, manchas que no responden al blanqueamiento y desproporciones.",
    evaluation:
      "Análisis de proporción, color y mordida. A veces una alternativa más conservadora es suficiente.",
    expect:
      "Un cambio notable pero natural. Diseñamos cada carilla considerando tu rostro, no un catálogo.",
    faqs: [
      {
        q: "¿Hay que desgastar mucho el diente?",
        a: "Buscamos preparaciones mínimas y en algunos casos no se requiere desgaste. Depende de cada diente.",
      },
    ],
  },
  {
    slug: "diseno-de-sonrisa",
    name: "Diseño de sonrisa",
    group: "mejorar",
    short: "Un plan integral, no un molde único.",
    what: "Un plan estético integral que puede combinar blanqueamiento, carillas, resinas u ortodoncia, diseñado a partir de tu rostro.",
    solves: "Cuando la inconformidad no es un solo diente, sino la armonía general de la sonrisa.",
    evaluation:
      "Fotografía clínica, análisis facial y, cuando aplica, simulación digital para conversar sobre expectativas.",
    expect:
      "Un proceso por fases con decisiones compartidas. La meta es que tu sonrisa siga pareciendo tuya.",
    faqs: [
      {
        q: "¿El diseño de sonrisa es solo carillas?",
        a: "No. Es un plan. A veces la mejor herramienta es ortodoncia, o blanqueamiento, o una combinación gradual.",
      },
    ],
  },
]

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug)
}

export function getGroupTreatments(groupId: string): Treatment[] {
  return treatments.filter((t) => t.group === groupId)
}
