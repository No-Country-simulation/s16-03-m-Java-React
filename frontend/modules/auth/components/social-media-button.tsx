'use client'

import { FC } from 'react'
import { Instagram, Facebook, Apple } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SocialMediaButtons: FC = () => {
  return (
    <div className="flex flex-col text-center mt-10">
      {' '}
      <p className="text-xs text-foreground">o ingresa con</p>
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
