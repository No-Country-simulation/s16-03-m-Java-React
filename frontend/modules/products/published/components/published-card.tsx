
import Image from "next/image";

import { ProductType } from "../constants/products-data";
import { BestType } from "../constants/best-data";
import { DiscountType } from "../constants/discount-data";

interface PublishedCardProps {
    productData?: ProductType;
    bestData?: BestType;
    discountData?: DiscountType;
}

const PublishedCard = ({ productData, bestData, discountData }: PublishedCardProps) => {
    const data = productData || bestData || discountData;

    if (!data) return null;

    const calculateDiscountPercentage = (originalPrice: number, newPrice: number): number => {
        return Math.round(((originalPrice - newPrice) / originalPrice) * 100);
    };

    const discountPercentage = discountData && data.price && discountData.newPrice ? 
        calculateDiscountPercentage(Number(data.price.replace("$", "")), Number(discountData.newPrice.replace("$", "")))
        : null;
    return (
    <div className="relative card flex flex-col">
        {discountPercentage !== null && (
                <p className="absolute top-2 left-2 rounded-lg bg-muted-foreground text-white px-2 py-1 text-xs">
                    -{discountPercentage}%
                </p>
            )}
            <Image src={data.image} alt={data.title} width={186} height={260}/>
            <div className="my-4">
                <h2 className="text-lg">{data.title}</h2>
                <div className="flex flex-row my-2">
                    <p className={`mr-4 text-sm ${discountData ? 'line-through ' : ''}`}>{data.price}</p>
                    {discountData && <p className='font-bold text-sm'>{discountData.newPrice}</p>}
                </div>
            </div>
        </div>
    );
}

export default PublishedCard;

