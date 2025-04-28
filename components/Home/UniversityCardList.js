"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { universityCardData } from "./UniversityData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const UniversityCard = ({ data }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
          },
        },
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <Link
        href={`/university/${data.id}`}
        className="relative rounded-lg shadow-lg p-6 w-96 bg-white flex-shrink-0 mx-4 block"
      >
        <motion.div
          className="flex justify-between p-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } },
          }}
        >
          <Image width={500} height={500} src={data.logo} alt="Logo" className="h-8 w-fit" />
          {data.emiPlan && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              EMI Plan
            </span>
          )}
        </motion.div>
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="College"
          className="w-full h-44 object-cover mt-4 rounded"
          variants={{
            hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
            visible: {
              opacity: 1,
              clipPath: "inset(0% 0 0 0)",
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        />
        <motion.div
          className="relative bg-indigo-50 p-2 rounded-xl mt-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
          }}
        >
          <span className="absolute -top-4 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-lg text-xs">
            {data.year}
          </span>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-white p-1 rounded-lg text-center">
              <p className="font-bold text-lg">{data.rating}</p>
              <p className="text-xs text-gray-600">{data.naac}</p>
            </div>
            <div className="bg-white p-1 rounded-lg text-center">
              <p className="font-bold text-lg">{data.creditPoints}</p>
              <p className="text-xs text-gray-600">Credit P.</p>
            </div>
            <div className="bg-white p-1 rounded-lg text-center">
              <p className="font-bold text-lg">{data.rank}</p>
              <p className="text-xs text-gray-600">Rank</p>
            </div>
            <div className="bg-white p-1 py-2 rounded-lg text-center">
              <p className="font-bold text-lg">{data.managementRank}</p>
              <p className="text-xs text-gray-600">Management</p>
            </div>
          </div>
        </motion.div>
        <motion.h2
          className="font-bold text-lg mt-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4 } },
          }}
        >
          {data.name}
        </motion.h2>
        <motion.p
          className="text-gray-600"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          {data.location}
        </motion.p>
        <motion.p
          className="text-sm mt-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.6 } },
          }}
        >
          {data.duration} • {data.semesters} • From {data.fee}
        </motion.p>
      </Link>
    </motion.div>
  );
};

const UniversityCardList = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const handleForward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleBackward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  // Header variants
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

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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

  return (
    <motion.div
      ref={sectionRef}
      className="w-full my-10 bg-amber-400 p-2 lg:bg-transparent rounded-4xl"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full flex justify-between items-center md:px-10 px-5 my-6">
        <motion.div className="flex flex-col  w-9/12" variants={headerVariants}>
          <p className="text-xl md:text-4xl font-bold">Choose Your University</p>
          <p className="text-gray-700 text-[11px] md:text-lg">
            Your dream university could be just a choice away.
          </p>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Link
            href={"/explore-universities/university-catalog"}
            className="text-[14px] w-[50%] md:w-auto font-semibold md:px-6 px-3 py-2 md:py-2 border rounded-lg md:rounded-2xl"
          >
            View All
          </Link>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="relative w-full overflow-x-scroll lg:overflow-hidden py-6 rounded-4xl md:bg-amber-50 z-10"
      >
        <motion.div
          className="flex w-max animate-scroll flex-nowrap"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {universityCardData.map((item, index) => (
            <UniversityCard key={index} data={{ ...item, id: item.id }} />
          ))}
          {universityCardData.map((item, index) => (
            <UniversityCard
              key={`duplicate-${index}`}
              data={{ ...item, id: item.id }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="md:hidden flex w-full justify-center gap-[40%] mt-4 text-[#bd1e2d]"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.button
          onClick={handleBackward}
          className="text-6xl rotate-180"
          variants={buttonVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdArrowRoundForward className="backdrop-blur-3x rounded-full" />
        </motion.button>
        <motion.button
          onClick={handleForward}
          className="text-6xl"
          variants={buttonVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdArrowRoundForward className="backdrop-blur-3x rounded-full" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default UniversityCardList;