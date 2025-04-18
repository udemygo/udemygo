// MBAOverview.jsx
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
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">21</td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">2 Years</td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">
                Graduation or Equivalent
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-r border-gray-300">Online</td>
              <td className="px-2 sm:px-4 py-3 sm:py-5 border-gray-300">Available</td>
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

          toward your best career yet—explore where it&#39;s headed, why it&#39;s worth

          it, and more on this page.
        </p>
      </div>

      {/* Future Section */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Where Online MBA Courses be in 2050?
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">

          Online MBA courses are growing fast, and by 2050, they&#39;re expected to

          be more immersive and widely accessible. Imagine learning through
          advanced tech like virtual reality (VR) and artificial intelligence
          (AI), tailored to your needs, with a focus on future-ready skills like
          sustainability, data analytics, and ethical leadership. Expect
          features like VR classrooms, AI-driven personal study plans, global
          teamwork, and real-world case studies. Specializations such as
          Operations Management, Finance, HR, Marketing, Business Analytics, and
          Digital Marketing will dominate, offering top-tier opportunities.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">
          The Graduate Management Admission Council (GMAC) notes MBA graduates

          already earn significantly more than bachelor&#39;s holders, a gap

          projected to exceed 77% in 25 years. By 2050, an online MBA could be
          your smartest move for landing leadership roles and boosting your
          salary. Check current in-demand roles and pay scales on Pay-scale for
          a sneak peek.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="px-2 sm:px-4 md:px-8 py-2">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
          <Image
            src={"/assets/mbaBannerOverview.webp"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1080px"
            priority
            className="object-cover rounded-lg"
            alt="MBA Overview"
          />
        </div>
      </div>
      
      <div className="rounded-lg pt-4 my-6 md:my-8 pb-6 md:pb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Why an Online MBA Course?
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-5">

          With countless courses out there, why pick an online MBA? It&#39;s all

          about what it offers: flexibility, affordability, and career impact.
          To see how it benefits aspirants, check out the points below
        </p>
        <h4 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Benefits of Online MBA?
        </h4>
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