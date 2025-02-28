import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import ring from "../assets/ring.png";
import image1 from "../assets/iPhone1.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Footer from "../Component/Footer";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(image1);
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

    return (
        <>
            <div className="w-full h-auto bg-white p-8 overflow-hidden">
                {/* Header Section */}
                <div className="w-full md:h-[300px] h-auto bg-[#004439] rounded-2xl relative pb-6">
                    <Navbar />
                    <hr className="border-1 w-[90%] mx-auto border-gray-400" />
                    <h1 className="text-center font-semibold text-[30px] md:text-[60px] text-white">
                        Gallery
                    </h1>
                    <div className="flex gap-2 items-center justify-center text-white">
                        <span>Home</span> <span>-</span> <span>Gallery</span>
                    </div>
                    <img src={ring} className="absolute top-0 w-full h-full" alt="ring" />
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
                                className="absolute right-0 md:-right-5 text-gray-400 p-2 rounded-full cursor-pointer z-10"
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
