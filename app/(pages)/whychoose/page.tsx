import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import WhyChooseUs from "@/app/components/layout/about/whychooseus";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";
import Counting from "@/app/components/ui/counting";

export const metadata = {
    title: "Why Choose Us | Veritas Law Partners",
    description: "Discover why clients trust Veritas Law Partners for their legal matters.",
};

export default function WhyChoosePage() {
    const globalData = rawLawData as GlobalLawData;
    const whyChooseSubBannerData = globalData.whyChooseSubBanner;
    const whyChooseUsData = globalData.whyChooseUs;

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={whyChooseSubBannerData} />
            <WhyChooseUs data={whyChooseUsData} />
            <Counting />
        </main>
    );
}
