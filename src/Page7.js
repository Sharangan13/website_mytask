import React from 'react'
import wealth_img1 from "./assets/7.png";

export default function Page7() {
    return (
        <div className='md:px-4 py-12 lg:px-16' >
          <section className="flex flex-col md:flex-row justify-between items-center bg-secoundary">
            <div className="flex flex-col items-center md:items-start px-12">
              <h1 className="text-[30px] md:text-[44px] font-semibold text-btn1  ">
                <span className='font-bold'>Maximize</span> your financial<br/> growth with tailored<br/>solutions
              </h1>
              <div className="flex flex-col  sm:flex-row pt-3 md:pt-6">
                <button className='px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold bg-secoundary'>
                  WEALTH
                </button>
                <button className='px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
                  ADVISORY
                </button>
                <button className='px-3 py-2 m-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
                  VENTURE
                </button>
              </div>
              <div className='py-6'>
                <button className="px-6 mt-4 py-3 mr-4 bg-primary text-white md:text-[16px]  font-semibold ">
                  REACH US TODAY
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img className="w-full min-w-[250px] " src={wealth_img1} alt="Home Image" />
            </div>
          </section>
        </div>
    );
}
