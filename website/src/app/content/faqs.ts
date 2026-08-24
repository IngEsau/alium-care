export interface FaqItem {
  question: string;
  answer: string;
}

export const serviceFaqs: readonly FaqItem[] = [
  {
    question: "¿Qué tipo de orientación ofrece Alium Care?",
    answer:
      "Alium Care reúne perspectivas de enfermería, medicina y derecho para ayudar a las familias a ordenar información, preparar preguntas y reconocer los siguientes pasos que conviene revisar con profesionales responsables de cada caso.",
  },
  {
    question: "¿La orientación sustituye una consulta médica o jurídica?",
    answer:
      "No. El acompañamiento y los contenidos del sitio son informativos y no reemplazan una valoración clínica, un diagnóstico, una prescripción ni asesoría jurídica individual. Cada decisión debe confirmarse con la persona profesional o institución competente.",
  },
  {
    question: "¿Puede solicitar apoyo una persona cuidadora o familiar?",
    answer:
      "Sí. Los servicios están pensados para familias y personas cuidadoras que necesitan comprender mejor una situación, organizar cuidados o preparar conversaciones y trámites relacionados con el bienestar de un ser querido.",
  },
  {
    question: "¿Qué conviene preparar antes del primer contacto?",
    answer:
      "Puedes anotar la principal duda, los cambios recientes y el resultado que esperas de la orientación. Evita enviar diagnósticos, expedientes, fotografías clínicas o datos de terceras personas en el primer mensaje; si fueran necesarios, Alium Care deberá indicar un canal adecuado.",
  },
  {
    question: "¿Tengo que saber qué especialidad necesito?",
    answer:
      "No necesariamente. Puedes explicar de forma general qué necesitas resolver y, con esa información, identificar si la conversación debe enfocarse en cuidados, información médica o aspectos jurídicos.",
  },
  {
    question: "¿Alium Care atiende emergencias?",
    answer:
      "El sitio no es un servicio de emergencias. Si existe un riesgo inmediato para la salud o la seguridad de una persona, contacta a los servicios de emergencia de tu localidad o acude a la unidad médica correspondiente.",
  },
  {
    question: "¿Cómo puedo iniciar el contacto?",
    answer:
      "Puedes utilizar el acceso directo a WhatsApp o consultar los datos publicados en la página de Contacto. Cuando el envío desde el sitio quede habilitado, también podrás iniciar tu solicitud mediante el formulario.",
  },
  {
    question: "¿Cómo se protegerán mis datos personales?",
    answer:
      "El aviso de privacidad explica el estado actual del sitio y los elementos que deben confirmarse antes de habilitar la recolección. En un primer contacto no incluyas datos de salud sensibles ni información innecesaria de otras personas.",
  },
];
