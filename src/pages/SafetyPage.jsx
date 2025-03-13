import React, { useEffect, useState } from 'react';
import ring from '../assets/ring.png';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import starw from '../assets/starwhite.png';
import righth from '../assets/line.svg';
import rightv from '../assets/left2.png';
import shadow from '../assets/shadow.png';

const SafetySecurityPage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='p-4 md:p-8 w-full h-auto overflow-hidden'>
                {/* Hero Section */}
                <div className='w-full md:h-[297px] h-auto relative bg-[#004439] rounded-3xl flex flex-col gap-2 md:pb-10 pb-6 py-2'>
                    <Navbar />
                    <div className='h-[0.5px] w-[90%] mx-auto bg-[#4a7069]' />
                    <img
                        src={ring}
                        className={`absolute w-full h-full top-0 transition-transform duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        alt="Decorative ring"
                    />
                    <img
                        src={shadow}
                        className={`absolute top-0 left-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        alt="Decorative shadow"
                    />
                    <img
                        src={starw}
                        className={`absolute top-30 right-24 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        alt="Decorative star"
                    />
                    <img src={righth} className='hidden md:block absolute top-44 -right-25' alt="Decorative line" />
                    <img src={rightv} className='hidden md:block absolute top-44 right-27' alt="Decorative line" />
                    <h1 className='text-center font-semibold text-[30px] md:text-[60px] text-white'>Safety & Security</h1>
                    <div className='flex gap-2 items-center justify-center text-white'>
                        <span>Home</span><span>-</span><span>Safety & Security</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-4 md:px-20 pt-28 pb-10">
                    <h1 className="text-center text-[24px] mt-4 py-6">
                        <span className='text-[#366059]'>Safe. Secure. Reliable.</span>
                    </h1>
                    <p className='text-center text-[18px]'>
                        At Daily Go, your trust and security come first.
                    </p>

                    {/* Key Features */}
                    <div className="mt-10 space-y-8">
                        <div>
                            <h2 className="md:text-4xl text-2xl font-bold mb-4 uppercase text-black">
                                ✔ Secure Payments
                            </h2>
                            <p className="text-[18px]">
                                Funds are protected until the job is completed. We ensure that your payments are safe and only released when you're satisfied with the work.
                            </p>
                        </div>

                        <div>
                            <h2 className="md:text-4xl text-2xl font-bold mb-4 uppercase text-black">
                                ✔ Privacy Protection
                            </h2>
                            <p className="text-[18px]">
                                Your information stays private. We use advanced encryption and security measures to protect your personal and financial data.
                            </p>
                        </div>

                        <div>
                            <h2 className="md:text-4xl text-2xl font-bold mb-4 uppercase text-black">
                                ✔ Fair Process
                            </h2>
                            <p className="text-[18px]">
                                Quick resolution of payment disputes. Our team is here to ensure a fair and transparent process for all parties involved.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <h2 className="md:text-4xl text-2xl font-bold mb-4 text-black">
                            Get the right workers, right when you need them.
                        </h2>
                        <p className="text-[18px]">
                            Post your job on Daily Go today and experience a seamless, secure, and reliable service.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-[#004439] text-white rounded-full font-semibold hover:bg-[#00332a] transition-all duration-300">
                            Post a Job Now
                        </button>
                    </div>

                    {/* Closing Statement */}
                    <div className="mt-16 text-center">
                        <h2 className="md:text-4xl text-2xl font-bold mb-4 text-black">
                            Let's start creating effortless events and lasting memories—together!
                        </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SafetySecurityPage;