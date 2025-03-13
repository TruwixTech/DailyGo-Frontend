import React, { useEffect, useState } from 'react';
import BGimage from '../../assets/Bgimage1.svg';
import BGimage2 from '../../assets/bgimage2.svg';
import Star from '../../assets/Star.svg';
import img1 from '../../assets/Vector.svg';

function Section1() {
    const [isVisible, setIsVisible] = useState(false);
    const box = [
        {
            icon: img1,
            item: 'Direct Hiring',
            description: "Eliminate middlemen for faster,more efficient staffing",
        },
        {
            icon: img1,
            item: 'Verified Workers',
            description: "Browse Profile with ratings and reviews for quality assurance",
        },
        {
            icon: img1,
            item: 'Attendance Tracking',
            description: "Monitor worker availability and reliability with ease",
        },
        {
            icon: img1,
            item: 'Effortless Payments',
            description: "Secure, instant transcations through our escrow wailet system",
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('section1');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <>
            <div id="section1" className='w-full h-auto relative flex flex-col justify-center items-center py-10 lg:py-20 xl:mt-28 px-5'>

                {/* Background Decorative Images */}
                <img src={BGimage} className='absolute top-0 left-0 w-24 md:w-32 lg:w-40' />
                <img
                    src={Star}
                    className={`absolute top-4 left-6 md:top-48 md:left-10 w-6 md:w-10 lg:w-12 transition-transform duration-1000 ${isVisible ? 'animate-spin' : ''
                        }`}
                />
                <img
                    src={Star}
                    className={`absolute top-40 right-6 lg:top-40 xl:top-1/4 md:right-20 w-6 md:w-10 lg:w-12 transition-transform duration-1000 ${isVisible ? 'animate-spin' : ''
                        }`}
                />
                {/* <img src={BGimage2} className='absolute bottom-0 right-0 w-32 md:w-40 lg:w-48' /> */}

                {/* Title Section */}
                <div className='text-center pb-6 md:px-10 px-4 w-full flex justify-center gap-10 pt-10 md:pt-4' >
                    <h1 className='text-2xl text-center md:text-[55px] lg:text-5xl    text-black 2xl:text-6xl font-bold  md:w-[80%] w-full'>
                        What Makes Daily Go Stand Out
                    </h1>
                </div>

                {/* Cards Section */}
                <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12 mt-10 py-7 place-items-center'>
                    {box.map((box, index) => (
                        <div key={index} className="group border border-gray-200 p-6 md:hover:shadow-2xl duration-700 ease-in-out cursor-pointer hover:bg-[#004439] rounded-xl text-center shadow-md bg-white md:w-[300px] md:gap-4 flex flex-col">
                            <div className="flex justify-center items-center mb-4">
                                <div className="w-20 h-20 flex items-center justify-center bg-[#e1e3e6] rounded-full">
                                    <img src={box.icon} className="w-16 h-16 object-cover" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#212121] lg:text-2xl group-hover:text-white">{box.item}</h3>
                            <p className="text-[#656C7B] mt-2 group-hover:text-white ">{box.description}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}

export default Section1;
