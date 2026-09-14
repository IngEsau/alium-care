const endpoint = process.env.RESOURCE_LEAD_ENDPOINT ?? process.env.VITE_RESOURCE_LEAD_ENDPOINT;
const email = process.env.TEST_LEAD_EMAIL;
const phone = process.env.TEST_LEAD_PHONE;
const name = process.env.TEST_LEAD_NAME ?? "Prueba Alium Care";

if (!endpoint || !email || !phone) {
  process.stderr.write(
    "Faltan RESOURCE_LEAD_ENDPOINT, TEST_LEAD_EMAIL o TEST_LEAD_PHONE. No se envió información.\n",
  );
  process.exit(1);
}

const payload = {
  name,
  email,
  phone,
  resourceSlug: "prueba-integracion",
  resourceTitle: "Prueba de integración",
  source: "alium-care-resource-endpoint-test",
  privacyNoticeAccepted: true,
  submittedAt: new Date().toISOString(),
};

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const responseBody = await response.text();

if (!response.ok) {
  process.stderr.write(`El endpoint respondió ${response.status}: ${responseBody}\n`);
  process.exit(1);
}

process.stdout.write(
  `El endpoint aceptó el lead con HTTP ${response.status}. Confirma manualmente su recepción en el buzón o CRM.\n`,
);
