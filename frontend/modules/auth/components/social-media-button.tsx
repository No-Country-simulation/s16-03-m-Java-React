'use client'

import { FC } from 'react'
import { Instagram, Facebook, Apple } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SocialMediaButtons: FC = () => {
  return (
    <div className="flex flex-col text-center mt-10 w-full ">
      {' '}
      <div className="relative flex-grow   ">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="border border-muted w-full  "></div>
        </div>
        <p className="z-10 text-xs text-foreground px-2 relative">
          <span className="bg-white px-2">o ingresa con</span>
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-4 ">
        <Button variant="outline" className="rounded-full p-3 shadow">
          <Instagram className="w-6 h-6 text-secondary-foreground" />
        </Button>
        <Button variant="outline" className="rounded-full p-3 shadow">
          <Apple className="w-6 h-6 text-secondary-foreground" />
        </Button>
        <Button variant="outline" className="rounded-full p-3 shadow  ">
          <Facebook className="w-6 h-6 text-secondary-foreground" />
        </Button>
      </div>
    </div>
  )
}

export default SocialMediaButtons
