"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import HeadingWebs from "@/modules/webs/components/heading";
import WebsCard from "@/modules/webs/components/webs-card";
import { WebsType } from "@/modules/webs/constant/webs-data";
import Logonav from "@/public/images/Logonav.png";

const Webs: React.FC = () => {
  const [webs, setWebs] = useState<WebsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebs = async () => {
      try {
        const response = await fetch("/api/webs");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data: WebsType[] = await response.json();
        setWebs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebs();
  }, []);

  if (loading) {
    return (
      <div className="mt-6 flex flex-row items-center">
        <Image src={Logonav} alt="Logo cosmos" />
        <p className="text-primary ml-4 text-sm">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-primary">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 px-4 pb-32 pt-10 md:px-0">
      <HeadingWebs />
      <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
        {webs.map((web: WebsType, index: number) => (
          <WebsCard data={web} key={`template-item-${index}`} />
        ))}
      </div>
    </div>
  );
};
//Codigo para mostrar sin info de la base de datos
// const Webs = () => {
//   return (
//     <div className="space-y-12 px-4 pb-32 pt-10 md:px-0">
//       <HeadingWebs />
//       <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
//         {webs &&
//           webs.length > 0 &&
//           webs.map((web: WebsType, index: number) => (
//             <WebsCard data={web} key={template-item-${index}} />
//           ))}
//       </div>
//     </div>
//   );
// };

export default Webs;
