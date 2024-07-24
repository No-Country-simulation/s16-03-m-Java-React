import {Button} from '@/components/ui/button';
import Image from 'next/image';
import up from '@/public/images/Up.png';
import enlace from '@/public/images/enlace.png';
import cargados from '@/public/images/cargados.png';

const images = () => {
  return (
   <div className='flex flex-row items-center justify-center'>
  <Button type="submit" size="sm" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
    <Image src={cargados} alt="Cargadas" width={40} height={40} />
    <p className='text-primary font-light mt-2'>Cargadas</p>
  </Button>
  <Button type="submit" size="lg" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
    <Image src={up} alt="Subir" width={40} height={40} />
    <p className='text-primary font-light mt-2'>Subir</p>
  </Button>
  <Button type="submit" size="sm" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
    <Image src={enlace} alt="Link" width={40} height={40} />
    <p className='text-primary font-light mt-2'>Link</p>
  </Button>
</div>
  )
}

export default images