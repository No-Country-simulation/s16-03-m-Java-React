import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define la interfaz para los productos
interface Product {
  id: string;
  name: string;
}

// Define las props para el componente MultiSelect
interface MultiSelectProps {
  products: Product[];
}

export function MultiSelect({ products }: MultiSelectProps) {
  return (
    <Select>
      <SelectTrigger className="border-primary text-muted-foreground w-[280px]">
        <SelectValue placeholder="Escoge un producto" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-muted-foreground">Products</SelectLabel>
          {products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
