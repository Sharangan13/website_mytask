import React from 'react'
import wealth_img1 from "./assets/7.png";

export default function Page7() {
    return (
        <div className='px-16 py-12' >
        <section className="flex flex-col md:flex-row  justify-between items-center bg-secoundary">
          <div className="flex flex-col items-center md:items-start px-12">
            <h1  className="md:text-[44px] font-semibold text-btn1 sm:text-[14px] ">
            <span className='font-bold'>Maximize</span> your financial<br/> growth with tailored<br/>solutions
            </h1>
            <div className="flex pt-6 ">
              <button className='px-3 py-2 mx-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold bg-secoundary'>
              WEALTH
              </button>
    
              <button className='px-3  py-2 mx-2  rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
              ADVISORY
              </button>
    
              <button className='px-3  py-2 mx-2 rounded-full bg-btnbg text-btn1 md:text-[15px] font-semibold'>
    
              VENTURE
              </button>
              
            </div>
    
            <div className='py-6'>
              <button className="px-6 mt-4 py-3 mr-4 bg-primary text-white md:text-[16px]  font-semibold ">
              REACH US TODAY
              </button>
              
              
            </div>
          </div>
    
          <div className="w-full md:w-2/5 flex justify-cente">
            <img className="w-full " src={wealth_img1} alt="Home Image" />
          </div>
        </section>
        </div>
      );
    }
