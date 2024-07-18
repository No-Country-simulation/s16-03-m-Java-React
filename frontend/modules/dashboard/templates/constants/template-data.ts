import { StaticImageData } from "next/image";

import Template1 from "@/public/images/Template1.png";
import Template2 from "@/public/images/Template2.png";
import Template3 from "@/public/images/Template3.png";
import Template4 from "@/public/images/Template4.png";

export type TemplateType = {
  image: StaticImageData;
  title: string;
};

export const templates: TemplateType[] = [
  {
    title: "Template 1",
    image: Template1,
  },
  {
    title: "Template 2",
    image: Template2,
  },
  {
    title: "Template 3",
    image: Template3,
  },
  {
    title: "Template 4",
    image: Template4,
  },
  {
    title: "Template 1",
    image: Template1,
  },
  {
    title: "Template 2",
    image: Template2,
  },
  {
    title: "Template 3",
    image: Template3,
  },
  {
    title: "Template 4",
    image: Template4,
  },
];
