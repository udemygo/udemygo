import React from "react";
import { CiStar } from "react-icons/ci";
import gradientimg1 from "../../public/assets/gradientimg1.webp";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

function Values() {
  return (
    <div className="relative bg-[#181E2E] p-6 md:p-10 rounded-2xl min-h-[300px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <Image
          src={gradientimg1}
          alt=""
          className="absolute bottom-0 w-full -translate-x-1/2"
        />
        <Image
          src={gradientimg1}
          alt=""
          className="absolute rotate-180 top-full w-full -translate-x-1/2"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-white text-left ml-4 md:ml-10 font-bold text-2xl md:text-4xl">
          Our Core Values
        </p>
        <p className="text-white text-sm md:text-lg">The Pillars of UdemyGo</p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Value 1 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-3xl mb-3">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-lg md:text-xl mb-2">
            Innovation in Learning
          </h1>
          <p className="text-center text-xs md:text-sm text-[#A0A7B5]">
            Pioneering new methods and technologies in education.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-3xl mb-3">
            <FaGraduationCap />
          </div>
          <h1 className="text-white font-semibold text-lg md:text-xl mb-2">
            Customized Excellence
          </h1>
          <p className="text-center text-xs md:text-sm text-[#A0A7B5]">
            Tailoring solutions to meet unique needs.
          </p>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-3xl mb-3">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-lg md:text-xl mb-2">
            Global Perspective
          </h1>
          <p className="text-center text-xs md:text-sm text-[#A0A7B5]">
            Bringing worldwide insights to local challenges.
          </p>
        </div>

        {/* Value 4 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-3xl mb-3">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-lg md:text-xl mb-2">
            Lifelong Growth
          </h1>
          <p className="text-center text-xs md:text-sm text-[#A0A7B5]">
            Fostering continuous growth at every career stage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
