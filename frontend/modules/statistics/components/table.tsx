import { Clock4, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Items from "@/public/images/items.png";

const Page = () => {
  const ventas = [
    {
      orden: 2133,
      items: "Producto A",
      estado: "En proceso",
      rastreo: "123456",
      envio: "18/07/2024",
      precio: "$50",
      image: { Items },
    },
    {
      orden: 2134,
      items: "Producto B",
      estado: "En proceso",
      rastreo: "654321",
      envio: "20/07/2024",
      precio: "$75",
      image: { Items },
    },
    {
      orden: 2135,
      items: "Producto C",
      estado: "En proceso",
      rastreo: "654330",
      envio: "23/07/2024",
      precio: "$100",
      image: { Items },
    },
  ];

  return (
    <>
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full border border-white">
          <thead>
            <tr className="bg-primary text-secondary">
              <th className="border-b px-2 py-2 font-normal md:px-4">
                # Orden
              </th>
              <th className="border-b px-2 py-2 font-normal md:px-4">Items</th>
              <th className="border-b px-2 py-2 font-normal md:px-4">Estado</th>
              <th className="border-b px-2 py-2 font-normal md:px-4">
                Rastreo
              </th>
              <th className="border-b px-2 py-2 font-normal md:px-4">Envío</th>
              <th className="border-b px-2 py-2 font-normal md:px-4">Precio</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.orden}>
                <td className="border-primary border-b px-2 text-center font-bold md:px-4">
                  {venta.orden}
                </td>
                <td className="border-primary border-b px-0 py-2">
                  <div className="flex flex-row items-center justify-center gap-2 text-xs md:text-sm">
                    <Image
                      src={Items}
                      alt="Imagen del producto"
                      width={30}
                      height={30}
                    />
                    {venta.items}
                  </div>
                </td>
                <td className="border-primary border-b">
                  <div className="bg-primary-accent text-secondary flex flex-row items-center justify-center gap-2 rounded-lg p-1 text-xs md:gap-4 md:text-sm">
                    <Clock4 className="h-4 w-4" />
                    {venta.estado}
                  </div>
                </td>
                <td className="border-primary border-b px-2 py-2 text-end md:px-4">
                  <div className="flex flex-row items-center justify-center text-xs underline underline-offset-1 md:text-sm">
                    <Link href="#">
                      {venta.rastreo}
                      <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </td>
                <td className="border-primary border-b px-2 py-2 text-xs md:px-4 md:text-sm">
                  {venta.envio}
                </td>
                <td className="border-primary border-b px-2 py-2 text-xs md:px-4 md:text-sm">
                  {venta.precio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
