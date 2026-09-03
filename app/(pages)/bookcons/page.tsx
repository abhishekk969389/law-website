import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Booksec from "@/app/components/layout/bookcons/booksec";
import lawData from "@/app/data/lawData-restructured.json";


export default function BookConsPage() {
  
  
  const bookConsSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.bookConsSubBanner;
  const bookSectionData = lawData.categories.Veritas.sections.Consultation?.variants?.VeritasConsultation1?.bookSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={bookConsSubBannerData} />
      <Booksec data={bookSectionData} />
    </main>
  );
}
