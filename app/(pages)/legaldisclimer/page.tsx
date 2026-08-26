import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/legaldisclimer/section";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Legal Disclaimer | Veritas Law Partners",
  description: "Read our official legal disclaimer and regulatory compliance disclosures.",
};

export default function LegalDisclaimerPage() {
  const globalData = rawLawData as GlobalLawData;
  const legalDisclaimerSubBannerData = globalData.legalDisclaimerSubBanner;
  const legalDisclaimerSectionData = globalData.legalDisclaimerSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#D4A359] pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={legalDisclaimerSubBannerData} />
      <Section data={legalDisclaimerSectionData} />
    </main>
  );
}
