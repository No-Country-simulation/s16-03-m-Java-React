import { StaticImageData } from "next/image";

import Webs1 from "@/public/images/Template1.png";
import Webs2 from "@/public/images/Template2.png";
import Webs3 from "@/public/images/Template3.png";
import Webs4 from "@/public/images/Template4.png";

//Datos para traer de la base de datos
// export interface WebsType {
//   id: string;
//   title: string;
//   description: string;
//   url: string;
// }

export type WebsType = {
  image: StaticImageData;
  title: string;
};

export const webs: WebsType[] = [
  {
    title: "Web 1",
    image: Webs1,
  },
  {
    title: "Web 2",
    image: Webs2,
  },
  {
    title: "Web 3",
    image: Webs3,
  },
  {
    title: "Web 4",
    image: Webs4,
  },
  {
    title: "Web 1",
    image: Webs1,
  },
  {
    title: "Web 2",
    image: Webs2,
  },
  {
    title: "Web 3",
    image: Webs3,
  },
  {
    title: "Web 4",
    image: Webs4,
  },
];
