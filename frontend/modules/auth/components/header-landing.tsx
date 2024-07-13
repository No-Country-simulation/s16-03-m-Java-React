"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Headerimg from "@/public/images/headerimg.png";
const Header = () => {
  return (
    <header className=" mx-24 my-28 flex flex-col lg:flex-row  ">
      <div className=" w-full text-start lg:w-1/2">
        <h1 className="font-bold lg:text-5xl">
          Crea tu landing page profesional en minutos.
        </h1>
        <div>
          <p className="mt-10 w-4/5  text-xl lg:text-2xl ">
            Haz{" "}
            <span className="font-bold">
              crecer tu negocio o marca personal.
            </span>{" "}
            <span className="font-bold">Multiplica tus ventas</span> e
            interacciones
            <span className="font-bold"> gratis</span> y en simples pasos.
          </p>
          <Button className=" mt-14 rounded-full">
            Crea tu landing gratis
          </Button>
          <div className="mt-14 flex flex-row justify-start  ">
            <div>
              <h1 className="text-accent-foreground text-4xl font-bold ">
                100+
              </h1>
              <p className="w-36">Páginas web creadas</p>
            </div>
            <div className="mx-8">
              <h1 className="text-primary text-4xl font-bold ">100+</h1>
              <p className="w-36">Plantillas para uso comercial</p>
            </div>
            <div className="mx-8">
              <h1 className="text-destructive-foreground text-4xl font-bold ">
                5000+
              </h1>
              <p className="w-36">Ventas en webs creadas con nosotros</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-transparent lg:w-1/2">
        <Image
          className="mx-auto items-center"
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
