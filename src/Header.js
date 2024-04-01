import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-cente px-2 sm:px-4 md:px-16 ">
      <div className="z-10 min-w-[250px]">
        <img src={logo} alt="Logo" className="py-2 px-6 sm:px-3 md:px-3" /> 
      </div>
      
      <nav className="hidden md:block">
        <ul className="flex py-2 whitespace-nowrap">
          <nav className="flex py-2 px-3 text-[14px]">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">INVESTMENT BANKING</a>
            </li>
            <li>
              <a href="/">WEALTH</a>
            </li>
            <li>
              <a href="/">VENTURES</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </nav>
          <li className="flex py-2">
            <button className="px-6 bg-primary text-white">
              CONNECT WITH US
            </button>
          </li>
        </ul>
      </nav>

      {toggleMenu && <nav className="block md:hidden mobile-nav bg-white pt-4">
        <ul className="flex flex-col py-2 ">
          <nav className="flex flex-col py-2 text-sm">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">INVESTMENT BANKING</a>
            </li>
            <li>
              <a href="/">WEALTH</a>
            </li>
            <li>
              <a href="/">VENTURES</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </nav>
          <li className="flex flex-col bg-primary">
            <button className="text-white">
              CONNECT WITH US
            </button>
          </li>
        </ul>
      </nav>}

      <button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden z-10">
        <Bars3Icon className="text-black h-12 px-3" />
      </button>
    </header>

 

  );
}
