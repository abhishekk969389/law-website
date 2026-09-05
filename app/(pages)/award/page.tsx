import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Awardsec from "@/app/components/layout/award/awardsec";
import lawData from "@/app/data/lawData-restructured.json";

export default function AwardPage() {
  const awardSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.awardSubBanner;
  const awardSectionData =
    lawData.categories.Veritas.sections.AwardsRecognition?.variants
      ?.VeritasAwardsRecognition1?.awardSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={awardSubBannerData} />
      <Awardsec data={awardSectionData} />
    </main>
  );
}
