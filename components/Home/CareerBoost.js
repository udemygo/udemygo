import Link from "next/link";
import React from "react";

const CareerBoost = () => {
  const cards = [
    {
      title: "PG Courses",
      subtitle: "After Graduation",
      detail: "80+ Courses • 50+ Universities • 1 - 2 Years",
      filter: "PG",
    },
    {
      title: "Executive Education",
      subtitle: "Working Professionals & CXOs",
      detail: "20+ Courses • 50+ Universities • 3 - 24 Months",
      filter: "Executive",
    },
    {
      title: "UG Courses",
      subtitle: "After 12th",
      detail: "80+ Courses • 60+ Universities • 3 Years",
      filter: "UG",
    },
    {
      title: "Advanced Diploma",
      subtitle: "",
      detail: "40+ Courses • 30+ Universities • 1 - 2 Years",
      filter: "Diploma",
    },
    {
      title: "Skilling & Certification",
      subtitle: "",
      detail: "30+ Courses • 10+ Universities • 3 - 36 Months",
      filter: "Skill",
    },
  ];

  return (
    <div className="bg-gradient-to-b my-2 from-white to-indigo-100 p-6 md:p-12 rounded-xl z-30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Boost Your Career
            </h2>
            <p className="text-gray-600 text-lg">
              There are over <span className="font-semibold">500</span> courses
              offered by the universities. Find exactly what you're looking for
              through our diverse catalog.
            </p>
          </div>
          <button className="mt-4 md:mt-0 border border-gray-300 px-6 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2">
            View All
            <span>↗</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={`/explore-universities/course-catalog?filter=${card.filter}`}
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <span className="text-xl">↗</span>
                </div>
                {card.subtitle && (
                  <p className="text-gray-600 mt-1">{card.subtitle}</p>
                )}
                <p className="text-sm text-gray-500 mt-4">{card.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBoost;
