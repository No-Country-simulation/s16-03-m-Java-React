"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const ButtonUser: FC = () => {
  return (
    <div className="flex w-full flex-col">
      {" "}
      <div className="flex items-center justify-around">
        <Button variant="link" size="icon" className="border-none">
          <Icon name="ic_notify" />
        </Button>
        <Button variant="link" size="icon" className="border-none">
          <Icon name="ic_chat" />
        </Button>
        <Button variant="link" size="icon" className="border-none">
          <Icon name="ic_user" />
        </Button>
      </div>
    </div>
  );
};

export default ButtonUser;
