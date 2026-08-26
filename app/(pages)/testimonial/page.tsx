import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";
import Testimonials from "@/app/components/homelayout/testinomials";

export const metadata = {
  title: "Testimonials | Veritas Law Partners",
  description: "Read what our clients say about our legal services.",
};

export default function TestimonialPage() {
  const globalData = rawLawData as GlobalLawData;
  const testimonialSubBannerData = globalData.testimonialSubBanner;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={testimonialSubBannerData} />
      <Testimonials/>
    </main>
  );
}
