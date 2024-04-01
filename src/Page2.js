import React from "react";
import wealth_img from "./assets/2.png";
import Group_img from "./assets/Group.png";

export default function Page2() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 pt-5 sm:pt-20 pb-32 md:pb-22 lg:8 justify-between items-start bg-secoundary">
        <div className="lg:w-2/5 ">
          <div className="inline-flex items-center">
            <h1 className="text-black text-[26px] sm:text-[32px] font-bold leading-normal">
              WealthConnect
            </h1>
            <button className="px-2 mx-3 my-2 rounded-full bg-black text-white text-[10px] sm:text-[16px] font-semibold">
              New
            </button>
          </div>

          <div className="pt-8">
            <p className="text-phracolor text-[16px] sm:text-[20px] leading-normal font-medium ">
              <span className="font-bold text-black">WealthConnect</span> is
              a sophisticated wealth management platform tailored for
              investors seeking exclusive alternative investment
              opportunities typically out of reach. With a commitment to
              diversification, it offers access to a curated selection of
              non-traditional assets.
            </p>
          </div>
          <div className="pt-8">
            <p className="text-phracolor text-[16px] sm:text-[20px] leading-normal font-medium">
              Through advanced analytics and expert guidance,{" "}
              <span className="font-bold text-black">WealthConnect</span>{" "}
              empowers investors to navigate these complex investment
              landscapes effectively.
            </p>
          </div>
          <div className="flex py-12">
            <button className="px-3 sm:px-6 py-1 sm:py-3 bg-primary text-white text-[14px] sm:text-[16px] font-medium">
              GET EARLY ACCESS
            </button>
          </div>
        </div>

        <div className="w-3/5 flex justify-center relative ">
          <div className="w-full absolute top-20">
            <img src={Group_img} alt="Group Image" className="min-w-[200px]"/>
            <div className="absolute lg:block hidden" style={{ top: "-35px", left: "140px" }}>
              <button className="px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold bg-secoundary">
                WEALTH
              </button>
            </div>
            <div className="absolute lg:block hidden" style={{ left: "450px", bottom: "80px" }}>
              <button className="px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold">
                ADVISORY
              </button>
            </div>
            <div className="absolute lg:block hidden" style={{ left: "590px", top: "-95px" }}>
              <button className="px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold">
                VENTURE
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img src={wealth_img} alt="Wealth Image" className="min-w-[200px]"/>
          </div>
        </div>
      </section>
    </div>
  );
}
