"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="  ">
      <div className=" lg:hidden w-full text-4xl md:text-6xl text-center uppercase font-bold ">
        <p>Testimonials</p>
      </div>
      <div className="relative flex items-center justify-center h-[400px] bg-[#181e2e] rounded-4xl  ">
        <div className=" absolute h-full w-full overflow-hidden rounded-4xl   ">
          <Image
            src={gradientimg1}
            alt=""
            className="  absolute bottom-0 w-[100%] -translate-x-[50%] "
          />
          <Image
            src={gradientimg1}
            alt=""
            className="  absolute rotate-180 top-[99.9%] w-[100%] -translate-x-[50%] "
          />
        </div>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white p-2 bg-black/20 rounded-full"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Testimonial Content */}
        <div className="relative w-full  max-w-80 md:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-xl text-center relative"
            >
              <div className="text-purple-500 text-7xl font-serif">“</div>
              <p className="text-gray-700 font-bold uppercase text-xl">
                {testimonials[currentIndex].text}
              </p>
              <div className="mt-4 border-t pt-2">
                <h3 className="font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white p-2 bg-black/20 rounded-full"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
