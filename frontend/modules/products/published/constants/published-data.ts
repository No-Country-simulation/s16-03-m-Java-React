import { StaticImageData } from "next/image";
import Published1 from "@/public/images/Published1.png";



export type PublishedType = {
    image: string | StaticImageData;
    title: string;
};
    

export const Published: PublishedType[] = [
  {
    title: "Published 1",
    image: Published1,
  },
  {
    title: "Published 2",
    image: Published1,
  },
  {
    title: "Published 3",
    image: Published1,
  },
  {
    title: "Published 4",
    image: Published1,
  },
  {
    title: "Published 5",
    image: Published1,
  },
  {
    title: "Published 5",
    image: Published1,
  },
  {
    title: "Published 5",
    image: Published1,
  },
  {
    title: "Published 8",
    image: Published1,
  },
];
