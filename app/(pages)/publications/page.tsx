import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Pubsec from "@/app/components/layout/publications/pubsec";
import StayUpdated from "@/app/components/layout/publications/stayupdated";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Publications | Veritas Law Partners",
  description: "Explore our research papers, legal articles, and published books.",
};

export default function PublicationsPage() {
  const globalData = rawLawData as GlobalLawData;
  const publicationsSubBannerData = globalData.publicationsSubBanner;
  const publicationsSectionData = globalData.publicationsSection;
  const stayUpdatedData = globalData.stayUpdated;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={publicationsSubBannerData} />
      <Pubsec data={publicationsSectionData} />
      <StayUpdated data={stayUpdatedData} />
    </main>
  );
}
