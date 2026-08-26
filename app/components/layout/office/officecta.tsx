"use client";

import React from "react";
import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { OfficeCtaData, GlobalLawData } from "@/types/law";

const defaultOfficeCtaData = (rawLawData as GlobalLawData).officeCta;

export interface OfficectaProps {
  data?: OfficeCtaData;
}

export function Officecta({ data = defaultOfficeCtaData }: OfficectaProps) {
  if (!data) return null;

  const { tagline, title, subtitle, buttonText, buttonLink } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-6 sm:mt-8 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="group relative rounded-xl border border-slate-800/80 bg-[#0A0E17] p-5 sm:p-6 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 hover:border-[#D4A359]/40 transition-all duration-300">
          
          {/* Left Side: Headset Circle Icon + Tagline + Title + Subtitle */}
          <div className="flex mx-8 flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5">
            {/* Gold Headset Circle Icon Box */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#070B12] text-[#D4A359] shrink-0 shadow-[0_0_12px_rgba(212,163,89,0.15)] group-hover:scale-105 transition-transform">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4A359]" />
            </div>

            {/* Content Text */}
            <div>
              {/* Tagline Badge */}
              <span className="text-[#D4A359] text-[11px] sm:text-xs font-semibold tracking-widest uppercase block mb-1">
                {tagline || "NEED ASSISTANCE?"}
              </span>

              {/* Main Title */}
              <h3 className="font-serif font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-snug mb-1">
                {title || "We'll connect you with the right expert."}
              </h3>

              {/* Subtitle Description */}
              {subtitle && (
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Outlined Gold Button */}
          <div className="shrink-0 mx-8 w-full sm:w-auto">
            <Link
              href={buttonLink || "/contact"}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 sm:px-7 rounded-lg border border-[#D4A359]/80 bg-transparent text-[#D4A359] hover:bg-[#D4A359] hover:text-[#0A0E17] text-xs sm:text-sm font-semibold transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              <span>{buttonText || "Contact Us"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Officecta;
