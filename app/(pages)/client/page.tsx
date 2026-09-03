import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Clientsec from "@/app/components/layout/client/clientsec";
import Clientcard from "@/app/components/layout/client/clientcard";
import lawData from "@/app/data/lawData-restructured.json";


export default function ClientPage() {
  
  
  const clientSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.clientSubBanner;
  const clientSectionData = lawData.categories.Veritas.sections.ClientResource?.variants?.VeritasClientResource1?.clientSection;
  const clientCardsData = lawData.categories.Veritas.sections.ClientResource?.variants?.VeritasClientResource1?.clientCards;

  return (
    //main section //
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={clientSubBannerData} />
      <Clientsec data={clientSectionData as any} />
      <Clientcard data={clientCardsData} />
    </main>
  );
}
