import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Legalsec from "@/app/components/layout/legal/legalsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Legal Updates | Veritas Law Partners",
  description: "Read our latest legal updates, corporate governance rules, and legal articles.",
};

export default function LegalPage() {
  const globalData = rawLawData as GlobalLawData;
  const legalSubBannerData = globalData.legalSubBanner;
  const legalSectionData = globalData.legalSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={legalSubBannerData} />
      <Legalsec data={legalSectionData} />
    </main>
  );
}
