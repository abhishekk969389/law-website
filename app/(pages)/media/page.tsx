import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Mediasec from "@/app/components/layout/media/mediasec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Media & Press | Veritas Law Partners",
  description: "Read our press releases, news features, and media coverage.",
};

export default function MediaPage() {
  const data = resolvePageData('home');
  
  const mediaSubBannerData = data.PageBanner?.mediaSubBanner;
  const mediaSectionData = data.Media?.mediaSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={mediaSubBannerData} />
      <Mediasec data={mediaSectionData} />
    </main>
  );
}
