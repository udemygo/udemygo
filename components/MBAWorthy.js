"use client";

import Image from "next/image";

export default function MBAWorthy() {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4">
      <div className="max-w-6xl w-full bg-white p-6  rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Is Online MBA Worth it?</h2>
        <p className="text-gray-700 mb-4">
          An online MBA can be a game-changer based on your goals. Here’s why:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
          <li>
            <strong>Convenience:</strong> : Study anytime, fitting your
            schedule.
          </li>
          <li>
            <strong>Global Reach:</strong> Access top universities worldwide without moving.
          </li>
          <li>
            <strong>Lower Costs:</strong> : Save on travel and living expenses
          </li>
          <li>
            <strong>Study While Working:</strong> Apply skills to your job instantly.
          </li>
          <li>
            <strong>Leadership and Managerial Skills:</strong> Gain tools to advance or switch careers.
          </li>
          <li>
            <strong>Specializations:</strong> : Focus on fields like finance or analytics.
          </li>
          <li>
            <strong>Innovative Learning Methods:</strong> Enjoy interactive tech-driven education.
          </li>
          <li>
            <strong>Increased Earning Potential:</strong> Open doors to better pay and roles.
          </li>
        </ul>
        <div className="mt-4 flex justify-center">
          <Image
            src={"/assets/DemandMBAbanner.webp"}
            width={700}
            height={400}
            alt="DemandMBAbanner"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}