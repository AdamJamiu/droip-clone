"use client";

import { INavLinks } from "@/data/navbar";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./global/NavLink";
import { IoChevronDown } from "react-icons/io5";

interface IAccordion {
  label: string;
  data: INavLinks[];
}

const Accordion = ({ label, data }: IAccordion) => {
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
    <div className="overflow-hidden lg:px-4 ease transition-all duration-500 text-lg 2xl:text-xl w-full">
      <button
        onClick={toggleOpen}
        className={`${
          isOpen ? "text-black" : "text-[#605C7A] hover:text-black"
        } w-full cursor-pointer flex justify-start items-center pb-2 pt-4 ease transition-all duration-500 text-lg 2xl:text-xl mb-2`}
      >
        <p>{label}</p>
        <IoChevronDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ease transition-all duration-300`}
        />
      </button>

      <div className="w-full overflow-hidden">
        <div
          ref={divRef}
          style={{
            maxHeight: `${height}px`,
          }}
          className="w-full ease transition-all duration-300 space-y-2"
        >
          {data.map((item, index) => (
            <NavLink
              key={index}
              icon={item.icon}
              label={item.name}
              onClose={() => console.log("")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
