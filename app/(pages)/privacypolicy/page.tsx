import SubBanner from "@/app/components/ui/subbanner";
import Section from "@/app/components/layout/privacypolicy/section";
import lawData from "@/app/data/lawData-restructured.json";

export default function PrivacyPolicyPage() {
  
  
  const privacyPolicySubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.privacyPolicySubBanner;
  const privacyPolicySectionData = lawData.categories.Veritas.sections.PrivacyPolicy?.variants?.VeritasPrivacyPolicy1?.privacyPolicySection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={privacyPolicySubBannerData} />
      <Section data={privacyPolicySectionData} />
    </main>
  );
}
