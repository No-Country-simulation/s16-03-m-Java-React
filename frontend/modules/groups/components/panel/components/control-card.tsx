"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PanelType } from "@/modules/groups/components/panel/data";

type Props = {
  data: PanelType;
  onDelete: (id: string) => void;
};

const ControlCard: React.FC<Props> = ({ data, onDelete }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="border-primary-background shadow-cards-purple block rounded-xl border">
      <div className="mr-4 mt-4 text-end">
        {isClient && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="dropdown-button">...</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="text-red-500"
                onClick={() => onDelete(data.id)}
              >
                Eliminar grupo
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <div className="flex flex-col items-center gap-6 px-4 py-8">
        <Link href="#">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default ControlCard;
