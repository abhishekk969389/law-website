import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Indsec from "@/app/components/layout/industries/indsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
    title: "Industries | Veritas Law Partners",
    description: "Explore the diverse industries and business sectors we represent.",
};

export default function IndustriesPage() {
    const globalData = rawLawData as GlobalLawData;
    const industriesSubBannerData = globalData.industriesSubBanner;
    const industrySectionData = globalData.industrySection;

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={industriesSubBannerData} />
            <Indsec data={industrySectionData} />
            <Counting />
        </main>
    );
}
