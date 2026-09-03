import SubBanner from "@/app/components/ui/subbanner";
import Sitemapsec from "@/app/components/layout/sitemap/sitemapsec";
import lawData from "@/app/data/lawData-restructured.json";


export default function SitemapPage() {
  
  
  const sitemapSubBannerData = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.sitemapSubBanner;
  const sitemapSectionData = lawData.categories.Veritas.sections.Sitemap?.variants?.VeritasSitemap1?.sitemapSection;

  return (
    //main section //
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={sitemapSubBannerData} />
      <Sitemapsec data={sitemapSectionData} />
    </main>
  );
}
