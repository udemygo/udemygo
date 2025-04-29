import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { GiPartyPopper } from "react-icons/gi";

export default function StaticContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    degree: "",
  });

  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const degrees = [
    "Select Degree",
    "Bachelor's",
    "Master's",
    "Ph.D.",
    "Associate's",
    "High School",
  ];

  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center  ">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Close button */}
        {/* <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
        >
          <FaTimes size={20} />
        </button> */}

        {/* Modal Content */}
        <div className="p-5 md:p-6 md:pt-8 md:pb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-indigo-600 mb-1 md:mb-2">
            Contact Us
          </h2>
          <div className="text-center mb-2 md:mb-6">
            <span
              className="text-xs md:text-lg
             lg:text-2xl font-semibold"
            >
              <span className="text-red-500">Avail </span>
              <span className="text-yellow-500">Early-Bird </span>
              <span className="text-red-500">Discount!</span>
            </span>
            <div className=" hidden md:flex justify-center mt-1">
              <GiPartyPopper className="text-indigo-500" size={24} />
            </div>
          </div>

          <form action="https://formsubmit.co/info@udemygo.com" method="POST">
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://udemygo.com/thank-you"
            />

            <div className="space-y-2.5 md:space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaUser size={18} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10 w-full py-1 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:md:text-xl"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                <FaPhone size={18} />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="pl-10 w-full py-1 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:md:text-xl"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaEnvelope size={18} />
                </div>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="pl-10 w-full py-1 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:md:text-xl"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaGraduationCap size={18} />
                </div>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="pl-10 w-full py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:md:text-xl text-sm md:text-lg"
                  required
                >
                  {degrees.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-2 py-2 md:py-3 md:px-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center text-sm md:text-[19px] font-mono tracking-wider"
              >
                <FaPaperPlane className="mr-2" size={16} />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
