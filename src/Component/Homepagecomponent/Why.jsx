import React, { useState } from "react";
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Step5 from '../../assets/step5.png';

const workerSteps = [
  { 
    id: 1, 
    title: "Instant Payment", 
    image: Step1,
    description: "Earnings are sent to your Worker Wallet instantly upon approval of your timesheet."
  },
  {
    id: 2,
    title: "Work with Confidence",
    image: Step2,
    description: "Confidently work Shift Gigs knowing you're protected by Occupational Accident Insurance."
  },
  {
    id: 3,
    title: "Own Your Schedule",
    image: Step3,
    description: "You're in the driver's seat. Enjoy the freedom and flexibility of applying for and accepting only the Shifts you want."
  },
  {
    id: 4,
    title: "Find All Types of Work",
    image: Step4,
    description: "GigSmart matches you with open Shift Gigs across any industry or position so that you can work when and how you want. No open Shifts near you? GigSmart connects you to Part-Time and Full-Time Positions too."
  },
  {
    id: 5,
    title: "Access Worker Benefits",
    image: Step5,
    description: "Get Gigs users can shop for additional benefits, like affordable health, dental, and vision plans by visiting our Worker Benefits Portal."
  },
  {
    id: 6,
    title: "No Interview or Resumes",
    image: Step5,   
    description: "Your work speaks for itself. No need to interview or upload resumes anymore. Just fill out your Worker Profile and start working today."
  }
];

const businessSteps = [
  { 
    id: 1, 
    title: "Open the App", 
    image: Step1,
    description: [
      "Connect with businesses seeking your skills in your local area immediately.",
      "Support local businesses and workers."
    ]
  },
  { 
    id: 2,
    title: "Fast & Hassle-Free Hiring",
    image: Step2,
    description: [
      "Post your job and get workers within 24-48 hours.",
      "Designed for busy managers—simple and efficient."
    ]
  },
  { 
    id: 3,
    title: "Scalable Workforce",
    image: Step3,
    description: [
      "Hire for a day, a weekend, or longer.",
      "Easily adjust your team size as needed."
    ]
  },
  { 
    id: 4,
    title: "Transparent & Fair Pricing",
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
    <div className="px-4 py-8 flex flex-col gap-4 md:gap-10 max-w-6xl mx-auto">
      <div className="text-center mb-5 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#212121] mb-4">
          {isBusinessView ? "Why Businesses Choose DailyGo ?" : "Why Workers Choose DailyGo ?"}
        </h2>
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
              {Array.isArray(step.description) ? (
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {step.description.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;