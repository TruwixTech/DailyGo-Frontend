import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/bgimage3.png';
import iphone from '../../assets/iPhone.png';

function Section2() {

    const [isFlipped, setIsFlipped] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsFlipped(true);
                    }
                });
            },
            { threshold: 0.5 } // Triggers when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

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
                    <button className="w-full lg:w-1/3 px-6 py-3 bg-white text-[#366059] md:hover:bg-[#366059] md:hover:text-white cursor-pointer duration-300 font-semibold rounded-full">
                        Learn More
                    </button>
                </div>

                <div className='relative lg:hidden lg:w-1/2 w-full flex justify-center items-end xl:w-[48%]'>
                <img src={iphone} alt="phone image" className='w-full' />
                </div>

                {/* Right Image */}
                <div ref={sectionRef} className="relative hidden lg:flex lg:w-1/2 w-full justify-center items-end xl:w-[48%]">
                    <div className="flip-container">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            {/* Front Image */}
                            <div className="flip-card-front"></div>
                            {/* Back Image */}
                            <div className="flip-card-back"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section2;
