export type ResourceCategory = "Cuidados" | "Orientación médica" | "Derechos y previsión";

export interface ResourceSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: ResourceCategory;
  readingTime: string;
  featured?: boolean;
  sections: readonly ResourceSection[];
}

export const resources: readonly Resource[] = [
  {
    slug: "cinco-preguntas-para-el-equipo-medico",
    title: "5 preguntas para conversar mejor con el equipo médico",
    description:
      "Una guía práctica para ordenar dudas, aprovechar la consulta y salir con próximos pasos más claros.",
    excerpt:
      "Prepara una conversación más clara con el equipo de salud y registra la información que tu familia necesita para decidir.",
    category: "Orientación médica",
    readingTime: "5 min de lectura",
    featured: true,
    sections: [
      {
        heading: "Antes de la conversación",
        paragraphs: [
          "Cuando una familia recibe mucha información en poco tiempo es normal olvidar detalles o no saber por dónde empezar. Antes de la consulta, escriban en una sola hoja qué cambió, qué preocupa más y qué decisión necesitan tomar. Elegir a una persona para anotar permite que las demás escuchen con atención.",
          "Lleven una lista actualizada de medicamentos, estudios recientes y dudas. No es necesario contar toda la historia desde el inicio: una síntesis con fechas, síntomas relevantes y cambios observados ayuda a enfocar la conversación.",
        ],
      },
      {
        heading: "Las cinco preguntas",
        bullets: [
          "¿Cuál es el objetivo principal del tratamiento o cuidado que se propone?",
          "¿Qué beneficios, molestias o riesgos debemos vigilar y en qué plazo podrían aparecer?",
          "¿Qué alternativas existen y qué podría ocurrir si decidimos esperar o no continuar?",
          "¿Qué podemos hacer en casa y cuáles son las señales para pedir ayuda profesional?",
          "¿Cuál es el siguiente paso, quién le dará seguimiento y cuándo debemos volver a consultar?",
        ],
      },
      {
        heading: "Si una respuesta no queda clara",
        paragraphs: [
          "Pedir que una explicación se repita con palabras sencillas es válido. También pueden confirmar lo entendido con una frase como: “Entonces, el siguiente paso es…”. Si aparece un término desconocido, anótenlo y soliciten una explicación antes de avanzar.",
          "Cuando haya varias opciones, pregunten qué cambia en la vida cotidiana con cada una. Relacionar la información clínica con prioridades como comodidad, independencia, traslados o carga de cuidados facilita una decisión compartida.",
        ],
      },
      {
        heading: "Después de la consulta",
        paragraphs: [
          "Revisen las notas en familia y separen las acciones inmediatas de las dudas que siguen abiertas. Guarden indicaciones, nombres y fechas en un lugar accesible. Si algo importante no coincide con lo que entendieron, contacten nuevamente al equipo tratante antes de modificar medicamentos o cuidados.",
        ],
      },
    ],
  },
  {
    slug: "organizar-cuidados-diarios-en-familia",
    title: "Cómo organizar los cuidados diarios en familia",
    description:
      "Un punto de partida para repartir tareas, registrar cambios y evitar que toda la responsabilidad recaiga en una sola persona.",
    excerpt:
      "Convierte las necesidades diarias en tareas visibles y reparte responsabilidades de una manera que pueda revisarse cada semana.",
    category: "Cuidados",
    readingTime: "4 min de lectura",
    sections: [
      {
        heading: "Hacer visible lo que implica cuidar",
        paragraphs: [
          "El cuidado suele percibirse como una sola tarea, aunque en realidad incluye medicamentos, alimentos, higiene, traslados, compras, citas, trámites y acompañamiento emocional. Escribir cada actividad permite dimensionar la carga y conversar sobre ella sin depender de la memoria.",
          "Durante dos o tres días registren qué se hace, a qué hora y quién lo realiza. Incluyan tareas ocasionales, como recoger estudios o hablar con aseguradoras. El objetivo no es controlar a la familia, sino reconocer el trabajo real y detectar lo que necesita apoyo.",
        ],
      },
      {
        heading: "Un plan mínimo compartido",
        bullets: [
          "Lista de actividades diarias y semanales con una persona responsable y otra de respaldo.",
          "Calendario común para consultas, medicamentos, compras y trámites.",
          "Registro breve de cambios importantes, indicaciones y preguntas pendientes.",
          "Datos de contacto del equipo tratante y un acuerdo familiar para situaciones urgentes.",
          "Momentos de descanso reales para quien concentra el cuidado cotidiano.",
        ],
      },
      {
        heading: "Repartir sin exigir que todas las personas hagan lo mismo",
        paragraphs: [
          "No todas las personas pueden acompañar físicamente, pero algunas pueden resolver compras, cocinar, hacer llamadas, ordenar documentos o cubrir gastos concretos. Repartir por disponibilidad y habilidades suele funcionar mejor que intentar dividir todo en partes idénticas.",
          "Las peticiones específicas ayudan: “¿Puedes acompañar el martes de 10 a 12?” es más fácil de responder que “necesito más apoyo”. Si alguien no puede asumir una tarea, conviene buscar otra opción sin dejar la necesidad invisible.",
        ],
      },
      {
        heading: "Revisar el plan",
        paragraphs: [
          "Las necesidades cambian. Una revisión breve cada semana permite redistribuir actividades, identificar señales de agotamiento y llevar preguntas más claras a profesionales de salud. Ningún formato reemplaza la valoración clínica; el plan familiar sirve para coordinarse y detectar cuándo hace falta pedir ayuda.",
        ],
      },
    ],
  },
  {
    slug: "documentos-para-una-situacion-de-salud",
    title: "Documentos que conviene tener ubicados durante una situación de salud",
    description:
      "Una lista general para organizar información clínica, contactos y documentos sin esperar a una situación de presión.",
    excerpt:
      "Reúne información esencial en un expediente familiar sencillo y reduce búsquedas de último momento durante consultas o trámites.",
    category: "Derechos y previsión",
    readingTime: "4 min de lectura",
    sections: [
      {
        heading: "Un expediente fácil de consultar",
        paragraphs: [
          "Tener documentos ubicados no significa anticipar el peor escenario. Significa reducir decisiones apresuradas y evitar que la información dependa de una sola persona. El expediente puede ser físico, digital o mixto, siempre que la familia sepa dónde está y quién puede acceder.",
          "Empiecen por reunir copias legibles y una hoja de resumen. Eviten circular expedientes completos por grupos de mensajería; compartan únicamente lo necesario y revisen quién conserva cada copia.",
        ],
      },
      {
        heading: "Información que puede resultar útil",
        bullets: [
          "Identificación, datos de contacto y personas a quienes avisar.",
          "Lista de medicamentos, alergias y profesionales tratantes, validada cuando sea posible.",
          "Estudios, recetas e indicaciones recientes ordenados por fecha.",
          "Datos de afiliación, seguro, pólizas y teléfonos para solicitar orientación.",
          "Documentos de representación, voluntades o autorizaciones que hayan sido formalizados.",
          "Registro de citas, trámites abiertos y preguntas pendientes.",
        ],
      },
      {
        heading: "Proteger la información",
        paragraphs: [
          "Los documentos de salud e identificación contienen datos personales que requieren cuidado. Usen contraseñas en archivos digitales, limiten los accesos y eliminen copias innecesarias. Si una persona externa ayuda con un trámite, definan qué necesita recibir y durante cuánto tiempo.",
          "Revisen el expediente periódicamente para retirar versiones antiguas y actualizar teléfonos, medicamentos o responsables. Una copia desactualizada puede generar más confusión que no tenerla.",
        ],
      },
      {
        heading: "Cuándo pedir orientación",
        paragraphs: [
          "Los requisitos cambian según la institución y el trámite. Antes de firmar, entregar originales o asumir que un formato produce efectos legales, soliciten información a la institución correspondiente y, si es necesario, orientación profesional aplicable a su caso.",
        ],
      },
    ],
  },
];

export const featuredResource = resources.find((resource) => resource.featured) ?? resources[0];

export function getResourceBySlug(slug?: string) {
  return resources.find((resource) => resource.slug === slug);
}
