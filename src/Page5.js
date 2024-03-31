import React, { useState } from 'react';
import img5 from "./assets/5.png";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

export default function Page5() {
    const [Btn1, setBtn1] = useState(false);
    const [Btn2, setBtn2] = useState(false);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-16 py-8">
            <div className="flex justify-center items-center sm:items-start">
                <img src={img5} alt="What We Do" className="w-full" />
            </div>

            <div className="flex flex-col justify-center items-start sm:px-16">
                <div className="text-start">
                    <h1 className="text-[24px] font-bold mb-4">Ventures</h1>
                    <p className="text-[18px] mb-4 text-phracolor font-medium">We collaborate with industry-leading experts to provide our clients with meticulously chosen product solutions. By harnessing their insights and expertise, we ensure that our clients have access to the most tailored and advantageous options in the market, helping them achieve their specific financial goals with precision.</p>
                </div>

                {/* Default 01 */}
                <div className="flex flex-col space-y-4 mt-4 w-full">
                    {!Btn1 && (
                        <div className="relative">
                            <button onClick={() => setBtn1(!Btn1)} className="w-full px-6 py-3 bg-secoundary font-semibold relative flex items-center justify-between">
                                FinSouq
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>
                    )}

                    {/* After click 01 */}
                    {Btn1 && (
                        <div className="relative">
                            <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
                                <button onClick={() => setBtn1(!Btn1)} className="w-full px-2 py-1 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
                                    FinSouq
                                    <RiArrowDropUpLine className="text-4xl" />
                                </button>
                            </div>
                            <p className="bg-secoundary px-10 font-medium text-phracolor">
                                FinSouq serves as a comprehensive financial marketplace, empowering consumers to efficiently access and streamline their everyday financial products and services. It simplifies the process of acquiring essential financial solutions, offering a one-stop destination for individuals to manage their financial needs with ease and convenience.
                            </p>
                            <div className="bg-secoundary px-10 py-2 flex justify-start leading-loose"><div className='px-1'><TbWorld className="text-2xl" /></div><a href='#' className='font-semibold underline text-[14px]'>www.FinSouq.ae</a></div>
                            <div className="bg-secoundary px-10 py-2 flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
                        </div>
                    )}

                    {/* Default 02 */}
                    {!Btn2 && (
                        <div className="relative">
                            <button onClick={() => setBtn2(!Btn2)} className="w-full px-6 py-3 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
                                Citizenship By Investments
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>
                    )}

                    {/* After click 02 */}
                    {Btn2 && (
                        <div className="relative">
                            <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
                                <button onClick={() => setBtn2(!Btn2)} className="w-full px-2 py-1 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
                                    Citizenship By Investments
                                    <RiArrowDropUpLine className="text-4xl" />
                                </button>
                            </div>
                            <p className="bg-secoundary px-10 font-semibold text-phracolor">
                                We provide Citizenship by Investment solutions, granting clients visa-free travel freedom and securing their families' futures. Our services enable individuals to obtain a second citizenship, offering unparalleled global mobility and long-term financial security, ensuring peace of mind for their loved ones.
                            </p>
                            <div className="bg-secoundary px-10 py-2 flex justify-start leading-loose"><div className='px-1'><TbWorld className="text-2xl" /></div><a href='#' className='font-semibold underline text-[14px]'>Action (pending for approval)</a></div>
                            <div className="bg-secoundary px-10 py-2 flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
