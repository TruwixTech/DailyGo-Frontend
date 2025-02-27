import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full h-[102px] flex justify-end px-5 md:px-10 lg:px-14  '>
            {/* <NavLink
                to="/"
                className="w-28 h-40 rounded-b-3xl bg-white md:px-6 "
            >
                <img src='' alt="logo" className="w-full h-[80%]" />
            </NavLink> */}
            <div className="w-auto h-20 flex justify-between items-center lg:gap-6 lg:h-28 xl:gap-10">
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
                    <div className="w-[90%] items-center  absolute top-20 right-5 bg-white shadow-lg rounded-xl flex flex-col gap-4 p-4 z-[100] md:flex lg:hidden ">
                        <NavLink
                            to="/"
                            className="text-[#01210F] text-xl  font-Satoshi"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/event"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/news"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            News
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/contact-us"
                            className="text-[#01210F] text-xl  font-Satoshi"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/"
                            className=" px-3 py-2 bg-[#ffff] rounded-3xl text-black  font-Satoshi xl:py-2.5"
                            style={{
                                boxShadow: "white", // Custom box shadow
                            }}
                        >
                            Download the App Now
                        </NavLink>

                    </div>
                )}
                <div className='w-full flex gap-40 items-center'>
                <div className="hidden gap-6 lg:flex xl:gap-10">
                    <NavLink to="/" className="text-white text-lg  font-Satoshi">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="text-white text-lg  font-Satoshi">
                        About Us
                    </NavLink>
                    <NavLink to="/event" className="text-white text-lg  font-Satoshi">
                        Events
                    </NavLink>
                    <NavLink to="/news" className="text-white text-lg  font-Satoshi">
                        News
                    </NavLink>
                    <NavLink to="/gallery" className="text-white text-lg  font-Satoshi">
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className="text-white text-lg  font-Satoshi"
                    >
                        Contact
                    </NavLink>
                </div>
                <div>
                <NavLink
                    to="/registration"
                    className="hidden lg:flex px-3 py-2 bg-[#ffff] rounded-3xl text-black  font-Satoshi xl:py-2.5"
                    style={{
                        boxShadow: "white", // Custom box shadow
                    }}
                >
                    Download the App Now
                </NavLink>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar