"use client"
import React from "react";

const KeyHighlightsMBA = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Main content - highlights */}
      <div className="w-full md:w-3/4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Key Highlights of Online MBA in India
        </h3>

        <div className="space-y-6 lg:ml-2">
          {/* 01 */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-700">
                Online MBA courses are a boon for working professionals,
                blending career growth with flexible learning. Study anytime,
                anywhere with access to lectures and assignments globally,
                balancing work and personal life. Choose specializations like
                finance, marketing, entrepreneurship, data analytics, HR, or
                operations to match your goals.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-700">
                The course structure of an online MBA program includes diverse
                educational content that focuses on business strategy and
                leadership together with finance management and marketing
                alongside organizational behavior. Through capstone projects
                students undertake and by studying case studies and practical
                work assignments academic programs enable their students to
                graduate with usable knowledge.
              </p>
            </div>
          </div>
          {/* 03 */}
          {/* <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-700">
                The educational experience of online MBA programs becomes better through modern technology implementation of virtual classrooms together with collaborative platforms and interactive instructional tools. Students receive essential digital business skills after their experience with modern technological resources.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Sidebar - admission notice */}
      <div className="w-full md:w-1/4 mt-6 md:mt-0">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-center font-semibold text-lg mb-4">
            Admission Closing Soon
          </h3>
          <hr className="mb-4" />
          <p className="text-center mb-4">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className=" cursor-pointertext-blue-600 hover:underline"
            >
              Compare & Enroll NOW
            </button>
          </p>

          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700 text-sm">
                  To avoid paying 25% Late fees on or after course closure
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700 text-sm">
                  To secure a seat in your dream university
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700 text-sm">
                  To avail of some amazing benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlightsMBA;
