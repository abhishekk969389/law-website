import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import Blogsec from "@/app/components/layout/blog/blogsec";
import lawData from "@/app/data/lawData-restructured.json";

export default function BlogPage() {
  const blogSubBannerData =
    lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1
      ?.blogSubBanner;
  const blogSectionData =
    lawData.categories.Veritas.sections.Blog?.variants?.VeritasBlog1
      ?.blogSection;

  return (
    <main className="min-h-screen bg-[#0C191B] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={blogSubBannerData} />
      <Blogsec data={blogSectionData} />
    </main>
  );
}
