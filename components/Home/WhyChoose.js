"use client";
import React, { useRef } from "react";
import {
  FaHandshake,
  FaUsers,
  FaHeart,
  FaDollarSign,
  FaRegStar,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const WhyChoose = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  // Variants for grid items
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
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

  // Variants for center icon
  const centerIconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeOut",
        rotate: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "loop" },
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="flex justify-center items-center min-h-fit bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-4xl mt-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="bg-opacity-50 rounded-2xl p-10 w-full max-w-3xl bg-[#12122b] text-white shadow-lg"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-2 gap-6 text-center relative"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Personal Mentorship */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-blue-400 mb-2 border border-blue-400 p-3 rounded-xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHandshake />
            </motion.div>
            <h3 className="font-bold text-lg">Personal Mentorship</h3>
            <p className="text-sm text-gray-300">
              Free Online career Consultation Session
            </p>
          </motion.div>

          {/* Human Support */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-pink-400 mb-2 border border-pink-400 p-3 rounded-xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHeart />
            </motion.div>
            <h3 className="font-bold text-lg">Real-Time Support</h3>
            <p className="text-sm text-gray-300">
              Real people guide students through assignments and exams.
            </p>
          </motion.div>

          {/* Center Icon */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            variants={centerIconVariants}
          >
            <FaRegStar className="text-4xl text-yellow-400 border border-yellow-400 p-3 rounded-xl" />
          </motion.div>

          {/* True Value */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-green-400 mb-2 border border-green-400 p-3 rounded-xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDollarSign />
            </motion.div>
            <h3 className="font-bold text-lg">Integrity</h3>
            <p className="text-sm text-gray-300">
              We uphold honesty, transparency, and strong moral principles in everything we do.
            </p>
          </motion.div>

          {/* A Strong Community */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl text-purple-400 mb-2 border border-purple-400 p-3 rounded-xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUsers />
            </motion.div>
            <h3 className="font-bold text-lg">A Strong Community</h3>
            <p className="text-sm text-gray-300">
              We thrive together, not in isolation.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhyChoose;