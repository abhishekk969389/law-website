import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Blogsec from "@/app/components/layout/blog/blogsec";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData } from "@/types/law";

export const metadata = {
  title: "Blog & News | Veritas Law Partners",
  description: "Read our latest legal insights, articles, and firm updates.",
};

export default function BlogPage() {
  const data = resolvePageData('blogs');
  
  const blogSubBannerData = data.PageBanner?.blogSubBanner;
  const blogSectionData = data.Blog?.blogSection;

  return (
    <main className="min-h-screen bg-[#0C191B] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={blogSubBannerData} />
      <Blogsec data={blogSectionData} />
    </main>
  );
}
