// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import Scene from "../assets/Images/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg"
import Scene1 from "../assets/Images/homepage1.jpg"
import Sec2Yoga2 from "../assets/Images/meditate-7831951_1920.jpg"
import Monk from "../assets/Images/monk-7465757_1920.jpg"
import Women from "../assets/Images/woman-8125244_1920 (1).jpg"
import Sec2Yoga1 from "../assets/Images/yoga-6723315_1920.jpg"
// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="relative text-white">
        {/* Become a Instructor Button */}
        <img src={Scene1} className="object-fit h-[1050px] " />
        <div
          className="
          absolute
          left-0
          top-0
          mt-10
          w-full
          text-cente "
        >
          <div className="mx-auto mt-[160px] flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
            {/* Heading */}
            <div className="mb-2 text-center text-4xl font-semibold">
              Transform Your Life with the Power of
              <HighlightText text={"Yoga"} />
            </div>

            {/* Sub Heading */}
            <div className="-mt-3 w-[90%] text-center text-2xl font-bold text-white">
              Immerse yourself in our online yoga courses, designed to let you
              practice at your own rhythm from any location. Enjoy extensive
              resources, including guided routines, meditation techniques and
              expert feedback from seasoned instructors.
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 flex flex-row gap-7">
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Book a Demo
              </CTAButton>
            </div>
            {/* Code Section 2 */}
          </div>
        </div>
      </div>

      {/* section 1 part 2 */}

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-[#344648]">
        <div className="flex h-[320px] items-center justify-center bg-gradient-to-b from-[#FDD6B4] to-[#FECBB2]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Explore Full Category Section */}
            <div className="flex flex-col items-center justify-center gap-8 text-center text-white">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Explore Our Full Catalog
              </h2>
              <div className="flex flex-row gap-7">
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Now
                    <FaArrowRight className="text-xl" />
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
        <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-[50%] text-center lg:text-left">
          <h2 className="text-4xl font-semibold mb-4">
            Gain the skills you need for a balanced and{" "}
            <HighlightText text={"harmonious life."} />
          </h2>
          <p className="text-lg leading-7">
            In today's world, mastering yoga is about more than just physical
            practice. To achieve true balance and well-being, you need a
            holistic approach that integrates mind, body, and spirit.
          </p>
        </div>
        <div className="lg:w-[50%] flex flex-col items-center lg:items-end gap-6 mr-10">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#ffbe98] p-3 text-white ">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
