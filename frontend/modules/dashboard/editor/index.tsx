"use client";

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Templates from '@/modules/dashboard/editor/components/templates';
import Textos from '@/modules/dashboard/editor/components/button-texts';
import Elements from '@/modules/dashboard/editor/components/elements';
import Images from '@/modules/dashboard/editor/components/images';
import Videos from '@/modules/dashboard/editor/components/videos';
import EditBar from '@/modules/dashboard/editor/components/edit-bar';
import banner from '@/public/images/banner.png';
import section from '@/public/images/section.png';
import {Button} from '@/components/ui/button';

const EditorPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-12">

        <div className="col-span-4 bg-secondary">
          <div className='flex flex-row ml-2 mt-2 cursor-pointer' onClick={handleGoBack}>
            <ArrowLeft />
            <p className='ml-2'>Volver</p>
          </div>
          <div className='m-6 flex flex-col'>
            <h1 className='text-primary my-4'>Templates</h1>
            <Templates/>
          </div>
          <div className='m-6 flex flex-col'>
            <h1 className='text-primary my-2'>Texto</h1>
            <h2 className='text-primary text-sm'>Estilo predeterminado</h2>
            <Textos/>
          </div>
          <div className='m-6 flex flex-col'>
            <h1 className='text-primary my-4'>Elementos</h1>
            <Elements/>
          </div>
          <div className='m-6 flex flex-col'>
            <h1 className='text-primary my-4'>Imágenes</h1>
            <Images/>
          </div>
          <div className='m-6 flex flex-col'>
            <h1 className='text-primary my-4'>Videos</h1>
            <Videos/>
          </div>

          <div className="flex justify-center items-center">
  <div className="flex flex-col gap-2 py-10">
    <Button type="submit" size="sm" className="rounded-xl sm:size-lg">
      Publicar
    </Button>
    <Button type="submit" size="sm" className="rounded-xl bg-transparent font-light text-muted-foreground border border-primary hover:text-secondary sm:size-lg">
      Guardar como borrador
    </Button>
  </div>
</div>
        </div>

        <div className="col-span-8 bg-gray-200">
        <div className='bg-secondary'>
            <EditBar/>
        </div>
        <div>
          <Image src={banner} alt="banner"/>
        </div>
        <div>
          <Image className='my-2' src={section} alt="section"/>
        </div>
        </div>
      </div>
    </>
  );
}

export default EditorPage;