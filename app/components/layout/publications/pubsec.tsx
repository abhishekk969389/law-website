"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import rawLawData from "@/app/data/lawData.json";
import { PublicationSectionData, GlobalLawData } from "@/types/law";

const defaultPublicationSectionData = (rawLawData as GlobalLawData).publicationsSection;

export interface PubsecProps {
  data?: PublicationSectionData;
}

export function Pubsec({ data = defaultPublicationSectionData }: PubsecProps) {
  if (!data) return null;

  const { title, description, items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Left Header Section matching reference screenshot */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          {/* Main Heading matching site typography standard */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-3">
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
        </div>

        {/* 6 Publications Cards Grid (3 columns on md/lg screens, 2 rows total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items &&
            items.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-5 sm:p-6 overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-stretch gap-5"
              >
                {/* Left Image Column */}
                <div className="relative w-full sm:w-[140px] h-[180px] sm:h-auto rounded-xl overflow-hidden bg-slate-900 shrink-0 min-h-[160px]">
                  <Image
                    src={item.image || "/service3.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <Link
                      href={item.link || "/publications"}
                      className="inline-flex items-center gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline mt-auto"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Reusable Pagination Component */}
        <Pagination currentPage={1} totalPages={8} />
      </div>
    </section>
  );
}

export default Pubsec;
