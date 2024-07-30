"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const layoutVariants = cva("w-full", {
  variants: {
    variant: {
      default:
        "mx-auto w-full md:w-[calc(100%-4rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-8rem)] max-w-[1100px] px-4 lg:px-0",
      width_sidebar: "w-full md:grid md:grid-cols-[350px_1fr]",
      simple: "w-full px-0",
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
  isSimple?: boolean;
}

const Layout = ({
  asChild,
  className,
  variant = "default",
  isSimple = false,
  ...props
}: LayoutProps) => {
  const Comp = asChild ? Slot : "div";
  const pathName = usePathname();

  // Determina la variante a aplicar
  const appliedVariant = pathName === "/editor" ? "simple" : variant;

  return (
    <Comp
      className={cn(layoutVariants({ variant: appliedVariant, className }))}
      {...props}
    />
  );
};

export default Layout;
