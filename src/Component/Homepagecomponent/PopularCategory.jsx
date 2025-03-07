import React from "react";
import Marquee from "react-fast-marquee";
import brickpicker from "../../assets/brickpicker.png";
import construction from "../../assets/construction.png";
import construction2 from "../../assets/construction2.png";
import homemaker from "../../assets/home.png";

const categories = [
    { id: 1, image: brickpicker, name: "Brick Picker" },
    { id: 2, image: construction, name: "Construction" },
    { id: 3, image: homemaker, name: "Homemaker" },
    { id: 4, image: construction2, name: "Construction" },
    { id: 5, image: homemaker, name: "Homemaker" },
];

const PopularCategory = () => {
    return (
        <div className="text-center py-5 px-4 flex flex-col gap-10 w-full lg:gap-16 md:py-10 xl:py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#212121]">
                Popular Category
            </h2>

            {/* Marquee for Auto Scrolling */}
            <Marquee speed={50} gradient={true} gradientWidth={50} pauseOnHover={true}>
                <div className="flex gap-6 w-full">
                    {[...categories,...categories].map((category) => (
                        <div key={category.id} className="flex flex-col items-center gap-4 md:hover:scale-105 cursor-pointer duration-500 ease-in-out transition-all mx-4">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-4 lg:p-6 bg-gray-200 flex items-center justify-center rounded-2xl shadow-md">
                                <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="mt-2 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#004439]">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default PopularCategory;
