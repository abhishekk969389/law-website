import SubBanner from "@/app/components/ui/subbanner";
import lawData from "@/app/data/lawData-restructured.json";
import Faq from "@/app/components/homelayout/faq";

export default function FaqPage() {
  const faqSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.faqSubBanner;

  return (
    <main className="min-h-screen bg-[#0C191B] text-white">
      <SubBanner data={faqSubBannerData} />
      <div className=" mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <Faq />
      </div>
    </main>
  );
}
