import React from "react";
import { Puzzle, SignpostBig, Wallet } from "lucide-react";
import Process from "./Home/Process";

export default function MBAAdmissionProcedure() {
  const features = [
    {
      title: "Trusted Information",
      description:
        "We share verified university details to keep you safe from scams.",
      icon: <Puzzle className="h-10 w-10 text-white" />,
    },
    {
      title: "Hassle-Free Admission Process",
      description: "UdemyGo Expert counselors simplify your admission.",
      icon: <SignpostBig className="h-10 w-10 text-white" />,
    },
    {
      title: "Pay Directly to the University",
      description: "Our free guidance means you pay the university directly.",
      icon: <Wallet className="h-10 w-10 text-white" />,
    },
  ];

  return (
    <div className="bg-blue-900 text-white py-12 px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">
          Online MBA Admission Procedure
        </h3>

        <p className="mb-8">
          Learn the online MBA course admission process for enrolling in the
          online MBA course at any university, get through the down steps;
        </p>

        <ul className="list-none space-y-2 mb-12">
          <li className="flex items-start">
            <div className="min-w-4 h-4 mt-1.5 mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Visit the university’s website.
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 mt-1.5 mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Log in or create an account.
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 mt-1.5 mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Select the program and enter your details.
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 mt-1.5 mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Register and proceed to payment.
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 mt-1.5 mr-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Pay the fees and get confirmation via email or phone.
          </li>
        </ul>

        {/* Process component */}
        <Process />

        {/* Features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-800 p-6 rounded-lg flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
