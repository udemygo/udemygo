"use client";
import { useParams } from "next/navigation"; // Next.js equivalent
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { universityDetailData } from "@/components/Home/UniversityData.js";
import WikiUniversity from "@/components/Wikki/WikkiUniversity.js";

const University = () => {
  const params = useParams(); // Replace useParams
  const id = params.id; // Extract id from params
  const university = universityDetailData[id] || null;

  if (!university) {
    return (
      <div className="text-center text-xl font-bold pt-[10%]">
        University not found! 😕
      </div>
    );
  }

  return (
    <div className="min-h-fit md:py-[10%] pt-[30%] p-5 bg-amber-400 rounded-4xl">
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-purple-100 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* University Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                src={university.logo}
                alt="University Logo"
                className="h-12"
              />
              {university.emiPlan && (
                <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded">
                  EMI Plan
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mt-2">{university.name}</h1>
            <p className="text-gray-600 text-lg">{university.location}</p>
            <p className="mt-4 text-gray-700">{university.description}</p>

            {/* Stats Section */}
            <div className="flex items-center gap-3 mt-6">
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                {university.naac} NAAC
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                {university.rank} Rank
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                {university.founded} Founded
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                {university.year}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-12">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
              >
                <button className="px-7 py-4 bg-black text-white rounded-xl flex items-center gap-3 font-bold cursor-pointer z-10">
                  <span>
                    <FaWhatsapp />
                  </span>
                  Whatsapp
                </button>
              </a>
              <a
                href={`#wiki-${university.id}`}
                className="px-6 py-3 border-2 border-[#181e2e] rounded-xl font-bold cursor-pointer z-10 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image & Fee Details */}
          <div className="flex-1">
            <img
              src={university.image}
              alt="University"
              className="w-full rounded-lg shadow-md"
            />

            {/* Fee Details */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-white shadow-md rounded p-3">
                <h3 className="text-lg font-bold">{university.creditPoints}</h3>
                <p className="text-gray-500 text-sm">Credit Points</p>
              </div>
              <div className="bg-white shadow-md rounded p-3">
                <h3 className="text-lg font-bold">{university.semesters}</h3>
                <p className="text-gray-500 text-sm">Semesters</p>
              </div>
              <div className="bg-white shadow-md rounded p-3">
                <h3 className="text-lg font-bold">{university.duration}</h3>
                <p className="text-gray-500 text-sm">Duration</p>
              </div>
              <div className="bg-white shadow-md rounded p-3">
                <h3 className="text-lg font-bold">{university.course}</h3>
                <p className="text-gray-500 text-sm">Course</p>
              </div>
              <div className="bg-white shadow-md rounded p-3 col-span-2">
                <h3 className="text-lg font-bold">{university.semesterFees}</h3>
                <p className="text-gray-500 text-sm">Semester Fees</p>
              </div>
              <div className="bg-white shadow-md rounded p-3 col-span-2">
                <h3 className="text-lg font-bold">
                  {university.applicationFees}
                </h3>
                <p className="text-gray-500 text-sm">Application Fees</p>
              </div>
              <div className="bg-white shadow-md rounded p-3 col-span-2">
                <h3 className="text-lg font-bold">{university.totalFees}</h3>
                <p className="text-gray-500 text-sm">Total Fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WikiUniversity id={id} />
    </div>
  );
};

export default University;
