import Link from "next/link";

import { Button } from "@/components/ui/button";

const Heading = () => {
  return (
    <section className="grid">
      <h1 className="mb-8 text-5xl font-bold">Inicio</h1>
      <div className="mb-7">
        <p className="text-primary-background mb-2 text-center text-3xl font-bold">
          ¡Es el momento!
        </p>
        <p className="text-center text-2xl">
          Aquí es donde comienzan tus ideas.
        </p>
        <p className="text-center text-2xl">
          Empieza a diseñar y crear tu negocio con Cosmos.
        </p>
      </div>
      <Button
        asChild
        className="mx-auto w-full max-w-2xl rounded-lg py-8 text-xl"
        size="lg"
      >
        <Link href="dashboard/templates/">Crear mi web</Link>
      </Button>
    </section>
  );
};

export default Heading;
