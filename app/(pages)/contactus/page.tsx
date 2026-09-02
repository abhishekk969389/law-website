import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Contactsec from "@/app/components/layout/contactus/contactsec";
import Questions from "@/app/components/layout/contactus/questions";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Contact Us | Veritas Law Partners",
  description: "Get in touch with our legal team for expert consultation and advice.",
};

export default function ContactUsPage() {
  const data = resolvePageData('contact');
  
  const contactSubBannerData = data.PageBanner?.contactSubBanner;
  const contactSectionData = data.Contact?.contactSection;
  const questionsSectionData = data.Consultation?.questionsSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={contactSubBannerData} />
      <Contactsec data={contactSectionData} />
      <Questions data={questionsSectionData} />
    </main>
  );
}
