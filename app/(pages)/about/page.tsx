import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import About from "@/app/components/homelayout/about";
import WhyChooseUs from "@/app/components/layout/about/whychooseus";
import Team from "@/app/components/layout/about/teams";
import Counting from "@/app/components/ui/counting";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData } from "@/types/law";

export const metadata = {
    title: "About Us | Veritas Law Partners",
    description: "Learn more about Veritas Law Partners, our mission, values, and legal expertise.",
};

export default function AboutPage() {
  
    
    const aboutSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.aboutSubBanner;
    const whyChooseUsData = lawData.categories.Veritas.sections.WhyChooseUs?.variants?.VeritasWhyChooseUs1?.whyChooseUs;
    const teamData = lawData.categories.Veritas.sections.Team?.variants?.VeritasTeam1?.team;

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={aboutSubBannerData} />
            <About />
            <WhyChooseUs data={whyChooseUsData} />
            <Counting />
            <Team data={teamData} />
        </main>
    );
}
