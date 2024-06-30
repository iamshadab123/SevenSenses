import React from "react";
import KnowYourProgressImage from "../../../assets/Images/card1.jpg";
import CompareWithOthersImage from "../../../assets/Images/card2.jpg";
import PlanYourLessonsImage from "../../../assets/Images/card3.jpg";
import CTAButton from "../../../components/core/HomePage/Button";
import HighlightText from "./HighlightText";

const LearningLanguageSection = () => {
  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-[#FDD6B4] to-[#FECBB2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">
            Your all-in-one place for{" "}
            <p className="text-white text-5xl">Mastering yoga</p>
          </h2>
          <p className="mx-auto mb-8 text-base font-medium text-[#344648] lg:w-[75%]">
            Using Seven Senses, mastering yoga becomes effortless. With over
            20+ styles, guided sessions, progress tracking, personalized
            schedules, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 mt-20">
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <img
              src={KnowYourProgressImage}
              alt="Know Your Progress"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <img
              src={CompareWithOthersImage}
              alt="Compare With Others"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <img
              src={PlanYourLessonsImage}
              alt="Plan Your Lessons"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-12 lg:mt-20 translate-x-[530px]">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;


