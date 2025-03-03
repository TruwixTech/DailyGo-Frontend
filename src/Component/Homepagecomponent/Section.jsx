import React from "react";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <Marquee speed={50} gradient={true} gradientWidth={50}>
        <div className="flex gap-2">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center  gap-16 mx-4">
              <span className="text-sm md:text-base lg:text-lg font-bold xl:text-xl 2xl:text-2xl">Construction Work</span>
              <div className="w-10 h-10 bg-[#2c4b4b] rounded-full"></div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Section;