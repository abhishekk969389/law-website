"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, PenTool } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { MediaSectionData, GlobalLawData } from "@/types/law";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultMediaSectionData = getSectionData('Media', 'VeritasMedia1')?.mediaSection;

export interface MediasecProps {
  data?: MediaSectionData;
}

export function Mediasec({ data = defaultMediaSectionData }: MediasecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items = [] } = data;
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const sectionElement = document.getElementById("media-section-header");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Centered Header Section matching blog & legal section design */}
        <FadeIn id="media-section-header" direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Top Tagline with Pen Icon */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <div className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-[#D4A359]" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline || "MEDIA & PRESS"}
              </span>
            </div>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading?.line1 || "Veritas in the"}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight || "News"}</span>
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
              {subheading}
            </p>
          )}
        </FadeIn>

        {/* Media Coverage Cards Grid (2 columns on lg screens) */}
        <StaggerContainer key={currentPage} staggerChildren={0.12} delayChildren={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayedItems &&
            displayedItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 sm:p-7 overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl flex flex-col sm:flex-row items-center sm:items-stretch gap-6 justify-between h-full cursor-pointer"
                >
                  {/* Left Side: Media Outlet SVG Logo Container (Enlarged) */}
                  <div className="w-[190px] sm:w-[220px] h-[115px] sm:h-[125px] shrink-0 bg-transparent flex items-center justify-center p-2">
                    <Image
                      src={item.logo || "/subbanner.svg"}
                      alt={item.title}
                      width={220}
                      height={125}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Middle Vertical Divider Line matching reference screenshot */}
                  <div className="hidden sm:block w-[1px] bg-slate-800/80 self-stretch my-1 shrink-0" />

                  {/* Right Side: Article Details & Action Link */}
                  <div className="flex flex-col justify-between flex-1 text-left">
                    <div>
                      {/* Article Title */}
                      <h3 className="font-serif font-semibold text-white text-lg sm:text-xl mb-3 group-hover:text-[#D4A359] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Date Details */}
                      <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4 text-[#D4A359]" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div>
                      <Link
                        href={item.link || "/media"}
                        className="inline-flex items-center gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
        </StaggerContainer>

        {/* Reusable Pagination Component */}
        {totalPages > 1 && (
          <FadeIn direction="up" delay={0.4}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default Mediasec;
