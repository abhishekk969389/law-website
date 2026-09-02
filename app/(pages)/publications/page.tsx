import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Pubsec from "@/app/components/layout/publications/pubsec";
import StayUpdated from "@/app/components/layout/publications/stayupdated";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Publications | Veritas Law Partners",
  description: "Explore our research papers, legal articles, and published books.",
};

export default function PublicationsPage() {
  const data = resolvePageData('publications');
  
  const publicationsSubBannerData = data.PageBanner?.publicationsSubBanner;
  const publicationsSectionData = data.Publications?.publicationsSection;
  const stayUpdatedData = data.StayUpdated?.stayUpdated;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={publicationsSubBannerData} />
      <Pubsec data={publicationsSectionData} />
      <StayUpdated data={stayUpdatedData} />
    </main>
  );
}
