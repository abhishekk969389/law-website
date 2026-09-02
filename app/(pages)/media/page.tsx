import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Mediasec from "@/app/components/layout/media/mediasec";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Media & Press | Veritas Law Partners",
  description: "Read our press releases, news features, and media coverage.",
};

export default function MediaPage() {
  
  
  const mediaSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.mediaSubBanner;
  const mediaSectionData = lawData.categories.Veritas.sections.Media?.variants?.VeritasMedia1?.mediaSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={mediaSubBannerData} />
      <Mediasec data={mediaSectionData} />
    </main>
  );
}
