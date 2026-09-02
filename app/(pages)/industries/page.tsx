import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Indsec from "@/app/components/layout/industries/indsec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
    title: "Industries | Veritas Law Partners",
    description: "Explore the diverse industries and business sectors we represent.",
};

export default function IndustriesPage() {
  const data = resolvePageData('industries');
    
    const industriesSubBannerData = data.PageBanner?.industriesSubBanner;
    const industrySectionData = data.Industries?.industrySection;

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={industriesSubBannerData} />
            <Indsec data={industrySectionData} />
            <Counting />
        </main>
    );
}
