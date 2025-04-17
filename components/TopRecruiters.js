"use client";
import Image from "next/image";
import { useState } from "react";

export default function TopRecruiters() {
  // Data for recruiters table
  const recruiters = [
    { company: "ICICI Lombard", salary: "3.9 lakhs to 44.2 lakhs" },
    { company: "Mphasis", salary: "2 lakhs to 10.5 lakhs" },
    { company: "Airtel", salary: "4.5 lakhs to 22.2 lakhs" },
    { company: "IndiaMART", salary: "3.2 lakhs to 15.9 lakhs" },
    { company: "NFT", salary: "2.5 lakhs to 39.3 lakhs" },
    { company: "Colforge", salary: "24.5 lakhs to 44.2 lakhs" },
    { company: "InfoTech", salary: "10 lakhs to 31.5 lakhs" },
    { company: "Maruti Suzuki", salary: "2.2 lakhs to 11.7 lakhs" },
    { company: "EY", salary: "0.7 lakhs to 29 lakhs" },
    { company: "Teleperformance", salary: "1.2 lakh to 8 lakhs" },
    { company: "Genpact", salary: "1.5 lakhs to 12 lakhs" },
    { company: "Amazon", salary: "1.5 lakhs to 34 lakhs" },
    { company: "Accenture", salary: "2 lakhs to 10.8 lakhs" },
  ];

  // Companies logos for "Our students work at" section
  const companies = [
    { name: "ICICI Bank", logo: "/loans/icici.webp" },
    { name: "Amazon", logo: "/loans/amazon.webp" },
    { name: "Cognizant", logo: "/loans/cognizant.webp" },
    { name: "Deloitte", logo: "/loans/deloitte.webp" },
    { name: "Infosys", logo: "/loans/infosys.webp" },
    { name: "Paytm", logo: "/loans/paytm.webp" },
    { name: "Wipro", logo: "/loans/wipro.webp" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 rounded-2xl">
      <h1 className="text-xl md:text-2xl font-bold mb-3">
        Top Recruiters for Online MBA
      </h1>

      <p className="text-sm md:text-base mb-4">
        Multiple top recruiters of the top MNCs in India and abroad can hire
        online MBA course graduates and offer higher packages. However, there is
        a top company list that provides good salary packages yearly to the
        Online MBA course degree pursuer, get through it.
      </p>

      <p className="text-xs md:text-sm italic mb-6">
        *The below Jobs or Companies portal can cover the salary data range or
        top companies who hire the online MBA course pursuer.
      </p>

      {/* Table for recruiters */}
      <div className="overflow-x-auto mb-8 rounded-xl overflow-hidden p1">
        <table className="w-full border-collapse rounded-xl">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-3 py-2 text-left text-xs md:text-sm">
                Top MNCs hire the online MBA course pursuer
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-xs md:text-sm">
                Salary Packages (yearly) (in INR)
              </th>
            </tr>
          </thead>
          <tbody>
            {recruiters.map((recruiter, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm text-blue-600 font-medium">
                  {recruiter.company}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-xs md:text-sm">
                  {recruiter.salary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Our students work at section */}
      <h2 className="text-lg md:text-xl font-medium mb-4">
        Our students work at
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white rounded-md border border-gray-200 p-3 w-full flex items-center justify-center h-16 cursor-pointer hover:scale-105 transition-all duration-150 ease-in">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={100}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
            <p className="text-xs text-center mt-1">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
