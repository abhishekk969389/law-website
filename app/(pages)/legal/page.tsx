import SubBanner from "@/app/components/ui/subbanner";
import Legalsec from "@/app/components/layout/legal/legalsec";
import lawData from "@/app/data/lawData-restructured.json";


export default function LegalPage() {
  
  
  const legalSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.legalSubBanner;
  const legalSectionData = lawData.categories.Veritas.sections.LegalUpdates?.variants?.VeritasLegalUpdates1?.legalSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={legalSubBannerData} />
      <Legalsec data={legalSectionData as any} />
    </main>
  );
}
