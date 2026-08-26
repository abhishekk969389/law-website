import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Servicesec from "@/app/components/layout/service/servicesec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
  title: "Our Services | Veritas Law Partners",
  description: "Explore our legal services, practice areas, and strategic solutions.",
};

export default function ServicePage() {
  const globalData = rawLawData as GlobalLawData;
  const servicesSubBannerData = globalData.servicesSubBanner;
  const serviceSectionData = globalData.serviceSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={servicesSubBannerData} />
      <Servicesec data={serviceSectionData} />
      <Counting/>
    </main>
  );
}