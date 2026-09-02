import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Clientsec from "@/app/components/layout/client/clientsec";
import Clientcard from "@/app/components/layout/client/clientcard";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Client Resources | Veritas Law Partners",
  description: "Access valuable legal guides, compliance toolkits, and client resources.",
};

export default function ClientPage() {
  const data = resolvePageData('home');
  
  const clientSubBannerData = data.PageBanner?.clientSubBanner;
  const clientSectionData = data.ClientResource?.clientSection;
  const clientCardsData = data.ClientResource?.clientCards;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={clientSubBannerData} />
      <Clientsec data={clientSectionData} />
      <Clientcard data={clientCardsData} />
    </main>
  );
}
