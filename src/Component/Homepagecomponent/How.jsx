import React from "react";

const steps = [
  { id: 1, card: "Step 1: Open the app" },
  { id: 2, card: "Step 2: Create an account" },
  { id: 3, card: "Step 3: Explore services" },
  { id: 4, card: "Step 4: Book your service" },
  { id: 5, card: "Step 5: Enjoy the service" },
];

const How = () => {
  return (
    <div className="px-4 py-12">
      <h1 className="text-center text-3xl md:text-5xl lg:text-[64px] font-bold text-[#212121] mb-20">
        How DailyGo Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 text-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-6 w-full h-auto md:h-[240px] flex flex-col items-center justify-center border rounded-lg shadow-md bg-white relative"
          >
            <div className="w-20 h-20 absolute -top-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-semibold shadow-md">
              {step.id}
            </div>
            <h3 className="mt-10 font-semibold text-lg">{step.card}</h3>
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
