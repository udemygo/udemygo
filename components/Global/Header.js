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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "University", path: "/explore-universities/university-catalog" },
    { name: "Courses", path: "/explore-universities/course-catalog" },
    { name: "Contact", path: "/contact" },
    { name: "Placement", path: "/placement" },
    { name: "Explore", path: "/explore-programs" },
  ];

  return (
    <div className="w-full md:max-w-[1322px] flex justify-center uppercase bg-amber-100">
      <motion.div
        className={`h-20 p-4 px-6 mt-6 w-[90%] md:w-[70%] md:max-w-[1150px] bg-amber-0 fixed z-50 flex items-center justify-between rounded-full shadow-2xl backdrop-blur-xl`}
        style={{ y: yOffset }}
        initial={{ y: 0 }}
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
        <ul className="hidden lg:flex items-center space-x-1 bg-gray-200 py-3 px-2 rounded-full text-[16px] tracking-wider font-semibold">
          {navItems.slice(0, 2).map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={item.path}
                className={`px-4 py-3 rounded-full transition-all ${
                  pathname === item.path
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white cursor-pointer"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
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
              className="px-4  rounded-full transition-all hover:bg-black hover:text-white cursor-pointer uppercase"
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
                  {[
                    {
                      href: "/explore-universities/university-catalog",
                      label: "University Catalog",
                    },
                    {
                      href: "/explore-universities/course-catalog",
                      label: "Course Catalog",
                    },
                  ].map((dropdownItem, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={dropdownItemVariants}
                    >
                      <Link
                        href={dropdownItem.href}
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          {navItems.slice(4).map((item, index) => (
            <motion.li
              key={index}
              custom={index + 3}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={item.path}
                className={`px-4 py-3 rounded-full transition-all ${
                  pathname === item.path
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white cursor-pointer"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* WhatsApp button and mobile menu toggle */}
        <div className="relative cursor-pointer flex items-center">
          <div className="custome-bg"></div>
          <motion.a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
            className="bg-black text-white text-sm rounded-full px-4 py-2 hover:bg-gray-800 transition-all cursor-pointer"
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
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.path}
                    className={`mobile-nav-link ${
                      pathname === item.path
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;