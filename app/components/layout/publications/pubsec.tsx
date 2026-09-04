"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import lawData from "@/app/data/lawData-restructured.json";

import { PublicationSectionData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultPublicationSectionData = lawData.categories.Veritas.sections.Publications?.variants?.VeritasPublications1?.publicationsSection;

export interface PubsecProps {
  data?: PublicationSectionData;
}

export function Pubsec({ data = defaultPublicationSectionData }: PubsecProps) {
  if (!data) return null;

  const { title, description, items = [] } = data;
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const sectionElement = document.getElementById("pub-section-header");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
 
        
        {/* Top Left Header Section matching reference screenshot */}
        <FadeIn id="pub-section-header" direction="up" delay={0.1} className="text-left max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          {/* Main Heading matching site typography standard */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-3">
            {title || "Publications"}
          </h2>

          {/* Gold Accent Line */}
          <div className="w-12 h-[2px] bg-[#D4A359] mb-4 flex items-center">
            <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 mx-auto" />
          </div>

          {/* Header Description */}
          {description && (
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </FadeIn>

        {/* 6 Publications Cards Grid (3 columns on md/lg screens, 2 rows total) */}
        <StaggerContainer key={currentPage} staggerChildren={0.12} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems &&
            displayedItems.map((item: any) => (
              <StaggerItem key={item.id}>
                <Link
                  href={item.link || "/publications"}
                  className="block h-full"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-5 sm:p-6 overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl flex flex-col sm:flex-row items-stretch gap-5 h-full cursor-pointer"
                  >
                    {/* Left Image Column */}
                    <div
                      className="block relative w-full sm:w-[140px] h-[180px] sm:h-auto rounded-xl overflow-hidden bg-slate-900 shrink-0 min-h-[160px]"
                    >
                      <Image src={item.image || "/service3.svg"}
                        alt={item.title}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Right Details Column */}
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        {/* Meta Row: Date & Category */}
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase mb-2">
                          <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                          <span className="text-slate-400">{item.date}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-[#D4A359]">{item.category}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-semibold text-white text-base sm:text-lg mb-2 group-hover:text-[#D4A359] transition-colors leading-snug line-clamp-3">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 min-h-[48px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Read More Action Link */}
                      <div>
                        <div
                          className="inline-flex items-center gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all group-hover:underline mt-auto"
                        >
                          <span>{(data as any).buttonText || (item as any).linkText || ""}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
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
    </section>
  );
}

export default Pubsec;
