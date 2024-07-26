import PublishedProducts from "@/modules/products/published/components/published-products";

const Published = () => {
  return (
    <div>
      <h1 className="ml-4 space-y-24 py-10 pb-0 text-4xl font-bold md:ml-0">
        Publicados
      </h1>
      <PublishedProducts />
    </div>
  );
};

export default Published;
