"use client";
import Question from "@/components/Home/Question";
import { privacyPolicyQuestions } from "@/components/homeQuestions";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      content: (
        <div>
          <p className="mb-2">
            We may collect the following information when you interact with our
            website:
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-1">a. Personal Information:</h4>
            <ul className="list-disc pl-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Educational qualifications</li>
              <li>Preferences for courses or universities</li>
              <li>Payment information (when applicable)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">
              b. Automatically Collected Data:
            </h4>
            <ul className="list-disc pl-6">
              <li>IP address</li>
              <li>Device and browser information</li>
              <li>Usage data (e.g., page views, time on site)</li>
              <li>Referral URLs and clickstream behavior</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="mb-2">Your information helps us:</p>
          <ul className="list-disc pl-6">
            <li>Recommend personalized courses and programs</li>
            <li>Provide educational counseling and guidance</li>
            <li>Process transactions and send confirmations</li>
            <li>Improve website content and user experience</li>
            <li>
              Communicate with you regarding updates, offers, and services
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Cookies and Tracking Technologies",
      content: (
        <div>
          <p className="mb-2">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6">
            <li>Understand how users interact with our site</li>
            <li>Remember your preferences</li>
            <li>Show relevant educational content and ads</li>
          </ul>
          <p className="mt-2">
            You can manage cookie settings in your browser at any time.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Sharing Your Information",
      content: (
        <div>
          <p className="mb-2">
            We do not sell your personal information. However, we may share it
            with:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Partner universities or educational institutions (for admission
              guidance)
            </li>
            <li>
              Trusted third-party service providers (e.g., analytics, payment
              gateways)
            </li>
            <li>Government or law enforcement (only when required by law)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title: "Data Security",
      content: (
        <p>
          We implement appropriate security measures to protect your personal
          data. Despite our best efforts, no online system is completely secure,
          so we encourage responsible online behavior.
        </p>
      ),
    },
    {
      id: 6,
      title: "Your Rights",
      content: (
        <div>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access and update your information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="mt-2">
            To exercise your rights, contact us at: info@udemygo.com
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Children's Privacy",
      content: (
        <p>
          Udemygo is not intended for users under the age of 13. We do not
          knowingly collect data from minors. If we learn that we have, we will
          delete it immediately.
        </p>
      ),
    },
    {
      id: 8,
      title: "Third-Party Links",
      content: (
        <p>
          Our website may link to external websites. We are not responsible for
          their privacy practices, and we encourage you to review their policies
          before submitting any data.
        </p>
      ),
    },
    {
      id: 9,
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy periodically. All updates will be
          posted on this page with the revised date. Continued use of our site
          means you accept these changes.
        </p>
      ),
    },
    {
      id: 10,
      title: "Contact Us",
      content: (
        <div>
          <p>Eduomni Learning Pvt. Ltd.</p>
          <p>Email: info@udemygo.com</p>
          <p>Website: https://udemygo.com</p>
        </div>
      ),
    },
  ];

  return (<>
    <div className="bg-white rounded-2xl pt-32">
      {/* Social icons sidebar */}
      <div className="hidden lg:flex flex-col fixed right-0 top-1/3 bg-transparent">
        <a
          href="#"
          className="bg-orange-500 text-white p-3 rounded-l-lg mb-2 hover:bg-orange-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-orange-500 text-white p-3 rounded-l-lg mb-2 hover:bg-orange-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.225 0h-20.45c-.975 0-1.775.8-1.775 1.775v20.45c0 .975.8 1.775 1.775 1.775h20.45c.975 0 1.775-.8 1.775-1.775v-20.45c0-.975-.8-1.775-1.775-1.775zm-14.5 7.24h3.33v2.205h-3.33v-2.205zm0 4.15h3.33v2.205h-3.33v-2.205zm0 4.15h3.33v2.205h-3.33v-2.205zm-3.33-8.3h2.205v2.205h-2.205v-2.205zm0 4.15h2.205v2.205h-2.205v-2.205zm0 4.15h2.205v2.205h-2.205v-2.205zm12.735 3.33h-8.3v-8.3h8.3v8.3zm0-9.425h-8.3v-8.3h8.3v8.3z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-orange-500 text-white p-3 rounded-l-lg mb-2 hover:bg-orange-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-orange-500 text-white p-3 rounded-l-lg hover:bg-orange-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-bl from-purple-500 to-blue-500 px-6 py-8 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-gray-200">
              <div className="flex items-center">
                <span className="mr-2">Effective Date:</span>
                <span className="font-medium">April 15, 2025</span>
              </div>
              <span className="hidden sm:inline mx-3">•</span>
              <div className="flex items-center mt-1 sm:mt-0">
                <span className="mr-2">Last Updated:</span>
                <span className="font-medium">April 15, 2025</span>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <p className="text-gray-700 mb-6">
              At Udemygo, a platform operated by Eduomni Learning Pvt. Ltd., we
              are committed to protecting your personal information and
              respecting your privacy. This Privacy Policy outlines how we
              collect, use, share, and safeguard the data you provide while
              using our website https://udemygo.com.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-4">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors duration-150"
                    >
                      <span className="flex items-center">
                        <span className="bg-orange-500 text-white text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          {section.id}
                        </span>
                        <span className="font-medium text-gray-800">
                          {section.title}
                        </span>
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          activeSection === section.id
                            ? "transform rotate-180"
                            : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeSection === section.id && (
                      <div className="p-4 bg-white text-gray-700 border-t border-gray-200">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Have questions about our privacy practices?
              </p>
              <div className="flex space-x-4">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
                  className="inline-flex items-center px-4 py-2 cursor-pointer border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-800"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </a>
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center cursor-pointer px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* <div className="bg-black px-6 py-4 text-center text-white">
            <p>
              © {new Date().getFullYear()} UdemyGo - Eduomni Learning Pvt. Ltd.
              All rights reserved.
            </p>
          </div> */}
        </div>
      </div>
    </div>
    <Question questions={privacyPolicyQuestions} />
    </>
  );
}
