import React from "react";

const Background = () => {
  return (
    <div className="background grid h-screen w-full grid-cols-2">
      <div className="bg-secondary text-primary">Left Column</div>
      <div className="bg-primary">Right Column</div>
    </div>
  );
};

export default Background;
