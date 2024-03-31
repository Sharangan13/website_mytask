import React, { useState } from 'react';
import img4 from "./assets/4.png";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function Page4() {
    const [Btn1, setBtn1] = useState(false);
    const [Btn2, setBtn2] = useState(false);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-16 py-8">
            <div className="flex flex-col justify-center items-center sm:items-start pr-4 sm:pr-16">
                <div className="text-center sm:text-start">
                    <h1 className="text-[24px] sm:text-[28px] font-bold mb-4">Ventures</h1>
                    <p className="text-[18px] sm:text-[20px] mb-4 text-phracolor font-medium">We collaborate with industry-leading experts to provide our clients with meticulously chosen product solutions. By harnessing their insights and expertise, we ensure that our clients have access to the most tailored and advantageous options in the market, helping them achieve their specific financial goals with precision.</p>
                </div>

                {/* Default 01 */}
                <div className="flex flex-col space-y-4 mt-4 w-full">
                    {!Btn1 ? (
                        <div className="relative">
                            <button onClick={() => setBtn1(!Btn1)} className="w-full px-6 py-3 bg-secoundary font-semibold relative flex items-center justify-between">
                                Wealth Solutions
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>
                    ) : (
                        /* After click 01 */
                        <div className="relative">
                            <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
                                <button onClick={() => setBtn1(!Btn1)} className="w-full px-2 py-1 bg-secoundary font-semibold relative  flex items-center justify-between">
                                    Wealth Solutions
                                    <RiArrowDropUpLine className="text-4xl" />
                                </button>
                            </div>
                            <p className="bg-secoundary px-3 font-medium text-phracolor">
                                Our Wealth Advisory services are enriched by our partners' extensive experience. We offer clients expert guidance in managing their wealth, drawing upon a wealth of knowledge and insights. Our personalized approach ensures tailored financial strategies, helping clients achieve their financial goals with confidence.
                            </p>
                            <div className="bg-secoundary px-10 py-2 flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
                        </div>
                    )}

                    {/* Default 02 */}
                    {!Btn2 ? (
                        <div className="relative">
                            <button onClick={() => setBtn2(!Btn2)} className="w-full px-6 py-3 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
                                Private Placements
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>
                    ) : (
                        /* After click 02 */
                        <div className="relative">
                            <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
                                <button onClick={() => setBtn2(!Btn2)} className="w-full px-2 py-1 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
                                    Private Placements
                                    <RiArrowDropUpLine className="text-4xl" />
                                </button>
                            </div>
                            <p className="bg-secoundary  px-3  font-medium text-phracolor">
                                We specialize in Private Placement of exclusive Alternative Investment opportunities, curated from renowned asset managers and financial institutions. Our clients gain access to highly selective, premium investments, diversifying portfolios with confidence. We facilitate secure placements, aligning with top tier opportunities in the financial landscape
                            </p>
                            <div className="bg-secoundary px-10 py-2 flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
                        </div>
                    )}

                    <div className="relative">
                        <button className="w-full px-6 py-3 bg-secoundary font-bold relative flex items-center justify-start text-secprimary text-[18px] whitespace-nowrap">
                            WealthConnect Platform
                            <button className="px-2 mx-2 rounded-full bg-black text-white text-[16px] font-semibold">New</button>
                            <div className="w-1/2 pl-2 py-2 bg-secoundary font-bold relative flex justify-end text-[18px]"><a className='text-secprimary'>Get Access</a></div> 
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <img src={img4} alt="What We Do" className="w-full" />
            </div>
        </div>
    );
}
