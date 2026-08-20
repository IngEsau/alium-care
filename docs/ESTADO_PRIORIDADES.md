# Estado de prioridades UX/UI de Alium Care

**Fecha de revisión:** 20 de agosto de 2026

Este documento relaciona los hallazgos de los análisis del proyecto con los cambios registrados en Git y separa lo que ya funciona de lo que todavía depende de información o decisiones del cliente.

## Prioridad alta

| Frente | Estado | Evidencia y alcance | Pendiente para cierre |
| --- | --- | --- | --- |
| Navegación y llamadas a la acción | Cubierto | El commit `20223b0` centraliza rutas, enlaza cada servicio con su sección y dirige las consultas al formulario. Servicios termina con una sola llamada a consulta. | Validación visual final del cliente. |
| WhatsApp visible y accesible | Cubierto técnicamente | El commit `20223b0` incorpora el acceso flotante global, mejora tamaño y separación de los bordes, y usa una sola configuración de contacto. | Confirmar que `221 963 4544` es el número definitivo y que la cuenta atiende el canal. |
| Testimonios | Parcial | El commit `49dfad8` incorpora la sección en Inicio con una estructura reutilizable y tres contenidos de referencia. No se muestran en Servicios. | Sustituir nombres, relatos e imágenes por materiales validados por Alium Care antes de publicación definitiva. |
| Equipo y credenciales | Parcial | El commit `49dfad8` integra un bloque compacto de equipo dentro de Servicios y reutiliza los retratos existentes. | Sustituir nombres, funciones, especialidades y credenciales por información verificable del equipo. |
| Privacidad y ARCO | Parcial | El commit `be15c3b` agrega la auditoría técnica, la ruta `/aviso-de-privacidad` y el enlace desde el pie de página. | Confirmar identidad y domicilio del responsable, correo ARCO, finalidades reales, encargados, transferencias, plazos y operación efectiva de formularios. Véase [`website/docs/AUDITORIA_PRIVACIDAD.md`](../website/docs/AUDITORIA_PRIVACIDAD.md). |

## Prioridad media

| Cambio | Clasificación | Qué puede hacerse ahora | Contexto faltante |
| --- | --- | --- | --- |
| Metadatos básicos en español | Implementable | Cambiar `lang`, título y descripción para reflejar Alium Care en español. | El dominio definitivo y la imagen social solo son necesarios para canonical/Open Graph completos. |
| WhatsApp global | Ya cubierto | No requiere otro desarrollo visual. | Confirmación del número y del flujo operativo de atención. |
| Blog o recursos | Preparación parcial | Crear rutas, listado, plantilla de artículo y modelo de contenido. | Nombre de la sección, artículos iniciales, autoría, imágenes y revisión médica/legal para publicar. |
| Preguntas frecuentes en Servicios | Preparación parcial | Crear el componente y su estructura accesible. | Entre 6 y 10 respuestas aprobadas sobre proceso, alcance, costos, emergencias, privacidad y límites del servicio. |
| Webinar | Requiere contexto | Puede prepararse una plantilla cuando se defina el flujo. La promoción se retiró de Servicios porque no había una acción disponible. | Tema, fecha, zona horaria, ponente y credenciales, plataforma, precio, capacidad, URL o sistema de registro, cancelación y tratamiento de datos. |
| Guía o recurso descargable | Requiere contexto | La interfaz de captura puede diseñarse después de definir la entrega. | Archivo y contenido final, proveedor o backend de entrega, consentimiento, conservación de datos y mecanismo de baja. |
| Tiempo de respuesta | Requiere contexto | Puede añadirse al contacto cuando exista un compromiso operativo. | Horario, plazo real de respuesta, responsable, canal y escalamiento. El formulario actual no envía información. |
| Retiro de `noindex` y SEO de producción | Requiere decisión de publicación | Mantener el sitio fuera de indexación mientras siga en revisión. | Dominio y canonical, aviso validado, formularios funcionales, contenidos finales, sitemap y autorización expresa para publicar/indexar. |

## Siguiente secuencia recomendada

1. Implementar los metadatos básicos en español.
2. Solicitar al cliente los datos verificables de equipo, testimonios, responsable de privacidad y operación de contacto.
3. Definir si el siguiente producto de contenido será FAQ, webinar, guía descargable o blog; cada opción necesita responsables y materiales distintos.
4. Conectar los formularios a un flujo real y actualizar la auditoría y el aviso con los proveedores y plazos finalmente elegidos.
5. Completar SEO de producción y retirar `noindex` únicamente al autorizar la publicación.
