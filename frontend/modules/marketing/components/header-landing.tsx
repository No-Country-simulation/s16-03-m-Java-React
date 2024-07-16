"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Headerimg from "@/public/images/headerimg.png";
const Header = () => {
  return (
    <header className="mx-4 md:mx-24 my-10 md:my-28 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:text-start">
        <h1 className="font-bold text-3xl md:text-5xl">
          Crea tu landing page profesional en minutos.
        </h1>
        <div className="mt-6 md:mt-10 w-full md:w-4/5 text-lg md:text-xl">
          <p>
            Haz <span className="font-bold">crecer tu negocio o marca personal.</span>{" "}
            <span className="font-bold">Multiplica tus ventas</span> e
            interacciones <span className="font-bold">gratis</span> y en simples pasos.
          </p>
        </div>
        <Button className="mt-8 md:mt-14 rounded-full">
          Crea tu landing gratis
        </Button>
        <div className="mt-8 md:mt-14 flex flex-col md:flex-row">
          <div className="flex items-start lg:flex-col md:flex-col mr-4 md:mr-8 mb-4 md:mb-0">
            <h1 className="text-accent-foreground text-2xl md:text-4xl font-bold">
              100+
            </h1>
            <p className="ml-4 md:ml-0">Páginas web creadas</p>
          </div>
          <div className="flex items-start lg:flex-col md:flex-col mr-4 md:mr-8 mb-4 md:mb-0">
            <h1 className="text-primary text-2xl md:text-4xl font-bold">
              100+
            </h1>
            <p className="ml-4 md:ml-0">Plantillas para uso comercial</p>
          </div>
          <div className="flex items-start lg:flex-col md:flex-col">
            <h1 className="text-destructive-foreground text-2xl md:text-4xl  font-bold">
              5000+
            </h1>
            <p className="ml-4 md:ml-0">Ventas en webs creadas con nosotros</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center mt-6 md:mt-0">
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
