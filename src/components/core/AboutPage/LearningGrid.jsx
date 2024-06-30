import React from "react"

import CTAButton from "../../../components/core/HomePage/Button"
import HighlightText from "../../../components/core/HomePage/HighlightText"

const LearningGridArray = [
  {
    order: -1,
    heading: "Yoga For",
    highliteText: "Anyone, Anywhere",
    description:
      "SevenSenses partners with top yoga instructors and wellness experts to provide flexible, affordable and high-quality online yoga courses globally. Whether you are a beginner or an advanced practitioner",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Wellness Needs",
    description:
      "Our curriculum is designed to save you time and money, focusing on clarity and alignment with holistic wellness practices.",
  },
  {
    "order": 2,
    "heading": "Innovative Learning Methods",
    "description": "Explore innovative learning methods tailored in collaboration with wellness experts and seasoned yoga instructors."
  },
  {
    "order": 3,
    "heading": "Certification",
    "description": "Earn certifications recognized by leading wellness organizations and yoga studios, enhancing your professional credentials."
  },
  {
    "order": 4,
    "heading": "Auto-Grading Ratings",
    "description": "Benefit from automated grading systems designed to provide accurate and efficient feedback on your yoga practice progress."
  },
  {
    "order": 5,
    "heading": "Prepared for Success",
    "description": "Prepare yourself for success in your yoga career with comprehensive resources and practical skills tailored to meet industry demands."
  },  
]

const LearningGrid = () => {
  return (
    <div className="mx-auto mb-12 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
      {LearningGridArray.map((card, i) => (
        <div
          key={i}
          className={`transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105`}
        >
          <div className="p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold text-[#333333] md:text-2xl xl:text-3xl">
              {card.heading} <HighlightText>{card.highliteText}</HighlightText>
            </h2>
            <p className="text-base leading-relaxed text-[#666666] xl:text-lg">
              {card.description}
            </p>
          </div>
          {card.BtnText && (
            <div className="px-6 py-1 -translate-y-4 text-center">
              <CTAButton linkto={card.BtnLink}>{card.BtnText}</CTAButton>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default LearningGrid
