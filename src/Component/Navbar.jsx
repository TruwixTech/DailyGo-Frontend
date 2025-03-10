import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full h-auto flex justify-end px-5 md:px-10 lg:px-14  relative z-40 '>
            {/* <NavLink
                to="/"
                className="w-28 h-40 rounded-b-3xl bg-white md:px-6 "
            >
                <img src='' alt="logo" className="w-full h-[80%]" />
            </NavLink> */}
            <div className="w-auto h-20 flex justify-between items-center lg:gap-6 lg:h-28 xl:gap-40">
                {isOpen ? (
                    <IoClose
                        className="text-white text-3xl cursor-pointer lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <FaBars
                        className="text-white text-3xl cursor-pointer lg:hidden"
                        onClick={() => setIsOpen(true)}
                    />
                )}
                {isOpen && (
                    <div className="w-[90%] items-center  absolute top-20 right-5 bg-white shadow-lg rounded-xl flex flex-col gap-4 p-4 z-50 md:flex lg:hidden ">
                        <NavLink
                            to="/"
                            className="text-[#01210F] text-xl  font-Satoshi"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/contactus"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/registration-form"
                            className=" py-2 bg-[#366059] rounded-3xl text-[16px] text-[#ffffff] font-Satoshi px-6 xl:py-2.5"
                        >
                            Register Now
                        </NavLink>
                        <NavLink
                            to="/"
                            className=" px-3 py-2 bg-[#ffff] rounded-3xl text-[16px] text-[#366059] font-Satoshi xl:py-2.5"
                            style={{
                                boxShadow: "white", // Custom box shadow
                            }}
                        >
                            Download the App
                        </NavLink>

                    </div>
                )}
                <div className="hidden gap-6 lg:flex xl:gap-8">
                    <NavLink to="/" className="text-white text-2xl  font-Satoshi">
                        Home
                    </NavLink>
                    {/* <NavLink to="/about" className="text-white text-2xl  font-Satoshi">
                        About Us
                    </NavLink>
                     <NavLink to="/team" className="text-white text-2xl  font-Satoshi">
                        Our Team
                    </NavLink> */}
                    {/* <NavLink to="/news" className="text-white text-2xl  font-Satoshi">
                        News
                    </NavLink> */}
                    <NavLink to="/gallery" className="text-white text-2xl  font-Satoshi">
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className="text-white text-2xl  font-Satoshi"
                    >
                        Contact
                    </NavLink>
                </div>
                <div className='w-auto h-auto flex  gap-5'>
                <NavLink
                    to="/registration-form"
                    className="hidden lg:flex px-6 font-semibold py-2 bg-[#366059] md:hover:bg-[#ffff] md:hover:text-[#366059] duration-500 ease-in-out text-[16px] rounded-3xl text-white font-Satoshi xl:py-2.5"
                    style={{
                        boxShadow: "white", // Custom box shadow
                    }}
                >
                    Register Now
                </NavLink>
                <NavLink
                    to="/"
                    className="hidden lg:flex px-6 font-semibold py-2 bg-[#ffff]  text-[16px] rounded-3xl text-[#366059] md:hover:bg-[#366059] md:hover:text-[#ffff] duration-500 ease-in-out font-Satoshi xl:py-2.5"
                    style={{
                        boxShadow: "white", // Custom box shadow
                    }}
                >
                    Download the App
                </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar