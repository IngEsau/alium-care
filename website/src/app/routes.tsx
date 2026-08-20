import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";
import { AvisoPrivacidad } from "./pages/AvisoPrivacidad";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Servicios },
      { path: "contacto", Component: Contacto },
      { path: "aviso-de-privacidad", Component: AvisoPrivacidad },
    ],
  },
]);
