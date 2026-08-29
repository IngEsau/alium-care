# Auditoría de privacidad de Alium Care

**Fecha de corte:** 29 de agosto de 2026

**Alcance:** código fuente local de `website/`; no incluye infraestructura ni tráfico de un dominio en producción.
**Naturaleza:** diagnóstico técnico y de producto; requiere validación jurídica y operativa antes de publicar el aviso definitivo.

## Conclusión ejecutiva

El repositorio contiene una aplicación web estática de React/Vite. No hay backend, base de datos, CRM, analytics, pasarela de pagos ni servicio de envío de correo. El formulario de Contacto prepara un `mailto:` dirigido a `alium.caremx@gmail.com`: el mensaje sólo se transmite cuando la persona lo revisa y envía desde su aplicación de correo. El blog, la biblioteca de Recursos y las descargas están deshabilitados; los PDF se conservan fuera de `public/` y no forman parte del sitio compilado.

El principal riesgo inmediato es operativo: `mailto:` depende de que la persona tenga una aplicación de correo configurada y pulse Enviar, por lo que el sitio no puede confirmar recepción ni entrega. Además, cada visita carga fuentes desde Adobe Typekit y Google Fonts, y falta identificar el hosting de producción y sus registros.

El aviso integral puede prepararse como molde, pero no puede considerarse jurídicamente final mientras falten la identidad y domicilio completos de la persona responsable, el canal ARCO y las decisiones sobre proveedores, finalidades, conservación, seguridad y datos sensibles.

## Flujo comprobado actual

```text
Persona usuaria
  → Contacto: escribe nombre, email, WhatsApp y mensaje
    → los valores viven temporalmente en useState
    → submit abre un borrador mailto: dirigido a alium.caremx@gmail.com
    → sólo se transmite cuando la persona pulsa Enviar en su aplicación de correo
  → Blog, Recursos y descargas: deshabilitados
```

Las salidas a WhatsApp, redes sociales y `mailto:` ocurren sólo cuando la persona pulsa un enlace. Esas conversaciones ya quedan sujetas a los sistemas y prácticas del proveedor elegido, no al formulario de este sitio.

## Matriz Web → ARCO

