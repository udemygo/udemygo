import EMILoan from "@/components/EMILoan";
import CompareCourseComponent from "@/components/explore/CompareCourseComponent";
import JobOpportunities from "@/components/JobOpportunities";
import KeyHighlightsMBA from "@/components/KeyHighlightsMBA";
import MBAAdmissionProcedure from "@/components/MBAAdmissionProcedure";
import MBADuration from "@/components/MBADuration";
import MBAOverview from "@/components/MBAOverview";
import MBASyllabus from "@/components/MBASyllabus";
import MBAWorthy from "@/components/MBAWorthy";
import OnlineMbaComponent from "@/components/OnlineMbaComponent";
import OnlineMBAOffers from "@/components/OnlineMBAOffers";
import SpecializationComponent from "@/components/SpecializationComponent";
import TopRecruiters from "@/components/TopRecruiters";
import WhatsappComponent from "@/components/WhatsappComponent";
import WhoPursuMBA from "@/components/WhoPursuMBA";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-tl from-white/50 to-cyan-50/90 rounded-3xl min-h-screen  pb-4 pt-30">
      <div className="w-full p-1">
        <marquee
          className="w-full max-w-6xl bg-gradient-to-bl from-white to-white/50 mx-auto rounded-2xl shadow-xl flex justify-center items-center px-2 py-4"
          behavior="infinite"
          direction="left"
        >
          <strong className="text-red-500">Disclaimer</strong>: Udemygo promotes
          only verified universities and approved courses. We don’t consider
          enrollment before consulting with our career experts!
        </marquee>
      </div>
      <CompareCourseComponent />
      <OnlineMbaComponent />
      <MBAOverview />
      <OnlineMBAOffers />
      <WhoPursuMBA />
      <KeyHighlightsMBA />
      <MBASyllabus />
      <MBADuration />
      <MBAAdmissionProcedure />
      <SpecializationComponent />
      <EMILoan />
      <MBAWorthy />
      <JobOpportunities />
      <TopRecruiters />
      <WhatsappComponent />
    </div>
  );
};

export default page;
