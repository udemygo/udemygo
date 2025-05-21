"use client";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import ScrollLogo from "../Global/ScrollLogo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompareCourseComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const formRef = useRef(null);
  const detailsRef = useRef(null);
  const mapRef = useRef(null);

  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });
  const isDetailsInView = useInView(detailsRef, { once: false, amount: 0.3 });
  const isMapInView = useInView(mapRef, { once: false, amount: 0.3 });


  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (url) window.location = url;
    };
  
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17000517664/aUY_CJul678aEKCgvao_",
        event_callback: callback,
      });
    }
  };
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const params = {
      from_name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID);

        // ✅ Trigger Google Ads Conversion
        gtag_report_conversion();
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 120 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 120 },
    },
  };

  return (
    <div className="p-7 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden transition duration-300">
        {/* Left Info Section */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex flex-col justify-between">
          <div>
            <div className="w-full h-fit overflow-hidden">
              <ScrollLogo />
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="text-left pt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Online & Distance Learning MBA Universities - No Cost EMI | ( Early bird Discount )
                </h2>
              </div>
            </div>

            <p className="text-blue-600 text-lg font-medium mb-6">
              India’s leading Online MBA Universities on a Single Platform!
            </p>

            <ul className="text-gray-700 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> 21+ Universities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Comparison Factors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Free Expert Consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Post Admission Support
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">
              Lets get you <b>best of the best!</b>
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 bg-white">
          <h2 className="text-3xl tracking-wide text-center font-bold stroke-3 pb-8 text-transparent bg-clip-text bg-gradient-to-l from-violet-800 via-violet-500 to-blue-500">
            Application Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <motion.div className="relative" variants={formVariants}>
              <motion.div variants={iconVariants}>
                <FaUser className="absolute left-3 top-3 text-gray-500" />
              </motion.div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </motion.div>

            <motion.div className="relative" variants={formVariants}>
              <motion.div variants={iconVariants}>
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
              </motion.div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
            </motion.div>

            <motion.div className="relative" variants={formVariants}>
              <motion.div variants={iconVariants}>
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              </motion.div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </motion.div>

            <motion.div className="relative" variants={formVariants}>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full p-3 border rounded-md"
                rows="4"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-md text-white transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#bd1e2d] to-[#faa318] hover:opacity-90"
              }`}
              variants={buttonVariants}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
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
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <div className="flex items-center gap-2 cursor-pointer">
                  <IoSend /> Submit
                </div>
              )}
            </motion.button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            I authorise UdemyGO & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.
            This will override on DND/NDNC.
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default CompareCourseComponent;
