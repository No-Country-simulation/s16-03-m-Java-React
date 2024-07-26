import PublishedCard from "./published-card";
import { PublishedProducts, ProductType } from "../constants/products-data";
import { PublishedBest, BestType } from "../constants/best-data";
import { PublishedDiscounts, DiscountType } from "../constants/discount-data";


const PublishedData = () => {
    return (
        <div className="space-y-12 pt-10 pb-32">
            <div>
                <h1 className="my-8 text-xl ml-4 md:ml-0">Productos</h1>
            <div className="flex flex-row justify-center gap-6 flex-wrap md:flex-nowrap ">
                {PublishedProducts.map((product: ProductType, id: number) => (
                    <PublishedCard key={id} productData={product} />   
                ))}
            </div>
            </div>
            <div>
                <h1 className="my-8 text-xl ml-4 md:ml-0">Los más vendidos</h1>
            <div className="flex flex-row justify-center gap-6 flex-wrap md:flex-nowrap">
                {PublishedBest.map((best: BestType, id: number) => (
                    <PublishedCard key={id} bestData={best} />   
                ))}
            </div>
            </div>
            <div>
                <h1 className="my-8 text-xl ml-4 md:ml-0">Descuentos</h1>
            <div className="flex flex-row justify-center gap-6 flex-wrap md:flex-nowrap">
                {PublishedDiscounts.map((discount: DiscountType, id: number) => (
                    <PublishedCard key={id} discountData={discount} />   
                ))}
                </div>
            </div>
        </div>
    );
};

export default PublishedData;
