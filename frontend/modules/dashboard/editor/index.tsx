"use client";

import { useEffect } from "react";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Textos from "@/modules/dashboard/editor/components/button-texts";
import EditBar from "@/modules/dashboard/editor/components/edit-bar";
import Elements from "@/modules/dashboard/editor/components/elements";
import Images from "@/modules/dashboard/editor/components/images";
import Products from "@/modules/dashboard/editor/components/products";
import Templates from "@/modules/dashboard/editor/components/templates";
import Videos from "@/modules/dashboard/editor/components/videos";
import { TemplateType } from "@/modules/dashboard/templates/types";
import banner from "@/public/images/banner.png";
import section from "@/public/images/section.png";
import { useGenericStore } from "@/store/use.store";

type Props = {
  data: TemplateType;
};

const EditorPage = ({ data }: Props) => {
  const { setActiveSidebar, activeSidebar } = useGenericStore((state) => state);

  useEffect(() => {
    setActiveSidebar(false);
  }, []);

  console.log("activeSidebar=>", activeSidebar);

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const date = data.name;

  return (
    <>
      <div className="grid min-h-screen grid-cols-12 gap-4 md:py-10">
        <div className="col-span-12 bg-white md:col-span-4">
          <div
            className="ml-6 mt-2 flex cursor-pointer flex-row"
            onClick={handleGoBack}
          >
            <ArrowLeft />
            <p className="ml-2">Volver</p>
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-4">Templates</h1>
            <Templates />
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-4">Productos</h1>
            <Products />
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-2">Texto</h1>
            <h2 className="text-primary text-sm">Estilo predeterminado</h2>
            <Textos />
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-4">Elementos</h1>
            <Elements />
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-4">Imágenes</h1>
            <Images />
          </div>
          <div className="m-6 flex flex-col">
            <h1 className="text-primary my-4">Videos</h1>
            <Videos />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2 py-10">
              <Button type="submit" size="sm" className="sm:size-lg rounded-xl">
                Publicar
              </Button>
              <Button
                type="submit"
                size="sm"
                className="text-muted-foreground border-primary hover:text-secondary sm:size-lg rounded-xl border bg-transparent font-light"
              >
                Guardar como borrador
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="bg-secondary">
            <EditBar />
          </div>
          <div className="bg-muted-foreground mx-auto px-4 py-10 md:px-20 lg:px-40">
            <div>
              <Image src={banner} alt="banner" />
            </div>
            <div>
              <Image className="my-4" src={section} alt="section" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
