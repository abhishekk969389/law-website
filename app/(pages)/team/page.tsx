import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Teamsec from "@/app/components/layout/team/teamsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
  title: "Our Team | Veritas Law Partners",
  description: "Meet our experienced attorneys and legal professionals.",
};

export default function TeamPage() {
  const globalData = rawLawData as GlobalLawData;
  const teamSubBannerData = globalData.teamSubBanner;
  const teamSectionData = globalData.teamSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={teamSubBannerData} />
      <Teamsec data={teamSectionData} />
      <Counting/>
    </main>
  );
}
