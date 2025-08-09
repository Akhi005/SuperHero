import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <img
        className={`w-8 h-8 invert`}
        src="/SuperHero.svg"
        alt="SuperHero"
      />
      <h2 className="font-bold md:text-3xl text-white">SuperHero</h2>
    </div>
  );
};
