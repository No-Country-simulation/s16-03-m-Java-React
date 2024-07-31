import Image from "next/image";

type ImageType = {
  idImage: number;
  image: string;
  products: string;
};

type ProductType = {
  idproducts: number;
  name: string;
  brand: string;
  category: string;
  code: string;
  price: number;
  stock: number;
  color: string;
  discount: number;
  tag: string;
  description: string;
  imageList: ImageType[];
};
type PublishedCardProps = {
  productData: ProductType;
};

const PublishedCard = ({ productData }: PublishedCardProps) => {
  return (
    <div className="card relative flex flex-col">
      <Image
        src={
          productData.imageList.length > 0
            ? productData.imageList[0].image
            : "/default-image.jpg"
        }
        alt={productData.name}
        width={186}
        height={260}
      />
      <div className="my-4">
        <h2 className="text-lg">{productData.name}</h2>
        <p>{productData.price}</p>
      </div>
    </div>
  );
};

export default PublishedCard;
