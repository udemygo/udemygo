"use client";

import React from "react";
import Image from "next/image";

const OnlineMbaComponent = () => {
  return (
    <div className="p-6">
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-slate-400/20 to-white/80 flex flex-col md:flex-row transition-all duration-300 max-h-6xl">
        {/* Left Image Section */}
        <div className="relative h-60 md:h-auto md:w-1/3 w-full">
          <Image
            src="/assets/mbabanner.jpg"
            alt="Online MBA Course"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="p-4 md:p-6 flex flex-col justify-center md:w-2/3 w-full overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Online MBA Course
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            UPDATED AT: May 10, 2025
          </p>
          <h1 className="text-base md:text-lg font-semibold mt-3 md:mt-4 text-blue-600">
            Online MBA Degree Courses
          </h1>
          <p className="mt-2 text-gray-700 text-xs md:text-sm leading-relaxed">
            A two-year online postgraduate program in Business Administration, online
            MBA degree courses offer a flexible way to gain essential skills,
            with costs ranging from INR 80,000 to INR 4,50,000 depending on the
            university. These programs focus on delivering a quick grasp of
            business basics, strategic thinking, leadership, and managerial

            expertise. Whether you&#39;re looking to speed up your career, switch
            industries, or launch a business, an online MBA equips you with the
            tools to succeed in today&#39;s competitive market.

          </p>

          {/* Uncomment if you want to include these buttons 
      <div className="mt-3 md:mt-5 flex flex-wrap gap-2 md:gap-3">
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-3 md:px-4 py-1 md:py-2 rounded-full flex items-center shadow-sm text-sm">
          <span className="mr-1 md:mr-2">▶</span> Watch Video
        </button>
        <button className="bg-green-500 hover:bg-green-600 transition text-white px-3 md:px-4 py-1 md:py-2 rounded-full flex items-center shadow-sm text-sm">
          <span className="mr-1 md:mr-2">🎙️</span> Listen Podcast
        </button>
      </div>
      */}
        </div>
      </div>
    </div>
  );
};

export default OnlineMbaComponent;
