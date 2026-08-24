# Estado de prioridades UX/UI de Alium Care

**Fecha de revisión:** 23 de agosto de 2026

Este documento relaciona los hallazgos de los análisis del proyecto con los cambios registrados en Git y separa lo que ya funciona de lo que todavía depende de información o decisiones del cliente.

## Prioridad alta

| Frente | Estado | Evidencia y alcance | Pendiente para cierre |
| --- | --- | --- | --- |
| Navegación y llamadas a la acción | Cubierto | El commit `20223b0` centraliza rutas y el ajuste actual sustituye “Agendar consulta” por “Habla con nuestro equipo” en header y hero. Servicios termina con una sola llamada a consulta. | Validación visual final del cliente. |
| WhatsApp visible y accesible | Cubierto técnicamente | El commit `20223b0` incorpora el acceso flotante global, mejora tamaño y separación de los bordes, y usa una sola configuración de contacto. | Confirmar que `221 963 4544` es el número definitivo y que la cuenta atiende el canal. |
| Testimonios | Parcial | El commit `49dfad8` incorpora la sección en Inicio con una estructura reutilizable y tres contenidos de referencia. No se muestran en Servicios. | Sustituir nombres, relatos e imágenes por materiales validados por Alium Care antes de publicación definitiva. |
| Equipo y credenciales | Parcial | El commit `49dfad8` incorporó la sección y el ajuste actual presenta cada perfil como una identificación vertical de mayor tamaño. | Sustituir nombres, funciones, especialidades y credenciales por información verificable del equipo. |
| Privacidad y ARCO | Parcial | El commit `be15c3b` agrega la auditoría técnica, la ruta `/aviso-de-privacidad` y el enlace desde el pie de página. | Confirmar identidad y domicilio del responsable, correo ARCO, finalidades reales, encargados, transferencias, plazos y operación efectiva de formularios. Véase [`website/docs/AUDITORIA_PRIVACIDAD.md`](../website/docs/AUDITORIA_PRIVACIDAD.md). |

## Prioridad media

| Cambio | Clasificación | Qué puede hacerse ahora | Contexto faltante |
| --- | --- | --- | --- |
| Metadatos básicos en español | Cubierto | `lang`, título, descripción, Open Graph y Twitter se presentan en español; cada vista actualiza título y descripción. | Agregar canonical e imagen social cuando se confirme el dominio y material definitivo. |
| WhatsApp global | Cubierto técnicamente | El acceso está disponible en todas las vistas y comparte una sola configuración. | Confirmación del número y del flujo operativo de atención. |
| Blog o recursos | Cubierto en frontend | Existen `/recursos`, una plantilla de detalle, tres lecturas y tres archivos PDF A4 generados desde la misma fuente de contenido. | Validación editorial médica/jurídica, autoría definitiva y eventual CMS para publicación continua. |
| Página de preguntas frecuentes | Cubierto en frontend | Existe `/preguntas-frecuentes` con ocho respuestas accesibles; el bloque completo fue retirado de Servicios. | Validar con el cliente el alcance exacto del servicio y aprobar la redacción final. |
| Webinar | Requiere contexto | Puede prepararse una plantilla cuando se defina el flujo. La promoción se retiró de Servicios porque no había una acción disponible. | Tema, fecha, zona horaria, ponente y credenciales, plataforma, precio, capacidad, URL o sistema de registro, cancelación y tratamiento de datos. |
| Guía o recurso descargable | Parcial | Cada recurso tiene PDF y formulario con nombre, correo y teléfono. El archivo sólo se libera después de una respuesta exitosa del endpoint configurado. | Seleccionar endpoint/proveedor, configurar `VITE_RESOURCE_LEAD_ENDPOINT`, aprobar tratamiento y confirmar recepción real en correo o CRM. |
| Tiempo de respuesta | Requiere contexto | Puede añadirse al contacto cuando exista un compromiso operativo. | Horario, plazo real de respuesta, responsable, canal y escalamiento. El formulario actual no envía información. |
| Retiro de `noindex` y SEO de producción | Revisado y retenido | El código conserva `noindex, nofollow` para evitar indexar contenido y datos legales aún pendientes. | Dominio y canonical, aviso validado, formularios funcionales, contenidos finales, sitemap y autorización expresa para publicar/indexar. |

## Siguiente secuencia recomendada

1. Validar con el cliente el contenido de Recursos, FAQ, equipo y testimonios.
2. Confirmar responsable de privacidad, operación de contacto y tiempo real de respuesta.
3. Conectar Contacto y las descargas a proveedores aprobados; ejecutar la prueba técnica y confirmar recepción real en el buzón o CRM.
4. Definir tema, fecha, ponente, plataforma y registro antes de reincorporar el webinar.
5. Completar canonical, sitemap y SEO de producción; retirar `noindex` únicamente al autorizar la publicación.
