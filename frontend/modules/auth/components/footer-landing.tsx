"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import SocialMediaFooter from "./social-media-footer";
import Cosmosfot from "@/public/images/Cosmosfoot.png";
// import Infofoot from "@/public/images/Infofoot.png";
import Logofoot from "@/public/images/Logofoot.png";

const Footer: FC = () => {
  return (
    <footer className="bg-primary text-destructive-foreground relative h-48 overflow-hidden p-4">
      <div className=" absolute bottom-0 -skew-y-6 transform">
        <Image src={Logofoot} alt="Logo footer" width={260} height={260} />
      </div>
      <div>
        <div className="flex flex-row justify-evenly px-32 pt-6">
          <div className="flex flex-col">
            <div>
              <Image
                className="mt-4"
                src={Cosmosfot}
                alt="Logo footer"
                width={150}
                height={50}
              />
            </div>

            <div>
              {/* <Image
                className="mt-4"
                src={Infofoot}
                alt="Infofoot"
                width={150}
                height={50}
              /> */}
              <p className="text-secondary ml-1 mt-2  w-32 text-xs font-light ">
                Tu landing page en minutos
              </p>
            </div>
          </div>

          <div className="text-secondary flex flex-col">
            <h1 className=" mb-2 text-sm ">Secciones</h1>
            <Link href="/" className="mb-1 text-xs font-light">
              Inicio
            </Link>
            <Link href="/socios" className="mb-1 text-xs font-light">
              Socios
            </Link>
            <Link href="/planes" className="mb-1 text-xs font-light">
              Planes
            </Link>
          </div>
          <div className="text-secondary flex flex-col">
            <h1 className="mb-2 text-sm">Ayuda y soporte</h1>
            <Link href="/contacto" className="mb-1 text-xs font-light">
              Contactanos
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="mb-1 text-xs font-light"
            >
              Términos y condiciones
            </Link>
            <Link href="/quienes-somos" className="mb-1 text-xs font-light">
              Quiénes somos
            </Link>
          </div>
          <div className="text-secondary flex flex-col">
            <h1 className=" text-sm ">Seguinos en nuestras redes</h1>
            <SocialMediaFooter />
          </div>
        </div>
      </div>

      <div>
        <p className="pt-6 text-center text-xs font-light">
          {new Date().getFullYear()} Equipo Cosmos. ∙ Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
