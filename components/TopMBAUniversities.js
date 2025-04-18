// TopMBAUniversities.jsx
import React from "react";
import Link from "next/link";

const TopMBAUniversities = () => {
  const universities = [
    {
      name: "NMIMS Online",
      link: "NMIMS Online",
      accreditations: "UGC-DEB | NIRF | NAAC A+",
    },
    {
      name: "Amity University Online",
      link: "Amity University Online",
      accreditations:
        "UGC-DEB | AICTE | AIU | NIRF | WES | QS World University Rankings | DEC",
    },
    {
      name: "Jain University Online",
      link: "Jain University Online",
      accreditations:
        "UGC | AICTE | AIU | NIRF | WES | NAAC A++ | QS World University Rankings | AUAP",
    },
    {
      name: "DY Patil University Online",
      link: "DY Patil University Online",
      accreditations: "UGC-DEB | AICTE | AIU | NIRF | WES | NAAC A++ | ISO",
    },
    {
      name: "OP Jindal Global University Online",
      link: "OP Jindal Global University Online",
      accreditations: "UGC | AIU | NAAC A | AACSB | QS World",
    },
    {
      name: "UPES Online",
      link: "UPES Online",
      accreditations: "UGC-DEB | NIRF | NAAC A | QS World University Rankings",
    },
    {
      name: "LPU Online",
      link: "LPU Online",
      accreditations: "UGC-DEB | AICTE | AIU | NIRF | WES | NAAC A++",
    },
    {
      name: "Liverpool John Moores University",
      link: "Liverpool John Moores University",
      accreditations: "WES | AACSB | Privy Council Accredited",
    },
    {
      name: "SRM University Online - Sikkim",
      link: "SRM University Online - Sikkim",
      accreditations: "UGC | AICTE | NAAC A+ | ISO",
    },
    {
      name: "DY Patil Vidyapeeth Navi Mumbai Online",
      link: "DY Patil Vidyapeeth Navi Mumbai Online",
      accreditations: "UGC | AICTE | NIRF | NAAC A++",
    },
    {
      name: "Amrita University Online",
      link: "Amrita University Online",
      accreditations: "UGC | AICTE | NIRF | WES | NAAC A++",
    },
    {
      name: "Chandigarh University Online",
      link: "Chandigarh University Online",
      accreditations:
        "UGC-DEB | AICTE | NIRF | WES | NAAC A+ | ACCA | QS World University Rankings",
    },
    {
      name: "Parul University Online",
      link: "Parul University Online",
      accreditations: "UGC | NIRF | NAAC A++",
    },
    {
      name: "Sikkim Manipal University Online",
      link: "Sikkim Manipal University Online",
      accreditations: "UGC-DEB | NIRF | NAAC A+",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 px-0 *:rounded-xl *:overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse *:**:text-sm">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="text-center p-4 font-semibold" colSpan="2">
                Top Universities of Online MBA Courses
              </th>
            </tr>
            <tr className="bg-gray-50">
              <th className="p-4 text-left border border-gray-200">
                Universities (online MBA Course)
              </th>
              <th className="p-4 text-left border border-gray-200">
                Universities Accreditations
              </th>
            </tr>
          </thead>
          <tbody>
            {universities.map((university, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
              >
                <td className="p-4 border border-gray-200 text-blue-600 hover:underline cursor-pointer">
                  {university.name}
                </td>
                <td className="p-4 border border-gray-200">
                  {university.accreditations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopMBAUniversities;
