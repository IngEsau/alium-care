export type ResourceCategory = "Cuidado del cuidador";

export interface ResourceSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  ordered?: boolean;
}

export interface Resource {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  excerpt: string;
  category: ResourceCategory;
  readingTime: string;
  featured?: boolean;
  introduction: readonly string[];
  sections: readonly ResourceSection[];
  conclusion: readonly string[];
}

export const resources: readonly Resource[] = [
  {
    slug: "la-soledad-del-cuidador",
    title: "La Soledad del Cuidador",
    subtitle: "El Impacto Invisible en el Binomio y el Camino hacia el Cuidado Compartido",
    description:
      "El Impacto Invisible en el Binomio y el Camino hacia el Cuidado Compartido.",
    excerpt:
      "Cuidar al cuidador no es un lujo, es una necesidad terapéutica esencial.",
    category: "Cuidado del cuidador",
    readingTime: "7 min de lectura",
    featured: true,
    introduction: [
      "En el ámbito de la geriatría y la gerontología clínica, solemos centrar nuestra mirada en el paciente: sus patologías, su tratamiento farmacológico y su deterioro funcional.",
      "Sin embargo, desde la Tanatología Humanista y las directrices de la Sociedad Española de Geriatría y Gerontología (SEGG) y el INGER (Instituto Nacional de Geriatría y Gerontología) en México, sabemos que el paciente nunca es una isla. Existe una entidad indisoluble llamada «Binomio Paciente-Cuidador».",
      "Cuando el cuidador —generalmente un familiar y, aproximadamente en 94 de cada 100 casos, una mujer— comienza a experimentar la soledad, esta no solo afecta su salud mental, sino que altera la homeostasis (el equilibrio) de todo el núcleo familiar y, de forma directa, la calidad de vida de la persona mayor a su cargo.",
    ],
    sections: [
      {
        heading: "La soledad acompañada: un fenómeno silencioso",
        paragraphs: [
          "La soledad del cuidador es paradójica. A pesar de estar físicamente acompañado la mayor parte del día por el paciente, el cuidador experimenta un aislamiento social y emocional profundo. Instituciones como la Sociedad Argentina de Geriatría y Gerontología (SAGG) han advertido que este aislamiento es precursor del síndrome de sobrecarga del cuidador o síndrome del cuidador quemado (burnout).",
          "Esta soledad nace de varios factores:",
        ],
        ordered: true,
        bullets: [
          "La pérdida de la reciprocidad: en enfermedades neurodegenerativas o cualquier otra que se considere crónico-degenerativa y que impacte en la autonomía y la reserva funcional del paciente, el cuidador deja de ser reconocido o validado por su ser querido, rompiendo el vínculo emocional bidireccional.",
          "El estrechamiento del mundo social: las redes de apoyo —amistades, otros familiares, cuidadores formales o informales— suelen alejarse por miedo, incomodidad o porque el cuidador deja de asistir a eventos sociales por falta de tiempo o culpa.",
          "La carga de la toma de decisiones: sentir que la vida, la muerte y el bienestar de otra persona dependen exclusivamente de un solo criterio genera un peso existencial devastador.",
        ],
      },
      {
        heading: "El impacto en el binomio: el efecto espejo",
        paragraphs: [
          "Desde una perspectiva de geriatría basada en evidencia, se ha demostrado que el bienestar del cuidador es el mejor predictor de la salud del paciente. Cuando el cuidador está solo y agotado, se produce un «efecto espejo»:",
        ],
        bullets: [
          "Aumento de BPSD (síntomas psicológicos y conductuales de la demencia): un cuidador estresado o deprimido transmite ansiedad. El paciente, aunque tenga deterioro cognitivo, percibe la tensión ambiental, lo que aumenta su agitación o agresividad.",
          "Riesgo de maltrato por omisión: la soledad extrema puede llevar al embotamiento afectivo, donde el cuidador deja de responder con empatía a las necesidades del paciente, no por falta de amor, sino por agotamiento de sus reservas psicológicas.",
          "Institucionalización precoz: la falta de una red de apoyo sólida es la causa principal de que el binomio se rompa y el paciente deba ser ingresado en una residencia de forma no planificada.",
        ],
      },
      {
        heading: "10 consejos para el cuidado del binomio paciente-cuidador",
        paragraphs: [
          "Basándonos en los manuales de buena práctica de la Academia Mexicana de Geriatría y los consensos iberoamericanos más recientes, proponemos estas estrategias para proteger la salud de este binomio:",
        ],
        ordered: true,
        bullets: [
          "Reconocimiento y validación: el primer paso es admitir: «Cuidar me agota y me siento solo». Validar la emoción no es traicionar al paciente; es un acto de honestidad clínica y humana necesario para buscar ayuda.",
          "La regla del 3 (red de apoyo): ningún cuidado debe recaer en una sola persona. Es vital organizar una red donde al menos tres personas tengan roles activos: una cuida, otra provee finanzas o compras y otra gestiona trámites médicos.",
          "Formación especializada: el miedo nace del desconocimiento. Acudir a talleres impartidos por el Consejo Nacional de Geriatría o asociaciones locales reduce la ansiedad al entender qué esperar de la enfermedad.",
          "Establecer espacios de respiro: el cuidador debe tener, por prescripción médica, al menos de cuatro a seis horas a la semana de desvinculación total del cuidado para realizar actividades que nutran su identidad personal, no para hacer recados del paciente. Desde mi perspectiva y experiencia personal y profesional, incluso ese tiempo resulta insuficiente.",
          "Comunicación asertiva con la familia: es fundamental expresar necesidades claras: «Necesito que el sábado te encargues tú para que yo pueda salir», en lugar de esperar a que la ayuda llegue por intuición. Esto requiere, idealmente, implementar un rol de turnos previamente designado y acordado.",
          "Cuidado de la salud propia: el cuidador debe cumplir con sus propios calendarios de vacunación, revisiones médicas y ejercicio físico. Un cuidador enfermo es un paciente doble.",
          "Fomentar la autonomía del paciente: en la medida de lo posible, permitir que el paciente realice tareas por sí mismo. La sobreprotección acelera el deterioro del paciente y aumenta el cansancio del cuidador.",
          "Atención psicológica o grupos de autoayuda: compartir la experiencia con otras personas que viven lo mismo —en grupos de apoyo de la SEGG o similares— rompe el aislamiento social y normaliza las emociones ambivalentes.",
          "Planificación anticipada de decisiones: sentarse con el equipo de geriatría para decidir qué se hará en momentos de crisis evita el pánico y la soledad de la decisión de último minuto.",
          "Acompañamiento espiritual o tanatológico: no se refiere solo a la religión, sino a encontrar sentido al proceso de cuidar y prepararse para los duelos parciales que ocurren durante el avance de la enfermedad.",
        ],
      },
    ],
    conclusion: [
      "Cuidar al cuidador no es un lujo, es una necesidad terapéutica esencial. Mantener la integridad de la red de apoyo es la única forma de garantizar que el envejecimiento y el final de la vida se transiten con la dignidad que todo ser humano merece.",
      "Si tú eres cuidador y te sientes solo, recuerda: pedir ayuda no es signo de debilidad, sino de responsabilidad hacia ti y hacia quien cuidas.",
    ],
  },
];

export const featuredResource = resources[0];

export function getResourceBySlug(slug?: string) {
  return resources.find((resource) => resource.slug === slug);
}
