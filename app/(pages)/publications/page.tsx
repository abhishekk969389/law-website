import SubBanner from "@/app/components/ui/subbanner";
import Pubsec from "@/app/components/layout/publications/pubsec";
import StayUpdated from "@/app/components/layout/publications/stayupdated";
import lawData from "@/app/data/lawData-restructured.json";


export default function PublicationsPage() {
  
  
  const publicationsSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.publicationsSubBanner;
  const publicationsSectionData = lawData.categories.Veritas.sections.Publications?.variants?.VeritasPublications1?.publicationsSection;
  const stayUpdatedData = lawData.categories.Veritas.sections.StayUpdated?.variants?.VeritasStayUpdated1?.stayUpdated;

  return (
    //main section //
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={publicationsSubBannerData} />
      <Pubsec data={publicationsSectionData} />
      <StayUpdated data={stayUpdatedData} />
    </main>
  );
}
