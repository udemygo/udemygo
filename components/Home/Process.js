"use client";
import { FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineFindReplace } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiLifeSupport } from "react-icons/gi";
import { PiUsersFourDuotone } from "react-icons/pi";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProcessItem = ({ icon: Icon, text }) => {
  return (
    <motion.div
      className="w-full flex flex-col items-center gap-3 text-center"
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
          },
        },
      }}
    >
      <motion.div
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8 text-white md:w-10 md:h-10" />
      </motion.div>
      <span className="text-white text-base md:text-lg font-medium">{text}</span>
    </motion.div>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  // Variants for process items container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for arrows
  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 0.7,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="max-w-full bg-[#181e2e] px-6 py-8 md:px-12 md:py-12 my-5 rounded-4xl text-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <motion.p
          className="text-2xl md:text-3xl font-bold mb-4 md:mb-0"
          variants={headerVariants}
        >
          Our Process is Pretty Simple.
        </motion.p>
        <motion.div variants={headerVariants}>
          <Link
            href="/about"
            className="flex items-center gap-2 text-lg md:text-2xl font-semibold hover:text-gray-300 transition"
          >
            About <FaLocationArrow />
          </Link>
        </motion.div>
      </div>

      {/* Process Steps - Responsive Grid */}
      <motion.div
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center"
        variants={containerVariants}
      >
        <div className="relative">
          <ProcessItem icon={TbHeartHandshake} text="01. Initial Consultation" />
          <motion.div
            className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70"
            variants={arrowVariants}
          >
            <FaArrowRight />
          </motion.div>
        </div>

        <div className="relative">
          <ProcessItem
            icon={MdOutlineFindReplace}
            text="02. Finding the best fit for your requirements"
          />
          <motion.div
            className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70"
            variants={arrowVariants}
          >
            <FaArrowRight />
          </motion.div>
        </div>

        <div className="relative">
          <ProcessItem
            icon={LiaUniversitySolid}
            text="03. Admission through University portal only"
          />
          <motion.div
            className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70"
            variants={arrowVariants}
          >
            <FaArrowRight />
          </motion.div>
        </div>

        <div className="relative">
          <ProcessItem icon={GiLifeSupport} text="04. Support after admission" />
          <motion.div
            className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70"
            variants={arrowVariants}
          >
            <FaArrowRight />
          </motion.div>
        </div>

        <div className="relative">
          <ProcessItem
            icon={PiUsersFourDuotone}
            text="05. Networking opportunities through community"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Process;