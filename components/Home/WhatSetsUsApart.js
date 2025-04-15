"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WhatSetsUsApart = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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

  // Variants for grid items
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  // Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
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

  return (
    <motion.div
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-indigo-100 p-8 md:p-16 rounded-xl my-2"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading and Button */}
        <motion.div
          className="flex justify-between items-center mb-10"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={headerVariants}
          >
            What Sets us Apart
          </motion.h2>
          <motion.div variants={headerVariants}>
            <Link href={"/about"}>
              <motion.button
                className="border border-gray-300 px-5 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About us ↗
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-10"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Dark Grid */}
          <motion.div
            className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-xl grid grid-cols-2 gap-6"
            variants={cardVariants}
          >
            {[
              {
                title: "Personal Mentorship",
                desc: "Enhanced learning experiences tailored to individual growth paths",
              },
              {
                title: "Handpicked Programs",
                desc: "Handpicked online MBA programs and career-focused certifications",
              },
              {
                title: "Collaborations",
                desc: "Collaborations with top-tier institutions and domain experts",
              },
              {
                title: "Flexibility",
                desc: "Learner-first design: flexible schedules, lifetime access, EMI options.",
              },
              {
                title: "Real Support",
                desc: "Real people, real support: Our guidance doesn’t end after enrollment.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={gridItemVariants}>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Thriving Card */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="italic font-semibold text-lg mb-2">
              Why Learners Trust Udemygo.
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Curated curriculum, no fluff — only industry-relevant knowledge.
            </p>

            <h5 className="font-semibold mb-1">Mentorship that matters:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Our experts help you navigate your next step.</li>
              <li>Career-enhancing certifications that employers recognize</li>
            </ul>

            <h5 className="font-semibold mb-1">Outcomes</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>
                Testimonials from real students whose lives have transformed
                through online education.
              </li>
              <li>Excelling in your field of expertise.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Two Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Image + Text */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div variants={imageVariants}>
              <Image
                src="/assets/hurrayGraduate.jpg"
                width={500}
                height={500}
                alt="students"
                className="object-cover h-full w-full block"
              />
            </motion.div>
            <motion.div className="p-6" variants={gridItemVariants}>
              <h4 className="italic font-semibold mb-2">
                Strategic Career Consulting
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Your career goals, our expert roadmap.
              </p>

              <h5 className="font-semibold mb-1">What We Offer:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>
                  Profile Evaluation: Honest assessment of your academic and
                  professional background.
                </li>
                <li>
                  Goal Mapping: Personalized career pathways based on your
                  strengths, interests, and market demand.
                </li>
                <li>
                  Application Assistance: From SOPs to LORs — get support that
                  helps you stand out.
                </li>
              </ul>

              <h5 className="font-semibold mb-1">Why It Matters:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>
                  Make informed decisions that align with your long-term
                  ambitions.
                </li>
                <li>
                  Maximize your chances of admission into top-tier programs.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Community Card */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="italic font-semibold mb-2">
              End-to-End Admission Support
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              We stay with you — from inquiry to intake.
            </p>

            <h5 className="font-semibold mb-1">What We Do:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                University Shortlisting: Handpicked options that suit your goals
                and budget.
              </li>
              <li>
                Documentation Help: Leave the paperwork to us — we ensure
                accuracy and completeness.
              </li>
              <li>
                Global Reach: Admission support for universities across India,
                Canada, UK, Australia & more.
              </li>
            </ul>

            <h5 className="font-semibold mb-1">What You Get:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Reduced stress, increased clarity.</li>
              <li>A smoother, faster journey into your dream university.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatSetsUsApart;