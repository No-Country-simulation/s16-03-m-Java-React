import Image from "next/image";
import Link from "next/link";

import Tutorials from "@/public/images/tutorials.png";

const Tutoriales = () => {
  return (
    <section className="px-4 pb-20 md:px-0">
      <h2 className="py-10 text-lg font-bold md:ml-0 md:text-xl">
        Cómo diseñar tu página
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 2</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 3</p>
          <Link href="#">
            <p className="mt-2 text-end underline underline-offset-1 md:ml-40">
              Ver todos
            </p>
          </Link>
        </div>
      </div>

      <h2 className="py-10 text-lg font-bold md:ml-0 md:text-xl">
        Cómo mejorar tu negocio
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 2</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 3</p>
          <Link href="#">
            <p className="mt-2 text-end underline underline-offset-1 md:ml-40">
              Ver todos
            </p>
          </Link>
        </div>
      </div>

      <h2 className="py-10 text-lg font-bold md:ml-0 md:text-xl">
        Cómo resolver problemas comunes
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 2</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-accent flex h-40 w-full max-w-xs items-center justify-center rounded-xl">
            <Image className="mx-auto" src={Tutorials} alt="Video tutorial" />
          </div>
          <p className="mt-2 text-center">Video 3</p>
          <Link href="#">
            <p className="mt-2 text-end underline underline-offset-1 md:ml-40">
              Ver todos
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tutoriales;
