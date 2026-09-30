export type ResourceCategory = "Cuidado del cuidador" | "Voluntad anticipada";

export interface ResourceSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  paragraphsAfter?: readonly string[];
  ordered?: boolean;
}

export interface Resource {
  slug: string;
  title: string;
  subtitle: string;
  byline?: string;
  description: string;
  excerpt: string;
  category: ResourceCategory;
  readingTime?: string;
  featured?: boolean;
  introduction: readonly string[];
  sections: readonly ResourceSection[];
  conclusionHeading?: string;
  conclusion: readonly string[];
  closing?: readonly string[];
  disclaimer?: string;
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
  {
    slug: "la-voz-que-permanece-voluntad-anticipada",
    title: "La voz que permanece: qué es la voluntad anticipada y por qué hablar de ella hoy",
    subtitle: "",
    byline: "Equipo Alium Care",
    description: "Qué es la voluntad anticipada en México, cómo se tramita y qué protege. Una guía clara para decidir sobre tus cuidados con tiempo.",
    excerpt: "La voluntad anticipada existe para que eso no ocurra. Es la forma de que tu voz siga presente cuando tú ya no puedas expresarla.",
    category: "Voluntad anticipada",
    readingTime: "7 min de lectura",
    introduction: [
      "Hay decisiones que nadie quiere tomar en una sala de urgencias. ¿Conectar o no a un respirador? ¿Intentar una reanimación más? ¿Trasladar al hospital a alguien que ya está muy débil? Cuando una persona ya no puede hablar por sí misma, esas preguntas caen sobre su familia, casi siempre en el peor momento, con prisa y sin saber qué habría querido.",
      "La voluntad anticipada existe para que eso no ocurra. Es la forma de que tu voz siga presente cuando tú ya no puedas expresarla.",
    ],
    sections: [
      {
        heading: "¿Qué es la voluntad anticipada?",
        paragraphs: [
          "Es un documento legal en el que una persona mayor de edad, en pleno uso de sus facultades mentales, deja por escrito qué tratamientos médicos desea o no recibir si llega a una etapa terminal o a una condición de la que no podrá recuperarse.",
          "También se le conoce como testamento vital. A diferencia de un testamento común, no habla de bienes ni herencias: habla de cómo quieres ser cuidado al final de tu vida.",
          "En el documento puedes expresar, por ejemplo:",
        ],
        bullets: [
          "Si aceptas o rechazas medidas que solo prolonguen la vida de forma artificial, como la reanimación cardiopulmonar o la ventilación mecánica.",
          "Tu deseo de recibir cuidados paliativos para controlar el dolor, la falta de aire y otros síntomas.",
          "Quién será tu representante para vigilar que se cumpla tu decisión.",
          "En algunos estados, tu voluntad sobre la donación de órganos.",
        ],
      },
      {
        heading: "Lo que no es: voluntad anticipada no es eutanasia",
        paragraphs: [
          "Es la confusión más común, y conviene aclararla desde el inicio. La eutanasia busca terminar deliberadamente con la vida de una persona y está prohibida en México por la Ley General de Salud.",
          "La voluntad anticipada hace algo muy distinto: permite rechazar tratamientos que solo alargarían el sufrimiento, sin acelerar ni retrasar la muerte. La persona sigue recibiendo atención, alivio del dolor, higiene, compañía y acompañamiento hasta el final.",
          "A esto se le llama ortotanasia: respetar el curso natural de la vida y acompañar la muerte con dignidad, sin prolongarla artificialmente ni adelantarla.",
        ],
      },
      {
        heading: "¿Dónde es válida en México?",
        paragraphs: [
          "La Ciudad de México fue pionera al aprobar su ley en 2008. Desde entonces, más de una docena de estados han aprobado leyes propias, entre ellos Aguascalientes, Estado de México, Guanajuato, Hidalgo, Michoacán, Puebla (2024) y, más recientemente, Chiapas (2025). Otros estados regulan derechos similares dentro de sus leyes de salud o de cuidados paliativos.",
          "Como cada entidad tiene su propia legislación, los requisitos, los formatos y los costos cambian. Antes de iniciar el trámite, confirma cuál es la ley vigente en tu estado y cómo se aplica.",
        ],
      },
      {
        heading: "¿Cómo se tramita?",
        paragraphs: ["En términos generales existen dos caminos:"],
        ordered: true,
        bullets: [
          "Ante notario público. Es la vía más común. Puede hacerse sin estar enfermo, de manera preventiva, como parte de una planeación personal y familiar.",
          "En una institución de salud. Cuando la persona ya tiene un diagnóstico de enfermedad terminal, algunas leyes permiten firmar un formato ante el personal médico y la presencia de testigos.",
        ],
        paragraphsAfter: [
          "En ambos casos se pide ser mayor de edad, estar en pleno uso de tus facultades mentales y nombrar a un representante, y en ocasiones a un sustituto. El documento puede modificarse o revocarse en cualquier momento, siempre que la persona pueda expresar su voluntad.",
        ],
      },
      {
        heading: "¿Qué pasa si no existe el documento?",
        paragraphs: [
          "Si la persona no dejó su voluntad por escrito, las decisiones recaen en la familia y el equipo médico. Esto suele generar tres problemas:",
        ],
        bullets: [
          "Incertidumbre: nadie sabe con seguridad qué habría querido.",
          "Desacuerdos: cada familiar interpreta de forma distinta lo que es mejor.",
          "Culpa: quien decide carga después con la duda de si hizo lo correcto.",
        ],
        paragraphsAfter: [
          "Por eso, más que un trámite, la voluntad anticipada es una herramienta de paz para quienes se quedan.",
        ],
      },
      {
        heading: "Lo que cambia para tu familia",
        paragraphs: [
          "Firmar una voluntad anticipada es, sobre todo, un acto de cuidado hacia quienes te quieren. Les quita el peso de adivinar, reduce los desacuerdos entre familiares y les permite concentrarse en lo más importante: acompañarte.",
          "Pero el papel no basta. Lo más valioso es la conversación que lo acompaña:",
        ],
        bullets: [
          "Habla con tu familia sobre lo que para ti significa vivir con calidad y qué situaciones no quisieras vivir.",
          "Comparte una copia con tu representante y con tu médico de confianza.",
          "Revisa tu decisión si cambian tu salud o tus circunstancias.",
        ],
      },
      {
        heading: "Preguntas frecuentes",
        paragraphs: [
          "¿Necesito estar enfermo para hacerla? No. Cualquier persona mayor de edad puede hacerla de manera preventiva.",
          "¿Puedo cambiar de opinión? Sí. El documento puede modificarse o revocarse cuando lo decidas.",
          "¿Mi familia puede ignorarlo? El documento tiene validez legal en los estados donde existe la ley. Nombrar un representante ayuda a que se respete.",
        ],
      },
    ],
    conclusionHeading: "No esperes a que sea urgente",
    conclusion: [
      "El mejor momento para decidir es cuando todavía puedes hacerlo con calma, informado y acompañado. Hablar hoy de estos temas no es pesimismo: es asegurarte de que, pase lo que pase, tu voz permanezca.",
    ],
    closing: [
      "¿Tienes dudas sobre cómo iniciar tu voluntad anticipada o cómo plantearla en familia?",
      "En Alium Care te orientamos en lo médico, lo legal y lo emocional. Escríbenos.",
      "Síguenos en redes para más orientación: Facebook · Instagram · YouTube",
    ],
    disclaimer: "Este artículo es informativo y no sustituye la asesoría legal personalizada.",
  },
];

export const featuredResource = resources[0];

export function getResourceBySlug(slug?: string) {
  return resources.find((resource) => resource.slug === slug);
}
