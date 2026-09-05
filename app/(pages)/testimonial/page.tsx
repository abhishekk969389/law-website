import SubBanner from "@/app/components/ui/subbanner";
import lawData from "@/app/data/lawData-restructured.json";
import Testimonials from "@/app/components/homelayout/testinomials";

export default function TestimonialPage() {
  const testimonialSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.testimonialSubBanner;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={testimonialSubBannerData} />
      <Testimonials />
    </main>
  );
}
