"use client";

import { ReactNode } from "react";
import Logo from "@/public/images/Logo.png";
import WebWave from "@/public/images/WebWave.png";
import FormImage from "@/public/images/form-image.png";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <section className="bg-primary  flex">
      <div className="text-destructive-foreground flex w-1/2 flex-col justify-between p-8">
        <div className="mb-8 flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <Image src={WebWave} alt="Logo" width={100} height={50} />
        </div>
        <div className="w-2/2 mx-auto p-8 text-start">
          <h1 className="mb-4 text-5xl font-extrabold ">
            Crea tu landing page profesional en minutos.
          </h1>
          <div>
            <p className="mt-20 text-xl">
              Haz <span className="font-bold">crecer tu negocio</span> y{" "}
              <span className="font-bold">multiplica tus ventas</span> e
              interacciones <span className="font-bold">gratis</span> y en
              simples pasos.
            </p>
          </div>
        </div>
        <div className="mt-8 ">
          <Image
            className="mx-auto items-center"
            src={FormImage}
            alt="Image form"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="bg-background flex w-1/2 items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default FormLayout;
