"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ChevronRight, PenTool } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import lawData from "@/app/data/lawData-restructured.json";

import { EventSectionData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultEventSectionData = lawData.categories.Veritas.sections.Events?.variants?.VeritasEvents1?.eventSection;

export interface EventsecProps {
  data?: EventSectionData;
}

export function Eventsec({ data = defaultEventSectionData }: EventsecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
   
        
        {/* Top Centered Header Section matching site design */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Top Tagline with Pen Icon */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <div className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-[#D4A359]" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline || "UPCOMING EVENTS"}
              </span>
            </div>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading?.line1 || "Legal Events &"}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight || "Webinars"}</span>
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
              {subheading}
            </p>
          )}
        </FadeIn>

        {/* 6 Event Cards Grid (2 columns on lg screens, 3 rows total) */}
        <StaggerContainer staggerChildren={0.12} delayChildren={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {items &&
            items.map((item: any) => (
              <StaggerItem key={item.id}>
                <Link
                  href={item.link || `/event/${item.slug || item.id}`}
                  className="block h-full"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl grid grid-cols-1 sm:grid-cols-12 min-h-[220px] cursor-pointer h-full"
                  >
                    {/* Left Image & Badges Overlay Container */}
                    <div className="relative sm:col-span-5 w-full h-[220px] sm:h-full overflow-hidden bg-slate-900 min-h-[200px]">
                      <Image src={item.image || "/service3.svg"}
                        alt={item.title}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Top-Left Category Badge */}
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#070B12]/85 backdrop-blur-md border border-slate-700/60 text-white font-bold text-[10px] uppercase tracking-wider rounded">
                        {item.badge}
                      </div>

                      {/* Bottom-Left Date Overlay Badge */}
                      <div className="absolute bottom-3 left-3 z-10 w-14 h-16 bg-[#070B12]/90 backdrop-blur-md border border-[#D4A359]/60 rounded-lg flex flex-col items-center justify-center text-center p-1 shadow-lg">
                        <span className="text-xl font-bold text-white font-serif leading-none">
                          {item.day}
                        </span>
                        <span className="text-[10px] font-bold text-[#D4A359] uppercase tracking-wider leading-tight mt-0.5">
                          {item.month}
                        </span>
                        <span className="text-[9px] font-semibold text-slate-400 leading-none">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Right Content Details Container */}
                    <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between text-left">
                      <div>
                        {/* Title */}
                        <h3 className="font-serif font-semibold text-white text-lg sm:text-xl mb-2.5 group-hover:text-[#D4A359] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Gold Line Divider */}
                        <div className="w-8 h-[1.5px] bg-[#D4A359]/80 mb-3.5" />

                        {/* Date & Time Row */}
                        <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium mb-2">
                          <Calendar className="w-4 h-4 text-[#D4A359] shrink-0" />
                          <span>{item.fullDate} | {item.time}</span>
                        </div>

                        {/* Location Row */}
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium mb-5">
                          <MapPin className="w-4 h-4 text-[#D4A359] shrink-0" />
                          <span className="line-clamp-1">{item.location}</span>
                        </div>
                      </div>

                      {/* View Details Action Link Button */}
                      <div>
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D4A359]/60 bg-transparent text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:bg-[#D4A359] group-hover:text-[#0A0E17] transition-all"
                        >
                          <span>VIEW DETAILS</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
        </StaggerContainer>
    </section>
  );
}

export default Eventsec;
