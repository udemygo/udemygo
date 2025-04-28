"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { X } from "lucide-react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import "../custome.css";
import Logo from "../../public/assets/UDEMYGO-LOGO.webp";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const dropdownRef = useRef(null);
  const yOffset = useSpring(0, { stiffness: 120, damping: 20 });
  const pathname = usePathname();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        yOffset.set(-60);
      } else {
        setIsScrolled(false);
        yOffset.set(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yOffset]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants for nav links
  const linkVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.9 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  // Animation for dropdown menu
  const dropdownMenuVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // Animation for dropdown items
  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  // Animation for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", type: "spring", stiffness: 100 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Animation for mobile menu links
  const mobileLinkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  // Animation for logo
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring" },
    },
  };

  // Animation for WhatsApp button
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  // Animation for toggle icon
  const toggleVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <div className="w-full md:max-w-[1322px] flex justify-center bg-amber-100">
      <motion.div
        className={`h-20 p-4 px-6 mt-6 w-[90%] md:w-[70%] md:max-w-[1150px] bg-amber-0 fixed z-50 flex items-center justify-between rounded-full shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          isScrolled ? "-translate-y-7" : "translate-y-0"
        }`}
      >
        {/* Logo */}
        <motion.div
          className="w-16"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              placeholder="blur"
              loading="lazy"
              src={Logo}
              alt="UdemyGo logo"
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center space-x-1 bg-gray-200 px-2 lg:py-1 2xl:py-3 rounded-full text-sm tracking-wider font-semibold uppercase">
          <motion.li
            custom={0}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={"/"}
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/" ? "bg-black text-white" : "hover:bg-black hover:text-white cursor-pointer"
              }`}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            custom={1}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={"/about"}
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/about" ? "bg-black text-white" : "hover:bg-black hover:text-white cursor-pointer"
              }`}
            >
              About
            </Link>
          </motion.li>
          {/* Explore Universities dropdown */}
          <motion.li
            custom={2}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            ref={dropdownRef}
            className="relative"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-1 rounded-full transition-all hover:bg-black hover:text-white cursor-pointer uppercase"
            >
              Explore Universities
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute mt-2 w-full bg-white text-gray-800 shadow-lg rounded-md z-50"
                  variants={dropdownMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    custom={0}
                    variants={dropdownItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="/explore-universities/university-catalog"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      University Catalog
                    </Link>
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={dropdownItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="/explore-universities/course-catalog"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Course Catalog
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            custom={3}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={"/contact"}
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/contact" ? "bg-black text-white" : "hover:bg-black hover:text-white cursor-pointer"
              }`}
            >
              Contact
            </Link>
          </motion.li>
          <motion.li
            custom={4}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={"/blogs"}
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/placement" ? "bg-black text-white" : "hover:bg-black hover:text-white cursor-pointer"
              }`}
            >
              Blogs
            </Link>
          </motion.li>
          <motion.li
            custom={4}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={"/placement"}
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/placement" ? "bg-black text-white" : "hover:bg-black hover:text-white cursor-pointer"
              }`}
            >
              Placement
            </Link>
          </motion.li>
          {/* Explore dropdown */}
          <motion.li
            custom={5}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="px-4 py-1 rounded-full transition-all hover:bg-black hover:text-white cursor-pointer uppercase"
            >
              Explore Programs
            </button>
            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  className="absolute -left-4 mt-2 w-full bg-white text-gray-800 shadow-lg rounded-md z-50 min-w-40 shadow-[#57575778]"
                  variants={dropdownMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    custom={0}
                    variants={dropdownItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="/explore-programs/online-mba"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsExploreOpen(false)}
                    >
                      Online MBA
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>

        {/* WhatsApp button and mobile menu toggle */}
        <div className="relative cursor-pointer flex items-center">
          <div className="custome-bg"></div>
          <motion.a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
            className="bg-black text-white text-sm rounded-full px-6 text-center py-2 hover:bg-gray-800 transition-all cursor-pointer"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            WhatsApp Us
          </motion.a>
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl py-3"
              variants={toggleVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={30} /> : <IoReorderThreeOutline />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-[15%] right-5 h-fit w-4/6 sm:w-3/6 bg-gray-800 text-white z-50 rounded-2xl shadow-xl backdrop-blur-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl z-20"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <X />
            </motion.button>
            <ul className="flex flex-col my-5 space-y-6 text-lg text-center">
              <motion.li
                custom={0}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/"
                  className={`mobile-nav-link ${
                    pathname === "/" ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                custom={1}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/about"
                  className={`mobile-nav-link ${
                    pathname === "/about" ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                custom={2}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/explore-universities/university-catalog"
                  className={`mobile-nav-link ${
                    pathname === "/explore-universities/university-catalog"
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  University
                </Link>
              </motion.li>
              <motion.li
                custom={3}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/explore-universities/course-catalog"
                  className={`mobile-nav-link ${
                    pathname === "/explore-universities/course-catalog"
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
              </motion.li>
              <motion.li
                custom={4}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/contact"
                  className={`mobile-nav-link ${
                    pathname === "/contact" ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li
                custom={5}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/blogs"
                  className={`mobile-nav-link ${
                    pathname === "/placement" ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
              </motion.li>
              <motion.li
                custom={5}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/placement"
                  className={`mobile-nav-link ${
                    pathname === "/placement" ? "bg-black text-white" : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Placement
                </Link>
              </motion.li>
              <motion.li
                custom={6}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/explore-programs/online-mba"
                  className={`mobile-nav-link ${
                    pathname === "/explore-programs/online-mba"
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Explore
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;