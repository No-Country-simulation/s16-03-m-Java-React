"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const SocialMediaFooter: FC = () => {
  return (
    <div className="flex w-full flex-col">
      {" "}
      <div className="flex justify-start">
        <Button variant="link" size="icon" className="bg-primary border-none">
          <Icon name="ic_instagram" />
        </Button>
        <Button variant="link" size="icon" className="bg-primary border-none">
          <Icon name="ic_twitter" />
        </Button>
        <Button variant="link" size="icon" className="bg-primary border-none">
          <Icon name="ic_fb" />
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaFooter;
