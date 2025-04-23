"use client";

import MBAProgramFees from "./MBAProgramFees";

export default function MBADuration() {
  return (
    <>
      <div className=" flex items-center justify-center py-12 px-4 ">
        <div className="max-w-6xl w-full bg-white  rounded-lg p-6">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Online MBA Eligibility & Duration
          </h3>
          <p className="text-center mb-6">
            Get through the online MBA course Eligibility before enrolling, and
            when it’s completed, throughout the down mentioned requirements and
            its duration, read it merely.
          </p>

          <div className="mb-6">
            <span className="text-xl font-semibold mb-2">
              Requirements which necessitate for online MBA Course:
            </span>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Having a graduation degree with scoring more than 50% marks in
                any discipline
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                It’s not mandatory to have any work experience but having it
                must be useful and impactful in understanding or getting the
                best opportunities.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                For learning the online MBA course, not all colleges require the
                CAT, MAT, XAT, or GMAT exams but some will.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Duration of the Online MBA Course:
            </h3>
            <p className="text-gray-700">
              The online Master of Business Administration course can be
              completed within 24 months. It is offered at most universities at
              a reasonable cost, and students can enroll twice as per the UGC
              guidelines.
            </p>
          </div>
        </div>
      </div>
      <MBAProgramFees />
    </>
  );
}
