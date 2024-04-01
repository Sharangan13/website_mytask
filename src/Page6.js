import React from "react";
import img11 from "./assets/11.png";
import img22 from "./assets/22.png";

export default function Page6() {
  return (
    <div className="flex flex-col md:flex-row pl-4 md:pl-16 py-4">
      <div className="md:w-2/5 ">
        <div
          style={{ display: "flex", alignItems: "start" }}
          className="pb-4 font-semibold md:whitespace-nowrap"
        >
          <img
            src={img11}
            alt="Question Mark"
            style={{ width: "20px", height: "20px" }} className="md:block hidden"
          />
          <span style={{ marginLeft: "5px" }} className="text-[26px] sm:text-[32px]">
            Delivering Excellence
          </span>
          <img
            src={img22}
            alt="Question Mark"
            style={{ width: "20px", height: "20px", marginLeft: "5px" }} className="md:block hidden"
          />
        </div>
        <div>
          <p className="text-[17px] sm:text-[20px] text-phracolor font-medium">
            At <span className="font-bold text-black">BlueBay Financial</span>, we offer a
            comprehensive range of financial advisory, brokerage & investment
            solutions to our clients.
          </p>
          <br />
          <p className="text-[17px] sm:text-[20px]">
            We work with some of the leading regional business groups, asset
            managers and banks, providing bespoke investment banking and wealth
            management solutions.
          </p>
        </div>
      </div>

      <div className="md:w-2/3 flex items-start justify-start sm:items-center sm:justify-center">
  <hr className="buttonLine border-btn w-full md:block hidden" />
  <div className="flex items-center w-2/3 flex-wrap sm:flex-nowrap">
    <div className="flex items-center ">
      <button className="px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
        FINANCIAL ADVISOR
      </button>
      <hr className="buttonLine border-btn w-full md:block hidden" />
    </div>
    <div className="flex items-center ">
      <button className="px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
        BROKERAGE
      </button>
      <hr className="buttonLine border-btn w-full md:block hidden" />
    </div>
    <div className="flex items-center">
      <button className="px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
        INVESTMENT
      </button>
      <hr className="buttonLine border-btn w-full md:block hidden" />
    </div>
  </div>
</div>

    </div>
  );
}
