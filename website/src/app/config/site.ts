export const siteLinks = {
  consultation: "/contacto#formulario-contacto",
  services: "/servicios",
  blog: "/blog",
  faq: "/preguntas-frecuentes",
  featuredArticle: "/blog/la-soledad-del-cuidador",
  nursingService: "/servicios#enfermeria",
  medicalService: "/servicios#medicina",
  legalService: "/servicios#derecho",
  whatsapp: "https://wa.me/5212219634544",
} as const;

export const siteFeatures = {
  team: false,
  blog: true,
  resourceDownloads: false,
} as const;

export const consultationCta = {
  label: "Habla con nuestro equipo",
  to: siteLinks.consultation,
} as const;

export const whatsappContact = {
  displayNumber: "221 963 4544",
  url: siteLinks.whatsapp,
} as const;

export const contactEmail = "alium.caremx@gmail.com";

export const socialLinks = {
  instagram: "https://www.instagram.com/alium_care?igsi=ZDNlZDc0MzIxNw==",
} as const;
