import Link from 'next/link';
import React from 'react';
import { TbCircleArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className='pt-10 flex flex-col px-4'>

      {/* Grow With Us! Connect Today. */}
      <div className="ml-2 pt-40 space-y-4 flex items-start gap-2">
        <Link
          href="/contact"
          className="flex items-center justify-center border border-black py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white group transition-all"
        >
          <p className="font-medium text-sm lg:text-xl">Grow With Us! Connect Today.</p>
          <span className='ml-4 text-3xl lg:text-5xl'>
            <TbCircleArrowUpRight />
          </span>
        </Link>
      </div>

      {/* About Company Section */}
      <div className='flex flex-wrap lg:flex-nowrap'>
        {/* Left Section */}
        <div className='mt-4 ml-3 w-full lg:w-2/3'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug'>
            The Leading Global{' '}
            <span className='text-amber-600 inline'>Marketplace</span>{' '}
            For Learning And Instruction
          </h2>
          
          <p className='mt-8 text-base md:text-lg'>
            At UdemyGo, we turn your educational dreams into reality by connecting you with top-tier online degree programs from leading universities around the world.

Our mission is to make learning flexible, accessible, and career-focused—designed to fit your lifestyle and fuel your ambitions. Whether you're looking to upskill, switch careers, or earn a degree while working, we’ve got you covered.

With globally recognized programs, expert mentorship, and a supportive learning community, UdemyGo empowers you to learn on your terms and succeed in today’s fast-moving world.
          </p>
          <p className='mt-2 text-base md:text-lg'>
            Our mission is to provide a seamless, flexible, and enriching learning experience tailored to meet the demands of today's dynamic professional landscape.
          </p>
        </div>

        {/* Right Section - Image Gallery */}
        <div className=" z-20  md:h-[600px] md:w-[50%] w-[100%] h-[400px]  flex md:p-5 p-2 gap-3 ">
        <div className="overflow-hidden rounded-2xl h-full md:h-[85%] ">
          <img
            src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F1.webp&w=1920&q=75"
            alt=""
            className=" h-full object-cover rounded-2xl hover:scale-120 transition duration-200 ease-in"
          />
        </div>
        <div className="w-[50%] min-h-[full flex flex-col gap-3">
          <div className=" w-[100%] overflow-hidden  rounded-2xl">
            <img
              src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F2.webp&w=1920&q=75"
              alt=""
              className=" h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </div>
          <div className=" w-[100%] overflow-hidden rounded-2xl  ">
            <img
              src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F3.webp&w=1920&q=75"
              alt=""
              className=" h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </div>
        </div>
      </div>
      </div>

      {/* Life @ Company Section */}
      <div className="relative max-w-screen-2xl mx-auto mt-24">
        {/* Left Scroll Line and Dot (only for large screens) */}
        <div className="hidden lg:flex flex-col items-center absolute left-12 w-px h-[50%] bottom-[15%]">
          <div className="w-px grow bg-[#C8C9EB] mb-2"></div>
          <div className="border border-[#C8C9EB] rounded-full w-4 h-12 flex flex-col items-center py-1 overflow-hidden relative">
            <div className="w-2 h-4 rounded-full bg-[#333347] absolute animate-scroll"></div>
          </div>
          <div className="w-px basis-[25%] bg-[#C8C9EB] mt-2"></div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
