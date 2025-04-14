"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { universityCatalogCardData } from "@/components/Home/UniversityData";
import UniversityVSCourse from "@/components/StudyMaterial/UniversityVSCourse";
import { motion, useInView } from "framer-motion";

const UniversityCatalog = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });

  // Animation variants
  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const rankingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const rankingBoxVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const yearBadgeVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const detailsVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  // Card component for individual lazy rendering
  const UniversityCard = ({ uni }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        className="relative transition-all duration-200 ease-in"
      >
        <Link
          href={`/university/${uni.id}`}
          className="relative rounded-lg shadow-md p-6 bg-white hover:scale-105 transition-all duration-200 ease-in flex-shrink-0 block w-full max-w-[360px] min-h-[450px] mx-auto"
        >
          {/* University Logo & EMI Plan */}
          <div className="flex justify-between p-2">
            <motion.img
              src={uni.logo}
              alt="Logo"
              className="h-8"
              variants={logoVariants}
            />
            {uni.emiPlan && (
              <motion.span
                className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                variants={emiVariants}
              >
                EMI Plan
              </motion.span>
            )}
          </div>

          {/* University Image */}
          <motion.img
            src={uni.image}
            alt="University"
            className="w-full h-44 object-cover mt-4 rounded"
            variants={imageVariants}
          />

          {/* Ranking & Accreditation Section */}
          <motion.div
            className="relative bg-indigo-50 p-2 rounded-xl mt-4"
            variants={rankingContainerVariants}
          >
            {/* Year Badge */}
            <motion.span
              className="absolute -top-4 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-lg text-xs"
              variants={yearBadgeVariants}
            >
              {uni.year}
            </motion.span>

            {/* Ranking Boxes */}
            <div className="grid grid-cols-4 gap-1 ">
              <motion.div
                className="bg-white p-1 rounded-lg text-center"
                variants={rankingBoxVariants}
              >
                <p className="font-bold text-[16px]">{uni.rating}</p>
                <p className="text-[11px] text-gray-600">{uni.naac}</p>
              </motion.div>
              <motion.div
                className="bg-white p-1 rounded-lg text-center"
                variants={rankingBoxVariants}
              >
                <p className="font-bold text-[16px]">{uni.creditPoints}</p>
                <p className="text-[11px] text-gray-600">Credit P.</p>
              </motion.div>
              <motion.div
                className="bg-white p-1 rounded-lg text-center"
                variants={rankingBoxVariants}
              >
                <p className="font-bold text-[16px]">{uni.rank}</p>
                <p className="text-[11px] text-gray-600">Rank</p>
              </motion.div>
              <motion.div
                className="bg-white p-1 py-2 rounded-lg text-center"
                variants={rankingBoxVariants}
              >
                <p className="font-bold text-[16px]">{uni.managementRank}</p>
                <p className="text-[11px] text-gray-600">Management</p>
              </motion.div>
            </div>
          </motion.div>

          {/* University Details */}
          <motion.h2
            className="font-bold text-lg mt-4"
            custom={0}
            variants={detailsVariants}
          >
            {uni.name}
          </motion.h2>
          <motion.p
            className="text-gray-600"
            custom={1}
            variants={detailsVariants}
          >
            {uni.location}
          </motion.p>
          <motion.p
            className="text-sm mt-2"
            custom={2}
            variants={detailsVariants}
          >
            {uni.duration} • {uni.semesters} • From {uni.fee}
          </motion.p>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="bg-amber-50 rounded-4xl px-2 pb-2">
      <UniversityVSCourse />
      <div className="w-full py-6 pt-[5%] my-2 bg-[#bd1f2e] rounded-4xl">
        <motion.h2
          ref={headingRef}
          className="text-4xl font-bold mb-6 text-center text-white"
          variants={headingVariants}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
        >
          Choose Your University
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4">
          {universityCatalogCardData.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCatalog;