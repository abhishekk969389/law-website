import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/legaldisclimer/section";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Legal Disclaimer | Veritas Law Partners",
  description: "Read our official legal disclaimer and regulatory compliance disclosures.",
};

export default function LegalDisclaimerPage() {
  const data = resolvePageData('legal-disclaimer');
  
  const legalDisclaimerSubBannerData = data.PageBanner?.legalDisclaimerSubBanner;
  const legalDisclaimerSectionData = data.LegalDisclaimer?.legalDisclaimerSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#D4A359] pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={legalDisclaimerSubBannerData} />
      <Section data={legalDisclaimerSectionData} />
    </main>
  );
}
