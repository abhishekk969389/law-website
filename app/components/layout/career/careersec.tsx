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
import lawData from "@/app/data/lawData-restructured.json";

import { CareerSectionData, GlobalLawData } from "@/app/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultCareerSectionData =
  lawData.categories.Veritas.sections.Careers?.variants?.VeritasCareers1
    ?.careerSection;

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
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      {}
      <FadeIn
        direction="up"
        delay={0.1}
        className="text-center md:text-left max-w-3xl mb-4 sm:mb-5 flex flex-col items-center md:items-start"
      >
        {}
        <h2 className="font-serif text-2xl sm:text-2xl md:text-4xl leading-[1.15] tracking-tight text-white mb-3 text-center md:text-left">
          {title || "Open Positions"}
        </h2>

        {}
        {description && (
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl text-center md:text-left">
            {description}
          </p>
        )}
      </FadeIn>

      {}
      <StaggerContainer
        staggerChildren={0.1}
        delayChildren={0.2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {items &&
          items.map((item: any) => {
            const IconComponent = iconMap[item.icon] || Scale;

            return (
              <StaggerItem key={item.id}>
                <Link
                  href={
                    item.link ||
                    (item.slug ? `/career/${item.slug}` : `/career/${item.id}`)
                  }
                  className="block h-full"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-5 sm:p-7 overflow-hidden hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl flex flex-col justify-start sm:justify-between min-h-0 sm:min-h-[300px] cursor-pointer h-full"
                  >
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2.5 py-1 sm:px-3 sm:py-1 rounded-md border border-[#D4A359]/60 text-[#D4A359] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#070B12]/80 z-10">
                      {item.badge || "Full Time"}
                    </div>

                    <div>
                      <div className="flex items-start gap-3.5 sm:gap-4 mb-3 sm:mb-4 pr-14 sm:pr-16">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl border border-slate-800 bg-[#060911] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359]/50 transition-colors">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-serif font-semibold text-white text-base sm:text-xl group-hover:text-[#D4A359] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5 mb-4 sm:my-4 flex-1 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-0 sm:pt-2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#B87B1D]/50 text-white text-xs sm:text-sm font-semibold transition-all duration-200 w-fit shadow-md group-hover:bg-[#D4A359] group-hover:text-[#0A0E17]">
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
      </StaggerContainer>
    </section>
  );
}

export default Careersec;
