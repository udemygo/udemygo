"use client";
import React, { useState } from "react";
import PopUpForm from "../PopUpForm";
import { FaWhatsapp } from "react-icons/fa";

const PopUpContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-12 right-12 z-40 p-3 rounded-full shadow-xl bg-gradient-to-l from-green-500 to-green-600 cursor-pointer flex justify-center items-center`}
      >
        <FaWhatsapp size={36} color="#ffff" />
      </div>
      {isOpen && <PopUpForm />}
    </>
  );
};

export default PopUpContact;
