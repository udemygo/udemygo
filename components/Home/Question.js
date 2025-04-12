"use client";
import { useState } from "react";
// import gradient_blur_pink_blue_abstract from '../../public/assets/gradient-blur-pink-blue-abstract.webp';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const Question = () => {
  const [clicked, setClicked] = useState(null); // Store index instead of boolean

  const handleClick = (index) => {
    setClicked((prev) => (prev === index ? null : index)); // Toggle logic
  };

  const questions = [
    {
      q: "What are the benefits of online degree programs?",
      a: "Online degree programs offer flexibility, affordability, and accessibility, allowing you to study from anywhere while balancing work and personal commitments.",
    },
    {
      q: "Are online degrees recognized by employers?",
      a: "Yes! Many online programs are accredited and widely recognized by employers, especially when offered by reputable universities.",
    },
    {
      q: "How do I apply for an online degree?",
      a: "It’s easier than you think — apply through Udemygo. Explore top-rated MBA and degree programs from globally recognized universities.And you’re not alone — our expert advisors will guide you through every step, from choosing the right course to enrollment.Flexible. Affordable. Future-ready.Start your journey today at Udemygo — where success begins.",
    },
    {
      q: "Can I pursue an online degree while working full-time?",
      a: "Absolutely! Online courses are designed for working professionals, offering self-paced learning and flexible schedules.",
    },
    {
      q: "What technology do I need for online learning?",
      a: "You’ll need a computer/laptop, a stable internet connection, and basic software like a web browser and video conferencing tools.",
    },
    {
      q: "How do I interact with professors and classmates?",
      a: "Most programs provide discussion forums, live lectures, email support, and virtual meetings to engage with instructors and peers.",
    },
  ];

  return (
    <div className="relative w-full min-h-[600px] flex flex-col lg:flex-row items-center gap-4 bg-[#1d3e987b] rounded-4xl text-white p-6 my-5 lg:p-12">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-4xl overflow-hidden -z-10">
        <img
          src={"/assets/gradient-blur-pink-blue-abstract.webp"}
          alt="Gradient Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mentor Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-lg p-6 shadow-xl backdrop-blur-lg bg-white/10 rounded-xl">
          <div className="bg-[#273353] p-6 rounded-lg flex gap-4 items-center">
            <div className="w-1/2">
              <img
                src="https://eduverticals.com/assets/images/free-consultation/1.png"
                alt="Mentor"
                className="w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold">
                Meet Our Mentors
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                We have a team of over 12 experienced mentors with over 26+
                years of collective experience available to guide you at a
                moment's notice.
              </p>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
              >
                <button className="w-full py-2 bg-green-600 hover:bg-green-700 transition rounded-lg shadow-md cursor-pointer">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-yellow-500">Got </span>
            <span className="text-[#bd1e2d]">Questions?</span>
          </h2>
        </div>

        <div className="mt-6 w-full max-w-lg bg-white/10 p-4 rounded-xl shadow-md">
          {questions.map((item, index) => (
            <div key={index} className="my-3">
              <button
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white py-2 px-3 rounded-md bg-[#273353] hover:bg-[#1b2745] transition"
                onClick={() => handleClick(index)}
              >
                {item.q}
                {clicked === index ? <FiMinus /> : <FaPlus />}
              </button>
              {clicked === index && (
                <p className="text-md text-gray-300 font-medium p-3 bg-[#1b2745] rounded-md mt-2">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
