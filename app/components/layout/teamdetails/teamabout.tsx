"use client";

import React from "react";
import { User } from "lucide-react";
import { TeamAboutData, TeamDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

export interface TeamAboutProps {
  data?: TeamAboutData;
  member?: TeamDetailItem;
}

export function TeamAbout({ data, member }: TeamAboutProps) {
  const aboutData = data || member?.aboutMe;

  if (
    !aboutData ||
    !aboutData.paragraphs ||
    aboutData.paragraphs.length === 0
  ) {
    return null;
  }

  const { title = "About Me", paragraphs } = aboutData;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white select-none px-4 sm:px-6 lg:px-8">
      <FadeIn direction="up" delay={0.1}>
        <div className="bg-[#070A11] border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex gap-5 sm:gap-8 items-stretch">
          {}
          <div className="w-[2.5px] bg-[#D4A359] shrink-0 rounded-full" />

          {}
          <div className="flex-1 space-y-6">
            {}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full border border-[#D4A359] text-[#D4A359] flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight">
                  {title}
                </h2>
              </div>
              {}
              <div className="w-12 h-[2px] bg-[#D4A359] ml-16" />
            </div>

            {}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-5xl">
              {paragraphs.map((paragraph: any, index: any) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default TeamAbout;
