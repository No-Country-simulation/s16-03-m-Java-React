import Image from "next/image";
import Link from "next/link";

import { TemplateType } from "@/modules/dashboard/templates/types";
import Template1 from "@/public/images/Template1.png";

type Props = {
  data: TemplateType;
};

const TemplateCard = ({ data }: Props) => {
  return (
    <Link
      href={`editor/${data?.slug}`}
      className="group overflow-hidden rounded-2xl"
    >
      <div className="grid gap-5">
        <picture className="overflow-hidden rounded-2xl">
          <Image
            src={Template1}
            alt={data?.name}
            className="aspect-video h-[280px] w-full rounded-2xl object-cover transition duration-500 group-hover:scale-125"
          />
        </picture>
        <h2 className="text-2xl font-bold">{data?.name}</h2>
      </div>
    </Link>
  );
};

export default TemplateCard;
