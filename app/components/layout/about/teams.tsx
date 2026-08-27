"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { TeamData, GlobalLawData } from "@/types/law";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultTeamData = (rawLawData as GlobalLawData).team;

export interface TeamProps {
  data?: TeamData;
}

export function Team({ data = defaultTeamData }: TeamProps) {
  if (!data) return null;

  const { tagline, heading, members } = data;

  return (
    <section className="relative w-full text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-4xl mx-auto mb-8 sm:mb-8 md:mb-10">
          
          {/* Overlapping Circles Tagline Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="flex -space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
            </div>
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline}
            </span>
          </div>

          {/* Main Heading matching About section typography */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight">
            <span className="block text-white font-medium mb-1">{heading.line1}</span>
            <span className="block text-white font-medium">
              {heading.line2Prefix || ""}
              <span className="text-[#D4A359] italic font-serif font-medium">
                {heading.highlight}
              </span>
            </span>
          </h2>
        </FadeIn>

        {/* 4 Team Member Cards Grid */}
        <StaggerContainer staggerChildren={0.12} delayChildren={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
          {members &&
            members.map((member) => (
              <StaggerItem key={member.id}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-[#0E131C] border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-[#D4A359]/60 hover:bg-[#121824] transition-colors duration-300 flex flex-col cursor-pointer h-full"
                >
                  <Link href={member.linkHref || `/team/${member.id}`} className="flex flex-col h-full w-full">
                    {/* Member Portrait Image */}
                    <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[340px] overflow-hidden bg-slate-900">
                      <Image
                        src={member.image || "/casestudy1.svg"}
                        alt={member.name}
                        fill
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle Dark Gradient Overlay at bottom of image */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0E131C] to-transparent opacity-80" />
                    </div>

                    {/* Member Info Card Body */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                      <div>
                        {/* Role Title */}
                        <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide mb-2 group-hover:text-slate-300 transition-colors">
                          {member.role}
                        </p>

                        {/* Gold Underline Accent */}
                        <div className="w-8 h-[1.5px] bg-[#D4A359]/50 mb-4 group-hover:w-14 group-hover:bg-[#D4A359] transition-all duration-300" />
                      </div>

                      {/* Name and Top-Right Arrow */}
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif font-semibold text-white text-lg sm:text-xl group-hover:text-[#D4A359] transition-colors">
                          {member.name}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-[#D4A359] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.5]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default Team;
