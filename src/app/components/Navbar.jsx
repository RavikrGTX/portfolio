import Image from "next/image";
import React, { useRef, useState } from "react";
import { assets } from "../../../assets/assets";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <nav className="w-full fixed flex justify-between px-5 lg:px-8 z-50">
        <a href="#top">
          <Image
            src={assets.logork}
            alt="rk"
            className="w-24 cursor-pointer mr-14"
          />
        </a>

        <div className="flex items-center gap-2">
          <button className="">
            <Image className=" w-6" alt="" src={assets.moon_icon} />
          </button>
          <button className="  block md:hidden ml-3">
            <Image
              className="w-6"
              alt=""
              src={assets.menu_black}
              onClick={openMenu}
            />
          </button>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-13">
            <li>
              <a href="#top" className="font-serif">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-serif">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="font-serif">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="font-serif">
                My Work
              </a>
            </li>

            <li>
              <a href="#contact" className="font-serif">
                contact Me
              </a>
            </li>
          </ul>
        </div>
        {/* mobile menu
         */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-yellow-950 transition duration-500"
        >
          <div className="absolute right-6 top-8 " onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5  cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className="font-serif">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-serif">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className="font-serif">
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-serif">
              My Work
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu} className="font-serif">
              contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
