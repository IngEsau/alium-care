# Integración de descargas y correo

La interfaz de Recursos solicita nombre, correo y teléfono. El archivo PDF sólo se descarga cuando el endpoint configurado responde con un código HTTP exitoso.

## Configuración

Definir en el ambiente de despliegue:

```env
VITE_RESOURCE_LEAD_ENDPOINT=https://dominio-del-backend.example/resource-leads
```

El frontend realiza una petición `POST` con `Content-Type: application/json`:

```json
{
  "name": "Nombre de prueba",
  "email": "correo@example.com",
  "phone": "+52 000 000 0000",
  "resourceSlug": "cinco-preguntas-para-el-equipo-medico",
  "resourceTitle": "5 preguntas para conversar mejor con el equipo médico",
  "source": "alium-care-recursos",
  "privacyNoticeAccepted": true,
  "submittedAt": "2026-08-23T12:00:00.000Z"
}
```

## Responsabilidades del endpoint

1. Validar y normalizar los tres datos de contacto.
2. Aplicar límites de frecuencia, protección contra automatización y registros de errores.
3. Enviar la notificación al buzón aprobado por Alium Care o almacenar el lead en el CRM elegido.
4. Responder con `2xx` únicamente cuando la operación haya sido aceptada.
5. Configurar CORS para el dominio definitivo del sitio.
6. Aplicar conservación, eliminación y atención ARCO conforme al aviso aprobado.

## Prueba de recepción

El script `npm run test:lead-endpoint` envía un registro marcado como prueba. Un `2xx` sólo acredita que el endpoint aceptó la solicitud; la prueba se considera completa cuando una persona confirma que el mensaje apareció en el buzón o CRM de destino.

No debe usarse un correo personal ni un servicio externo sin autorización, contrato y actualización previa del aviso de privacidad.
