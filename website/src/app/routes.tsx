import { createHashRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";
import { AvisoPrivacidad } from "./pages/AvisoPrivacidad";
import { Blog } from "./pages/Recursos";
import { ArticuloDetalle } from "./pages/RecursoDetalle";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes";
import { siteFeatures } from "./config/site";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Servicios },
      ...(siteFeatures.blog
        ? [
            { path: "blog", Component: Blog },
            { path: "blog/:slug", Component: ArticuloDetalle },
            { path: "recursos/*", element: <Navigate to="/blog" replace /> },
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
