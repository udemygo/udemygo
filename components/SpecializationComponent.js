"use client";

import { useState, useEffect } from "react";

export default function SpecializationComponent() {
  const specializations = [
    { name: "Advertising and Branding (Dual)" },
{ name: "Agri-Business Management" },
{ name: "AI and Machine Learning (Dual)" },
{ name: "Aviation Management" },
{ name: "Banking & Finance Management" },
{ name: "Banking and Insurance" },
{ name: "Banking Financial Services & Insurance-BFSI" },
{ name: "Biotechnology Management" },
{ name: "Blockchain Management" },
{ name: "Business Analytics" },
{ name: "Business and Corporate Laws" },
{ name: "Business Intelligence & AI (Dual)" },
{ name: "Business Intelligence And Analytics (Dual)" },
{ name: "Business Management" },
{ name: "Customer Relationship Management" },
{ name: "Cyber Security" },
{ name: "Data Analytics" },
{ name: "Data Science" },
{ name: "Data Science and Analytics (Dual)" },
{ name: "Digital Entrepreneurship" },
{ name: "Digital Finance" },
{ name: "Digital Marketing" },
{ name: "Digital Marketing E Commerce (Dual)" },
{ name: "Direct Selling Management" },
{ name: "Disaster Management" },
{ name: "Educational Administration" },
{ name: "Energy Management" },
{ name: "Entrepreneurship and Leadership (Dual)" },
{ name: "Event and Media Management" },
{ name: "Export and Import Management" },
{ name: "Family-Managed Business" },
{ name: "Fashion Management" },
{ name: "Finance and Accounting (Dual)" },
{ name: "Finance And Leadership Management (Dual)" },
{ name: "Finance Management" },
{ name: "Financial Markets Management" },
{ name: "Fintech Management" },
{ name: "Food Technology Management" },
{ name: "Forensic Accounting & Corporate Fraud Investigation" },
{ name: "General Management" },
{ name: "Generative AI" },
{ name: "Healthcare Management" },
{ name: "Hospital Administration" },
{ name: "Hospital Administration & Healthcare (Dual)" },
{ name: "Hospitality Management" },
{ name: "HR Analytics" },
{ name: "HR Management" },
{ name: "HRM and Finance (Dual)" },
{ name: "Infrastructure Management" },
{ name: "Integrated Marketing" },
{ name: "International Business Management" },
{ name: "International Finance Management" },
{ name: "International Finance With ACCA" },
{ name: "International Marketing Management" },
{ name: "International Trade Management" },
{ name: "Investment Banking Equity Research Management" },
{ name: "IT and FinTech (Dual)" },
{ name: "IT Management" },
{ name: "Leadership and Strategy (Dual)" },
{ name: "Logistics And Supply Chain (Dual)" },
{ name: "Management Information System" },
{ name: "Marketing And Finance Management (Dual)" },
{ name: "Marketing And HR Management (Dual)" },
{ name: "Marketing and Sales (Dual)" },
{ name: "Marketing Management" },
{ name: "Oil and Gas Management (Dual)" },
{ name: "Operations Management" },
{ name: "Personnel and HR Management" },
{ name: "Pharmaceutical Management" },
{ name: "Power Management" },
{ name: "Production and Operation (Dual)" },
{ name: "Project Management" },
{ name: "Public Policy" },
{ name: "Quality Management" },
{ name: "Real Estate Management" },
{ name: "Retail Management" },
{ name: "Sports Management" },
{ name: "Strategic Finance (Accredited by CPA, US + CMA, US)" },
{ name: "Strategic Finance Management" },
{ name: "Strategic HR Management" },
{ name: "Strategic Marketing" },
{ name: "Supply Chain Management" },
{ name: "System And Operations Management (Dual)" },
{ name: "Technical Writing in Business Management" },
{ name: "Tourism Management" },
{ name: "Waste Management" },
{ name: "Wealth Management" },

  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Top Specializations for Online MBA in 2025</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specializations.map((spec, index) => (
          <div
            key={index}
            className="bg-white p-4 cursor-pointer rounded-lg shadow flex items-center justify-between hover:bg-gray-100 transition"
          >
            <span className="text-gray-800">{spec.name}</span>
            <span className="text-green-500">⦿</span>
          </div>
        ))}
      </div>
    </div>
  );
}