"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";

const Question = () => {
  const [clicked, setClicked] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const handleClick = (index) => {
    setClicked((prev) => (prev === index ? null : index));
  };

  const questions = [
    {
      q: "What are the benefits of online degree programs?",
      a: "Online degree programs offer flexibility, affordability, and accessibility, allowing you to study from anywhere while balancing work and personal commitments.",
    },
    {
      q: "Are online degrees recognized by employers?",
      a: "Yes! Many online programs are accredited and widely recognized by employers, especially when offered by reputable universities.",
    },
    {
      q: "How do I apply for an online degree?",
      a: "It’s easier than you think — apply through Udemygo. Explore top-rated MBA and degree programs from globally recognized universities. And you’re not alone — our expert advisors will guide you through every step, from choosing the right course to enrollment. Flexible. Affordable. Future-ready. Start your journey today at Udemygo — where success begins.",
    },
    {
      q: "Can I pursue an online degree while working full-time?",
      a: "Absolutely! Online courses are designed for working professionals, offering self-paced learning and flexible schedules.",
    },
    {
      q: "What technology do I need for online learning?",
      a: "You’ll need a computer/laptop, a stable internet connection, and basic software like a web browser and video conferencing tools.",
    },
    {
      q: "How do I interact with professors and classmates?",
      a: "Most programs provide discussion forums, live lectures, email support, and virtual meetings to engage with instructors and peers.",
    },
  ];

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

  // Variants for heading
  const headingVariants = {
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

  // Variants for mentor card
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

  // Variants for FAQ items
  const faqVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for answer
  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Variants for background image
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full min-h-[600px] flex flex-col lg:flex-row items-center gap-4 bg-[#1d3e987b] rounded-4xl text-white p-6 my-5 lg:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 rounded-4xl overflow-hidden -z-10"
        variants={imageVariants}
      >
        <Image
          src="/assets/gradient-blur-pink-blue-abstract.webp"
          alt="Gradient Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Mentor Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        variants={cardVariants}
      >
        <div className="w-full max-w-lg p-6 shadow-xl backdrop-blur-lg bg-white/10 rounded-xl">
          <motion.div
            className="bg-[#273353] p-6 rounded-lg flex gap-4 items-center"
            variants={containerVariants}
          >
            <motion.div className="w-1/2" variants={cardVariants}>
              <Image
                src="/assets/ques.png"
                alt="Mentor"
                width={500}
                height={500}
                className="w-full"
              />
            </motion.div>
            <motion.div
              className="w-1/2 flex flex-col gap-4"
              variants={containerVariants}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold"
                variants={headingVariants}
              >
                Meet Our Mentors
              </motion.h3>
              <motion.p
                className="text-sm md:text-base text-gray-300"
                variants={headingVariants}
              >
                We have a team of over 12 experienced mentors with over 26+
                years of collective experience available to guide you at a
                moment&apos;s notice.
              </motion.p>
              <motion.a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
                variants={cardVariants}
              >
                <motion.button
                  className="w-full py-2 bg-green-600 hover:bg-green-700 transition rounded-lg shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Us
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center"
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            variants={headingVariants}
          >
            <span className="text-yellow-500">Got </span>
            <span className="text-[#bd1e2d]">Questions?</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-6 w-full max-w-lg bg-white/10 p-4 rounded-xl shadow-md"
          variants={containerVariants}
        >
          {questions.map((item, index) => (
            <motion.div
              key={index}
              className="my-3"
              variants={faqVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <button
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white py-2 px-3 rounded-md bg-[#273353] hover:bg-[#1b2745] transition"
                onClick={() => handleClick(index)}
              >
                {item.q}
                <motion.span
                  animate={{ rotate: clicked === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {clicked === index ? <FiMinus /> : <FaPlus />}
                </motion.span>
              </button>
              <AnimatePresence>
                {clicked === index && (
                  <motion.p
                    className="text-md text-gray-300 font-medium p-3 bg-[#1b2745] rounded-md mt-2"
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Question;
