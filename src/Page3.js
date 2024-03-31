import React, { useState } from 'react';
import img3 from "./assets/3.png";
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";


export default function Page3() {

    const [Btn1, setBtn1] = useState(false);
    const [Btn2, setBtn2] = useState(false);

  return (
    <section id='page3' className="grid grid-cols-2  px-16 py-8">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[32px] font-bold mb-4">What We Do</h1>
        <img src={img3} alt="What We Do" className="w-full" />
      </div>

      <div className="flex flex-col justify-center items-start px-16">
        <div className="text-start">
          <h1 className="text-[24px] font-bold mb-4">Investment Banking</h1>
          <p className="text-[18px] mb-4 text-phracolor font-medium">Our firm offers professional Advisory and Financial Brokerage services, leveraging our partners' vast experience and extensive network. We excel in guiding clients through complex financial transactions, mergers, and acquisitions. With a deep industry understanding and valuable connections, we optimize outcomes, ensuring informed decisions and successful deals.</p>
        </div>

         {/* Default 01 */}

        <div className="flex flex-col space-y-4 mt-4 w-full">
        {!Btn1 && <div className="relative">
            <button onClick={()=>setBtn1(!Btn1)} className="w-full px-6 py-3 bg-secoundary font-semibold relative flex items-center justify-between">
              Advisory
              <RiArrowDropDownLine className="text-4xl" />
            </button>
          </div>}
          
          
           {/* After click 01 */}

           {Btn1 && <div className="relative">
          <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
          <button onClick={()=>setBtn1(!Btn1)} className="w-full px-2 py-1 bg-secoundary font-semibold relative z-10 flex items-center justify-between">

            Advisory
            <RiArrowDropUpLine className="text-4xl" />
            </button>
          </div>
          <ul className="bg-secoundary px-10  leading-loose font-semibold text-phracolor">
            <li className="list-disc"><button>Financial Advisory</button></li>
            <li className="list-disc"><button>Restructuring/Divestments</button></li>
            <li className="list-disc"><button>Startup/SMEs</button></li>
          </ul>
          <div className="bg-secoundary px-10 py-2   flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
          
        </div>}

           
      

           {/* Default 02 */}

           {!Btn2 && <div className="relative">
            <button onClick={()=>setBtn2(!Btn2)} className="w-full px-6 py-3 bg-secoundary font-semibold relative z-10 flex items-center justify-between">
              Financial Brokerage
              <RiArrowDropDownLine className="text-4xl" />
            </button>
          </div>
}

          {/* After click 02 */}

          {Btn2 && <div className="relative">
          <div className="w-full bg-secoundary p-2 font-semibold relative flex items-center justify-between">
          <button onClick={()=>setBtn2(!Btn2)} className="w-full px-2 py-1 bg-secoundary font-semibold relative z-10 flex items-center justify-between">

          Financial Brokerage
            <RiArrowDropUpLine className="text-4xl" />
            </button>
          </div>
          <ul className="bg-secoundary px-10  leading-loose font-semibold text-phracolor">
            <li className="list-disc"><button>Private Credit</button></li>
            <li className="list-disc"><button>Private Equity</button></li>
            <li className="list-disc"><button>Trade Finance</button></li>
          </ul>
          <div className="bg-secoundary px-10 py-2   flex justify-end"><a href='#' className='text-primary font-semibold underline text-[14px]'>READ MORE</a></div>
          
        </div>}


        </div>
        
      </div>
    </section>
  );
}
