import SubBanner from "@/app/components/ui/subbanner";
import IndustryMain from "@/app/components/layout/industrydetails/industrymain";
import IndustrySidebar from "@/app/components/layout/industrydetails/industrysidebar";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData, IndustryDetailItem } from "@/app/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getIndustryByIdOrSlug(id: string): IndustryDetailItem | undefined {
  const globalData = ({}) as unknown as GlobalLawData;
  const industryDetails = (lawData.categories.Veritas.sections.IndustryDetail?.variants?.VeritasIndustryDetail1?.industryDetails || []) as IndustryDetailItem[] | undefined;

  if (!id || !industryDetails || !Array.isArray(industryDetails)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return industryDetails.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllIndustryIds(): string[] {
  const globalData = ({}) as unknown as GlobalLawData;
  const industryDetails = (lawData.categories.Veritas.sections.IndustryDetail?.variants?.VeritasIndustryDetail1?.industryDetails || []) as IndustryDetailItem[] | undefined;

  if (!industryDetails || !Array.isArray(industryDetails)) return [];

  const paramsList: string[] = [];
  industryDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllIndustryIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = getIndustryByIdOrSlug(resolvedParams.id);

  if (!industry) {
    return {
      title: "Industry Details | Veritas Law Partners",
      description: "Specialized legal services across key business sectors.",
    };
  }

  return {
    title: `${industry.title} - Industries | Veritas Law Partners`,
    description: industry.introText || `${industry.title} legal counsel and services at Veritas Law Partners.`,
  };
}

export default async function IndustryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const industry = getIndustryByIdOrSlug(resolvedParams.id);

  if (!industry) {
    notFound();
  }

  const globalData = ({}) as unknown as GlobalLawData;
  const allIndustries = ((lawData.categories.Veritas.sections.IndustryDetail?.variants?.VeritasIndustryDetail1?.industryDetails || []) || []) as IndustryDetailItem[];
  const baseSubBanner = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.industriesSubBanner;

  const subBannerData = {
    title: industry.title,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: industry.title, isActive: true },
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
              <IndustryMain industry={industry} />
            </div>
            <div className="lg:col-span-4">
              <IndustrySidebar
                currentId={industry.id}
                allIndustries={allIndustries}
                sidebarData={industry.sidebarData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
