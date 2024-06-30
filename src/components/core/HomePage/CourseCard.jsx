import React from "react";
// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-lg shadow-[#ffbe98]"
          : "bg-[#344648] hover:bg-[#405d63] transition-all duration-300"
      }  box-border h-[300px] cursor-pointer rounded-lg text-white transition-all duration-300`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="flex h-[80%] flex-col gap-3 border-b-[2px] border-dashed border-[#ffbe98] p-6">
        <div
          className={`${
            currentCard === cardData?.heading ? "text-[#344648]" : "text-[#ffbe98]"
          } text-[20px] font-semibold`}
        >
          {cardData?.heading}
        </div>

        <div className="text-[#ffbe98]">
          {cardData?.description}
        </div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-[#344648]" : "text-[#ffbe98]"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
