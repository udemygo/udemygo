import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaHeart,
  FaDollarSign,
  FaRegStar,
} from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="flex justify-center items-center min-h-fit bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-4xl mt-auto">
      <div className="bg-opacity-50 rounded-2xl p-10 w-full max-w-3xl bg-[#12122b] text-white shadow-lg">
        <div className="grid grid-cols-2 gap-6 text-center relative">
          {/* Personal Mentorship */}
          <div className="flex flex-col items-center">
            <FaHandshake className="text-4xl text-blue-400 mb-2 border border-blue-400 p-3 rounded-xl" />
            <h3 className="font-bold text-lg">Personal Mentorship</h3>
            <p className="text-sm text-gray-300">
            Free Online career Consultation Session
            </p>
          </div>

          {/* Human Support */}
          <div className="flex flex-col items-center">
            <FaHeart className="text-4xl text-pink-400 mb-2 border border-pink-400 p-3 rounded-xl" />
            <h3 className="font-bold text-lg">Real-Time Support</h3>
            <p className="text-sm text-gray-300">
              Real people guide students through assignments and exams.
            </p>
          </div>

          {/* Center Icon */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaRegStar className="text-4xl text-yellow-400 border border-yellow-400 p-3 rounded-xl" />
          </div>

          {/* True Value */}
          <div className="flex flex-col items-center">
            <FaDollarSign className="text-4xl text-green-400 mb-2 border border-green-400 p-3 rounded-xl" />
            <h3 className="font-bold text-lg">Integrity</h3>
            <p className="text-sm text-gray-300">
            We uphold honesty, transparency, and strong moral principles in everything we do.
            </p>
          </div>

          {/* A Strong Community */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-purple-400 mb-2 border border-purple-400 p-3 rounded-xl" />
            <h3 className="font-bold text-lg">A Strong Community</h3>
            <p className="text-sm text-gray-300">
              We thrive together, not in isolation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
