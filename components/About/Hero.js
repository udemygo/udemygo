"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbCircleArrowUpRight } from "react-icons/tb";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  // Variants for text and button
  const textVariants = {
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

  // Variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for scroll line
  const scrollLineVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="pt-10 flex flex-col px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Grow With Us! Connect Today. */}
      <motion.div
        className="ml-2 pt-40 space-y-4 flex items-start gap-2"
        variants={textVariants}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center border border-black py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white group transition-all"
        >
          <motion.p
            className="font-medium text-sm lg:text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Grow With Us! Connect Today.
          </motion.p>
          <motion.span
            className="ml-4 text-3xl lg:text-5xl"
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TbCircleArrowUpRight />
          </motion.span>
        </Link>
      </motion.div>

      {/* About Company Section */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Section */}
        <motion.div
          className="mt-4 ml-3 w-full lg:w-2/3"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug"
            variants={textVariants}
          >
            The Leading Global{" "}
            <span className="text-amber-600 inline">Marketplace</span> For
            Learning And Instruction
          </motion.h2>

          <motion.p className="mt-8 text-base md:text-lg" variants={textVariants}>
            At UdemyGo, we turn your educational dreams into reality by connecting
            you with top-tier online degree programs from leading universities
            around the world. Our mission is to make learning flexible,
            accessible, and career-focused—designed to fit your lifestyle and fuel
            your ambitions. Whether you're looking to upskill, switch careers, or
            earn a degree while working, we’ve got you covered. With globally
            recognized programs, expert mentorship, and a supportive learning
            community, UdemyGo empowers you to learn on your terms and succeed in
            today’s fast-moving world.
          </motion.p>
          <motion.p className="mt-2 text-base md:text-lg" variants={textVariants}>
            Our mission is to provide a seamless, flexible, and enriching learning
            experience tailored to meet the demands of today's dynamic
            professional landscape.
          </motion.p>
        </motion.div>

        {/* Right Section - Image Gallery */}
        <motion.div
          className="z-20 md:h-[600px] md:w-[50%] w-[100%] h-[400px] flex md:p-5 p-2 gap-3"
          variants={containerVariants}
        >
          <motion.div
            className="overflow-hidden rounded-2xl h-full md:h-[85%]"
            variants={imageVariants}
          >
            <img
              src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F1.webp&w=1920&q=75"
              alt="Hero image 1"
              className="h-full object-cover rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </motion.div>
          <motion.div
            className="w-[50%] min-h-full flex flex-col gap-3"
            variants={containerVariants}
          >
            <motion.div
              className="w-[100%] overflow-hidden rounded-2xl"
              variants={imageVariants}
            >
              <img
                src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F2.webp&w=1920&q=75"
                alt="Hero image 2"
                className="h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
              />
            </motion.div>
            <motion.div
              className="w-[100%] overflow-hidden rounded-2xl"
              variants={imageVariants}
            >
              <img
                src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F3.webp&w=1920&q=75"
                alt="Hero image 3"
                className="h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Life @ Company Section */}
      <motion.div className="relative max-w-screen-2xl mx-auto mt-24">
        {/* Left Scroll Line and Dot (only for large screens) */}
        <motion.div
          className="hidden lg:flex flex-col items-center absolute left-12 w-px h-[50%] bottom-[15%]"
          variants={scrollLineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="w-px grow bg-[#C8C9EB] mb-2"></div>
          <div className="border border-[#C8C9EB] rounded-full w-4 h-12 flex flex-col items-center py-1 overflow-hidden relative">
            <motion.div
              className="w-2 h-4 rounded-full bg-[#333347] absolute"
              animate={{
                y: [0, 32, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            ></motion.div>
          </div>
          <div className="w-px basis-[25%] bg-[#C8C9EB] mt-2"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;