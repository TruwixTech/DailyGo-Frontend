import React from "react";
import Step1 from '../../assets/step1.png'
import Step2 from '../../assets/step2.png'
import Step3 from '../../assets/step3.png'
import Step4 from '../../assets/step4.png'
import Step5 from '../../assets/step5.png'

const steps = [
  { id: 1, card: "Step 1: Open the app" , image: Step1},
  { id: 2, card: "Step 2: Create an account", image: Step2},
  { id: 3, card: "Step 3: Explore services", image: Step3},
  { id: 4, card: "Step 4: Book your service", image: Step4},
  { id: 5, card: "Step 5: Enjoy the service", image: Step5},
];

const How = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-10">
      <h1 className="text-center text-3xl md:text-5xl lg:text-[64px] font-bold text-[#212121] mb-20">
        How DailyGo Work ?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 text-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 w-[70%] md:hover:shadow-2xl duration-500 ease-in-out transition-all cursor-pointer md:w-full mx-auto h-[250px] lg:h-[260px] flex flex-col items-center justify-center border rounded-3xl shadow-md bg-white relative"
          >
            <div className="w-32 h-32 lg:w-40 lg:h-40 absolute -top-16 flex items-center justify-center bg-[#ECEDFF] rounded-full text-lg font-semibold shadow-md overflow-hidden">
              <img src={step.image} alt="image" className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="mt-12 font-semibold text-lg lg:mt-20">{step.card}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get reliable, affordable, and on-demand store services at your fingertips.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
