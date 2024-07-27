import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ButtonsAddProps {
  onClick: () => void;
}
const ButtonsAdd: React.FC<ButtonsAddProps> = ({ onClick }) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <Button
          asChild
          type="submit"
          size="sm"
          className="text-muted-foreground border-primary hover:text-secondary sm:size-lg rounded-xl border bg-transparent"
        >
          <Link href="/dashboard/groups">Cancelar</Link>
        </Button>
        <div className="flex flex-col justify-end gap-2 sm:flex-row sm:gap-4">
          <Button
            type="submit"
            size="sm"
            className="text-muted-foreground border-primary hover:text-secondary sm:size-lg rounded-xl border bg-transparent font-light"
          >
            Guardar como borrador
          </Button>
          <Button
            onClick={onClick}
            type="submit"
            size="sm"
            className="sm:size-lg rounded-xl"
          >
            Crear
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonsAdd;
