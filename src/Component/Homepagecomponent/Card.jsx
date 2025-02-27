import React from 'react'
import Job from '../../assets/job.svg'
const Card = () => {
    return (
        <div className='md:w-[250px] w-[100px]   rounded-2xl text-center p-2 border-1  border-gray-200'>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 mt-4">
                <img src={Job} className=' h-8 object-cover' />
            </div>
            <h3 className="md:text-lg  text-[20px] font-semibold text-gray-800">Easily Track Your Jobs</h3>
            <p className="text-sm text-gray-500 mt-2">
                Get reliable, affordable, and on-demand labor services at your fingertips.
            </p>
        </div>
    );
};
export default Card