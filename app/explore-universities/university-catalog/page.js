import React from "react";
import Link from "next/link";
import { universityCatalogCardData } from "@/components/Home/UniversityData";
import UniversityVSCourse from "@/components/StudyMaterial/UniversityVSCourse";

// const universityCatalogCardData = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/K._J._Somaiya_College_of_Engineering_logo.png",
//   emiPlan: index % 2 === 0,
//   scholarship: index % 3 === 0,
//   image: "https://www.somaiya.edu/assets/kjsce/kjsce.jpg",
//   rating: "A++",
//   naac: "NAAC",
//   creditPoints: 100 + index,
//   rank: `${50 + index}th`,
//   managementRank: `${30 + index}th`,
//   year: 2024,
//   name: `University ${index + 1}`,
//   location: `City ${index + 1}, Country`,
//   duration: "2 Years",
//   semesters: "4 Semesters",
//   fee: `₹${(index + 1) * 10000}`,
// }));

const UniversityCatalog = () => {
  return (
    <div className="bg-amber-50 rounded-4xl px-2 pb-2">
    <UniversityVSCourse />
      <div className="w-[100%] py-6  pt-[5%] my-2 bg-[#bd1f2e] rounded-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Choose Your University
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mx-4 ">
          {universityCatalogCardData.map((uni) => (
            <Link
              href={`/university/${uni.id}`}
              key={uni.id}
              className="relative rounded-lg shadow-lg p-6 w-96 bg-white flex-shrink-0  block"
            >
              {/* University Logo & EMI Plan */}
              <div className="flex justify-between p-2">
                <img src={uni.logo} alt="Logo" className="h-8" />
                {uni.emiPlan && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    EMI Plan
                  </span>
                )}
              </div>

              {/* University Image */}
              <img
                src={uni.image}
                alt="University"
                className="w-full h-44 object-cover mt-4 rounded"
              />

              {/* Ranking & Accreditation Section */}
              <div className="relative bg-indigo-50 p-2 rounded-xl mt-4">
                {/* Year Badge */}
                <span className="absolute -top-4 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-lg text-xs">
                  {uni.year}
                </span>

                {/* Ranking Boxes */}
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-white p-1 rounded-lg text-center">
                    <p className="font-bold text-lg">{uni.rating}</p>
                    <p className="text-xs text-gray-600">{uni.naac}</p>
                  </div>
                  <div className="bg-white p-1 rounded-lg text-center">
                    <p className="font-bold text-lg">{uni.creditPoints}</p>
                    <p className="text-xs text-gray-600">Credit P.</p>
                  </div>
                  <div className="bg-white p-1 rounded-lg text-center">
                    <p className="font-bold text-lg">{uni.rank}</p>
                    <p className="text-xs text-gray-600">Rank</p>
                  </div>
                  <div className="bg-white p-1 py-2 rounded-lg text-center">
                    <p className="font-bold text-lg">{uni.managementRank}</p>
                    <p className="text-xs text-gray-600">Management</p>
                  </div>
                </div>
              </div>

              {/* University Details */}
              <h2 className="font-bold text-lg mt-4">{uni.name}</h2>
              <p className="text-gray-600">{uni.location}</p>
              <p className="text-sm mt-2">
                {uni.duration} • {uni.semesters} • From {uni.fee}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCatalog;
