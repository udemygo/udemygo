"use client";
import React, { useState } from "react";
import PopUpForm from "../PopUpForm";
import { BiSupport } from "react-icons/bi";

const PopUpContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-4 z-40 p-3 rounded-full shadow-xl bg-gradient-to-l from-white to-white/10 cursor-pointer flex justify-center items-center`}
      >
        <BiSupport size={36} color="#023047" />
      </div>
      {isOpen && <PopUpForm />}
    </>
  );
};

export default PopUpContact;
