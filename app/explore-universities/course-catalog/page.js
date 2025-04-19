export const dynamic = "force-dynamic";

import React from "react";
import CourseCatalog from "@/components/StudyMaterial/CourseCatalog";
import Question from "@/components/Home/Question";
import { courseCatalogQuestions } from "@/components/homeQuestions";

export default function Page() {
  return (
    <>
      <CourseCatalog />
      <Question questions={courseCatalogQuestions} />
    </>
  );
}
