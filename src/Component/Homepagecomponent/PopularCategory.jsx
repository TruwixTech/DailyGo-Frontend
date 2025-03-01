import React from 'react';
import brickpicker from "../../assets/brickpicker.png";
import construction from "../../assets/construction.png";
import construction2 from "../../assets/construction2.png";
import homemaker from "../../assets/home.png";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const categories = [
    { id: 1, image: brickpicker, name: "Brick Picker" },
    { id: 2, image: construction, name: "Construction" },
    { id: 3, image: homemaker, name: "Homemaker" },
    { id: 4, image: construction2, name: "Construction" },
    { id: 5, image: homemaker, name: "Homemaker" },
    { id: 6, image: <PiDotsThreeOutlineFill size={60} className='text-[#004439]' />, name: "More" }
];

const PopularCategory = () => {
    return (
        <div className="text-center py-5 px-4 flex flex-col gap-10 w-full lg:gap-16 md:py-10 xl:py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#212121]">Popular Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full lg:px-10 mx-auto">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-4 lg:p-6 bg-gray-200 flex items-center justify-center rounded-2xl shadow-md">
                            {
                                category.name === "More"  
                                ? category.image
                                : <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                            }
                        </div>
                        <p className="mt-2 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#004439]">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategory;
