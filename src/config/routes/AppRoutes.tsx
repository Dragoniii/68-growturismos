import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Planos } from "../../pages/Planos";
import { QuemSomos } from "../../pages/QuemSomos";
import { Servicos } from "../../pages/Servicos";
import { Contato } from "../../pages/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/planos",
    element: <Planos />,
  },
  {
    path: "/quemsomos",
    element: <QuemSomos />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/contato",
    element: <Contato />,
  }
  
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
