import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Heading = () => {
  return (
    <section>
      <h1 className="space-y-24 py-10 text-4xl font-bold">Productos</h1>
      <div className="flex flex-row">
        <Image
          src="/images/products.png"
          alt="heading"
          width={450}
          height={283}
        />
        <div className="flex flex-col items-start justify-center px-8">
          <h3 className="text-2xl font-medium">Subí tus productos</h3>
          <p className="mt-4 text-sm font-light">
            ¡Agregar tus productos es fundamental para empezar a vender! Una vez
            cargados vas a poder empezar a administrarlos desde acá.
          </p>
          <div className="mx-auto mt-6 flex flex-row">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="products/add/">Agrega tu Producto</Link>
            </Button>
            <Button className="text-muted-foreground bg-background hover:text-primary-background hover:bg-white">
              Importar Productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
