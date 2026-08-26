"use client";

import React from "react";
import rawLawData from "@/app/data/lawData.json";
import { LegalDisclaimerSectionData, GlobalLawData } from "@/types/law";

const defaultLegalDisclaimerSectionData = (rawLawData as GlobalLawData).legalDisclaimerSection;

export interface SectionProps {
  data?: LegalDisclaimerSectionData;
}

export function Section({ data = defaultLegalDisclaimerSectionData }: SectionProps) {
  if (!data || !data.topics) return null;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {data.topics.map((topic) => (
          <div key={topic.id} className="space-y-3 sm:space-y-4">
            {/* Topic Title */}
            <h3 className="font-serif text-[#D4A359] text-justify text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight">
              {topic.title}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {topic.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
