import React from "react";

export default function JobOpportunities() {
  const jobData = [
    { role: "Portfolio manager", salary: "3 LPA to 37.2 LPA" },
    { role: "Consultant", salary: "4.2 LPA to 25.3 LPA" },
    { role: "Business development manager", salary: "3.1 LPA to 15.8 LPA" },
    { role: "Security/investment analyst", salary: "3 LPA to 10.9 LPA" },
    { role: "Finance manager", salary: "3.5 LPA to 37 LPA" },
    { role: "Marketing Manager", salary: "2.2 LPA to 25.5 LPA" },
    { role: "Project manager", salary: "5 LPA to 30 LPA" },
    { role: "Management consultant", salary: "4.6 LPA to 37.5 LPA" },
    { role: "Investment banker", salary: "2.4 LPA to 52.3 LPA" },
    { role: "Business operations manager", salary: "4 LPA to 31.5 LPA" },
  ];

  return (
    <div className="w-full  flex justify-center items-center p-6">
      <div className=" p-4 md:p-8 bg-gray-50 w-full shadow-lg max-w-6xl rounded-2xl">
        <h3>
          <title>Job Opportunities after Online MBA</title>
          <meta
            name="description"
            content="Job opportunities and salary details after completing an online MBA"
          />
          <link rel="icon" href="/favicon.ico" />
        </h3>

        <main className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Job Opportunity after Online MBA
          </h1>

          <p className="text-sm md:text-base mb-4 text-slate-700">
            Aspirants can take several job opportunities from the online MBA
            course, thereof, there are several job roles available with their
            estimated data, get through it in detail.
          </p>

          <p className="text-xs md:text-sm mb-6 text-slate-500 italic">
            *The salary is estimated which data can be driven from the Naukri or
            Glassdoor.
          </p>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-blue-900 text-white p-3 text-left text-sm md:text-base border border-blue-800">
                    Job Roles after Online MBA course
                  </th>
                  <th className="bg-blue-900 text-white p-3 text-left text-sm md:text-base border border-blue-800">
                    Wages in INR (annually)
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <tr
                    key={job.role}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3 text-sm md:text-base border border-gray-200 text-blue-800 font-medium">
                      {job.role}
                    </td>
                    <td className="p-3 text-sm md:text-base border border-gray-200">
                      {job.salary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
