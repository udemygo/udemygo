import React from "react";
import Link from "next/link";

const WhatSetsUsApart = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-100 p-8 md:p-16 rounded-xl my-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Sets us Apart
          </h2>
          <Link href={"/about"}>
            <button className="border border-gray-300 px-5 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2">
              About us ↗
            </button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Dark Grid */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-xl grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-1">Personal Mentorship</h4>
              <p className="text-sm">
                Enhanced learning experiences tailored to individual growth
                paths
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Handpicked Programs</h4>
              <p className="text-sm">
                Handpicked online MBA programs and career-focused certifications
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Collaborations</h4>
              <p className="text-sm">
                Collaborations with top-tier institutions and domain experts
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Flexibility</h4>
              <p className="text-sm">
                Learner-first design: flexible schedules, lifetime access, EMI
                options.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Real Support</h4>
              <p className="text-sm">
                Real people, real support: Our guidance doesn’t end after
                enrollment.
              </p>
            </div>
          </div>

          {/* Thriving Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="italic font-semibold text-lg mb-2">
              Why Learners Trust Udemygo.
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Curated curriculum, no fluff — only industry-relevant knowledge.
            </p>

            <h5 className="font-semibold mb-1">Mentorship that matters:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Our experts help you navigate your next step.</li>
              <li>Career-enhancing certifications that employers recognize</li>
            </ul>

            <h5 className="font-semibold mb-1">Outcomes</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>
                Testimonials from real students whose lives have transformed
                through online education.
              </li>
              <li>Excelling in your field of expertise.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image + Text */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="students"
                className="object-cover h-full w-full block"
              />
            </div>
            <div className="p-6">
              <h4 className="italic font-semibold mb-2">
                Strategic Career Consulting
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Your career goals, our expert roadmap.
              </p>

              <h5 className="font-semibold mb-1">What We Offer:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>
                  Profile Evaluation: Honest assessment of your academic and
                  professional background.
                </li>
                <li>
                  Goal Mapping: Personalized career pathways based on your
                  strengths, interests, and market demand.
                </li>
                <li>
                  Application Assistance: From SOPs to LORs — get support that
                  helps you stand out.
                </li>
              </ul>

              <h5 className="font-semibold mb-1">Why It Matters:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>
                  Make informed decisions that align with your long-term
                  ambitions.
                </li>
                <li>
                  Maximize your chances of admission into top-tier programs.
                </li>
              </ul>
            </div>
          </div>

          {/* Community Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="italic font-semibold mb-2">
              End-to-End Admission Support.
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              We stay with you — from inquiry to intake.
            </p>

            <h5 className="font-semibold mb-1">What We Do:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>
                University Shortlisting: Handpicked options that suit your goals
                and budget.
              </li>
              <li>
                Documentation Help: Leave the paperwork to us — we ensure
                accuracy and completeness.
              </li>
              <li>
                Global Reach: Admission support for universities across India,
                Canada, UK, Australia & more.
              </li>
            </ul>

            <h5 className="font-semibold mb-1">What You Get:</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Reduced stress, increased clarity.</li>
              <li>A smoother, faster journey into your dream university.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
