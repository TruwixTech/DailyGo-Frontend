import React from "react";
import Middle from "../../assets/middle.png";
import Card from './Card';
import img1 from '../../assets/job.svg'
import Star from '../../assets/Star.svg';


const Section4 = () => {
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
              <div className="relative">
                   <img src={Star} className='absolute top-1 left-6 md:top-15 md:left-10 w-6 md:w-10 lg:w-12' />
                            <img src={Star} className='absolute top-10 right-6 md:top-30 md:right-20 w-6 md:w-10 lg:w-12' />
                            {/* Title Section */}
                            <div className='text-center pb-6 md:px-10 px-4 w-full flex justify-center gap-10 mt-10 md:mt-0 relative' >
                                   <h1 className='text-2xl text-center md:text-[55px] lg:text-5xl  text-black  md:w-[80%] w-full'>
                                          From construction to cleaning, hire experienced daily workers with ease.
                                   </h1>
                            </div>



                     <div className=" w-full   md:h-screen h-[400px] relative md:pb-10 pb-4">
                            
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-[200px] md:w-[300px] md:h-[600px] h-[100px]px]">
                                   <img src={Middle} alt="Middle Section" className="w-full h-full object-cover " />
                            </div>
                            <div className=' hidden md:block absolute top-12 left-0 lg:left-50'>
                                   <Card />
                            </div>
                            <div className='hidden md:block absolute top-12 right-0 lg:right-50'>
                                   <Card />
                            </div>
                            <div className='hidden md:block absolute top-[270px] right-0  lg:left-5'>
                                   <Card />
                            </div>
                            <div className='hidden md:block absolute top-[270px] right-0 lg:right-5'>
                                   <Card />
                            </div>
                            <div className='hidden md:block absolute -bottom-12 lg:bottom-5 right-0 lg:right-50 '>
                                   <Card />
                            </div>
                            <div className='hidden md:block absolute -bottom-12 lg:bottom-5 left-0 lg:left-50'>
                                   <Card />
                            </div>







                     </div>
                     {/* mobile phone */}

                     <div className='w-full  md:hidden max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 mt-10 py-7'>
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
       );
};

export default Section4;
