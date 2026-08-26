"use client";

import React from "react";
import Image from "next/image";
import { Building, MapPin, UserCheck, LucideIcon } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { OfficeSectionData, GlobalLawData } from "@/types/law";

const defaultOfficeSectionData = (rawLawData as GlobalLawData).officeSection;

const iconMap: Record<string, LucideIcon> = {
  Building,
  MapPin,
  UserCheck,
};

export interface OfficesecProps {
  data?: OfficeSectionData;
}

export function Officesec({ data = defaultOfficeSectionData }: OfficesecProps) {
  if (!data) return null;

  const { tagline, heading, description, stats, quote, image } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white  mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Description & Stats */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tagline */}
            {tagline && (
              <div className="flex items-center gap-3">
                <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                  {tagline}
                </span>
                <span className="w-12 h-[1px] bg-[#D4A359]/60" />
              </div>
            )}

            {/* Main Heading matching site standard typography */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
              {heading?.line1 || "Multiple Offices."} <br />
              <span className="text-white font-medium">{heading?.line2 || "One Commitment."}</span>
            </h2>

            {/* Gold Accent Divider */}
            <div className="w-12 h-[2px] bg-[#D4A359] mb-5 relative flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 absolute" />
            </div>

            {/* Description */}
            {description && (
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                {description}
              </p>
            )}

            {/* 3 Stat Items Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              {stats &&
                stats.map((stat, idx) => {
                  const IconComponent = iconMap[stat.icon] || Building;

                  return (
                    <React.Fragment key={stat.id}>
                      <div className="flex items-center gap-3">
                        {/* Icon Box */}
                        <div className="w-13 h-13 rounded-xl border border-[#D4A359]/50 bg-[#070B12] flex items-center justify-center text-[#D4A359] shrink-0 shadow-md">
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        {/* Value & Label */}
                        <div>
                          <span className="font-serif font-bold text-white text-xl sm:text-2xl block leading-none">
                            {stat.value}
                          </span>
                          <span className="text-slate-400 text-xs sm:text-sm font-medium mt-1 block">
                            {stat.label}
                          </span>
                        </div>
                      </div>

                      {/* Vertical Divider line between stats */}
                      {idx < stats.length - 1 && (
                        <span className="w-[1px] h-8 bg-slate-800 hidden sm:block" />
                      )}
                    </React.Fragment>
                  );
                })}
            </div>

          </div>

          {/* Right Column: Quote Feature Card with Lady Justice Statue Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-slate-800/80 bg-[#070A11] p-8 sm:p-10 overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between group hover:border-[#D4A359]/40 transition-all duration-300">
              
              {/* Background Image of Lady Justice statue & Law Books */}
              <Image
                src={image && image !== "/about.svg" ? image : "/testinomial.svg"}
                alt="Delivering excellence across India"
                fill
                className="object-cover object-right opacity-45 transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A11] via-[#070A11]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />

              {/* Quote Content */}
              <div className="relative">
                {/* Gold Quote Mark */}
                <div className="text-[#D4A359] text-5xl sm:text-6xl font-serif leading-none">
                  “
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-white text-2xl leading-relaxed max-w-[320px] sm:max-w-[350px]">
                  {quote || "Delivering excellence in legal advice and representation across India."}
                </p>

                {/* Gold Underline Accent */}
                <div className="w-12 h-[2px] bg-[#D4A359] mt-6 sm:mt-8" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Officesec;
