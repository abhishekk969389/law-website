import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Officesec from "@/app/components/layout/office/officesec";
import Locationcard from "@/app/components/layout/office/locationcard";
import Officecta from "@/app/components/layout/office/officecta";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Our Offices | Veritas Law Partners",
  description: "Find our office locations and contact details across India.",
};

export default function OfficePage() {
  const globalData = rawLawData as GlobalLawData;
  const officeSubBannerData = globalData.officeSubBanner;
  const officeSectionData = globalData.officeSection;
  const officeLocationsData = globalData.officeLocations;
  const officeCtaData = globalData.officeCta;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={officeSubBannerData} />
      <Officesec data={officeSectionData} />
      <Locationcard data={officeLocationsData} />
      <Officecta data={officeCtaData} />
    </main>
  );
}
