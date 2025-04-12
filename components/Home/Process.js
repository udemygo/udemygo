import { FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineFindReplace } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiLifeSupport } from "react-icons/gi";
import { PiUsersFourDuotone } from "react-icons/pi";
import Link from "next/link";


const ProcessItem = ({ icon: Icon, text }) => {
  return (
    <div className="w-full flex flex-col items-center gap-3 text-center">
      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full">
        <Icon className="w-8 h-8 text-white md:w-10 md:h-10" />
      </div>
      <span className="text-white text-base md:text-lg font-medium">{text}</span>
    </div>
  );
};

const Process = () => {
  return (
    <div className="max-w-full bg-[#181e2e] px-6 py-8 md:px-12 md:py-12 my-5 rounded-4xl text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Our Process is Pretty Simple.</p>
        <Link href="/about" className="flex items-center gap-2 text-lg md:text-2xl font-semibold hover:text-gray-300 transition">
          About <FaLocationArrow />
        </Link>
      </div>

      {/* Process Steps - Responsive Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
        
        <div className="relative">
          <ProcessItem icon={TbHeartHandshake} text="01. Initial Consultation" />
          <FaArrowRight className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70" />
        </div>

        <div className="relative">
          <ProcessItem icon={MdOutlineFindReplace} text="02. Finding the best fit for your requirements" />
          <FaArrowRight className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70" />
        </div>

        <div className="relative">
          <ProcessItem icon={LiaUniversitySolid} text="03. Admission through University portal only" />
          <FaArrowRight className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70" />
        </div>

        <div className="relative">
          <ProcessItem icon={GiLifeSupport} text="04. Support after admission" />
          <FaArrowRight className="hidden lg:block absolute top-[50%] right-[-20px] text-white opacity-70" />
        </div>

        <div className="relative">
          <ProcessItem icon={PiUsersFourDuotone} text="05. Networking opportunities through community" />
        </div>
        
      </div>
    </div>
  );
};

export default Process;