| Eslabón | Estado comprobado | Evidencia local | Riesgo o decisión pendiente |
| --- | --- | --- | --- |
| Web | SPA estática React 18 + Vite 6, con rutas visibles de Inicio, Servicios, Preguntas frecuentes, Contacto y Aviso de privacidad. Blog y Recursos redirigen a Inicio. | [`package.json`](../package.json), [`routes.tsx`](../src/app/routes.tsx) | Falta identificar hosting, CDN, DNS, país/región, logs y retención de producción. |
| Formularios | Contacto conserva nombre, email, WhatsApp y mensaje en memoria y prepara un `mailto:` a `alium.caremx@gmail.com`. Recursos está deshabilitado. | [`Contacto.tsx`](../src/app/pages/Contacto.tsx), [`site.ts`](../src/app/config/site.ts) | `mailto:` no confirma envío ni recepción. El mensaje libre todavía puede contener datos de salud propios o de terceros pese a la advertencia visible. |
| Base de datos | No existe esquema, ORM, migraciones, credenciales ni conexión. | Búsqueda completa del repositorio. | Seleccionar tecnología, región, cifrado, roles, respaldos, retención y borrado antes de activar formularios. |
| Cookies | La aplicación activa no crea cookies. Un componente genérico de sidebar no usado escribiría `sidebar_state` si algún día se integra. | [`sidebar.tsx`](../src/app/components/ui/sidebar.tsx) | Auditar nuevamente el bundle y el dominio de producción. Documentar y controlar futuras tecnologías no esenciales. |
| Analytics | No se detectaron Google Analytics, Tag Manager, Meta Pixel, Clarity, Hotjar, PostHog, Sentry ni equivalentes. | [`index.html`](../index.html) y búsqueda de imports/scripts/IDs. | Decidir si se incorporará alguno y evaluar identificadores, IP, finalidad, retención, región y clasificación del proveedor. |
| APIs | El componente inactivo de Recursos conserva un `fetch` POST condicionado a una variable de ambiente. No hay endpoint configurado ni backend en el repositorio. | [`ResourceDownloadForm.tsx`](../src/app/components/ResourceDownloadForm.tsx), [`.env.example`](../.env.example) | Auditar y probar proveedor, CORS, validación, límites, registros e incidentes antes de reactivar la función. |
| Proveedores | Cada visita solicita CSS/fuentes a Adobe Typekit y Google Fonts/Gstatic. Figma y las imágenes de Unsplash están empaquetados localmente. | [`fonts.css`](../src/styles/fonts.css), [`index.css`](../src/styles/index.css) | Valorar autoalojar fuentes o documentar las solicitudes. Faltan contratos y clasificación del hosting y proveedores futuros. |
| Pagos | No existe checkout, precio, facturación, tokenización ni SDK de pagos. | Búsqueda completa del repositorio y dependencias. | No incluir pagos en el aviso hasta diseñar el flujo. Si se incorpora, evitar almacenar tarjeta completa y documentar proveedor, datos visibles, transferencias y retención fiscal. |
| Emails | El sitio prepara mensajes a `alium.caremx@gmail.com` mediante `mailto:`, pero no los envía ni confirma su entrega. | [`Contacto.tsx`](../src/app/pages/Contacto.tsx), [`site.ts`](../src/app/config/site.ts) | Confirmar acceso del personal, MFA, conservación, pruebas de recepción y si el buzón será el canal ARCO definitivo. |
| Almacenamiento | Contacto conserva temporalmente los valores en memoria React. Los mensajes enviados quedan en el cliente y proveedor de correo; el sitio no tiene persistencia propia. | Estado local en [`Contacto.tsx`](../src/app/pages/Contacto.tsx). | Definir permisos, seguridad y conservación del buzón receptor. |
| Eliminación | No existen registros de servidor que borrar. Vaciar `useState` sólo limpia la interfaz. WhatsApp y correo quedan fuera del control técnico del sitio. | Manejador `handleSubmit` del formulario de Contacto. | Aprobar matriz de conservación; bloquear al terminar la finalidad; suprimir después del plazo aplicable; propagar bajas a copias, respaldos y proveedores; conservar evidencia. |
| ARCO | No hay persona/departamento designado, canal específico, formulario, acuse, procedimiento ni bitácora. | Antes de esta iteración, el enlace de privacidad estaba inactivo. | Nombrar responsable interno, correo monitoreado y medio alterno; documentar identidad, representación, plazos, entregas y negativas. |

## Datos y terceros observados

### Datos que la interfaz permite escribir

- Nombre completo.
- Correo electrónico.
- Número de WhatsApp.
- Mensaje libre sobre una situación familiar o de cuidados.
- La solicitud de recursos y descargas está deshabilitada.

El estado de salud presente o futuro es un dato personal sensible. Aunque el campo no lo pida de forma nominal, el contexto y el placeholder pueden provocar que la persona escriba diagnósticos, síntomas, tratamientos, expedientes o información de un familiar.

### Terceros automáticos

- Adobe Typekit: `use.typekit.net` y `p.typekit.net`.
- Google Fonts/Gstatic: `fonts.googleapis.com` y `fonts.gstatic.com`.
- Hosting/CDN/DNS/certificados/logs: no identificables desde el repositorio.
- Endpoint de leads y CRM: no configurados; el componente que los utilizaría está deshabilitado.

### Terceros sólo por acción de la persona

- WhatsApp/Meta.
- Instagram y Facebook/Meta.
- TikTok.
- El cliente de correo y sus proveedores al usar `mailto:`.

El código no envía el contenido de los formularios a las fuentes tipográficas ni a las redes sociales.

## Diferencias entre mensajes y comportamiento

| Mensaje actual | Comportamiento real | Acción recomendada |
| --- | --- | --- |
| “Continuar por correo” | Abre un borrador dirigido a `alium.caremx@gmail.com`; la persona todavía debe enviarlo. | Mantener visible esta condición y probar el comportamiento en los navegadores objetivo. |
| Advertencia de no incluir datos clínicos | Reduce la invitación explícita a compartir datos sensibles, pero no impide que se escriban. | Definir controles y canal seguro si se decide tratar datos de salud. |
| WhatsApp obligatorio además de email | No existe justificación documentada de necesidad. | Confirmar necesidad y, si no es indispensable, dejarlo opcional. |
| Blog y descargas | Están ocultos y los PDF se encuentran fuera de `public/`. | Mantenerlos deshabilitados hasta contar con contenido y flujo de datos aprobados. |

## Base normativa aplicada

