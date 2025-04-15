"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CareerBoost = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  // Variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="bg-gradient-to-b my-2 from-white to-indigo-100 p-6 md:p-12 rounded-xl z-30"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div variants={headerVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Boost Your Career
            </h2>
            <p className="text-gray-600 text-lg">
              There are over <span className="font-semibold">500</span> courses
              offered by the universities. Find exactly what you&apos;re looking for
              through our diverse catalog.
            </p>
          </motion.div>
          <motion.button
            className="mt-4 md:mt-0 border border-gray-300 px-6 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View All
            <span>↗</span>
          </motion.button>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Link
                href={`/explore-universities/course-catalog?filter=${card.filter}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <motion.span
                      className="text-xl"
                      whileHover={{ rotate: 45 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                  {card.subtitle && (
                    <p className="text-gray-600 mt-1">{card.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-4">{card.detail}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Variants for container
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default CareerBoost;