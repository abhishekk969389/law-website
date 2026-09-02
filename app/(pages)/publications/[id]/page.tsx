import SubBanner from "@/app/components/ui/subbanner";
import PublicationHero from "@/app/components/layout/publicationsdetails/publicationhero";
import PublicationContent from "@/app/components/layout/publicationsdetails/publicationcontent";
import PublicationSidebar from "@/app/components/layout/publicationsdetails/publicationsidebar";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData, PublicationDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getPublicationByIdOrSlug(id: string): PublicationDetailItem | undefined {
  const globalData = ({}) as unknown as GlobalLawData;
  const publications = (lawData.categories.Veritas.sections.PublicationDetail?.variants?.VeritasPublicationDetail1?.publicationDetails || []) as PublicationDetailItem[] | undefined;

  if (!id || !publications || !Array.isArray(publications)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return publications.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllPublicationIds(): string[] {
  const globalData = ({}) as unknown as GlobalLawData;
  const publications = (lawData.categories.Veritas.sections.PublicationDetail?.variants?.VeritasPublicationDetail1?.publicationDetails || []) as PublicationDetailItem[] | undefined;

  if (!publications || !Array.isArray(publications)) return [];

  const paramsList: string[] = [];
  publications.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllPublicationIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const publication = getPublicationByIdOrSlug(resolvedParams.id);

  if (!publication) {
    return {
      title: "Publication Details | Veritas Law Partners",
      description: "Explore legal insights and published articles.",
    };
  }

  return {
    title: `${publication.title} | Veritas Law Partners`,
    description: publication.excerpt || `${publication.title} - Publication by Veritas Law Partners.`,
  };
}

export default async function PublicationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const publication = getPublicationByIdOrSlug(resolvedParams.id);

  if (!publication) {
    notFound();
  }

  const globalData = ({}) as unknown as GlobalLawData;
  const baseSubBanner = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.publicationsSubBanner;

  // Max 3 words for banner title
  const words = publication.title ? publication.title.trim().split(/\s+/) : [];
  const bannerHeading =
    publication.shortTitle ||
    publication.bannerTitle ||
    (words.length <= 3 ? publication.title : words.slice(0, 3).join(" "));

  const subBannerData = {
    title: bannerHeading,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Publications", href: "/publications" },
      { label: bannerHeading, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  const sidebarData = publication.sidebarData || lawData.categories.Veritas.sections.Publications?.variants?.VeritasPublications1?.publicationSidebar;

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      {/* SubBanner Header */}
      <SubBanner data={subBannerData} />

      {/* Main Content & Sidebar Grid */}
      <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-16 lg:mb-20 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
  
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <PublicationHero publication={publication} />
              <PublicationContent publication={publication} />
            </div>

            {/* Right 4 Columns: Sidebar */}
            <div className="lg:col-span-4">
              <PublicationSidebar
                currentId={publication.id}
                sidebarData={sidebarData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
