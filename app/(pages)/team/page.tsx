import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Teamsec from "@/app/components/layout/team/teamsec";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
  title: "Our Team | Veritas Law Partners",
  description: "Meet our experienced attorneys and legal professionals.",
};

export default function TeamPage() {
  
  
  const teamSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.teamSubBanner;
  const teamSectionData = lawData.categories.Veritas.sections.Team?.variants?.VeritasTeam1?.teamSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={teamSubBannerData} />
      <Teamsec data={teamSectionData} />
      <Counting/>
    </main>
  );
}



