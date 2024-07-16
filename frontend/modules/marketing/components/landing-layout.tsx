"use client";

import { ReactNode } from "react";


type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
{children}
    </div>
  );
};

export default Layout;
