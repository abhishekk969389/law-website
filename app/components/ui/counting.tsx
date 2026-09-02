"use client";

import React from "react";
import { Scale, Briefcase, Users, Award, ShieldCheck, LucideIcon } from "lucide-react";
import { CountingItem, GlobalLawData } from "@/types/law";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultCountingData: CountingItem[] = getSectionData('Counting', 'VeritasCounting1')?.counting || [];

interface CountingProps {
  data?: CountingItem[];
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  scale: Scale,
  scales: Scale,
  briefcase: Briefcase,
  users: Users,
  award: Award,
  shield: ShieldCheck,
};

export default function Counting({ data = defaultCountingData, className = "" }: CountingProps) {
  return (
    <FadeIn delay={0.1} duration={0.6} className={`w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 ${className}`}>
      <div className="w-full bg-[#0E121A]/90 border border-white/10 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <StaggerContainer staggerChildren={0.1} delayChildren={0.15} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon.toLowerCase()] || Scale;

            return (
              <StaggerItem
                key={item.id || index}
                className={`flex flex-col items-center justify-center text-center px-3 py-2 lg:py-1 ${index !== 0 ? "pt-4 md:pt-2 lg:pt-1" : ""
                  }`}
              >
                {/* Icon with Vibrant Gold/Amber Accent */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex flex-col items-center mb-1.5 group cursor-pointer"
                >
                  <div className="text-[#F3A812] transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(243,168,18,0.25)]">
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 stroke-[1.5]" />
                  </div>
                  {/* Underline accent below icon with glow */}
                  <div className="w-6 h-[2px] bg-[#F3A812]/80 mt-1.5 rounded-full shadow-[0_0_6px_rgba(243,168,18,0.5)]" />
                </motion.div>

                {/* Counter Value */}
                <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal text-white tracking-tight leading-none mb-1 mt-0.5">
                  {item.value}
                </div>

                {/* Counter Label */}
                <p className="text-gray-400 text-xs md:text-lg font-light tracking-wide leading-tight">
                  {item.label}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </FadeIn>
  );
}
