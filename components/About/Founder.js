"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import founderImage from "./../../public/assets/founder.webp";
import Image from "next/image";

const FounderSection = () => {
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
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for right box
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#ede9fe] to-[#e0e7ff] py-12 px-4 md:px-16 rounded-4xl"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Image + Visionary Info */}
        <motion.div
          className="flex flex-col md:flex-row bg-white/70 rounded-3xl shadow-lg overflow-hidden w-full md:w-2/3"
          variants={containerVariants}
        >
          <motion.div
            className="md:w-2/3 bg-black flex justify-center items-center"
            variants={imageVariants}
          >
            <Image
              src={founderImage}
              alt="Mr. Sachin Goswami, Founder of UdemyGo"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover grayscale"
              placeholder="blur"
              priority
            />
          </motion.div>
          <motion.div
            className="p-6 md:p-8 md:w-2/3 bg-gradient-to-r from-[#ede9fe] to-[#f3f4f6]"
            variants={containerVariants}
          >
            <motion.p
              className="text-sm font-semibold text-gray-500 mb-1"
              variants={textVariants}
            >
              Meet The Founder And Co-Founder
            </motion.p>
            <motion.h2
              className="text-2xl font-bold text-gray-900 mb-4"
              variants={textVariants}
            >
              Mr. Sachin Goswami And Mr. Rohit
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-4"
              variants={textVariants}
            >
              Sachin Goswami and Rohit are the founder and co-founder of UdemyGo,
  trailblazers in the education sector. Driven by a shared mission to
  democratize learning, they aim to make high-quality education
  accessible to all. With a vision rooted in innovation, impact, and
  inclusivity, they&apos;ve built UdemyGo into a next-generation platform
  that bridges the gap between academic excellence and real-world
  skills. Their leadership has empowered thousands of students and
  professionals through programs co-designed with top universities and
  industry experts. With a deep understanding of education technology
  and learner behavior, they focus on scalable, personalized, and
  career-driven learning experiences. As visionary strategists, they
  ensure every course, program, and partnership at UdemyGo meets the
  highest standards of pedagogy and learner outcomes. Their commitment
  to lifelong learning and skill transformation continues to shape the
  platform&apos;s evolution. UdemyGo, under their dual leadership, is more
  than just a platform — it&apos;s a global movement to reshape education
  through innovation and accessibility.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right: Empowering Box */}
        <motion.div
          className="w-full md:w-1/3 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-2xl p-6 md:p-8 shadow-xl"
          variants={boxVariants}
        >
          <motion.h3
            className="text-lg font-semibold mb-4"
            variants={textVariants}
          >
            Who We Are
          </motion.h3>
          <motion.p className="mb-4" variants={textVariants}>
            <strong>At Udemygo, </strong> is{" "}
            <span className="text-indigo-400">
              we aren’t just another edtech platform
            </span>{" "}
            we’re your career accelerator. We bridge the gap between ambition and
            achievement by offering university-grade education that’s flexible,
            credible, and built for the digital age. Our platform is crafted for
            dreamers, doers, and professionals who believe that learning should
            evolve with life — not interrupt it.
          </motion.p>
          <motion.p className="mb-4" variants={textVariants}>
            We specialize in tailored online MBA programs that empower
            professionals to excel and organizations to thrive.
          </motion.p>
          <motion.p className="mb-4" variants={textVariants}>
            Our Purpose To democratize access to world-class education and empower
            learners from every corner of India and beyond to take charge of their
            personal and professional growth.
          </motion.p>
          <motion.p className="mb-4" variants={textVariants}>
            With UdemyGo, your dream university is within reach. Expert Guidance.
            Global Reach. Real Results.
          </motion.p>
          <motion.p className="mb-4" variants={textVariants}>
            With strategic guidance and a proven track record, UdemyGo is your
            trusted partner in turning academic aspirations into global
            achievements.
          </motion.p>
          <motion.p
            className="font-semibold text-indigo-300"
            variants={textVariants}
          >
            <strong>Udemygo</strong> &quot;Fueling Ambitions, Transforming Lives&quot;.

          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FounderSection;