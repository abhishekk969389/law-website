import SubBanner from "@/app/components/ui/subbanner";
import WhyChooseUs from "@/app/components/layout/about/whychooseus";
import lawData from "@/app/data/lawData-restructured.json";
import Counting from "@/app/components/ui/counting";

export default function WhyChoosePage() {
  
    
    const whyChooseSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.whyChooseSubBanner;
    const whyChooseUsData = lawData.categories.Veritas.sections.WhyChooseUs?.variants?.VeritasWhyChooseUs1?.whyChooseUs;

    return (
        //main section //
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={whyChooseSubBannerData} />
            <WhyChooseUs data={whyChooseUsData} />
            <Counting />
        </main>
    );
}
