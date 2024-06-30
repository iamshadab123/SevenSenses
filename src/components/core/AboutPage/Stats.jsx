import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDD6B4] to-[#FECBB2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Stats.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg py-6 px-4 text-center transform transition-transform hover:scale-105"
            >
              <h1 className="text-4xl font-bold text-[#F26C4F]">{data.count}</h1>
              <h2 className="text-lg font-semibold text-[#6B7280] mt-2">{data.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;

