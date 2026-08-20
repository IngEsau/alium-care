import portraitOne from "../../assets/testimonials/portrait-01.png";
import portraitTwo from "../../assets/testimonials/portrait-02.png";
import portraitThree from "../../assets/testimonials/portrait-03.png";

export type TeamArea = "Enfermería" | "Medicina" | "Derecho";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  relationship: string;
  area: TeamArea;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  area: TeamArea;
  role: string;
  specialty?: string;
  credential: string;
  image: string;
  imageAlt: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: "mariana-lopez",
    quote:
      "La orientación nos ayudó a ordenar los cuidados diarios y a llegar mejor preparados a cada conversación con el equipo de salud. Sentimos que teníamos una ruta más clara.",
    name: "Mariana López",
    relationship: "Familiar cuidadora",
    area: "Enfermería",
    image: portraitOne,
    imageAlt: "Mariana López",
  },
  {
    id: "roberto-hernandez",
    quote:
      "Pudimos entender mejor la información que ya teníamos y organizar nuestras preguntas. Ese acompañamiento hizo más tranquila una etapa llena de dudas.",
    name: "Roberto Hernández",
    relationship: "Hijo y cuidador",
    area: "Medicina",
    image: portraitTwo,
    imageAlt: "Roberto Hernández",
  },
  {
    id: "elena-martinez",
    quote:
      "Nos explicaron los pasos y documentos con un lenguaje sencillo. Tener claridad sobre nuestras opciones nos permitió tomar decisiones con mayor confianza.",
    name: "Elena Martínez",
    relationship: "Familiar responsable",
    area: "Derecho",
    image: portraitThree,
    imageAlt: "Elena Martínez",
  },
];

export const teamMembers: readonly TeamMember[] = [
  {
    id: "laura-mendoza",
    name: "Laura Mendoza",
    area: "Enfermería",
    role: "Coordinadora de cuidados",
    specialty: "Cuidados domiciliarios y educación para familiares",
    credential: "Licenciatura en Enfermería · Certificación en cuidados paliativos",
    image: portraitOne,
    imageAlt: "Laura Mendoza, coordinadora de cuidados",
  },
  {
    id: "daniel-salgado",
    name: "Daniel Salgado",
    area: "Medicina",
    role: "Médico orientador",
    specialty: "Medicina familiar y comunicación clínica",
    credential: "Médico cirujano · Especialidad en Medicina Familiar",
    image: portraitTwo,
    imageAlt: "Daniel Salgado, médico orientador",
  },
  {
    id: "patricia-rios",
    name: "Patricia Ríos",
    area: "Derecho",
    role: "Asesora en derecho sanitario",
    specialty: "Derechos del paciente y previsión familiar",
    credential: "Licenciatura en Derecho · Diplomado en derecho sanitario",
    image: portraitThree,
    imageAlt: "Patricia Ríos, asesora en derecho sanitario",
  },
];
