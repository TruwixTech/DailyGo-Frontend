import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Right from '../assets/right.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-[#366059] text-white py-10 px-6 md:px-16">
      <div className='flex flex-col'>
        <div className="flex flex-col md:flex-row md:justify-between  gap-8 ">
          {/* Left Section */}
          <div className='md:w-[30%] w-full'>
          <div>
            <p className="text-lg">
              The Strong Workout Tracker is designed for serious individuals who have significant
              workout experience and a clear understanding of their fitness goals.
            </p>
            <button className="mt-4 flex items-center gap-2 px-6 py-2 bg-white text-green-900 rounded-full shadow-md">
            <Link to="/contactus">  Contact Us</Link>
            <div>
              <img src={Right} className='w-6 h-6'/>
            </div>
            </button>
          </div>
          </div>
          

          {/* Middle Section */}
          <div className='md:w-[70%] w-full '>
          <div className="flex flex-wrap justify-around gap-10">
            <div>
              <h3 className="font-semibold">About</h3>
              <ul className="space-y-2 mt-2">
                <li>Services</li>
                <li>Our Blog</li>
                <li>Benefits</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <ul className="space-y-2 mt-2">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div>
              <p>Dailygo@company.com</p>
              <p className="mt-2">+6222 333 444</p>
            </div>
          </div>
          </div>
        


        </div>

        {/* Bottom Section */}
        <div className="mt-4 border-t border-gray-400 pt-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-6 text-sm">
            <Link to="/termscondition">Terms & Conditions</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
          <div className="flex gap-4 text-xl mt-4 md:mt-0">
            <span className="cursor-pointer"><FaFacebookF size={20} className='text-white' /></span>
            <span className="cursor-pointer"><FaTwitter size={20} className='text-white' /></span>
            <span className="cursor-pointer"><IoLogoInstagram size={20} className='text-white'/></span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
