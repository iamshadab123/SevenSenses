import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/about1.png"
import BannerImage2 from "../assets/Images/about2.png"
import BannerImage3 from "../assets/Images/about3.png"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#FFD7A3] to-[#FFBE98] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-4 lg:w-3/4">
        Revolutionizing Online Yoga Education for a Bright Future
      </h1>
      <p className="text-lg lg:text-xl text-[#344648] leading-relaxed mb-8 lg:w-3/4 mx-auto">
        Seven Senses is pioneering online yoga instruction by integrating
        transformative courses with emerging wellness technologies, fostering a
        vibrant yoga community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
        <img
          src={BannerImage1}
          alt="Banner Image 1"
          className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
        <img
          src={BannerImage2}
          alt="Banner Image 2"
          className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
        <img
          src={BannerImage3}
          alt="Banner Image 3"
          className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  </div>
</section>


      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-[#344648]">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-[#344648]">
          
          <div className="flex flex-col items-center justify-between">
            <div className="my-24 flex flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              Vision Statement
              </h1>
              <p className="text-lg text font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <img src={BannerImage1} className="w-[80%]"/>
            <div className="my-24 flex flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-lg font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 bg-[#ffbe98] p-8 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
