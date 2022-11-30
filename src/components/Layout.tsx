import type { ReactNode } from "react";
import React from "react";
import NavBar from "./NavBar";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="flex">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
