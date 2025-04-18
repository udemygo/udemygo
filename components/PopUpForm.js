"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaUserGraduate,
} from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const PopUpForm = () => {
  const [close, setClose] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ref for scroll trigger
  const popupRef = useRef(null);
  const isInView = useInView(popupRef, { once: false, amount: 0.3 });

  // useEffect(() => {
  //   if (close) {
  //     const timer = setTimeout(() => setClose(false), 20000); // Reopen after 20 sec
  //     return () => clearTimeout(timer);
  //   }
  // }, [close]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_POPUP;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // Function to handle form submission with EmailJS
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const params = {
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      degree: data.degree,
      course: data.course,
      date: new Date().toLocaleDateString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => setClose(true);

  const selectedDegree = watch("degree");
  const ugCourses = ["B.COM", "BCA", "BBA", "BA"];
  const pgCourses = ["MBA", "MCA", "MA"];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };

  const closeVariants = {
    hover: { rotate: 90, scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      className={`fixed bottom-5 right-4 md:right-10 lg:right-24 z-50 ${
        close ? "hidden" : "inline-block"
      }`}
      ref={popupRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative p-6 w-80 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-200/50">
        {/* Close Button */}
        <motion.div
          onClick={handleClose}
          className="absolute -top-3 -right-3 cursor-pointer bg-red-500 rounded-full p-1"
          variants={closeVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <IoClose color="white" size={24} />
        </motion.div>

        {/* Headings */}
        <div className="text-center mb-4">
          <motion.h2
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.h1
            className="text-xl font-bold text-red-600 mt-2"
            variants={itemVariants}
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Avail <span className="text-yellow-400 drop-shadow-md">Early-Bird</span> Discount! 🎉
          </motion.h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Full Name */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div variants={iconVariants}>
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
            </motion.div>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 pl-10 border border-blue-300/50 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <motion.p
                className="text-red-500 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.fullName.message}
              </motion.p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div variants={iconVariants}>
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
            </motion.div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full p-2 pl-10 border border-blue-300/50 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <motion.p
                className="text-red-500 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.phone.message}
              </motion.p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div variants={iconVariants}>
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
            </motion.div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-2 pl-10 border border-blue-300/50 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Email Address"
            />
            {errors.email && (
              <motion.p
                className="text-red-500 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </motion.div>

          {/* Degree Dropdown */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div variants={iconVariants}>
              <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
            </motion.div>
            <select
              {...register("degree", { required: "Please select a degree" })}
              className="w-full p-2 pl-10 border border-blue-300/50 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 appearance-none"
            >
              <option value="">Select Degree</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
            </select>
            {errors.degree && (
              <motion.p
                className="text-red-500 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors.degree.message}
              </motion.p>
            )}
          </motion.div>

          {/* Course Dropdown */}
          {selectedDegree && (
            <motion.div className="relative" variants={itemVariants}>
              <motion.div variants={iconVariants}>
                <FaUserGraduate className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
              </motion.div>
              <select
                {...register("course", { required: "Please select a course" })}
                className="w-full p-2 pl-10 border border-blue-300/50 rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 appearance-none"
              >
                <option value="">Select Course</option>
                {(selectedDegree === "UG" ? ugCourses : pgCourses).map(
                  (course, idx) => (
                    <option key={idx} value={course}>
                      {course}
                    </option>
                  )
                )}
              </select>
              {errors.course && (
                <motion.p
                  className="text-red-500 text-xs mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.course.message}
              </motion.p>
              )}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-lg"
            }`}
            variants={buttonVariants}
            whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)" } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              <span className="flex items-center gap-2 cursor-pointer">
                <IoSend /> Submit
              </span>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default PopUpForm;