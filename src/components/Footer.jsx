import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className=" bg-black w-full h-full p-12 flex flex-col items-center justify-center">
      <div className="md:text-6xl my-4">
        <Logo/>
      </div>
      <footer className="text-gray-500 w-full text-center text-sm ">
        &copy; {new Date().getFullYear()} SuperHero. Your ultimate hero database
        — fast, powerful and React-ive!
      </footer>
    </div>
  );
};
