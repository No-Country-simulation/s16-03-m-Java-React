import { Button } from "@/components/ui/button";

const textos = () => {
  return (
    <div className="mx-auto my-4 flex w-72 flex-col">
      <Button
        type="submit"
        size="sm"
        className="text-primary border-primary hover:text-secondary sm:size-lg my-2 rounded-xl border bg-transparent text-lg font-light"
      >
        Agregar título
      </Button>
      <Button
        type="submit"
        size="sm"
        className="text-primary border-primary hover:text-secondary sm:size-lg my-2 rounded-xl border bg-transparent text-sm font-light"
      >
        Agregar subtítulo
      </Button>
      <Button
        type="submit"
        size="sm"
        className="text-primary border-primary hover:text-secondary sm:size-lg my-2 rounded-xl border bg-transparent text-xs font-light"
      >
        Agregar texto
      </Button>
    </div>
  );
};
export default textos;
