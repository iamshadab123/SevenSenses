import React from 'react';
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import InstructorImage from "../../../assets/Images/yoga_inst-1178187_1920.jpg";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDD6B4] to-[#FECBB2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-[50%]">
          <img
            src={InstructorImage}
            alt="Instructor"
            className="shadow-white shadow-[-20px_-20px_0_0] rounded-lg "
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">
            Inspire Others as a
            <br />
            <span className="bg-white text-transparent bg-clip-text font-bold text-5xl">Yoga Instructor</span>
          </h1>

          <p className="text-lg leading-7">
            Join our global community of yoga instructors on Seven Senses. Share your passion for yoga with students worldwide and empower them to achieve physical, mental, and spiritual well-being.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
