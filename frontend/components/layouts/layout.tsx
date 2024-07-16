import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const layoutVariants = cva("w-full", {
  variants: {
    variant: {
      default:
        "mx-auto w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-12rem)] max-w-[1100px] px-4 lg:px-0 ",
      width_sidebar: "w-full grid grid-cols-[350px_1fr]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LayoutProps
  extends React.BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  asChild?: boolean;
}

const Layout = ({
  asChild,
  className,
  variant = "default",
  ...props
}: LayoutProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn(layoutVariants({ variant, className }))} {...props} />
  );
};

export default Layout;
