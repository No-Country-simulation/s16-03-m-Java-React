import { Button } from "@/components/ui/button";

const textos = () => {
  return (
    <div className="mx-auto my-4 flex w-72 flex-col">
      <Button
        type="submit"
        size="sm"
        className="text-primary  sm:size-lg hover:bg-gray-0 my-2 rounded-xl border border-gray-300 bg-gray-100 bg-transparent text-lg font-light opacity-60"
      >
        Agregar título
      </Button>
      <Button
        type="submit"
        size="sm"
        className="text-primary  sm:size-lg hover:bg-gray-0 my-2 rounded-xl border border-gray-300 bg-gray-100 bg-transparent text-lg font-light opacity-60"
      >
        Agregar subtítulo
      </Button>
      <Button
        type="submit"
        size="sm"
        className="text-primary  sm:size-lg hover:bg-gray-0 my-2 rounded-xl border border-gray-300 bg-gray-100 bg-transparent text-lg font-light opacity-60"
      >
        Agregar texto
      </Button>
    </div>
  );
};
export default textos;
