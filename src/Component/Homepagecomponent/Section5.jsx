import React from 'react'
import phone1 from '../../assets/iphone1.png'
import phone2 from '../../assets/iphone1.png'
import Bgimage3 from '../../assets/Container.png'
import icon  from '../../assets/Group.svg'
import icon1  from '../../assets/Group1.svg'
function Dailygo() {
  return (
    <div className='h-full w-full bg-[#fffcfa] flex flex-col md:flex-row justify-center items-center overflow-hidden md:px-20 px-4 py-10 pb-20'>
      <div className='w-full md:w-1/2 flex justify-center  items-center  '>
        <div className='w-[200px] mt-20 md:mt-0 md:w-[400px] h-full relative z-30 left-10 bottom-10 '>
          <img src={Bgimage3} alt='dailygo' />
          <img src={phone1} alt='dailygo' className='  absolute z-50 left-2 md:left-13 -bottom-13 shadow-2xl' />
          <img src={phone2} alt='dailygo' className='  top-20 absolute  z-4   -left-20 shadow-2xl' />
        </div>
      </div>


      <div className='w-full md:w-1/2 flex flex-col mt-44 md:mt-0 gap-10'>
        <div className='w-full flex flex-col gap-7 justify-center items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-[60px] leading-10 md:leading-16 font-bold text-black'>Daily Go: <br />
            Your Local Labour Solution</h1>
          <div className='flex flex-col gap-6 '>
            <p className='text-[18px]  text-gray-400   '>Welcome to Daily Go, the app designed to connect you with skilled local labourers for all your needs. Whether you’re looking for a brick picker for your home construction or a reliable majdoor for everyday tasks.</p>
            <p className='text-[18px]  text-gray-400 '>Daily Go makes hiring easy and efficient. With just a few taps, find trusted labourers in your area who are ready to help you get the job done. Empowering communities, one job at a time—experience hassle-free hiring with Daily Go!</p>
          </div>
        </div>


        <div className="flex space-x-4 justify-start items-start">
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
              <p className="text-xs uppercase">Download on the</p>
              <p className="text-lg font-semibold">App Store</p>
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
              <p className="text-xs uppercase">Get it on</p>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </a>
        </div>


      </div>
    </div>
  )
}

export default Dailygo