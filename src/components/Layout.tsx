import type { ReactNode } from "react";
import React from "react";
import Background from "./Background";
import NavBar from "./NavBar";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="layout-wrapper flex">
      <div className="navbar-layout-wrapper fixed">
        <NavBar />
      </div>
      <div className="layout-content-wrapper flex w-full">
        <Background />
        <div className="absolute inset-0 ml-24">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
