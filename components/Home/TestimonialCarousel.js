"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gradientimg1 from "../../public/assets/gradientimg1.webp";
import Image from "next/image";

const testimonials = [
  {
    name: "Amit Sharma",
    title: "BBA Student",
    text: "The interactive lessons and case studies helped me understand real-world business strategies like never before!",
  },
  {
    name: "Neha Verma",
    title: "MBA Graduate",
    text: "This program provided me with the leadership skills and confidence to step into the corporate world with a strong foundation.",
  },
  {
    name: "Priya Mehta",
    title: "MCA Student",
    text: "I loved the data science modules, and the career support was outstanding! I landed my dream job thanks to this platform.",
  },
  {
    name: "Karan Singh",
    title: "B.Com Student",
    text: "The finance and accounting courses here are top-notch, making concepts easy to grasp and apply in the real world.",
  },
  {
    name: "Sophia Lewis",
    title: "MBA Digital Marketing",
    text: "The faculty and research opportunities exceeded my expectations! This program has set me up for a successful Digital Marketing career.",
  },
  {
    name: "Rahul Nair",
    title: "BCA Student",
    text: "I learned coding from scratch, and the structured approach made it so easy to grasp even complex topics.",
  },
  {
    name: "Emily Carter",
    title: "MBA in Marketing",
    text: "The digital marketing strategies and case studies were invaluable in shaping my understanding of the industry.",
  },
  {
    name: "Aditya Roy",
    title: "MBA Finance",
    text: "The focused curriculum and real-world exposure have given me an edge in the job market!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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

  // Variants for testimonial card
  const cardVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Variants for card content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
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

  // Variants for arrows
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <div ref={sectionRef} className="relative">
      <motion.div
        className="lg:hidden w-full text-4xl md:text-6xl text-center uppercase font-bold"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p>Testimonials</p>
      </motion.div>
      <div className="relative flex items-center justify-center h-[400px] bg-[#181e2e] rounded-4xl overflow-hidden">
        {/* Background Images */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
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

        {/* Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 bg-black/30 rounded-full z-20"
          variants={arrowVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={24} />
        </motion.button>

        {/* Testimonial Content */}
        <div className="relative w-full max-w-80 md:max-w-lg z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white p-6 rounded-lg shadow-xl text-center mx-auto"
            >
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="text-purple-500 text-7xl font-serif"
                  variants={childVariants}
                >
                  “
                </motion.div>
                <motion.p
                  className="text-gray-700 font-bold uppercase text-xl"
                  variants={childVariants}
                >
                  {testimonials[currentIndex].text}
                </motion.p>
                <motion.div
                  className="mt-4 border-t pt-2"
                  variants={childVariants}
                >
                  <h3 className="font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].title}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 bg-black/30 rounded-full z-20"
          variants={arrowVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;