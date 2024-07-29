import Image from "next/image";
import Link from "next/link";

import { WebsType } from "@/modules/webs/constant/webs-data";

type Props = {
  data: WebsType;
};

const WebsCard = ({ data }: Props) => {
  return (
    <Link href="templates/editor" className="group overflow-hidden rounded-2xl">
      <div className="grid gap-5">
        <picture className="overflow-hidden rounded-2xl">
          <Image
            src={data.image}
            alt={data.title}
            className="aspect-video h-[280px] w-full rounded-2xl object-cover transition duration-500 group-hover:scale-125"
          />
        </picture>
        <h2 className="text-2xl font-bold">{data.title}</h2>
      </div>
    </Link>
  );
};

export default WebsCard;
