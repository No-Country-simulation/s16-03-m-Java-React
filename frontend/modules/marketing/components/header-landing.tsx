"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Headerimg from "@/public/images/headerimg.png";
const Header = () => {
  return (
    <header className="container mx-4 my-10 flex flex-col items-center md:mx-24 md:my-28 md:flex-row">
      <div className="w-full md:w-1/2 md:text-start">
        <h1 className="text-3xl font-bold md:text-5xl">
          Crea tu landing page profesional en minutos.
        </h1>
        <div className="mt-6 w-full text-lg md:mt-10 md:w-4/5 md:text-xl">
          <p>
            Haz{" "}
            <span className="font-bold">
              crecer tu negocio o marca personal.
            </span>{" "}
            <span className="font-bold">Multiplica tus ventas</span> e
            interacciones <span className="font-bold">gratis</span> y en simples
            pasos.
          </p>
        </div>
        <Button className="mt-8 rounded-full md:mt-14">
          Crea tu landing gratis
        </Button>
        <div className="mt-8 flex flex-col md:mt-14 md:flex-row">
          <div className="mb-4 mr-4 flex items-start md:mb-0 md:mr-8 md:flex-col lg:flex-col">
            <h1 className="text-accent-foreground text-2xl font-bold md:text-4xl">
              100+
            </h1>
            <p className="ml-4 md:ml-0">Páginas web creadas</p>
          </div>
          <div className="mb-4 mr-4 flex items-start md:mb-0 md:mr-8 md:flex-col lg:flex-col">
            <h1 className="text-primary text-2xl font-bold md:text-4xl">
              100+
            </h1>
            <p className="ml-4 md:ml-0">Plantillas para uso comercial</p>
          </div>
          <div className="flex items-start md:flex-col lg:flex-col">
            <h1 className="text-destructive-foreground text-2xl font-bold  md:text-4xl">
              5000+
            </h1>
            <p className="ml-4 md:ml-0">Ventas en webs creadas con nosotros</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full justify-center md:mt-0 md:w-1/2">
        <Image
          className="mx-auto"
          src={Headerimg}
          alt="Image form"
          width={580}
          height={580}
        />
      </div>
    </header>
  );
};
export default Header;
