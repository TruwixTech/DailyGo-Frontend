import React from 'react';
import BGimage from '../../assets/Bgimage1.svg';
import BGimage2 from '../../assets/bgimage2.svg';
import Star from '../../assets/Star.svg';
import img1 from '../../assets/Vector.svg';

function Section1() {
    const box = [
        {
            icon: img1,
            item: 'Easily Track Your jobs',
            description: "Get reliable, affordable, and on-demand labor services at your fingertips.",
        },
        {
            icon: img1,
            item: 'Easily Track Your jobs',
            description: "Get reliable, affordable, and on-demand labor services at your fingertips.",
        },
        {
            icon: img1,
            item: 'Easily Track Your jobs',
            description: "Get reliable, affordable, and on-demand labor services at your fingertips.",
        }
    ];

    return (
        <>
            <div className='w-full min-h-screen relative flex flex-col justify-center items-center   '>

                {/* Background Decorative Images */}
                <img src={BGimage} className='absolute top-30 left-0 w-24 md:w-32 lg:w-40' />
                <img src={Star} className='absolute top-4 left-6 md:top-48 md:left-10 w-6 md:w-10 lg:w-12' />
                <img src={Star} className='absolute top-40 right-6 md:top-1/3 md:right-20 w-6 md:w-10 lg:w-12' />
                <img src={BGimage2} className='absolute bottom-0 right-0 w-32 md:w-40 lg:w-48' />

                {/* Title Section */}
                <div className='text-center pb-6 md:px-10 px-4 w-full flex justify-center gap-10 mt-10 md:mt-0' >
                    <h1 className='text-2xl text-center md:text-[55px] lg:text-5xl  text-black  md:w-[80%] w-full'>
                        From construction to cleaning, hire experienced daily workers with ease.
                    </h1>
                </div>

                {/* Cards Section */}
                <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 mt-10 py-7'>
                    {box.map((box, index) => (
                        <div key={index} className="border border-gray-200 p-6 rounded-xl text-center shadow-md bg-white">
                            <div className="flex justify-center items-center mb-4">
                                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                                    <img src={box.icon} className="w-10 h-10 object-cover" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{box.item}</h3>
                            <p className="text-gray-600 mt-2">{box.description}</p>
                        </div>
                    ))}
                </div>

            </div>
           
        </>
    );
}

export default Section1;
