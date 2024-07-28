import PublishedCard from "./published-card";
import { PublishedBest, BestType } from "../constants/best-data";
import { PublishedDiscounts, DiscountType } from "../constants/discount-data";
import { PublishedProducts, ProductType } from "../constants/products-data";

const PublishedData = () => {
  return (
    <div className="space-y-12 pb-32 pt-10">
      <div>
        <h1 className="my-8 ml-4 text-xl md:ml-0">Productos</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap ">
          {PublishedProducts.map((product: ProductType, id: number) => (
            <PublishedCard key={id} productData={product} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="my-8 ml-4 text-xl md:ml-0">Los más vendidos</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
          {PublishedBest.map((best: BestType, id: number) => (
            <PublishedCard key={id} bestData={best} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="my-8 ml-4 text-xl md:ml-0">Descuentos</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
          {PublishedDiscounts.map((discount: DiscountType, id: number) => (
            <PublishedCard key={id} discountData={discount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishedData;

//Lógica con datos del backend
// "use client";

// import { useEffect, useState } from "react";

// import PublishedCard from "./published-card";
// import { BestType } from "../constants/best-data";
// import { DiscountType } from "../constants/discount-data";
// import { ProductType } from "../constants/products-data";

// const PublishedData = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [bests, setBests] = useState<BestType[]>([]);
//   const [discounts, setDiscounts] = useState<DiscountType[]>([]);

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetch("/api/products").then((res) => res.json());
//       if (data) {
//         // Suponiendo que el data tiene keys `products`, `bests` y `discounts`
//         setProducts(data.products || []);
//         setBests(data.bests || []);
//         setDiscounts(data.discounts || []);
//       }
//     };
//     loadData();
//   }, []);

//   return (
//     <div className="space-y-12 pb-32 pt-10">
//       <div>
//         <h1 className="my-8 ml-4 text-xl md:ml-0">Productos</h1>
//         <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
//           {products.map((product, id) => (
//             <PublishedCard key={id} productData={product} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1 className="my-8 ml-4 text-xl md:ml-0">Los más vendidos</h1>
//         <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
//           {bests.map((best, id) => (
//             <PublishedCard key={id} bestData={best} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1 className="my-8 ml-4 text-xl md:ml-0">Descuentos</h1>
//         <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
//           {discounts.map((discount, id) => (
//             <PublishedCard key={id} discountData={discount} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublishedData;
