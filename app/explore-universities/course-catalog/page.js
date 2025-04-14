"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { universitiesCoursesData } from "@/components/Global/UniversityCourseData.js";
import { useState, useEffect, useRef } from "react";
import UniversityVSCourse from "@/components/StudyMaterial/UniversityVSCourse";
import { motion, useInView } from "framer-motion";

const CourseCatalog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const allCourses = universitiesCoursesData.flat();
  const [courseData, setCourseData] = useState(allCourses);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Ref for filter animation
  const filterRef = useRef(null);
  const isFilterInView = useInView(filterRef, { once: true, margin: "-100px" });

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

  // Animation variants
  const filterVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const emiVariants = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Course card component for individual lazy rendering
  const CourseCard = ({ uni, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        whileHover="hover"
        onClick={() => {
          if (uni.course.toLowerCase().includes("mba")) {
            router.push(`/university/${uni.id}`);
          } else {
            router.push("/contact");
          }
        }}
        className="cursor-pointer bg-indigo-50 p-4 m-5 rounded-xl shadow-md w-80 hover:shadow-lg transition"
      >
        <div className="flex items-center space-x-3">
          <motion.img
            src={uni.logo}
            alt={`${uni.name} Logo`}
            className="h-7"
            variants={logoVariants}
          />
          {uni.emiPlan && (
            <motion.span
              className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
              variants={emiVariants}
            >
              NO COST EMI
            </motion.span>
          )}
        </div>
        <h2 className="font-bold text-lg mt-2">{uni.course}</h2>
        <p className="text-blue-700">{uni.name}</p>
        <p className="text-gray-600 text-sm mt-1">
          {uni.degree} ({uni.duration})
        </p>
      </motion.div>
    );
  };

  return (
    <div className="bg-amber-50 rounded-4xl pb-2">
      <UniversityVSCourse />
      <div className="flex flex-col lg:flex-row gap-6 mt-5 px-2">
        {/* Left Side Filter */}
        <div ref={filterRef} className="w-full lg:w-1/4 flex flex-col gap-4">
          {["All", "PG", "UG", "Executive MBA", "Diploma"].map((type, index) => (
            <motion.button
              key={type}
              custom={index}
              variants={filterVariants}
              initial="hidden"
              animate={isFilterInView ? "visible" : "hidden"}
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
            </motion.button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center w-full mr-3">
          {courseData.map((uni, index) => (
            <CourseCard key={`${uni.name}-${index}`} uni={uni} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;