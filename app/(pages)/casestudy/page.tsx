import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Casestudysec from "@/app/components/layout/casestudy/casestudysec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Case Studies | Veritas Law Partners",
  description: "Explore our recent case studies, legal victories, and client success stories.",
};

export default function CaseStudyPage() {
  const data = resolvePageData('case-study');
  
  const caseStudySubBannerData = data.PageBanner?.caseStudySubBanner;
  const caseStudySectionData = data.CaseStudy?.caseStudySection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={caseStudySubBannerData} />
      <Casestudysec data={caseStudySectionData} />
    </main>
  );
}
