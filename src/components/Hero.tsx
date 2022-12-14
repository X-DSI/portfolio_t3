import Image from "next/image";
import React from "react";
import LaptopGuy from "../assets/img/latop-guy.png";

const Hero = () => {
  return (
    <div className="hero-section h-full">
      <div className="hero-wrapper grid grid-cols-2">
        <div className="hero-text-field ml-11">
          <div className="h1-wrapper text-9xl text-primary">
            <h1>Hi there,</h1>
          </div>
          <div className="h1-wrapper text-9xl text-primary">
            <h1>I&apos;m DSI</h1>
          </div>
          <div className="h1-wrapper text-9xl text-primary">
            <h1>Nobody</h1>
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
