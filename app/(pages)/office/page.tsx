import SubBanner from "@/app/components/ui/subbanner";
import Officesec from "@/app/components/layout/office/officesec";
import Locationcard from "@/app/components/layout/office/locationcard";
import Officecta from "@/app/components/layout/office/officecta";
import lawData from "@/app/data/lawData-restructured.json";


export default function OfficePage() {
  
  const officeSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.officeSubBanner;
  const officeSectionData = lawData.categories.Veritas.sections.Offices?.variants?.VeritasOffices1?.officeSection;
  const officeLocationsData = lawData.categories.Veritas.sections.Offices?.variants?.VeritasOffices1?.officeLocations;
  const officeCtaData = lawData.categories.Veritas.sections.Offices?.variants?.VeritasOffices1?.officeCta;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={officeSubBannerData} />
      <Officesec data={officeSectionData} />
      <Locationcard data={officeLocationsData} />
      <Officecta data={officeCtaData} />
    </main>
  );
}
