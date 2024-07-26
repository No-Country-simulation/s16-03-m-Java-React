import ProductForm from "@/modules/products/add/components/product-form";

const Add = () => {
  return (
    <>
      <h1 className="ml-4 space-y-24 py-10 text-4xl font-bold md:ml-0">
        Añadir producto
      </h1>
      <ProductForm />
    </>
  );
};

export default Add;
