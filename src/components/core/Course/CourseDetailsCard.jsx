import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

import { addToCart } from "../../../slices/cartSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
    instructions,
  } = course;

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("Instructors cannot buy courses.");
      return;
    }
    if (token) {
      dispatch(addToCart(course));
      toast.success("Course added to cart!");
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add to cart.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-lg shadow-md overflow-hidden bg-white">
      {/* Course Image */}
      <div className="md:w-1/3 relative">
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="h-64 md:h-full w-full object-cover transition-transform transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <button
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={handleShare}
          >
            <FaShareSquare size={20} />
          </button>
        </div>
      </div>

      {/* Course Details */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        {/* Course Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {course?.courseName}
        </h2>
        
        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-4">
          By {course?.instructor?.firstName} {course?.instructor?.lastName}
        </p>

        {/* Price */}
        <div className="flex items-center justify-start space-x-3 text-3xl font-semibold text-gray-800 mb-4">
          Rs. {CurrentPrice}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{course?.description}</p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="bg-[#ffbe98] text-black py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none"
            onClick={
              user && course?.studentsEnroled.includes(user?._id)
                ? () => navigate("/dashboard/enrolled-courses")
                : handleBuyCourse
            }
          >
            {user && course?.studentsEnroled.includes(user?._id)
              ? "Go To Course"
              : "Buy Now"}
            {user && <BsFillCaretRightFill className="ml-2" />}
          </button>
          {(!user || !course?.studentsEnroled.includes(user?._id)) && (
            <button
              onClick={handleAddToCart}
              className="bg-yellow-25 text-black  py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none"
            >
              Add to Cart
              
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsCard;



