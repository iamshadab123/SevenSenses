import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo-circle.png";
import { FooterLink2 } from "../../data/footer-links";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Yoga Styles",
  "Meditation Techniques",
  "Asanas Chart",
  "Pranayama",
  "Yoga Philosophy",
];
const Programs = ["Yoga Teacher Training", "Online Courses", "Workshops"];
const Community = ["Forums", "Events", "Local Chapters"];

const Footer = () => {
  return (
    <div className="bg-[#fbe0c3]">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent items-center justify-between gap-8 py-14 leading-6 text-[#344648] lg:flex-row">
        <div className="flex w-[100%] flex-col border-b border-richblack-700 pb-5 lg:flex-row">
          {/* Section 1 */}
          <div className="flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:border-r lg:border-richblack-700 lg:pr-5">
            <div className="mb-7 flex w-[30%] flex-col gap-3 lg:w-[30%] lg:pl-0">
              <h1 className="text-white0 text-[16px] font-semibold">About Us</h1>
              <div className="flex flex-col gap-2">
                {["About", "Our Team", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    className="hover:text-white0 cursor-pointer text-[14px] transition-all duration-200"
                  >
                    <Link to={ele.toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className="text-white0 text-[16px] font-semibold">
                Explore
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="hover:text-white0 cursor-pointer text-[14px] transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>

              <h1 className="text-white0 mt-7 text-[16px] font-semibold">
                Support
              </h1>
              <div className="hover:text-white0 mt-2 cursor-pointer text-[14px] transition-all duration-200">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
              <h1 className="text-white0 text-[16px] font-semibold">Programs</h1>

              <div className="mt-2 flex flex-col gap-2">
                {Programs.map((ele, index) => (
                  <div
                    key={index}
                    className="hover:text-white0 cursor-pointer text-[14px] transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
              <h1 className="text-white0 mt-7 text-[16px] font-semibold">
                Community
              </h1>

              <div className="mt-2 flex flex-col gap-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="hover:text-white0 cursor-pointer text-[14px] transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-row flex-wrap justify-between gap-3 pl-3 lg:w-[50%] lg:pl-5">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="mb-7 w-[48%] lg:w-[30%] lg:pl-0">
                <h1 className="text-white0 text-[16px] font-semibold">
                  {ele.title}
                </h1>
                <div className="mt-2 flex flex-col gap-2">
                  {ele.links.map((link, index) => (
                    <div
                      key={index}
                      className="hover:text-white0 cursor-pointer text-[14px] transition-all duration-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-11/12 max-w-maxContent flex-row items-center justify-between pb-14 text-sm text-[#344648]">
        {/* Section 1 */}
        <div className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:items-start">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={` ${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "hover:text-white0 cursor-pointer border-r border-richblack-700 transition-all duration-200"
                } px-3 `}
              >
                <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                  {ele}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <div className="mr-5 text-center">
              ©2024 Seven Senses. All Rights Reserved.{" "}
            </div>
            <img src={Logo} alt="" className="w-[50px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
