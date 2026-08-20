export const siteLinks = {
  consultation: "/contacto#formulario-contacto",
  services: "/servicios",
  nursingService: "/servicios#enfermeria",
  medicalService: "/servicios#medicina",
  legalService: "/servicios#derecho",
  whatsapp: "https://wa.me/5212219634544",
} as const;

export const consultationCta = {
  label: "Agendar consulta",
  to: siteLinks.consultation,
} as const;

export const whatsappContact = {
  displayNumber: "221 963 4544",
  url: siteLinks.whatsapp,
} as const;
