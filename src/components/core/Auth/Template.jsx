import React from "react";
import { useSelector } from "react-redux";

import frameImg from "../../../assets/Images/pattern-template.jpg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gradient-to-r from-[#ffbe98] via-[#ffdfa4] to-[#ffd0c4]">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-5xl flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-x-12 md:gap-y-0">
          <div className="mx-auto w-11/12 max-w-md md:mx-0">
            <h1 className="text-4xl font-bold leading-tight text-[#344648]">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#344648]">
              <span className="block text-white">{description1}</span>
              <span className="block mt-2 font-edu-sa font-bold italic text-[#344648]">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto mt-8 w-11/12 max-w-md md:mx-0">
            <div className="relative">
              <img
                src={frameImg}
                alt="Pattern"
                className="w-full rounded-lg shadow-2xl"
                loading="lazy"
              />
              <img
                src={image}
                alt="Students"
                className="absolute top-1/2 left-1/2 w-[80%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
