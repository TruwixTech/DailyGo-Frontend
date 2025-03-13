import React, { useState } from "react";
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Step5 from '../../assets/step5.png';

const workerSteps = [
  { 
    id: 1, 
    card: "Step 1: Instant Payment", 
    image: Step1,
    description: "Earnings are sent to your Worker Wallet instantly upon approval of your timesheet."
  },
  {
    id: 2,
    card: "Step 2: Work with Confidence",
    image: Step2,
    description: "Confidently work Shift Gigs knowing you’re protected by Occupational Accident Insurance."
  },
  {
    id: 3,
    card: "Step 3: Own Your Schedule",
    image: Step3,
    description: "You're in the driver’s seat. Enjoy the freedom and flexibility of applying for and accepting only the Shifts you want."
  },
  {
    id: 4,
    card: "Step 4: Find All Types of Work",
    image: Step4,
    description: "GigSmart matches you with open Shift Gigs across any industry or position so that you can work when and how you want. No open Shifts near you? GigSmart connects you to Part-Time and Full-Time Positions too."
  },
  {
    id: 5,
    card: "Step 5: Access Worker Benefits",
    image: Step5,
    description: "Get Gigs users can shop for additional benefits, like affordable health, dental, and vision plans by visiting our Worker Benefits Portal."
  },
  {
    id: 6,
    card: "Step 6: No Interview or Resumes",
    image: Step5,   
    description: "Your work speaks for itself. No need to interview or upload resumes anymore. Just fill out your Worker Profile and start working today."
  }
];

const businessSteps = [
  { 
    id: 1, 
    card: "Step 1: Open the App", 
    image: Step1,
    description: [
      "Connect with businesses seeking your skills in your local area immediately.",
      "Support local businesses and workers."
    ]
  },
  { 
    id: 2,
    card: "Step 2: Fast & Hassle-Free Hiring",
    image: Step2,
    description: [
      "Post your job and get workers within 24-48 hours.",
      "Designed for busy managers—simple and efficient."
    ]
  },
  { 
    id: 3,
    card: "Step 3: Scalable Workforce",
    image: Step3,
    description: [
      "Hire for a day, a weekend, or longer.",
      "Easily adjust your team size as needed."
    ]
  },
  { 
    id: 4,
    card: "Step 4: Transparent & Fair Pricing",
    image: Step4,
    description: [
      "Clear, upfront costs with no hidden fees.",
      "Pay only for the work done—no extra charges."
    ]
  }
];

const Why = () => {
  const [isBusinessView, setIsBusinessView] = useState(true);

  const steps = isBusinessView ? businessSteps : workerSteps;

  return (
    <div className="px-4 py-8 flex flex-col gap-10">
      <div className="w-full h-auto flex md:flex-row flex-col md:gap-0 gap-8 justify-between items-center mb-20">
        <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212121]">
          {isBusinessView ? "Why Business Choose DailyGo" : "Why Worker Choose DailyGo"}
        </h1>
        <div className="flex justify-center items-center border border-[#004439]">
          <button
            onClick={() => setIsBusinessView(true)}
            className={`px-6 py-2 font-semibold transition duration-300 ${
              isBusinessView
                ? "bg-[#004439] text-white"
                : "bg-[#ffffff] text-[#004439]"
            }`}
          >
            Business 
          </button>
          <button
            onClick={() => setIsBusinessView(false)}
            className={`px-6 py-2 font-semibold transition duration-300 ${
              !isBusinessView
                ? "bg-[#004439] text-white"
                : "bg-[#ffffff] text-[#004439]"
            }`}
          >
            Worker 
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 text-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 w-[70%] md:hover:shadow-2xl duration-500 ease-in-out transition-all cursor-pointer md:w-full mx-auto h-[280px] lg:h-[320px] xl:h-[300px] flex flex-col items-center justify-center border rounded-3xl shadow-md bg-white relative"
          >
            {/* Image Container */}
            <div className="w-32 h-32 lg:w-40 lg:h-40 absolute -top-16 flex items-center justify-center bg-[#ECEDFF] rounded-lg text-lg font-semibold shadow-md overflow-hidden">
              <img
                src={step.image}
                alt={step.card}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="mt-12 font-semibold text-lg lg:mt-20">{step.card}</h3>
            <div className="text-sm text-gray-600 mt-2">
              {Array.isArray(step.description) ? (
                <ul className="list-disc pl-4 text-left">
                  {step.description.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;