import React from "react";
import Marquee from "react-fast-marquee";

const constructionWords = [
  "Construction Work",
  "Masonry",
  "Carpentry",
  "Plumbing",
  "Electrical Work",
  "Roofing",
  "Welding",
  "Scaffolding",
  "Painting",
  "Demolition",
  "Excavation",
  "Site Management"
];

const Section = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <Marquee speed={50} gradient={true} gradientWidth={50}>
        <div className="flex gap-2">
          {constructionWords.map((word, index) => (
            <div key={index} className="flex items-center gap-16 mx-4">
              <span className="text-sm md:text-base lg:text-lg font-bold xl:text-xl 2xl:text-2xl">
                {word}
              </span>
              <div className="w-10 h-10 bg-[#2c4b4b] rounded-full"></div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Section;
