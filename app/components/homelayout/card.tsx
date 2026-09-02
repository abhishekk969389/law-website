"use client";

import React from "react";
import { UserCheck, ShieldCheck, Gavel, Landmark, LucideIcon } from "lucide-react";
import { FeatureItem, GlobalLawData } from "@/types/law";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { StaggerContainer, StaggerItem, FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultFeatures: FeatureItem[] = getSectionData('Features', 'VeritasFeatures1')?.features || [];

interface CardProps {
  data?: FeatureItem[];
}

const iconMap: Record<string, LucideIcon> = {
  user: UserCheck,
  shield: ShieldCheck,
  gavel: Gavel,
  landmark: Landmark,
};

export default function Card({ data = defaultFeatures }: CardProps) {
  return (
    <FadeIn delay={0.2} duration={0.6} className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-10 sm:-mt-12 md:-mt-14">
      <div className="bg-[#0B0E14]/95 backdrop-blur-md border border-[#D4A359]/30 rounded-3xl lg:rounded-full px-6 py-6 lg:px-8 lg:py-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <StaggerContainer staggerChildren={0.1} delayChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon.toLowerCase()] || UserCheck;

            return (
              <StaggerItem key={item.id || index}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 lg:px-6 lg:first:pl-2 lg:last:pr-2 relative group cursor-pointer"
                >
                  {/* Vertical Divider for desktop */}
                  {index < data.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-800/80" />
                  )}

                  {/* Icon Wrapper */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full bg-[#131C1B] border border-[#1F302D] group-hover:border-[#D4A359]/60 flex items-center justify-center shrink-0 shadow-inner"
                  >
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-[#D4A359] transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-white font-semibold text-sm lg:text-base tracking-tight mb-0.5 group-hover:text-[#D4A359] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs lg:text-[13px] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </FadeIn>
  );
}
