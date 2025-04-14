"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function UniversityVSCourse({ children }) {
  const pathname = usePathname();
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

  // Variants for tabs
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for heading
  const headingVariants = {
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

  // Variants for children content
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="h-auto bg-amber-50 md:pt-[20%] pt-[50%] lg:px-1 flex flex-col justify-center items-center rounded-4xl">
        {/* Navigation Tabs */}
        <motion.div
          className="bg-white max-w-fit p-1 flex gap-4 rounded-4xl"
          variants={containerVariants}
        >
          <motion.div variants={tabVariants}>
            <Link
              href="/explore-universities/university-catalog"
              className={`rounded-4xl px-3 py-1.5 ${
                pathname === "/explore-universities/university-catalog"
                  ? "bg-radial-[at_70%_25%] from-slate-500 to-slate-900 to-75% text-white text-sm font-bold"
                  : "text-black font-medium"
              } transition-all hover:scale-105`}
            >
              University
            </Link>
          </motion.div>
          <motion.div variants={tabVariants}>
            <Link
              href="/explore-universities/course-catalog"
              className={`rounded-4xl px-3 py-1.5 ${
                pathname === "/explore-universities/course-catalog"
                ? "bg-radial-[at_70%_25%] from-slate-500 to-slate-900 to-75% text-white text-sm font-bold"

                  : "text-black font-medium"
              } transition-all hover:scale-105`}
            >
              Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="my-5 text-4xl font-black text-gray-800 flex flex-col justify-center items-center"
          variants={containerVariants}
        >
          <motion.p variants={headingVariants}>
            Your Next{" "}
            <motion.span
              className="px-3 py-2 bg-white rounded-4xl"
              variants={headingVariants}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Academic
            </motion.span>
          </motion.p>
          <motion.p variants={headingVariants}>Journey Awaits.</motion.p>
        </motion.div>

        {/* Children Content */}
        <motion.div variants={contentVariants}>{children}</motion.div>
      </div>
    </motion.div>
  );
}
