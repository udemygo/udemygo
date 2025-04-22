import React from "react";
import { IoWalletOutline } from "react-icons/io5";

export default function MBAProgramFees() {
  const universityFees = [
    {
        name: "NMIMS Online MBA",
        fees: "INR 2.20 lakhs",
        details: [
          "Registration fees: INR 1200",
          "Yearly fees: INR 1,05,000",
          "Semester-wise fees: INR 55,000",
        ],
      },
      {
        name: "Amity University Online MBA",
        fees: "INR 1.99 lakhs",
        details: [
          "Semester-wise fees: INR 49,750",
          "Full program fees: INR 1.99 lakhs",
        ],
      },
      {
        name: "Jain University Online MBA",
        fees: "INR 1.98 lakhs",
        details: [
          "Semester-wise fees: INR 49,000",
          "Registration fees: INR 2,500",
          "Yearly exam fees: INR 3,000",
        ],
      },
      {
        name: "DY Patil University Online MBA",
        fees: "INR 1.89 lakhs",
        details: [
          "Semester 1 & 2 fees: INR 50,000",
          "Semester 3 fees: INR 45,000",
          "Semester 4 fees: INR 44,000",
        ],
      },
      {
        name: "OP Jindal Global University Online MBA",
        fees: "INR 1.80 lakhs",
        details: [
          "Full program fees: INR 1.80 lakhs",
        ],
      },
      {
        name: "UPES Online MBA",
        fees: "INR 1.75 lakhs",
        details: [
          "Semester-wise fees: INR 43,750",
          "Full program fees: INR 1.75 lakhs",
        ],
      },
      {
        name: "LPU Online MBA",
        fees: "INR 1.31 lakhs",
        details: [
          "Registration fee (One time): INR 600",
          "Per semester fee: INR 36,400",
        ],
      },
      {
        name: "Liverpool John Moores Online MBA",
        fees: "INR 4.85 lakhs",
        details: [
          "Full payment fee: INR 4.85 lakhs",
        ],
      },
      {
        name: "SRM University Online MBA",
        fees: "INR 1.70 lakhs",
        details: [
          "Semester-wise program fees: INR 42,500",
        ],
      },
      {
        name: "DY Patil Vidyapeeth Navi Mumbai Online MBA",
        fees: "INR 1.70 lakhs",
        details: [
          "Semester-wise program fees: INR 42,500",
        ],
      },
      {
        name: "Amrita University Online MBA",
        fees: "INR 1.70 lakhs",
        details: [
          "Semester-wise program fees: INR 42,500",
          "Exam fees (semester-wise): INR 2500",
          "Registration fees (one time): INR 500",
        ],
      },
      {
        name: "Chandigarh University Online MBA",
        fees: "INR 1.58 lakhs",
        details: [
          "Semester-wise program fees: INR 39,500",
        ],
      },
      {
        name: "Parul University Online MBA",
        fees: "INR 1.50 lakhs",
        details: [
          "Semester-wise fees: INR 37,500",
          "Full fee (one time): INR 90,000",
          "Yearly fees: INR 55,000",
          "Full fee (annually): INR 1.10 lakhs",
        ],
      },
      {
        name: "Sikkim Manipal University Online MBA",
        fees: "INR 1.10 lakhs",
        details: [
          "Semester-wise program fees: INR 27,500",
          "Application fees: INR 500",
        ],
      },
  ];

  const benefits = [
    "Get personalized support via sessions & networking sessions",
    "One-on-One career guidance sessions",
    "Ensures timely delivery of LMS & degree",
    "A career advisor for life",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Program Fees for Online MBA
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Benefits Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 lg:w-1/4 h-fit">
          <h3 className="font-bold text-lg mb-4">
            Benefits of learning from us
          </h3>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-0.5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Fees Section */}
        <div className="flex-1">
          {/* Top Blue Box */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl p-5 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <div>
                <p className="text-lg font-medium">Starting at ₹ 8,775/month</p>
                <p className="text-sm">Program Fee: ₹80,000 - ₹4,00,000</p>
              </div>
              <button onClick={()=>{window.scrollTo(0,0)}} className="mt-3 cursor-pointer md:mt-0 bg-white text-blue-600 font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition">
                Apply Now
              </button>
            </div>
          </div>

          <div className=" bg-white rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between  w-full p-3 py-4 bg-slate-400/10">
              <span className=" flex justify-center items-center gap-2 fontsemibold text-lg text-slate-500">
                <IoWalletOutline />
                Low Cost EMI</span>
              <span className=" flex gap-2 fontsemibold text-sm  px-4 py-2 rounded-lg bg-yellow-500 text-slate-900 cursor-no-drop">Recommended</span>
            </div>
            <div className="p-4">
              {/* Info Text */}
              <div className="mb-6 ">
                <p className="text-[16px] mb-2">
                  The online MBA course{" "}
                  <span className="text-blue-600 font-medium">
                    will charge around INR 3 Lakhs to INR 14 Lakhs
                    internationally and in India.
                  </span>{" "}
                  However, this is a general program fee, as several
                  universities offer this program at different costs.
                </p>
                <p className="font-medium mb-2">
                  Students can pay the fees throughout the payment cycle:
                </p>
                <ul className="list-disc ml-6 text-sm">
                  <li>One-time payment option available</li>
                  <li>Allowed to pay semester-wise</li>
                  <li>Annual payments are also allowed</li>
                  <li>EMI options are available</li>
                </ul>
              </div>

              {/* University Fees Comparison Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <h4 className="text-center font-bold py-3 bg-blue-900 text-white">
                  Fees Comparison between Top Universities that offer online MBA
                  Courses:
                </h4>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">
                          List of Universities
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-medium">
                          Course Fees
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium">
                          Detailed Fee Structure
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {universityFees.map((university, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-blue-50" : "bg-white"
                          }
                        >
                          <td className="px-4 py-3 text-sm text-blue-600">
                            {university.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-center">
                            {university.fees}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <ul className="list-disc ml-4">
                              {university.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
