import { StaticImageData } from "next/image";

import AddShoppingCart from "@/public/images/AddShoppingCart.png";
import Books from "@/public/images/Books.png";
import Settings from "@/public/images/Settings.png";
import Statistics from "@/public/images/Statistics.png";

export type PanelCardType = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const cards: PanelCardType[] = [
  {
    icon: Statistics,
    title: "Estadísticas",
    description:
      "Aquí podrás observar la información estadística sobre tu negocio",
  },
  {
    icon: AddShoppingCart,
    title: "Productos",
    description:
      "Aquí podrás añadir, editar y organizar los productos de tu negocio",
  },
  {
    icon: Books,
    title: "Tutoriales",
    description:
      "Aquí encontrarás ayuda y consejos sobre como hacer tu página ",
  },
  {
    icon: Settings,
    title: "Configuración",
    description: "Aquí podrás hacer ajustes sobre tu usuario y negocio",
  },
];

export default cards;
