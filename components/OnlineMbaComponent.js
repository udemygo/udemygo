"use client";

import React from "react";
import Image from "next/image";

const OnlineMbaComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-slate-400/20 to-white/80  flex flex-col md:flex-row transition-all duration-300">
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
      <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
        <h2 className="text-2xl font-bold text-gray-800">Online MBA Course</h2>
        <p className="text-sm text-gray-500 mt-1">UPDATED AT: April 15, 2025</p>
        <h3 className="text-lg font-semibold mt-4 text-blue-600">
          Online MBA Degree Courses
        </h3>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          A two-year post-graduate program in Business Administration available online, ranging from INR 30,000 to INR 8 lakhs depending on the university. It emphasizes business fundamentals, strategic thinking, leadership, and managerial skills. Ideal for accelerating your career, switching industries, or launching your own venture.
        </p>

        {/* <div className="mt-5 flex flex-wrap gap-3">
          <button className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-full flex items-center shadow-sm">
            <span className="mr-2">▶</span> Watch Video
          </button>
          <button className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-full flex items-center shadow-sm">
            <span className="mr-2">🎙️</span> Listen Podcast
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default OnlineMbaComponent;
