"use client";
import { useRouter, useSearchParams } from "next/navigation"; // Next.js equivalents
import { universitiesCoursesData } from "@/components/Global/UniversityCourseData.js";
import { useState, useEffect } from "react";
import UniversityVSCourse from "@/components/StudyMaterial/UniversityVSCourse";

const CourseCatalog = () => {
  const router = useRouter(); // Replace useNavigate
  const searchParams = useSearchParams(); // Replace useSearchParams

  const allCourses = universitiesCoursesData.flat();
  const [courseData, setCourseData] = useState(allCourses);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const queryFilter = searchParams.get("filter");
    if (queryFilter) {
      handleFilter(queryFilter);
    }
  }, [searchParams]);

  const handleFilter = (type) => {
    setSelectedFilter(type);
    if (type === "All") {
      setCourseData(allCourses);
    } else if (type === "PG" || type === "Executive MBA") {
      setCourseData(
        allCourses.filter((course) =>
          course.degree.toLowerCase().includes("master")
        )
      );
    } else if (type === "UG" || type === "Diploma") {
      setCourseData(
        allCourses.filter((course) => course.degree.toLowerCase() === "ug")
      );
    }
  };

  return (
    <div className="bg-amber-50 rounded-4xl pb-2">
      <UniversityVSCourse />
      <div className="flex flex-col lg:flex-row gap-6 mt-5 px-2">
        {/* Left Side Filter */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          {["All", "PG", "UG", "Executive MBA", "Diploma"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className={`px-4 py-3 rounded-lg text-left ${
                selectedFilter === type
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              <h2 className="font-bold text-lg">
                {type === "All" ? "All Courses" : `${type} Courses`}
              </h2>
              <p className="text-sm">
                {type === "UG"
                  ? "After 12th"
                  : type === "PG"
                  ? "After Graduation"
                  : "& Culture"}
              </p>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center w-full mr-3">
          {courseData.map((uni, index) => (
            <div
              key={`${uni.name}-${index}`}
              onClick={() => {
                if (uni.course.toLowerCase().includes("mba")) {
                  navigate(`/university/${uni.id}`);
                } else {
                  navigate("/contact");
                }
              }}
              className="cursor-pointer bg-indigo-50 p-4 m-5 rounded-xl shadow-md w-80 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-3">
                <img src={uni.logo} alt={`${uni.name} Logo`} className="h-7" />
                {uni.emiPlan && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    NO COST EMI
                  </span>
                )}
              </div>
              <h2 className="font-bold text-lg mt-2">{uni.course}</h2>
              <p className="text-blue-700">{uni.name}</p>
              <p className="text-gray-600 text-sm mt-1">
                {uni.degree} ({uni.duration})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
