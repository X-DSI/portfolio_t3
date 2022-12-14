import Image from "next/image";
import React from "react";
import LaptopGuy from "../assets/img/latop-guy.png";

// breaking due to pnpm not working
const Hero = () => {
  return (
    <div className="hero-section h-full">
      <div className="hero-wrapper grid grid-cols-2">
        <div className="hero-text-field">
          <div className="h1-wrapper text-9xl text-primary">
            <h1>Hi there, I&apos;m</h1>
          </div>
          <div className="h1-wrapper text-9xl text-primary">
            <h1>DSI</h1>
          </div>
          <div className="h1-wrapper text-9xl text-primary">
            <h1>Human</h1>
          </div>
        </div>
        <div className="up-right-colum-wrapper flex">
          <Image src={LaptopGuy} alt="laptop-guy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
