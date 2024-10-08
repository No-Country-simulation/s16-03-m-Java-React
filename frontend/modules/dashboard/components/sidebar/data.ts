export type SidebarLinkType = {
  title: string;
  url?: string;
  children?: SidebarLinkType[];
};

const sidebarLinks: SidebarLinkType[] = [
  {
    title: "Inicio",
    url: "/dashboard",
  },
  {
    title: "Productos",
    children: [
      // {
      //   title: "Todos los productos",
      //   url: "/dashboard/products",
      // },
      {
        title: "Añadir productos",
        url: "/dashboard/products/add",
      },
      {
        title: "Publicados",
        url: "/dashboard/products/published",
      },
    ],
  },
  {
    title: "Grupos",
    url: "/dashboard/groups",
  },
  {
    title: "Mis webs",
    url: "/dashboard/webs",
  },
  {
    title: "Estadísticas",
    url: "/dashboard/statistics",
  },
  {
    title: "Tutoriales",
    url: "/dashboard/tutorials",
  },
  {
    title: "Configuración",
    url: "/dashboard/config",
  },
];

export default sidebarLinks;
