"use client";

import Image from "next/image";
import { PenTool } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { AwardSectionData, GlobalLawData } from "@/app/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultAwardSectionData =
  lawData.categories.Veritas.sections.AwardsRecognition?.variants
    ?.VeritasAwardsRecognition1?.awardSection;

export interface AwardsecProps {
  data?: AwardSectionData;
}

export function Awardsec({ data = defaultAwardSectionData }: AwardsecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      { }
      <FadeIn
        direction="up"
        delay={0.1}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        { }
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
          <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <PenTool className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A359] shrink-0" />
            <span className="text-[#D4A359] text-[11px] sm:text-sm md:text-sm lg:text-base font-semibold tracking-widest uppercase whitespace-nowrap">
              {tagline || "AWARDS & RECOGNITION"}
            </span>
          </div>
          <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
        </div>

        { }
        <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
          <span className="text-white font-medium">
            {heading?.line1Prefix || "Honored for"}
          </span>{" "}
          <span className="text-[#D4A359] italic font-serif font-medium">
            {heading?.highlight || "Excellence."}
          </span>{" "}
          <span className="text-white font-medium">
            {heading?.line1Suffix || "Trusted for Results."}
          </span>
        </h2>

        { }
        {subheading && (
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </FadeIn>

      { }
      <StaggerContainer
        staggerChildren={0.1}
        delayChildren={0.2}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {items &&
          items.map((item: any) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 text-center flex flex-col items-center justify-between hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[260px] cursor-pointer h-full"
              >
                { }
                <div className="relative w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] flex items-center justify-center my-auto transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.organization}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>

                { }
                <div className="mt-4">
                  <h3 className="font-sans text-white text-base sm:text-[15px] font-semibold leading-snug group-hover:text-[#D4A359] transition-colors">
                    {item.organization}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-[13px] mt-1.5 font-medium">
                    {item.awardTitle}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
      </StaggerContainer>
    </section>
  );
}

export default Awardsec;
