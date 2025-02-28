import React from 'react';
import brickpicker from "../../assets/brickpicker.png";
import construction from "../../assets/construction.png";
import construction2 from "../../assets/construction2.png";
import homemaker from "../../assets/homemaker.png";
import more from "../../assets/more.png";

const categories = [
    { id: 1, image: brickpicker, name: "Brick Picker" },
    { id: 2, image: construction, name: "Construction" },
    { id: 3, image: homemaker, name: "Homemaker" },
    { id: 4, image: construction2, name: "Construction" },
    { id: 5, image: homemaker, name: "Homemaker" },
    { id: 6, image: more, name: "More" }
];

const PopularCategory = () => {
    return (
        <div className="text-center py-5 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-2 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
                            <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                        </div>
                        <p className="mt-2 text-sm sm:text-base font-medium">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategory;
