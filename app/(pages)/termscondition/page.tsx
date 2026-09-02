import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/termscondition/section";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Terms & Conditions | Veritas Law Partners",
  description: "Terms and Conditions governing your use of Veritas Law Partners legal website and services.",
};

export default function TermsConditionPage() {
  const data = resolvePageData('terms-and-conditions');
  
  const termsConditionSubBannerData = data.PageBanner?.termsConditionSubBanner;
  const termsConditionSectionData = data.Terms?.termsConditionSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={termsConditionSubBannerData} />
      <Section data={termsConditionSectionData} />
    </main>
  );
}
