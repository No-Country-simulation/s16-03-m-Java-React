"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarLinkType } from "../data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logowhite from "@/public/images/Logowhite.png";

type Props = {
  data: SidebarLinkType;
};

const Item = ({ data }: Props) => {
  const pathName: string = usePathname();

  const isActive: boolean = pathName === data.url;
  return (
    <Link
      href={data?.url ? data?.url : ""}
      className={cn(
        buttonVariants({
          size: "lg",
          variant: "sidebar_button",
        }),
        `relative items-center justify-start gap-4 pl-[80px] ${
          isActive ? "text-primary-foreground" : ""
        }`
      )}
    >
      {isActive && (
        <Image
          className="absolute left-8 top-1/2 mt-1 h-8 w-8 -translate-y-1/2"
          src={Logowhite}
          alt="logo white"
        />
      )}
      <p className="text-lg font-medium">{data.title}</p>
    </Link>
  );
};

export default Item;
