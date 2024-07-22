"use client";

import { ReactNode } from "react";

import Image from "next/image";

import FormImage from "@/public/images/form-image.png";
import Logo from "@/public/images/Logo.png";

type Props = {
  children: ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <section className="bg-primary flex flex-col lg:flex-row">
      <div className="text-secondary w-full flex-col justify-between p-8 lg:w-1/2">
        <div className="mb-8 ml-8 flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={220} height={57} />
        </div>
        <div className="lg:w-2/2 mx-auto w-full p-8 text-start">
          <h1 className="font-bold lg:text-5xl text-3xl">
            Crea tu landing page profesional en minutos.
          </h1>
          <div>
            <p className="mt-10 text-xl lg:text-xl">
              Haz <span className="font-bold">crecer tu negocio</span> y{" "}
              <span className="font-bold">multiplica tus ventas</span> e
              interacciones <span className="font-bold">gratis</span> y en
              simples pasos.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            className="mx-auto items-center"
            src={FormImage}
            alt="Image form"
            width={580}
            height={580}
          />
        </div>
      </div>
      <div className="bg-background flex w-full items-center justify-center p-8  lg:w-1/2">
        {children}
      </div>
    </section>
  );
};

export default FormLayout;
