import React from 'react'
import wealth_img from "./assets/2.png";

export default function Wealth() {
  return (
    <section className="flex flex-col md:flex-row px-16 md:px-18 py-8 justify-between items-center bg-secoundary ">
    <div className="md:w-2/ flex flex-col items-center md:items-start">
      {/* <h1 className="text-primary md:text-[44px] font-bold  leading-normal sm:text-[14px] ">
        <span className="text-black">A boutique</span> <br />
        Investment <br />
        Banking & Wealth <br />
        Solutions<span className="text-black"> Company</span>
      </h1>
      <div className="flex pt-6">
        <button className="px-6 mt-4 py-3 mr-4 bg-primary text-white md:text-[16px]  font-semibold ">
          CONNECT WITH US
        </button>
        <button className="px-6 mt-4py-3 bg-secoundary text-white md:text-[16px] text-primary font-semibold ">
          WHAT WE DO
        </button>
      </div> */}

      <div><h1 className="text-primary md:text-[32px] font-bold  leading-normal sm:text-[14px] ">WealthConnect</h1>
      <button>New</button>
      </div>

      <div><p className="text-primary md:text-[20px]  leading-normal sm:text-[14px] ">WealthConnect is a sophisticated wealth management platform tailored for investors seeking exclusive alternative investment opportunities typically out of reach. With a commitment to diversification, it offers access to a curated selection of non-traditional assets. </p></div>
      <div><p>Through advanced analytics and expert guidance, WealthConnect empowers investors to navigate these complex investment landscapes effectively.</p></div>
      <div><button>get early access</button></div>
    </div>

    <div className="w-full md:w-3/5 flex justify-cente">
      <img className="w-full " src={wealth_img} alt="Home Image" />
    </div>
  </section>
  )
}
