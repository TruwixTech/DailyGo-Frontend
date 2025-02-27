import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../assets/hero.svg'
import watch from '../assets/watch.svg'
import Ring from '../assets/ring.png'
import Section from '../Component/Homepagecomponent/Section'
import Section1 from '../Component/Homepagecomponent/Section1'
import Section2 from '../Component/Homepagecomponent/Section2'
import Section4 from '../Component/Homepagecomponent/Section4'
import Section5 from '../Component/Homepagecomponent/Section5'
import Footer from '../Component/Footer'
const HomePage = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-white p-4 md:p-10 '>
                <div className='w-full h-full bg-[#2c4b4b] overflow-hidden relative rounded-3xl'>
                <div>
                    <img src={Ring} className='absolute -bottom-4 ' />
                </div>
                <Navbar />
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-white gap-8 ">
                    {/* Left Side - Text & CTA */}
                    <div className="md:w-1/2 w-full items-center justify-center text-center ">
                        <h1 className="text-[50px] md:text-[50px] font-bold  font-Satoshi leading-tight">
                            Find Skilled Laborers for<span> Any Job, Anytime!</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-300 font-bold font-Satoshi">
                            Get reliable, affordable, and on-demand labor services at your fingertips.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                            <button className=" font-satoshi  px-6 py-3 bg-white text-[#366059] font-semibold md:text-sm rounded-full cursor-pointer">
                                Explore More
                            </button>
                            <button className="flex  font-Satoshi items-center gap-2 text-white  px-6 py-3 rounded-lg cursor-pointer">
                                <span><img src={watch} className='w-8 h-12' /></span> Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image with z-index */}
                    <div className="md:w-1/2 w-full flex justify-center relative z-40">
                        <img src={Hero} alt="Skilled Worker" className="w-full h-full" />
                    </div>
                </div>
            <Section/>
        </div>
        </div>
            <Section1/>
            <Section2/>
            <Section4/>
            <Section5/>
            <Footer/>

        </>
    )
}

export default HomePage
