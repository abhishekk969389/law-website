import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import ApproachSec from "@/app/components/layout/ourapproach/approachsec";
import Proven from "@/app/components/layout/ourapproach/proven";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Our Approach | Veritas Law Partners",
  description: "Learn about our strategic, client-centered approach to legal representation.",
};

export default function OurApproachPage() {
  const globalData = rawLawData as GlobalLawData;
  const ourApproachSubBannerData = globalData.ourApproachSubBanner;
  const ourApproachSectionData = globalData.ourApproachSection;
  const provenApproachData = globalData.provenApproach;

  return (
    <main className="min-h-screen bg-[#08171B] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={ourApproachSubBannerData} />
      <ApproachSec data={ourApproachSectionData} />
      <Proven data={provenApproachData} />
    </main>
  );
}
