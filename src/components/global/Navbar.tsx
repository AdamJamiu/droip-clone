"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHamburger from "./AnimatedHamburger";
import { Dispatch, SetStateAction, useState } from "react";
import Accordion from "../Accordion";
import { products_link, resources_link } from "@/data/navbar";
import logo from "../../assets/images/droip-logo.svg";
import NavMenu from "../NavMenu";

interface IMobileNav {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="w-full font-inter relative">
      <div className="flex justify-between items-center px-10 md:px-20 lg:px-28 py-4 text-[15px] h-16 fixed top-0 right-0 left-0 lg:bg-transparent bg-white z-[100]">
        <div className="w-full flex justify-start items-center gap-10 xl:gap-14">
          <Image src={logo} alt="droip logo" height={20} width={60} />

          <div className="hidden lg:flex justify-start items-center gap-4 min-w-max font-medium">
            <Link
              href="#"
              className="rounded-xl px-3 py-1.5 text-[#605C7A] ease transition-all duration-500 hover:text-black"
            >
              Home
            </Link>

            <NavMenu label="Product" data={products_link} />
            <NavMenu label="Resources" data={resources_link} />

            <Link
              href="#"
              className="rounded-xl px-3 py-1.5 text-[#605C7A] ease transition-all duration-500 hover:text-black"
            >
              Pricing
            </Link>
          </div>
        </div>

        <div className="lg:hidden block">
          <AnimatedHamburger
            isOpen={isMobileNavOpen}
            setIsOpen={setIsMobileNavOpen}
          />
        </div>

        <div className="lg:flex justify-end items-center gap-3 xl:gap-6 min-w-max hidden">
          <Link
            href="#"
            className="rounded-xl px-3 py-1.5 text-[#605C7A] ease transition-all duration-500 hover:text-black"
          >
            Login
          </Link>

          <Link
            href="#"
            className="rounded-xl px-3 py-1.5 hover:bg-primary text-white ease transition-[padding] duration-500 hover:py-2.5 bg-purple"
          >
            Get Started
          </Link>
        </div>
      </div>

      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </nav>
  );
};

const MobileNav = ({ isOpen, setIsOpen }: IMobileNav) => {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section
      className={`${
        isOpen
          ? "translate-y-0 z-[99] opacity-100"
          : "-translate-y-full opacity- -z-[100]"
      } overflow-y-auto px-10 md:px-20 lg:px-28 py-4 fixed bottom-0 top-16 right-0 left-0 lg:hidden block ease transition-all duration-500 bg-white backdrop-blur-sm`}
    >
      <div className="w-full space-y-4 divide-[#5641f333] divide-y-[1px] font-medium mt-7 flex flex-col">
        <Link
          onClick={onClose}
          href="#"
          className="pb-2 pt-4 text-black ease transition-all duration-500 hover:text-black text-lg 2xl:text-xl"
        >
          Home
        </Link>

        <Accordion label="Product" data={products_link} />
        <Accordion label="Resources" data={resources_link} />
        <Accordion label="Support" data={products_link} />

        <Link
          onClick={onClose}
          href="#"
          className="pb-2 pt-4 text-[#605C7A] ease transition-all duration-500 hover:text-black text-lg 2xl:text-xl"
        >
          Pricing
        </Link>
        <Link
          onClick={onClose}
          href="#"
          className="pb-2 pt-4 text-[#605C7A] ease transition-all duration-500 hover:text-black text-lg 2xl:text-xl"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
