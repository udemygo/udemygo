"use client"
import Link from "next/link";
import React, { useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { universityCardData } from "./UniversityData";

const UniversityCard = ({ data }) => {
  return (
    <Link
      href={`/university/${data.id}`}
      className="relative rounded-lg shadow-lg p-6 w-96 bg-white flex-shrink-0 mx-4 block"
    >
      <div className="flex justify-between p-2">
        <img src={data.logo} alt="Logo" className="h-8" />
        {data.emiPlan && (
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
            EMI Plan
          </span>
        )}
      </div>
      <img
        src={data.image}
        alt="College"
        className="w-full h-44 object-cover mt-4 rounded"
      />
      <div className="relative bg-indigo-50 p-2 rounded-xl mt-4">
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
      </div>
      <h2 className="font-bold text-lg mt-4">{data.name}</h2>
      <p className="text-gray-600">{data.location}</p>
      <p className="text-sm mt-2">
        {data.duration} • {data.semesters} • From {data.fee}
      </p>
    </Link>
  );
};

const UniversityCardList = () => {
  const scrollRef = useRef(null);

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

  return (
    <div className="w-full my-10 bg-amber-400 p-2 lg:bg-transparent rounded-4xl">
      <div className="w-full flex justify-between items-center md:px-10 px-5 my-6">
        <div className="flex flex-col">
          <p className="text-4xl font-bold">Choose Your University</p>
          <p className="text-gray-700">Your dream university could be just a choice away.</p>
        </div>
        <Link
          href={"/explore-universities/university-catalog"}
          className="text-xl w-[50%] md:w-auto font-bold md:px-6 px-4 py-2 md:py-2 border rounded-2xl"
        >
          View All
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="relative w-full overflow-x-scroll lg:overflow-hidden py-6 rounded-4xl md:bg-amber-50 z-10"
      >
         <div   className="flex w-max animate-scroll  flex-nowrap ">
          {universityCardData.map((item, index) => (
            <UniversityCard key={index} data={{ ...item, id: item.id }} />
          ))}
          {universityCardData.map((item, index) => (
            <UniversityCard
              key={`duplicate-${index}`}
              data={{ ...item, id: item.id }}
            />
          ))}
        </div>
      </div>

      <div className="md:hidden flex w-full  justify-center gap-[40%] mt-4 text-[#bd1e2d]">
        <button onClick={handleBackward} className="text-6xl rotate-180">
          <IoMdArrowRoundForward className="backdrop-blur-3x rounded-full" />
        </button>
        <button onClick={handleForward} className="text-6xl">
          <IoMdArrowRoundForward className="backdrop-blur-3x rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default UniversityCardList;
