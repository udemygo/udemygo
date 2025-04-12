import React from "react";
import founderImage from "./../../public/assets/founder.webp";
import Image from "next/image";

const FounderSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#ede9fe] to-[#e0e7ff] py-12 px-4 md:px-16 rounded-4xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 ">
        {/* Left: Image + Visionary Info */}
        <div className="flex flex-col md:flex-row bg-white/70 rounded-3xl shadow-lg overflow-hidden w-full md:w-2/3">
          <div className="md:w-2/3 bg-black flex justify-center items-center">
            <Image
              src={founderImage}
              alt="Mr. Shahjahan"
              className="w-full h-full object-cover grayscale "
            />
          </div>
          <div className="p-6 md:p-8 md:w-2/3 bg-gradient-to-r from-[#ede9fe] to-[#f3f4f6]">
            <p className="text-sm font-semibold text-gray-500 mb-1">
              Meet The Founder And Co-Founder
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mr. Sachin Goswami And Mr. Rohit
            </h2>
            <p className="text-gray-700 mb-4">
              Sachin Goswami and Rohit are the founder and co-founder of
              UdemyGo, trailblazers in the education sector. Driven by a shared
              mission to democratize learning, they aim to make high-quality
              education accessible to all. With a vision rooted in innovation,
              impact, and inclusivity, they’ve built UdemyGo into a
              next-generation platform that bridges the gap between academic
              excellence and real-world skills. Their leadership has empowered
              thousands of students and professionals through programs
              co-designed with top universities and industry experts. With a
              deep understanding of education technology and learner behavior,
              they focus on scalable, personalized, and career-driven learning
              experiences. As visionary strategists, they ensure every course,
              program, and partnership at UdemyGo meets the highest standards of
              pedagogy and learner outcomes. Their commitment to lifelong
              learning and skill transformation continues to shape the
              platform's evolution. UdemyGo, under their dual leadership, is
              more than just a platform — it’s a global movement to reshape
              education through innovation and accessibility.
            </p>
          </div>
        </div>

        {/* Right: Empowering Box */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Who We Are</h3>
          <p className="mb-4">
            <strong>At Udemygo, </strong> is{" "}
            <span className="text-indigo-400">
              we aren’t just another edtech platform
            </span>{" "}
            we’re your career accelerator. We bridge the gap between ambition
            and achievement by offering university-grade education that’s
            flexible, credible, and built for the digital age. Our platform is
            crafted for dreamers, doers, and professionals who believe that
            learning should evolve with life — not interrupt it.
          </p>
          <p className="mb-4">
            We specialize in tailored online MBA programs that empower
            professionals to excel and organizations to thrive.
          </p>
          <p className="mb-4">
            Our Purpose To democratize access to world-class education and
            empower learners from every corner of India and beyond to take
            charge of their personal and professional growth.
          </p>
          <p className="mb-4">
            With UdemyGo, your dream university is within reach. Expert
            Guidance. Global Reach. Real Results. .
          </p>
          <p className="mb-4">
          With strategic guidance and a proven track record, UdemyGo is your trusted partner in turning academic aspirations into global achievements.
          </p>
          <p className="font-semibold text-indigo-300">
            <strong>Udemygo</strong> "Fueling Ambitions, Transforming Lives".
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
