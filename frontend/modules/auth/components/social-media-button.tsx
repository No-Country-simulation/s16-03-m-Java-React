"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const SocialMediaButtons: FC = () => {
  return (
    <div className="mt-10 flex w-full flex-col text-center ">
      {" "}
      <div className="relative flex-grow   ">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="border-muted w-full border  "></div>
        </div>
        <p className="text-foreground relative z-10 px-2 text-xs">
          <span className="bg-white px-2">o ingresa con</span>
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-8 ">
        <Button
          variant="outline"
          size="icon"
          className="h-[52px] w-[52px] rounded-full shadow"
        >
          <Icon name="ic_google" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-[52px] w-[52px] rounded-full shadow"
        >
          <Icon name="ic_mac" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-[52px] w-[52px] rounded-full shadow  "
        >
          <Icon name="ic_facebook" />
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
