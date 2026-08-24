# Alium Care

Repositorio del sitio web y del seguimiento de mejoras UX/UI de Alium Care.

## Desarrollo local

```bash
cd website
npm install
npm run dev
```

La documentación de análisis y prioridades se encuentra en `docs/`.

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila `website/` y publica `website/dist` en cada push a `main`.

En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions** como fuente. El sitio quedará disponible en:

```text
https://ingesau.github.io/alium-care/
```

Las rutas usan hash (`#/servicios`, `#/recursos`, etc.) para funcionar correctamente en un hosting estático sin reglas de reescritura.
