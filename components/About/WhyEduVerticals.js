import React from "react";
import { CheckCircle } from "lucide-react";

const WhyEduVerticals = () => {
  const points = [
    "Enhanced learning experiences tailored to individual growth paths",
		"Handpicked online MBA programs and career-focused certifications",
		"Collaborations with top-tier institutions and domain experts",
		"Learner-first design: flexible schedules, lifetime access, EMI options",
		"Real people, real support: Our guidance doesn’t end after enrollment",
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-4xl py-10 px-6 md:px-12 max-w-8xl mx-auto mt-3 mb-3">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI="
            alt="Graduation celebration"
            className="rounded-3xl object-cover w-full h-full shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Why UDEMYGO ?</h2>
          <p className="text-gray-700 mb-6">
            We believe that if you can dream it, you can do it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-indigo-200 p-1.5 rounded-full">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEduVerticals;
