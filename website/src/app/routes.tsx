import { createHashRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";
import { AvisoPrivacidad } from "./pages/AvisoPrivacidad";
import { Recursos } from "./pages/Recursos";
import { RecursoDetalle } from "./pages/RecursoDetalle";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes";
import { siteFeatures } from "./config/site";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Servicios },
      ...(siteFeatures.resources
        ? [
            { path: "recursos", Component: Recursos },
            { path: "recursos/:slug", Component: RecursoDetalle },
          ]
        : [
            { path: "recursos/*", element: <Navigate to="/" replace /> },
            { path: "blog/*", element: <Navigate to="/" replace /> },
          ]),
      { path: "preguntas-frecuentes", Component: PreguntasFrecuentes },
      { path: "contacto", Component: Contacto },
      { path: "aviso-de-privacidad", Component: AvisoPrivacidad },
    ],
  },
]);
