"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  Gavel,
  FileText,
  Users,
  BookOpen,
  ShieldCheck,
  MapPin,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { CareerSectionData, GlobalLawData } from "@/types/law";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultCareerSectionData = (rawLawData as GlobalLawData).careerSection;

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Gavel,
  FileText,
  Users,
  BookOpen,
  ShieldCheck,
};

export interface CareersecProps {
  data?: CareerSectionData;
}

export function Careersec({ data = defaultCareerSectionData }: CareersecProps) {
  if (!data) return null;

  const { title, description, items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Left Header Section matching site typography standard */}
        <FadeIn direction="up" delay={0.1} className="text-left max-w-3xl mb-4 sm:mb-5">
          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-4xl leading-[1.15] tracking-tight text-white mb-3">
            {title || "Open Positions"}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </FadeIn>

        {/* 6 Job Position Cards Grid (3 columns on md/lg screens, 2 rows total) */}
        <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items &&
            items.map((item) => {
              const IconComponent = iconMap[item.icon] || Scale;

              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 sm:p-7 overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl flex flex-col justify-between min-h-[300px] cursor-pointer h-full"
                  >
                    {/* Top-Right Employment Type Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-md border border-[#D4A359]/60 text-[#D4A359] text-[11px] font-semibold uppercase tracking-wider bg-[#070B12]/80">
                      {item.badge || "Full Time"}
                    </div>

                    <div>
                      {/* Header Row: Left Icon Box + Title & Location */}
                      {/* Header Row: Left Icon Box + Title & Location */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon Box */}
                        <Link
                          href={item.link || (item.slug ? `/career/${item.slug}` : `/career/${item.id}`)}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-800 bg-[#060911] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359]/50 transition-colors"
                        >
                          <IconComponent className="w-6 h-6 text-[#D4A359]" />
                        </Link>

                        {/* Title & Location */}
                        <div>
                          <h3 className="font-serif font-semibold text-white text-lg sm:text-xl group-hover:text-[#D4A359] transition-colors leading-snug pr-16">
                            <Link href={item.link || (item.slug ? `/career/${item.slug}` : `/career/${item.id}`)}>
                              {item.title}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#D4A359]" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description Excerpt */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed my-4 flex-1 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Apply Now Button */}
                    <div className="pt-2">
                      <Link
                        href={item.link || (item.slug ? `/career/${item.slug}` : `/career/${item.id}`)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B87B1D]/50 hover:bg-[#C88A23] text-white text-xs sm:text-sm font-semibold transition-all duration-200 w-fit cursor-pointer shadow-md group-hover:bg-[#D4A359] group-hover:text-[#0A0E17]"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </motion.div>
                </StaggerItem>
              );
            })}
        </StaggerContainer>

      </div>
    </section>
  );
}

export default Careersec;
