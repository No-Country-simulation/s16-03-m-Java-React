import Webs from "@/modules/webs/index";

const webs = () => {
  return (
    <>
      <div className="px-4 md:px-8">
        <h1 className="py-10 text-3xl font-bold md:ml-0 md:text-4xl">
          Mis webs
        </h1>
        <Webs />
      </div>
    </>
  );
};

export default webs;
