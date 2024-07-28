import Settings from "@/modules/config/components/settings";

const Config = () => {
  return (
    <>
      <div className="px-4 md:px-8">
        <h1 className="py-10 text-3xl font-bold md:ml-0 md:text-4xl">
          Configuración
        </h1>
        <h2 className="py-6 text-lg font-bold md:ml-0 md:text-xl">
          Información del negocio
        </h2>
        <Settings />
      </div>
    </>
  );
};

export default Config;
