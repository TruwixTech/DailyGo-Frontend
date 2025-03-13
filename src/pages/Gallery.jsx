import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import ring from "../assets/ring.png";
import image1 from "../assets/iPhone1.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Footer from "../Component/Footer";
import shadow from '../assets/shadow.png'
import starw from '../assets/starwhite.png'
import righth from '../assets/line.svg'
import rightv from '../assets/left2.png'

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(image1);
    const [loaded, setLoaded] = useState(false);

    // Image array
    const images = [image1, image1, image1, image1, image1, image1];

    // State for current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 3 : prev - 1
        );
    };

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= images.length - 3 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <div className="w-full h-auto bg-white p-4 md:p-8 overflow-hidden">
                {/* Header Section */}
                <div className="w-full md:h-[300px] h-auto bg-[#004439] rounded-3xl relative pb-6 py-2">
                    <Navbar />
                    <div className='h-[0.5px] w-[90%] mx-auto bg-[#4a7069] mt-4 ' />
                    <h1 className="text-center font-semibold text-[30px] md:text-[60px] lg:text-7xl pt-7 text-white">
                        Gallery
                    </h1>
                    <div className="flex gap-2 items-center justify-center text-white pt-4">
                        <span>Home</span> <span>-</span> <span>Gallery</span>
                    </div>
                    <img
                        src={ring}
                        className={`absolute w-full h-full top-0 transition-transform duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    />
                    <img
                        src={shadow}
                        className={`absolute top-0 left-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img
                        src={starw}
                        className={`absolute top-32 right-24 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img src={righth} className='hidden md:block absolute top-40 -right-25 ' />
                    <img src={rightv} className='hidden md:block absolute top-40 right-27' />
                </div>

                <div className="w-full h-auto flex flex-col my-10 md:flex-row">
                    <div className="w-full h-auto flex md:w-[50%] lg:w-[40%]">
                        <img src={selectedImage} alt="selected images" className="w-40 mx-auto md:w-80 shadow-2xl" />
                    </div>
                    {/* Carousel Section */}
                    <div className="flex flex-col items-center justify-center py-10 ml-auto w-full md:w-[48%]">
                        <div className="relative flex items-center justify-center w-full">
                            {/* Left Button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 md:-left-10 text-gray-400 p-2 cursor-pointer rounded-full z-10"
                            >
                                <MdArrowBackIos size={30} />
                            </button>

                            {/* Image Display */}
                            <div className="overflow-hidden w-full max-w-4xl flex">
                                <div className="flex gap-10 transition-transform duration-500 ease-in-out py-6"
                                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            src={img}
                                            alt="Gallery"
                                            className="w-[60%] h-96 object-cover rounded-lg shadow-2xl"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right Button */}
                            <button
                                onClick={nextSlide}
                                className="absolute -right-5 text-gray-400 p-2 rounded-full cursor-pointer z-10"
                            >
                                <MdArrowForwardIos size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;
