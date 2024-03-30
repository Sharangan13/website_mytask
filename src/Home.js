import React from "react";
import home_img from "./assets/1.png";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row px-16 md:px-18 py-8 justify-between items-center ">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-primary md:text-[44px] font-bold  leading-normal sm:text-[14px] ">
          <span className="text-black">A boutique</span> <br />
          Investment <br />
          Banking & Wealth <br />
          Solutions<span className="text-black"> Company</span>
        </h1>
        <div className="flex pt-6">
          <button className="px-6 mt-4 py-3 mr-4 bg-primary text-white md:text-[16px]  font-semibold ">
            CONNECT WITH US
          </button>
          <button className="px-6 mt-4 py-3 bg-secoundary text-white md:text-[16px] text-primary font-semibold ">
            WHAT WE DO
          </button>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex justify-cente">
        <img className="w-full " src={home_img} alt="Home Image" />
      </div>
    </section>
  );
}
