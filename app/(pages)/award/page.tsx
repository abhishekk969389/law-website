import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Awardsec from "@/app/components/layout/award/awardsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Awards & Recognition | Veritas Law Partners",
  description: "Discover our prestigious awards, honors, and industry accolades.",
};

export default function AwardPage() {
  const globalData = rawLawData as GlobalLawData;
  const awardSubBannerData = globalData.awardSubBanner;
  const awardSectionData = globalData.awardSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={awardSubBannerData} />
      <Awardsec data={awardSectionData} />
    </main>
  );
}
