"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaUserGraduate,
} from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser"; // Import EmailJS

const PopUpContact = () => {
  const [close, setClose] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (close) {
      const timer = setTimeout(() => setClose(false), 20000); // Reopen after 10 sec
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [close]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_POPUP; // Use the popup-specific template ID
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
      date: new Date().toLocaleDateString(), // Optional: Add submission date
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

  return (
    <div
      className={`fixed bottom-5 right-3 md:right-10 lg:right-20 z-30 bg-opacity-50 rounded-2xl ${
        close ? "hidden" : "inline-block"
      }`}
    >
      <div className="relative p-6 shadow-lg w-72 backdrop-blur-3xl rounded-2xl">
        <div className="relative text-center items-center text-2xl">
          <div className="flex w-full gap-8 items-center px-0">
            <div
              onClick={handleClose}
              className="absolute -left-2 cursor-pointer font-extrabold"
            >
              <IoClose color="white" size={28} />
            </div>
            <motion.h2
              className="text-3xl font-extrabold text-center w-full text-blue-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Contact Us
            </motion.h2>
          </div>
          <motion.h1
            className="text-3xl font-extrabold text-center mb-6 w-full text-red-600 drop-shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Avail <strong className="text-yellow-400">Early-Bird</strong>{" "}
            Discount!! 🎉
          </motion.h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Degree Dropdown */}
          <div className="relative flex items-center">
            <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <select
              {...register("degree", { required: "Please select a degree" })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white appearance-none"
            >
              <option value="">Select Degree</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
            </select>
          </div>
          {errors.degree && (
            <p className="text-red-500 text-sm">{errors.degree.message}</p>
          )}

          {/* Course Dropdown */}
          {selectedDegree && (
            <div className="relative flex items-center">
              <FaUserGraduate className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <select
                {...register("course", { required: "Please select a course" })}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white appearance-none"
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
            </div>
          )}
          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 rounded flex items-center justify-center gap-2 transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#bd1e2d] to-[#faa318] text-white"
            }`}
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
              <>
                <IoSend /> Submit
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpContact;