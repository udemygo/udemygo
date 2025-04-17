"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const placementData = [
  {
    id: 1,
    name: "Google",
    logo: "/assets/google.svg",
    website: "https://www.google.com",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/assets/Microsoft.svg",
    website: "https://www.microsoft.com",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/assets/amazon.svg",
    website: "https://www.amazon.com",
  },
  {
    id: 4,
    name: "Facebook",
    logo: "/assets/fb.png",
    website: "https://www.facebook.com",
  },
  {
    id: 5,
    name: "Radison",
    logo: "/assets/radison.png",
    website: "https://www.radissonhotels.com/en-us/",
  },
  {
    id: 6,
    name: "Royal Bank of Scotland",
    logo: "/assets/rbs.png",
    website: "https://www.rbs.co.uk/",
  },
  {
    id: 7,
    name: "Deloitte",
    logo: "/assets/deloitte.png",
    website: "https://www2.deloitte.com/us/en.html",
  },
  {
    id: 8,
    name: "Goibibo",
    logo: "/assets/goibibo.png",
    website: "https://www.goibibo.com/",
  },
  {
    id: 9,
    name: "EY",
    logo: "/assets/EY.png",
    website: "https://www.ey.com/",
  },
  {
    id: 10,
    name: "HERO",
    logo: "/assets/hero.png",
    website: "https://www.heromotocorp.com/",
  },
  {
    id: 11,
    name: "MetLife",
    logo: "/assets/metlife.jpg",
    website: "https://www.metlife.com/",
  },
  {
    id: 12,
    name: "Spicejet",
    logo: "/assets/spicejet.png",
    website: "https://www.spicejet.com/",
  },
  {
    id: 13,
    name: "Samsung",
    logo: "/assets/samsung.avif",
    website: "https://www.samsung.com/in/",
  },
  {
    id: 14,
    name: "Nokia",
    logo: "/assets/nokia.png",
    website: "https://www.nokia.com/",
  },
  {
    id: 15,
    name: "IBM",
    logo: "/assets/ibm.jpg",
    website: "https://www.ibm.com/",
  },
  {
    id: 16,
    name: "Adobe",
    logo: "/assets/adobe.png",
    website: "https://www.adobe.com/",
  },
  {
    id: 17,
    name: "Genpact",
    logo: "/assets/genpect.png",
    website: "https://www.genpact.com/",
  },
  {
    id: 18,
    name: "McDonalds",
    logo: "/assets/mc.jpg",
    website: "https://www.mcdonalds.com/",
  },
  {
    id: 19,
    name: "IndiGo",
    logo: "/assets/indigo.png",
    website: "https://www.goindigo.in/",
  },
  {
    id: 20,
    name: "KPMG",
    logo: "/assets/kmgp.png",
    website: "https://www.kpmg.com/",
  },
  {
    id: 21,
    name: "ICICI Lombard",
    logo: "/assets/icici.webp",
    website: "https://www.icicilombard.com/",
  },
];

const Placement = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Variants for cards
  const cardVariants = {
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

  // Variants for logos
  const logoVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-12 pt-18 rounded-4xl"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 pt-14">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          variants={headingVariants}
        >
          Universities Top Placement Partners
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white bg-opacity-80 shadow-xl rounded-4xl p-6"
          variants={containerVariants}
        >
          {placementData.map((partner) => (
            <motion.a
              key={partner.id}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-24 h-24 object-contain mb-4"
                variants={logoVariants}
                whileHover={{ rotate: 10, scale: 1.2 }}
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {partner.name}
              </h2>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Placement;