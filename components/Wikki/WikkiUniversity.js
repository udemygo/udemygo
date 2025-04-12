import React from "react";
import { wikkiUniversities } from "../Home/UniversityData";

const WikiUniversity = ({ id }) => {
  const university = wikkiUniversities.find((u) => u.id.toString() === id?.toString());

  if (!university) {
    return (
      <div className="text-center text-red-500 py-20">
        University not found.
      </div>
    );
  }

  return (
    <section id={`wiki-${university.id}`} className="py-12 bg-white/80 rounded-xl shadow-md mx-auto max-w-6xl my-8 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{university.name}</h1>
            <p className="text-sm text-indigo-600 italic">Wikki Section • A detailed memorandum</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-6 mb-6">{university.description}</p>

        {/* Image */}
        <div className="overflow-hidden rounded-lg mb-6 border">
          <img
            src={university.image}
            alt={university.name}
            className="w-full max-h-[400px] object-cover"
          />
        </div>

        {/* Details as Paragraph */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">University Details</h2>
          <p className="text-gray-700 text-sm leading-7">
            Located in <strong>{university.location}</strong>, established in <strong>{university.founded}</strong>,
            {` `}this university holds a rank of <strong>{university.rank}</strong> and has a NAAC accreditation of <strong>{university.naac}</strong>. 
            It offers <strong>{university.course}</strong> programs and awards <strong>{university.creditPoints}</strong> credit points over <strong>{university.semesters}</strong> semesters. 
            EMI plans are {university.emiPlan ? "available" : "not available"} for eligible students.
          </p>
        </div>

        {/* Logo */}
        <div className="mt-8 text-center">
          <img
            src={university.logo}
            alt={`${university.name} Logo`}
            className="h-20 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WikiUniversity;
