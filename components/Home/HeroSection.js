"use client";
import { IoRocketSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ScrollLogo from "../Global/ScrollLogo";
import Link from "next/link";
import RotatingText from "../RotatingText";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const synonyms = [
  "Boost",
  "Enhance",
  "Advance",
  "Upgrade",
  "Empower",
  "Elevate",
];

import { Anta } from "next/font/google";
import Image from "next/image";
import StaticContactForm from "../StaticContactForm";

// Anta font configure
const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(synonyms[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Scroll-based animation for background gradient shift (optional subtle effect)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = synonyms.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % synonyms.length;
        return synonyms[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Stagger animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Image reveal animation
  const imageVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center max-h-fit md:max-h-[700px] pt-40 px-6 mb-20 bg-amber-200 md:bg-gradient-to-b from-gray-50 to-[#dddef8] rounded-4xl"
      style={{ backgroundPositionY: backgroundY }}
    >
      {/* Text Section */}
      <motion.div
        className="overflow-x-hidden w-[100%] md:w-[50%]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className={`${anta.className} flex items-center space-x-2 text-3xl md:text-5xl font-bold anta-900 py-3`}
          variants={childVariants}
        >
          <div className="text-center flex items-center transition-all  ease-in">
            <RotatingText
              texts={synonyms}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 500 }}
              rotationInterval={3000}
            />{" "}
            <span className="ml-3"> Your Future</span>
          </div>
        </motion.h1>

        <motion.h2
          className="text-3xl text-gray-800/85 font-thin mt-2"
          variants={childVariants}
        >
          with UdemyGo
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mt-4"
          variants={childVariants}
        >
          We are committed to providing top-notch education through a diverse
          range of UG and PG programs designed to equip learners with in-demand
          skills.
        </motion.p>

        <motion.div className="flex gap-3 mt-12" variants={containerVariants}>
          <motion.a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
            variants={childVariants}
          >
            <button className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 font-bold cursor-pointer z-10">
              <span>
                <FaWhatsapp />
              </span>
              Whatsapp
            </button>
          </motion.a>
          <motion.div variants={childVariants}>
            <Link
              href="/about"
              className="px-6 py-3 border-2 border-[#181e2e] rounded-xl font-bold cursor-pointer z-10 text-center inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
        <ScrollLogo />
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="z-20 md:h-[600px] md:w-[50%] w-[100%] h-[340px] flex md:p-5 p-2 gap-3 "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="overflow-hidden rounded-2xl h-full"
          variants={imageVariants}
        >
          {/* ContactForm On Hero Section */}
          <div className=" w-full rounded-xl h-fit shadow-xl max-w-2xl  ">
            <StaticContactForm />
          </div>
        </motion.div>
        <div className="w-[50%] min-h-full grid grid-cols-1 pb-0.5 md:pb-6 gap-3">
          <motion.div
            className="w-[100%] overflow-hidden rounded-2xl"
            variants={imageVariants}
          >
            <Image
              src="/assets/002.webp"
              width={500}
              height={500}
              alt="02"
              className="h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </motion.div>
          <motion.div
            className="w-[100%] overflow-hidden rounded-2xl"
            variants={imageVariants}
          >
            <Image
              src="/assets/003.webp"
              width={500}
              height={500}
              alt="03"
              className="h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
