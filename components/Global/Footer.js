"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logo from "../../public/assets/UDEMYGO-LOGO.webp";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  // Variants for sections
  const sectionVariants = {
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

  // Variants for links
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for WhatsApp button
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
    <motion.footer
      ref={sectionRef}
      className="bg-g-8 py-4 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="mx-auto max-w-screen-2xl bg-[#EFF0F9] rounded-2xl lg:rounded-3xl shadow-xl">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-start gap-x-4 gap-y-8 px-5 py-8 sm:py-12 lg:py-16">
          {/* Logo & Intro Section */}
          <motion.div
            className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-6 lg:space-y-8"
            variants={sectionVariants}
          >
            <div className="flex w-full justify-center">
              <motion.div variants={sectionVariants}>
                <Image
                  alt="UdemyGo logo"
                  loading="lazy"
                  width={100}
                  height={50}
                  className="object-contain w-40"
                  src={Logo}
                />
              </motion.div>
            </div>
            <motion.p variants={sectionVariants}>
            We&apos;re more than just an educational platform; we&apos;re a catalyst for
              change. Our mission is to empower students through comprehensive
              support, mentorship, and innovative learning resources.
            </motion.p>
            <motion.div variants={buttonVariants}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
                className="relative group z-1"
              >
                <motion.div
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 lg:py-3 font-semibold w-full bg-gray-900 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Us
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Company Section */}
          <motion.div
            className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3"
            variants={sectionVariants}
          >
            <h2 className="font-semibold uppercase opacity-80">Company</h2>
            <ul className="font-medium">
              {[
                { href: "/about", label: "About us" },
                {
                  href: "/explore-universities/university-catalog",
                  label: "University Catalog",
                },
                {
                  href: "/explore-universities/course-catalog",
                  label: "Course Catalog",
                },
                { href: "/contact", label: "Contact us" },
              ].map((item, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <Link
                    className="text-sm py-2 block capitalize hover:translate-x-1 transition-all z-10"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Top Universities Section */}
          <motion.div
            className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3"
            variants={sectionVariants}
          >
            <h2 className="font-semibold uppercase opacity-80">
              Top Universities Online
            </h2>
            <ul className="font-medium">
              {[
                { href: "/university/1", label: "Amity University" },
                { href: "/university/4", label: "NMIMS" },
                { href: "/university/2", label: "Manipal (MJU Online)" },
                { href: "/university/8", label: "Uttranchal University" },
                { href: "/university/12", label: "Sharda University" },
                { href: "/university/6", label: "L.P.U." },
                { href: "/university/3", label: "Manipal Sikkim" },
                { href: "/university/7", label: "Chandigarh University" },
                { href: "/university/14", label: "UPES" },
                { href: "/university/11", label: "Shoolini University" },
              ].map((item, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <Link
                    className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Top Courses Section */}
          <motion.div
            className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3"
            variants={sectionVariants}
          >
            <h2 className="font-semibold uppercase opacity-80">
              Top Courses Online
            </h2>
            <ul className="font-medium">
              {[
                {
                  href: "/explore-universities/course-catalog?filter=PG",
                  label: "PG Courses",
                },
                {
                  href: "/explore-universities/course-catalog?filter=UG",
                  label: "UG Courses",
                },
                {
                  href: "/explore-universities/course-catalog?filter=Executive MBA",
                  label: "Executive MBA",
                },
              ].map((item, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <Link
                    className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div
            className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3"
            variants={sectionVariants}
          >
            <h2 className="font-semibold uppercase opacity-80">Get in touch</h2>
            <motion.div
              className="flex flex-col items-start gap-2"
              variants={linkVariants}
            >
              <a
                href="mailto:info@udemygo.com"
                className="flex items-center gap-2 hover:translate-x-1 transition-all"
              >
                info@udemygo.com
              </a>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            className="w-full flex justify-center"
            variants={sectionVariants}
          >
            <div className="flex flex-col items-center gap-2 ">
              <span className="tracking-wide">
                &copy; Copyright {new Date().getFullYear()} udemygo.com | All
                rights reserved{" "}
              </span>
              <span className="text-sm tracking-wide">
                Designed & Developed by {" "}
                <a
                  target="_blank"
                  href="https://febtech.in/"
                  className="text-blue-400"
                >
                  Feb Tech IT Solutions
                </a>{" "}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
