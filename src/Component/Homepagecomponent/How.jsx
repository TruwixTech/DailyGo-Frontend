import React, { useState } from "react";
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Step5 from '../../assets/step5.png';

const businessSteps = [
  { id: 1, card: "Step 1: Open the app", image: Step1, description: "Sign up and create your profile." },
  { id: 2, card: "Step 2: Create a business account", image: Step2, description: "Create an account and post your job requirements." },
  { id: 3, card: "Step 3: List your services", image: Step3, description: "Browse through verified profiles and select the best fit." },
  { id: 4, card: "Step 4: Manage bookings", image: Step4, description: "Track attendance and job progress in real time." },
  { id: 5, card: "Step 5: Grow your business", image: Step5, description: "Make hassle-free payments through our protected system." },
];

const workerSteps = [
  { id: 1, card: "Step 1: Open the app", image: Step1, description: "Sign up and create your profile." },
  { id: 2, card: "Step 2: Create a worker account", image: Step2, description: "Browse opportunities that match your skills." },
  { id: 3, card: "Step 3: Browse available jobs", image: Step3, description: "Apply and get hired for short-term work." },
  { id: 4, card: "Step 4: Accept and complete jobs", image: Step4, description: "Show up, perform your best, and complete the job." },
  { id: 5, card: "Step 5: Get paid", image: Step5, description: "Receive secure payments quickly and hassle-free." },
];

const How = () => {
  const [isBusinessView, setIsBusinessView] = useState(true);

  const steps = isBusinessView ? businessSteps : workerSteps;

  return (
    <div className="px-4 py-8 flex flex-col gap-10">
      <div className="w-full h-auto flex md:flex-row flex-col md:gap-0 gap-8 justify-between items-center mb-20">
        <h1 className="text-center text-3xl md:text-5xl lg:text-[64px] font-bold text-[#212121]">
          How DailyGo Work ?
        </h1>
        <div className="flex justify-center items-center border border-[#004439] ">
          <button
            onClick={() => setIsBusinessView(true)}
            className={`px-6 py-2 font-semibold transition duration-300 ${isBusinessView ? "bg-[#004439] text-white" : "bg-[#ffffff] text-[#004439]"}`}
          >
            Business Steps
          </button>
          <button
            onClick={() => setIsBusinessView(false)}
            className={`px-6 py-2 font-semibold transition duration-300 ${!isBusinessView ? "bg-[#004439] text-white" : "bg-[#ffffff] text-[#004439]"}`}
          >
            Worker Steps
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 text-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 w-[70%] md:hover:shadow-2xl duration-500 ease-in-out transition-all cursor-pointer md:w-full mx-auto h-[280px] lg:h-[320px] xl:h-[300px] flex flex-col items-center justify-center border rounded-3xl shadow-md bg-white relative"
          >
            <div className="w-32 h-32 lg:h-40 absolute -top-16 flex border bg-white items-center justify-center rounded-3xl text-lg font-semibold overflow-hidden">
              <div className="h-[115px] lg:h-[150px] rounded-xl mx-auto border overflow-hidden">
                <img src={step.image} alt="image" className="w-aut h-full object-contain object-center" />
              </div>
            </div>
            <h3 className="mt-12 font-semibold text-lg lg:mt-20">{step.card}</h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
