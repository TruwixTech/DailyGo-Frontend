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
            <div className='w-full h-auto relative flex flex-col justify-center items-center py-10 lg:py-20 xl:mt-28 px-5'>

                {/* Background Decorative Images */}
                <img src={BGimage} className='absolute top-0 left-0 w-24 md:w-32 lg:w-40' />
                <img src={Star} className='absolute top-4 left-6 md:top-48 md:left-10 w-6 md:w-10 lg:w-12' />
                <img src={Star} className='absolute top-40 right-6 md:top-1/3 md:right-20 w-6 md:w-10 lg:w-12' />
                <img src={BGimage2} className='absolute bottom-0 right-0 w-32 md:w-40 lg:w-48' />

                {/* Title Section */}
                <div className='text-center pb-6 md:px-10 px-4 w-full flex justify-center gap-10 pt-10 md:pt-4' >
                    <h1 className='text-2xl text-center md:text-[55px] lg:text-5xl  text-black 2xl:text-6xl font-semibold  md:w-[80%] w-full'>
                        From construction to cleaning, hire experienced daily workers with ease.
                    </h1>
                </div>

                {/* Cards Section */}
                <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-10 py-7 place-items-center'>
                    {box.map((box, index) => (
                        <div key={index} className="border border-gray-200 p-6 rounded-xl text-center shadow-md bg-white md:w-[300px] md:gap-4 flex flex-col">
                            <div className="flex justify-center items-center mb-4">
                                <div className="w-20 h-20 flex items-center justify-center bg-[#e1e3e6] rounded-full">
                                    <img src={box.icon} className="w-16 h-16 object-cover" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#212121] lg:text-2xl">{box.item}</h3>
                            <p className="text-[#656C7B] mt-2">{box.description}</p>
                        </div>
                    ))}
                </div>

            </div>
           
        </>
    );
}

export default Section1;
