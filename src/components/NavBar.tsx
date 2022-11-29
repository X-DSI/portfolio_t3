import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="">
      <div className="absolute inset-y-0 left-0 z-50 h-screen w-1/12 bg-orange-yellow">
        <div className=" inset-y-0 left-0 mx-auto flex h-5/6 w-full flex-col flex-wrap content-center items-center justify-between pt-10 ">
          <Link className="-rotate-90" href="/">
            DSI
          </Link>
          <Link className="-rotate-90" href="/">
            Work
          </Link>
          <Link className="-rotate-90" href="/">
            About
          </Link>
          <Link className="-rotate-90" href="/">
            Contact
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
