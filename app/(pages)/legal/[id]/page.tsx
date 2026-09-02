import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import LegalMain from "@/app/components/layout/legaldetails/legalmain";
import LegalSidebar from "@/app/components/layout/legaldetails/legalsidebar";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData, LegalDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getLegalByIdOrSlug(id: string): LegalDetailItem | undefined {
  const globalData = ({}) as unknown as GlobalLawData;
  const legalDetails = (lawData.categories.Veritas.sections.LegalUpdateDetail?.variants?.VeritasLegalUpdateDetail1?.legalDetails || []) as LegalDetailItem[] | undefined;

  if (!id || !legalDetails || !Array.isArray(legalDetails)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return legalDetails.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllLegalIds(): string[] {
  const globalData = ({}) as unknown as GlobalLawData;
  const legalDetails = (lawData.categories.Veritas.sections.LegalUpdateDetail?.variants?.VeritasLegalUpdateDetail1?.legalDetails || []) as LegalDetailItem[] | undefined;

  if (!legalDetails || !Array.isArray(legalDetails)) return [];

  const paramsList: string[] = [];
  legalDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllLegalIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getLegalByIdOrSlug(resolvedParams.id);

  if (!article) {
    return {
      title: "Legal Insights | Veritas Law Partners",
      description: "Comprehensive legal insights and regulatory updates from Veritas Law Partners.",
    };
  }

  return {
    title: `${article.title} - Legal Insights | Veritas Law Partners`,
    description:
      article.subtitle ||
      article.introParagraphs?.[0]?.slice(0, 160) ||
      `${article.title} - Legal update from Veritas Law Partners.`,
  };
}

export default async function LegalDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const article = getLegalByIdOrSlug(resolvedParams.id);

  if (!article) {
    notFound();
  }

  const globalData = ({}) as unknown as GlobalLawData;
  const baseSubBanner = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.legalSubBanner;

  const words = (article.title || "").trim().split(/\s+/);
  const shortTitle = article.bannerTitle || article.shortTitle || (words.length > 3 ? words.slice(0, 3).join(" ") : article.title);

  const subBannerData = {
    title: shortTitle,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Legal Insights", href: "/legal" },
      { label: shortTitle, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      <SubBanner data={subBannerData} />
      <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-16 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <LegalMain article={article} />
            </div>
            <div className="lg:col-span-4">
              <LegalSidebar
                currentId={article.id}
                sidebarData={article.sidebarData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
