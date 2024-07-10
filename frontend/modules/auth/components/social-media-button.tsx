'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Apple, Facebook, Instagram } from 'lucide-react'
import { Icon } from '@/components/ui/icon'

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
      <div className="flex justify-center space-x-8 mt-4 ">
        <Button variant="outline" size="icon" className="rounded-full w-[52px] h-[52px] shadow">
          <Icon name="ic_google"/>

        </Button>
        <Button variant="outline" size="icon"  className="rounded-full w-[52px] h-[52px] shadow">
           <Icon name="ic_mac"/>
        </Button>
        <Button variant="outline" size="icon"  className="rounded-full w-[52px] h-[52px] shadow  ">
            <Icon name="ic_facebook"/>
        </Button>
      </div>
    </div>
  )
}

export default SocialMediaButtons
