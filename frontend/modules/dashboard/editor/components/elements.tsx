import {Button} from '@/components/ui/button';
import Image from 'next/image';
import formas from '@/public/images/formas.png';
import megafono from '@/public/images/megafono.png';
import flecha from '@/public/images/flecha-correcta.png';

const elements = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Button type="submit" size="sm" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
        <Image src={formas} alt="Formas" width={40} height={40}/>
        <p className='text-primary font-light mt-2'>Formas</p>
      </Button>
        <Button type="submit" size="lg" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
        <Image src={flecha} alt="Botones" width={40} height={40}/>
        <p className='text-primary font-light mt-2'>Botones</p>
      </Button>
      <Button type="submit" size="sm" className="flex flex-col items-center justify-center mx-1 h-24 w-24 rounded-xl bg-transparent border border-primary hover:bg-transparent">
        <Image src={megafono} alt="Íconos" width={40} height={40}/>
        <p className='text-primary font-light mt-2'>Íconos</p>
      </Button>
    </div>
  )
}

export default elements
