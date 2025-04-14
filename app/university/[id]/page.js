"use client";
import { useParams } from "next/navigation";
import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { universityDetailData } from "@/components/Home/UniversityData.js";
import WikiUniversity from "@/components/Wikki/WikkiUniversity.js";
import { motion, useInView } from "framer-motion";

const University = () => {
  const params = useParams();
  const id = params.id;
  const university = universityDetailData[id] || null;

  // Refs for individual sections
  const infoRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const feesRef = useRef(null);
  const wikiRef = useRef(null);

  // Scroll triggers for each section
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });
  const isButtonsInView = useInView(buttonsRef, { once: false, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: false, amount: 0.3 });
  const isFeesInView = useInView(feesRef, { once: false, amount: 0.3 });
  const isWikiInView = useInView(wikiRef, { once: false, amount: 0.3 });

  if (!university) {
    return (
      <div className="text-center text-xl font-bold pt-[10%]">
        University not found! 😕
      </div>
    );
  }

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for info elements
  const infoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for fee cards
  const feeCardVariants = {
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

  // Animation variants for WikiUniversity
  const wikiVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-fit md:py-[10%] pt-[30%] p-5 bg-amber-400 rounded-4xl">
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-purple-100 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* University Info */}
          <motion.div
            ref={infoRef}
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center gap-2"
              variants={infoVariants}
            >
              <img
                src={university.logo}
                alt={`${university.name} Logo`}
                className="h-12"
              />
              {university.emiPlan && (
                <motion.span
                  className="bg-blue-500 text-white px-3 py-1 text-xs rounded"
                  variants={infoVariants}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  EMI Plan
                </motion.span>
              )}
            </motion.div>
            <motion.h1
              className="text-4xl font-bold mt-2"
              variants={infoVariants}
            >
              {university.name}
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg"
              variants={infoVariants}
            >
              {university.location}
            </motion.p>
            <motion.p
              className="mt-4 text-gray-700"
              variants={infoVariants}
            >
              {university.description}
            </motion.p>

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              className="flex items-center gap-3 mt-6"
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              <motion.span
                className="bg-gray-200 px-3 py-1 rounded text-sm"
                variants={infoVariants}
              >
                {university.naac} NAAC
              </motion.span>
              <motion.span
                className="bg-gray-200 px-3 py-1 rounded text-sm"
                variants={infoVariants}
              >
                {university.rank} Rank
              </motion.span>
              <motion.span
                className="bg-gray-200 px-3 py-1 rounded text-sm"
                variants={infoVariants}
              >
                {university.founded} Founded
              </motion.span>
              <motion.span
                className="bg-purple-600 text-white px-3 py-1 rounded text-sm"
                variants={infoVariants}
              >
                {university.year}
              </motion.span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              ref={buttonsRef}
              className="flex gap-3 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate={isButtonsInView ? "visible" : "hidden"}
            >
              <motion.a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-7 py-4 bg-black text-white rounded-xl flex items-center gap-3 font-bold cursor-pointer z-10">
                  <span>
                    <FaWhatsapp />
                  </span>
                  Whatsapp
                </button>
              </motion.a>
              <motion.a
                href={`#wiki-${university.id}`}
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-6 py-3 border-2 border-[#181e2e] rounded-xl font-bold cursor-pointer z-10 text-center">
                  Learn More
                </button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image & Fee Details */}
          <motion.div
            ref={imageRef}
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
          >
            <motion.img
              src={university.image}
              alt={`${university.name} Campus`}
              className="w-full rounded-lg shadow-md"
              variants={imageVariants}
            />

            {/* Fee Details */}
            <motion.div
              ref={feesRef}
              className="mt-4 grid grid-cols-2 gap-3 text-center"
              variants={containerVariants}
              initial="hidden"
              animate={isFeesInView ? "visible" : "hidden"}
            >
              {[
                { value: university.creditPoints, label: "Credit Points" },
                { value: university.semesters, label: "Semesters" },
                { value: university.duration, label: "Duration" },
                { value: university.course, label: "Course" },
                { value: university.semesterFees, label: "Semester Fees", colSpan: true },
                { value: university.applicationFees, label: "Application Fees", colSpan: true },
                { value: university.totalFees, label: "Total Fees", colSpan: true },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-white shadow-md rounded p-3 ${item.colSpan ? "col-span-2" : ""}`}
                  variants={feeCardVariants}
                >
                  <h3 className="text-lg font-bold">{item.value}</h3>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={wikiRef}
        variants={wikiVariants}
        initial="hidden"
        animate={isWikiInView ? "visible" : "hidden"}
      >
        <WikiUniversity id={id} />
      </motion.div>
    </div>
  );
};

export default University;