import Image from "next/image";

import { Button } from "@/components/ui/button";
import flecha from "@/public/images/flecha-correcta.png";
import formas from "@/public/images/formas.png";
import megafono from "@/public/images/megafono.png";

const elements = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Button
        type="submit"
        size="sm"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-80 hover:bg-gray-100"
      >
        <Image src={formas} alt="Formas" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Formas</p>
      </Button>
      <Button
        type="submit"
        size="lg"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-80 hover:bg-gray-100"
      >
        <Image src={flecha} alt="Botones" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Botones</p>
      </Button>
      <Button
        type="submit"
        size="sm"
        className="mx-1 flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 text-gray-400 opacity-80 hover:bg-gray-100"
      >
        <Image src={megafono} alt="Íconos" width={40} height={40} />
        <p className="mt-2 font-light text-gray-400">Íconos</p>
      </Button>
    </div>
  );
};

export default elements;
