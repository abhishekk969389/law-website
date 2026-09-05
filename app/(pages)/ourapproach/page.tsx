import SubBanner from "@/app/components/ui/subbanner";
import ApproachSec from "@/app/components/layout/ourapproach/approachsec";
import Proven from "@/app/components/layout/ourapproach/proven";
import lawData from "@/app/data/lawData-restructured.json";

export default function OurApproachPage() {
  const ourApproachSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.ourApproachSubBanner;
  const ourApproachSectionData =
    lawData.categories.Veritas.sections.OurApproach?.variants
      ?.VeritasOurApproach1?.ourApproachSection;
  const provenApproachData =
    lawData.categories.Veritas.sections.OurApproach?.variants
      ?.VeritasOurApproach1?.provenApproach;

  return (
    <main className="min-h-screen bg-[#08171B] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={ourApproachSubBannerData} />
      <ApproachSec data={ourApproachSectionData} />
      <Proven data={provenApproachData} />
    </main>
  );
}
