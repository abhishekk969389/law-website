import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/termscondition/section";
import lawData from "@/app/data/lawData-restructured.json";

export default function TermsConditionPage() {
  const termsConditionSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.termsConditionSubBanner;
  const termsConditionSectionData =
    lawData.categories.Veritas.sections.Terms?.variants?.VeritasTerms1
      ?.termsConditionSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={termsConditionSubBannerData} />
      <Section data={termsConditionSectionData} />
    </main>
  );
}
