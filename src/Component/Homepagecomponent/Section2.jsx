import React from 'react';
import image from '../../assets/bgimage3.png';
import iphone from '../../assets/iPhone.png';

function Section2() {
    return (
        <div className='w-full min-h-screen flex flex-col py-10 px-4 md:px-12 lg:px-14'>
            <div className='w-full md:h-auto lg:h-[600px] h-auto bg-[#004439] rounded-2xl relative flex flex-col lg:flex-row overflow-hidden'>

                {/* Background Image */}
                <img src={image} className='absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-100' alt="Background" />

                {/* Left Content */}
                <div className='relative z-30 lg:w-1/2 w-full py-10 px-6 md:px-12 flex flex-col gap-6 md:gap-10 xl:gap-8 text-center md:text-left'>
                    <h1 className='text-white text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl xl:leading-20 font-semibold'>
                        Get reliable, <br /> affordable, and labor <br /> services at your <br /> fingertips.
                    </h1>
                    <p className='lg:text-lg text-white'>
                        The Strong Workout Tracker is designed for serious individuals who have significant workout experience and a clear understanding of their fitness goals.
                    </p>
                    <button className="w-full lg:w-1/3 px-6 py-3 bg-white text-[#366059] font-semibold rounded-full">
                        Learn More
                    </button>
                </div>

                {/* Right Image */}
                <div className='relative lg:w-1/2 w-full flex justify-center items-end xl:w-[48%]'>
                    <img src={iphone} className='w-80 md:w-96 lg:w-full right-5' alt="iPhone" />
                </div>

            </div>
        </div>
    );
}

export default Section2;
