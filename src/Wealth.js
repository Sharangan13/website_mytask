import React from 'react'
import wealth_img from "./assets/2.png";
import Group_img from "./assets/Group.png";

export default function Wealth() {
  return (
    <div className="py-10">
      <section className="flex flex-col md:flex-row px-16 md:px-18 pt-20 pb-8 justify-between items-start bg-secoundary">
        <div
          style={{ width: "35%" }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center">
            <h1 className="text-black md:text-[32px] font-bold leading-normal sm:text-[14px]">
              WealthConnect
            </h1>
            <button className="px-2 mx-2 rounded-full bg-black text-white md:text-[15px] font-semibold">
              New
            </button>
          </div>

          <div className="pt-8">
            <p className="text-black md:text-[20px] leading-normal sm:text-[14px]">
              <span className="font-bold">WealthConnect</span> is a
              sophisticated wealth management platform tailored for investors
              seeking exclusive alternative investment opportunities typically
              out of reach. With a commitment to diversification, it offers
              access to a curated selection of non-traditional assets.
            </p>
          </div>
          <div className="pt-8">
            <p className="text-black md:text-[20px] leading-normal sm:text-[14px]">
              Through advanced analytics and expert guidance,{" "}
              <span className="font-bold">WealthConnect</span> empowers
              investors to navigate these complex investment landscapes
              effectively.
            </p>
          </div>
          <div className="flex py-12">
            <button className="px-6 py-3 bg-primary text-white md:text-[20px] font-semibold">
              GET EARLY ACCESS
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/5 flex justify-center relative ">
          <div className="w-full absolute top-20 right-9">
            <img src={Group_img} alt="Group Image" />
            <div style={{ top: "-35px", left:"160px" }} className="absolute ">
              <button className='px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold bg-secoundary'>
                WEALTH
              </button>
            </div>
            <div style={{left:"450px",bottom:"80px"}} className="absolute">
              <button className='px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
                ADVISORY
              </button>
            </div>
            <div style={{ left:"625px", top:"-95px"}}  className="absolute">
              <button className='px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
                VENTURE
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img src={wealth_img} alt="Wealth Image" />
          </div>
        </div>
      </section>
    </div>
  );
}
