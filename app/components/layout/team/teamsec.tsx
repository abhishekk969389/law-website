"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { TeamSectionData, GlobalLawData } from "@/types/law";

const defaultTeamSectionData = (rawLawData as GlobalLawData).teamSection;

export interface TeamsecProps {
  data?: TeamSectionData;
}

export function Teamsec({ data = defaultTeamSectionData }: TeamsecProps) {
  if (!data) return null;

  const { tagline, heading, description, members } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Overlapping Double Gold Circles Tagline Badge matching about.tsx / teams.tsx */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="flex items-center -space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
              <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
            </div>
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline}
            </span>
          </div>

          {/* Main Heading matching about.tsx typography */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
            <span className="block text-white font-medium mb-1">{heading?.line1}</span>
            <span className="block text-white font-medium">
              {heading?.line2Prefix || ""}
              <span className="text-[#D4A359] italic font-serif font-medium">
                {heading?.highlight}
              </span>
            </span>
          </h2>

          {/* Optional Subtitle / Description */}
          {description && (
            <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* 8 Team Members Cards Grid (4 columns on lg screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {members &&
            members.map((member) => {
              return (
                <div
                  key={member.id}
                  className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <Link href={member.link || "/team"} className="block">
                    {/* Top Image Container */}
                    <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden bg-slate-900">
                      <Image
                        src={member.image || "/about.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6 text-left">
                      {/* Member Role */}
                      <span className="text-slate-400 text-xs uppercase tracking-wider font-medium block mb-2">
                        {member.role}
                      </span>

                      {/* Small Gold Underline Accent */}
                      <div className="w-10 h-[1.5px] bg-[#D4A359]/70 mb-3" />

                      {/* Member Name & Arrow Icon */}
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif font-semibold text-white text-lg sm:text-xl group-hover:text-[#D4A359] transition-colors">
                          {member.name}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-[#D4A359] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Teamsec;
