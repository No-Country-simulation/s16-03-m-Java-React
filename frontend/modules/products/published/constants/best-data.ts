import { StaticImageData } from "next/image";
import Published1 from "@/public/images/Published1.png";

export type BestType = {
    image: string | StaticImageData;
    title: string;
    price: string;
    id?: number | string;
};

export const PublishedBest: BestType[] = [
    {
        title: "Published 1",
        image: Published1,
        price: "$100",
        id: 1,
    },
    {
        title: "Published 2",
        image: Published1,
        price: "$100",
        id: 2,
    },
    {
        title: "Published 3",
        image: Published1,
        price: "$100",
        id: 3,
    },
    {
        title: "Published 4",
        image: Published1,
        price: "$100",
        id: 4,
    },
      {
        title: "Published 5",
        image: Published1,
        price: "$100",
        id: 5,
    },
      {
        title: "Published 6",
        image: Published1,
        price: "$100",
        id: 6,
    },
];
