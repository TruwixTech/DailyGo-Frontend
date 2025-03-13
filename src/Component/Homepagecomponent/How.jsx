import React, { useState } from "react";
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Step5 from '../../assets/step5.png';

const businessSteps = [
  { 
    id: 1, 
    title: "Open the app", 
    image: Step1,
    description: "Download and open the DailyGo app to get started with managing your business."
  },
  { 
    id: 2, 
    title: "Create a business account", 
    image: Step2,
    description: "Set up your business profile to start listing your services."
  },
  { 
    id: 3, 
    title: "List your services", 
    image: Step3,
    description: "Add the services you offer to attract customers and grow your business."
  },
  { 
    id: 4, 
    title: "Manage bookings", 
    image: Step4,
    description: "Easily manage and track your bookings through the app."
  },
  { 
    id: 5, 
    title: "Grow your business", 
    image: Step5,
    description: "Use DailyGo's tools to expand your customer base and increase revenue."
  },
];

const workerSteps = [
  { 
    id: 1, 
    title: "Open the app", 
    image: Step1,
    description: "Download and open the DailyGo app to start finding jobs."
  },
  { 
    id: 2, 
    title: "Create a worker account", 
    image: Step2,
    description: "Set up your worker profile to start applying for jobs."
  },
  { 
    id: 3, 
    title: "Browse available jobs", 
    image: Step3,
    description: "Explore a variety of job opportunities that match your skills."
  },
  { 
    id: 4, 
    title: "Accept and complete jobs", 
    image: Step4,
    description: "Accept jobs, complete them, and get paid for your work."
  },
  { 
    id: 5, 
    title: "Get paid", 
    image: Step5,
    description: "Receive payments directly through the app for completed jobs."
  },
];

const How = () => {
  const [isBusinessView, setIsBusinessView] = useState(true);
  const steps = isBusinessView ? businessSteps : workerSteps;

  return (
    <div className="px-4 py-8 flex flex-col gap-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#212121] mb-4">
          How DailyGo Works
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setIsBusinessView(true)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              isBusinessView
                ? "bg-[#004439] text-white"
                : "bg-gray-100 text-[#004439] hover:bg-gray-200"
            }`}
          >
            For Businesses
          </button>
          <button
            onClick={() => setIsBusinessView(false)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              !isBusinessView
                ? "bg-[#004439] text-white"
                : "bg-gray-100 text-[#004439] hover:bg-gray-200"
            }`}
          >
            For Workers
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative h-64 p-8 rounded-xl shadow-lg bg-white cursor-pointer transition-all hover:shadow-xl"
          >
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
              <img
                src={step.image}
                alt={step.title}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center text-[#212121]">
                {step.title}
              </h3>
            </div>
            
            <div className="absolute inset-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;