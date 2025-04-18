"use client";

import Image from "next/image";
import React from "react";

const EMILoan = () => {
  return (
    <div className="w-full border bg-blue-900">
      <div className=" text-white max-w-6xl mx-auto p-6">
        <h4 className="text-2xl font-bold mb-4">
          Education Loan/EMI Facilities for Online MBA
        </h4>
        <p className="mb-4">
          Pursuing an Online MBA is now financially stress-free with No-Cost EMI
          options and tailored payment plans. Most universities partner with
          banks and NBFCs to offer:
        </p>
        <ul className="text-white/90 text-sm pb-2 *:tracking-wide ml-4">
          <li className="list-disc"><strong>Zero-Interest EMI</strong>: Split fees into monthly installments starting at ₹7875/month (e.g. Amity, Jain universities).</li>
          <li className="list-disc"><strong>Employer Sponsorship</strong>: Many companies like TCS, Infosys, and Amazon fund MBA programs for employees.</li>
          <li className="list-disc"><strong>Education Loans</strong>: Avail loans at competitive rates from SBI, HDFC, or Axis Bank.</li>
        </ul>
        <div className="flex space-x-4 mb-6 *:cursor-pointer *:text-sm *:transition-all *:duration-300 *:ease-in-out">
          <button onClick={()=>{window.scrollTo(0,0)}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply For No Cost EMI
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4 ">
          <div className="bg-white text-blue-900 p-2 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan1.webp"
              alt="Liqui Loans"
              className="h-10 object-contain"
            />
          </div>
          <div className="bg-white text-blue-900 p-2 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan2.webp"
              alt="Early Salary"
              className="h-10 object-contain"
            />
          </div>
          <div className="bg-white text-blue-900 p-2 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan3.webp"
              alt="eduVanz"
              className="h-10 object-contain"
            />
          </div>
          <div className="bg-white text-blue-900 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan4.webp"
              alt="FinancePeer"
              className="h-10 object-contain"
            />
          </div>
          <div className="bg-white text-blue-900 p-2 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan5.svg"
              alt="Propelld"
              className="h-10 object-contain"
            />
          </div>
          <div className="bg-white text-blue-900 p-2 rounded flex items-center justify-center">
            <Image
              width={500}
              height={300}
              src="/loans/loan6.svg"
              alt="Propelld"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMILoan;
