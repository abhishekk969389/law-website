import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Eventsec from "@/app/components/layout/event/eventsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Events & Webinars | Veritas Law Partners",
  description: "Join our upcoming legal seminars, workshops, and industry webinars.",
};

export default function EventPage() {
  const globalData = rawLawData as GlobalLawData;
  const eventSubBannerData = globalData.eventSubBanner;
  const eventSectionData = globalData.eventSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={eventSubBannerData} />
      <Eventsec data={eventSectionData} />
    </main>
  );
}
