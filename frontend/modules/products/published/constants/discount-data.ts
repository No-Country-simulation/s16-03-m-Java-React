import { StaticImageData } from "next/image";

import Published1 from "@/public/images/Published1.png";

export type DiscountType = {
  image: string | StaticImageData;
  title: string;
  price: string;
  newPrice: string;
  id?: number | string;
};

export const PublishedDiscounts: DiscountType[] = [
  {
    title: "Published 1",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 1,
  },
  {
    title: "Published 2",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 2,
  },
  {
    title: "Published 3",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 3,
  },
  {
    title: "Published 4",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 4,
  },
  {
    title: "Published 5",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 5,
  },
  {
    title: "Published 6",
    image: Published1,
    price: "$100",
    newPrice: "$10",
    id: 6,
  },
];
