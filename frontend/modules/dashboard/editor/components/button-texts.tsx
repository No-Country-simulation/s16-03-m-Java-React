import {Button} from '@/components/ui/button';

const textos = () => {
  
  return (
    <div className='flex flex-col justify-center m-2'>
      <Button type="submit" size="sm" className="rounded-xl my-2 bg-transparent text-lg font-light text-primary border border-primary hover:text-secondary sm:size-lg">
      Agregar título
    </Button>
    <Button type="submit" size="sm" className="rounded-xl my-2 bg-transparent text-sm font-light text-primary border border-primary hover:text-secondary sm:size-lg">
      Agregar subtítulo
    </Button>
    <Button type="submit" size="sm" className="rounded-xl my-2 bg-transparent text-xs font-light text-primary border border-primary hover:text-secondary sm:size-lg">
      Agregar texto
    </Button>
    </div>
  )
}

export default textos