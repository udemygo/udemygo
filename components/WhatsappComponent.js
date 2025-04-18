import React from "react";

const WhatsappComponent = () => {
  return (
    <div className="w-full mt-4">
      <div className="max-w-6xl border border-green-600 mx-auto bg-gradient-to-br from-green-500/10 via-green-400/10 to-green-300/10 rounded-2xl flex flex-col justify-center items-center p-8">
        <h5 className="text-lg md:text-xl lg:text-3xl pb-4 font-semibold  font-sans tracking-wide text-green-800">
          Get The Best Offer On Our Retreats & Yoga &#39;ITC
        </h5>
        <p className="text-center text-xs md:text-sm lg:text-[16px] text-green-700 pb-6">
          Whether you are seeking personal growth or aiming to become a
          professional yoga teacher in Rishikesh, Rishikesh Yoga Valley provides
          the ideal environment and expertise to support your journey. Our
          holistic approach ensures that every one leaves with a profound
          understanding of yoga and its applications
        </p>
        <button className="px-6 py-3 border font-sans rounded-full bg-gradient-to-br from-green-800  via-green-600 to-green-500 text-white hover:bg-gradient-to-tl cursor-pointer transition-colors duration-300 ease-in">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
            className="relative group z-1"
          >
            Whatsapp Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default WhatsappComponent;
