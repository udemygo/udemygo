export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import CourseCatalog from "@/components/StudyMaterial/CourseCatalog";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseCatalog />
    </Suspense>
  );
}
