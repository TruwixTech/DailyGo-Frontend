import React, { useState } from "react";
import { 
  FaMoneyBillAlt, 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaBriefcase, 
  FaMedkit, 
  FaUserCheck, 
  FaMobileAlt, 
  FaClock, 
  FaUsers, 
  FaDollarSign ,
  FaPhoneAlt,
  FaUser
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const workerSteps = [
  { 
    id: 1, 
    title: "Instant Payment", 
    icon: FaMoneyBillAlt,
    description: "Earnings are sent to your Worker Wallet instantly upon approval of your timesheet."
  },
  {
    id: 2,
    title: "Work with Confidence",
    icon: FaShieldAlt,
    description: "Confidently work Shift Gigs knowing you're protected by Occupational Accident Insurance."
  },
  {
    id: 3,
    title: "Own Your Schedule",
    icon: FaCalendarAlt,
    description: "You're in the driver's seat. Enjoy the freedom and flexibility of applying for and accepting only the Shifts you want."
  },
  {
    id: 4,
    title: "Find All Types of Work",
    icon: FaBriefcase,
    description: "GigSmart matches you with open Shift Gigs across any industry or position so that you can work when and how you want. No open Shifts near you? GigSmart connects you to Part-Time and Full-Time Positions too."
  },
  {
    id: 5,
    title: "Access Worker Benefits",
    icon: FaMedkit,
    description: "Get Gigs users can shop for additional benefits, like affordable health, dental, and vision plans by visiting our Worker Benefits Portal."
  },
  {
    id: 6,
    title: "No Interview or Resumes",
    icon: FaUserCheck,   
    description: "Your work speaks for itself. No need to interview or upload resumes anymore. Just fill out your Worker Profile and start working today."
  }
];

const businessSteps = [
  { 
    id: 1, 
    title: "DailyGo Support",
    icon: BiSupport,
    description: [
      "Our support team is here to assist you with any queries or issues. Contact us anytime for quick resolution!",
    ]
  },
  { 
    id: 2,
    title: "Fast & Hassle-Free Hiring",
    icon: FaClock,
    description: [
      "Post your job and get workers within 24-48 hours.",
      "Designed for busy managers—simple and efficient."
    ]
  },
  { 
    id: 3,
    title: "Scalable Workforce",
    icon: FaUsers,
    description: [
      "Hire for a day, a weekend, or longer.",
      "Easily adjust your team size as needed."
    ]
  },
  { 
    id: 4,
    title: "Transparent & Fair Pricing",
    icon: FaDollarSign,
    description: [
      "Clear, upfront costs with no hidden fees.",
      "Pay only for the work done—no extra charges."
    ]
  },
  { 
    id: 5,
    title: "Verified Contact Information",
    icon: FaPhoneAlt,
    description: [
      "Chat, text via SMS and email candidates through verified contact information.",
    ]
  },
  { 
    id: 6,
    title: "Simplicity",
    icon: FaUser,
    description: [
      "DailyGo comes with an automated candidate updating process, and rejection notifications to help recruiters offer a great candidate experience.",
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
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="group relative h-64 p-8 rounded-xl shadow-lg bg-white cursor-pointer transition-all hover:shadow-xl"
            >
              <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <Icon className="text-[#004439] mb-4" style={{ fontSize: '50px' }} />
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
          );
        })}
      </div>
    </div>
  );
};

export default Why;