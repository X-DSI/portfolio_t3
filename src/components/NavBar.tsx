import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="">
      <div className="absolute inset-y-0 left-0 z-50 flex h-screen w-24 flex-col justify-evenly bg-orange-yellow">
        <div className="inset-y-0 left-0 mx-auto flex w-full flex-col content-center items-center justify-between pt-10 text-lg font-light uppercase ">
          <Link className="font-bold" href="/">
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
        <div className="flex flex-col content-center items-center justify-between">
          <p>F</p>
          <p>F</p>
          <p>F</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
