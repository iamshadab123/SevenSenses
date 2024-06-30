import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAvgRating from "../../../utils/avgRating";
import RatingStars from "../../Common/RatingStars";

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <Link to={`/courses/${course._id}`} className="block group">
      <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform bg-white">
        <div className="relative">
          <img
            src={course?.thumbnail}
            alt="course thumbnail"
            className={`${Height} w-full object-cover rounded-t-lg`}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {course?.courseName}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500 font-semibold">
              {avgReviewCount.toFixed(1) || 0}
            </span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-gray-600">
              ({course?.ratingAndReviews?.length} Ratings)
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            ₹ {course?.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Course_Card;


