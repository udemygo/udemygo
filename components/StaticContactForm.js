import { useState } from 'react';
import Head from 'next/head';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';

export default function StaticContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    degree: ''
  });
  
  const [isOpen, setIsOpen] = useState(true);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const degrees = [
    "Select Degree",
    "Bachelor's",
    "Master's",
    "Ph.D.",
    "Associate's",
    "High School"
  ];

  if (!isOpen) return null;
  
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 ">
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Contact Form with Early-Bird Discount" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Close button */}
        {/* <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
        >
          <FaTimes size={20} />
        </button> */}
        
        {/* Modal Content */}
        <div className="p-6 pt-8 pb-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-2">Contact Us</h2>
          <div className="text-center mb-6">
            <span className="text-2xl font-semibold">
              <span className="text-red-500">Avail </span>
              <span className="text-yellow-500">Early-Bird </span>
              <span className="text-red-500">Discount!</span>
            </span>
            <div className="flex justify-center mt-1">
              <GiPartyPopper className="text-indigo-500" size={24} />
            </div>
          </div>
          
          <form action="https://formsubmit.co/info@udemygo.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact Form Submission!" />
            <input type="hidden" name="_next" value="https://udemygo.com/thank-you" />
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaUser size={18} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaPhone size={18} />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaEnvelope size={18} />
                </div>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  <FaGraduationCap size={18} />
                </div>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  required
                >
                  {degrees.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" size={16} />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}