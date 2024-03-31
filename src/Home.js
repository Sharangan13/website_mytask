import React from "react";
import home_img from "./assets/1.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row px-16 md:px-18 py-8 justify-between items-center ">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-primary md:text-[44px] font-bold  leading-normal sm:text-[14px] ">
          <span className="text-black font-semibold">A boutique</span> <br />
          Investment <br />
          Banking & Wealth <br />
          Solutions<span className="text-black font-semibold"> Company</span>
        </h1>
        <div className="flex pt-6">
          <button className="px-6 mt-4 py-3 mr-4 bg-primary text-white md:text-[16px]  font-semibold ">
            CONNECT WITH US
          </button>
          <Link to="page3" spy={true} smooth={true} offset={0} duration={300}>
            <button className="px-6 mt-4 py-3 bg-secoundary text-white md:text-[16px] text-primary font-semibold ">
              WHAT WE DO
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex justify-cente">
        <img className="w-full " src={home_img} alt="Home Image" />
      </div>
    </section>
  );
}
