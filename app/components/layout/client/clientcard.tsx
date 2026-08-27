"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  Layers,
  Shield,
  Download,
  Bookmark,
  Video,
  Bell,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { ClientResourceSectionData, GlobalLawData } from "@/types/law";
import { StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultClientCardsData = (rawLawData as GlobalLawData).clientCards;

const iconMap: Record<string, LucideIcon> = {
  FileText,
  BookOpen,
  Layers,
  Shield,
  Download,
  Bookmark,
  Video,
  Bell,
};

export interface ClientcardProps {
  data?: ClientResourceSectionData;
}

export function Clientcard({ data = defaultClientCardsData }: ClientcardProps) {
  if (!data) return null;

  const { items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white  mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 8 Client Resource Cards Grid (4 columns on lg screens, 2 rows total) */}
        <StaggerContainer staggerChildren={0.1} delayChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items &&
            items.map((item) => {
              const IconComponent = iconMap[item.icon] || FileText;

              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 sm:p-7 flex flex-col justify-between hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[250px] cursor-pointer h-full"
                  >
                    {/* Top Circle Icon Container */}
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4A359]/60 flex items-center justify-center mb-5 bg-[#070B12] shrink-0 shadow-[0_0_12px_rgba(212,163,89,0.12)]"
                      >
                        <IconComponent className="w-6 h-6 text-[#D4A359]" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-serif font-semibold text-white text-lg sm:text-xl mb-2 group-hover:text-[#D4A359] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div>
                      <Link
                        href={item.link || "/client"}
                        className="inline-flex items-center gap-2 text-[#D4A359] text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all hover:underline mt-auto"
                      >
                        <span>{item.actionText}</span>
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

export default Clientcard;
