"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";
import ButtonUser from "@/modules/dashboard/components/button-user";

const Header: FC = () => {
  return (
    <nav className="relative z-50 w-full bg-white px-4 shadow-md md:px-10 lg:px-20">
      <div className="mx-auto flex items-center justify-between py-2">
        <Link href="/">
          <div className="flex items-center">
            <Image
              className="mr-4"
              src={Logonav}
              alt="Logonav"
              width={45}
              height={48}
            />
            <Image src={Cosmosnav} alt="Cosmosnav" width={128} height={22} />
          </div>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-4 px-4">
          <ButtonUser />
          <p className="w-40">User Name</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
