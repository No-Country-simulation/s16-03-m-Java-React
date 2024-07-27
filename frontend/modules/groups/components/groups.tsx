import Link from "next/link";

import { Button } from "@/components/ui/button";
import Index from "@/modules/groups/components/panel/index";

const Groups = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="space-y-24 py-10 text-4xl font-bold">
          Grupos de productos
        </h1>

        <Button asChild size="sm" className="w-48 rounded-xl">
          <Link href="groups/add/">Añadir</Link>
        </Button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row gap-4">
          <Index />
        </div>
      </div>
    </>
  );
};

export default Groups;
