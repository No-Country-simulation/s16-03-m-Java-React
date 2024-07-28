import Table from "@/modules/statistics/components/table";
const Page = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <h1 className="ml-0 py-10 text-2xl font-bold md:ml-4 md:text-4xl">
          Mis ventas
        </h1>
        <Table />
      </div>
    </>
  );
};

export default Page;
