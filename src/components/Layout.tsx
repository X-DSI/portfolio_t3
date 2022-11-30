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
      {/* <Background /> */}
      {children}
    </div>
  );
};

export default Layout;
