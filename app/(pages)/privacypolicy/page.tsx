import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/privacypolicy/section";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Privacy Policy | Veritas Law Partners",
  description: "Read our privacy policy regarding how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const data = resolvePageData('privacy-policy');
  
  const privacyPolicySubBannerData = data.PageBanner?.privacyPolicySubBanner;
  const privacyPolicySectionData = data.PrivacyPolicy?.privacyPolicySection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={privacyPolicySubBannerData} />
      <Section data={privacyPolicySectionData} />
    </main>
  );
}
