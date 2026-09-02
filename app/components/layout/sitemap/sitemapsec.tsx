"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  Landmark,
  Briefcase,
  Users,
  Gavel,
  Lightbulb,
  Megaphone,
  Trophy,
  Folder,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { SitemapSectionData, GlobalLawData } from "@/types/law";

const defaultSitemapSectionData = lawData.categories.Veritas.sections.Sitemap?.variants?.VeritasSitemap1?.sitemapSection;

export interface SitemapsecProps {
  data?: SitemapSectionData;
}

export function Sitemapsec({ data = defaultSitemapSectionData }: SitemapsecProps) {
  if (!data) return null;

  const { tagline, heading, categories } = data;

  const getCategoryIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case "landmark":
        return <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "briefcase":
        return <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "users":
        return <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "gavel":
        return <Gavel className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "lightbulb":
        return <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "megaphone":
        return <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "trophy":
        return <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      case "folder":
        return <Folder className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
      default:
        return <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />;
    }
  };

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Tagline & Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#D4A359]" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline || "EXPLORE"}
              </span>
            </div>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading?.line1 || "Explore"}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight || ""}</span>
          </h2>
        </div>

        {/* 8 Category Cards Grid with Top Floating Overlapping Badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 sm:gap-y-16 mt-12 sm:mt-16">
          {categories &&
            categories.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-[22px] border border-slate-800/80 bg-[#070A11] p-6 sm:p-7 pb-8 text-center hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col items-center hover:translate-y-[-4px]"
              >
                {/* Overlapping Floating Circle Badge at Top Border */}
                <div className="-mt-12 sm:-mt-14 mb-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#D4A359] bg-[#070A11] flex items-center justify-center text-[#D4A359] shadow-[0_0_18px_rgba(212,163,89,0.25)] shrink-0 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(card.icon)}
                </div>

                {/* Category Title */}
                <h3 className="font-semibold text-white text-base sm:text-lg tracking-wider uppercase mb-3">
                  {card.title}
                </h3>

                {/* Gold Underline Accent */}
                <div className="sm:w-38 h-[1px] bg-[#D4A359] mb-6 mx-auto" />

                {/* Bulleted Links List */}
                <ul className="space-y-3.5 text-left w-full pl-1 sm:pl-2">
                  {card.links &&
                    card.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 text-slate-300 hover:text-[#D4A359] text-xs sm:text-sm font-medium transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#D4A359] shrink-0" />
                          <span className="hover:underline leading-snug">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default Sitemapsec;
