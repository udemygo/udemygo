"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const WhyEduVerticals = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const points = [
    "Enhanced learning experiences tailored to individual growth paths",
    "Handpicked online MBA programs and career-focused certifications",
    "Collaborations with top-tier institutions and domain experts",
    "Learner-first design: flexible schedules, lifetime access, EMI options",
    "Real people, real support: Our guidance doesn’t end after enrollment",
  ];

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for image
  const imageVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for check items
  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-4xl py-10 px-6 md:px-12 max-w-8xl mx-auto mt-3 mb-3"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div className="md:w-1/2 w-full" variants={imageVariants}>
          <Image
            src="/assets/throwcaps.jpg"
            alt="Students celebrating graduation"
            width={612}
            height={612}
            className="rounded-3xl object-cover w-full h-full shadow-md"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div className="md:w-1/2 w-full" variants={containerVariants}>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-2"
            variants={textVariants}
          >
            Why UDEMYGO ?
          </motion.h2>
          <motion.p className="text-gray-700 mb-6" variants={textVariants}>
            We believe that if you can dream it, you can do it.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {points.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.div
                  className="bg-indigo-200 p-1.5 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                </motion.div>
                <p className="text-gray-800–.text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyEduVerticals;
