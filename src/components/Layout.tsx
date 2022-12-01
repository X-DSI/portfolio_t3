import type { ReactNode } from "react";
import React from "react";
import Background from "./Background";
import NavBar from "./NavBar";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="flex">
      <NavBar />
      <div className=" layout-wrapper w-full">
        <Background />
        <div className="absolute inset-0 text-white">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
