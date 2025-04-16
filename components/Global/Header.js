"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { X } from "lucide-react";
import "../custome.css";
import Logo from "../../public/assets/UDEMYGO-LOGO.webp";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);
  const pathname = usePathname();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div
        className={`h-20 p-4 px-6 mt-6 w-[90%] md:w-[70%] md:max-w-[1150px] bg-amber-0 fixed z-50 flex items-center justify-between rounded-full shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          isScrolled ? "-translate-y-12" : "translate-y-0"
        }`}
      >
        {/* Logo */}
        <div className="w-16">
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
        </div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center space-x-1 bg-gray-200 px-2 rounded-full text-sm tracking-wider font-semibold">
          {navItems.slice(0, 2).map((item, index) => (
            <li key={index}>
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
            </li>
          ))}
          {/* Explore Universities dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-3 rounded-full transition-all hover:bg-black hover:text-white cursor-pointer uppercase"
            >
              Explore Universities
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-full bg-white text-gray-800 shadow-lg rounded-md z-50 overflow-hidden shadow-[#51515182]">
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
                  <div key={index}>
                    <Link
                      href={dropdownItem.href}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
          {navItems.slice(4, 6).map((item, index) => (
            <li key={index}>
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
            </li>
          ))}
          {/* Explore dropdown */}
          <li ref={exploreDropdownRef} className="relative">
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="px-4 py-3 rounded-full transition-all hover:bg-black hover:text-white cursor-pointer uppercase"
            >
              Explore
            </button>
            {isExploreOpen && (
              <div className="absolute  overflow-hidden mt-2 w-full bg-white text-gray-800 shadow-lg rounded-md z-50 min-w-40 shadow-[#57575778]">
                <div>
                  <Link
                    href="/explore-programs/online-mba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setIsExploreOpen(false)}
                  >
                    Online MBA
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* WhatsApp button and mobile menu toggle */}
        <div className="relative cursor-pointer flex items-center">
          <div className="custome-bg"></div>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
            className="bg-black text-white text-[13px] rounded-full px-4 py-3 hover:bg-gray-800 transition-all cursor-pointer"
          >
            WhatsAppUs
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl py-3"
            >
              {isOpen ? <X size={30} /> : <IoReorderThreeOutline />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[15%] right-5 h-fit w-4/6 sm:w-3/6 bg-gray-800 text-white z-50 rounded-2xl shadow-xl backdrop-blur-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl z-20"
          >
            <X />
          </button>
          <ul className="flex flex-col my-5 space-y-6 text-lg text-center">
            {navItems.map((item, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;