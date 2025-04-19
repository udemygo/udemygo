import PopUpContact from "@/components/Global/PopUpContact";
import ScrollToTop from "@/components/Global/ScrollToTop";
import CareerBoost from "@/components/Home/CareerBoost";
import HeroSection from "@/components/Home/HeroSection";
import Process from "@/components/Home/Process";
import Question from "@/components/Home/Question";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";
import UniversityCardList from "@/components/Home/UniversityCardList";
import WhatSetsUsApart from "@/components/Home/WhatSetsUsApart";
import WhyChoose from "@/components/Home/WhyChoose";
import { homeQuestions } from "@/components/homeQuestions";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Process />
      <UniversityCardList />
      <WhyChoose />
      <CareerBoost />
      <WhatSetsUsApart />
      <TestimonialCarousel />
      <Question questions={homeQuestions} />
    </>
  );
};

export default Home;
