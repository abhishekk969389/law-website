import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/legaldisclimer/section";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Legal Disclaimer | Veritas Law Partners",
  description: "Read our official legal disclaimer and regulatory compliance disclosures.",
};

export default function LegalDisclaimerPage() {
  
  
  const legalDisclaimerSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.legalDisclaimerSubBanner;
  const legalDisclaimerSectionData = lawData.categories.Veritas.sections.LegalDisclaimer?.variants?.VeritasLegalDisclaimer1?.legalDisclaimerSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#D4A359] pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={legalDisclaimerSubBannerData} />
      <Section data={legalDisclaimerSectionData} />
    </main>
  );
}
