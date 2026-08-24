export const siteLinks = {
  consultation: "/contacto#formulario-contacto",
  services: "/servicios",
  resources: "/recursos",
  faq: "/preguntas-frecuentes",
  featuredGuide: "/recursos/cinco-preguntas-para-el-equipo-medico",
  nursingService: "/servicios#enfermeria",
  medicalService: "/servicios#medicina",
  legalService: "/servicios#derecho",
  whatsapp: "https://wa.me/5212219634544",
} as const;

export const consultationCta = {
  label: "Habla con nuestro equipo",
  to: siteLinks.consultation,
} as const;

export const whatsappContact = {
  displayNumber: "221 963 4544",
  url: siteLinks.whatsapp,
} as const;

export const socialLinks = {
  instagram: "https://www.instagram.com/alium_care?igsi=ZDNlZDc0MzIxNw==",
} as const;