La revisión toma como base:

- [Ley Federal de Protección de Datos Personales en Posesión de los Particulares](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), nueva ley publicada el 20 de marzo de 2025, texto vigente y última reforma publicada el 14 de noviembre de 2025.
- [Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares](https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFPDPPP.pdf), publicado el 21 de diciembre de 2011 y listado oficialmente como vigente a la fecha de corte.
- [Lineamientos del Aviso de Privacidad](https://www.dof.gob.mx/nota_detalle.php?codigo=5284966&fecha=17/01/2013), como referencia secundaria sólo en lo compatible con la ley vigente.

La ley vigente exige, entre otros puntos:

- Principios de licitud, finalidad, lealtad, consentimiento, calidad, proporcionalidad, información y responsabilidad (art. 5).
- Consentimiento expreso y por escrito para datos sensibles mediante firma, firma electrónica o mecanismo de autenticación (art. 8).
- Identidad y domicilio del responsable; datos tratados; finalidades; opciones de limitación; procedimiento ARCO y mecanismo para comunicar cambios en el aviso integral (arts. 14–16).
- Medidas administrativas, técnicas y físicas; notificación de vulneraciones significativas y deber de confidencialidad (arts. 18–20).
- Procedimiento ARCO con respuesta en hasta 20 días hábiles y ejecución, si procede, en 15 días hábiles adicionales; cada plazo puede ampliarse una sola vez por el mismo periodo con justificación (arts. 27–32).
- Información y condiciones para transferencias nacionales o internacionales (arts. 35–36).

El Reglamento agrega, en lo compatible, información sobre tecnologías que recaban datos automáticamente (art. 14), conservación/bloqueo/supresión (arts. 37–39), relación con personas encargadas (arts. 49–52), seguridad basada en riesgos (arts. 57–66) y medios para solicitudes ARCO (art. 90 y siguientes).

## Prioridades antes de habilitar la recolección

### Bloqueantes

1. Confirmar nombre o razón social y domicilio completo de quien opera Alium Care.
2. Designar persona o departamento de datos y habilitar un canal ARCO monitoreado.
3. Definir qué sucede realmente al enviar Contacto y seleccionar el endpoint, correo o CRM que recibirá las solicitudes de descarga.
4. Decidir si el primer contacto excluirá datos de salud. Si no, diseñar finalidad, canal seguro y consentimiento sensible verificable.
5. Aprobar finalidades primarias y secundarias y un mecanismo separado para rechazar las secundarias.
6. Seleccionar y contratar hosting, backend, endpoint de leads, correo/CRM y demás personas encargadas con obligaciones de confidencialidad, seguridad, incidentes y supresión.
7. Definir una matriz de conservación, bloqueo y supresión por categoría y sistema.
8. Implementar aviso simplificado junto a cada punto de recolección, enlazado al aviso integral final.

### Antes de publicar testimonios reales

- Obtener autorización verificable para nombre, imagen, audio/video, texto, finalidad, canales, alcance territorial y periodo.
- Si el relato revela estado de salud, tratarlo como dato sensible y obtener el consentimiento reforzado aplicable.
- Conservar evidencia de la autorización y un procedimiento de retiro.
- Sustituir los nombres, relatos y retratos actuales por el material aprobado antes de publicar.

## Información aún necesaria para cerrar el aviso

1. Razón social o nombre legal del responsable.
2. Domicilio completo.
3. Persona/departamento y correo ARCO.
4. Dominio, hosting, región, registros y retención.
5. Destino de los formularios y personas con acceso.
6. Proveedores de correo, CRM, agenda, videollamada, almacenamiento y base de datos.
7. Uso operativo de WhatsApp, exportación y eliminación de conversaciones.
8. Tratamiento de datos clínicos, de terceros, representantes y menores.
9. Finalidades secundarias y método de negativa/baja.
10. Transferencias y subprocesadores.
11. Plazos de conservación por dato/finalidad.
12. Controles de seguridad e incidentes ya implementados.
13. Procedimiento de cancelación y borrado verificable.
14. Medio para comunicar cambios al aviso.

## Entregable relacionado

El aviso navegable está implementado en [`AvisoPrivacidad.tsx`](../src/app/pages/AvisoPrivacidad.tsx) y disponible en `/aviso-de-privacidad`. Conserva los campos pendientes que deben completarse antes de publicarlo como versión definitiva.
