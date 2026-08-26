import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Careersec from "@/app/components/layout/career/careersec";
import Careercta from "@/app/components/layout/career/careercta";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Careers | Veritas Law Partners",
  description: "Explore career opportunities and join our legal team.",
};

export default function CareerPage() {
  const globalData = rawLawData as GlobalLawData;
  const careerSubBannerData = globalData.careerSubBanner;
  const careerSectionData = globalData.careerSection;
  const careerCtaData = globalData.careerCta;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={careerSubBannerData} />
      <Careersec data={careerSectionData} />
      <Careercta data={careerCtaData} />
    </main>
  );
}
