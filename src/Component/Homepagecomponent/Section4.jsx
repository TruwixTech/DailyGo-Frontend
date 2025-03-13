import React, { useEffect, useState } from "react";
import Middle from "../../assets/middle.png";
import Card from './Card';
import img1 from '../../assets/job.svg'
// import Star from '../../assets/Star.svg';


const Section4 = () => {
       const [isVisible, setIsVisible] = useState(false);
       const box = [
              {
                     icon: img1,
                     item: 'On Demand Staffing',
                     description: " Get extra hands only when you need them—weekends, peak seasons, or special events.",
              },
              {
                     icon: img1,
                     item: 'Cost Efective',
                     description: "Pay only for productive hours—no idle time charges.",

              },
              {
                     icon: img1,
                     item: 'Rapid Hiring',
                     description: "Find the right workers in 24-48 hours, not weeks.",
              }, {
                     icon: img1,
                     item: 'Easily Track Your jobs',
                     description: "Get reliable, affordable, and on-demand labor services at your fingertips.",
              },
              {
                     icon: img1,
                     item: 'Quality You Can Trust',
                     description: "All workers are screened and trained for top performance..",
              },
              {
                     icon: img1,
                     item: 'Easily Track Your jobs',
                     description: "Get reliable, affordable, and on-demand labor services at your fingertips.",
              },
       ];

       useEffect(() => {
              const observer = new IntersectionObserver(
                     (entries) => {
                            entries.forEach(entry => {
                                   if (entry.isIntersecting) {
                                          setIsVisible(true);
                                          observer.unobserve(entry.target);
                                   }
                            });
                     },
                     { threshold: 0.60 }
              );

              const section = document.getElementById('section4');
              if (section) observer.observe(section);

              return () => {
                     if (section) observer.unobserve(section);
              };
       }, []);


       return (
              <>
                     <div id="section4" className="w-full md:min-h-screen relative my-20 md:pb-10 pb-4 lg:mb-0">
                            <div className="md:hidden shadow-lg w-[200px] mx-auto">
                                   <img src={Middle} alt="Middle Section" className="w-full h-full object-cover" />
                            </div>
                            {/* Middle Image */}
                            <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-[200px] md:w-[300px] md:h-[600px] hidden absolute md:block">
                                   <img src={Middle} alt="Middle Section" className="w-full h-full object-cover" />
                            </div>

                            {/* Desktop Cards with Animation */}
                            <div className={`hidden md:block absolute top-0 lg:top-12 left-0 lg:left-50 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'On Demand Staffing'} content={'Get extra hands only when you need them—weekends, peak seasons, or special events.'} />
                            </div>

                            <div className={`hidden md:block absolute lg:top-12 right-0 lg:right-50 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'Cost Efective'} content={'Pay only for productive hours—no idle time charges.'} />
                            </div>

                            <div className={`hidden md:block absolute top-[220px] lg:top-[310px] left-0 lg:left-5 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'Rapid Hiring'} content={'Find the right workers in 24-48 hours, not weeks'} />
                            </div>

                            <div className={`hidden md:block absolute top-[220px] lg:top-[310px] right-0 lg:right-5 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'Easily Track Your jobs'} content={'Get reliable, affordable, and on-demand labor services at your fingertips.'} />
                            </div>

                            <div className={`hidden md:block absolute -bottom-0 lg:-bottom-14 right-0 lg:right-50 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'Quality You Can Trust'} content={'Find and apply for jobs that match your skills with just a few clicks.'} />
                            </div>

                            <div className={`hidden md:block absolute -bottom-0 lg:-bottom-14 left-0 lg:left-50 transition-all duration-700 ease-out ${!isVisible ?
                                   'opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]' :
                                   'opacity-100 scale-100 translate-x-0 translate-y-0'}`}>
                                   <Card title={'Trusted Partners'} content={'Work with verified event managers and professionals for reliable service.'} />
                            </div>

                            {/* Mobile Grid */}
                            <div className='w-full md:hidden max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 mt-10 py-7 px-5'>
                                   {box.map((box, index) => (
                                          <div key={index} className="border border-gray-200 p-6 rounded-xl text-center shadow-md bg-white transition-all duration-300 hover:shadow-lg">
                                                 <div className="flex justify-center items-center mb-4">
                                                        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                                                               <img src={box.icon} className="w-10 h-10 object-cover" alt="icon" />
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
};

export default Section4;
