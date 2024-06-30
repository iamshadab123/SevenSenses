import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto} className="inline-block">
      <div
        className={`inline-block rounded-md px-6 py-3 text-sm sm:text-base font-bold ${
          active
            ? "bg-white text-[#344648] shadow-md border border-[#FFBE98]"
            : "bg-[#FECBB2] text-[#333333] shadow-lg"
        } transition-all duration-200 transform hover:scale-105 hover:shadow-none hover:bg-[#FFD7A3]`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;


