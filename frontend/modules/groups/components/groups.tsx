import Link from "next/link";

import { Button } from "@/components/ui/button";
import Index from "@/modules/groups/components/panel/index";

const Groups = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <h1 className="py-10 text-2xl font-bold md:text-4xl">
          Grupos de productos
        </h1>
        <Button asChild size="sm" className="w-48 rounded-xl">
          <Link href="groups/add/">Añadir</Link>
        </Button>
      </div>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-row gap-4">
          <Index />
        </div>
      </div>
    </>
  );
};

export default Groups;
