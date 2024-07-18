"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
