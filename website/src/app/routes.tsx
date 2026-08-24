import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";
import { AvisoPrivacidad } from "./pages/AvisoPrivacidad";
import { Recursos } from "./pages/Recursos";
import { RecursoDetalle } from "./pages/RecursoDetalle";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Servicios },
      { path: "recursos", Component: Recursos },
      { path: "recursos/:slug", Component: RecursoDetalle },
      { path: "preguntas-frecuentes", Component: PreguntasFrecuentes },
      { path: "contacto", Component: Contacto },
      { path: "aviso-de-privacidad", Component: AvisoPrivacidad },
    ],
  },
]);
