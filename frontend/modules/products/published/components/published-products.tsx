import { GetServerSideProps } from "next";

import PublishedCard from "./published-card";
import { publishedsService } from "../../../products/published/services";

type UserDetailType = {
  id: number;
  name: string;
  lastName: string;
  phoneNumber: string;
  userName: string;
  active: boolean;
  usuario: {
    id: number;
    email: string;
    password: string;
    enabled: boolean;
    username: string;
    authorities: { authority: string }[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
  };
  productList: string[];
};

type GroupType = {
  idGroups: number;
  name: string;
  description: string;
  products: string[];
};

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
  detallesUsuario: UserDetailType;
  groups: GroupType;
};

type PublishedDataProps = {
  products: ProductType[];
};

const PublishedData = ({ products = [] }: PublishedDataProps) => {
  return (
    <div className="space-y-12 pb-32 pt-10">
      <div>
        <h1 className="my-8 ml-4 text-xl md:ml-0">Productos</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
          {products.length > 0 ? (
            products.map((product, id) => (
              <PublishedCard key={id} productData={product} />
            ))
          ) : (
            <p className="text-primary-background">
              No hay productos en esta categoría
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getPublishedData } = publishedsService();

  try {
    const products = await getPublishedData();

    return {
      props: {
        products: products || [],
      },
    };
  } catch (error) {
    console.error("Error al obtener los datos", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

export default PublishedData;
