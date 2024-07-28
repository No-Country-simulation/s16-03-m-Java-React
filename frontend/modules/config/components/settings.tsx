import { Upload } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Config = () => {
  return (
    <>
      <form className="flex flex-col gap-6 px-4 py-6 md:flex-row md:px-8">
        <div className="flex flex-1 flex-col">
          <label className="text-lg font-semibold">Nombre y apellido</label>
          <Input
            className="my-4 w-full md:w-96"
            type="text"
            placeholder="Escribe tu nombre y apellido"
          />
          <label className="text-lg font-semibold">Email</label>
          <Input
            className="my-4 w-full md:w-96"
            type="text"
            placeholder="Escribe tu email"
          />
          <label className="text-lg font-semibold">Nombre del negocio</label>
          <Input
            className="my-4 w-full md:w-96"
            type="text"
            placeholder="Escribe el nombre del negocio"
          />
          <label className="text-lg font-semibold">Rubro</label>
          <Input
            className="my-4 w-full md:w-96"
            type="text"
            placeholder="Escribe el rubro"
          />
          <Button className="my-4 w-full md:w-96" type="submit">
            Guardar
          </Button>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="bg-muted my-4 flex flex-col items-center justify-center rounded-xl p-4">
            <p className="text-lg font-semibold">Logo de tu negocio</p>
            <div className="flex flex-col items-center">
              <Link href="/#">
                <Upload className="my-4 h-6 w-6" />
              </Link>
              <p className="text-muted-foreground">
                Carga tu logo .jpg .png .gif
              </p>
            </div>
          </div>
          <div className="bg-muted my-4 flex flex-col items-center justify-center rounded-xl p-4">
            <p className="text-lg font-semibold">Imagen de perfil</p>
            <div className="flex flex-col items-center">
              <Link href="/#">
                <Upload className="my-4 h-6 w-6" />
              </Link>
              <p className="text-muted-foreground">
                Carga tu imagen .jpg .png .gif
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Config;
