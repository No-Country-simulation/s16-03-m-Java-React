"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import SocialMediaFooter from "../../marketing/components/social-media-footer";
import Cosmosfot from "@/public/images/Cosmosfoot.png";
import Logofoot from "@/public/images/Logofoot.png";

const Footer: FC = () => {
  return (
 <footer className="bg-primary w-full text-destructive-foreground md:h-48  relative overflow-hidden">
    
      <div className="absolute bottom-0 left-0 transform -skew-y-6">
        <Image src={Logofoot} alt="Logo footer" width={260} height={260} />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-8 ">
      
        <div className="flex flex-col md:flex-row justify-center">
      
          <div className="flex flex-col mx-4 items-start mb-8 md:mb-0 ">
            <div className="mb-4">
              <Image src={Cosmosfot} alt="Logo footer" width={150} height={50} />
            </div>
            <p className="text-secondary text-xs font-light">Donde nacen tus ideas</p>
          </div>

          <div className="text-secondary  mx-4 flex flex-col items-start mb-8 md:mb-0 md:ml-16">
            <h1 className="mb-2 text-sm">Secciones</h1>
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

      
          <div className="text-secondary  mx-4 flex flex-col items-start mb-8 md:mb-0 md:ml-16">
            <h1 className="mb-2 text-sm">Ayuda y soporte</h1>
            <Link href="/contacto" className="mb-1 text-xs font-light">
              Contactanos
            </Link>
            <Link href="/terminos-y-condiciones" className="mb-1 text-xs font-light">
              Términos y condiciones
            </Link>
            <Link href="/quienes-somos" className="mb-1 text-xs font-light">
              Quiénes somos
            </Link>
          </div>

         
          <div className="text-secondary  mx-4 flex flex-col items-start mb-8 md:mb-0 md:ml-16 ">
            <h1 className="mb-2 text-sm">Seguinos en nuestras redes</h1>
            <SocialMediaFooter />
          </div>
        </div>

      
        <p className="pt-6 text-center text-xs font-light">
          {new Date().getFullYear()} Equipo Cosmos. ∙ Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
