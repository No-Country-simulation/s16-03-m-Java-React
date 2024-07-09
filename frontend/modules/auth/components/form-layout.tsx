'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  children: ReactNode
}

const FormLayout = ({ children }: Props) => {
  return (
    <section className="flex  bg-primary">
      <div className="flex flex-col justify-between w-1/2 p-8 text-destructive-foreground">
        <div className="flex items-center mb-8 space-x-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <Image src="/WebWave.png" alt="Logo" width={100} height={50} />
        </div>
        <div className="w-2/2 mx-auto text-start p-8">
          <h1 className="mb-4 text-5xl font-extrabold ">
            Crea tu landing page profesional en minutos.
          </h1>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold">
              Crea tu landing page profesional en minutos.
            </h1>
            <p className="text-xl mt-20">
              Haz <span className="font-bold">crecer tu negocio</span> y{' '}
              <span className="font-bold">multiplica tus ventas</span> e
              interacciones <span className="font-bold">gratis</span> y en
              simples pasos.
            </p>
          </div>
        </div>
        <div className="mt-8 ">
          <Image
            className="items-center mx-auto"
            src="/form-image.png"
            alt="Image form"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 bg-background">
        {children}
      </div>
    </section>
  )
}

export default FormLayout
