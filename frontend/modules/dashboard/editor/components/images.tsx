import Image from "next/image";

import { Button } from "@/components/ui/button";
import cargados from "@/public/images/cargados.png";
import enlace from "@/public/images/enlace.png";
import up from "@/public/images/Up.png";

const images = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Button
        type="submit"
        size="sm"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-50 hover:bg-gray-100"
      >
        <Image src={cargados} alt="Cargadas" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Cargadas</p>
      </Button>
      <Button
        type="submit"
        size="lg"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-50 hover:bg-gray-100"
      >
        <Image src={up} alt="Subir" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Subir</p>
      </Button>
      <Button
        type="submit"
        size="sm"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-50 hover:bg-gray-100"
      >
        <Image src={enlace} alt="Link" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Link</p>
      </Button>
    </div>
  );
};

export default images;
