"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Folder, ArrowUpRight, ArrowRight } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { CaseStudySectionData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultCaseStudySectionData = lawData.categories.Veritas.sections.CaseStudy?.variants?.VeritasCaseStudy1?.caseStudySection;

export interface CasestudysecProps {
  data?: CaseStudySectionData;
}

export function Casestudysec({ data = defaultCaseStudySectionData }: CasestudysecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
        
        {/* Header Section matching homelayout/casestudy.tsx */}
        <FadeIn direction="up" delay={0.1} className="max-w-3xl mb-10 sm:mb-12">
          {/* Tag Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Folder className="w-4 h-4 text-[#D4A359]" />
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline}
            </span>
            <span className="w-12 h-[1px] bg-[#D4A359]/60 ml-1" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
            <span className="font-medium">{heading?.line1}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight}</span>{" "}
            <span className="font-medium">{heading?.line2}</span>
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {subheading}
            </p>
          )}
        </FadeIn>

        {/* 6 Case Study Cards Grid (3 columns on md/lg screens, 2 rows total) */}
        <StaggerContainer staggerChildren={0.12} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {items &&
            items.map((item: any) => (
              <StaggerItem key={item.id}>
                <Link href={item.linkHref || `/casestudy/${item.id}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col group cursor-pointer h-full"
                  >
                    {/* Image Card Container with Floating Button */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg bg-slate-900">
                      <Image
                        src={item.image || "/casestudy1.svg"}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent opacity-60" />

                      {/* Floating Arrow Badge (Dark Maroon/Brown Button matching homelayout/casestudy) */}
                      <div
                        className="absolute bottom-3.5 right-3.5 w-11 h-11 rounded-xl bg-[#422222]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#D4A359] group-hover:text-[#0B0E14]"
                      >
                        <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Below Image Content Alignment */}
                    <div className="flex items-stretch gap-4 sm:gap-5">
                      {/* Outlined Number matching homelayout/casestudy */}
                      <span
                        className="text-5xl sm:text-6xl lg:text-[64px] font-normal text-transparent leading-none select-none shrink-0 pt-1 tracking-tighter"
                        style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.45)" }}
                      >
                        {item.number}
                      </span>

                      {/* Continuous Vertical Gold Line */}
                      <div className="w-[1.5px] bg-[#D4A359]/70 shrink-0 self-stretch my-1" />

                      {/* Right Stacked Content: Title, Description, Link */}
                      <div className="flex flex-col flex-1 pl-1">
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-white leading-snug mb-3 group-hover:text-[#E3C280] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="mt-auto pt-1">
                          <div
                            className="inline-flex items-center gap-2 text-[#D4A359] text-xs sm:text-sm font-medium hover:text-[#E3C280] transition-colors group/link"
                          >
                            <span>{item.linkText || "View Case Study"}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </div>
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

export default Casestudysec;
