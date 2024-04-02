export interface NavigationLink {
    path: string;
    element: string;
  }
  
  export const Navigation: NavigationLink[] = [
    { path: "/", element: "GrowTravel" },
    { path: "/quemsomos", element: "Quem Somos" },
    { path: "/servicos", element: "Serviços" },
    { path: "/planos", element: "Planos" },
    { path: "/contato", element: "Contato" },

  ];
  