"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Handshake,
  ShieldCheck,
  FileText,
  Building2,
  Users,
  Briefcase,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { ServiceSectionData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultServiceSectionData = lawData.categories.Veritas.sections.Services?.variants?.VeritasServices1?.serviceSection;

const iconMap: Record<string, LucideIcon> = {
  scale: Scale,
  handshake: Handshake,
  shield: ShieldCheck,
  "file-text": FileText,
  building: Building2,
  users: Users,
  briefcase: Briefcase,
};

export interface ServicesecProps {
  data?: ServiceSectionData;
}

export function Servicesec({ data = defaultServiceSectionData }: ServicesecProps) {
  if (!data) return null;

  const { tagline, heading, description, items } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">

        
        {/* Top Centered Header */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Tagline Badge matching whychooseus & approachsec */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4A359]/60" />
            <Scale className="w-4 h-4 text-[#D4A359] shrink-0" />
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline}
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading matching whychooseus.tsx */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
            {heading?.line1}{" "}
            {heading?.line2Prefix && <span>{heading.line2Prefix}</span>}
            <span className="text-[#D4A359] italic font-serif font-medium">
              {heading?.highlight}
            </span>
          </h2>

          {/* Subtitle / Description */}
          {description && (
            <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </FadeIn>

        {/* 8 Cards Grid (4 columns on lg screens) */}
        <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items &&
            items.map((item: any) => {
              const IconComponent = iconMap[item.icon] || Scale;

              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl flex flex-col justify-between h-full cursor-pointer"
                  >
                    <div>
                      {/* Top Image & Badge Wrapper */}
                      <div className="relative w-full h-[190px]">
                        {/* Image Container with overflow-hidden for hover zoom */}
                        <div className="relative w-full h-full overflow-hidden bg-slate-900">
                          <Image
                            src={item.image || "/subbanner.svg"}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Floating Gold Circle Icon Badge (outside overflow-hidden so it is unclipped) */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4A359] bg-[#0A0E17] flex items-center justify-center text-[#D4A359] absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 shadow-xl transition-transform duration-300"
                        >
                          <IconComponent className="w-6 h-6 stroke-[1.75]" />
                        </motion.div>
                      </div>

                      {/* Card Content Body */}
                      <div className="pt-10 pb-4 px-5 text-center">
                        {/* Card Title */}
                        <Link href={item.link || `/service/${item.id}`}>
                          <h3 className="font-serif font-semibold text-white text-lg sm:text-xl text-center mb-2.5 group-hover:text-[#D4A359] transition-colors cursor-pointer">
                            {item.title}
                          </h3>
                        </Link>

                        {/* Card Description */}
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-center min-h-[44px]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <div className="pb-6 pt-2 px-5 text-center">
                      <Link
                        href={item.link || `/service/${item.id}`}
                        className="inline-flex items-center justify-center gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
        </StaggerContainer>
    </section>
  );
}

export default Servicesec;
