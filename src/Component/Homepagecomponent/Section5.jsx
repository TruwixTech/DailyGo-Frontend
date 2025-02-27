import React from 'react'
import phone1 from '../../assets/iPhone1.png'

import Bgimage3 from '../../assets/Container.png'
import icon  from '../../assets/Group.svg'
import icon1  from '../../assets/Group1.svg'
function Dailygo() {
  return (
    <div className='h-full w-full bg-[#fffcfa] flex flex-col lg:flex-row justify-center items-center overflow-hidden md:px-20 px-4 md:pt-30 '>
      <div className=' w-full md:w-1/2 flex justify-center  items-center md:py-10 lg:py-16 py-10 '>
        <div className=' w-[100px] sm:w-[250px] md:w-[290px]   h-full relative z-30 md:left-10 bottom-10 py-10  flex justify-center items-center'>
          <img src={Bgimage3} alt='dailygo' className='w-full' />

          <img src={phone1} alt='dailygo' className='  absolute z-50 md:left-13 sm:w-48 w-full top-14 sm:top-10 md:-bottom-10 py-2 shadow-2xl md:top-16 ' />
          <img src={phone1} alt='dailygo' className='  top-20  absolute  z-4 w-52 -left-6 sm:left-0 lg:-left-12 -bottom-20 shadow-2xl' />
        </div>
      </div>


      <div className=' w-full md:w-1/2 flex flex-col gap-10 mt-5'>
        <div className='w-full flex flex-col gap-7 justify-center items-center'>
          <h1 className=' text-[30px] md:text-[60px] md:leading-16 font-bold text-black'>Daily Go: <br />
            Your Local Labour Solution</h1>
          <div className='flex flex-col gap-6 '>
            <p className='text-[10px]  text-gray-500   '>Welcome to Daily Go, the app designed to connect you with skilled local labourers for all your needs. Whether you’re looking for a brick picker for your home construction or a reliable majdoor for everyday tasks.</p>
            <p className='text-[10px]  text-gray-500 '>Daily Go makes hiring easy and efficient. With just a few taps, find trusted labourers in your area who are ready to help you get the job done. Empowering communities, one job at a time—experience hassle-free hiring with Daily Go!</p>
          </div>
        </div>


        <div className="w-full grid grid-cols-2 gap-4">
          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg space-x-2 shadow-lg hover:bg-gray-900 transition"
          >
            <div >
              <img src={icon} className='w-8'/>
            </div>
            <div>
              <p className="text-[10px] uppercase">Download on the</p>
              <p className="text-[12px] font-semibold">App Store</p>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-4 py-2 rounded-lg space-x-2 shadow-lg hover:bg-gray-900 transition"
          >
            <div >
              <img src={icon1} className='w-8'/>
            </div>
           
            <div>
              <p className="text-[12px] uppercase">Get it on</p>
              <p className="text-[12px] font-semibold">Google Play</p>
            </div>
          </a>
        </div>


      </div>
    </div>
  )
}

export default Dailygo