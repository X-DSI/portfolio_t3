import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="main-navbar-div inset-y-0 left-0 z-50 flex h-screen w-24 flex-col justify-between bg-orange-yellow">
      <div className="navbar-links flex h-screen flex-col content-center items-center justify-evenly text-lg font-light uppercase">
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
      <div className="navbar-icons relative mb-16 flex flex-col content-center items-center justify-around">
        <Link href="https://github.com/X-DSI" target="_blank">
          <FaGithub className="m-3 h-8 w-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/xdsi/" target="_blank">
          <FaLinkedin className=" m-3 h-8 w-8" />
        </Link>
        <Link href="https://www.instagram.com/x.dsi.raw/" target="_blank">
          <FaInstagram className="m-3 h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
