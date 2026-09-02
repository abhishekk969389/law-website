import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Teamsec from "@/app/components/layout/team/teamsec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
  title: "Our Team | Veritas Law Partners",
  description: "Meet our experienced attorneys and legal professionals.",
};

export default function TeamPage() {
  const data = resolvePageData('team');
  
  const teamSubBannerData = data.PageBanner?.teamSubBanner;
  const teamSectionData = data.Team?.teamSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={teamSubBannerData} />
      <Teamsec data={teamSectionData} />
      <Counting/>
    </main>
  );
}



