import SubBanner from "@/app/components/ui/subbanner";
import Casestudysec from "@/app/components/layout/casestudy/casestudysec";
import lawData from "@/app/data/lawData-restructured.json";

export default function CaseStudyPage() {
  const caseStudySubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.caseStudySubBanner;
  const caseStudySectionData =
    lawData.categories.Veritas.sections.CaseStudy?.variants?.VeritasCaseStudy1
      ?.caseStudySection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={caseStudySubBannerData} />
      <Casestudysec data={caseStudySectionData} />
    </main>
  );
}
