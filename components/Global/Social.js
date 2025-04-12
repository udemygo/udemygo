import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Social = () => {
  return (
    <div className="  fixed top-[20%] right-0  h-auto w-auto flex flex-col gap-1 z-30">
      <a
        target="_blank"
        href="https://www.instagram.com/udemygo/profilecard/?igsh=MXJwZDVzbnd5djlnaQ=="
        className=" flex items-center gap-5 p-2 translate-x-[65%] md:translate-x-[70%] hover:-translate-x-[0%] transform duration-300 ease-in text-[#bd1e2e] bg-[#faa318] font-bold rounded-l-4xl"
      >
        <FaInstagram className=" bg-white rounded-full p-1 md:p-2 md:text-3xl text-3xl" />
        <p className="text-white">Instagram</p>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/udemygo/"
        className=" flex items-center gap-5 p-2 translate-x-[65%] md:translate-x-[70%] hover:-translate-x-[0%] transform duration-300 ease-in text-[#bd1e2e] bg-[#faa318] font-bold rounded-l-4xl"
      >
        <CiLinkedin className=" bg-white rounded-full p-1 md:p-2 md:text-3xl text-3xl" />
        <p className="text-white">LinkedIn</p>
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/share/1EhbyrbWDM/?mibextid=wwXIfr"
        className=" flex items-center gap-5 p-2 translate-x-[65%] md:translate-x-[70%] hover:-translate-x-[0%] transform duration-300 ease-in text-[#bd1e2e] bg-[#faa318] font-bold rounded-l-4xl"
      >
        <CiFacebook className=" bg-white rounded-full p-1 md:p-2 md:text-3xl text-3xl" />
        <p className="text-white">Facebook</p>
      </a>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested"
        className=" flex items-center gap-5 p-2 translate-x-[65%] md:translate-x-[70%] hover:-translate-x-[0%] transform duration-300 ease-in text-[#bd1e2e] bg-[#faa318] font-bold rounded-l-4xl"
      >
        <FaWhatsapp className=" bg-white rounded-full p-1 md:p-2 md:text-3xl text-3xl" />
        <p className="text-white">WhatsApp</p>
      </a>
    </div>
  );
};

export default Social;
