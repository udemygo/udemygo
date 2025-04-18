"use client";

import React, { useState } from "react";
import ScrollLogo from "../Global/ScrollLogo";

const CompareCourseComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: "",
    state: "",
    city: "",
    specialization: "",
    subsidyOption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Check console for details.");
    console.log(formData);
  };

  return (
    <div className="p-7 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden  transition duration-300">
        {/* Left Partition - Info Section */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex flex-col justify-between">
          <div>
            <div className="w-full h-fit overflow-hidden">
              <ScrollLogo />
            </div>
            <div className="flex justify-between items-start mb-6 ">
              <div className="text-left pt-4">
                <h2 className="text-2xl font-bold text-gray-800   ">
                Compare & Apply from 21+ online MBA Universities No Cost EMI | ( Early bird Discount )
                </h2>
                {/* <p className="text-green-600 font-semibold">
                  No-Cost EMI From ₹4,999 | Subsidy Cashback Available* upto
                  ₹20,000
                </p> */}
              </div>
            </div>

            <p className="text-blue-600 text-lg font-medium mb-6">
              India’s leading Online Universities on a Single Platform within
              two minutes.
            </p>

            <ul className="text-gray-700 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> 21+ Universities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Comparison Factors
                Factors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Free Expert Consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Post Admission Support
              </li>
              {/* <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Celebrating 1 Lac
                Admissions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Post Admission
                Support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> CV Exclusive
                Community
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Job + Internship
                Portal
              </li> */}
            </ul>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">
              Your personal information is secure with us
            </p>
            {/* <div className="flex justify-between items-center mt-4 text-sm">
              <span className="text-gray-600">
                Connect with Top CV Experts{" "}
                <span className="text-yellow-500">★ ★ ★ ★ ★</span>
              </span>
            </div> */}
          </div>
        </div>

        {/* Right Partition - Form Section */}
        <div className="md:w-1/2 p-8 bg-white">
        <h2 className="text-3xl tracking-wide text-center font-bold stroke-3 pb-8 text-transparent bg-clip-text bg-gradient-to-l from-violet-800 via-violet-500 to-blue-500">Choose Your Best One</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="flex items-center">
                <span className="p-3 bg-gray-100 border border-r-0 rounded-l-lg">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number*"
                  className="w-full p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="Date of Birth*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">State*</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="others">Others</option>
              </select>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">City*</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="others">Others</option>
              </select>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Specialization*</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="others">Others</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 text-lg font-semibold"
            >
              Find Best University in 2 Mins
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            I authorise UdemyGO & its representatives to contact me with updates
            and notifications via Email/SMS/WhatsApp/Call. This will override on
            DND/NDNC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompareCourseComponent;
