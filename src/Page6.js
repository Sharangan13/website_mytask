import React from "react";
import img11 from "./assets/11.png";
import img22 from "./assets/22.png";

export default function Page6() {
  return (
    <div className="flex pl-16 py-4">
      <div className="w-2/5">
        <div
          style={{ display: "flex", alignItems: "start" }}
          className="pb-4 font-semibold"
        >
          <img
            src={img11}
            alt="Question Mark"
            style={{ width: "20px", height: "20px" }}
          />
          <span style={{ marginLeft: "5px" }} className="text-[32px]">
            Delivering Excellence
          </span>
          <img
            src={img22}
            alt="Question Mark"
            style={{ width: "20px", height: "20px", marginLeft: "5px" }}
          />
        </div>
        <div>
          <p className="text-[20px] text-phracolor font-medium">
            At <span className="font-bold text-black">BlueBay Financial</span>, we offer a
            comprehensive range of financial advisory, brokerage & investment
            solutions to our clients.
          </p>
          <br />
          <p className="text-[20px]">
            We work with some of the leading regional business groups, asset
            managers and banks, providing bespoke investment banking and wealth
            management solutions.
          </p>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center">
        <hr className="buttonLine border-btn w-full" />
        <div className="flex items-center w-2/3">
          <button className="px-3 py-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
            FINANCIAL ADVISOR
          </button>
          <hr className="buttonLine border-btn w-32" />
          <button className="px-3 py-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
            BROKERAGE
          </button>
          <hr className="buttonLine border-btn w-32" />
          <button className="px-3 py-2 rounded-full bg-btnbg text-btn1 text-[15px] font-semibold whitespace-nowrap">
            INVESTMENT
          </button>
          <hr className="buttonLine border-btn w-full" />
        </div>
      </div>
    </div>
  );
}
