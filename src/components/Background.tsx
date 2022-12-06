import React from "react";

const Background = () => {
  return (
    <div className="background fixed ml-24 grid h-screen w-full grid-cols-2">
      <div className="bg-secondary text-primary"></div>
      <div className="bg-primary"></div>
    </div>
  );
};

export default Background;
