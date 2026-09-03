import SubBanner from "@/app/components/ui/subbanner";
import Indsec from "@/app/components/layout/industries/indsec";
import lawData from "@/app/data/lawData-restructured.json";
import Counting from "@/app/components/ui/counting";



export default function IndustriesPage() {
  
    
    const industriesSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.industriesSubBanner;
    const industrySectionData = lawData.categories.Veritas.sections.Industries?.variants?.VeritasIndustries1?.industrySection;

    return (
        <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
            <SubBanner data={industriesSubBannerData} />
            <Indsec data={industrySectionData as any} />
            <Counting />
        </main>
    );
}
