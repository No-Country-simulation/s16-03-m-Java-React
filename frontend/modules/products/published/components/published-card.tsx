import Image from "next/image";

import { BestType } from "../constants/best-data";
import { DiscountType } from "../constants/discount-data";
import { ProductType } from "../constants/products-data";

interface PublishedCardProps {
  productData?: ProductType;
  bestData?: BestType;
  discountData?: DiscountType;
}

const PublishedCard = ({
  productData,
  bestData,
  discountData,
}: PublishedCardProps) => {
  const data = productData || bestData || discountData;

  if (!data) return null;

  const calculateDiscountPercentage = (
    originalPrice: number,
    newPrice: number
  ): number => {
    return Math.round(((originalPrice - newPrice) / originalPrice) * 100);
  };

  const discountPercentage =
    discountData && data.price && discountData.newPrice
      ? calculateDiscountPercentage(
          Number(data.price.replace("$", "")),
          Number(discountData.newPrice.replace("$", ""))
        )
      : null;

  return (
    <div className="card relative flex flex-col">
      {discountPercentage !== null && (
        <p className="bg-muted-foreground absolute left-2 top-2 rounded-lg px-2 py-1 text-xs text-white">
          -{discountPercentage}%
        </p>
      )}
      <Image src={data.image} alt={data.title} width={186} height={260} />
      <div className="my-4">
        <h2 className="text-lg">{data.title}</h2>
      </div>
      <div className="my-2 flex flex-row">
        <div className={`mr-4 text-sm ${discountData ? "line-through" : ""}`}>
          {data.price}
        </div>
        {discountData && (
          <p className="text-sm font-bold">{discountData.newPrice}</p>
        )}
      </div>
    </div>
  );
};

export default PublishedCard;
