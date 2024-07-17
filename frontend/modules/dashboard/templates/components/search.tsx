import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchTemplates = () => {
  return (
    <div className="relative">
      <Search className="text-primary-background absolute left-6 top-1/2 -translate-y-1/2" />
      <Input
        placeholder="Buscar templates (Tienda de vinos, portfolio..)"
        className="border-primary-background h-16 rounded-full border-2 pl-16 text-xl"
      />
    </div>
  );
};

export default SearchTemplates;
