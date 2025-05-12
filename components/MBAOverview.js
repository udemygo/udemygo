// MBAOverview.jsx
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const MBAOverview = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 rounded-3xl">
      {/* Table */}
      <div className="overflow-x-auto border rounded-lg mb-6 md:mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white overflow-hidden *:text-xs sm:*:text-sm *:tracking-wide *:text-center">
              <th className="p-1 sm:p-2 border-r border-gray-300 font-medium text-left">
                No. of Universities
              </th>
              <th className="p-1 sm:p-2 border-r border-gray-300 font-medium text-left">
                Course Duration
              </th>
              <th className="p-1 sm:p-2 border-r border-gray-300 font-medium text-left">
                Eligibility
              </th>
              <th className="p-1 sm:p-2 border-r border-gray-300 font-medium text-left">
                Learning Mode
              </th>
              <th className="p-1 sm:p-2 border-gray-300 font-medium text-left">
                EMI Facility
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white *:text-xs sm:*:text-sm *:tracking-wide *:text-center">
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">
                21
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">
                2 Years
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">
                Graduation or Equivalent
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">
                Online
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-gray-300">
                Available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Overview Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Online MBA Program Overview
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">
          The online Master of Business Administration program dives into
          critical areas like business analytics, health administration,
          leadership, networking, organizational behavior, problem-solving,
          business ethics, interpersonal skills, management consulting, time
          management, and managerial economics. These skills pave the way for
          higher earnings, career growth, enhanced expertise, and a broader
          global outlook. Pursuing an online MBA could be a life-changing step
          toward your best career yet—explore where it&#39;s headed, why
          it&#39;s worth it, and more on this page.
        </p>
      </div>

      {/* Future Section */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Present and Future of Distance Learning MBA Courses?
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">
      Online MBA courses will grow more engaging and reachable. Online tools will offer tailored, interactive learning, with virtual setups mimicking real business challenges. The flexibility will suit busy professionals, and global platforms will boost teamwork across borders, readying students for a linked world.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">
          The future of online MBAs will focus on equipping leaders with skills for a dynamic global economy. Expect immersive learning through cutting-edge tech, continuous education via micro-credentials, and curricula emphasizing innovation and adaptability. Online MBAs will remain a top choice for career growth and global competitiveness.
        </p>
      </div>

      {/* Image Section */}
      <div className="px-2 sm:px-4 md:px-8 py-2">
        <div className="relative w-full h-fit sm:h-64 md:h-80 lg:h-96 ">
          <Image
            src={"/assets/mbaBannerOverview.webp"}
            
            width={1080}
            height={400}
            priority
            className="object-contain rounded-lg w-full h-full"
            alt="MBA Overview"
          />
        </div>
      </div>
      {/* contact button */}
      <div className=" w-full p-4 max-w-6xl flex justify-center items-center rounded-2xl mt-2 bg-gradient-to-bl from-white to-slate-50 shadow-lg shadow-slate-200">
        <a
          href="tel:+91 8104550586"
          className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-tr from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:scale-105"
        >
          <span className="  p-2 rounded-full">
            <Phone size={24} color="#ffff" />
          </span>
          <span className="text-white text-base font-semibold capitalize ">
            Contact for free consult
          </span>
        </a>
      </div>
      {/* ................... */}
      <div className="rounded-lg pt-4 my-6 md:my-8 pb-6 md:pb-8">
       
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Benefits of Online MBA?
        </h3>
        <ul className="flex flex-col gap-1 list-disc pl-4 md:pl-6">
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">
              Broader Industry Knowledge
            </strong>{" "}
            : Gain insights into business operations across various sectors.
          </li>
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">Entrepreneurial Skills</strong> :
            Build valuable tools and ideas to start your own venture.
          </li>
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">Networking Opportunities</strong>{" "}
            : Connect with alumni and industry pros for future growth.
          </li>
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">
              Fostering Personal Development
            </strong>{" "}
            : Grow as a leader and thinker.
          </li>
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">Higher Earning Potential</strong>{" "}
            : Boost your income with specialized skills.
          </li>
          <li className="text-gray-500 text-sm sm:text-base">
            <strong className="text-gray-700">Leadership Roles</strong> : Unlock
            doors to managerial and executive positions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MBAOverview;
