import Image from "next/image";
import Link from "next/link";

import { PanelCardType } from "@/modules/dashboard/init/components/panel/data";

type Props = {
  data: PanelCardType;
};

const ControlCard = ({ data }: Props) => {
  return (
    <Link
      href="#"
      className="border-primary-background block rounded-xl border px-9 py-8"
    >
      <div className="mb-6 flex items-center gap-6">
        <Image src={data.icon} alt={data.title} />
        <h1 className="text-2xl">{data.title}</h1>
      </div>
      <p className="text-lg">{data.description}</p>
    </Link>
  );
};

export default ControlCard;
