import FounderSection from "@/components/About/Founder";
import Hero from "@/components/About/Hero";
import Values from "@/components/About/Values";
import WhyEduVerticals from "@/components/About/WhyEduVerticals";
import Question from "@/components/Home/Question";
import { aboutQuestions } from "@/components/homeQuestions";
import React from "react";

const About = () => {
  return (
    <>
      <Hero />
      <FounderSection />
      <WhyEduVerticals />
      <Values />
      <Question questions={aboutQuestions} />
    </>
  );
};

export default About;
