import React from "react";
import TimeLineImage from "../../../assets/Images/women_posture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faBalanceScale,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const TimeLine = [
  {
    Icon: faHeart,
    Heading: "Mindfulness",
    Description: "Cultivating awareness and presence in every practice.",
  },
  {
    Icon: faUser,
    Heading: "Community",
    Description: "Nurturing a supportive and inclusive yoga community.",
  },
  {
    Icon: faBalanceScale,
    Heading: "Balance",
    Description: "Seeking harmony between body, mind, and spirit.",
  },
  {
    Icon: faBrain,
    Heading: "Wellness",
    Description: "Promoting holistic health and well-being through yoga.",
  },
];

const TimelineSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDD6B4] to-[#FECBB2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full lg:w-1/2">
            <img
              src={TimeLineImage}
              alt="Timeline Image"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,190,152,0.8)] backdrop-blur-lg">
              <div className="text-center text-white py-8 px-4 lg:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our Yoga Journey
                </h2>
                <p className="text-lg sm:text-xl">
                  Explore our commitment to mindfulness, community, balance, and wellness through yoga.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Details */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {TimeLine.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#FFBE98] rounded-lg p-4 shadow-md hover:scale-105 transition duration-300"
              >
                <FontAwesomeIcon icon={item.Icon} className="h-12 w-12 text-[#344648]" />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">{item.Heading}</h3>
                  <p className="text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;

