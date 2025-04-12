"use client";

import { INavLinks } from "@/data/navbar";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./global/NavLink";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";

interface INavMenu {
  label: string;
  data: INavLinks[];
}

const NavMenu = ({ label, data }: INavMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0");
  const divRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      if (divRef.current) {
        setHeight(divRef.current.scrollHeight.toString());
      }
    } else {
      setHeight("0");
    }
  }, [isOpen]);

  return (
    <div
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className="overflow-hidden lg:px-4 ease transition-all duration-500 font-inter"
    >
      <button
        onFocus={toggleOpen}
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => {
          setIsOpen(true);
        }}
        className={`${
          isOpen ? "text-black" : "text-[#605C7A] hover:text-black"
        } w-full cursor-pointer flex justify-start items-center ease transition-all duration-500 text-sm gap-2`}
      >
        <p>{label}</p>
        <IoChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ease transition-all duration-300`}
        />
      </button>

      <div
        className={`${
          isOpen ? "block z-0 absolute top-5" : "hidden"
        } h-full w-[100px]`}
      ></div>

      <div
        ref={divRef}
        style={{
          maxHeight: `${height}px`,
        }}
        className={`${
          isOpen ? "z-[99] opacity-100" : "opacity-0 -z-[99]"
        } mt-10 min-w-[600px] ease transition-all duration-300 grid grid-cols-2 gap-4 absolute left-40 top-5 bg-white rounded-2xl p-5 overflow-y-hidden`}
      >
        {data.map((item, index) => (
          <button
            onClick={toggleOpen}
            key={index}
            className="cursor-pointer hover:bg-[#ebe8fe] flex justify-start items-start gap-4 md:gap-6 p-3 rounded-xl ease transition-all duration-500 text-black"
          >
            <Image
              width={22}
              height={22}
              className="rounded-lg mt-1"
              alt={item.name}
              src={item.icon}
            />
            <div className="flex flex-col justify-start items-start">
              <p className="font-semibold w-full text-left text-[#000000]">
                {item.name}
              </p>
              <p className="w-full text-left text-xs text-[#605C7A]">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
