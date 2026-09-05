import SubBanner from "@/app/components/ui/subbanner";
import Eventsec from "@/app/components/layout/event/eventsec";
import lawData from "@/app/data/lawData-restructured.json";

export default function EventPage() {
  const eventSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.eventSubBanner;
  const eventSectionData =
    lawData.categories.Veritas.sections.Events?.variants?.VeritasEvents1
      ?.eventSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={eventSubBannerData} />
      <Eventsec data={eventSectionData} />
    </main>
  );
}
