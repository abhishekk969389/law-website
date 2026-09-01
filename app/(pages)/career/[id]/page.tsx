import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import CareerHeader from "@/app/components/layout/careerdetails/careerheader";
import CareerContent from "@/app/components/layout/careerdetails/careercontent";
import CareerSidebar from "@/app/components/layout/careerdetails/careersidebar";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData, CareerDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getCareerByIdOrSlug(id: string): CareerDetailItem | undefined {
  const globalData = rawLawData as unknown as GlobalLawData;
  const careers = globalData.careerDetails as CareerDetailItem[] | undefined;

  if (!id || !careers || !Array.isArray(careers)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return careers.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllCareerIds(): string[] {
  const globalData = rawLawData as unknown as GlobalLawData;
  const careers = globalData.careerDetails as CareerDetailItem[] | undefined;

  if (!careers || !Array.isArray(careers)) return [];

  const paramsList: string[] = [];
  careers.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllCareerIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const career = getCareerByIdOrSlug(resolvedParams.id);

  if (!career) {
    return {
      title: "Career Details | Veritas Law Partners",
      description: "Explore legal career opportunities at Veritas Law Partners.",
    };
  }

  return {
    title: `${career.title} - Careers | Veritas Law Partners`,
    description: career.aboutDescription || `${career.title} career opportunity at Veritas Law Partners.`,
  };
}

export default async function CareerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const career = getCareerByIdOrSlug(resolvedParams.id);

  if (!career) {
    notFound();
  }

  const globalData = rawLawData as unknown as GlobalLawData;
  const baseSubBanner = globalData.careerSubBanner || globalData.subBanner;

  // Max 3 words for banner title
  const words = career.title ? career.title.trim().split(/\s+/) : [];
  const bannerHeading =
    career.shortTitle ||
    career.bannerTitle ||
    (words.length <= 3 ? career.title : words.slice(0, 3).join(" "));

  const subBannerData = {
    title: bannerHeading,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Careers", href: "/career" },
      { label: bannerHeading, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  const sidebarData = career.sidebarData;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      {/* SubBanner Header */}
      <SubBanner data={subBannerData} />

      {/* Main Content & Sidebar Grid */}
      <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-16 lg:mb-20 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Left 8 Columns: Header + Body Content */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <CareerHeader career={career} />
              <CareerContent career={career} />
            </div>

            {/* Right 4 Columns: Sidebar */}
            <div className="lg:col-span-4">
              <CareerSidebar
                career={career}
                sidebarData={sidebarData}
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
