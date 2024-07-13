"use client";
import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Cosmosnav from "@/public/images/Cosmosnav.png";
import Logonav from "@/public/images/Logonav.png";

const Navbar: FC = () => {
  return (
    <nav className=" bg-white p-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2  ">
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

        <div className="flex-grow">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                className="text-muted-foreground hover:text-primary mx-6"
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary mx-6"
                href="/socios"
              >
                Socios
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary mx-6"
                href="/"
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground hover:text-primary mx-6"
                href="/socios"
              >
                Ayuda
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="bg-background text-primary border-primary rounded-full border-2 px-6 py-1"
            href="/login"
          >
            Ingresar
          </Link>
          <Link
            className="bg-primary text-background border-primary rounded-full border-2  px-6 py-1"
            href="/register"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
