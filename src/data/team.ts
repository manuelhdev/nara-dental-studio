export interface TeamMember {
  name: string
  specialty: string
  bio: string
  image: string
  activity: string
}

export const team: TeamMember[] = [
  {
    name: "Dra. Elena Navarro",
    specialty: "Odontología restauradora y estética",
    bio: "Su trabajo se centra en conservar estructura y buscar resultados naturales.",
    image: "/images/team-elena.webp",
    activity: "Analizando fotografía clínica de un caso anterior",
  },
  {
    name: "Dr. Marco Ibarra",
    specialty: "Ortodoncia",
    bio: "Cree que una buena mordida se planea con estudios, no con prisa.",
    image: "/images/team-marco.webp",
    activity: "Revisando el avance de un estudio de alineación",
  },
  {
    name: "Dra. Sofía Camacho",
    specialty: "Odontología preventiva",
    bio: "Prefiere explicar dos veces antes que tratar una de más.",
    image: "/images/team-sofia.webp",
    activity: "Explicando un hallazgo a un paciente en pantalla",
  },
]
