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
import WhoPursuMBA from "@/components/WhoPursuMBA";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-tl from-white/50 to-cyan-50/90 rounded-3xl min-h-screen  pb-4">
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
    </div>
  );
};

export default page;
