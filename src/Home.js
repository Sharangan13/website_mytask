import React from "react";
import home_img from "./assets/1.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row px-16 md:px-18 py-8 justify-between items-center ">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-primary md:text-[44px] font-bold leading-normal sm:text-[25px] pb-8 ">
          <span className="text-black font-semibold">A boutique</span> <br />
          Investment <br />
          Banking & Wealth <br />
          Solutions<span className="text-black font-semibold"> Company</span>
        </h1>
        <div className="flex flex-col md:flex-row pt-6 md:pt-0">
          <button className="px-6 mt-4 md:mt-0 md:mr-4 py-3 bg-primary text-white md:text-[16px] font-semibold whitespace-nowrap">
            CONNECT WITH US
          </button>
          <Link to="page3" spy={true} smooth={true} offset={0} duration={300}>
            <button className="px-6 mt-4 md:mt-0 py-3 bg-secoundary text-white md:text-[16px] text-primary font-semibold whitespace-nowrap">
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
