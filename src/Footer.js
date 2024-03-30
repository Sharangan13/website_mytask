import logo from "./assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-12">
    <footer className="flex justify-between px-16 items-center bg-footerbg">
      <div className="w-2/5 py-8">
        <div className="py-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="py-1">
          <h1 className="font-bold text-24">+971 4 295 7589</h1>
        </div>
        <div className="py-1">
          <p className="font-bold text-16">BlueBay Financial Services LLC</p>
        </div>
        <div className="py-1">
          <p className="font-semibold text-16">117, Oud Metha Offices Building<br/> UmmHurair, Dubai – UAE</p>
        </div>
        <div className="py-2">
          <p className="font-semibold text-gray-500 text-16">BlueBay Financial Services LLC <br/>All Rights Reserved.</p>
        </div>
      </div>

      <div className=" w-3/5 flex flex-col justify-between"> 
        <div className="flex justify-between px-16">
          <div className="px-4">
            <h1 className="font-semibold text-16">What We Do</h1>
            <ul className="py-3">
              <li className="py-2">Investment Banking</li>
              <li className="py-2">Wealth Solutions</li>
              <li className="py-2">Ventures</li>
            </ul>
          </div>
          <div className="px-4">
            <h1 className="font-semibold text-16">Company</h1>
            <ul className="py-3">
              <li className="py-2">Contact us</li>
            </ul>
          </div>
          <div className="px-4">
            <h1 className="font-semibold text-16">Legal</h1>
            <ul className="py-3">
              <li className="py-2">Terms & conditions</li>
              <li className="py-2">Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end px-16">
        <a href="#" className="mr-4 text-xl"><FaLinkedin size={24} color="gray" /></a> 
        <a href="#" className="text-xl"><FaFacebookSquare size={24}  color="gray"/></a>
      </div>
      </div>
    </footer>
    </div>
  );
}

