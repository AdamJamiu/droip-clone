"use client";

import { Dispatch, SetStateAction } from "react";

interface IAnimatedHamburger {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AnimatedHamburger = ({ isOpen, setIsOpen }: IAnimatedHamburger) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-5 h-4 flex flex-col justify-between items-center group space-y-1 cursor-pointer"
      aria-label="Toggle menu"
    >
      {/* Top Line */}
      <span
        className={`block h-1 w-full bg-primary rounded transition-transform duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></span>

      {/* Middle Line */}
      <span
        className={`block h-[3px] w-full bg-primary rounded transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      {/* Bottom Line */}
      <span
        className={`block h-1 w-full bg-primary rounded transition-transform duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default AnimatedHamburger;
