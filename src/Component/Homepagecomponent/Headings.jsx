import React from 'react';
import BGimage from '../../assets/Bgimage1.svg';
import BGimage2 from '../../assets/bgimage2.svg';
import Star from '../../assets/Star.svg';
import img1 from '../../assets/Vector.svg';

function Headings() {

    return (
        <>
            <div className='w-full h-auto relative flex flex-col justify-center items-center py-10 lg:my-20 px-5'>

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

            </div>
           
        </>
    );
}

export default Headings;
