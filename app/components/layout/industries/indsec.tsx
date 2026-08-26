"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Building2,
  HardHat,
  Scale,
  ShieldCheck,
  Leaf,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { IndustrySectionData, GlobalLawData } from "@/types/law";

const defaultIndustrySectionData = (rawLawData as GlobalLawData).industrySection;

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  building: Building2,
  construction: HardHat,
  scale: Scale,
  shield: ShieldCheck,
  leaf: Leaf,
};

export interface IndsecProps {
  data?: IndustrySectionData;
}

export function Indsec({ data = defaultIndustrySectionData }: IndsecProps) {
  if (!data) return null;

  const { tagline, heading, description, items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Overlapping Double Gold Circles Tagline Badge matching about.tsx / teamsec.tsx */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="flex items-center -space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
            </div>
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline}
            </span>
          </div>

          {/* Main Heading matching about.tsx typography */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
            <span className="block text-white font-medium mb-1">{heading?.line1}</span>
            <span className="block text-white font-medium">
              {heading?.line2Prefix || ""}
              <span className="text-[#D4A359] italic font-serif font-medium">
                {heading?.highlight}
              </span>
            </span>
          </h2>

          {/* Optional Subtitle / Description */}
          {description && (
            <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* 6 Industry Cards Grid (3 columns on md/lg screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items &&
            items.map((item) => {
              const IconComponent = iconMap[item.icon] || Scale;

              return (
                <div
                  key={item.id}
                  className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Top Image & Left Floating Badge Wrapper */}
                    <div className="relative w-full h-[210px]">
                      {/* Image Container with overflow-hidden for hover zoom */}
                      <div className="relative w-full h-full overflow-hidden bg-slate-900">
                        <Image
                          src={item.image || "/about.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating Gold Circle Icon Badge (aligned left) */}
                      <div className="w-12 h-12 rounded-full border-2 border-[#D4A359] bg-[#0A0E17] flex items-center justify-center text-[#D4A359] absolute -bottom-6 left-6 z-20 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="pt-9 pb-4 px-6 text-left">
                      {/* Card Title */}
                      <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl text-left mb-3 group-hover:text-[#D4A359] transition-colors">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left min-h-[56px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pb-6 pt-2 px-6 text-left">
                    <Link
                      href={item.link || "/industries"}
                      className="inline-flex items-center justify-start gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Indsec;
