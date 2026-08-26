"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, PenTool } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import rawLawData from "@/app/data/lawData.json";
import { MediaSectionData, GlobalLawData } from "@/types/law";

const defaultMediaSectionData = (rawLawData as GlobalLawData).mediaSection;

export interface MediasecProps {
  data?: MediaSectionData;
}

export function Mediasec({ data = defaultMediaSectionData }: MediasecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Centered Header Section matching blog & legal section design */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
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
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading?.line1 || "Veritas in the"}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight || "News"}</span>
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* 6 Media Coverage Cards Grid (2 columns on lg screens, 3 rows total) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {items &&
            items.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 sm:p-7 overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center sm:items-stretch gap-6 justify-between"
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
              </div>
            ))}
        </div>

        {/* Reusable Pagination Component */}
        <Pagination currentPage={1} totalPages={8} />
      </div>
    </section>
  );
}

export default Mediasec;
