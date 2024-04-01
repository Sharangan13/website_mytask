import React from "react";
import home_img from "./assets/1.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center  px-2 py-5  sm:px-16 sm:py-8  ">
      <div className="flex flex-col items-start">
        <div className="text-primary text-[25px] px-1 sm:text-[44px] font-bold leading-normal pb-2 sm:pb-8 ">
          <span className="text-black font-semibold">A boutique</span> <br />
          Investment <br />
          Banking & Wealth <br />
          Solutions<span className="text-black font-semibold"> Company</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <button className="px-6 mx-2 mt-4 py-3 bg-primary text-white text-[12] sm:text-[16px] font-semibold whitespace-nowrap">
            CONNECT WITH US
          </button>
          <Link to="page3" spy={true} smooth={true} offset={0} duration={300}>
            <button className="px-12  mx-2 mt-4  py-3 bg-secoundary text-white text-[12] sm:text-[16px] text-primary font-semibold whitespace-nowrap">
              WHAT WE DO
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex justify-center">
        <img className="w-full md:px-4 min-w-[300px] pt-6" src={home_img} alt="Home Image" />
      </div>
    </section>
  );
}
