import React from "react";
import Middle from "../../assets/middle.png";
import Card from './Card';

const Section4 = () => {
  return (
    <div className="w-full md:h-screen h-[1000px] relative mb-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg  md:w-[300px] md:h-[600px] h-[300px]">
        <img src={Middle} alt="Middle Section" className="w-full h-full object-cover " />
      </div>
      <div className='absolute top-12 left-50'>
            <Card/>
     </div>
     <div className='absolute top-12 right-50'>
            <Card/>
     </div>
     <div className='absolute top-72 left-10'>
            <Card/>
     </div>
     <div className='absolute top-72 right-10'>
            <Card/>
     </div>
     <div className='absolute bottom-5 right-50'>
            <Card/>
     </div>
     <div className='absolute bottom-5 left-50'>
            <Card/>
     </div>

     </div>
  );
};

export default Section4;
