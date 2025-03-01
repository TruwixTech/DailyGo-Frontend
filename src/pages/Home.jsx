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
import left from '../assets/left1.png'
import horizontal from '../assets/horizontal.png'
import findworker from '../assets/findworker.png'
import hireworker from '../assets/hireworker.png'
import shadow from '../assets/shadow.png'
import PopularCategory from '../Component/Homepagecomponent/PopularCategory'
import How from '../Component/Homepagecomponent/How'
import Headings from '../Component/Homepagecomponent/Headings'

const HomePage = () => {
    return (
        <>

            <div className='w-full min-h-screen bg-white p-4 md:p-8'>
                <div className=' rounded-3xl  bg-[#004439] overflow-hidden relative '>
                    <div>
                        <img src={Ring} className='absolute bottom-7' />
                    </div>
                    <div>
                        <img src={left} className=' absolute bottom-40 left-14 z-40 ' />
                    </div>
                    <div>
                        <img src={horizontal} className=' absolute bottom-40 left-45 z-40 ' />
                    </div>
                    <img src={shadow} className='absolute top-0 left-0' />
                    <Navbar />
                    <div className='h-[0.5px] w-[90%] mx-auto bg-[#4a7069]  ' />
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 text-white gap-8 relative z-40 lg:items-start">
                        {/* Left Side - Text & CTA */}
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center pt-10 lg:pt-24 xl:gap-4">
                            <h1 className="text-2xl md:text-[50px] xl:text-[61px] font-bold  font-Satoshi leading-tight">
                                Find Skilled Laborers for<span> Any Job, Anytime!</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300 font-bold font-Satoshi lg:px-16">
                                Get reliable, affordable, and on-demand labor services at your fingertips.
                            </p>
                            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 ">
                                <button className=" font-satoshi  px-6 py-3 bg-white text-[#366059] font-bold md:text-sm rounded-full cursor-pointer lg:px-8 lg:py-4 lg:text-base">
                                    Explore More
                                </button>
                                <button className="flex  font-Satoshi items-center gap-2 text-white  px-6 py-3 rounded-lg cursor-pointer lg:px-8 lg:py-4 lg:text-base">
                                    <span><img src={watch} className='w-8 h-12' /></span> Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Image with z-index */}
                        <div className="lg:w-1/2 w-full flex justify-center relative z-40">
                            <img src={Hero} alt="Skilled Worker" className="w-full h-full" />
                        </div>

                    </div>
                    <Section />
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:gap-20 justify-center items-center py-20 lg:pb-0'>
                    <button className="w-full lg:w-[40%]  flex items-center justify-center gap-4 px-4 py-2 bg-[#004439] text-white font-bold md:text-[30px] rounded-lg cursor-pointer"><span><img src={hireworker} className='w-full h-full pr-6 ' /></span>Find Worker</button>
                    <button className='w-full lg:w-[40%] flex  items-center justify-center gap-4  px-4 py-2 bg-[#004439] text-white md:text-[30px] font-bold rounded-lg cursor-pointer'><span><img src={findworker} className='w-full h-full pr-6' /></span>Find Work</button>
                </div>

            </div>
            <Section1 />
            <PopularCategory />
            <Section2 />
            <How />
            <Headings />
            <Section4 />
            <Section5 />
            <Footer />
        </>


    )
}

export default HomePage
