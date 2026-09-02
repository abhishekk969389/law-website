import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Awardsec from "@/app/components/layout/award/awardsec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Awards & Recognition | Veritas Law Partners",
  description: "Discover our prestigious awards, honors, and industry accolades.",
};

export default function AwardPage() {
  const data = resolvePageData('home');
  
  const awardSubBannerData = data.PageBanner?.awardSubBanner;
  const awardSectionData = data.AwardsRecognition?.awardSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={awardSubBannerData} />
      <Awardsec data={awardSectionData} />
    </main>
  );
}
