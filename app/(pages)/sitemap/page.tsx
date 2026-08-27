import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Sitemapsec from "@/app/components/layout/sitemap/sitemapsec";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Sitemap | Veritas Law Partners",
  description: "Overview and quick navigation to all practice areas, services, and pages across Veritas Law Partners website.",
};

export default function SitemapPage() {
  const globalData = rawLawData as GlobalLawData;
  const sitemapSubBannerData = globalData.sitemapSubBanner;
  const sitemapSectionData = globalData.sitemapSection;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={sitemapSubBannerData} />
      <Sitemapsec data={sitemapSectionData} />
    </main>
  );
}
