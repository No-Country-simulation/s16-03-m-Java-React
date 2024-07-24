import PublishedCard from "./published-card";
import { PublishedProducts, ProductType } from "../constants/products-data";
import { PublishedBest, BestType } from "../constants/best-data";
import { PublishedDiscounts, DiscountType } from "../constants/discount-data";


const PublishedData = () => {
    return (
        <div className="pb-20">
            <div>
                <h1 className="my-8 text-xl">Productos</h1>
            <div className="flex flex-row gap-6">
                {PublishedProducts.map((product: ProductType, id: number) => (
                    <PublishedCard key={id} productData={product} />   
                ))}
            </div>
            </div>
            <div>
                <h1 className="my-8 text-xl">Los más vendidos</h1>
            <div className="flex flex-row gap-6">
                {PublishedBest.map((best: BestType, id: number) => (
                    <PublishedCard key={id} bestData={best} />   
                ))}
            </div>
            </div>
            <div>
                <h1 className="my-8 text-xl">Descuentos</h1>
            <div className="flex flex-row gap-6">
                {PublishedDiscounts.map((discount: DiscountType, id: number) => (
                    <PublishedCard key={id} discountData={discount} />   
                ))}
                </div>
            </div>
        </div>
    );
};

export default PublishedData;
