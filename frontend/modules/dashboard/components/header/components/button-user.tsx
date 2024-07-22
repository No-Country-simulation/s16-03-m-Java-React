"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const ButtonUser: FC = () => {
  return (
<div className="flex w-full flex-col">
  <div className="flex items-center justify-around w-full">
    <Button
      variant="link"
      size="icon"
      className="w-1/3 flex justify-center items-center border-none"
    >
      <Icon name="ic_notify" className="h-7 w-7" />
    </Button>
    <Button
      variant="link"
      size="icon"
      className="w-1/3 flex justify-center items-center border-none"
    >
      <Icon name="ic_user" className="h-6 w-6" />
    </Button>
    <Button
      variant="link"
      size="icon"
      className="w-1/3 flex justify-center items-center border-none"
    >
      <Icon name="ic_chat" className="h-5 w-5" />
    </Button>
  </div>
</div>
  );
};

export default ButtonUser;
