"use client";

import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // Function to handle form submission with EmailJS
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
      alert("Your message has been sent successfully!");
      reset(); // Reset form fields
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#bd1e2d] to-[#faa318] p-6 pt-40 rounded-4xl">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in touch, we'll call you back.
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  Phone number is required
                </span>
              )}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="pl-10 w-full p-3 border rounded-md"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full p-3 border rounded-md"
                rows="4"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-md text-white transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#bd1e2d] to-[#faa318] hover:opacity-90"
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
                  Sending...
                </>
              ) : (
                <>
                  <IoSend /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex-1 space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#bd1e2d] text-2xl" />
            <p>Stellar one F-1208 greater noida west 201306</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#bd1e2d] text-2xl" />
            <a href="mailto:eduomnipvtltd@gmail.com">info@udemygo.com</a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#bd1e2d] text-2xl" />
            <a href="tel:+91 81045 50586">+91 81045 50586</a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-[#bd1e2d] text-2xl" />
            <p>linkedin.com/in/UdemyGo</p>
          </div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.0193222481!2d76.7635797951935!3d28.6442879489248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea3aefaaaaab%3A0x5a9a5e9a5c5b0b45!2sNukleus%20Coworking%20%26%20Managed%20Offices!5e0!3m2!1sen!2sin!4v1616694721229!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;