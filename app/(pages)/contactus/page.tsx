import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Contactsec from "@/app/components/layout/contactus/contactsec";
import Questions from "@/app/components/layout/contactus/questions";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Contact Us | Veritas Law Partners",
  description: "Get in touch with our legal team for expert consultation and advice.",
};

export default function ContactUsPage() {
  const globalData = rawLawData as GlobalLawData;
  const contactSubBannerData = globalData.contactSubBanner;
  const contactSectionData = globalData.contactSection;
  const questionsSectionData = globalData.questionsSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={contactSubBannerData} />
      <Contactsec data={contactSectionData} />
      <Questions data={questionsSectionData} />
    </main>
  );
}
