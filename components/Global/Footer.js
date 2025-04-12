"use client";
import React from "react";
import Logo from "../../public/assets/UDEMYGO-LOGO.webp";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-g-8 py-4  relative">
      <div className="mx-auto max-w-screen-2xl bg-[#EFF0F9] rounded-2xl lg:rounded-3xl shadow-xl">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-start gap-x-4 gap-y-8 px-5 py-8 sm:py-12 lg:py-16">
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-6 lg:space-y-8">
            <div className="flex w-full justify-center">
              <Image
                alt="logo"
                loading="lazy"
                width="100"
                height="50"
                className="object-contain w-40"
                src={Logo}
              />
            </div>
            <p>
              We're more than just an educational platform; we're a catalyst for
              change. Our mission is to empower students through comprehensive
              support, mentorship, and innovative learning resources.
            </p>
            <div>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
                className="relative group z-1"
              >
                <div className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 lg:py-3 font-semibold w-full bg-gray-900 text-white">
                  WhatsApp Us
                </div>
              </a>
            </div>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Company</h2>
            <ul className="font-medium">
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all z-10"
                  href="/about"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/explore-universities/university-catalog"
                >
                  University Catalog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/explore-universities/course-catalog"
                >
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">
              Top Universities Online
            </h2>
            <ul className="font-medium">
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/1"
                >
                  Amity University
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/4"
                >
                  NMIMS
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/2"
                >
                  Manipal (MJU Online)
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/8"
                >
                  UTTRANCHAL UNIVERSITY
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/12"
                >
                  Sharda University
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/6"
                >
                  L.P.U.
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/3"
                >
                  Manipal Sikkim
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/7"
                >
                  Chandigarh University
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/14"
                >
                  UPES
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href="/university/11"
                >
                  Shoolini University
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">
              Top Courses Online
            </h2>
            <ul className="font-medium">
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href={`/explore-universities/course-catalog?filter=${"PG"}`}
                >
                  PG Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href={`/explore-universities/course-catalog?filter=${"UG"}`}
                >
                  UG Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-2 block capitalize hover:translate-x-1 transition-all"
                  href={`/explore-universities/course-catalog?filter=${"Executive MBA"}`}
                >
                  Executive MBA
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Get in touch</h2>
            <div className="flex flex-col items-start gap-2">
              <a
                href="mailto:info@udemygo.com"
                className="flex items-center gap-2 hover:translate-x-1 transition-all"
              >
                info@udemygo.com
              </a>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            <p>
              © Copyright udemygo.com. All rights reserved designed by{" "}
              <a target="_blank" href="https://febtech.in/" className=" text-blue-400">
                www.febtech.in
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
