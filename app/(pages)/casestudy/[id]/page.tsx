import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import CaseStudyMain from "@/app/components/layout/casestudydetails/casestudymain";
import CaseStudySidebar from "@/app/components/layout/casestudydetails/casestudysidebar";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData, CaseStudyDetailItem } from "@/app/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getCaseStudyByIdOrSlug(id: string): CaseStudyDetailItem | undefined {
  const globalData = ({}) as unknown as GlobalLawData;
  const caseStudyDetails = (lawData.categories.Veritas.sections.CaseStudyDetail?.variants?.VeritasCaseStudyDetail1?.caseStudyDetails || []) as CaseStudyDetailItem[] | undefined;

  if (!id || !caseStudyDetails || !Array.isArray(caseStudyDetails)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return caseStudyDetails.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllCaseStudyIds(): string[] {
  const globalData = ({}) as unknown as GlobalLawData;
  const caseStudyDetails = (lawData.categories.Veritas.sections.CaseStudyDetail?.variants?.VeritasCaseStudyDetail1?.caseStudyDetails || []) as CaseStudyDetailItem[] | undefined;

  if (!caseStudyDetails || !Array.isArray(caseStudyDetails)) return [];

  const paramsList: string[] = [];
  caseStudyDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllCaseStudyIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = getCaseStudyByIdOrSlug(resolvedParams.id);

  if (!caseStudy) {
    return {
      title: "Case Study Details | Veritas Law Partners",
      description: "Proven track record of successful client outcomes.",
    };
  }

  const titleText = typeof caseStudy.title === "string"
    ? caseStudy.title
    : `${caseStudy.title.whiteText}${caseStudy.title.goldText}`;

  return {
    title: `${titleText} - Case Study | Veritas Law Partners`,
    description: caseStudy.introText || caseStudy.subtitle || `${titleText} legal case study at Veritas Law Partners.`,
  };
}

export default async function CaseStudyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const caseStudy = getCaseStudyByIdOrSlug(resolvedParams.id);

  if (!caseStudy) {
    notFound();
  }

  const globalData = ({}) as unknown as GlobalLawData;
  const allCaseStudies = ((lawData.categories.Veritas.sections.CaseStudyDetail?.variants?.VeritasCaseStudyDetail1?.caseStudyDetails || []) || []) as CaseStudyDetailItem[];
  const baseSubBanner = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.caseStudySubBanner;

  const titleText = typeof caseStudy.title === "string"
    ? caseStudy.title
    : `${caseStudy.title.whiteText}${caseStudy.title.goldText}`;

  const subBannerData = {
    title: titleText,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Case Study", href: "/casestudy" },
      { label: titleText, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      <SubBanner data={subBannerData} />
      <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-17 lg:mb-20 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <CaseStudyMain caseStudy={caseStudy} />
            </div>
            <div className="lg:col-span-4">
              <CaseStudySidebar
                currentId={caseStudy.id}
                allCaseStudies={allCaseStudies}
                sidebarData={(caseStudy as any).sidebarData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
