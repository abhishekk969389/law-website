import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";
import Faq from "@/app/components/homelayout/faq";

export const metadata = {
  title: "Frequently Asked Questions | Veritas Law Partners",
  description: "Find answers to frequently asked legal questions.",
};

export default function FaqPage() {
  const data = resolvePageData('faqs');
  
  const faqSubBannerData = data.PageBanner?.faqSubBanner;

  return (
    <main className="min-h-screen bg-[#0C191B] text-white">
      <SubBanner data={faqSubBannerData} />
      <div className=" mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <Faq/>
      </div>
    </main>
  );
}
