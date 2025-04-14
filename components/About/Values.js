"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiStar } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import gradientimg1 from "../../public/assets/gradientimg1.webp";
import Image from "next/image";

function Values() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  // Variants for heading
  const headingVariants = {
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

  // Variants for cards
  const cardVariants = {
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

  // Variants for icons
  const iconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for background images
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative bg-[#181E2E] p-6 md:p-10 rounded-2xl min-h-[300px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Gradient */}
      <motion.div className="absolute inset-0 z-0" variants={imageVariants}>
        <Image
          src={gradientimg1}
          alt="Gradient background bottom"
          className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 object-cover"
          priority
        />
        <Image
          src={gradientimg1}
          alt="Gradient background top"
          className="absolute top-0 w-full left-1/2 -translate-x-1/2 rotate-180 object-cover"
          priority
        />
      </motion.div>

      {/* Heading */}
      <motion.div className="text-center mb-8 z-10" variants={containerVariants}>
        <motion.p
          className="text-white text-left ml-4 md:ml-10 font-bold text-2xl md:text-4xl"
          variants={headingVariants}
        >
          Our Core Values
        </motion.p>
        <motion.p
          className="text-white text-sm md:text-lg"
          variants={headingVariants}
        >
          The Pillars of UdemyGo
        </motion.p>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 z-10"
        variants={containerVariants}
      >
        {[
          {
            icon: <CiStar />,
            title: "Innovation in Learning",
            desc: "Pioneering new methods and technologies in education.",
          },
          {
            icon: <FaGraduationCap />,
            title: "Customized Excellence",
            desc: "Tailoring solutions to meet unique needs.",
          },
          {
            icon: <CiStar />,
            title: "Global Perspective",
            desc: "Bringing worldwide insights to local challenges.",
          },
          {
            icon: <CiStar />,
            title: "Lifelong Growth",
            desc: "Fostering continuous growth at every career stage.",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-[#FFD700] text-3xl mb-3"
              variants={iconVariants}
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {value.icon}
            </motion.div>
            <h1 className="text-white font-semibold text-lg md:text-xl mb-2">
              {value.title}
            </h1>
            <p className="text-center text-xs md:text-sm text-[#A0A7B5]">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Values;