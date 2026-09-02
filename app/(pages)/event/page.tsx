import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Eventsec from "@/app/components/layout/event/eventsec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Events & Webinars | Veritas Law Partners",
  description: "Join our upcoming legal seminars, workshops, and industry webinars.",
};

export default function EventPage() {
  const data = resolvePageData('events');
  
  const eventSubBannerData = data.PageBanner?.eventSubBanner;
  const eventSectionData = data.Events?.eventSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={eventSubBannerData} />
      <Eventsec data={eventSectionData} />
    </main>
  );
}
