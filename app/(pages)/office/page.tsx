import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Officesec from "@/app/components/layout/office/officesec";
import Locationcard from "@/app/components/layout/office/locationcard";
import Officecta from "@/app/components/layout/office/officecta";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Our Offices | Veritas Law Partners",
  description: "Find our office locations and contact details across India.",
};

export default function OfficePage() {
  const data = resolvePageData('offices');
  
  const officeSubBannerData = data.PageBanner?.officeSubBanner;
  const officeSectionData = data.Offices?.officeSection;
  const officeLocationsData = data.Offices?.officeLocations;
  const officeCtaData = data.Offices?.officeCta;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={officeSubBannerData} />
      <Officesec data={officeSectionData} />
      <Locationcard data={officeLocationsData} />
      <Officecta data={officeCtaData} />
    </main>
  );
}
