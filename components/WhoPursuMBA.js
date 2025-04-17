import React from "react";
import TopMBAUniversities from "./TopMBAUniversities";

const WhoPursuMBA = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4 pt-0">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
          Who should pursue an Online MBA Course?
        </h3>
        <p className="text-gray-700 mb-5 ml-1">
          Wondering if an online MBA fits you? Here’s who it’s perfect for:
        </p>
        <ul className="pb-4 *:mb-1">
          <li className="text-gray-500 list-disc ml-12">
            Busy Working Professionals
          </li>
          <li className="text-gray-500 list-disc ml-12">
            People in Remote Locations
          </li>
          <li className="text-gray-500 list-disc ml-12">
            Geographically Restricted Individuals
          </li>
          <li className="text-gray-500 list-disc ml-12">Entrepreneurs</li>
          <li className="text-gray-500 list-disc ml-12">
            Those Seeking Career Changes
          </li>
          <li className="text-gray-500 list-disc ml-12">
            Individuals with Time Constraints
          </li>
          <li className="text-gray-500 list-disc ml-12">
            Cost-Conscious Learners
          </li>
        </ul>
        {/* h3-Where should I get the Online MBA Course? */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
          Where should I get the Online MBA Course?
        </h3>
        <p className="text-gray-700 mb-5 ml-1">
          India boasts several universities and institutes offering online MBA
          courses at affordable rates. Picking the right one can be tough, but
          top options provide quality education and flexibility—research to find
          your best match with{" "}
          <a
            href="https://udemygo.com"
            target="_blank"
            className="text-blue-400"
          >
            udemygo.com
          </a>
        </p>
        {/* h4-Top Affordable Universities for Online MBA Courses */}
        <h4 className="text-xl font-bold text-gray-800 mb-4 ">
          Top Affordable Universities for Online MBA Courses
        </h4>
        <p className="text-gray-700 mb-5 ml-1">
          Top Universities of Online MBA Courses
        </p>
{/* table of universities */}
<TopMBAUniversities />

      </div>
    </>
  );
};

export default WhoPursuMBA;
